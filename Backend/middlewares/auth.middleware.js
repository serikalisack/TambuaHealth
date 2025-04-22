import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const verifyJWT = asyncHandler(async (req, res, next) => {
  try {
    // Try to get token from cookies first, then from Authorization header
    const token = req.cookies?.accessToken || 
                 req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json(
        new ApiError(401, "Unauthorized: No token provided")
      );
    }

    // Verify the token
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    // Find the user
    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );

    if (!user) {
      return res.status(401).json(
        new ApiError(401, "Unauthorized: Invalid access token")
      );
    }

    // Attach user to request and proceed
    req.user = user;
    next();
  } catch (error) {
    // Handle specific JWT errors
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json(
        new ApiError(401, "Unauthorized: Invalid token")
      );
    }
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json(
        new ApiError(401, "Unauthorized: Token expired")
      );
    }
    
    // Generic error handler
    return res.status(401).json(
      new ApiError(401, error?.message || "Unauthorized access")
    );
  }
});
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import predRouter from "./routes/prediction.routes.js";
import pdfRouter from "./routes/pdf.routes.js";

const app = express();

// Read allowed origins from env or fallback to localhost dev ports
const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(",")
  : ["http://localhost:5173", "http://localhost:5174"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // Allow tools like Postman/cURL
      if (
        allowedOrigins.includes("*") ||
        allowedOrigins.includes(origin)
      ) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "20kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/predict", predRouter);
app.use("/api/pdf", pdfRouter);

export { app };

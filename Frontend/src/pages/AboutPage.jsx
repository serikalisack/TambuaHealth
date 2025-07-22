import React, { useState } from "react";
import "../styles/AboutPage.css"; // Prefer styles folder
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Modal from "react-modal";

import team01 from "../assets/AboutImg/team-01.jpg";

const teamMembers = [
  {
    imgUrl: team01,
    name: "Serikali Isack",
    position: "Machine Learning, Full Stack Web Developer and Mobile App Developer",
    github: "https://github.com/serikalisack",
    linkedin: "https://linkedin.com/in/serikalisack",
    instagram: "https://instagram.com/serikalisack",
  },
];

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%) scale(0.8)",
    maxWidth: "90%",
    maxHeight: "90%",
    overflow: "hidden",
    padding: 0,
    border: "none",
    borderRadius: "12px",
    transition: "all 0.4s ease-in-out",
    opacity: 0,
    boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    transition: "opacity 0.5s ease",
    zIndex: 1000,
  },
};

Modal.setAppElement("#root");

function AboutPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
    setTimeout(() => {
      const modal = document.querySelector(".ReactModal__Content");
      if (modal) {
        modal.style.opacity = 1;
        modal.style.transform = "translate(-50%, -50%) scale(1)";
      }
    }, 50);
  };

  const closeModal = () => {
    const modal = document.querySelector(".ReactModal__Content");
    if (modal) {
      modal.style.opacity = 0;
      modal.style.transform = "translate(-50%, -50%) scale(0.8)";
    }
    setTimeout(() => {
      setModalIsOpen(false);
      setSelectedImage("");
    }, 400);
  };

  return (
    <section className="our__team">
      <div className="container">
        <div className="team__content">
          <h6 className="subtitle">Serikali Development Solutions</h6>
          <h2>
            About <span className="highlight">Me</span>
          </h2>
        </div>

        <div className="team__wrapper">
          {teamMembers.map((member, index) => (
            <div className="team__item" key={index}>
              <div className="team__img" onClick={() => openModal(member.imgUrl)}>
                <img
                  src={member.imgUrl}
                  alt={`Portrait of ${member.name}`}
                  className="clickable-image"
                />
              </div>

              <div className="team__details">
                <h4>{member.name}</h4>
                <p className="description">{member.position}</p>
                <div className="team__member-social">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <FaLinkedin />
                    </a>
                  )}
                  {member.github && (
                    <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <FaGithub />
                    </a>
                  )}
                  {member.instagram && (
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <FaInstagram />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Enlarged Image"
      >
        <img src={selectedImage} alt="Team Member Enlarged" className="modal-image" />
      </Modal>
    </section>
  );
}

export default AboutPage;

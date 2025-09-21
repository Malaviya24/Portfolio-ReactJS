import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactStyles.module.css';

function Contact() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(''); // 'success' or 'error'
  const [modalMessage, setModalMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Your EmailJS credentials
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_em3d9g9';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_np2sdgr';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'FDtBTd7TvZsQVMiBw';

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
          setIsLoading(false);
          setModalType('success');
          setModalMessage('Thanks for your message! I\'ll get back you within 24-48 hours.');
          setShowModal(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsLoading(false);
          setModalType('error');
          setModalMessage('Failed to send message. Please try again or contact me directly.');
          setShowModal(true);
        },
      );
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType('');
    setModalMessage('');
  };

  // Close modal on Escape key
  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && showModal) {
      closeModal();
    }
  };

  // Add event listener for Escape key
  useEffect(() => {
    if (showModal) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="name"
            placeholder="Name"
            required
            disabled={isLoading}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="email"
            placeholder="Email"
            required
            disabled={isLoading}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
            disabled={isLoading}></textarea>
        </div>
        <input 
          className="hover btn" 
          type="submit" 
          value={isLoading ? "Sending..." : "Submit"}
          disabled={isLoading}
        />
      </form>

      {/* Modal Popup */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={`${styles.modalIcon} ${styles[modalType]}`}>
              {modalType === 'success' ? '✓' : '⚠'}
            </div>
            <h3 className={styles.modalTitle}>
              {modalType === 'success' ? 'Message Sent!' : 'Oops! Something went wrong'}
            </h3>
            <p className={styles.modalMessage}>{modalMessage}</p>
            <button 
              className={`${styles.modalButton} ${styles[modalType]}`}
              onClick={closeModal}
            >
              {modalType === 'success' ? 'Got it!' : 'Try Again'}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;

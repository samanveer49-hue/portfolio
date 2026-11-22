import React, { useState } from 'react';
import styled from 'styled-components';
import { FiSend, FiCheckCircle } from 'react-icons/fi';

const FormContainer = styled.div`
  width: 100%;
  background: linear-gradient(
    135deg,
    rgba(22, 27, 36, 0.75) 0%,
    rgba(14, 18, 26, 0.9) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 3.5rem;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.35);

  .form__header {
    margin-bottom: 2.8rem;

    .form__badge {
      display: inline-flex;
      align-items: center;
      gap: 0.8rem;
      padding: 0.5rem 1.4rem;
      border-radius: 20px;
      background: rgba(0, 223, 162, 0.1);
      border: 1px solid rgba(0, 223, 162, 0.3);
      color: #00dfa2;
      font-size: 1.2rem;
      font-family: 'Montserrat Bold', sans-serif;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 1.2rem;

      .badge-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #00dfa2;
        box-shadow: 0 0 8px #00dfa2;
      }
    }

    .form__title {
      font-family: 'Montserrat Bold', sans-serif;
      font-size: 2.4rem;
      color: #ffffff;
      margin-bottom: 0.6rem;
    }

    .form__desc {
      font-family: 'Montserrat Regular', sans-serif;
      font-size: 1.4rem;
      color: #94a3b8;
      line-height: 1.5;
    }
  }

  .form-group {
    width: 100%;
    margin-bottom: 2.2rem;

    label {
      display: block;
      font-family: 'Montserrat SemiBold', sans-serif;
      font-size: 1.3rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #a4b0c6;
      margin-bottom: 0.8rem;
    }

    input,
    textarea {
      width: 100%;
      font-family: 'Montserrat Regular', sans-serif;
      font-size: 1.6rem;
      padding: 1.4rem 1.8rem;
      color: #ffffff;
      background: rgba(10, 13, 19, 0.85);
      border: 1.5px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      outline: none;
      transition: all 0.3s ease;

      &::placeholder {
        color: #555e6d;
      }

      &:focus {
        border-color: #00dfa2;
        background: rgba(10, 13, 19, 0.98);
        box-shadow: 0 0 20px rgba(0, 223, 162, 0.25);
      }
    }

    textarea {
      min-height: 160px;
      resize: vertical;
    }
  }

  .form__btn-wrap {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 1rem;
  }

  .submit-btn {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    background: linear-gradient(135deg, #00dfa2 0%, #00b4d8 100%);
    color: #0b0f17;
    font-family: 'Montserrat Bold', sans-serif;
    font-size: 1.6rem;
    font-weight: 700;
    padding: 1.3rem 3.5rem;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    box-shadow: 0 8px 25px rgba(0, 223, 162, 0.4);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    svg {
      width: 1.8rem;
      height: 1.8rem;
      transition: transform 0.3s ease;
    }

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 30px rgba(0, 223, 162, 0.6);

      svg {
        transform: translateX(4px) translateY(-2px);
      }
    }
  }

  .success-message {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: #00dfa2;
    font-family: 'Montserrat SemiBold', sans-serif;
    font-size: 1.4rem;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 2.5rem 2rem;

    .form__header .form__title {
      font-size: 2rem;
    }

    .submit-btn {
      width: 100%;
      justify-content: center;
    }
  }
`;

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() && !email.trim() && !message.trim()) return;

    // Send via WhatsApp directly if user wishes
    const query = encodeURIComponent(
      `Hi Vakhra Labs, I am ${name} (${email}). Message: ${message}`
    );
    window.open(`https://wa.me/message/DMH4H6KO5CIRG1?text=${query}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <FormContainer>
      <div className="form__header">
        <div className="form__badge">
          <span className="badge-dot" />
          <span>Quick Connect</span>
        </div>
        <h3 className="form__title">Send a Message</h3>
        <p className="form__desc">
          Have an idea or project? Let's discuss how we can build something unique together.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="e.g. Amanpreet Singh"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="e.g. aman@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us about your project requirements..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <div className="form__btn-wrap">
          <button type="submit" className="submit-btn">
            <span>Send Message</span>
            <FiSend />
          </button>
          {submitted && (
            <div className="success-message">
              <FiCheckCircle />
              <span>Opening WhatsApp...</span>
            </div>
          )}
        </div>
      </form>
    </FormContainer>
  );
}

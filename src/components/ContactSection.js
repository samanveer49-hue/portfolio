import React from 'react';
import styled from 'styled-components';
import { MdEmail, MdPlace } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  position: relative;

  .contactSection__wrapper {
    max-width: 760px;
    width: 100%;
    margin: 6rem auto 0;
    display: flex;
    flex-direction: column;
    gap: 2.2rem;
  }

  .contact__subtitle-text {
    text-align: center;
    max-width: 540px;
    margin: 1.5rem auto 0;
    font-family: 'Montserrat Regular', sans-serif;
    font-size: 1.6rem;
    color: #94a3b8;
    line-height: 1.6;
  }

  @media only screen and (max-width: 768px) {
    padding: 6rem 0;

    .contactSection__wrapper {
      margin-top: 4rem;
      gap: 1.8rem;
    }

    .contact__subtitle-text {
      font-size: 1.4rem;
      padding: 0 1rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="contact" subheading="get in touch" />
        <p className="contact__subtitle-text">
          Have a question, project proposal, or just want to connect? Reach out
          directly through any of our channels below.
        </p>

        <div className="contactSection__wrapper">
          {/* WhatsApp Direct Chat */}
          <ContactInfoItem
            icon={<FaWhatsapp />}
            tag="WhatsApp (Direct Chat)"
            text="+91 77430 87426"
            href="https://wa.me/message/DMH4H6KO5CIRG1"
            accent="#25D366"
            iconBg="rgba(37, 211, 102, 0.14)"
            iconBorder="rgba(37, 211, 102, 0.35)"
            glow="rgba(37, 211, 102, 0.25)"
          />

          {/* Email Support */}
          <ContactInfoItem
            icon={<MdEmail />}
            tag="Official Email"
            text="vakhralabs@gmail.com"
            href="mailto:vakhralabs@gmail.com"
            accent="#00dfa2"
            iconBg="rgba(0, 223, 162, 0.14)"
            iconBorder="rgba(0, 223, 162, 0.35)"
            glow="rgba(0, 223, 162, 0.25)"
          />

          {/* Studio Location */}
          <ContactInfoItem
            icon={<MdPlace />}
            tag="Studio Location"
            text="Ludhiana, Punjab, India"
            href="https://maps.google.com/?q=Ludhiana,Punjab"
            accent="#00b4d8"
            iconBg="rgba(0, 180, 216, 0.14)"
            iconBorder="rgba(0, 180, 216, 0.35)"
            glow="rgba(0, 180, 216, 0.25)"
          />
        </div>
      </div>
    </ContactSectionStyle>
  );
}

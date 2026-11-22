import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';
import heroDesignerImg from '../assets/images/hero-designer.jpg';

const AboutSectionStyles = styled.div`
  padding: 12rem 0;
  position: relative;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6rem;
    text-align: left;
  }

  .aboutSection__left {
    flex: 1.2;
  }

  .aboutSection__right {
    flex: 1;

    .img-card {
      position: relative;
      border-radius: 20px;
      padding: 0.8rem;
      background: linear-gradient(
        135deg,
        rgba(0, 223, 162, 0.25) 0%,
        rgba(0, 180, 216, 0.15) 100%
      );
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);

      img {
        width: 100%;
        height: 380px;
        object-fit: cover;
        border-radius: 16px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        display: block;
      }
    }
  }

  .section-title {
    text-align: left;
  }

  .para {
    margin-top: 2.5rem;
    margin-left: 0;
    font-size: 1.7rem;
    line-height: 1.8;
    color: #a4b0c6;
  }

  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 3.5rem;
  }

  @media only screen and (max-width: 950px) {
    .container {
      gap: 4rem;
    }
    .aboutSection__left {
      flex: 1;
    }
    .aboutSection__right {
      flex: 1;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 8rem 0;

    .container {
      flex-direction: column;
      text-align: center;
      gap: 4rem;
    }

    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }

    .aboutSection__right .img-card img {
      height: 280px;
    }

    .section-title {
      text-align: center;
    }

    .para {
      margin: 2rem auto 0;
      font-size: 1.5rem;
    }

    .aboutSection__buttons {
      justify-content: center;
      gap: 1.5rem;
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Creative Studio from Ludhiana"
            heading="About Us"
          />
          <PText>
            We are <strong>Vakhra Labs</strong> — a premier creative web design
            and development studio based in Ludhiana, Punjab. We craft
            modern digital experiences with unique aesthetics, blazing fast
            speed, and pixel-perfect architecture. We love art and technology,
            bringing distinctive vision to every brand we partner with.
          </PText>
          <div className="aboutSection__buttons">
            <Button btnText="Our Works" btnLink="/projects" />
            <Button btnText="More About Us" btnLink="/about" outline />
          </div>
        </div>
        <div className="aboutSection__right">
          <div className="img-card">
            <img src={heroDesignerImg} alt="Vakhra Labs Creative Studio" />
          </div>
        </div>
      </div>
    </AboutSectionStyles>
  );
}

import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/hero-designer.jpg';
import Button from './Button';
import SocialMediaArrow from "../assets/images/social-media-arrow.svg";
import ScrollDownArrow from "../assets/images/scroll-down-arrow.svg";
import PText from "./PText";

const HeroStyles = styled.div`
  .hero {
    min-height: 100vh;
    padding: 13rem 0 8rem;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: 3.5rem;
    position: relative;
    span:first-child {
      display: inline-block;
      width: 100%;
      font-size: 1.8rem;
      letter-spacing: 4px;
      text-transform: uppercase;
      color: #00dfa2;
      font-family: "Montserrat SemiBold";
      margin-bottom: 0.8rem;
    }
    .hero__name {
      font-family: "Montserrat Bold";
      font-size: 7.5rem;
      background: linear-gradient(
        135deg,
        #ffffff 30%,
        #00dfa2 70%,
        #00b4d8 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      filter: drop-shadow(0 0 35px rgba(0, 223, 162, 0.35));
      letter-spacing: 1px;
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 520px;
    margin: 0 auto;
    border: 2px solid rgba(0, 223, 162, 0.35);
    border-radius: 24px;
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.65), 0 0 50px rgba(0, 223, 162, 0.18);
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: transform 0.5s ease;
      filter: brightness(0.9) contrast(1.08);
      &:hover {
        transform: scale(1.03);
      }
    }
  }
  .hero__info {
    margin-top: 3.5rem;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;

    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }

  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }

  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: 2rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, This is</span>
            <span className="hero__name">Vakhra Labs</span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero__info">
            <PText>
              A creative web design and development studio. We craft modern,
              high-performance web experiences with stunning UI/UX and clean
              architecture.
            </PText>
            <Button btnText="see our works" btnLink="/projects" />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="icon" />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="https://wa.me/message/DMH4H6KO5CIRG1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WA
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/vakhra_labs?gwpx=MTFneGhwMGx0d3J3ZQ%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    IG
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}

import React from 'react';
import styled from 'styled-components';
import {
  FiCode,
  FiLayout,
  FiZap,
  FiAward,
  FiCheckCircle,
  FiExternalLink,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import Button from '../components/Button';
import ContactBanner from '../components/ContactBanner';
import heroDesignerImg from '../assets/images/hero-designer.jpg';

const AboutPageStyles = styled.div`
  padding: 16rem 0 10rem 0;

  /* Top Hero Section */
  .top-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6rem;
  }

  .left {
    flex: 1.2;

    .about__tag {
      display: inline-flex;
      align-items: center;
      gap: 0.8rem;
      padding: 0.6rem 1.6rem;
      border-radius: 30px;
      background: rgba(0, 223, 162, 0.1);
      border: 1px solid rgba(0, 223, 162, 0.3);
      color: #00dfa2;
      font-family: 'Montserrat Bold', sans-serif;
      font-size: 1.2rem;
      letter-spacing: 1.2px;
      text-transform: uppercase;
      margin-bottom: 2rem;

      .tag-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #00dfa2;
        box-shadow: 0 0 8px #00dfa2;
      }
    }

    .about__heading {
      font-family: 'Montserrat Bold', sans-serif;
      font-size: 4.2rem;
      line-height: 1.25;
      color: #ffffff;
      margin-bottom: 2.5rem;

      .gradient-text {
        background: linear-gradient(135deg, #00dfa2 0%, #00b4d8 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .about__desc {
      font-family: 'Montserrat Regular', sans-serif;
      font-size: 1.7rem;
      line-height: 1.8;
      color: #a4b0c6;
      margin-bottom: 3.5rem;

      p {
        margin-bottom: 1.8rem;
      }
    }

    .about__actions {
      display: flex;
      align-items: center;
      gap: 2rem;
      flex-wrap: wrap;

      .whatsapp-btn {
        display: inline-flex;
        align-items: center;
        gap: 1rem;
        padding: 1.2rem 2.8rem;
        border-radius: 40px;
        background: rgba(37, 211, 102, 0.14);
        border: 1.5px solid rgba(37, 211, 102, 0.5);
        color: #ffffff;
        font-family: 'Montserrat SemiBold', sans-serif;
        font-size: 1.6rem;
        text-decoration: none;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 4px 20px rgba(37, 211, 102, 0.2);

        svg {
          width: 2rem;
          height: 2rem;
          fill: #25d366;
          transition: transform 0.3s ease;
        }

        &:hover {
          background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(37, 211, 102, 0.45);

          svg {
            fill: #ffffff;
            transform: scale(1.1);
          }
        }
      }
    }
  }

  .right {
    flex: 1;

    .img-wrapper {
      position: relative;
      border-radius: 24px;
      padding: 1rem;
      background: linear-gradient(
        135deg,
        rgba(0, 223, 162, 0.2) 0%,
        rgba(0, 180, 216, 0.1) 100%
      );
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);

      img {
        width: 100%;
        height: 480px;
        object-fit: cover;
        border-radius: 18px;
        border: 1px solid rgba(255, 255, 255, 0.12);
        display: block;
      }

      .floating-badge {
        position: absolute;
        bottom: -2rem;
        left: 3rem;
        background: rgba(14, 18, 26, 0.95);
        backdrop-filter: blur(15px);
        border: 1px solid rgba(0, 223, 162, 0.4);
        border-radius: 16px;
        padding: 1.5rem 2.2rem;
        display: flex;
        align-items: center;
        gap: 1.5rem;
        box-shadow: 0 12px 35px rgba(0, 0, 0, 0.4),
          0 0 20px rgba(0, 223, 162, 0.2);

        .badge-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, #00dfa2 0%, #00b4d8 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0b0f17;

          svg {
            width: 2.2rem;
            height: 2.2rem;
          }
        }

        .badge-text {
          h4 {
            font-family: 'Montserrat Bold', sans-serif;
            font-size: 1.8rem;
            color: #ffffff;
          }
          p {
            font-family: 'Montserrat Regular', sans-serif;
            font-size: 1.2rem;
            color: #94a3b8;
          }
        }
      }
    }
  }

  /* Stats Counter Bar */
  .stats-bar {
    margin-top: 10rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.5rem;

    .stat-card {
      background: linear-gradient(
        135deg,
        rgba(22, 27, 36, 0.7) 0%,
        rgba(14, 18, 26, 0.85) 100%
      );
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 18px;
      padding: 3rem 2.5rem;
      text-align: center;
      backdrop-filter: blur(12px);
      transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);

      .stat-num {
        font-family: 'Montserrat Bold', sans-serif;
        font-size: 4rem;
        background: linear-gradient(135deg, #00dfa2 0%, #00b4d8 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 0.8rem;
      }

      .stat-title {
        font-family: 'Montserrat SemiBold', sans-serif;
        font-size: 1.5rem;
        color: #f1f5f9;
        margin-bottom: 0.5rem;
      }

      .stat-sub {
        font-family: 'Montserrat Regular', sans-serif;
        font-size: 1.3rem;
        color: #828fa3;
      }

      &:hover {
        transform: translateY(-5px);
        border-color: rgba(0, 223, 162, 0.4);
        box-shadow: 0 16px 35px rgba(0, 0, 0, 0.4),
          0 0 25px rgba(0, 223, 162, 0.2);
      }
    }
  }

  /* Tech Stack & Core Services Section */
  .skills-section {
    margin-top: 12rem;

    .skills__header {
      text-align: center;
      margin-bottom: 6rem;

      .skills__tag {
        display: inline-block;
        font-family: 'Montserrat Bold', sans-serif;
        font-size: 1.2rem;
        color: #00dfa2;
        letter-spacing: 2px;
        text-transform: uppercase;
        margin-bottom: 1rem;
      }

      h2 {
        font-family: 'Montserrat Bold', sans-serif;
        font-size: 3.8rem;
        color: #ffffff;
        margin-bottom: 1.5rem;
      }

      p {
        font-family: 'Montserrat Regular', sans-serif;
        font-size: 1.6rem;
        color: #94a3b8;
        max-width: 600px;
        margin: 0 auto;
      }
    }

    .skills__grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;

      .skill-card {
        background: linear-gradient(
          135deg,
          rgba(22, 27, 36, 0.75) 0%,
          rgba(14, 18, 26, 0.9) 100%
        );
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 20px;
        padding: 3.5rem 3rem;
        backdrop-filter: blur(14px);
        transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
        position: relative;
        overflow: hidden;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: ${(props) => props.$accent || 'linear-gradient(90deg, #00dfa2, #00b4d8)'};
          opacity: 0.6;
          transition: all 0.35s ease;
        }

        .skill-icon-wrap {
          width: 58px;
          height: 58px;
          border-radius: 16px;
          background: rgba(0, 223, 162, 0.12);
          border: 1px solid rgba(0, 223, 162, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00dfa2;
          margin-bottom: 2.2rem;
          box-shadow: 0 4px 20px rgba(0, 223, 162, 0.15);

          svg {
            width: 2.6rem;
            height: 2.6rem;
          }
        }

        .card-title {
          font-family: 'Montserrat Bold', sans-serif;
          font-size: 2.2rem;
          color: #ffffff;
          margin-bottom: 1.2rem;
        }

        .card-desc {
          font-family: 'Montserrat Regular', sans-serif;
          font-size: 1.45rem;
          line-height: 1.6;
          color: #94a3b8;
          margin-bottom: 2.5rem;
        }

        .tech-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;

          .tech-pill {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.09);
            color: #d1d5db;
            padding: 0.6rem 1.4rem;
            border-radius: 20px;
            font-family: 'Montserrat SemiBold', sans-serif;
            font-size: 1.25rem;
            letter-spacing: 0.3px;
            transition: all 0.25s ease;

            &:hover {
              background: rgba(0, 223, 162, 0.15);
              border-color: #00dfa2;
              color: #ffffff;
            }
          }
        }

        &:hover {
          transform: translateY(-6px);
          border-color: rgba(0, 223, 162, 0.4);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.45),
            0 0 25px rgba(0, 223, 162, 0.2);

          &::before {
            height: 5px;
            opacity: 1;
          }

          .skill-icon-wrap {
            transform: scale(1.08);
            background: #00dfa2;
            color: #0b0f17;
            box-shadow: 0 0 20px #00dfa2;
          }
        }
      }
    }
  }

  /* Values / Why Choose Us */
  .values-section {
    margin-top: 12rem;
    margin-bottom: 6rem;
    background: linear-gradient(
      135deg,
      rgba(22, 27, 36, 0.5) 0%,
      rgba(14, 18, 26, 0.7) 100%
    );
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 24px;
    padding: 6rem 5rem;
    backdrop-filter: blur(14px);

    .values-title-wrap {
      text-align: center;
      margin-bottom: 5rem;

      h3 {
        font-family: 'Montserrat Bold', sans-serif;
        font-size: 3.2rem;
        color: #ffffff;
        margin-bottom: 1rem;
      }

      p {
        font-family: 'Montserrat Regular', sans-serif;
        font-size: 1.6rem;
        color: #94a3b8;
      }
    }

    .values-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3.5rem;

      .val-item {
        display: flex;
        gap: 1.8rem;

        .val-check {
          color: #00dfa2;
          flex-shrink: 0;
          margin-top: 0.3rem;

          svg {
            width: 2.4rem;
            height: 2.4rem;
          }
        }

        .val-info {
          h4 {
            font-family: 'Montserrat Bold', sans-serif;
            font-size: 1.8rem;
            color: #ffffff;
            margin-bottom: 0.8rem;
          }

          p {
            font-family: 'Montserrat Regular', sans-serif;
            font-size: 1.45rem;
            line-height: 1.6;
            color: #8a96a8;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .stats-bar {
      grid-template-columns: repeat(2, 1fr);
    }

    .skills__grid,
    .values-grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 10rem 0 6rem 0;

    .top-section {
      flex-direction: column;
      gap: 5rem;
    }

    .left .about__heading {
      font-size: 3rem;
    }

    .right .img-wrapper img {
      height: 340px;
    }

    .stats-bar {
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }

    .values-section {
      padding: 4rem 2rem;
    }
  }

  @media only screen and (max-width: 520px) {
    .stats-bar {
      grid-template-columns: 1fr;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          {/* Top Hero Section */}
          <div className="top-section">
            <div className="left">
              <div className="about__tag">
                <span className="tag-dot" />
                <span>About Vakhra Labs</span>
              </div>
              <h1 className="about__heading">
                Crafting <span className="gradient-text">Exceptional</span> Web
                Experiences That Stand Out.
              </h1>
              <div className="about__desc">
                <p>
                  Based in <strong>Ludhiana, Punjab</strong>, Vakhra Labs is a
                  modern creative digital studio dedicated to transforming
                  concepts into high-performance, visually stunning web
                  solutions.
                </p>
                <p>
                  We believe every business deserves a digital presence with its
                  own distinct identity ("Vakhra" style). Combining clean
                  architecture, blazing-fast speed, and intuitive UI/UX design,
                  we engineer platforms that leave a lasting impression and
                  drive real business growth.
                </p>
              </div>
              <div className="about__actions">
                <Button btnText="View Projects" btnLink="/projects" />
                <a
                  href="https://wa.me/message/DMH4H6KO5CIRG1"
                  target="_blank"
                  rel="noreferrer"
                  className="whatsapp-btn"
                >
                  <FaWhatsapp />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="right">
              <div className="img-wrapper">
                <img src={heroDesignerImg} alt="Vakhra Labs Studio Workspace" />
                <div className="floating-badge">
                  <div className="badge-icon">
                    <FiZap />
                  </div>
                  <div className="badge-text">
                    <h4>Vakhra Labs</h4>
                    <p>Ludhiana, Punjab, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="stats-bar">
            <div className="stat-card">
              <div className="stat-num">100%</div>
              <div className="stat-title">Custom Design</div>
              <div className="stat-sub">Zero generic templates</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">⚡ Fast</div>
              <div className="stat-title">Optimized Speed</div>
              <div className="stat-sub">Core Web Vitals focused</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">24/7</div>
              <div className="stat-title">Quick Support</div>
              <div className="stat-sub">Direct WhatsApp contact</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">100%</div>
              <div className="stat-title">Client Satisfaction</div>
              <div className="stat-sub">Precision & quality</div>
            </div>
          </div>

          {/* Tech Stack & Core Competencies */}
          <div className="skills-section">
            <div className="skills__header">
              <span className="skills__tag">Our Capabilities</span>
              <h2>Tech Stack & Expertise</h2>
              <p>
                We use cutting-edge modern technologies and design frameworks to
                build scalable, secure, and beautiful digital products.
              </p>
            </div>

            <div className="skills__grid">
              {/* Frontend Card */}
              <div className="skill-card">
                <div className="skill-icon-wrap">
                  <FiCode />
                </div>
                <h3 className="card-title">Frontend Development</h3>
                <p className="card-desc">
                  Building interactive, ultra-responsive web interfaces with
                  fluid animations and component-driven architecture.
                </p>
                <div className="tech-pills">
                  <span className="tech-pill">React.js</span>
                  <span className="tech-pill">JavaScript ES6+</span>
                  <span className="tech-pill">HTML5 & CSS3</span>
                  <span className="tech-pill">Styled Components</span>
                  <span className="tech-pill">Next.js</span>
                  <span className="tech-pill">Tailwind CSS</span>
                </div>
              </div>

              {/* UI/UX Design Card */}
              <div className="skill-card">
                <div className="skill-icon-wrap">
                  <FiLayout />
                </div>
                <h3 className="card-title">UI / UX Design</h3>
                <p className="card-desc">
                  Crafting memorable, human-centered digital experiences with
                  modern typography, balanced layouts, and brand aesthetics.
                </p>
                <div className="tech-pills">
                  <span className="tech-pill">Figma</span>
                  <span className="tech-pill">Design Systems</span>
                  <span className="tech-pill">Wireframing</span>
                  <span className="tech-pill">Mobile Responsive</span>
                  <span className="tech-pill">Prototyping</span>
                  <span className="tech-pill">Photoshop</span>
                </div>
              </div>

              {/* Performance & Full Stack Card */}
              <div className="skill-card">
                <div className="skill-icon-wrap">
                  <FiAward />
                </div>
                <h3 className="card-title">Backend & Optimization</h3>
                <p className="card-desc">
                  Ensuring seamless API integrations, secure server
                  communication, fast page loads, and top search engine ranking.
                </p>
                <div className="tech-pills">
                  <span className="tech-pill">Node.js</span>
                  <span className="tech-pill">RESTful APIs</span>
                  <span className="tech-pill">Express</span>
                  <span className="tech-pill">SEO Best Practices</span>
                  <span className="tech-pill">Git & GitHub</span>
                  <span className="tech-pill">Cloud Hosting</span>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us / Values */}
          <div className="values-section">
            <div className="values-title-wrap">
              <h3>Why Partner With Vakhra Labs?</h3>
              <p>Everything we build is engineered with care, precision, and passion.</p>
            </div>
            <div className="values-grid">
              <div className="val-item">
                <div className="val-check">
                  <FiCheckCircle />
                </div>
                <div className="val-info">
                  <h4>Unique Aesthetic Vision</h4>
                  <p>
                    We never use cookie-cutter templates. Your brand gets an
                    exclusive, bespoke identity tailored to your target audience.
                  </p>
                </div>
              </div>

              <div className="val-item">
                <div className="val-check">
                  <FiCheckCircle />
                </div>
                <div className="val-info">
                  <h4>Blazing-Fast Speed</h4>
                  <p>
                    Every line of code is optimized for lightning-quick load
                    times, fluid transitions, and top SEO Google rankings.
                  </p>
                </div>
              </div>

              <div className="val-item">
                <div className="val-check">
                  <FiCheckCircle />
                </div>
                <div className="val-info">
                  <h4>Direct Local Support</h4>
                  <p>
                    Based right here in Ludhiana, Punjab. Enjoy quick, direct
                    WhatsApp and call support throughout the project and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}

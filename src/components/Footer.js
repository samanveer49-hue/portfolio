import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.footer`
  background: linear-gradient(180deg, #111319 0%, #0a0c10 100%);
  padding-top: 9rem;
  border-top: 1px solid rgba(0, 223, 162, 0.2);
  box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.4);

  .container {
    display: flex;
    gap: 4rem;
  }

  .footer__col1 {
    flex: 2;

    .footer__logo {
      display: inline-flex;
      align-items: center;
      gap: 1rem;
      text-decoration: none;
      margin-bottom: 2rem;

      .logo__icon-wrap {
        width: 38px;
        height: 38px;
        border-radius: 10px;
        background: linear-gradient(135deg, #00dfa2 0%, #00b4d8 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 18px rgba(0, 223, 162, 0.4);

        svg {
          width: 20px;
          height: 20px;
          fill: #0d1117;
        }
      }

      .logo__text {
        font-family: 'Montserrat Bold', sans-serif;
        font-size: 2.6rem;
        letter-spacing: 0.5px;
        color: #ffffff;

        .logo__accent {
          background: linear-gradient(135deg, #00dfa2 0%, #00b4d8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }

    .para {
      font-family: 'Montserrat SemiBold', sans-serif;
      font-size: 1.5rem;
      line-height: 1.7;
      color: #9aa5b8;
      max-width: 360px;
    }
  }

  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }

  .footer__contact-list {
    list-style: none;
    margin-top: 2rem;

    li {
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      gap: 1rem;

      svg {
        width: 1.8rem;
        height: 1.8rem;
        color: #00dfa2;
        fill: #00dfa2;
        flex-shrink: 0;
      }

      a,
      span {
        font-family: 'Montserrat SemiBold', sans-serif;
        font-size: 1.5rem;
        color: #a4b0c6;
        text-decoration: none;
        transition: all 0.25s ease;

        &:hover {
          color: #00dfa2;
          transform: translateX(3px);
        }
      }
    }
  }

  .footer__social-wrap {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    align-items: flex-start;

    .social-btn {
      display: inline-flex;
      align-items: center;
      gap: 1rem;
      padding: 0.9rem 2rem;
      border-radius: 30px;
      color: #ffffff;
      font-family: 'Montserrat SemiBold', sans-serif;
      font-size: 1.4rem;
      text-decoration: none;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      letter-spacing: 0.3px;

      svg {
        width: 1.9rem;
        height: 1.9rem;
        transition: all 0.3s ease;
      }
    }

    .instagram-btn {
      background: linear-gradient(
        45deg,
        rgba(240, 148, 51, 0.15),
        rgba(230, 104, 60, 0.15),
        rgba(220, 39, 67, 0.15),
        rgba(204, 35, 102, 0.15),
        rgba(188, 24, 136, 0.15)
      );
      border: 1px solid rgba(220, 39, 67, 0.4);
      box-shadow: 0 4px 15px rgba(220, 39, 67, 0.15);

      svg {
        fill: #e1306c;
      }

      &:hover {
        background: linear-gradient(
          45deg,
          #f09433 0%,
          #e6683c 25%,
          #dc2743 50%,
          #cc2366 75%,
          #bc1888 100%
        );
        border-color: transparent;
        box-shadow: 0 8px 25px rgba(220, 39, 67, 0.5);
        transform: translateY(-2px);

        svg {
          fill: #ffffff;
        }
      }
    }

    .whatsapp-btn {
      background: rgba(37, 211, 102, 0.12);
      border: 1px solid rgba(37, 211, 102, 0.4);
      box-shadow: 0 4px 15px rgba(37, 211, 102, 0.15);

      svg {
        fill: #25d366;
      }

      &:hover {
        background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
        border-color: transparent;
        box-shadow: 0 8px 25px rgba(37, 211, 102, 0.5);
        transform: translateY(-2px);
        color: #ffffff;

        svg {
          fill: #ffffff;
        }
      }
    }
  }

  .copyright {
    background: #07080c;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    padding: 2.5rem 0;
    margin-top: 7rem;
    text-align: center;

    .para {
      font-family: 'Montserrat SemiBold', sans-serif;
      font-size: 1.5rem;
      color: #7d8799;

      a {
        color: #00dfa2;
        font-weight: 700;
        text-decoration: none;
        transition: all 0.25s ease;

        &:hover {
          color: #ffffff;
          text-shadow: 0 0 10px #00dfa2;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding-top: 6rem;

    .container {
      flex-direction: column;
      gap: 3.5rem;
    }

    .footer__col1 .para {
      max-width: 100%;
    }

    .copyright {
      margin-top: 5rem;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        {/* Col 1: Brand & Bio */}
        <div className="footer__col1">
          <Link to="/" className="footer__logo">
            <div className="logo__icon-wrap">
              <svg viewBox="0 0 24 24">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <span className="logo__text">
              Vakhra<span className="logo__accent">Labs</span>
            </span>
          </Link>
          <PText>
            A premier creative web design and development studio from Ludhiana,
            Punjab. We craft modern digital experiences with unique aesthetics
            and high performance.
          </PText>
        </div>

        {/* Col 2: Important Links */}
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              { title: 'Home', path: '/', type: 'Link' },
              { title: 'About', path: '/about', type: 'Link' },
              { title: 'Projects', path: '/projects', type: 'Link' },
              { title: 'Contact', path: '/contact', type: 'Link' },
            ]}
          />
        </div>

        {/* Col 3: Contact Info */}
        <div className="footer__col3">
          <FooterCol heading="Contact Info" links={[]} />
          <ul className="footer__contact-list">
            <li>
              <MdPhone />
              <a href="tel:+917743087426">+91 77430 87426</a>
            </li>
            <li>
              <MdEmail />
              <a href="mailto:vakhralabs@gmail.com">vakhralabs@gmail.com</a>
            </li>
            <li>
              <MdLocationOn />
              <a
                href="https://maps.google.com/?q=Ludhiana,Punjab"
                target="_blank"
                rel="noreferrer"
              >
                Ludhiana, Punjab, India
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4: Social Links (Instagram & WhatsApp) */}
        <div className="footer__col4">
          <FooterCol heading="Social Links" links={[]} />
          <div className="footer__social-wrap">
            <a
              href="https://www.instagram.com/vakhra_labs?gwpx=MTFneGhwMGx0d3J3ZQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="social-btn instagram-btn"
            >
              <FaInstagram />
              <span>Instagram</span>
            </a>
            <a
              href="https://wa.me/message/DMH4H6KO5CIRG1"
              target="_blank"
              rel="noreferrer"
              className="social-btn whatsapp-btn"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright">
        <div className="container">
          <PText>
            © 2024 - Vakhra Labs | Designed By{' '}
            <Link to="/">Vakhra Labs</Link>
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}

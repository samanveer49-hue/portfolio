import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { MdClose, MdMenu } from "react-icons/md";

const NavStyles = styled.header`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  padding: ${(props) => (props.scrolled ? "1rem 0" : "1.6rem 0")};
  transition: all 0.3s ease;
  background: ${(props) =>
    props.scrolled ? "rgba(15, 17, 24, 0.94)" : "rgba(20, 22, 30, 0.8)"};
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.35);

  .nav__container {
    max-width: 1240px;
    width: 92%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
  }

  /* Logo Styles (Left) */
  .nav__logo {
    justify-self: start;
    display: flex;
    align-items: center;
    gap: 1rem;
    text-decoration: none;
    outline: none;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }

    .logo__icon-wrap {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      background: linear-gradient(135deg, #00dfa2 0%, #00b4d8 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 20px rgba(0, 223, 162, 0.45);
      flex-shrink: 0;

      svg {
        width: 22px;
        height: 22px;
        fill: #0d1117;
      }
    }

    .logo__text {
      font-family: "Montserrat Bold", sans-serif;
      font-size: 2.2rem;
      letter-spacing: 0.5px;
      color: #ffffff;
      display: flex;
      align-items: center;
      gap: 0.3rem;

      .logo__accent {
        background: linear-gradient(135deg, #00dfa2 0%, #00b4d8 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .logo__dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #00dfa2;
        box-shadow: 0 0 10px #00dfa2;
        margin-left: 1px;
      }
    }
  }

  /* Center Nav Items (Modern Centered Pill Bar) */
  .nav__pill {
    justify-self: center;
    background: rgba(30, 33, 45, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50px;
    padding: 0.5rem 0.6rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
    list-style: none;

    li {
      display: inline-block;
    }

    a {
      display: inline-block;
      font-family: "Montserrat SemiBold", sans-serif;
      font-size: 1.5rem;
      color: #b0b8c9;
      padding: 0.8rem 2rem;
      border-radius: 30px;
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      text-decoration: none;

      &:hover {
        color: #ffffff;
        background: rgba(255, 255, 255, 0.08);
      }
    }

    .active {
      color: #0b0f17 !important;
      background: linear-gradient(135deg, #00dfa2 0%, #00b4d8 100%) !important;
      font-weight: 700;
      box-shadow: 0 0 18px rgba(0, 223, 162, 0.4);
    }
  }

  /* Right Side Area (Let's Talk CTA & Mobile Hamburger) */
  .nav__right {
    justify-self: end;
    display: flex;
    align-items: center;
    gap: 1.5rem;

    .nav__cta {
      display: inline-flex;
      align-items: center;
      gap: 0.8rem;
      padding: 0.85rem 2.2rem;
      border-radius: 30px;
      background: linear-gradient(
        135deg,
        rgba(0, 223, 162, 0.12) 0%,
        rgba(0, 180, 216, 0.12) 100%
      );
      border: 1.5px solid rgba(0, 223, 162, 0.5);
      color: #ffffff;
      font-family: "Montserrat SemiBold", sans-serif;
      font-size: 1.4rem;
      text-decoration: none;
      letter-spacing: 0.4px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 4px 15px rgba(0, 223, 162, 0.15);
      cursor: pointer;

      .cta__arrow {
        color: #00dfa2;
        transition: transform 0.3s ease;
        font-size: 1.5rem;
      }

      &:hover {
        background: linear-gradient(135deg, #00dfa2 0%, #00b4d8 100%);
        color: #0b0f17;
        border-color: transparent;
        box-shadow: 0 0 25px rgba(0, 223, 162, 0.5);
        transform: translateY(-2px);

        .cta__arrow {
          color: #0b0f17;
          transform: translateX(3px);
        }
      }
    }
  }

  /* Mobile menu button */
  .mobile-menu-icon {
    display: none;
    width: 4rem;
    height: 4rem;
    cursor: pointer;
    outline: none;
    padding: 0.5rem;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--white);

    svg {
      width: 100%;
      height: 100%;
      fill: #ffffff;
    }
  }

  .closeNavIcon {
    display: none;
  }

  @media only screen and (max-width: 850px) {
    padding: 1.2rem 0;

    .nav__container {
      display: flex;
      justify-content: space-between;
    }

    .nav__right .nav__cta {
      padding: 0.75rem 1.8rem;
      font-size: 1.3rem;
    }

    .mobile-menu-icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hide-item {
      transform: translateY(-130%);
      opacity: 0;
      pointer-events: none;
    }

    .nav__pill {
      position: absolute;
      top: 7rem;
      right: 5%;
      width: 90%;
      max-width: 320px;
      flex-direction: column;
      align-items: stretch;
      padding: 2rem 1.5rem;
      border-radius: 16px;
      background: rgba(18, 21, 30, 0.98);
      backdrop-filter: blur(25px);
      -webkit-backdrop-filter: blur(25px);
      border: 1px solid rgba(255, 255, 255, 0.12);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
      transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
      opacity: 1;

      .closeNavIcon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3.2rem;
        height: 3.2rem;
        margin: 0 0 1rem auto;
        cursor: pointer;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.08);
        color: #ffffff;

        svg {
          width: 2rem;
          height: 2rem;
        }
      }

      li {
        display: block;
        width: 100%;
        margin-bottom: 0.8rem;
      }

      a {
        display: block;
        text-align: center;
        padding: 1.2rem 2rem;
        font-size: 1.7rem;
        border-radius: 10px;
      }
    }
  }

  @media only screen and (max-width: 520px) {
    .nav__right .nav__cta {
      display: none;
    }
  }
`;

export default function NavMenu() {
  const [showNav, setShowNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavStyles scrolled={scrolled}>
      <div className="nav__container">
        {/* Brand Logo (Left) */}
        <Link to="/" className="nav__logo">
          <div className="logo__icon-wrap">
            <svg viewBox="0 0 24 24">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <span className="logo__text">
            Vakhra<span className="logo__accent">Labs</span>
            <span className="logo__dot" />
          </span>
        </Link>

        {/* Center Pill Menu (Strict Center) */}
        <ul className={!showNav ? "nav__pill hide-item" : "nav__pill"}>
          <div
            className="closeNavIcon"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            <MdClose />
          </div>
          <li>
            <NavLink
              to="/"
              exact
              onClick={() => setShowNav(false)}
              role="button"
              onKeyDown={() => setShowNav(false)}
              tabIndex={0}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => setShowNav(false)}
              role="button"
              onKeyDown={() => setShowNav(false)}
              tabIndex={0}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              onClick={() => setShowNav(false)}
              role="button"
              onKeyDown={() => setShowNav(false)}
              tabIndex={0}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => setShowNav(false)}
              role="button"
              onKeyDown={() => setShowNav(false)}
              tabIndex={0}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Right Side: Let's Talk CTA & Mobile Hamburger */}
        <div className="nav__right">
          <a
            href="https://wa.me/message/DMH4H6KO5CIRG1"
            target="_blank"
            rel="noreferrer"
            className="nav__cta"
          >
            <span>Let's Talk</span>
            <span className="cta__arrow">→</span>
          </a>

          <div
            className="mobile-menu-icon"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            <MdMenu />
          </div>
        </div>
      </div>
    </NavStyles>
  );
}

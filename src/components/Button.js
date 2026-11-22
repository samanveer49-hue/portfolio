import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2rem;
    font-family: "Montserrat SemiBold";
    background: ${(props) =>
      props.outline
        ? "rgba(255, 255, 255, 0.05)"
        : "linear-gradient(135deg, #00dfa2 0%, #00b4d8 100%)"};
    padding: 0.8em 2.2em;
    border: 2px solid
      ${(props) => (props.outline ? "rgba(0, 223, 162, 0.5)" : "transparent")};
    border-radius: 40px;
    display: inline-block;
    color: ${(props) => (props.outline ? "#00dfa2" : "#0b0f17")};
    font-weight: 700;
    letter-spacing: 0.5px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: ${(props) =>
      props.outline ? "none" : "0 8px 24px rgba(0, 223, 162, 0.35)"};

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 30px rgba(0, 223, 162, 0.55);
      ${(props) =>
        props.outline &&
        `
        background: #00dfa2;
        color: #0b0f17;
        border-color: #00dfa2;
      `}
    }
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.6rem;
    }
  }
`;

export default function Button({
  btnText = "test",
  btnLink = "test",
  outline = false,
}) {
  const isExternal =
    typeof btnLink === "string" &&
    (btnLink.startsWith("http://") ||
      btnLink.startsWith("https://") ||
      btnLink.startsWith("mailto:") ||
      btnLink.startsWith("tel:"));

  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      {isExternal ? (
        <a
          className="button"
          href={btnLink}
          target="_blank"
          rel="noreferrer"
        >
          {btnText}
        </a>
      ) : (
        <Link className="button" to={btnLink}>
          {btnText}
        </Link>
      )}
    </ButtonStyle>
  );
}

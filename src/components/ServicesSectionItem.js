import React from 'react';
import styled from 'styled-components';

const ItemStyles = styled.div`
  text-align: center;
  background: linear-gradient(
    135deg,
    rgba(25, 28, 40, 0.75) 0%,
    rgba(16, 18, 26, 0.85) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 4.5rem 3.5rem;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: -40px;
    right: -40px;
    width: 140px;
    height: 140px;
    background: radial-gradient(
      circle,
      rgba(0, 223, 162, 0.2) 0%,
      transparent 70%
    );
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(0, 223, 162, 0.45);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 35px rgba(0, 223, 162, 0.18);

    &::before {
      opacity: 1;
    }

    .servicesItem__icon {
      background: linear-gradient(135deg, #00dfa2 0%, #00b4d8 100%);
      box-shadow: 0 10px 25px rgba(0, 223, 162, 0.4);
      transform: scale(1.08);

      svg {
        fill: #0b0f17;
        color: #0b0f17;
      }
    }

    .servicesItem__title {
      background: linear-gradient(135deg, #00dfa2 0%, #00b4d8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .servicesItem__icon {
    width: 80px;
    height: 80px;
    border-radius: 20px;
    margin: 0 auto 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 223, 162, 0.08);
    border: 1px solid rgba(0, 223, 162, 0.25);
    box-shadow: 0 8px 20px rgba(0, 223, 162, 0.1);
    transition: all 0.35s ease;

    svg {
      width: 3.6rem;
      height: 3.6rem;
      fill: #00dfa2;
      color: #00dfa2;
      transition: all 0.3s ease;
    }
  }

  .servicesItem__title {
    font-size: 2.8rem;
    font-family: 'Montserrat Bold', sans-serif;
    color: #ffffff;
    margin-bottom: 1.5rem;
    text-transform: capitalize;
    letter-spacing: 0.5px;
    transition: all 0.3s ease;
  }

  .servicesItem__desc {
    font-family: 'Montserrat SemiBold', sans-serif;
    font-size: 1.6rem;
    line-height: 1.7;
    color: #a4b0c6;
    margin-bottom: 2.5rem;
  }

  .servicesItem__tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.8rem;
    list-style: none;

    li {
      font-family: 'Montserrat SemiBold', sans-serif;
      font-size: 1.2rem;
      color: #00dfa2;
      background: rgba(0, 223, 162, 0.08);
      border: 1px solid rgba(0, 223, 162, 0.2);
      padding: 0.4rem 1.2rem;
      border-radius: 20px;
      letter-spacing: 0.3px;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 3.5rem 2rem;

    .servicesItem__title {
      font-size: 2.2rem;
    }

    .servicesItem__desc {
      font-size: 1.4rem;
    }
  }
`;

export default function ServicesSectionItem({
  icon,
  title,
  desc,
  tags = [],
}) {
  return (
    <ItemStyles className="servicesItem">
      <div className="servicesItem__icon">{icon}</div>
      <div className="servicesItem__title">{title}</div>
      <p className="servicesItem__desc">{desc}</p>
      {tags.length > 0 && (
        <ul className="servicesItem__tags">
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      )}
    </ItemStyles>
  );
}

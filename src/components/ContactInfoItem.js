import React from 'react';
import styled from 'styled-components';
import { MdPlace } from 'react-icons/md';
import { FiArrowUpRight } from 'react-icons/fi';

const ItemStyles = styled.a`
  padding: 2.2rem 2.4rem;
  background: linear-gradient(
    135deg,
    rgba(22, 27, 36, 0.75) 0%,
    rgba(14, 18, 26, 0.9) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2rem;
  text-decoration: none;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  cursor: ${(props) => (props.href ? 'pointer' : 'default')};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: ${(props) => props.$accent || '#00dfa2'};
    opacity: 0.6;
    transition: all 0.35s ease;
  }

  .item__left {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .icon-box {
    width: 56px;
    height: 56px;
    border-radius: 14px;
    background: ${(props) => props.$iconBg || 'rgba(0, 223, 162, 0.12)'};
    border: 1px solid ${(props) => props.$iconBorder || 'rgba(0, 223, 162, 0.3)'};
    color: ${(props) => props.$accent || '#00dfa2'};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.35s ease;
    box-shadow: 0 4px 18px ${(props) => props.$glow || 'rgba(0, 223, 162, 0.15)'};

    svg {
      width: 2.6rem;
      height: 2.6rem;
      transition: transform 0.35s ease;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    .tag {
      font-size: 1.1rem;
      font-family: 'Montserrat Bold', sans-serif;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: ${(props) => props.$accent || '#00dfa2'};
    }

    .value {
      font-family: 'Montserrat SemiBold', sans-serif;
      font-size: 1.7rem;
      color: #ffffff;
      line-height: 1.35;
      letter-spacing: 0.3px;
    }
  }

  .arrow-box {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #64748b;
    flex-shrink: 0;
    transition: all 0.35s ease;

    svg {
      width: 1.8rem;
      height: 1.8rem;
      transition: transform 0.35s ease;
    }
  }

  &:hover {
    transform: translateY(-4px) translateX(4px);
    background: linear-gradient(
      135deg,
      rgba(28, 35, 48, 0.9) 0%,
      rgba(18, 23, 33, 0.98) 100%
    );
    border-color: ${(props) => props.$accent || 'rgba(0, 223, 162, 0.5)'};
    box-shadow: 0 16px 35px rgba(0, 0, 0, 0.45),
      0 0 25px ${(props) => props.$glow || 'rgba(0, 223, 162, 0.25)'};

    &::before {
      width: 5px;
      opacity: 1;
      box-shadow: 0 0 12px ${(props) => props.$accent || '#00dfa2'};
    }

    .icon-box {
      transform: scale(1.08);
      background: ${(props) => props.$accent || '#00dfa2'};
      color: #0b0f17;
      box-shadow: 0 0 22px ${(props) => props.$accent || '#00dfa2'};
      svg {
        transform: scale(1.05);
      }
    }

    .arrow-box {
      background: ${(props) => props.$accent || '#00dfa2'};
      color: #0b0f17;
      border-color: transparent;
      transform: rotate(45deg);
      box-shadow: 0 0 15px ${(props) => props.$accent || '#00dfa2'};
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 1.8rem 1.6rem;
    .info .value {
      font-size: 1.5rem;
    }
    .icon-box {
      width: 46px;
      height: 46px;
      svg {
        width: 2.2rem;
        height: 2.2rem;
      }
    }
  }
`;

export default function ContactInfoItem({
  icon = <MdPlace />,
  tag = 'Contact',
  text = '',
  href = null,
  accent = '#00dfa2',
  iconBg = 'rgba(0, 223, 162, 0.12)',
  iconBorder = 'rgba(0, 223, 162, 0.3)',
  glow = 'rgba(0, 223, 162, 0.2)',
}) {
  return (
    <ItemStyles
      href={href}
      target={href && href.startsWith('http') ? '_blank' : undefined}
      rel={href && href.startsWith('http') ? 'noreferrer' : undefined}
      $accent={accent}
      $iconBg={iconBg}
      $iconBorder={iconBorder}
      $glow={glow}
    >
      <div className="item__left">
        <div className="icon-box">{icon}</div>
        <div className="info">
          <span className="tag">{tag}</span>
          <span className="value">{text}</span>
        </div>
      </div>
      {href && (
        <div className="arrow-box">
          <FiArrowUpRight />
        </div>
      )}
    </ItemStyles>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ColStyle = styled.div`
  .heading {
    font-family: 'Montserrat Bold', sans-serif;
    font-size: 2.2rem;
    color: #ffffff;
    letter-spacing: 0.5px;
    margin-bottom: 2.5rem;
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -6px;
      width: 32px;
      height: 3px;
      background: linear-gradient(135deg, #00dfa2 0%, #00b4d8 100%);
      border-radius: 2px;
    }
  }

  ul {
    list-style: none;
  }

  li {
    margin-bottom: 1.4rem;
  }

  a {
    font-family: 'Montserrat SemiBold', sans-serif;
    font-size: 1.6rem;
    color: #a4b0c6;
    text-decoration: none;
    transition: all 0.25s ease;
    display: inline-block;

    &:hover {
      color: #00dfa2;
      transform: translateX(4px);
    }
  }
`;

export default function FooterCol({ heading = 'Col Heading', links = [] }) {
  return (
    <ColStyle>
      <h2 className="heading">{heading}</h2>
      {links.length > 0 && (
        <ul>
          {links.map((item, index) => (
            <li key={index}>
              {item.type === 'Link' ? (
                <Link to={item.path}>{item.title}</Link>
              ) : (
                <a href={item.path} target="_blank" rel="noreferrer">
                  {item.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </ColStyle>
  );
}

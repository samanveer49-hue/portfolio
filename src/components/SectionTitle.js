import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  text-align: center;
  p {
    font-family: 'Montserrat SemiBold', sans-serif;
    font-size: 1.6rem;
    color: #00dfa2;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 0.8rem;
  }
  h2 {
    font-family: 'Montserrat Bold', sans-serif;
    font-size: 5.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    background: linear-gradient(135deg, #ffffff 40%, #c4ccdc 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media only screen and (max-width: 768px) {
    p {
      font-size: 1.3rem;
      letter-spacing: 2px;
    }
    h2 {
      font-size: 3.5rem;
    }
  }
`;

export default function SectionTitle({
  subheading = 'Need Subheading',
  heading = 'need heading',
}) {
  return (
    <SectionTitleStyle className="section-title">
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </SectionTitleStyle>
  );
}

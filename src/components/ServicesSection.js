import React from 'react';
import { MdDesktopMac, MdCode } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;

  .services__allItems {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
    max-width: 950px;
    margin: 6rem auto 0;
  }

  @media only screen and (max-width: 768px) {
    padding: 6rem 0;

    .services__allItems {
      grid-template-columns: 1fr;
      gap: 3rem;
      max-width: 450px;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What We Will Do For You" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Web Design"
            desc="We craft modern, user-centric UI/UX designs that give your digital presence a unique, stunning, and memorable look."
            tags={['UI / UX', 'Figma', 'Prototyping', 'Modern Aesthetics']}
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web Development"
            desc="We build robust, high-performance web applications with clean architecture, blazing-fast speed, and pixel-perfect responsiveness."
            tags={['React.js', 'High Performance', 'Responsive', 'Clean Code']}
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}

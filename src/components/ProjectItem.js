import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectImg from '../assets/images/projectImg.png';

const ProjectItemStyles = styled.div`
  background: linear-gradient(
    135deg,
    rgba(25, 28, 40, 0.75) 0%,
    rgba(16, 18, 26, 0.85) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  overflow: hidden;
  transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(0, 223, 162, 0.45);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 223, 162, 0.15);

    .projectItem__img img {
      transform: scale(1.05);
    }

    .projectItem__title {
      background: linear-gradient(135deg, #00dfa2 0%, #00b4d8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .projectItem__img {
    width: 100%;
    height: 320px;
    overflow: hidden;
    display: block;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }
  }

  .projectItem__info {
    padding: 2rem 2.2rem 2.5rem;
  }

  .projectItem__title {
    font-size: 2.2rem;
    font-family: 'Montserrat Bold', sans-serif;
    color: #ffffff;
    transition: all 0.3s ease;
    margin-bottom: 1rem;
  }

  .projectItem__desc {
    font-size: 1.5rem;
    line-height: 1.6;
    font-family: 'Montserrat SemiBold', sans-serif;
    color: #a4b0c6;
  }

  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 250px;
    }
    .projectItem__title {
      font-size: 2rem;
    }
    .projectItem__desc {
      font-size: 1.4rem;
    }
  }
`;

export default function ProjectItem({
  img = ProjectImg,
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}) {
  return (
    <ProjectItemStyles className="projectItem">
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
        <Link to="/projects">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
      </div>
    </ProjectItemStyles>
  );
}

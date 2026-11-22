import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdSearch, MdClose } from 'react-icons/md';
import SectionTitle from '../components/SectionTitle';
import ProjectsInfo from '../assets/data/projects';
import ProjectItem from '../components/ProjectItem';

const ProjectStyle = styled.div`
  padding: 12rem 0 10rem;

  .projects__searchBar {
    position: relative;
    max-width: 520px;
    width: 100%;
    margin: 4.5rem auto 6rem;

    form {
      position: relative;
      width: 100%;
      background: linear-gradient(
        135deg,
        rgba(25, 28, 40, 0.8) 0%,
        rgba(16, 18, 26, 0.9) 100%
      );
      border: 1.5px solid rgba(255, 255, 255, 0.1);
      border-radius: 50px;
      padding: 0.5rem 0.6rem 0.5rem 2.2rem;
      display: flex;
      align-items: center;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.35);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);

      &:hover {
        border-color: rgba(0, 223, 162, 0.4);
        box-shadow: 0 10px 35px rgba(0, 0, 0, 0.45),
          0 0 20px rgba(0, 223, 162, 0.12);
      }

      &:focus-within {
        border-color: #00dfa2;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5),
          0 0 25px rgba(0, 223, 162, 0.25);
        transform: translateY(-2px);
      }
    }

    input {
      width: 100%;
      font-size: 1.6rem;
      font-family: 'Montserrat SemiBold', sans-serif;
      padding: 1rem 1rem 1rem 0;
      color: #ffffff;
      background: transparent;
      outline: none;
      border: none;

      &::placeholder {
        color: #727e94;
        font-family: 'Montserrat SemiBold', sans-serif;
        font-weight: 500;
        letter-spacing: 0.5px;
      }
    }

    .search-btn-icon {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: linear-gradient(135deg, #00dfa2 0%, #00b4d8 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      box-shadow: 0 0 15px rgba(0, 223, 162, 0.4);
      cursor: pointer;
      border: none;
      transition: all 0.25s ease;

      svg {
        width: 2.2rem;
        height: 2.2rem;
        fill: #0b0f17;
        color: #0b0f17;
      }

      &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 22px rgba(0, 223, 162, 0.6);
      }
    }

    .clear-btn {
      background: transparent;
      border: none;
      color: #727e94;
      font-size: 1.8rem;
      cursor: pointer;
      padding: 0 0.8rem;
      display: flex;
      align-items: center;
      transition: color 0.2s ease;

      &:hover {
        color: #ffffff;
      }
    }
  }

  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 4rem;
    margin-top: 2rem;
  }

  .no-projects {
    text-align: center;
    padding: 6rem 2rem;
    background: rgba(25, 28, 40, 0.5);
    border-radius: 20px;
    border: 1px dashed rgba(255, 255, 255, 0.1);
    max-width: 500px;
    margin: 4rem auto 0;

    h3 {
      font-family: 'Montserrat Bold', sans-serif;
      font-size: 2.2rem;
      color: #ffffff;
      margin-bottom: 1rem;
    }

    p {
      font-family: 'Montserrat SemiBold', sans-serif;
      font-size: 1.5rem;
      color: #7d8799;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 8rem 0 6rem;

    .projects__searchBar {
      max-width: 100%;
      margin: 3.5rem auto 4.5rem;
    }

    .projects__allItems {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }
`;

export default function Projects() {
  const [searchText, setSearchText] = useState('');
  const [projectsData, setProjectsData] = useState(ProjectsInfo);

  useEffect(() => {
    if (searchText.trim() === '') {
      setProjectsData(ProjectsInfo);
      return;
    }
    setProjectsData(() =>
      ProjectsInfo.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleClear = () => {
    setSearchText('');
  };

  return (
    <ProjectStyle>
      <div className="container">
        <SectionTitle
          heading="Projects"
          subheading="Explore our recent creative works"
        />
        <div className="projects__searchBar">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              value={searchText}
              onChange={handleChange}
              placeholder="Search by project name..."
            />
            {searchText && (
              <button
                type="button"
                className="clear-btn"
                onClick={handleClear}
                aria-label="Clear search"
              >
                <MdClose />
              </button>
            )}
            <div className="search-btn-icon">
              <MdSearch />
            </div>
          </form>
        </div>

        {projectsData.length > 0 ? (
          <div className="projects__allItems">
            {projectsData.map((item) => (
              <ProjectItem
                key={item.id}
                title={item.name}
                desc={item.desc}
                img={item.img}
              />
            ))}
          </div>
        ) : (
          <div className="no-projects">
            <h3>No projects found</h3>
            <p>We couldn't find anything matching "{searchText}".</p>
          </div>
        )}
      </div>
    </ProjectStyle>
  );
}

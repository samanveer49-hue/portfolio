import React, { useState } from 'react';
import styled from 'styled-components';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import PText from './PText';
import SectionTitle from './SectionTitle';
import testimonials from '../assets/data/testimonials';

const TestimonialSectionStyles = styled.div`
  overflow-x: hidden;
  padding: 10rem 0;
  text-align: center;

  .testimonial__wrapper {
    position: relative;
    max-width: 750px;
    margin: 0 auto;
  }

  .testimonial__info {
    width: 100%;
    height: fit-content;
    padding: 4.5rem 3.5rem;
    background: linear-gradient(
      135deg,
      rgba(25, 28, 40, 0.75) 0%,
      rgba(16, 18, 26, 0.85) 100%
    );
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 24px;
    margin-top: 5rem;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    position: relative;
    transition: all 0.3s ease;

    &:hover {
      border-color: rgba(0, 223, 162, 0.35);
      box-shadow: 0 20px 45px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 223, 162, 0.12);
    }
  }

  .testimonial__quote-mark {
    font-size: 5rem;
    line-height: 1;
    color: #00dfa2;
    opacity: 0.6;
    margin-bottom: 1.5rem;
    font-family: serif;
  }

  .testimonial__desc {
    .para {
      text-align: center;
      font-size: 1.7rem;
      line-height: 1.7;
      color: #c4ccdc;
      font-family: 'Montserrat SemiBold', sans-serif;
    }
  }

  .testimonial__name {
    margin-top: 3.5rem;
    font-family: 'Montserrat Bold', sans-serif;
    font-size: 2.6rem;
    background: linear-gradient(135deg, #ffffff 40%, #00dfa2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .testimonial__title {
    font-size: 1.5rem;
    margin-top: 0.5rem;
    color: #00dfa2;
    font-family: 'Montserrat SemiBold', sans-serif;
    letter-spacing: 0.5px;
  }

  .arrows {
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    .next,
    .prev {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(30, 33, 45, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      cursor: pointer;
      color: #ffffff;
      transition: all 0.3s ease;
      outline: none;

      svg {
        width: 24px;
        height: 24px;
        fill: #00dfa2;
        transition: transform 0.2s ease;
      }

      &:hover {
        background: linear-gradient(135deg, #00dfa2 0%, #00b4d8 100%);
        border-color: transparent;
        box-shadow: 0 0 20px rgba(0, 223, 162, 0.45);
        transform: scale(1.08);

        svg {
          fill: #0b0f17;
        }
      }
    }
  }

  .fade-enter {
    opacity: 0;
    transform: scale(0.96);
    z-index: 1;
  }
  .fade-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: 250ms ease-in;
    transition-property: transform, opacity;
    z-index: 1;
  }
  .fade-exit {
    transform: scale(1);
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transform: scale(0.96);
    transition: 200ms ease-in;
    transition-property: transform, opacity;
  }

  @media only screen and (max-width: 768px) {
    padding: 6rem 0;
    .testimonial__info {
      padding: 3rem 2rem;
    }
    .testimonial__name {
      font-size: 2.2rem;
    }
    .testimonial__desc .para {
      font-size: 1.5rem;
    }
  }
`;

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = testimonials[activeIndex];

  function handleNext() {
    if (activeIndex >= testimonials.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((oldIndex) => oldIndex + 1);
    }
  }
  function handlePrev() {
    if (activeIndex === 0) {
      setActiveIndex(testimonials.length - 1);
    } else {
      setActiveIndex((oldIndex) => oldIndex - 1);
    }
  }

  return (
    <TestimonialSectionStyles>
      <div className="container">
        <SectionTitle
          subheading="see what our clients say about us"
          heading="Testimonials"
        />
        <div className="testimonial__wrapper">
          <SwitchTransition component={null}>
            <CSSTransition key={activeSlide.id} timeout={300} classNames="fade">
              <div className="testimonial__info">
                <div className="testimonial__quote-mark">“</div>
                <div className="testimonial__desc">
                  <PText>{activeSlide.desc}</PText>
                </div>
                <h2 className="testimonial__name">{activeSlide.name}</h2>
                <p className="testimonial__title">
                  {activeSlide.title}, {activeSlide.org}
                </p>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>

        <div className="arrows">
          <div
            className="prev"
            onClick={handlePrev}
            role="button"
            tabIndex={0}
            onKeyDown={handlePrev}
          >
            <MdArrowBack />
          </div>
          <div
            className="next"
            onClick={handleNext}
            role="button"
            tabIndex={0}
            onKeyDown={handleNext}
          >
            <MdArrowForward />
          </div>
        </div>
      </div>
    </TestimonialSectionStyles>
  );
}

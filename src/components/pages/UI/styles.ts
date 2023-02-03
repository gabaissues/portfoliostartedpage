import styled, { keyframes } from "styled-components";

export const rotateSvg = keyframes`
  0% {
    transform: translateX(1rem) rotate(0deg);
  }

  15% {
    transform: translateY(1rem) rotate(50deg);
  }

  30% {
    transform: translateX(1rem) rotate(100deg);
  }

  45% {
    transform: translateY(2rem) rotate(150deg);
  }

  60% {
    transform: translateX(2rem) rotate(250deg);
  }

  75% {
    transform: translateY(0rem) rotate(300deg);
  }

  100% {
    transform: translateX(1rem) rotate(359deg);
  }
`;

export const UI = styled.div`
  display: flex;
  background-color: #fafafa;

  width: 50%;

  @media (max-width: 1024px) {
    flex: 1;
    padding: 4rem 2.5rem 0rem 0rem;
  }
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 10rem;
  padding-right: 2.5rem;

  svg {
    margin-left: auto;
    margin-top: -0.8rem;
    z-index: 2;
    animation: ${rotateSvg} 5s infinite;
  }

  @media (max-width: 800px) {
    margin-left: 2.5rem;
    padding-bottom: 2.5rem;
    height: auto;
  }
`;

export const Paragraph = styled.p`
  width: 40rem;
  margin-top: 1.5rem;
  font-size: 1.5rem;
  font-weight: 400;
  color: #464646;
  line-height: 36px;

  @media (max-width: 1660px) {
    width: 30rem;
  }

  @media (max-width: 1440px) {
    width: 23rem;
  }

  @media (max-width: 1280px) {
    width: 18rem;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 800px) {
    margin-top: 4rem;
    width: 100%;
  }
`;
//Global

export const Link = styled.a`
  display: flex;
  margin-top: 1rem;
  align-items: center;
  justify-content: center;
  background-color: #ffb4ad;
  padding: 1.125rem 1rem;
  color: #2d2d2d;
  text-decoration: none;
  display: flex;
  width: auto;
  border-radius: 0.8rem;
  font-weight: 500;
  font-size: 1rem;
  width: 22.75rem;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 100%;
    text-align: center;
  }
`;

export const TextFixed = styled.div<{
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
}>`
  position: absolute;

  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  top: ${(props) => props.top};

  font-weight: 600;
  font-size: 1.5rem;

  @media (max-width: 800px) {
    display: none;
  }
`;
export const Text = styled.h1<{
  fontSize?: string;
  fontWeight?: string;
  padding?: string;
  margin?: string;
}>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  font-family: Poppins;
`;

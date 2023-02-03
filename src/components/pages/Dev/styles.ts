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

export const Dev = styled.div`
  display: flex;
  flex: 2;
  background-color: #2d2d2d;
  color: #fafafa;
  height: auto;
`;
export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  padding-top: 20rem;
  padding-left: 10rem;
  padding-right: 5rem;

  h1 {
    text-align: right;
  }

  svg {
    position: absolute;
    animation: ${rotateSvg} 5s Infinite;
  }

  @media(max-width: 1280px) {
    padding-left: 5rem;
    padding-right: 2.5rem;
    padding-bottom: 2.5rem;
  }

  @media(max-width: 800px) {

    padding-top: 4rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;

    h1 {
      text-align: left;
    }

    p {
      text-align: left;
    }

  }
`;

export const Paragraph = styled.p`
  text-align: right;
  font-size: 1.5rem;
  margin-top: 2rem;
  line-height: 2.25rem;
`;

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
  margin-bottom: 5rem;
  margin-left: auto;

  @media (max-width: 1024px) {
    width: 90%;
    text-align: center;
    margin-left: 0;
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

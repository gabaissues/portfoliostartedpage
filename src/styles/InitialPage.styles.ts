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

export const Main = styled.main`
  display: flex;
  height: 100vh;

  @media (max-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const UI = styled.div`
  display: flex;
  flex: 2;
  background-color: #fafafa;
`;

export const Dev = styled.div`
  display: flex;
  flex: 2;
  background-color: #2d2d2d;
  color: #fafafa;
`;
export const DevContent = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 15rem;
  padding-right: 2.5rem;

  @media (max-width: 1024px) {
    margin-left: 2.5rem;
  }
`;
export const TitleContentDev = styled.div`
  display: flex;
  width: 37em;

  h1 {
    position: absolute;
    z-index: 1;
    height: 4rem;
    width: auto;
  }

  svg {
    margin-left: auto;
    margin-top: -0.8rem;
    z-index: 2;
    animation: ${rotateSvg} 5s infinite;
  }

  @media (max-width: 1024px) {
    margin-right: 2.5rem;
    width: 10rem;

    svg {
      margin-left: 1rem;
    }
  }
`;

export const ParagraphDev = styled.p`
  margin-top: 3rem;
  font-size: 1.5rem;
  font-weight: 400;
  color: #eaeaea;
  line-height: 36px;

  @media (max-width: 1024px) {
    margin-top: 4rem;
    margin-right: 2.5rem;
    font-size: 1.2rem;
    line-height: 30px;
  }
`;

//Parte de UI

export const UIContent = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 10rem;
  padding-right: 2.5rem;

  @media(max-width: 1024px) {

    margin-left: 2.5rem;
    padding-right: 2.5rem;

  }
`;
export const TitleContentUI = styled.div`
  display: flex;
  width: 28em;

  h1 {
    position: absolute;
    z-index: 1;
    height: 4rem;
  }

  svg {
    margin-left: auto;
    margin-top: -0.8rem;
    z-index: 2;
    animation: ${rotateSvg} 5s infinite;
  }

  @media(max-width: 1024px) {

    width: 17rem;

  }
`;

export const ParagraphUI = styled.p`
  margin-top: 3rem;
  font-size: 1.5rem;
  font-weight: 400;
  width: 38rem;
  color: #eaeaea;
  line-height: 36px;
  color: #464646;

  @media (max-width: 800px) {
    margin-top: 4rem;
    margin-right: 2.5rem;
    width: auto;
    font-size: 1.2rem;
    line-height: 30px;
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
  width: 364px;
  cursor: pointer;

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: auto;
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;

  @media (max-width: 1024px) {
    top: auto;
    left: 0;
    right: 0;
    bottom: -75px;

    width: 150px;
    height: 150px;
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

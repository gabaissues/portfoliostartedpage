import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  height: auto;
  flex: 1;
  height: 100vh;

  @media (max-width: 1660px) {
    height: 100vh;
  }

  @media (max-width: 1440px) {
    height: auto;
  }

  @media (max-width: 1280px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 18.75rem;
  height: 18.75rem;
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

  @media (max-width: 1280px) {
    display: none;
  }
`;

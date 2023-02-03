import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  height: 100vh;
  flex: 1;

  @media (max-width: 1024px) {
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
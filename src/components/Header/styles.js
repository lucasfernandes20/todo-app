import styled from 'styled-components';

export const HeaderDiv = styled.header`
  width: 100vw;
  background: ${(props) => (props.themeSelect ? "url('./todo-app-main/images/bg-mobile-light.jpg')" : "url('./todo-app-main/images/bg-mobile-dark.jpg')")};
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  @media(min-width: 824px) {
    background: ${(props) => (props.themeSelect ? "url('./todo-app-main/images/bg-desktop-light.jpg')" : "url('./todo-app-main/images/bg-desktop-dark.jpg')")};;
    background-repeat: no-repeat;
    background-size: cover;
    height: 45vh;
  }
`;

export const Div = styled.div`
  width: 85vw;
  padding: 0 7.5vw;
  display: flex;
  justify-content: space-between;
  @media(min-width: 824px) {
    width: 40vw;
    justify-content: space-between;
  }
`;

export const H1 = styled.h1`
  color: white;
  letter-spacing: 10px;
  font-weight: 700;
  font-size: 20px;
  @media(min-width: 824px) {
    font-size: 40px;
  }
`;

export const Img = styled.img`
  width: 20px;
  height: 20px;
  @media(min-width: 824px) {
    height: 40px;
    width: 40px;
  }
`;

export const TextField = styled.input`
  width: 80vw;
  padding: 0 2.5vw;
  height: 50px;
  background-color: ${(props) => (props.themeSelect ? 'white' : 'hsl(235, 24%, 19%)')};
  border-radius: 5px;
  ::placeholder {
    padding-left: 40px;
  }
  @media(min-width: 824px) {
    width: 35vw;
    height: 80px;
  }
`;

import styled from 'styled-components';

export const HeaderDiv = styled.header`
  width: 100vw;
  background: url('./todo-app-main/images/bg-mobile-light.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Div = styled.div`
  width: 85vw;
  padding: 0 7.5vw;
  display: flex;
  justify-content: space-between;
`;

export const H1 = styled.h1`
  color: white;
  letter-spacing: 10px;
  font-weight: 700;
  font-size: 20px;
`;

export const Img = styled.img`
  width: 20px;
  height: 20px;
`;

export const TextField = styled.input`
  width: 80vw;
  padding: 0 2.5vw;
  height: 50px;
  border-radius: 5px;
  ::placeholder {
    padding-left: 40px;
  }
`;

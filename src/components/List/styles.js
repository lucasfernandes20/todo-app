import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${(props) => (props.themeSelect ? 'white' : 'hsl(235, 24%, 19%)')};
  width: 85vw;
  height: 50vh;
  margin: auto;
  border-radius: 5px;
  transform: translateY(-30px);
  margin-bottom: -30px;
  box-shadow: ${(props) => (props.themeSelect ? '1px 5px 10px hsla(236, 9%, 61%, 0.5)' : null)};
  overflow-y: scroll;
`;

export const Ul = styled.ul`
  height: 50px;
  width: 100%;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => (props.themeSelect ? 'white' : 'hsl(235, 24%, 19%)')};
  width: 80vw;
  padding: 0 2.5vw;
  height: 50px;
  margin: auto;
  transform: translateY(-50px);
  margin-bottom: -50px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const P = styled.p`
  font-size: 14px;
  color: hsl(236, 9%, 61%);
`;

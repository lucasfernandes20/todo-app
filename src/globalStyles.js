import styled from 'styled-components';

const Main = styled.main`
  background-color: ${(props) => (props.themeSelect ? 'hsl(0, 0%, 98%)' : 'hsl(235, 21%, 11%)')};
  overflow-y: none;
  height: 100vh;
`;

export default Main;

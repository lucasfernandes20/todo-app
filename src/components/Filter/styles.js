import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${(props) => (props.themeSelect ? 'white' : 'hsl(235, 24%, 19%)')};
  width: 85vw;
  height: 50px;
  margin: 40px auto 0 auto;
  border-radius: 5px;
  box-shadow: ${(props) => (props.themeSelect ? '1px 5px 10px hsla(236, 9%, 61%, 0.5)' : null)};
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
  @media(min-width: 824px) {
    display: none;
  }
`;

export const P = styled.p`
  color: ${(props) => (props.select ? 'hsl(220, 98%, 61%)' : 'hsl(236, 9%, 61%)')};
  font-weight: 700;
`;

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
  @media(min-width: 824px) {
    transform: translateY(-7vh);
    margin-bottom: -7vh;
    width: 40vw;
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar {
      background-color: transparent;
      width: 8px;
      border-radius: 20px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${(props) => (props.themeSelect ? 'lightgray' : 'hsl(234, 11%, 52%)')};
      border-radius: 20px;
    }
  }
`;

export const Ul = styled.ul`
  height: 50px;
  width: 100%;
  @media(min-width: 824px) {
    height: 10vh;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => (props.themeSelect ? 'white' : 'hsl(235, 24%, 19%)')};
  box-shadow: ${(props) => (props.themeSelect ? '1px 5px 10px hsla(236, 9%, 61%, 0.5)' : null)};
  width: 80vw;
  padding: 0 2.5vw 1vh 2.5vw;
  height: 50px;
  margin: auto;
  transform: translateY(-50px);
  margin-bottom: -50px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  @media(min-width: 824px) {
    transform: translateY(-10vh);
    margin-bottom: -10vh;
    width: 35vw;
    height: 10vh;
  }
`;

export const P = styled.p`
  font-size: 14px;
  color: ${(props) => (props.select ? 'hsl(220, 98%, 61%)' : 'hsl(236, 9%, 61%)')};
  font-weight: ${(props) => (props.select ? '700' : null)};
  cursor: ${(props) => (props.point ? 'pointer' : null)};
  @media(min-width: 824px) {
    font-size: 1.7vh;
    :hover {
      color: ${(props) => (props.select ? 'hsl(220, 98%, 61%)' : 'hsl(233, 14%, 35%)')};
    }
  }
`;

export const Filter = styled.section`
  height: 10vh;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
  @media(min-width: 824px) {
    gap: 2.5vh;
  }
`;

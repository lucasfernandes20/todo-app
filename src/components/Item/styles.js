import styled from 'styled-components';

export const Div = styled.div`
  width:90%;
  padding: 0 5%;
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => (props.themeSelect ? 'hsl(236, 33%, 92%)' : 'hsl(235, 19%, 35%)')};
`;

export const Li = styled.li`
  color: ${(props) => (props.themeSelect ? null : 'hsl(234, 39%, 85%)')};
  list-style: none;
  text-decoration: ${(props) => (props.check ? 'line-through' : 'none')};
  font-weight: 400;
  width: 100%;
`;

export const Ball = styled.div`
  width: 10px;
  height: 10px;
  padding: 5px;
  border: ${(props) => {
    if (props.check) {
      return '1px solid white';
    }
    if (props.themeSelect) {
      return '1px solid hsl(233, 11%, 84%)';
    }
    return '1px solid hsl(235, 19%, 35%)';
  }};
  border-radius: 100px;
  background: ${(props) => (props.check ? 'linear-gradient( hsl(192, 100%, 67%), hsl(280, 87%, 65%))' : null)};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  width: 15px;
`;

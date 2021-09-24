import styled from 'styled-components';

export const Div = styled.div`
  width:90%;
  padding: 0 5%;
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid hsl(236, 33%, 92%);
`;

export const Li = styled.li`
  list-style: none;
  text-decoration: ${(props) => (props.check ? 'line-through' : 'none')};
`;

export const Ball = styled.div`
  width: 25px;
  height: 25px;
  border: 1px solid hsl(233, 11%, 84%);
  border-radius: 100px;
  background: ${(props) => (props.check ? 'linear-gradient( hsl(192, 100%, 67%), hsl(280, 87%, 65%))' : null)};
  margin-right: 10px;
`;

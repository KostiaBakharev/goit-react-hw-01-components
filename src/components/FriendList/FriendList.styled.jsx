import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;
`;

export const Item = styled.li`
  display: flex;
  background-color: #ddd;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 5px;
`;
export const Status = styled.span`
  width: 15px;
  height: 15px;
  margin-right: 5px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;
export const Avatar = styled.img`
  margin-right: 20px;
`;
export const Name = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

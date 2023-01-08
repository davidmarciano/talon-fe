import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  padding: 15px 0px;
`;

const Name = styled.div`
  color: #ffffff;
`;

const Email = styled.div`
  color: rgba(255,255,255, 0.5);
`;

interface User {
  name: string;
  email: string;
};

interface Props {
  user: User;
}

const UserCell = ({ user }: Props) => {
  const { name, email } = user;
  return (
    <Wrapper>
      <Name>{name}</Name>
      <Email>{email}</Email>
    </Wrapper>
  );
}

export default UserCell;
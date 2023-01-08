import { useState } from 'react';
import styled from '@emotion/styled';
import { MultipleSelect, Table } from './components';

const Wrapper = styled.div`
  width: 1340px;
  height: 830px;
  padding: 16px 0px;
  background-color: #222B36;
  border-radius: 8px;
`;

const Title = styled.h1`
  margin: 0px;
  font-size: 17px;
  font-weight: 400;
  padding-left: 16px;
`;

const Audit = () => {
  const [selectedEvents, setSelectedEvents] = useState<string[]>([]);

  return (
    <Wrapper>
      <Title>Events Table</Title>
      <MultipleSelect 
        selectedOptions={selectedEvents}
        setSelectedOptions={setSelectedEvents}
      />
      <Table selectedEvents={selectedEvents} />
    </Wrapper>
  )
};

export default Audit;
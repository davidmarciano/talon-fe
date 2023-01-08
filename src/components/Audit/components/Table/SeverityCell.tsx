import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';

const Wrapper = styled.div<{ bgColors: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
  height: 28px;
  border-radius: 8px;
  color: ${({ color }) => color};
  background-color: ${({ bgColors }) => bgColors};
  text-transform: uppercase;
  font-size: 11px;
`;

type SeverityOptions = 'high' | 'medium' | 'low';

interface Props {
  severity: SeverityOptions;
}

const SeverityCell = ({severity}: Props) => {
  const { palette } = useTheme();

  const bgColors: Record<SeverityOptions, string> = {
    high: palette.error.light,
    medium: palette.warning.light,
    low: palette.info.light,
  };

  const color = palette.common.white;

  return (
    <Wrapper color={color} bgColors={bgColors[severity]}>
      {severity}
    </Wrapper>
  );
};

export default SeverityCell;
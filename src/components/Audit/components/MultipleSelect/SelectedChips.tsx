import { Dispatch, SetStateAction } from 'react';
import { startCase } from 'lodash';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

const styles = {
  box: { display: 'flex', flexWrap: 'wrap', gap: 1 },
  chip: { color: 'common.white',
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
    '& .MuiChip-deleteIcon': { color: 'rgba(255, 255, 255, 0.5)'}
  }
};

interface Props {
  items: string[];
  setItems: Dispatch<SetStateAction<string[]>>;
};

const SelectedChips = ({items, setItems}: Props) => {
  const onChipDelete = (valueToDelete: string) => {
    setItems((prevState) => prevState.filter((item) => item !== valueToDelete));
  };
  
  const onChipMouseDown = (e: any) => e.stopPropagation();

  return (
      <Box sx={styles.box}>
        {items.map((value) => (
          <Chip sx={styles.chip} key={value}
            label={startCase(value)} onMouseDown={onChipMouseDown}
            onDelete={() => onChipDelete(value)} 
          />
        ))}
      </Box>
    )
};

export default SelectedChips;
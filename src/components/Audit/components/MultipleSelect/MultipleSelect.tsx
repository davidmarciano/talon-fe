import { Dispatch, SetStateAction } from 'react';
import { useTheme } from '@mui/material/styles';
import { FormControl, OutlinedInput } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from './InputLabel';
import SelectedChips from './SelectedChips';
import getMenuItems from './getMenuItems';
import { useGetAllEventTypes } from '../../hooks';

const ITEM_HEIGHT = 48;
const ITEM_HORIZONTAL_PADDING = 8;
const MenuProps = {
  PaperProps: {
    sx: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_HORIZONTAL_PADDING * 2,
      width: 250,
      backgroundColor: 'primary.main',
      color: 'rgba(255, 255, 255, 0.5)',
    },
  },
};

const TITLE_TEXT = 'Event Type Filter';

const styles = {
  formControl: { width: 400, margin: '25px 0 0 16px' },
  outline: {
    '& .MuiSelect-icon': { color: 'primary.main' },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'primary.main',
    },
    '&:hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'common.white',
      },
    }
  },
};

interface Props {
  options?: string[];
  selectedOptions: string[];
  setSelectedOptions: Dispatch<SetStateAction<string[]>>;
}

const MultipleSelect = ({ selectedOptions, setSelectedOptions }: Props) => {
  const { data: options, isLoading, error } = useGetAllEventTypes();
  const theme = useTheme();

  const onChange = (e: SelectChangeEvent<typeof selectedOptions>) => {
    setSelectedOptions(e.target.value as string[]);
  };

  return (
    <FormControl sx={styles.formControl}>
      <InputLabel defaultText={TITLE_TEXT} isLoading={isLoading} error={error} />
      <Select 
        labelId="events-label" 
        id="events-select" 
        multiple 
        value={selectedOptions}
        onChange={onChange}
        MenuProps={MenuProps}          
        input={<OutlinedInput id="select-multiple-chip" label={TITLE_TEXT} sx={styles.outline} />}
        renderValue={() => <SelectedChips items={selectedOptions} setItems={setSelectedOptions} />}
        disabled={isLoading || !!error}
      >
        {getMenuItems({ items: options, selectedItems: selectedOptions, theme })}
      </Select>
    </FormControl>
  )
};

export default MultipleSelect;
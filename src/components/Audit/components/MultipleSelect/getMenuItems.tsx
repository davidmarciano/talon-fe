import { startCase } from 'lodash';
import { Theme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';

interface Props {
  items: string[];
  selectedItems: string[];
  theme: Theme;
}

const getMenuItemStyles = (name: string, selectedItems: readonly string[], theme: Theme) => {
  const selected = selectedItems.indexOf(name) > -1;

  return {
    color: selected ? theme.palette.common.white : 'rgba(255, 255, 255, 0.5)',
    fontWeight: selected ? theme.typography.fontWeightMedium : theme.typography.fontWeightRegular,
  };
}

const getMenuItems = ({ items, selectedItems, theme }: Props) => items.map((name) => (
  <MenuItem
    key={name}
    value={name}
    style={getMenuItemStyles(name, selectedItems, theme)}
  >
    {startCase(name)}
  </MenuItem>
));

export default getMenuItems;
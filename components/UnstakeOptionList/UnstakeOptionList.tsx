import { List } from '@mui/material';
import { UnstakeOption } from '../../types/UnstakeOption';
import UnstakeOptionListItem from './UnstakeOptionListItem';

interface Props {
  selectedId?: string;
  options: UnstakeOption[];
  onChange?: (value: string) => void;
}

/**
 * The list of unstaking options which the user can select from.
 */
const UnstakeOptionList = (props: Props) => {
  const { options, onChange = () => {}, selectedId } = props;

  const handleItemSelect = (optionId: string) => {
    onChange(optionId);
  };

  return (
    <List>
      {options.map(({ id, label, fee, value }) => (
        <UnstakeOptionListItem
          id={id}
          selected={id === selectedId}
          onSelect={handleItemSelect}
          key={id}
          label={label}
          fee={fee}
          value={value}
        />
      ))}
    </List>
  );
};

export default UnstakeOptionList;

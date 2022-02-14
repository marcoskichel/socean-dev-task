import { List } from '@mui/material';
import { UnstakeOption } from '../../types/UnstakeOption';
import UnstakeOptionListItem from './UnstakeOptionListItem';

interface Props {
  options: UnstakeOption[];
}

const UnstakeOptionList = (props: Props) => {
  const { options } = props;
  return (
    <List>
      {options.map(({ label, fee, value }) => (
        <UnstakeOptionListItem
          key={label}
          label={label}
          fee={fee}
          value={value}
        />
      ))}
    </List>
  );
};

export default UnstakeOptionList;

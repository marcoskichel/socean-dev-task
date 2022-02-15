import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UnstakeOption } from '../../types/UnstakeOption';
import UnstakeOptionList from './UnstakeOptionList';

describe('UnstakeOptionList', () => {
  const opts: UnstakeOption[] = [
    { id: 'one', label: 'Test One', value: 1, fee: 0.1 },
    { id: 'two', label: 'Test Two', value: 2, fee: 0.2 },
  ];

  it('renders', () => {
    const { asFragment } = render(
      <UnstakeOptionList options={opts} selectedId={opts[0].id} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the right selected item', async () => {
    const { asFragment } = render(
      <UnstakeOptionList options={opts} selectedId={opts[1].id} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('triggers onChange', async () => {
    const onChange = jest.fn();
    render(
      <UnstakeOptionList
        options={opts}
        selectedId={opts[0].id}
        onChange={onChange}
      />,
    );
    const items = screen.getAllByRole('button');
    userEvent.click(items[1]);
    expect(onChange).toHaveBeenLastCalledWith(opts[1].id);
  });
});

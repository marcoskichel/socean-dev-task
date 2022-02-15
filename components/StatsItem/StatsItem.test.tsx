import { render } from '@testing-library/react';
import StatsItem from './StatsItem';

describe('StatsItem', () => {
  it('renders (required props)', () => {
    const { asFragment } = render(
      <StatsItem
        hint="Test Hint"
        title="Test Title"
        value="Test Value"
        progress={20}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders (all props)', () => {
    const { asFragment } = render(
      <StatsItem
        hint="Test Hint"
        title="Test Title"
        value="Test Value"
        progress={20}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

import { render } from '@testing-library/react';
import StakingInfoCard from './StakingInfoCard';

describe('StakingInfoCard', () => {
  it('renders', () => {
    const { asFragment } = render(<StakingInfoCard />);
    expect(asFragment()).toMatchSnapshot();
  });
});

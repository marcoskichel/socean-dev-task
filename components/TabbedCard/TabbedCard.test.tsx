import { render, screen } from '@testing-library/react';
import TabbedCard, { TabData } from './TabbedCard';

describe('TabbedCard', () => {
  const tabs: TabData[] = [
    { label: 'Tab 1', Component: () => <div>Content 1</div> },
    { label: 'Tab 2', Component: () => <div>Content 2</div> },
  ];

  it('renders', () => {
    const { asFragment } = render(<TabbedCard tabs={tabs} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the right tab', async () => {
    render(<TabbedCard tabs={tabs} selectedTab={1} />);
    const selectedTab = await screen.findByText('Content 2');
    expect(selectedTab).toBeInTheDocument();
  });
});

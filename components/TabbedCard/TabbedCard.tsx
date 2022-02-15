import { Card, CardContent, styled, Tab, Tabs } from '@mui/material';
import { ReactElement, ReactNode, SyntheticEvent } from 'react';

const StyledCard = styled(Card)(() => ({
  '> div': { padding: 0 },
}));

const StyledTabs = styled(Tabs)(() => ({
  '.MuiTabs-indicator': { display: 'none' },
  '.MuiTab-root[aria-selected="false"]': {
    backgroundColor: '#181818',
  },
}));

const StyledCardContent = styled(CardContent)(() => ({
  '> *': {
    paddingBottom: 0,
  },
}));

export interface TabData {
  label: string | ReactNode;
  Component: () => ReactElement;
}

interface Props {
  tabs: TabData[];
  selectedTab?: number;
  onTabChange?: (value: number) => void;
}

/**
 * A card with tabs to display different content for each one.
 */
const TabbedCard = (props: Props) => {
  const { tabs, onTabChange = () => {}, selectedTab = 0 } = props;

  const handleTabChange = (event: SyntheticEvent, newValue: number) => {
    onTabChange(newValue);
  };

  const CurrentTabContent = tabs[selectedTab]?.Component;

  return (
    <StyledCard>
      <StyledCardContent>
        <StyledTabs
          variant="fullWidth"
          value={selectedTab}
          onChange={handleTabChange}
        >
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab.label} sx={{ fontSize: '1.125rem' }} />
          ))}
        </StyledTabs>
        {CurrentTabContent && <CurrentTabContent />}
      </StyledCardContent>
    </StyledCard>
  );
};

export default TabbedCard;

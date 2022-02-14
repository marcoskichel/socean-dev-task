import { Card, CardContent, styled, Tab, Tabs } from '@mui/material';
import { ReactElement, SyntheticEvent, useState, ReactNode } from 'react';

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

interface TabData {
  label: string | ReactNode;
  Component: () => ReactElement;
}

interface Props {
  tabs: TabData[];
}

/**
 * A card with tabs
 */
const TabbedCard = (props: Props) => {
  const { tabs } = props;
  const [currentTab, setCurrentTab] = useState<number>(0);

  const handleTabChange = (event: SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  const CurrentTabContent = tabs[currentTab]?.Component;

  return (
    <StyledCard>
      <StyledCardContent>
        <StyledTabs
          variant="fullWidth"
          value={currentTab}
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

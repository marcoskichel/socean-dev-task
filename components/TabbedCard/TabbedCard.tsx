import { Card, CardContent, styled, Tab, Tabs } from '@mui/material';
import { ReactElement, SyntheticEvent, useState } from 'react';

interface TabData {
  label: string;
  Component: () => ReactElement;
}

interface Props {
  tabs: TabData[];
}

const StyledCard = styled(Card)(() => ({
  borderRadius: '1.5rem',
  '> div': { padding: 0 },
}));

const StyledTabs = styled(Tabs)(() => ({
  '.MuiTabs-indicator': { display: 'none' },
  '.MuiTab-root': {
    textTransform: 'none',
  },
  '.MuiTab-root[aria-selected="false"]': {
    backgroundColor: '#181818',
  },
}));

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
      <CardContent>
        <StyledTabs
          variant="fullWidth"
          value={currentTab}
          onChange={handleTabChange}
        >
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab.label} />
          ))}
        </StyledTabs>
        {CurrentTabContent && <CurrentTabContent />}
      </CardContent>
    </StyledCard>
  );
};

export default TabbedCard;

import { useState } from 'react';
import { Box } from '@mui/material';
import { SideButton } from '../SideButton';
import { SideFooter } from '../SideFooter';
import { SideItemContainer } from './style';

const SideItem: React.FC = () => {
  const [active, setActive] = useState('');

  return (
    <SideItemContainer>
      <Box
        display="flex"
        flexDirection="column"
        gap="1rem"
        width="100%"
        alignItems="center"
      >
        <SideButton
          title="Dashboard"
          active={active}
          path="/dashboard"
          setActive={setActive}
          src={['/images/iconDashDisabled.svg', '/images/iconDash.svg']}
        />
        <SideButton
          title="Wallet"
          src={['/images/walletDisabled.svg', '/images/wallet.svg']}
          active={active}
          path="/wallet"
          setActive={setActive}
        />
        <SideButton
          title="Achievements"
          src={['/images/achievementsDisabled.svg', '/images/achievements.svg']}
          active={active}
          path="/achievements"
          setActive={setActive}
        />
        <SideButton
          title="User"
          src={['/images/userDisabled.svg', '/images/user.svg']}
          active={active}
          path="/users"
          setActive={setActive}
        />
        <SideButton
          title="Calendar"
          src={['/images/calendarDisabled.svg', '/images/calendar.svg']}
          active={active}
          path="/calendar"
          setActive={setActive}
        />
        <SideButton
          title="Settings"
          src={['/images/configDisabled.svg', '/images/config.svg']}
          active={active}
          path="/achievements"
          setActive={setActive}
        />
        <SideButton
          title="Doubts"
          src={['/images/chatDisabled.svg', '/images/chat.svg']}
          active={active}
          path="/doubts"
          setActive={setActive}
        />
        <SideButton
          title="Help"
          src={['/images/helpDisabled.svg', '/images/help.svg']}
          active={active}
          path="/help"
          setActive={setActive}
        />
      </Box>
      <SideFooter
        title="Exit"
        src={['/images/exitDisabled.svg', '/images/exit.svg']}
        active={active}
        path="/login"
        setActive={setActive}
      />
    </SideItemContainer>
  );
};

export { SideItem };

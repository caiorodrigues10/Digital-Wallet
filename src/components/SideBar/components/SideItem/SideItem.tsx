import { useState } from 'react';
import { SideButton } from '../SideButton';
import { SideFooter } from '../SideFooter';
import { SideItemContainer } from './style';

const SideItem: React.FC = () => {
  const [active, setActive] = useState('');


  return (
    <SideItemContainer>
      <SideButton
        title="Dashboard"
        active={active}
        setActive={setActive}
        src={['/images/iconDashDisabled.svg', '/images/iconDash.svg']}
      />
      <SideButton
        title="Wallet"
        src={['/images/walletDisabled.svg', '/images/wallet.svg']}
        active={active}
        setActive={setActive}
      />
      <SideButton
        title="Achievements"
        src={['/images/achievementsDisabled.svg', '/images/achievements.svg']}
        active={active}
        setActive={setActive}
      />
      <SideButton
        title="User"
        src={['/images/userDisabled.svg', '/images/user.svg']}
        active={active}
        setActive={setActive}
      />
      <SideButton
        title="Calendar"
        src={['/images/calendarDisabled.svg', '/images/calendar.svg']}
        active={active}
        setActive={setActive}
      />
      <SideButton
        title="Settings"
        src={['/images/configDisabled.svg', '/images/config.svg']}
        active={active}
        setActive={setActive}
      />
      <SideButton
        title="Doubts"
        src={['/images/chatDisabled.svg', '/images/chat.svg']}
        active={active}
        setActive={setActive}
      />
      <SideButton
        title="Help"
        src={['/images/helpDisabled.svg', '/images/help.svg']}
        active={active}
        setActive={setActive}
      />
      <SideFooter
        title="Exit"
        src={['/images/exitDisabled.svg', '/images/exit.svg']}
        active={active}
        setActive={setActive}
      />
    </SideItemContainer>
  );
};

export { SideItem };


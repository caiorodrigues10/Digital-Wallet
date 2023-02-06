import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

const options = [
  {
    name: 'Reino Unido',
    value: (
      <Image src="/images/reino-unido.png" alt="" width="30" height="20" />
    ),
  },
  {
    name: 'Brasil',
    value: <Image src="/images/brasil.png" alt="" width="30" height="20" />,
  },
  {
    name: 'China',
    value: <Image src="/images/china.png" alt="" width="30" height="20" />,
  },
  {
    name: 'Espanha',
    value: <Image src="/images/espanha.png" alt="" width="30" height="20" />,
  },
];

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [flag, setFlag] = useState<JSX.Element | null>(
    options[0]?.value || null
  );
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (img?: JSX.Element) => {
    if (img) {
      setFlag(img);
    }

    setAnchorEl(null);
  };

  return (
    <div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <IconButton
          id="fade-button"
          aria-controls={open ? 'fade-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{ padding: '0.8rem 0.5rem' }}
        >
          {flag}
        </IconButton>
      </motion.div>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClick={() => handleClose()}
        TransitionComponent={Fade}
      >
        {options.map((e) => (
          <MenuItem
            key={e?.name}
            onClick={() => e?.value && handleClose(e.value)}
            sx={{ gap: '1rem' }}
          >
            {e?.value}
            {e?.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

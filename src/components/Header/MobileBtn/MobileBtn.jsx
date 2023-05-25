import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { useMediaQuery } from '@mui/material';

import { MobileBtnSVG } from 'components/SVGcomponents/MobileBtnSVG';

const options = [
  { label: 'Головна', path: '/' },
  { label: 'Наша Команда', path: '/team' },
  { label: 'Платні послуги', path: '/paid-service' },
];

const ITEM_HEIGHT = 48;

const active = {
  color: 'red' /* Колір для активного посилання */,
  fontWeight: 'bold' /* Напівжирний шрифт для активного посилання */,
  /* Додаткові стилі, які ви хочете застосувати для активного посилання */
};

const MobileBtn = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const isMobileView = useMediaQuery('(max-width: 820px)');
  const location = useLocation();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (!isMobileView) {
    return null;
  }

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        sx={{ color: '#166c65' }}
      >
        <MobileBtnSVG />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map(option => (
          <MenuItem
            key={option.label}
            onClick={handleClose}
            component={NavLink}
            to={option.path}
            exact
            isActive={() => option.path === location.pathname}
            activeClassName={active}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MobileBtn;

import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styled from '@emotion/styled';

const options = [
  'View',
  'Move',
  'Remove'
];

const ITEM_HEIGHT = 48;

const StyledMenuItem = styled(MenuItem)({
  fontWeight: 400,
  fontFamily: 'Poppins',
  fontSize: 16,
  lineHeight: '24px'
});

const StyledMenu = styled(Menu)({
  '& .MuiPaper-root': {
    maxHeight: `${ITEM_HEIGHT * 4.5}px`,
    width: '96px',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)'
  }
});

export default function ItemMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <StyledMenu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right'
        }}
        open={open}
        onClose={handleClose}
      >
        {options.map((option) => (
          <StyledMenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}
import { useState } from 'react';
import React from 'react';
// styled imports
import { StyledInputBase, Search, SearchIconWrapper } from './StyledComponents';
// material ui imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
// zustand store
import useDocStore from '../../src/store/useDocstore.js';
import { Drawer } from '@mui/material';
import { makeStyles } from '@mui/styles';

const Sidenav = () => {
  const [searchValue, setSearchValue] = useState('');
  // drawer control states
  const toggleDrawerControl = useDocStore((state) => state.toggleDrawerControl);
  const drawerControl = useDocStore((state) => state.drawerControl);
  const drawerAnchor = 'left';
  // basic search states
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <React.Fragment>
      <Drawer
        anchor={drawerAnchor}
        open={drawerControl}
        onClose={toggleDrawerControl}
      >
        Some list of menu items
      </Drawer>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={toggleDrawerControl}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Angular Docs Custom
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                value={searchValue}
                onChange={handleSearch}
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};

export default Sidenav;

import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Icon from 'src/utils/Icon';
import { Link } from 'react-router-dom';
import HeaderStyled from './overrides/headerStyle';
import { Box, Fab, IconButton } from '@mui/material';
import { Menu } from 'src/features/menu';
import * as menu from './config';
import { useNavigate } from 'react-router-dom';
import useResponsive from 'src/hooks/useResponsive';
import { MobileDialog } from 'src/features/dialog';
import { useSelector } from 'react-redux';
import { userSelector } from 'src/redux/userSlice';
import MenuPopover from './menuPopover';
export default function BasicAppBar() {
  const { isAuthentic, user } = useSelector(userSelector);
  const navigate = useNavigate();
  const [scrollY, setScrollY] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  React.useLayoutEffect(() => {
    const handleScroll = (e) => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const isDesktop = useResponsive("up", "md")
  return (
    <>
      {isDesktop &&
        <HeaderStyled
          position='fixed'
          className={scrollY > 200 ? 'scrolled' : ''}>
          <Toolbar>
            <Link to='/'>
              <Icon path='logo' className='logo' />
            </Link>

            <Box ml={'auto'}>
              <Menu menu={menu} />
            </Box>
            {isAuthentic ? (
              <MenuPopover user={user} />
            ) : (
              <Fab
                onClick={() => navigate('/auth/signin')}
                variant='extended'
                size='small'
                color='primary'
                className='btn-sign'>
                Sign In
              </Fab>
            )}
          </Toolbar>
        </HeaderStyled>
      }
      {!isDesktop &&
        <HeaderStyled
          position='fixed'
          className={scrollY > 200 ? 'scrolled' : ''}>
          <Toolbar>
            <Link to='/'>
              <Icon path='logo' className='logo' />
            </Link>
            <IconButton sx={{ ml: 'auto' }} onClick={() => setOpen(true)}>
              <Icon path='humberg' className='humberg' />
            </IconButton>
          </Toolbar>
          <MobileDialog open={open} handleClose={() => setOpen(false)} />
        </HeaderStyled>
      }
    </>
  );
}

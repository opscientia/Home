import {
  Toolbar,
  Typography,
  Link as MuiLink,
  Box,
  IconButton,
  useTheme,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import CookiesStyled from './overrides/cookiesStyle';
import useWindowSize from 'src/hooks/windowResize';
import useResponsive from 'src/hooks/useResponsive';

import Icon from 'src/utils/Icon';
function Cookies() {
  const isDesktop = useResponsive("up", "md")
  const theme = useTheme();
  const [offSetRight, setOffSetRight] = React.useState(0);
  const right = React.useRef(null);
  const windowSize = useWindowSize();
  React.useEffect(() => {
    setOffSetRight(right.current.getBoundingClientRect().right);
  }, [windowSize]);

  return (
    <CookiesStyled
      sx={{
        [theme.breakpoints.down('md')]: {
          background: 'none',
        },
      }}
      position='fixed'
      width={offSetRight}>
      {isDesktop &&
        <Toolbar>
          <Typography>
            This site uses cookies, for purposes included in our
            <Link to='/' className='privacy-link'>
              Privacy Policy
            </Link>
            .
          </Typography>
          <MuiLink
            underline='none'
            sx={{
              fontFamily: "'Exo 2'",
              fontStyle: 'italic',
              ml: 1,
              cursor: 'pointer',
            }}>
            I accept
          </MuiLink>
          <Box className='line' ref={right} />
        </Toolbar>
      }
      {!isDesktop &&
        <Toolbar className='toolbar' sx={{ background: 'red' }}>
          <IconButton sx={{ position: 'absolute', right: 15, top: 0 }}>
            <Icon mx={2} path='Cancel' />
          </IconButton>

          <Box className='color'>
            <Icon path='clr' />

            <Typography sx={{ mx: 2 }}>
              This site uses cookies, for purposes
              <br /> included in our
              <Link to='/' className='privacy-link'>
                Privacy Policy
              </Link>
              .
            </Typography>
          </Box>

          <Box display='none' className="line" ref={right} />
        </Toolbar>
      }
    </CookiesStyled>
  );
}

export default Cookies;

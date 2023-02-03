import React from 'react'
import SponcersStyled from './overrides/sponcersStyle'
import { Box, Typography } from '@mui/material'
import Marquee from 'react-fast-marquee'

function Sponcers() {
  const icons = [
    { name: 'Filecoin', src: '/static/icons/Filecoin.svg' },
    { name: 'gitcoin', src: '/static/icons/Gitcoin.svg' },
    // { name: 'protocol labs', src: '/static/icons/Filecoin.svg' },
    // { name: 'desci world', src: '/static/icons/Filecoin.svg' },
    // { name: 'Fleming Protocol', src: '/static/icons/Filecoin.svg' },
    // { name: 'active inference lab', src: '/static/icons/Filecoin.svg' },
    // { name: 'foresight institute', src: '/static/icons/Filecoin.svg' },
    // { name: 'Kernel', src: '/static/icons/Filecoin.svg' },
    // { name: 'LabDAO', src: '/static/icons/Filecoin.svg' },
    // { name: 'W3WS', src: '/static/icons/Filecoin.svg' },
    // { name: 'DeSci Labs', src: '/static/icons/Filecoin.svg' },
  ]
  return (
    <SponcersStyled component='section'>
      <Box>
        <Typography
          letterSpacing={2.4}
          mb={3}
          variant='h1'
          color='primary'
          textAlign='center'
          fontFamily="'Exo 2'"
          fontWeight={500}>
          SPONSOR & PARTNERS
        </Typography>
        <Box justifyContent='center' display='flex' px={3}>
          <img src='static/images/Line 1.png' alt='fasdf' />
        </Box>
      </Box>

      <Box className='sponsor-container' px={3}>
        <Marquee speed={50} gradient={false}>
          {icons.map((icon, index) => (
            <Box
              key={index}
              sx={{ mx: 5 }}
              component='img'
              src={icon.src}
              alt={icon.name}
            />
          ))}
          {/* <Box
            sx={{ mx: 5 }}
            component="img"
            src="/static/icons/Filecoin.svg"
          />
          
          <Box
            sx={{ mx: 5 }}
            component="img"
            src="/static/icons/DeSci Labs.svg"
          />
          <Box
            sx={{ mx: 5 }}
            component="img"
            src="/static/icons/Ocean Protocol.svg"
          />
          <Box sx={{ mx: 5 }} component="img" src="/static/icons/Lobby3.svg" />
          <Box
            sx={{ mx: 5 }}
            component="img"
            src="/static/icons/DeSci Foundation.svg"
          /> */}
        </Marquee>
      </Box>
    </SponcersStyled>
  )
}

export default Sponcers

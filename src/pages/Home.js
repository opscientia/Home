import React from 'react';
import {
  Hero,
  About,
  Join,
  Donate,
  Testmonial,
  Sponcers,
  Subscribe,
} from 'src/features/home';
import { OpsciCard } from 'src/features/cards';
import { Container, Grid, Box, useTheme } from '@mui/material';

const opsicarddata = [
  {
    icon: '/static/icons/Vector (3).svg',
    title: 'OpSci Verse',
    description:
      'A portable account for web-native scientists that can be used to interact with any DeSci web application. Choose to be pseudonymous or not. Control how you present your scientific persona online. Prove your credentials while remaining private.',
    action: 'CLAIM YOUR PROFILE',
    href: '/',
  },
  {
    icon: '/static/icons/Research.svg',
    title: 'Fellowship & Research',
    description:
      'The OpSci dWeb Fellowship is a 12-week program that provides a stipend for talented undergraduates, students, and post-doctoral scholars to work on open source software development and basic research that aligns with the Opscientia mission.',
    action: 'BECOME A FELLOW',
    href: '/',
  },
  {
    icon: '/static/icons/science.svg',
    title: 'An Open Science Commons',
    description:
      'Commons is a free, open-access platform for publishing and discovering large scientific datasets, computational workflows, and digital laboratory notebooks. Knowledge artifacts are permanently archived on decentralized storage networks.',
    action: 'DISCOVER & PUBLISH',
    href: '/',
  },
];
function Home() {
  const theme = useTheme();
  return (
    <div>
      <Hero />
      <About />
      <Box
        pb={12}
        sx={{
          background:
            'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 49.48%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(static/images/card-img.png)',

          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '600px',

          [theme.breakpoints.down('md')]: {
            background:
              'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 50%, #000000 100%),linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(/static/images/donate-bg.png)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: 'auto',
          },
        }}>
        <Container>
          <Grid container justifyContent='center' spacing={3}>
            {opsicarddata.map((card, index) => (
              <Grid item md={4} sm={6} key={index}>
                <OpsciCard data={card} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Join />
      <Box>
        <Testmonial />
      </Box>
      <Donate />
      <Sponcers />
      <Subscribe />
    </div>
  );
}

export default Home;

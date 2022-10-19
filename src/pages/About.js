import { Box } from '@mui/material';
import React from 'react';
import { Hero, RoadMap } from 'src/features/about';
function About() {
  return (
    <Box component='section'>
      <Hero />
      <RoadMap />
    </Box>
  );
}

export default About;

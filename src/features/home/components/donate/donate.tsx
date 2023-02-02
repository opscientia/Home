import React from 'react'
import DonateStyled from './overrides/donateStyle'
import { Container, Box, Typography, Button, Stack } from '@mui/material'
import { DonateCard } from '@features/cards'
import Slider from 'react-slick'
import useWindowSize from '@hooks/windowResize'

const cardMockData: any[] = [
  {
    title: 'AI Safety: Original Work',
    img: '/Frame 837 (2).svg',
    desc: 'Cepheids are important cosmic benchmarks for scaling galactic and extragalactic distances.',
    tag1: 'DeSci Tooling',
    tag2: 'Astronomy',
    contributors: [
      'Ellipse 23.svg',
      'Ellipse.svg',
      'Ellipse 23.svg',
      'Ellipse 23.svg',
      ',Ellipse.svg',
      'Ellipse 23.svg',
      'Ellipse.svg',
      'Ellipse 23.svg',
    ],
  },
  {
    title: 'Finding Cepheid Variable Stars',
    img: '/Frame 837.svg',
    desc: 'Foresight Institute - AI Safety Contribution',
    tag1: 'Papers',
    tag2: 'Artificial Intelligence',
    contributors: ['Ellipse.svg', 'Ellipse 23.svg'],
  },

  {
    title: 'Arterial Spin Labeling Sleep Study in Teenagers',
    img: '/Frame 837 (3).svg',
    desc: 'ASL images from 40 participants, average age 15.5 years, 45% female, with sleep deprivation',
    tag1: 'OpSci Commons',
    tag2: 'Neuroscience',
    contributors: [
      'Ellipse 23.svg',
      'Ellipse.svg',
      'Ellipse 23.svg',
      'Ellipse 23.svg',
      'Ellipse.svg',
      'Ellipse 23.svg',
    ],
  },

  {
    title: 'Pre-Registered Experiment: fMRI Ibogaine Study',
    img: 'Frame 837 (4).svg',
    desc: 'https://osf.io/zzzz/',
    tag1: 'Open Science',
    tag2: 'Framework',
    contributors: ['Ellipse 23.svg', 'Ellipse.svg', 'Ellipse 23.svg'],
  },
  {
    title: 'AI Safety: Original Work',
    img: '/Frame 837 (2).svg',
    desc: 'Cepheids are important cosmic benchmarks for scaling galactic and extragalactic distances.',
    tag1: 'DeSci Tooling',
    tag2: 'Astronomy',
    contributors: [
      'Ellipse 23.svg',
      'Ellipse.svg',
      'Ellipse 23.svg',
      'Ellipse 23.svg',
      ',Ellipse.svg',
      'Ellipse 23.svg',
      'Ellipse.svg',
      'Ellipse 23.svg',
    ],
  },
  {
    title: 'Finding Cepheid Variable Stars',
    img: '/Frame 837.svg',
    desc: 'Foresight Institute - AI Safety Contribution',
    tag1: 'Papers',
    tag2: 'Artificial Intelligence',
    contributors: ['Ellipse.svg', 'Ellipse 23.svg'],
  },
]

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  arrows: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 765,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
}
function Donate() {
  const [offSetLeft, setOffSetLeft] = React.useState(0)
  const left = React.useRef(null)
  const windowSize = useWindowSize()
  React.useEffect(() => {
    setOffSetLeft(left?.current?.getBoundingClientRect()?.left)
  }, [windowSize])
  return (
    <DonateStyled component='section' offsetwidth={offSetLeft}>
      <Container maxWidth='lg'>
        <Stack
          spacing={0}
          alignItems='flex-start'
          justifyContent='flex-start'
          position='relative'>
          <Typography
            ref={left}
            variant='h1'
            fontFamily="'Exo 2'"
            className='title'
            fontWeight={500}>
            Discover
          </Typography>
          <Typography
            color='primary'
            variant='h1'
            fontFamily="'Exo 2'"
            fontWeight={500}>
            Impact Certificates
          </Typography>
          <Typography variant='h1' fontFamily="'Exo 2'" fontWeight={500}>
            for Open Science
          </Typography>
          <Typography
            variant='h3'
            fontWeight={500}
            fontStyle='italic'
            className='comming-soon'>
            *coming soon
          </Typography>
        </Stack>
      </Container>
      <Box
        sx={{
          position: 'absolute',
          right: 0,
          top: 0,
          display: { xs: 'none', md: 'block' },
        }}
        component='img'
        src='/static/images/right.png'
        alt=''
      />
      <Box className='slider-container'>
        <Slider {...settings}>
          {cardMockData.map((cardData, idx) => (
            <Box px={1} key={idx}>
              <DonateCard cardData={cardData} />
            </Box>
          ))}
        </Slider>
        <Box
          sx={{
            mx: 'auto',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            direction: 'row-reverse',
            mt: 3,
          }}>
          {/* <Button
            sx={{ mt: 2, mx: 1, fontFamily: "'Exo 2'" }}
            size="small"
            variant="contained">
            Learn More
          </Button> */}
          <Button
            sx={{
              mx: 1,
              mt: 2,
              borderColor: '#fff',
              fontFamily: "'Exo 2'",
              ':hover': {
                background: '#FFf',
              },
            }}
            size='small'>
            Load More
          </Button>
        </Box>
      </Box>
    </DonateStyled>
  )
}

export default Donate

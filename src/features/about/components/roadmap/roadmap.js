import React, { useEffect, useRef } from 'react'
import RoadMapStyled from './overrides/roadmapStyle'
import { Container, Stack, Box, Typography, IconButton, Grid } from '@mui/material'
import useWindowSize from 'src/hooks/windowResize'
import Icon from 'src/utils/Icon'
function Hero() {
    const [offSetLeft, setOffSetLeft] = React.useState(0);
    const [offSetRight, setOffSetRight] = React.useState(0);
    const left = useRef(null);
    const right = useRef(null);
    const windowSize = useWindowSize();
    useEffect(() => {
        setOffSetLeft(left.current.getBoundingClientRect().left);
        setOffSetRight(right.current.getBoundingClientRect().right);

    }, [windowSize]);
    return (
        <RoadMapStyled component="section" styleprops={{ left: offSetLeft, right: offSetRight }}>
            <Container>
                <Grid container justifyContent='center'>
                    <Grid item xs={12} md={8}>
                        <Stack spacing={8}>
                            <Stack spacing={3} direction="row">
                                <Box className='ic-container'>
                                    <Icon path="Image" />
                                </Box>
                                <Stack spacing={3}>
                                    <Typography className="title-right" ref={right} fontFamily='Montserrat' variant="h1" fontWeight={300} color="primary">
                                        VISION
                                    </Typography>
                                    <Typography variant="h5" fontWeight={400}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                    </Typography>
                                </Stack>
                            </Stack>
                            <Stack spacing={3} direction="row">

                                <Stack spacing={3}>
                                    <Typography className="title-left" ref={left} textAlign="right" fontFamily='Montserrat' variant="h1" fontWeight={300} color="primary">
                                        MISSION
                                    </Typography>
                                    <Typography textAlign="right" variant="h5" fontWeight={400}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                    </Typography>
                                </Stack>
                                <Box className='ic-container'>
                                    <Icon path="Image" />
                                </Box>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </RoadMapStyled>
    )
}

export default Hero
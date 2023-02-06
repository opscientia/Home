import React from 'react';

import { Typography, TypographyProps } from '@mui/material';

interface IProps {
  title: string;
  xs?: TypographyProps;
  gradient?: string;
}

export default function GradientText({ title, xs, gradient, }: IProps) {
  return (
    <Typography
      sx={{
        background: gradient|| 'linear-gradient(94.39deg, #F8D1D1 0%, #FDA0FF 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
        fontWeight:600,
        '&:hover':{
          background:'linear-gradient(180deg, #FDF5FF -77.78%, #B477C9 180.56%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textFillColor: 'transparent',

        },
        ...xs,
      }}
    >
       {title}
    </Typography>
  );
}
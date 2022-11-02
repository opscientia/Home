// material
import { GlobalStyles as GlobalThemeStyles } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// ----------------------------------------------------------------------

export default function GlobalStyles({ children }) {
  const theme = useTheme()
  return (
    <>
      <GlobalThemeStyles
        styles={{
          '*': {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box'
          },
          html: {
            width: '100%',
            height: '100%',
            WebkitOverflowScrolling: 'touch'
          },
          body: {
            width: '100%',
            height: '100%'
          },
          '#root': {
            width: '100%',
            height: '100%'
          },
          input: {
            '&[type=number]': {
              MozAppearance: 'textfield',
              '&::-webkit-outer-spin-button': {
                margin: 0,
                WebkitAppearance: 'none'
              },
              '&::-webkit-inner-spin-button': {
                margin: 0,
                WebkitAppearance: 'none'
              }
            }
          },
          img: { display: 'block', maxWidth: '100%' },
          "& .react-svg": {
            lineHeight: "80%",
            '& > div': {
              lineHeight: "80%"
            }
          },
          '& .slick-slider': {
            [theme.breakpoints.down('md')]: {
              paddingBottom: 50,
            },
            '& .slick-dots': {
              [theme.breakpoints.down('md')]: {
                bottom: 25,
              },
              li: {
                width: 'auto',
                height: 'auto',
                button: {
                  width: 25,
                  height: 2,
                  padding: 0,
                  background: theme.palette.text.secondary,
                  transition: theme.transitions.create(['width', 'all'], {
                    duration: theme.transitions.duration.standard,
                  }),
                  '&:before': {
                    display: 'none'
                  }
                },

              },
              '& .slick-active': {
                button: {
                  width: 45,
                  height: 2,
                  padding: 0,
                  transition: theme.transitions.create(['width', 'all'], {
                    duration: theme.transitions.duration.standard,
                  }),
                  background: theme.palette.primary.main
                }
              }
            }
          }

        }}
      />
      {children}
    </>
  );
}

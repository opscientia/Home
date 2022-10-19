import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';

const SigninCardStyled = styled(Card)(({ theme }) => ({
  background: 'transparent',
  boxShadow: 'none',
  border: 'none',
  backgroundColor: theme.palette.grey['A100'],
  maxWidth: 423,
  width: '100%',
  borderRadius: theme.spacing(2),
  '& .MuiCardContent-root': {
    padding: theme.spacing(4),
  },
  '& .MuiInputBase-root': {
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.grey[600],
    padding: theme.spacing(0.5, 1.5),
    borderRadius: theme.spacing(2),
    minHeight: 48,
  },
  '& .forget-pass': {
    '& a': {
      color: theme.palette.common.white,
      textDecoration: 'none',
      alignSelf: 'flex-end',
      marginTop: theme.spacing(1),
      fontSize: theme.typography.body2.fontSize,
      fontFamily: "'Exo 2'",
    },
  },
  '& .btn-signin': {
    fontFamily: "'Exo 2'",
    textTransform: 'capitalize',
    fontWeight: 600,
  },
  '& .register': {
    '& a': {
      color: theme.palette.common.white,
      textDecoration: 'none',
      fontSize: theme.typography.body2.fontSize,
      fontFamily: "'Exo 2'",
    },
    '& a:last-of-type': {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      fontSize: theme.typography.subtitle1.fontSize,
      fontFamily: "'Exo 2'",
    },
  },
}));
export default SigninCardStyled;

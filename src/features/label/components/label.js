import PropTypes from 'prop-types';
// material
import LabelStyled from './overrides/labelStyle'

// ----------------------------------------------------------------------

export default function Label({ color = 'default', variant = 'ghost', children, ...other }) {
  return (
    <LabelStyled ownerState={{ color, variant }} {...other}>
      {children}
    </LabelStyled>
  );
}

Label.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error']),
  variant: PropTypes.oneOf(['filled', 'outlined', 'ghost'])
};

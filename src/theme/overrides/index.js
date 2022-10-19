import { merge } from 'lodash';
import Typography from './Typography';
import Button from './Button';
import IconButton from './iconButton';

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return merge(Typography(theme), Button(theme), IconButton(theme));
}

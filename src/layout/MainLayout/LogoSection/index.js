import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import config from 'config';
import { Text } from 'ui-component/Text';
// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
  <ButtonBase disableRipple component={Link} to={config.defaultPath}>
    <Text>PJMS</Text>
  </ButtonBase>
);

export default LogoSection;

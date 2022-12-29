import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// material-ui imports
import { useTheme } from '@mui/material/styles';
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography
} from '@mui/material';

// project imports
import AnimateButton from 'components/ui-component/extended/AnimateButton';
import useApi from 'hooks/useApi';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { apiRoutes } from 'controller/ApiRoutes';
import { getAuth, logout, setAuth, setRememberMe } from 'service';
import { useEffect } from 'react';

const schema = yup.object().shape({
  email: yup.string().email('Must be a valid email').max(255).required('Email is required'),
  password: yup.string().max(255).required('Password is required')
});

const Login = ({ ...others }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [remember, setRemember] = useState(false);

  // api
  const { request } = useApi(apiRoutes.signin);

  const theme = useTheme();
  const navigate = useNavigate();
  const auth = getAuth();

  // form
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    if (!auth.token) setRememberMe(remember);
  }, [remember, auth.token]);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleRemember = () => {
    setRemember(!remember);
  };

  const onSubmit = async (data) => {
    const res = await request(data);

    if (res?.data?.status === 'success') {
      setAuth({
        auth_data: res.data
      });
      navigate('/');
      window.location.reload();
    } else {
      setErrorMsg(res.response.data.error);
      logout();
    }
  };

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12} container alignItems="center" justifyContent="center">
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1">Sign in with Email address</Typography>
          </Box>
        </Grid>
      </Grid>

      {errorMsg && (
        <Alert className="my-[8px]" severity="error">
          {errorMsg}
        </Alert>
      )}

      <form noValidate onSubmit={handleSubmit(onSubmit)} {...others}>
        <FormControl fullWidth error={Boolean(errors?.email)} sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="outlined-adornment-email-login">Email Address</InputLabel>
          <OutlinedInput id="outlined-adornment-email-login" type="email" label="Email Address" {...register('email')} />
          {errors?.email && (
            <FormHelperText error id="standard-weight-helper-text-email-login">
              {errors.email.message}
            </FormHelperText>
          )}
        </FormControl>

        <FormControl fullWidth error={Boolean(errors?.password)} sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="outlined-adornment-password-login">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password-login"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  size="large"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            {...register('password')}
          />
          {errors?.password && (
            <FormHelperText error id="standard-weight-helper-text-password-login">
              {errors.password.message}
            </FormHelperText>
          )}
        </FormControl>
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
          <FormControlLabel
            control={<Checkbox checked={remember} onChange={handleRemember} name="checked" color="primary" />}
            label="Remember me"
          />
          <Typography variant="subtitle1" color="secondary" sx={{ textDecoration: 'none', cursor: 'pointer' }}>
            Forgot Password?
          </Typography>
        </Stack>
        {errors.submit && (
          <Box sx={{ mt: 3 }}>
            <FormHelperText error>{errors.submit}</FormHelperText>
          </Box>
        )}

        <Box sx={{ mt: 2 }}>
          <AnimateButton>
            <Button className="bg-[#673ab7]" disableElevation fullWidth size="large" type="submit" variant="contained" color="secondary">
              Sign in
            </Button>
          </AnimateButton>
        </Box>
      </form>
    </>
  );
};

export default Login;

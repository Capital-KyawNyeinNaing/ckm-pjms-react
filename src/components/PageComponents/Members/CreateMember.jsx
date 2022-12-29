import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// third party imports
// import Select from 'react-select';

// mui imports
import { Button, Divider, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AnimateButton from 'components/ui-component/extended/AnimateButton';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Must be a valid email').max(255).required('Email is required'),
  phoneNumber: yup
    .string()
    .required('Phone number is required')
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(11, 'too short')
    .max(13, 'too long')
});

const MemberPage = (props) => {
  const [age, setAge] = React.useState('');
  const theme = useTheme();

  // form
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const onSubmit = async (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <form className="space-y-8 divide-y divide-gray-200" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div className="space-y-6 sm:space-y-5">
          <div>
            <Typography color={theme.palette.common.black} gutterBottom variant={'h2'}>
              Member Crate
            </Typography>
          </div>

          <Divider
            sx={{
              backgroundColor: '#90CAF9',
              height: 2
            }}
          />

          <div className="space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Name
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <TextField
                  className="w-[512px]"
                  id="filled-required"
                  label="Fill name"
                  defaultValue=""
                  variant="filled"
                  required
                  error
                  helperText="Incorrect entry."
                  {...register('name')}
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Email address
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <TextField
                  className="w-[512px]"
                  id="filled-required"
                  label="Fill email address"
                  defaultValue=""
                  variant="filled"
                  required
                  error
                  helperText="Incorrect entry."
                  {...register('email')}
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="about" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Phone Number
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <TextField
                  className="w-[512px]"
                  id="filled-required"
                  label="Fill phone number"
                  defaultValue=""
                  variant="filled"
                  required
                  error
                  helperText="Incorrect entry."
                  {...register('phoneNumber')}
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Select Project
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }} error required>
                  <InputLabel id="demo-simple-select-filled-label">Select Project</InputLabel>
                  <Select
                    className="w-[512px]"
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    {...register('projectId')}
                  >
                    <MenuItem value="">
                      <em>Select Project</em>
                    </MenuItem>
                    {props?.projectData?.length > 0 &&
                      props.projectData.map((data, key) => (
                        <MenuItem value={data._id} key={key}>
                          {data.projectName}
                        </MenuItem>
                      ))}
                  </Select>
                  <FormHelperText>Error</FormHelperText>
                </FormControl>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Select Role
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }} error required>
                  <InputLabel id="demo-simple-select-filled-label">Select Role</InputLabel>
                  <Select
                    className="w-[512px]"
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    {...register('roleId')}
                  >
                    <MenuItem value="">
                      <em>Select Role</em>
                    </MenuItem>
                    {props?.roleData?.length > 0 &&
                      props.roleData.map((data, key) => (
                        <MenuItem value={data._id} key={key}>
                          {data.roleName}
                        </MenuItem>
                      ))}
                  </Select>
                  <FormHelperText>Error</FormHelperText>
                </FormControl>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                Member Photo
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <div className="flex items-center">
                  <span className="h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                    <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                  <button
                    type="button"
                    className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
        <div className="opacity-0">Button</div>
        <div className="pt-5 sm:col-span-2 sm:mt-0">
          <div className="flex justify-start">
            <AnimateButton>
              <Button
                className="bg-[#673ab7] w-[200px]"
                disableElevation
                fullWidth
                size="large"
                variant="contained"
                color="secondary"
                type="submit"
              >
                Add member
              </Button>
            </AnimateButton>
          </div>
        </div>
      </div>
    </form>
  );
};

MemberPage.propTypes = {
  memberData: PropTypes.array,
  projectData: PropTypes.array,
  roleData: PropTypes.array
};

export default MemberPage;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// third party imports
import Select from 'react-select';

// mui imports
import { Button, Grid, Typography } from '@mui/material';
import AnimateButton from 'components/ui-component/extended/AnimateButton';

const MemberListPage = (props) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Members</h1>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          {/* <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            Add member
          </button> */}
          <AnimateButton>
            <Button
              component={Link}
              to="/member/create"
              className="bg-[#673ab7]"
              disableElevation
              fullWidth
              size="large"
              variant="contained"
              color="secondary"
            >
              Add member
            </Button>
          </AnimateButton>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      <a href="#" className="group inline-flex">
                        Name
                        <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                          down arrow
                        </span>
                      </a>
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      <a href="#" className="group inline-flex">
                        Email
                        <span className="ml-2 flex-none rounded bg-gray-200 text-gray-900 group-hover:bg-gray-300">down arrow</span>
                      </a>
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      <a href="#" className="group inline-flex">
                        Phone Number
                        <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                          down arrow
                        </span>
                      </a>
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      <a href="#" className="group inline-flex">
                        Role
                        <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                          down arrow
                        </span>
                      </a>
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                {props?.memberData?.length > 0 ? (
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {props.memberData.map((data, key) => (
                      <tr key={key}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{data.name}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{data.email}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{data.phoneNumber}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{data.phoneNumber}</td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <Link to={`/member/edit/${data._id}`} className="text-indigo-600 hover:text-indigo-900">
                            Edit<span className="sr-only">, {data.name}</span>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                ) : (
                  <div className="w-full">
                    test
                    {/* <Typography component="h1">Sorry, No result data found!</Typography> */}
                  </div>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MemberListPage.propTypes = {
  memberData: PropTypes.array
};

export default MemberListPage;

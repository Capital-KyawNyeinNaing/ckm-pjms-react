import React from 'react';

// mui
import { Typography } from '@mui/material';

// api
import useApi from 'hooks/useApi';
import { apiRoutes } from 'controller/ApiRoutes';
import { useEffect } from 'react';

const Dashboard = () => {
  const { request: projectRequest, responseData: projectData } = useApi(apiRoutes.project);
  const { request: fileRequest, responseData: fileData } = useApi(apiRoutes.file);

  const href = process.env.REACT_APP_IMAGE_HREF;

  const getImage = fileData?.data?.find((f) => projectData?.data?.find((p) => f._id === p.projectImage));

  useEffect(() => {
    projectRequest();
    fileRequest();
  }, [projectRequest, fileRequest]);

  return (
    <div className="space-y-4">
      <Typography variant="h3">Projects</Typography>
      <div className="grid grid-cols-12 gap-5">
        {projectData?.data?.length > 0 &&
          projectData.data.map((data, key) => (
            <div key={key} className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6 col-span-6">
              <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
                <div className="ml-4 mt-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-12 w-12 rounded-full" src={`${href}/${getImage?.path}`} alt="" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">{data.projectName}</h3>
                      <p className="text-sm text-gray-500">{data.projectDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;

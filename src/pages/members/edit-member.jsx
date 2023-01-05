import React, { useCallback, useEffect } from 'react';

// api
import useApi from 'hooks/useApi';
import { apiRoutes } from 'controller/ApiRoutes';

// project imports
import { MemberPage } from 'components/PageComponents';

const CreateMember = () => {
  const { request: memberRequest, responseData: memberData } = useApi(apiRoutes.member);
  const { request: projectRequest, responseData: projectData } = useApi(apiRoutes.project);
  const { request: roleRequest, responseData: roleData } = useApi(apiRoutes.role);

  useEffect(() => {
    memberRequest();
    projectRequest();
    roleRequest();
  }, [memberRequest, projectRequest, roleRequest]);

  return <MemberPage memberData={memberData?.data} projectData={projectData?.data} roleData={roleData?.data} />;
};

export default CreateMember;

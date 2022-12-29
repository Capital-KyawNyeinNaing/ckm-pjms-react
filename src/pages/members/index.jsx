import React, { useCallback, useEffect } from 'react';

// api
import useApi from 'hooks/useApi';
import { apiRoutes } from 'controller/ApiRoutes';

// project imports
import { MemberPage } from 'components/PageComponents';

const Member = () => {
  const { request: memberRequest, responseData: memberData } = useApi(apiRoutes.member);
  const { request: roleRequest, responseData: roleData } = useApi(apiRoutes.role);

  useEffect(() => {
    memberRequest();
    roleRequest();
  }, [memberRequest, roleRequest]);

  const result1 = [
    { id: 1, name: 'Sandra', type: 'user', username: 'sandra' },
    { id: 2, name: 'John', type: 'admin', username: 'johnny2' },
    { id: 3, name: 'Peter', type: 'user', username: 'pete' },
    { id: 4, name: 'Bobby', type: 'user', username: 'be_bob' }
  ];

  const result2 = [
    { id: 2, name: 'John', email: 'johnny@example.com' },
    { id: 4, name: 'Bobby', email: 'bobby@example.com' }
  ];

  const propsData = ['_id', 'roleName'];

  const result = roleData?.data.filter((r1) => {
    console.log('role 1 => ', r1._id);
    return !memberData?.data.some((r2) => {
      console.log('role 2 => ', r2._id);
      return r1._id === r2._id;
    });
  });
  // .map(function (o) {
  //   return propsData.reduce((newo, name) => {
  //     newo[name] = o[name];
  //     return newo;
  //   }, {});
  // });

  console.log(result);

  return <MemberPage memberData={memberData?.data} />;
};

export default Member;

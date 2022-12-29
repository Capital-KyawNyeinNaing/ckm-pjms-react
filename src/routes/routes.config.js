import { lazy } from 'react';

// project imports
import Loadable from 'components/ui-component/Loadable';

// utilities routing
const DashboardPage = Loadable(lazy(() => import('pages/dashboard')));
const UtilsTypography = Loadable(lazy(() => import('pages/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('pages/utilities/Color')));

// page imports
const LoginPage = Loadable(lazy(() => import('pages/auth/Login')));
const RegisterPage = Loadable(lazy(() => import('pages/auth/register')));
const MemberListPage = Loadable(lazy(() => import('pages/members')));
const CreateMemberPage = Loadable(lazy(() => import('pages/members/create-member')));

export const useRouter = () => {
  return [
    // auth
    {
      path: '/login',
      element: <LoginPage />
    },
    {
      path: '/register',
      element: <RegisterPage />
    },
    {
      path: '/',
      element: <DashboardPage />,
      protect: true
    },

    // pages
    {
      path: '/projects',
      element: <UtilsTypography />,
      protect: true
    },
    {
      path: '/members',
      element: <MemberListPage />,
      protect: true
    },
    {
      path: '/member/create',
      element: <CreateMemberPage />,
      protect: true
    },

    // typo
    {
      path: '/utils/util-typography',
      element: <UtilsTypography />
    },
    {
      path: '/utils/util-color',
      element: <UtilsColor />
    }
  ];
};

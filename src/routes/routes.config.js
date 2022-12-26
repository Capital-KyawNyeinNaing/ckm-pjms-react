import { lazy } from 'react';

// project imports
import Loadable from 'components/ui-component/Loadable';

// utilities routing
const DashboardPage = Loadable(lazy(() => import('pages/dashboard')));
const UtilsTypography = Loadable(lazy(() => import('pages/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('pages/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('pages/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('pages/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('pages/utilities/TablerIcons')));

const LoginPage = Loadable(lazy(() => import('pages/auth/Login')));
const RegisterPage = Loadable(lazy(() => import('pages/auth/register')));

export const useRouter = () => {
  return [
    {
      path: '/',
      element: <DashboardPage />,
      protect: true
    },
    {
      path: '/projects',
      element: <UtilsTypography />,
      protect: true
    },
    {
      path: '/login',
      element: <LoginPage />
    },
    {
      path: '/register',
      element: <RegisterPage />
    }
  ];
};

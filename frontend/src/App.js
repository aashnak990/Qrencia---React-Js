import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import ErrorPage from './pages/Error';
import { loader as logoutAction } from './pages/Logout';
import CompetitionsPage, { loader as competitionsLoader } from './pages/CompetitionsPage';
import StudentProfileRootLayout, { loader as authCheck } from './pages/StudentProfileRoot';
import HomePage from './pages/Home';
import RootLayout from './pages/Root';
import AuthenticationPage, { action as authAction } from './pages/Authentication';
import { tokenLoader } from './util/auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: 'root',
    loader: tokenLoader,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/login',
        element: <AuthenticationPage />,
        action: authAction
      },
    ],
  },
  {
    path: '/student',
    element: <StudentProfileRootLayout />,
    loader: authCheck,
    children: [
      {
        path: 'competitions',
        element: <CompetitionsPage />,
        loader: competitionsLoader,
      },
    ],
  },
  {
    path: '/logout',
    loader: logoutAction
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Main } from './Layout.modules';

export const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Main>
        {children}
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

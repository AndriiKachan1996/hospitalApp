import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header/Header';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<>Loading...</>}>
        <>
          <Outlet />
        </>
      </Suspense>
    </>
  );
};

export default SharedLayout;

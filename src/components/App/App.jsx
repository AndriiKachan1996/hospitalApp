import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from '..//SharedLayout/SharedLayout';

const HomePage = lazy(() => import('..//..//pages/Home/Home'));
const Team = lazy(() => import('../../pages/Team/Team'));
const PaidServices = lazy(() => import('../../pages/PaidService/PaidService'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="team" element={<Team />} />
        <Route path="paid-service" element={<PaidServices />} />

        {/* <Route path="*" element={<InvalidUrl />}></Route> */}
      </Route>
    </Routes>
  );
};

export default App;

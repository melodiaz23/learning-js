import { Outlet } from 'react-router-dom'; //place holder

import MainHeader from '../components/MainHeader';

function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default RootLayout;

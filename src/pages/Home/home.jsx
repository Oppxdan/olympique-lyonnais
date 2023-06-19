import React from 'react';
import { Outlet } from "react-router-dom";
import Nav from '../../components/navigation/Nav';
import Banner from '../../components/banner/Banner';

function Home() {
  return (
    <>
      <Banner />
      <h1>Home</h1>
    </>
  );
}

export default Home;
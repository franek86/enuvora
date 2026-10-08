import React from "react";
import Navbar from "../navbar/Navbar";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main className='page-container'>{children}</main>
    </>
  );
};

export default MainLayout;

import React from "react";
import SideBar from "../components/SideBar";
import Blogs from "../components/Blogs";

const Home = () => {
  return (
    <div
      className="
     bg-[#0C0A25] h-[100vh] text-white"
    >
      <div className="container mx-auto py-24 ">
        {/* heading */}
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-5xl">Resources and insights</h1>
          <p className="capitalize text-base font-normal">
            The latest industry news, interviews, technologies and resources.
          </p>
        </div>
        {/* main content */}
        <div>
          <SideBar />
          <Blogs />
        </div>
      </div>
    </div>
  );
};

export default Home;

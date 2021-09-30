import React from "react";
import MainContent from "../components/MainContent/MainContent";
import Sidebar from "../components/Sidebar/Sidebar";
import "./LayoutContent.scss";

function LayoutContent() {
  return (
    <div className='layout'>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default LayoutContent;

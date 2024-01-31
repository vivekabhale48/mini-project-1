import React from "react";
import { TiTick } from "react-icons/ti";

const GmailItemList = ({ setGmailData, selected,  onSelected }) => {
  
  return (
    <div onClick={onSelected} className={`flex justify-between items-center p-2 border-b-2 border-gray-100 ${selected ? "bg-blue-200" : "bg-gray-50"}`}>
      <h1>{setGmailData.email}</h1>
      {
        selected && (<TiTick />)
      }
    </div>
  );
};

export default GmailItemList;

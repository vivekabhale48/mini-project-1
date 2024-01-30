import React from "react";

const GmailItemList = ({ setGmailData, id, onSelected }) => {
  return (
    <div className={`p-2 border-b-2 border-gray-100 ${setGmailData?.valueSelected ? "bg-red-400" : "bg-gray-50"}`}>
      <h1 onClick={onSelected}>{setGmailData.email}</h1>
    </div>
  );
};

export default GmailItemList;

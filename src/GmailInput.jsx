import React, { useEffect, useState } from "react";
import datas from "./DataGmail";
import GmailItemList from "./GmailItemList";

const GmailInput = () => {
  const [gmailInput, setgmail] = useState("");
  const [filterData, setFilterData] = useState(null);
  const [allSelectedDatas, setSelectedDatas] = useState([]);

  useEffect(() => {
    const filteredData = datas.filter((filterData) => {
      return gmailInput.toLowerCase() === ""
        ? filterData
        : filterData.email.toLowerCase().includes(gmailInput);
    });
    setFilterData(filteredData);
    console.log(allSelectedDatas);
  }, [gmailInput, allSelectedDatas]);

  function handleOnChange(e) {
    setgmail(e.target.value);
  }

  function onClick(gmailId) {
    console.log("selected Id is :" + gmailId);

    const mappedData = filterData.map((gdata)=> gmailId === gdata.id ? {...gdata, valueSelected: true}: gdata)
    setFilterData(mappedData);

    const selectedData = filterData.filter((selectData) => {
      return gmailId === selectData.id
    });
    //Type of the selected data is an array and it has the selected object inside that array. It changes every time we click diff user. It doesnot keeps the previous selected object. Hence to keep the previous one too we added below code.
    selectedData.map((mydata) => {
      return setSelectedDatas((previousValue) => [...previousValue, mydata])
    });
    

    console.log(mappedData)
    console.log(filterData)
  }

  return (
    <section className="w-full">
      <div className="p-5 flex flex-col justify-center items-center">
        <input
          onChange={handleOnChange}
          value={gmailInput}
          name="gmail"
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
          placeholder="Search"
          required
        />

        {filterData && filterData.length > 0 ? (
          <div className="bg-[#B9C6AE] w-[50%] p-2 shadow-xl z-50">
            {filterData &&
              filterData.map((gmailData) => (
                <GmailItemList
                  key={gmailData.id}
                  setGmailData={gmailData}
                  id={gmailData.id}
                  onSelected={() => onClick(gmailData.id)}
                />
              ))}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default GmailInput;

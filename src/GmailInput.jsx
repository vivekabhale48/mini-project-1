import React, { useEffect, useState } from "react";
import datas from "./DataGmail";
import GmailItemList from "./GmailItemList";

const GmailInput = () => {
  const [gmailInput, setgmail] = useState("");
  const [filterData, setFilterData] = useState(null);
  const [selectEmail, setSelectEmail] = useState([]);

  useEffect(() => {
    const filteredData = datas.filter((filterData) => {
      return gmailInput.toLowerCase() === ""
        ? null
        : filterData.email.toLowerCase().includes(gmailInput);
    });
    setFilterData(filteredData);
  }, [gmailInput]);

  function handleOnChange(e) {
    setgmail(e.target.value);
  }

  function onClick(gmailId) {
    setSelectEmail((previousEmails) => {
      if (previousEmails.includes(gmailId)) {
        return previousEmails.filter((id) => id !== gmailId);
      } else return [...previousEmails, gmailId];
    });
  }

  return (
    <section className="w-full relative">
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
          <div className="bg-[#B9C6AE] w-[50%] p-2 shadow-xl z-50 cursor-pointer">
            {filterData &&
              filterData.map((gmailData) => (
                <GmailItemList
                  key={gmailData.id}
                  selected={selectEmail.includes(gmailData.id)}
                  setGmailData={gmailData}
                  onSelected={() => onClick(gmailData.id)}
                />
              ))}
          </div>
        ) : null}
      </div>

      {selectEmail.length > 0 && (
        <div className="mt-3 absolute top-0 flex flex-col">
          {selectEmail.map((selectedEmailId) => {
            const selectedEmailData = datas.find(
              (data) => data.id === selectedEmailId
            );
            return (
              <span
                key={selectedEmailId}
                className="inline-block bg-blue-500 text-white p-2 m-1 rounded"
              >
                {selectedEmailData.email}
              </span>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default GmailInput;

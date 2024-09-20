"use client";
import React, { useState } from "react";

const Page = () => {
  const [quotes, setQuotes] = useState();
  const [id, setId] = useState();

  const handleSearch = async () => {
    const randomId = Math.floor(Math.random() * 300) + 1;
    setId(randomId); 
    const response = await fetch(
      `https://api.freeapi.app/api/v1/public/quotes/${randomId}`
    );
    const data = await response.json();
    setQuotes(data.data);
  };

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="mb-4 text-3xl text-center font-extrabold leading-tight tracking-tight text-gray-700 sm:text-4xl mt-10">
        Quotes
        <mark className="px-2 text-white bg-red-600 rounded dark:bg-red-500">
          Generator
        </mark>
      </h1>
      <p className="text-lg font-normal text-gray-600 lg:text-xl dark:text-gray-400 text-center mt-5">
        With a single click, get a quote.
      </p>
      <div className="flex justify-center mt-5">
        <button
          onClick={handleSearch}
          className="text-white mt-1 bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Generate
        </button>
      </div>
      {quotes && (
        <div className="mt-10 text-lg sm:text-2xl sm:ml-10">
          <table className="w-full border-collapse">
            <tbody className="flex flex-col gap-5 sm:gap-5">
              <tr className="flex flex-col sm:flex-row sm:items-center sm:justify-start">
                <td className="px-4 py-2 font-semibold text-white bg-red-600 border-b rounded-md dark:bg-red-500 w-full sm:w-28 h-auto sm:h-20">
                  Author
                </td>
                <td className="px-4 py-2 border-b w-full">
                  {quotes.author}
                </td>
              </tr>
              <tr className="flex flex-col sm:flex-row sm:items-center sm:justify-start">
                <td className="px-4 py-2 font-semibold text-white bg-red-600 border-b rounded-md dark:bg-red-500 w-full sm:w-28 h-auto sm:h-20">
                  Quote
                </td>
                <td className="px-4 py-2 border-b w-full">
                  {quotes.content}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Page;

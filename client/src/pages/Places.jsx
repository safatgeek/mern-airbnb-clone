import React from "react";
import { Link, useParams } from "react-router-dom";

export const Places = () => {
  const { action } = useParams();

  const heading = (header, description) => {
    return (
      <>
        <h2 className=" text-2xl mt-4">{header}</h2>
        <p className=" text-gray-500 text-sm">{description}</p>
      </>
    );
  };

  return (
    <div className="mt-4">
      {action !== "new" && (
        <div className=" text-center">
          <Link
            to={"/account/places/new"}
            className=" bg-primary text-white rounded-full px-6 py-2 inline-flex gap-2 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add new place
          </Link>
        </div>
      )}

      {action === "new" && (
        <div>
          {heading("Title", "Title for your place")}
          <input type="text" placeholder="title, for example: My lovely apt" />
          {heading("Address", "Address to this place")}
          <input type="text" placeholder="address" />
          {heading("Photos", "More = better")}
          <div className=" flex gap-2">
          <input type="text" placeholder="Add using a link ...jpg" />
          <button className=" bg-gray-300 rounded-full px-4 text-black">Add&nbsp;photo</button>
          </div>
          
          <div className=" grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <button className=" flex justify-center gap-1 border bg-transparent rounded-2xl p-8 text-2xl text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                />
              </svg>
              Upload
            </button>
          </div>

          {heading("Description", "Description of the place")}
          <textarea />
        </div>
      )}
    </div>
  );
};

import React from "react";
import { Link, useParams } from "react-router-dom";
import { LiaDogSolid } from "react-icons/lia";

export const Places = () => {
  const { action } = useParams();

  const heading = (header, description) => {
    return (
      <>
        <h2 className=" text-2xl mt-4 font-semibold">{header}</h2>
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
        <form>
           <div>
          {heading("Title", "Title for your place")}
          <input type="text" placeholder="title, for example: My lovely apt" />
          {heading("Address", "Address to this place")}
          <input type="text" placeholder="address" />
          {heading("Photos", "More = better")}
          <div className=" flex gap-2">
            <input type="text" placeholder="Add using a link ...jpg" />
            <button className=" bg-gray-300 rounded-full px-4 text-black">
              Add&nbsp;photo
            </button>
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
          {heading("Perks", "select all the perks of your place")}
          <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mt-2">
            <label className ={"perks"}>
              <input type="checkbox" />
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
                  d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>

              <span>TV</span>
            </label>

            <label className ={"perks"}>
              <input type="checkbox" />
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
                  d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                />
              </svg>

              <span>Wifi</span>
            </label>

            <label className ="perks">
              <input type="checkbox" />
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
                  d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>

              <span>Free perking spot</span>
            </label>

            <label className ="perks">
              <input type="checkbox" />
              <LiaDogSolid className=" h-6 w-6" />
              <span>Pets</span>
            </label>

            <label className ="perks">
              <input type="checkbox" />
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
                  d="M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75zm-1.683 6.443l-.005.005-.006-.005.006-.005.005.005zm-.005 2.127l-.005-.006.005-.005.005.005-.005.005zm-2.116-.006l-.005.006-.006-.006.005-.005.006.005zm-.005-2.116l-.006-.005.006-.005.005.005-.005.005zM9.255 10.5v.008h-.008V10.5h.008zm3.249 1.88l-.007.004-.003-.007.006-.003.004.006zm-1.38 5.126l-.003-.006.006-.004.004.007-.006.003zm.007-6.501l-.003.006-.007-.003.004-.007.006.004zm1.37 5.129l-.007-.004.004-.006.006.003-.004.007zm.504-1.877h-.008v-.007h.008v.007zM9.255 18v.008h-.008V18h.008zm-3.246-1.87l-.007.004L6 16.127l.006-.003.004.006zm1.366-5.119l-.004-.006.006-.004.004.007-.006.003zM7.38 17.5l-.003.006-.007-.003.004-.007.006.004zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007zm-.5 1.873h-.008v-.007h.008v.007zM17.25 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z"
                />
              </svg>

              <span>Radio</span>
            </label>

            <label className ="perks">
              <input type="checkbox" />
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
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>

              <span>Private entrance</span>
            </label>
          </div>
          {heading("Check in & out times", "add check in and out times, remember to have some time window for cleaning the between guests")}
          <div className=" grid grid-cols-2 md:grid-cols-3 gap-2 mt-1">
            <div>
              <h2>Check in time</h2>
              <input type="text" />
            </div>

            <div>
              <h2>Check out time</h2>
              <input type="text" />
            </div>

            <div>
              <h2>Max number of guests</h2>
              <input type="number" />
            </div>
          </div>

          <button className=" primary my-4">Save</button>
        </div>
        </form>
       
      )}
    </div>
  );
};

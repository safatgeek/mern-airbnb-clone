import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Perks from "../components/Perks";
import PhotosUploader from "../components/PhotosUploader";


export const Places = () => {
  const { action } = useParams();

  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setaAdedPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);

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
            <input
              type="text"
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
              placeholder="title, for example: My lovely apt"
            />
            {heading("Address", "Address to this place")}
            <input
              type="text"
              value={address}
              onChange={(ev) => setAddress(ev.target.value)}
              placeholder="address"
            />
            
            <PhotosUploader  addedPhotos={addedPhotos} setaAdedPhoto={setaAdedPhotos}/>

            {heading("Description", "Description of the place")}
            <textarea
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
            />
            {heading("Perks", "select all the perks of your place")}
            <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mt-2">
              <Perks selected={perks} setPerk={setPerks} />
            </div>

            {heading("Extra info", "house rules, etc")}
            <textarea
              value={extraInfo}
              onChange={(ev) => setExtraInfo(ev.target.value)}
            />
            {heading(
              "Check in & out times",
              "add check in and out times, remember to have some time window for cleaning the between guests"
            )}
            <div className=" grid grid-cols-2 md:grid-cols-3 gap-2 mt-1">
              <div>
                <h2>Check in time</h2>
                <input
                  type="text"
                  placeholder="14"
                  value={checkIn}
                  onChange={(ev) => setCheckIn(ev.target.value)}
                />
              </div>

              <div>
                <h2>Check out time</h2>
                <input
                  type="text"
                  placeholder="11"
                  value={checkOut}
                  onChange={(ev) => setCheckOut(ev.target.value)}
                />
              </div>

              <div>
                <h2>Max number of guests</h2>
                <input
                  type="number"
                  value={maxGuests}
                  onChange={(ev) => setMaxGuests(ev.target.value)}
                />
              </div>
            </div>

            <button className=" primary my-4">Save</button>
          </div>
        </form>
      )}
    </div>
  );
};

import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Perks from "../components/Perks";
import axios from 'axios';


export const Places = () => {
  const { action } = useParams();

  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setaAdedPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState("");
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

  const addPhotoBytLink = async (ev) => {
    ev.preventDefault()
    const {data:filename} = await axios.post("/upload-by-link", {link: photoLink})
    setaAdedPhotos(prev => {
      return [...prev, filename]
    })
  }

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
            {heading("Photos", "More = better")}
            <div className=" flex gap-2">
              <input
                type="text"
                value={photoLink}
                onChange={(ev) => setPhotoLink(ev.target.value)}
                placeholder="Add using a link ...jpg"
              />
              <button onClick={addPhotoBytLink} className=" bg-gray-300 rounded-full px-4 text-black">
                Add&nbsp;photo
              </button>
            </div>

            <div className=" grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {addedPhotos.length > 0 && addedPhotos.map(imageName => (
                <div>
                  <img className=" rounded-2xl" src={"http://localhost:4000/uploads/"+imageName}/>
                </div>
              ))}
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
            <textarea
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
            />
            {heading("Perks", "select all the perks of your place")}
            <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mt-2">
              <Perks selected={perks} onChange={setPerks} />
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

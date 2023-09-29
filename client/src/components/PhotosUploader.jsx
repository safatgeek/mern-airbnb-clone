import React, { useState } from "react";
import axios from "axios";

const PhotosUploader = ({addedPhotos, setaAdedPhoto}) => {
    const [photoLink, setPhotoLink] = useState("")

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
        setaAdedPhoto(prev => {
          return [...prev, filename]
        })
      }
    
      const uploadPhoto = (ev) => {
        const files = ev.target.files
        const data = new FormData()
        for (let i = 0; i < files.length; i++) {
          data.append("photos", files[i])
        }
        axios.post("/upload", data, {
          headers: {"Content-Type":"multipart/form-data"}
        }).then((response) => {
          const {data:filenames} = response
          setaAdedPhoto(prev => {
            console.log([...filenames])
            return [...prev,...filenames]
          })
        })
      }

  return (
    <>
      {heading("Photos", "More = better")}
      <div className=" flex gap-2">
        <input
          type="text"
          value={photoLink}
          onChange={(ev) => setPhotoLink(ev.target.value)}
          placeholder="Add using a link ...jpg"
        />
        <button
          onClick={addPhotoBytLink}
          className=" bg-gray-300 rounded-full px-4 text-black"
        >
          Add&nbsp;photo
        </button>
      </div>

      <div className=" gap-1 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {addedPhotos.length > 0 &&
          addedPhotos.map((imageName) => (
            <div key={imageName}>
              <img
                className=" h-32 w-full object-cover rounded-2xl"
                src={"http://localhost:4000/uploads/" + imageName}
              />
            </div>
          ))}
        <label className=" h-32 items-center cursor-pointer flex justify-center gap-1 border bg-transparent rounded-2xl p-8 text-2xl text-gray-500">
          <input
            onChange={uploadPhoto}
            multiple
            type="file"
            className=" hidden"
          />
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
        </label>
      </div>
    </>
  );
};

export default PhotosUploader;

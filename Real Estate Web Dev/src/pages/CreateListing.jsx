import { name } from "@cloudinary/url-gen/actions/namedTransformation";
import React, { useState } from "react";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import { image } from "@cloudinary/url-gen/qualifiers/source";
import { useLocation } from 'react-router-dom';

export default function CreateListing() {
  //geLocationEnabled state (because not card to get a api, if I added I can set this a true. so now manually adding longitude and latitude)
  const [geoLocationEnabled,setGeoLocationEnabled] = useState(false);

  // loading screen when submit
  const [loading, setLoading] = useState(false);

  // for capturing form data
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    description: "",
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
    latitude:"",
    longitude:"",
    
  });

  // destructuring data
  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    description,
    offer,
    regularPrice,
    discountedPrice,
    latitude,
    longitude,
  } = formData;

  // for sell and rent
  function handleSellRent(event) {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  }

  // for true false buttons
  function handleButtonClick(event) {
    const value =
      event.target.value === "true"
        ? true
        : event.target.value === "false"
        ? false
        : event.target.value;

    if (!event.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [event.target.id]: value,
      }));
    }
  }

  // for attachments and texts
  function onChange(event) {
    // Files
    if (event.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        images: event.target.files,
      }));
    }
    if (!event.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [event.target.id]: event.target.value,
      }));
    }
  }

  // onSUbmit
  function onSubmit(e){
    e.preventDefault();
    setLoading(true);
    if(regularPrice>=discountedPrice){
      setLoading(false);
      toast.error("discounted price needs to be less than regular price");
      return;
    }
    
    if(image.length>6){
      setLoading(false);
      toast.error("you can only add 6 images");
      return;
    }
    let geolocation ={}
    let location = {}
    if(geoLocationEnabled){

    }
  }

  // check loading true
  if(loading){
    return <Spinner/>
  }

  return (
    <main className="max-w-md px-3 mx-auto">
      <h1 className="flex font-bold justify-center text-3xl mt-7">
        Create a List
      </h1>

      <form onSubmit={onSubmit}>
      {/* Sell and Rents Buttons */}
      <p className="font-semibold mt-6 text-lg">Sell/Rent</p>
      <div className="flex">
        <button
          type="button"
          id="type"
          value="sell"
          onClick={handleSellRent}
          className={`mr-6 px-6 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
             ${
               type == "sell" ? "bg-teal-500 text-white" : "bg-white text-black"
             }`}
        >
          Sell
        </button>
        <button
          type="button"
          id="type"
          value="rent"
          onClick={handleSellRent}
          className={`px-6 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
             ${
               type == "rent" ? "bg-teal-500 text-white" : "bg-white text-black"
             }`}
        >
          Rent
        </button>
      </div>

      {/* input name */}
      <p className="font-semibold mt-6 text-lg">Name</p>
      <input
        type="text"
        id="name"
        value={name}
        onChange={onChange}
        placeholder="Name"
        minLength="4"
        maxLength="32"
        required
        className="w-full p-2 mb-4 shadow-md border px-4 py-2 border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:border-slate-600"
      />

      {/* bedrooms and bathrooms */}
      <div className="mt-4 flex">
        <div className=" mr-6 wi">
          <p className="text-lg font-semibold"> Bed Rooms</p>
          <input
            type="number"
            id="bedrooms"
            value={bedrooms}
            onChange={onChange}
            min="1"
            max="50"
            required
            className="w-full p-2 mb-4 border px-4 py-2 border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:border-slate-600"
            placeholder="Beds"
          ></input>
        </div>
        {/* BathRooms */}
        <div>
          <p className="text-lg font-semibold"> Bath Rooms</p>
          <input
            type="number"
            id="bedrooms"
            value={bathrooms}
            onChange={onChange}
            min="1"
            max="50"
            required
            className="w-full p-2 mb-4 border px-4 py-2 border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:border-slate-600"
            placeholder="bathrooms"
          ></input>
        </div>
      </div>

      {/* Parking Slot */}
      <p className="font-semibold mt-3 text-lg">Parking Slot</p>
      <div className="flex">
        <button
          type="button"
          id="parking"
          value={true}
          onClick={handleButtonClick}
          className={`mr-6 px-6 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
             ${!parking ? "bg-white text-black " : "bg-teal-500 text-white"}`}
        >
          YES
        </button>
        <button
          type="button"
          id="parking"
          value={false}
          onClick={handleButtonClick}
          className={`px-6 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
              ${parking ? "bg-white text-black" : "bg-teal-500 text-white"}`}
        >
          NO
        </button>
      </div>
      {/* furnished */}
      <p className="font-semibold mt-6 text-lg">Furnished</p>
      <div className="flex">
        <button
          type="button"
          id="furnished"
          value={true}
          onClick={handleButtonClick}
          className={`mr-6 px-6 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
             ${!furnished ? "bg-white text-black " : "bg-teal-500 text-white"}`}
        >
          Yes
        </button>
        <button
          type="button"
          id="furnished"
          value={false}
          onClick={handleButtonClick}
          className={`px-6 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
             ${furnished ? "bg-white text-black " : "bg-teal-500 text-white"}`}
        >
          no
        </button>
      </div>

      {/* get longitude and latitude from user manually */}
      {!geoLocationEnabled && (
      <div className="flex mt-5 space-x-6">
        <div className="">
          <p className="font-semibold text-lg">Latitude</p>
          <input type="number" id="latitude" min="-90" max="90" value={latitude} onChange={onChange} placeholder="Latitude" className="px-3 py-3 w-full border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:border-slate-600 shadow-md" />
        </div>
        <div className="">
          <p className="font-semibold text-lg">Longitude</p>
          <input type="number" id="longitude" min="-180" max="180" value={longitude} onChange={onChange} placeholder="Longitude" className="px-3 py-3 w-full border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:border-slate-600 shadow-md" />
        </div>
      </div>)}

      {/* Address section */}
      <p className="font-semibold mt-6 text-lg">Address</p>
      <textarea
        type="text"
        id="address"
        value={address}
        onChange={onChange}
        placeholder="Address"
        required
        className="w-full p-2 mb-4 border px-4 py-2 border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:border-slate-600 shadow-md"
      />

      {/* Description */}
      <p className="font-semibold text-lg">Description</p>
      <textarea
        type="text"
        id="description"
        value={description}
        onChange={onChange}
        placeholder="Description"
        required
        className="w-full p-2 mb-4 border px-4 py-2 border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:border-slate-600 shadow-md"
      />

      {/* offer */}
      <p className="font-semibold text-lg">Offer</p>
      <div className="flex">
        <button
          type="button"
          id="offer"
          value={true}
          onClick={handleButtonClick}
          className={`mr-6 px-6 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
             ${!offer ? "bg-white text-black " : "bg-teal-500 text-white"}`}
        >
          Yes
        </button>
        <button
          type="button"
          id="offer"
          value={false}
          onClick={handleButtonClick}
          className={`px-6 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
             ${offer ? "bg-white text-black " : "bg-teal-500 text-white"}`}
        >
          no
        </button>
      </div>
      <div className="">
        <div className="mt-6 items-center">
          <p className="text-lg font-semibold">Regular Price</p>
        </div>
        <div className="flex w-full items-center justify-center">
          <input
            type="number"
            id="regularPrice"
            value={regularPrice}
            onChange={onChange}
            min="50"
            max="4000000000"
            className="w-full p-2 mb-4 border px-4 py-2 border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:border-slate-600 shadow-md"
          />

          {type === "rent" && (
            <p className="text-md w-full ml-8 whitespace-nowrap"> $ / Month</p>
          )}
        </div>
      </div>

      {/* when offer true */}
      {offer && (
      <div className="">
        <div className="mt-3 items-center">
          <p className="text-lg font-semibold">Discounted Price</p>
        </div>
        <div className="flex w-full items-center justify-center">
          <input
            type="number"
            id="discountedPrice"
            value={discountedPrice}
            onChange={onChange}
            min="50"
            max="4000000000"
            className="w-full p-2 mb-4 border px-4 py-2 border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:border-slate-600 shadow-md"
          />

          {type === "rent" && (
            <p className="text-md w-full ml-8 whitespace-nowrap"> $ / Month</p>
          )}
        </div>
      </div>
      )}

      {/* images adding */}

      <div className=" mt-3 mb-6">
        <p className=" text-lg font-semibold">Images</p>
        <p className="text-gray-600">
          The first image will be the cover(max 6)
        </p>
        <input
          type="file"
          id="images"
          onChange={onChange}
          accept=".jpg, .jpeg, .png"
          multiple
          required
          className="rounded border border-gray-300 mt-2 w-full shadow-md px-6 py-2"
        />
      </div>

      <button
        type="submit"
        className="mb-6 w-full px-7 py-3 bg-blue-600 text-white font-medium uppercase text-sm rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg transition duration-150 ease-in-out"
      >
        Create Listing
      </button>
      </form>
    </main>
  );
}

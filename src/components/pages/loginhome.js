import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [user, setUser] = useState({});
 
  const handleDownload = () => {
    fetch("http://localhost:7000/export-data-to-csv")
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement("a");
        a.href = url;
        a.download = "data_export.zip"; // Set the desired filename for the ZIP file
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:7000/users/details", {})
      .then((response) => {
        const userData = response.data;
        setUser(userData); // Set the user state with fetched data
      })
      .catch((error) => {
        console.log(error);
        // Handle errors here, e.g., show a toast message
      });
  }, []); // Empty dependency array means this effect runs once on component mount

  const onClickHandler = (event) => {
    event.preventDefault();

    // remove token from local storage
    localStorage.removeItem("access_token");

    // reload page
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="bg-gray-300 font-sans h-screen w-full flex flex-row justify-center items-center">
      <div className="card w-1/2 h-1/2 mx-auto bg-white shadow-xl hover:shadow-black">
        <div className="text-center mt-2 text-3xl font-medium">{user.name}</div>
        <div className="text-center mt-2 font-normal text-sm">{user.email_id}</div>

        <hr className="mt-8"></hr>
        <div className="flex p-4">
          <div className="w-0 border border-gray-300"></div>
          <div className="w-1/2 text-center">
            <span className="font-bold">{user.contact_number}</span>
          </div>
        </div>
        <hr className="mt-3"></hr>
        <div className="flex p-2">
          <div className="w-full text-center">
            <button
              onClick={(event) => {
                onClickHandler(event);
              }}
              className="py-3 w-64 text-xl text-black outline-none bg-gray-100 hover:bg-gray-300 active:bg-gray-500"
            >
              Log out
            </button>
          </div>
        </div>

        {/* Add a button to trigger the CSV download */}
        <div className="text-center mt-3">
          <button
            onClick={handleDownload}
            className="py-3 w-64 text-xl text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700"
          >
            Download CSV
          </button>
        </div>
      </div>
    </div>
  );
}

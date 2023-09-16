/* eslint-disable default-case */
import React, { useState, useContext } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "./Usercontext";
import ErrorMessage from "./Errormessage";

export default function Register(props) {
  const [, setToken] = useContext(UserContext);

  // Register Form
  const [formRegister, setFormRegister] = useState({
    name: "",
    email: "",
    phone_number: "",
    password: "",
    purpose: "", //working on adding confirm password
    confirmpwd: "",
  });

  // Error message state
  const [errorMessage, setErrorMessage] = useState("");

  // convert format date to string

  const onChangeForm = (label, event) => {
    switch (label) {
      case "name":
        setFormRegister({ ...formRegister, name: event.target.value });
        break;

      case "email":
        // email validation
        const email_validation = /\S+@\S+\.\S+/;
        if (email_validation.test(event.target.value) && event.target.value.endsWith(".com")) {
          setFormRegister({ ...formRegister, email: event.target.value });
        }
        break;

      case "phone_number":
        setFormRegister({ ...formRegister, phone_number: event.target.value });
        break;

      case "password":
        setFormRegister({ ...formRegister, password: event.target.value });
        break;

      case "purpose":
        // Limit the purpose to 300 characters
        const inputText = event.target.value;
        if (inputText.length <= 300) {
          setFormRegister({ ...formRegister, purpose: inputText });
        }
        break;

      case "confirmPassword":
        const confirmPassword = event.target.value;
        if (confirmPassword === formRegister.password && formRegister.password.length >= 5) {
          setFormRegister({ ...formRegister, confirmpwd: event.target.value });
        } else {
          // Handle password mismatch here (e.g., display an error message)
        }
        break;
    }
  };

  // Submit handler
  const onSubmitHandler = async (event) => {
    try {
      event.preventDefault();
      const headers = {
        'Content-Type': 'application/json'
      };

      // Post to register API
      const response = await axios.post("http://localhost:7000/users/create", formRegister, { headers });

      if (response.status === 200) {
        // Assuming a successful response has a 'data' property
        const data = response.data;
        setToken(data.access_token);
      } else {
        setErrorMessage('An error occurred.');
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.detail);
      } else if (error.request) {
        setErrorMessage('Network error. Please try again later.');
      } else {
        setErrorMessage('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <React.Fragment className="z-0">
      <div>
        <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
          Create An Account
        </h1>
        <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer mx-auto">
          Welcome to Historic data!
        </p>
      </div>
      <form onSubmit={onSubmitHandler}>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            required
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-orange-400 input"
            onChange={(event) => {
              onChangeForm("name", event);
            }}
          />
          <input
            type="number"
            placeholder="Phone number"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-orange-400"
            onChange={(event) => {
              onChangeForm("phone_number", event);
            }}
          />
          <input
            type="email"
            required
            placeholder="Email"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-orange-400"
            onChange={(event) => {
              onChangeForm("email", event);
            }}
          />
          <input
            type="password"
            required
            placeholder="Password"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-orange-400"
            onChange={(event) => {
              onChangeForm("password", event);
            }}
          />
          <input
            type="password"
            required
            placeholder="Confirm Password"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-orange-400"
            onChange={(event) => {
              onChangeForm("confirmPassword", event);
            }}
          />
          <input
            type="text"
            required
            placeholder="Purpose (max 300 characters)"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-orange-400"
            onChange={(event) => {
              onChangeForm("purpose", event);
            }}
            maxLength={300}
          />
        </div>
        <div className="text-center mt-6">
          <button
            type="submit"
            className="py-4 w-64 text-xl text-white bg-orange-400 rounded-2xl hover:bg-orange-300 active:bg-orange-500 outline-none"
          >
            Create Account
          </button>
          <p className="mt-4 text-sm">
            Already have an account?{" "}
            <Link
              to="/Login"
              onClick={() => {
                props.setPage("login");
              }}
            >
              <span className="underline cursor-pointer">Sign In</span>
            </Link>
          </p>
        </div>
      </form>
      <ErrorMessage message={errorMessage} />
    </React.Fragment>
  );
}

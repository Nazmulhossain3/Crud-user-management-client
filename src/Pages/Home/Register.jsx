/* eslint-disable react/no-unknown-property */

import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { baseURL } from "../../config/config";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        city: '',
        state: '',
        gender: '',
        heardAbout: [],
      });

      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
    
        setUserData((prevFormData) => ({
          ...prevFormData,
          [name]: type === 'checkbox' ? (checked ? [...prevFormData[name], value] : prevFormData[name].filter(item => item !== value)) : value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
       
        fetch(`${baseURL}/user-route/createUser`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(userData),
        })
        .then(res => res.json())
        .then(data => {
          console.log('data', data);
          if (data) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Great user is created",
              showConfirmButton: false,
              timer: 1500,
            });
          }
          navigate('/login')
        })
  
        
  
        
  
       
        
      };



    return (
        <div>
      <div className="bg-white shadow-2xl border rounded-lg px-8 py-6 mx-auto my-8 max-w-xl ">
        <h2 className="text-2xl font-medium mb-4">Survey</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              placeholder="password"
              name="password"
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              placeholder="Phone"
              name="phone"
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <select
              id="city"
              name="city"
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              onChange={handleChange}
              required
            >
              <option value="">Select City</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
              <option value="Ahmedabad">Ahmedabad</option>
            </select>
          </div>
          <div className="search-container mb-4">
            <input
              type="text"
              id="stateSearch"
              name="state"
              className="search-box border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              list="states"
              placeholder="Search for a state..."
              onChange={handleChange}
            />
            <datalist id="states">
              <option value="Gujarat" />
              <option value="Maharashtra" />
              <option value="Karnataka" />
            </datalist>
          </div>

          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">What is your Gender?</label>
            <div className="flex flex-wrap -mx-2">
              <div className="px-2 w-1/3">
                <label htmlFor="male" className="block text-gray-700 font-medium mb-2">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="Male"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Male
                </label>
              </div>
              <div className="px-2 w-1/3">
                <label htmlFor="female" className="block text-gray-700 font-medium mb-2">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="Female"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Female
                </label>
              </div>
              <div className="px-2 w-1/3">
                <label htmlFor="other" className="block text-gray-700 font-medium mb-2">
                  <input
                    type="radio"
                    id="other"
                    name="gender"
                    value="Other"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Other
                </label>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">How did you hear about this?</label>
            <div className="flex flex-wrap -mx-2">
              <div className="px-2 w-1/3">
                <label htmlFor="linkedin" className="block text-gray-700 font-medium mb-2">
                  <input
                    type="checkbox"
                    id="linkedin"
                    name="heardAbout"
                    value="LinkedIn"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  LinkedIn
                </label>
              </div>
              <div className="px-2 w-1/3">
                <label htmlFor="friends" className="block text-gray-700 font-medium mb-2">
                  <input
                    type="checkbox"
                    id="friends"
                    name="heardAbout"
                    value="Friends"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Friends
                </label>
              </div>
              <div className="px-2 w-1/3">
                <label htmlFor="jobPortal" className="block text-gray-700 font-medium mb-2">
                  <input
                    type="checkbox"
                    id="jobPortal"
                    name="heardAbout"
                    value="Job Portal"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Job Portal
                </label>
              </div>
              
            </div>
          </div>


          <div>
            <button type="submit" className="bg-blue-500 w-full text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Submit
            </button>
          </div>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">Already have an account? <Link to='/login'
            className="font-medium text-blue-600 hover:underline dark:text-blue-500" >Sign in here</Link>
        </p>
        </form>
      </div>
    </div>

    

    );
};

export default Register;
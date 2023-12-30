/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Civilian = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`max-w-screen-xl mx-auto mt-4 focus:outline-none focus:border-2 focus:border-green-500 focus:ring-4 focus:ring-green-500 ${isDarkMode ? 'dark' : ''}`}>
  <div className="bg-green-200 rounded-lg p-6 max-w-7xl mx-auto  ">

        <div className="flex flex-wrap -mx-2">
          <div className="w-1/3 px-2 mb-5">
            <label
              htmlFor="email"
              className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 ${
                isDarkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' : ''
              }`}
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="w-1/3 px-2 mb-5">
            <label
              htmlFor="password"
              className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 ${
                isDarkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' : ''
              }`}
              required
            />
          </div>
          <div className="w-1/3 px-2 mb-5">
            <label
              htmlFor="repeat-password"
              className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}
            >
              again pswd
            </label>
            <input
              type="password"
              id="repeat-password"
              className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 ${
                isDarkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' : ''
              }`}
              required
            />
          </div>


          <div className="w-1/3 px-2 mb-5">
            <label
              htmlFor="repeat-password"
              className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}
            >
              Phone number
            </label>
            <input
              type="password"
              id="repeat-password"
              className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 ${
                isDarkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' : ''
              }`}
              required
            />
          </div>


          <div className="w-1/3 px-2 mb-5">
            <label
              htmlFor="repeat-password"
              className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}
            >
              residential address
            </label>
            <input
              type="password"
              id="repeat-password"
              className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 ${
                isDarkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' : ''
              }`}
              required
            />
          </div>


          <div className="w-1/3 px-2 mb-5">
  <label
    htmlFor="city"
    className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}
  >
    City
  </label>
  <select
    id="city"
    className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 ${
      isDarkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' : ''
    }`}
    required
  >
    <option value="" disabled selected>Select your city</option>
    <option value="city1">Jaipur</option>
    <option value="city2">Pilani</option>
    <option value="city3">jaisalmer</option>
    <option value="city3">jodhpur</option>
    <option value="city3">bikaner</option>
    <option value="city3">udaipur</option>
    <option value="city3">pedophile city</option>
  </select>
</div>


          <div className="w-1/3 px-2 mb-5">
            <label
              htmlFor="repeat-password"
              className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}
            >
              pin code
            </label>
            <input
              type="password"
              id="repeat-password"
              className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 ${
                isDarkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' : ''
              }`}
              required
            />
          </div>



          <div className="w-1/3 px-2 mb-5">
            <label
              htmlFor="repeat-password"
              className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}
            >
              camera model
            </label>
            <input
              type="password"
              id="repeat-password"
              className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 ${
                isDarkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' : ''
              }`}
              required
            />
          </div>



          <div className="w-1/3 px-2 mb-5">
            <label
              htmlFor="repeat-password"
              className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}
            >
              camera type
            </label>
            <input
              type="password"
              id="repeat-password"
              className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 ${
                isDarkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' : ''
              }`}
              required
            />
          </div>

          <div className="w-1/3 px-2 mb-5">
            <label
              htmlFor="repeat-password"
              className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}
            >
              camera location
            </label>
            <input
              type="password"
              id="repeat-password"
              className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 ${
                isDarkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' : ''
              }`}
              required
            />
          </div>

          <div className="w-1/3 px-2 mb-5">
            <label
              htmlFor="repeat-password"
              className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}
            >
              security question
            </label>
            <input
              type="password"
              id="repeat-password"
              className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 ${
                isDarkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' : ''
              }`}
              required
            />
          </div>

          <div className="w-1/3 px-2 mb-5">
            <label
              htmlFor="repeat-password"
              className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}
            >
              security answer
            </label>
            <input
              type="password"
              id="repeat-password"
              className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 ${
                isDarkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' : ''
              }`}
              required
            />
          </div>
          
        </div>

        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 ${
                isDarkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' : ''
              }`}
              required
            />
          </div>

          <label
            htmlFor="terms"
            className={`ms-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}
          >
            I agree with the{' '}
            <a href="#" className={`text-blue-600 hover:underline ${isDarkMode ? 'dark:text-blue-500' : ''}`}>
              terms and conditions
            </a>
          </label>
        </div>

        <button
          type="submit"
          className={`text-white bg-green-700 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
            isDarkMode ? 'dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' : ''
          }`}
        >
          Register your camera
        </button>
      </div>
    </div>
  );
};

export default Civilian;

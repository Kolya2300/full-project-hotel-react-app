import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore/lite";
import { db } from "../../../firebase";
const ContactInfo = () => {
  const { id } = useParams();
  const [hotelMapLocation, setHotelMapLocation] = useState("");
  const [hotelNumberPhone, setNumberPhone] = useState("");
  const [ehotelNumberPhone, setehumberPhone] = useState("");
  const [ehotelMapLocation, setehotelMapLocation] = useState("");
  const docRef = doc(db, "hotels", id);
  const getHotels = async ()=> {
    const hotelsSnapshot = await getDoc(docRef);
    setehotelMapLocation(hotelsSnapshot.data().hotelMapLocation);
    setehumberPhone(hotelsSnapshot.data().hotelNumberPhone);
  }
  getHotels()
  return (
    <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 max-w-[1300px]" style={{margin: '0 auto', marginTop: '100px', borderRadius: '10px'}}>
      <div className="max-w-7xl mx-auto">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Contact Information
            </h2>
            <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  zoomAndPan="magnify"
                  viewBox="0 0 30 30.000001"
                  height="40"
                  preserveAspectRatio="xMidYMid meet"
                  version="1.0"
                >
                  <defs>
                    <clipPath id="id1">
                      <path
                        d="M 10 7 L 21.046875 7 L 21.046875 25.875 L 10 25.875 Z M 10 7 "
                        clip-rule="nonzero"
                      />
                    </clipPath>
                    <clipPath id="id2">
                      <path
                        d="M 7 3.375 L 16 3.375 L 16 10 L 7 10 Z M 7 3.375 "
                        clip-rule="nonzero"
                      />
                    </clipPath>
                    <clipPath id="id3">
                      <path
                        d="M 5.804688 6 L 12 6 L 12 15 L 5.804688 15 Z M 5.804688 6 "
                        clip-rule="nonzero"
                      />
                    </clipPath>
                    <clipPath id="id4">
                      <path
                        d="M 11 3.375 L 21 3.375 L 21 14 L 11 14 Z M 11 3.375 "
                        clip-rule="nonzero"
                      />
                    </clipPath>
                  </defs>
                  <g clip-path="url(#id1)">
                    <path
                      fill="rgb(28.239441%, 70.979309%, 39.219666%)"
                      d="M 19.820312 15.644531 L 19.828125 15.644531 C 19.828125 15.644531 17.777344 18.679688 16.050781 20.933594 C 14.5625 22.882812 14.125 24.550781 14 25.359375 C 13.953125 25.652344 13.714844 25.875 13.425781 25.875 C 13.136719 25.875 12.898438 25.652344 12.847656 25.359375 C 12.722656 24.550781 12.289062 22.882812 10.796875 20.933594 C 10.570312 20.632812 10.335938 20.320312 10.101562 20 L 15.730469 13.25 L 20.261719 7.828125 C 20.761719 8.886719 21.039062 10.074219 21.039062 11.332031 C 21.039062 12.921875 20.589844 14.398438 19.820312 15.644531 Z M 19.820312 15.644531 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                  <path
                    fill="rgb(98.81897%, 77.648926%, 5.488586%)"
                    d="M 15.730469 13.25 L 10.101562 20 C 8.566406 17.925781 7.023438 15.644531 7.023438 15.644531 L 7.027344 15.644531 C 6.863281 15.378906 6.71875 15.113281 6.59375 14.832031 L 11.117188 9.410156 C 10.6875 9.929688 10.433594 10.601562 10.433594 11.332031 C 10.433594 13 11.769531 14.347656 13.425781 14.347656 C 14.355469 14.347656 15.1875 13.921875 15.730469 13.25 Z M 15.730469 13.25 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                  <g clip-path="url(#id2)">
                    <path
                      fill="rgb(17.248535%, 52.159119%, 92.158508%)"
                      d="M 15.816406 3.78125 L 11.15625 9.367188 L 7.589844 6.226562 C 8.980469 4.480469 11.082031 3.375 13.425781 3.375 C 14.261719 3.375 15.066406 3.515625 15.816406 3.78125 Z M 15.816406 3.78125 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                  <g clip-path="url(#id3)">
                    <path
                      fill="rgb(92.939758%, 34.118652%, 28.239441%)"
                      d="M 11.15625 9.367188 L 11.117188 9.410156 L 6.59375 14.832031 C 6.09375 13.773438 5.808594 12.585938 5.808594 11.332031 C 5.808594 9.386719 6.480469 7.605469 7.589844 6.226562 Z M 11.15625 9.367188 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                  <g clip-path="url(#id4)">
                    <path
                      fill="rgb(33.729553%, 58.428955%, 96.469116%)"
                      d="M 15.730469 13.25 C 16.160156 12.730469 16.417969 12.058594 16.417969 11.332031 C 16.417969 9.664062 15.078125 8.3125 13.425781 8.3125 C 12.496094 8.3125 11.664062 8.742188 11.117188 9.410156 L 15.816406 3.78125 C 17.769531 4.449219 19.371094 5.925781 20.261719 7.828125 Z M 15.730469 13.25 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </svg>
                <a href={ehotelMapLocation}>Google Map View</a>
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-phone-call"
                >
                  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href={`tel:${ehotelNumberPhone}`}>09853231</a>
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44 24V9H24H4V24V39H24"
                    stroke="#333"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M44 34L30 34"
                    stroke="#333"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M35 29L30 34L35 39"
                    stroke="#333"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 9L24 24L44 9"
                    stroke="#333"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <a href="mail:example@example.com">Gmail</a>
              </div>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:ml-4">
            <span className="shadow-sm rounded-md">
              <a
                href="#"
                className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md
                 text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Contact Us
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

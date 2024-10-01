import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { MdLocationOn, MdCall } from "react-icons/md";

const Section8 = () => {
  return (
    <div id="Section8" className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">ALL SOLUTION DIGITAL MEDIA</h2>

      <div className="flex items-center mb-4">
        <MdLocationOn className="text-red-600 text-2xl mr-2" />
        <p className="text-gray-700">Ahmadpur Toll Plaza, Bhitariya, Barabanki</p>
      </div>

      <div className="flex items-center mb-4">
        <MdCall className="text-green-600 text-2xl mr-2" />
        <p className="text-gray-700">9236361986</p>
      </div>

      <div className="mb-6">
        <p className="text-gray-700 mb-2">
          फेसबुक , इंस्टाग्राम , ट्विटर फॉलोवर, सोशल मीडिया अकॉउंट हैंडल पूरे वर्ष के लिए , बिजनेस का प्रमोशन कस्टमर लीड के साथ, व्यवसायिक पोस्ट, बिजनेस प्रचार वीडीओ, राजनैतिक पोस्ट कस्टम, राजनैतिक एवं बिजनेस डेली पोस्टर, त्योहार जयंती, यूट्यूब प्रमोशन एवं मोबोटाइज , सास्क्रैबर, व्हाट्सअप ग्रीन टिक, बल्क मैसेज, वॉइस काल
        </p>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex space-x-4">
          <a href="#" className="text-blue-600">
            <FaFacebookF className="text-2xl" />
          </a>
          <a href="#" className="text-pink-600">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="#" className="text-blue-400">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="#" className="text-red-600">
            <FaYoutube className="text-2xl" />
          </a>
          <a href="#" className="text-green-600">
            <FaWhatsapp className="text-2xl" />
          </a>
        </div>

        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-6 rounded-full hover:shadow-lg transition-shadow">
        <a href="tel:+919236361986">Get in Touch</a>
        </button>
      </div>
    </div>
  );
};

export default Section8;

import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import img from "../assets/Million Minds Img/Student4.jpg";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "E-mail address is required.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="min-h-screen bg-[#111315] text-white flex flex-col md:flex-row items-center justify-center px-8 md:px-10 lg:px-10 py-10 space-y-8 md:space-y-0">
      <div className="flex flex-col items-center justify-center w-full md:w-2/5 lg:w-2/3 mb-6 md:mb-0 p-1 border-brown-500 rounded-lg">
        <img
          src={img}
          alt="Motren-Connect"
          className="rounded-lg shadow-lg mb-6 w-80 h-80 md:w-96 md:h-96"
        />
        <div className="text-center text-xl font-semibold mb-4 mr-60 ">Follow us on</div>
        <div className="flex space-x-6">
          <FaFacebook className="text-purple-500 w-7 h-7 hover:scale-110 transition-transform" />
          <FaTwitter className="text-purple-500 w-7 h-7 hover:scale-110 transition-transform" />
          <FaInstagram className="text-purple-500 w-7 h-7 hover:scale-110 transition-transform" />
          <FaYoutube className="text-purple-500 w-7 h-7 hover:scale-110 transition-transform" />
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="bg-[#141313] rounded-lg shadow-md p-6 w-full md:w-3/5 lg:w-2/3 max-w-lg">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block mb-2 text-sm">First name</label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-2 rounded-md bg-[#1a1a1a] text-white outline-none border border-gray-600"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block mb-2 text-sm">Last name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-2 rounded-md bg-[#1a1a1a] text-white outline-none border border-gray-600"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block mb-2 text-sm">
              E-mail address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className={`w-full p-2 rounded-md bg-[#1a1a1a] text-white outline-none border ${
                errors.email ? "border-red-500" : "border-gray-600"
              }`}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label className="block mb-2 text-sm">
              Phone <span className="text-red-500">*</span>
            </label>
            <PhoneInput
              country={"us"}
              inputStyle={{
                width: "100%",
                backgroundColor: "#1a1a1a",
                color: "white",
                borderRadius: "6px",
                border: errors.phone ? "1px solid #f87171" : "1px solid #4b5563",
                padding: "20px",
              }}
              buttonStyle={{
                backgroundColor: "#1a1a1a",
                borderRadius: "6px 0 0 6px",
              }}
              dropdownStyle={{
                backgroundColor: "black",
                color: "gray",
                textAlign: "left",
                borderRadius: "6px",
              }}
              value={formData.phone}
              onChange={(phone) => setFormData({ ...formData, phone })}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block mb-2 text-sm">Message</label>
            <textarea
              rows="4"
              placeholder="Your message here"
              className="w-full p-2 rounded-md bg-[#1a1a1a] text-gray-300 outline-none border border-gray-600 resize-none"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

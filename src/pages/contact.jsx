import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
 console.log("Form Submitted:", formData);

  // Store in localStorage
  localStorage.setItem("contactFormData", JSON.stringify(formData));
    // Optional: Reset form
    // setFormData({ firstName: '', lastName: '', email: '', message: '' });
  };

  return (
    <section className="bg-gradient-to-r from-black via-gray-900 to-gray-800 min-h-screen flex justify-center items-center px-12">
      <form onSubmit={handleSubmit} className="bg-gray-300 flex flex-col p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
         
        <p className="font-extrabold text-2xl text-gray-800">First Name :</p>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="px-4 py-2 rounded-md border border-gray-400"
          required
        />

        <p className="font-extrabold text-2xl text-gray-800">Last Name :</p>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="px-4 py-2 rounded-md border border-gray-400"
          required
        />

        <p className="font-extrabold text-2xl text-gray-800">Email :</p>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="px-4 py-2 rounded-md border border-gray-400"
          required
        />

        <p className="font-extrabold text-2xl text-gray-800">Message :</p>
        <textarea
          name="message"
          placeholder="Write your message experience here!"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="px-4 py-2 rounded-md border border-gray-400 resize-none"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-blue-800 hover:bg-blue-900 text-white hover:text-gray-900 font-bold py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;

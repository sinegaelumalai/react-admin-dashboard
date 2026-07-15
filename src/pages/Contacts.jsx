import { useState } from "react";
import {
  FiPlus,
  FiX,
  FiPhone,
  FiMail,
  FiSearch,
  FiMoreVertical,
  FiSliders,
  FiChevronDown,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";
import profile from "../assets/profile.png";
import female from "../assets/female.png";

export default function Contacts() {
  const [open, setOpen] = useState(false);

  const [contacts, setContacts] = useState([
    {
      name: "Regina Cooper",
      role: "Manager",
      email: "cooper@example.com",
      location: "Sochi, Russia",
      phone: "+1 (070) 123-4567",
      image: profile,
    },
    {
      name: "Judith Black",
      role: "Creative Director",
      email: "black@example.com",
      location: "New York, USA",
      phone: "+1 (070) 123-8459",
      image: profile,
    },
    {
      name: "Ronald Robertson",
      role: "Manager",
      email: "robe@example.com",
      location: "Paris, France",
      phone: "+1 (070) 123-9221",
      image: profile,
    },
    {
      name: "Dustin Williamson",
      role: "Designer",
      email: "williams@example.com",
      location: "Sydney, Australia",
      phone: "+1 (070) 123-0507",
      image: profile,
    },
    {
      name: "Calvin Flores",
      role: "Manager",
      email: "flores@example.com",
      location: "Berlin, Germany",
      phone: "+1 (070) 123-3791",
      image: profile,
    },
    {
      name: "Robert Edwards",
      role: "Developer",
      email: "edwards@example.com",
      location: "Shanghai, China",
      phone: "+1 (070) 123-1147",
      image: profile,
    },

     {
    name: "Nathan Fox",
    role: "Designer",
    email: "fox@example.com",
    location: "London, UK",
    phone: "+1 (070) 123-5073",
    image: profile,
  },
  {
    name: "Bessie Henry",
    role: "Developer",
    email: "henry@example.com",
    location: "New York, USA",
    phone: "+1 (070) 123-3578",
    image: profile,
  },
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const addContact = () => {
    if (!name || !email || !phone) return;

    setContacts([
      {
        name,
        email,
        phone,
        image: profile,
      },
      ...contacts,
    ]);

    setName("");
    setEmail("");
    setPhone("");
    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F7F8FC] p-8">

      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold text-gray-700">
          Contacts
        </h1>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-white"
        >
          <FiPlus />
          Add Contact
        </button>
      </div>

      {/* Contacts Table */}
      <div className="grid grid-cols-4 gap-6">

        {/* Contacts Table */}
        <div className="col-span-3 rounded-2xl bg-white shadow-sm">

          {/* Search */}
          <div className="flex items-center justify-between border-b border-gray-200 p-4">

            <div className="flex w-[500px] items-center rounded-xl border border-gray-200 px-4 py-3">
              <FiSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Search contact..."
                className="ml-3 w-full outline-none"
              />
            </div>

            <button className="rounded-xl border border-gray-200 px-5 py-3 text-sm">
              Actions ▾
            </button>

          </div>

          {/* Table Header */}
          <div className="grid grid-cols-5 border-b bg-gray-50 px-6 py-4 text-xs font-semibold uppercase text-gray-400">
            <p>Name</p>
            <p>Email</p>
            <p>Location</p>
            <p>Phone</p>
            <p></p>
          </div>

          {/* Rows */}
          {contacts.map((user, i) => (
            <div
              key={i}
              className="grid grid-cols-5 items-center border-b border-gray-200 px-6 py-4 hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <img
                  src={profile}
                  className="h-10 w-10 rounded-full"
                />

                <div>
                  <h4 className="font-medium">{user.name}</h4>
                  <p className="text-xs text-gray-400">
                    {user.role}
                  </p>
                </div>
              </div>

              <p className="text-gray-500">{user.email}</p>

              <p className="text-gray-500">{user.location}</p>

              <p className="text-gray-500">{user.phone}</p>

              <button className="text-xl text-gray-400 hover:text-black">
                <FiMoreVertical />
              </button>
            </div>
          ))}

          {/* Footer */}
          <div className="flex items-center justify-between p-5">

            <p className="text-sm text-gray-500">
              Showing 1 - {contacts.length} of {contacts.length}
            </p>

            <div className="flex gap-2">
              <button className="rounded border px-3 py-1">1</button>
              <button className="rounded border px-3 py-1">2</button>
              <button className="rounded border px-3 py-1">3</button>
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">

          <div className="text-center">
            <img
              src={female}
              className="mx-auto h-36 w-36 rounded-full"
            />

            <h2 className="mt-4 text-2xl font-bold">
              Jane Wilson
            </h2>

            <p className="text-gray-400">
              Creative Director
            </p>
          </div>

          <hr className="my-6" />

          <h3 className="mb-4 font-bold">INFO</h3>

          <div className="space-y-4 text-sm">
            <div>
              <p className="text-gray-400">EMAIL</p>
              <p>black@example.com</p>
            </div>

            <div>
              <p className="text-gray-400">PHONE</p>
              <p>+1 (070) 123-8459</p>
            </div>

            <div>
              <p className="text-gray-400">BIRTHDAY</p>
              <p>17 March, 1995</p>
            </div>

            <div>
              <p className="text-gray-400">LOCATION</p>
              <p>New York, NY</p>
            </div>
          </div>

          <hr className="my-6" />

          <h3 className="mb-4 font-bold">FAVORITES</h3>

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <img src={profile} className="h-10 w-10 rounded-full" />
              <div>
                <p className="font-medium">Ronald Robertson</p>
                <p className="text-xs text-gray-400">Product Designer</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <img src={profile} className="h-10 w-10 rounded-full" />
              <div>
                <p className="font-medium">Regina Cooper</p>
                <p className="text-xs text-gray-400">Project Manager</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <img src={profile} className="h-10 w-10 rounded-full" />
              <div>
                <p className="font-medium">Judith Black</p>
                <p className="text-xs text-gray-400">Creative Director</p>
              </div>
            </div>

             <div className="flex items-center gap-3">
              <img src={profile} className="h-10 w-10 rounded-full" />
              <div>
                <p className="font-medium">Ronald Robertson</p>
                <p className="text-xs text-gray-400">Product Designer</p>
              </div>
            </div>

          </div>

        </div>

      </div>


      {/* Popup */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

          <div className="w-[450px] rounded-2xl bg-white p-6">

            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-3xl font-bold">
                Add Contact
              </h2>

              <button onClick={() => setOpen(false)}>
                <FiX size={22} />
              </button>
            </div>

            <input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mb-4 w-full rounded-lg border p-3 outline-none"
            />

            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4 w-full rounded-lg border p-3 outline-none"
            />

            <input
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mb-6 w-full rounded-lg border p-3 outline-none"
            />

            <button
              onClick={addContact}
              className="w-full rounded-xl bg-green-600 py-3 font-medium text-white"
            >
              Save Contact
            </button>

          </div>

        </div>
      )}

    </div>
  );
}
import {
  FiInbox,
  FiStar,
  FiEdit2,
  FiSend,
  FiBookmark,
  FiTrash2,
  FiPlus,
  FiSearch,
  FiPaperclip,
  FiMoreHorizontal,
  FiFileText,
  FiDownload

} from "react-icons/fi";

import { FaFilePdf } from "react-icons/fa";



import { useState } from "react";



import profile from "../assets/profile.png";

export default function Mail() {
  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);
  const [subject, setSubject] = useState("Order Status #24197118");
  const [resumeFile, setResumeFile] = useState(null);
  const [uploadFile, setUploadFile] = useState(null);



  return (
    <div className="flex overflow-hidden rounded-2xl bg-white shadow">
      {/* Mail Menu */}

      <div className="w-72 border-r border-gray-300 bg-[#FBFBFC] p-5">

        <button
          onClick={() => setOpen(true)}
          className="mb-6 w-full rounded-lg bg-green-600 py-3 text-sm font-semibold text-white hover:bg-green-700"
        >
          NEW MESSAGE
        </button>

        <div className="space-y-1">

          <button className="flex w-full items-center justify-between rounded-lg bg-gray-100 px-4 py-3 text-gray-700">
            <div className="flex items-center gap-3">
              <FiInbox />
              <span>Inbox</span>
            </div>
            <span className="rounded-full bg-red-400 px-2 text-xs text-white">5</span>
          </button>

          <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-gray-600 hover:bg-gray-100">
            <FiStar />
            Marked
          </button>

          <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-gray-600 hover:bg-gray-100">
            <FiEdit2 />
            Drafts
          </button>

          <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-gray-600 hover:bg-gray-100">
            <FiSend />
            Sent
          </button>

          <button className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-gray-600 hover:bg-gray-100">
            <div className="flex items-center gap-3">
              <FiBookmark />
              Important
            </div>
            <span className="rounded-full bg-red-400 px-2 text-xs text-white">4</span>
          </button>

          <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-gray-600 hover:bg-gray-100">
            <FiTrash2 />
            Deleted
          </button>

        </div>

        <div className="mt-10">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Labels
            </h3>

            <button className="rounded-full bg-gray-100 p-2">
              <FiPlus size={14} />
            </button>
          </div>

          <div className="space-y-4 text-sm text-gray-600">
            <div className="flex items-center gap-3"><span className="h-3 w-3 rounded-full bg-teal-400"></span>Personal</div>
            <div className="flex items-center gap-3"><span className="h-3 w-3 rounded-full bg-sky-400"></span>Work</div>
            <div className="flex items-center gap-3"><span className="h-3 w-3 rounded-full bg-lime-400"></span>Friends</div>
            <div className="flex items-center gap-3"><span className="h-3 w-3 rounded-full bg-yellow-400"></span>Family</div>
            <div className="flex items-center gap-3"><span className="h-3 w-3 rounded-full bg-green-600"></span>Social</div>
          </div>
        </div>

      </div>

      {/* Mail List */}
      <div className="w-80 border-r border-gray-300 bg-white">

        {/* Search */}
        <div className="border-gray-300 p-4">
          <div className="flex items-center rounded-lg bg-gray-100 px-3 py-2">
            <FiSearch className="text-gray-400" />

            <input
              type="text"
              placeholder="Search..."
              className="ml-2 w-full bg-transparent text-sm outline-none"
            />

            <span className="text-sm text-gray-400">
              Recent ▾
            </span>
          </div>
        </div>

        {/* Mail Item */}
        <div className="space-y-1">

          {[
            {
              name: "Regina Cooper",
              title: "Creative Director Resume",
              time: "10:45",
            },
            {
              name: "Dustin Williamson",
              title: "Meeting with friends",
              time: "10:40",
            },
            {
              name: "Jane Wilson",
              title: "UX Conference in New York",
              time: "09:15",
            },
            {
              name: "Brandon Pena",
              title: "Muzli's weekly design #236",
              time: "09:01",
            },
            {
              name: "Jacob Hawkins",
              title: "Weekly project report",
              time: "08:20",
            },
            {
              name: "Shane Black",
              title: "Order Status #24197118",
              time: "08:10",
            },
            {
              name: "Regina Cooper",
              title: "Welcome to Dribbble!",
              time: "08:02",
            },
          ].map((mail, index) => (
            <div
              key={index}
              className="flex cursor-pointer gap-3 border-b border-gray-300 p-4 hover:bg-gray-50"
            >
              <img
                src={profile}
                alt=""
                className="h-11 w-11 rounded-full"
              />

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-gray-700">
                    {mail.name}
                  </h4>

                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <FiPaperclip size={12} />
                    {mail.time}
                  </div>
                </div>

                <h3 className="mt-1 text-sm font-semibold text-gray-800">
                  {mail.title}
                </h3>

                <p className="mt-1 text-xs text-gray-400">
                  The Arts play a large role in the expression of
                  inner thoughts and beauty in my life...
                </p>

                <div className="mt-2 flex items-center justify-between">
                  <FiMoreHorizontal className="text-gray-400" />

                  <span className="text-red-400">🔖</span>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Mail Details */}
      <div className="flex-1 bg-white">

        {/* Top Actions */}
        <div className="flex items-center justify-between border-b px-8 py-4">
          <span className="text-gray-400">↩</span>

          <div className="flex items-center gap-8 text-gray-400">
            <span>1 of 200</span>
            <span>🔖</span>
            <span>🖨</span>
            <span>🗑</span>
          </div>
        </div>

        <div className="px-8 py-7">

          {/* Sender */}
          <div className="flex items-start justify-between">
            <div className="flex gap-3">
              <img
                src={profile}
                alt=""
                className="h-12 w-12 rounded-full"
              />

              <div>
                <h3 className="font-semibold text-gray-700">
                  Regina Cooper
                </h3>

                <p className="text-sm text-green-500">
                  regina_cooper@mail.com
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-400">
              May 27, 2020 — 10:45
            </p>
          </div>

          {/* Subject */}
          <h1 className="mt-8 text-4xl font-bold text-gray-700">
            Creative Director Resume
          </h1>

          {/* Body */}
          <div className="mt-8 space-y-5 text-gray-500 leading-8">
            <p>Hello, Regina Cooper!</p>

            <p>
              I am writing to introduce you to David Boyd. I know you've been
              looking hard for a candidate for that Creative Director position
              and I believe David Boyd fits the position.
            </p>

            <p>
              David Boyd worked together at Apple company. They did a terrific
              job there and were responsible for restructuring both the public
              facing and internal websites.
            </p>

            <p>
              I've attached David Boyd's resume and portfolio for your review.
              Contact David at
              <span className="text-green-500"> regina_cooper@mail.com</span>
            </p>

            <p>
              Thanks for any help you can give. 😊
            </p>

            <p>
              Best regards,<br />
              Regina Cooper
            </p>
          </div>

          {/* Reply */}
          <div className="mt-8 rounded-2xl border">

            <div className="border-b px-5 py-3 text-sm text-gray-500">
              To:
              <span className="ml-2 rounded bg-gray-100 px-3 py-1">
                Regina Cooper
              </span>
            </div>

            <textarea
              rows={7}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type something..."
              className="w-full resize-none p-5 outline-none"
            />

            <div className="border-t p-5">

              <div className="flex items-center gap-3 p-5">
                <FaFilePdf size={26} className="text-red-600" />

                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="text-sm"
                />
              </div>

              {file && (
                <div className="mt-4 flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                    alt="PDF"
                    className="h-10 w-10"
                  />

                  <div className="flex-1">
                    <p className="font-medium">{file.name}</p>
                    <p className="text-xs text-gray-400">
                      {(file.size / 1024).toFixed(1)} KB
                    </p>
                  </div>

                  <FiDownload className="text-gray-500" size={20} />
                </div>
              )}

            </div>

            {/* Send */}
            <div className="flex items-center justify-between border-t p-4">

              <button
                onClick={() => {
                  if (message.trim() === "") {
                    alert("Please enter a message.");
                    return;
                  }

                  setSuccess(true);

                  setTimeout(() => {
                    setSuccess(false);
                    setMessage("");
                    setFile(null);
                  }, 2500);
                }}
                className="rounded-lg bg-green-600 px-8 py-3 text-white hover:bg-green-700"
              >
                Send
              </button>

              {success && (
                <div className="rounded-lg bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                  ✅ Mail sent successfully!
                </div>
              )}

            </div>

          </div>

        </div>

      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/30 pr-8">

          <div className="h-[88vh] w-[520px] overflow-y-auto rounded-3xl bg-white p-7 shadow-2xl">

            <div className="flex items-center justify-between px-8 py-6">

              <h2 className="text-[20px] font-bold text-gray-700">
                New Message
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-2xl text-gray-500"
              >
                ×
              </button>

            </div>

            <div className="mb-5">
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm text-gray-500">To</label>

                <div className="flex gap-4 text-sm text-gray-400">
                  <span className="cursor-pointer hover:text-gray-600">Cc</span>
                  <span className="cursor-pointer hover:text-gray-600">Bcc</span>
                </div>
              </div>

              <div className="flex h-12 items-center rounded-xl border border-gray-200 px-3">
                <span className="rounded-lg bg-gray-100 px-3 py-1 text-sm text-gray-700">
                  Regina Cooper ✕
                </span>

                <input
                  type="text"
                  placeholder=""
                  className="ml-2 flex-1 outline-none"
                />
              </div>
            </div>

            <div className="mb-5">
              <label className="mb-2 block text-sm text-gray-500">
                Subject
              </label>

              <input
                type="text"
                placeholder="Order Status #24197118"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none focus:border-green-500"
              />
            </div>

            <div className="mb-5 overflow-hidden rounded-2xl border border-gray-200">

              {/* Toolbar */}
              <div className="flex h-12 items-center gap-4 border-b bg-[#FAFAFA] px-4 text-gray-500">

                <button>A ▾</button>
                <button className="text-lg font-bold">B</button>
                <button className="italic">I</button>
                <button className="underline">U</button>

                <div className="h-5 w-px bg-gray-200"></div>

                <button>🔗</button>
                <button>😊</button>
                <button>🖼</button>

                <div className="h-5 w-px bg-gray-200"></div>

                <button>☰</button>
                <button>≣</button>

                <div className="h-5 w-px bg-gray-200"></div>

                <button>≡</button>
                <button>☷</button>
                <button>☰</button>
                <button>☰</button>

              </div>

              {/* Message */}
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type something"
                className="h-64 w-full resize-none p-5 outline-none"
              />

            </div>

            <div className="flex items-center justify-between rounded-xl border border-gray-200 p-3">
              <div className="flex items-center gap-3">
                <input
                  type="file"
                  accept=".pdf"
                  hidden
                  id="resume"
                  onChange={(e) => setResumeFile(e.target.files[0])}
                />

                <label htmlFor="resume" className="cursor-pointer">
                  📄
                </label>

                <div>
                  <p className="text-sm">
                    {resumeFile ? resumeFile.name : "Resume.pdf"}
                  </p>
                  <p className="text-xs text-gray-400">
                    {resumeFile
                      ? `${(resumeFile.size / 1024).toFixed(0)} KB`
                      : "570 KB"}
                  </p>
                </div>
              </div>

              <button onClick={() => setResumeFile(null)}>
                🗑
              </button>
            </div>

            <div className="rounded-xl border border-gray-200 p-3">
              <input
                type="file"
                hidden
                id="upload"
                onChange={(e) => setUploadFile(e.target.files[0])}
              />

              <label
                htmlFor="upload"
                className="cursor-pointer text-sm font-medium"
              >
                {uploadFile ? uploadFile.name : "Upload File"}
              </label>

              <div className="mt-3 h-2 rounded-full bg-gray-200">
                <div className="h-2 w-2/5 rounded-full bg-green-600"></div>
              </div>

              <p className="mt-1 text-xs text-gray-500">
                {uploadFile ? "Uploading... 40%" : "No file selected"}
              </p>
            </div>


            <button
              onClick={() => {
                if (!message.trim()) {
                  alert("Please type a message.");
                  return;
                }

                alert("Message Sent Successfully ✅");

                setMessage("");
                setResumeFile(null);
                setUploadFile(null);
                setShowCompose(false);
              }}
              className="rounded-lg bg-green-600 px-8 py-3 font-medium text-white hover:bg-green-700 mt-5"
            >
              Send
            </button>

            {/* Next section here */}

          </div>

        </div>
      )}

    </div>
  );
}
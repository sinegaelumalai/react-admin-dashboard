import { useState } from "react";
import profile from "../assets/profile.png";
import chat1 from "../assets/chat1.png";
import chat2 from "../assets/chat2.png";
import chat3 from "../assets/chat3.png";

export default function Chat() {

  const chats = [
    { name: "Dustin Williamson", message: "Hello, Mark! I am writing...", online: true },
    { name: "Jane Wilson", message: "We use the Arts as a means...", online: true },
    { name: "Regina Cooper", message: "The Arts play a large role...", online: false },
    { name: "Brandon Pena", message: "The arts allow us...", online: true },
    { name: "Jacob Hawkins", message: "From dance and music...", online: false },
    { name: "Shane Black", message: "The arts teach us...", online: true },
    { name: "Priscilla Edwards", message: "Concept of life is shown...", online: false },
    { name: "Kristin McCoy", message: "Inner thoughts and beauty...", online: true },
    { name: "Bruce Russell", message: "Modern design trends...", online: false },
    { name: "Cody Fisher", message: "Let's schedule a meeting...", online: true },
    { name: "Kathryn Murphy", message: "Please check the design...", online: false },
    { name: "Jerome Bell", message: "I have shared the files...", online: true },
    { name: "Esther Howard", message: "Can you review this?", online: false },
  ];

  const [search, setSearch] = useState("");
  const [selectedChat, setSelectedChat] = useState(chats[0]);
  const [message, setMessage] = useState("");



  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="h-[calc(100vh-90px)] overflow-hidden rounded-3xl bg-white shadow">

      {/* Left Sidebar */}
      <div className="float-left h-full w-[320px] overflow-hidden border-r border-gray-200 bg-white">
        {/* Search */}
        <div className="border-b border-gray-200 p-5">
          <div className="rounded-xl bg-gray-100 px-4 py-3">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-sm outline-none"
            />
          </div>
        </div>

        {/* Teams */}
        <div
          className="h-[calc(100%-80px)] overflow-y-auto px-5 pt-5"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >          <div className="mb-4 flex items-center justify-between">
            <p className="text-xs font-bold tracking-wider text-gray-400">
              TEAMS
            </p>

            <button className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100">
              +
            </button>
          </div>

          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 font-semibold text-cyan-600">
              M
            </div>

            <div>
              <h4 className="font-semibold text-gray-700">
                #Managers
              </h4>

              <p className="text-xs text-gray-400">
                Hello, Mark! I am writing...
              </p>
            </div>
          </div>

          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 font-semibold text-green-600">
                D
              </div>

              <div>
                <h4 className="font-semibold text-gray-700">
                  #Designers
                </h4>

                <p className="text-xs text-gray-400">
                  Hello. Can you drop...
                </p>
              </div>

            </div>

            <span className="rounded-full bg-red-500 px-2 text-xs text-white">
              4
            </span>
          </div>

          {/* People */}
          <div className="mb-4 flex items-center justify-between">
            <p className="text-xs font-bold tracking-wider text-gray-400">
              PEOPLE
            </p>

            <button className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100">
              +
            </button>
          </div>

          {filteredChats.map((chat, index) => (

            <div
              key={index}
              onClick={() => setSelectedChat(chat)}
              className={`flex cursor-pointer items-center gap-3 border-gray-200 border-b py-4 hover:bg-gray-50 ${selectedChat.name === chat.name ? "bg-gray-100" : ""
                }`}
            >

              <div className="relative">

                <img
                  src={profile}
                  alt=""
                  className="h-11 w-11 rounded-full"
                />

                {chat.online && (
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"></span>
                )}
              </div>

              <div className="flex-1">

                <h4 className="font-medium text-gray-700">
                  {chat.name}
                </h4>

                <p className="truncate text-xs text-gray-400">
                  {chat.message}
                </p>

              </div>

              {index === 1 && (
                <span className="rounded-full bg-red-500 px-2 text-xs text-white">
                  4
                </span>
              )}

            </div>

          ))}

        </div>

      </div>



      {/* Right Chat Area */}
      <div className="ml-[320px] flex h-full flex-col">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 p-5">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={profile}
                alt=""
                className="h-11 w-11 rounded-full"
              />

              {selectedChat.online && (
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-gray-200 border-white bg-green-500"></span>
              )}
            </div>
            <h3 className="text-lg font-semibold">
              {selectedChat.name}
            </h3>
          </div>

          <span className="text-xl text-gray-400">•••</span>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto bg-white px-8 py-6">

          {/* Green Message */}
          <div className="mb-8 flex items-start gap-3">

            <img
              src={profile}
              alt=""
              className="h-10 w-10 rounded-full"
            />

            <div>

              <div className="rounded-2xl rounded-bl-sm bg-green-600 px-5 py-3 text-white">
                Hi Cody, any progress on the project? 😊
              </div>

              <p className="mt-2 text-center text-xs text-gray-400">
                1 day ago
              </p>

            </div>

          </div>

          {/* White Message */}
          <div className="mb-8 flex justify-end">

            <div className="mr-3 max-w-md">

              <div className="rounded-2xl rounded-br-sm border border-gray-200 bg-white px-5 py-3 shadow-sm">

                <p className="font-semibold">
                  Hi {selectedChat.name.split(" ")[0]}!
                </p>

                <p className="text-gray-600">
                  Yes. I just finished developing the "Chat" template.
                </p>

              </div>

              <p className="mt-2 text-xs text-gray-400">
                1 day ago
              </p>

            </div>

            <img
              src={profile}
              alt=""
              className="h-10 w-10 rounded-full"
            />

          </div>

          <div className="mb-8 flex justify-end gap-3">

            <img
              src={chat1}
              alt=""
              className="h-16 w-16 rounded-xl object-cover"
            />

            <img
              src={chat2}
              alt=""
              className="h-16 w-16 rounded-xl object-cover"
            />

            <img
              src={chat3}
              alt=""
              className="h-16 w-16 rounded-xl object-cover"
            />

            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-green-100 font-bold text-green-600">
              +3
            </div>

          </div>

          {/* Green Message */}
          <div className="mb-8 flex items-start gap-3">

            <img
              src={profile}
              alt=""
              className="h-10 w-10 rounded-full"
            />

            <div>

              <div className="rounded-2xl rounded-bl-sm bg-green-600 px-5 py-3 text-white">
                <p>It looks amazing. 🤓</p>
                <p>The customer will be very satisfied.</p>
              </div>

              <p className="mt-2 text-center text-xs text-gray-400">
                1 day ago
              </p>

            </div>

          </div>

          <div className="mb-8 flex justify-end items-start gap-3">

            <div className="text-gray-400 text-lg">
              ✎ 🗑
            </div>

            <div>

              <div className="rounded-2xl rounded-br-sm border border-gray-200 bg-white px-5 py-3 shadow-sm">
                Thank you, glad you liked it.<br />
                Send me Styles Guide.
              </div>

              <p className="mt-2 text-xs text-gray-400">
                1 day ago
              </p>

            </div>

            <img
              src={profile}
              alt=""
              className="h-10 w-10 rounded-full"
            />

          </div>

          <div className="my-8 flex items-center gap-4">

            <div className="h-px flex-1 bg-gray-200"></div>

            <span className="text-xs text-gray-400">
              Today
            </span>

            <div className="h-px flex-1 bg-gray-200"></div>

          </div>

          {/* PDF Card */}
          <div className="mb-10 flex items-end justify-between">

            <div className="flex items-end gap-3">

              <img
                src={profile}
                alt=""
                className="h-10 w-10 rounded-full"
              />

              <div>

                <div className="w-[240px] overflow-hidden rounded-2xl">

                  <div className="bg-[#EDF8F0] p-4">
                    <p className="font-medium">
                      Brand Styles Guide.pdf
                    </p>

                    <p className="mt-1 text-green-600">
                      487 KB
                    </p>
                  </div>

                  <button className="flex w-full items-center justify-between bg-green-600 px-4 py-3 text-white">
                    <span>Download</span>
                    <span>↓</span>
                  </button>

                </div>

                <p className="mt-2 text-right text-xs text-gray-400">
                  2 min ago
                </p>

              </div>

            </div>

            <div className="flex items-end gap-3">

              <div>

                <div className="rounded-2xl border border-gray-200 bg-white px-6 py-3">
                  I'll see later
                </div>

                <p className="mt-2 text-xs text-gray-400">
                  1 min ago
                </p>

              </div>

              <img
                src={profile}
                alt=""
                className="h-10 w-10 rounded-full"
              />

            </div>

          </div>

          {/* Input */}
          <div className="sticky bottom-0 flex items-center gap-4 border-t border-gray-200 bg-white py-4">

            <button className="text-xl text-gray-400">
              📎
            </button>

            <button className="text-xl text-gray-400">
              😊
            </button>

            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message here..."
              className="flex-1 outline-none"
            />

            <button
              onClick={() => {
                if (!message.trim()) return;
                alert("Message Sent ✅");
                setMessage("");
              }}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-xl text-white hover:bg-green-700"
            >
              ➤
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}
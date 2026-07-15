import { useState } from "react";
import {
  FiPlus,
  FiCalendar,
  FiPaperclip,
  FiX,
} from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";

export default function Notes() {
  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");


  const deleteNote = (index) => {
  setNotes(notes.filter((_, i) => i !== index));
};

  const [notes, setNotes] = useState([
    {
      title: "The title of a note",
      desc: "Lorem ipsum dolor sit amet, ullamcor suscipit adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      date: "12 June, 2020",
    },
    {
      title: "The title of a note",
      desc: "Lorem ipsum dolor sit amet, ullamcor suscipit adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      date: "12 June, 2020",
    },
    {
      title: "The title of a note",
      desc: "Lorem ipsum dolor sit amet, ullamcor suscipit adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      date: "12 June, 2020",
    },
    {
      title: "The title of a note",
      desc: "Lorem ipsum dolor sit amet, ullamcor suscipit adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      date: "12 June, 2020",
    },
    {
      title: "The title of a note",
      desc: "Lorem ipsum dolor sit amet, ullamcor suscipit adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      date: "12 June, 2020",
    },
    {
      title: "The title of a note",
      desc: "Lorem ipsum dolor sit amet, ullamcor suscipit adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      date: "12 June, 2020",
    },
  ]);
  const addNote = () => {
    if (!title || !desc) return;

    setNotes([
      {
        title,
        desc,
        date: new Date().toLocaleDateString(),
      },
      ...notes,
    ]);

    setTitle("");
    setDesc("");
    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F7F8FC] p-8">

      {/* Header */}
      <div className="mb-8 flex items-center justify-between">

        <h1 className="text-4xl font-bold text-gray-700">
          Notes
        </h1>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-white"
        >
          <FiPlus />
          Add Note
        </button>

      </div>

      {/* One Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {notes.map((note, i) => (

          <div
            key={i}
            className="relative rounded-xl bg-white p-5 shadow-sm"
          >

            <div className="absolute left-0 top-0 h-6 w-6 rounded-br-xl bg-yellow-400"></div>

            <div className="mb-3 flex items-center justify-between text-xs text-gray-400">

              <div className="flex items-center gap-2">
                <FiCalendar />
                {note.date}
              </div>

              <div className="flex items-center gap-3">

                <FiPaperclip className="cursor-pointer hover:text-blue-500" />

                <button
                  onClick={() => deleteNote(i)}
                  className="rounded-full p-1 text-red-500 transition hover:bg-red-100"
                >
                  <FiTrash2 size={16} />
                </button>

              </div>

            </div>

            <hr />

            <h3 className="mt-4 text-xl font-bold text-gray-700">
              {note.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-500">
              {note.desc}
            </p>

          </div>

        ))}

      </div>

      {/* Popup */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">

          <div className="w-[500px] rounded-2xl bg-white p-6">

            <div className="mb-6 flex items-center justify-between">

              <h2 className="text-3xl font-bold">
                Add Note
              </h2>

              <button onClick={() => setOpen(false)}>
                <FiX />
              </button>

            </div>

            <input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mb-4 w-full rounded-lg border p-3 outline-none"
            />

            <textarea
              rows={6}
              placeholder="Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="w-full rounded-lg border p-3 outline-none"
            />

            <div className="mt-6 text-right">

              <button
                onClick={addNote}
                className="rounded-lg bg-green-600 px-8 py-3 text-white"
              >
                Create
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}
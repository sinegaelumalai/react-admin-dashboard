import profile from "../assets/profile.png";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function ProfileSidebar({
    setShowProfile,
}) {
    const favorites = [
        { name: "Ronald Robertson", role: "Product Designer" },
        { name: "Regina Cooper", role: "Project Manager" },
        { name: "Judith Black", role: "Business Analyst" },
        { name: "Dustin Williamson", role: "Web Developer" },
        { name: "Calvin Flores", role: "Senior Vice President" },
        { name: "Jane Wilson", role: "UI/UX Designer" },
        { name: "Brandon Pena", role: "Frontend Developer" },
        { name: "Jacob Hawkins", role: "Backend Developer" },
        { name: "Priscilla Edwards", role: "QA Engineer" },
        { name: "Kristin McCoy", role: "Product Owner" },
        { name: "Bruce Russell", role: "Software Engineer" },
        { name: "Cody Fisher", role: "DevOps Engineer" },
        { name: "Kathryn Murphy", role: "HR Manager" },
        { name: "Jerome Bell", role: "Marketing Manager" },
        { name: "Esther Howard", role: "Graphic Designer" },
        { name: "Savannah Nguyen", role: "Mobile Developer" },
        { name: "Marvin McKinney", role: "Team Lead" },
        { name: "Courtney Henry", role: "UI Designer" },
        { name: "Jenny Wilson", role: "Project Coordinator" },
        { name: "Guy Hawkins", role: "Software Architect" },
        { name: "Robert Fox", role: "Database Administrator" },
        { name: "Annette Black", role: "Support Engineer" },
        { name: "Leslie Alexander", role: "Business Consultant" },
        { name: "Albert Flores", role: "Cloud Engineer" },
        { name: "Brooklyn Simmons", role: "Security Analyst" },
    ];

    const navigate = useNavigate();
    return (
        <aside className="h-screen w-[320px] overflow-y-auto border-r border-gray-200 bg-white p-6"
            style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
            }}>



            {/* ADD HERE 👇 */}
            <div className="mb-6 flex items-center gap-3">

                <button
                    onClick={() => {
                        setShowProfile(false);
                        navigate("/dashboard");
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100"
                >
                    <FiArrowLeft size={22} />
                </button>

                <h2 className="text-2xl font-bold text-gray-700">
                    Profile
                </h2>

            </div>

            {/* Profile */}
            <div className="flex flex-col items-center">

                <img
                    src={profile}
                    alt=""
                    className="h-28 w-28 rounded-3xl object-cover"
                />

                <h2 className="mt-4 text-lg font-semibold text-gray-700">
                    Felicia Brown
                </h2>

                <p className="mt-1 text-sm text-gray-400">
                    Project Manager
                </p>

                <button className="mt-5 rounded-lg bg-green-600 px-6 py-2 text-sm font-semibold text-white hover:bg-green-700">
                    Edit Profile
                </button>

            </div>

            <hr className="my-8" />

            {/* Info */}
            <h3 className="mb-5 text-xs font-bold text-gray-400">
                INFO
            </h3>

            <Info title="EMAIL" value="example@mail.com" />
            <Info title="PHONE" value="+123-4567-8800" />
            <Info title="BIRTHDAY" value="17 March, 1995" />
            <Info title="LOCATION" value="New York, NY" />

            <hr className="my-8" />

            {/* Favorites */}
            <h3 className="mb-5 text-xs font-bold text-gray-400">
                FAVORITES
            </h3>

            <div className="space-y-4">

                {favorites.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3"
                    >
                        <img
                            src={profile}
                            alt=""
                            className="h-10 w-10 rounded-full"
                        />

                        <div>
                            <h4 className="text-sm font-medium text-gray-700">
                                {item.name}
                            </h4>

                            <p className="text-xs text-gray-400">
                                {item.role}
                            </p>
                        </div>

                    </div>
                ))}

            </div>

        </aside>
    );
}

function Info({ title, value }) {
    return (
        <div className="mb-5">
            <p className="mb-1 text-[11px] font-bold text-gray-400">
                {title}
            </p>

            <p className="text-sm text-gray-700">
                {value}
            </p>
        </div>
    );
}
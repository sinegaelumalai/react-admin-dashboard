export default function StatCard({
  title,
  value,
  percentage,
  positive,
  icon,
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-gray-100 bg-white px-8 py-6 shadow-sm">
      <div>
        <p className="text-[18px] font-medium text-gray-400">
          {title}
        </p>

        <div className="mt-4 flex items-center gap-3">
          <h2 className="text-[30px] font-bold text-[#364152]">
            {value}
          </h2>

          <span
            className={`text-lg ${
              positive ? "text-[#55D26A]" : "text-[#FF6B6B]"
            }`}
          >
            {positive ? "↑" : "↓"} {percentage}
          </span>
        </div>
      </div>

      <div className="flex h-28 w-28 items-center justify-center">
        <img
          src={icon}
          alt=""
          className="h-14 w-14 object-contain"
        />
      </div>
    </div>
  );
}
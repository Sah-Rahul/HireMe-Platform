import { FaMoneyBillWave, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

function Layout({ children }) {
  return (
    <div className="flex">
      {/* Sidebar Filter */}
      <aside className="w-full md:w-1/4 bg-white shadow-md p-6 space-y-6">
        <div>
          <h2 className="font-semibold text-lg mb-2">Filter by Salary</h2>
          <input
            type="range"
            min="10000"
            max="200000"
            className="w-full"
          />
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Filter by Location</h2>
          <input
            type="text"
            placeholder="Search Location"
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Filter by Experience</h2>
          <select className="w-full px-3 py-2 border rounded-md">
            <option>Fresher</option>
            <option>1-3 Years</option>
            <option>3-5 Years</option>
            <option>5+ Years</option>
          </select>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}

export default Layout;

import {
  FaPaintBrush,
  FaCode,
  FaDatabase,
  FaMobileAlt,
  FaBuilding,
  FaLaptopCode,
  FaHome,
  FaPenNib,
  FaSearch,
  FaBullhorn,
  FaVideo,
  FaCameraRetro,
} from "react-icons/fa";

const categories = [
  { icon: <FaPaintBrush />, label: "Design & Creative", count: 653 },
  { icon: <FaCode />, label: "Frontend", count: 58 },
  { icon: <FaDatabase />, label: "Data Science", count: 90 },
  { icon: <FaMobileAlt />, label: "Mobile Application", count: 580 },
  { icon: <FaBuilding />, label: "Construction", count: 108 },
  { icon: <FaLaptopCode />, label: "UI/UX", count: 95 },
  { icon: <FaHome />, label: "Real Estate", count: 200 },
  { icon: <FaPenNib />, label: "Content Writer", count: 300 },
  { icon: <FaVideo />, label: "Video Editing", count: 120 },
  { icon: <FaCameraRetro />, label: "Photography", count: 140 },
  { icon: <FaSearch />, label: "SEO Optimization", count: 75 },
  { icon: <FaBullhorn />, label: "Digital Marketing", count: 110 },
];
 


const Categories = () => {
  return (
    <div 
    className="pb-10 min-h-screen px-10 bg-[url(/banner.jpg)]  ">
      <div>
        <h1 className="text-center text-green-600 text-3xl font-bold pt-10 mb-10">
          Browse Top Categories
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer flex flex-col items-center justify-center bg-white border border-green-100 rounded-lg shadow hover:shadow-lg transition-transform duration-300 hover:scale-105 py-10"
          >
            <div className="text-green-600 text-5xl mb-4">{item.icon}</div>
            <h3 className="text-md font-medium mb-2 text-gray-900 text-center">
              {item.label}
            </h3>
            <p className="text-green-700 text-sm">({item.count})</p>
          </div>
        ))}
      </div>
      <div className="pt-14 flex items-center justify-center">
        <button className="bg-green-600 text-white px-5 py-2   border-2 border-green-600 cursor-pointer font-semibold transition-colors duration-300 hover:bg-transparent hover:text-green-600">
          Browse All Sectors
        </button>
      </div>
     
    </div>
  );
};

export default Categories;

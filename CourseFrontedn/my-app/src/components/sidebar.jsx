import { Link } from "react-router-dom";

const sidebar = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      {/* Logo or Brand */}
      <a href="/" className="text-white flex items-center space-x-2 px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11.049 2.927c.3-1.14 1.89-1.14 2.19 0l1.362 5.145a1 1 0 00.95.69h5.407c1.12 0 1.591 1.424.68 2.093l-4.408 3.205a1 1 0 00-.364 1.118l1.362 5.145c.3 1.14-.94 2.085-1.88 1.435l-4.408-3.205a1 1 0 00-1.175 0l-4.408 3.205c-.94.65-2.18-.295-1.88-1.435l1.362-5.145a1 1 0 00-.364-1.118L2.1 10.855c-.91-.669-.44-2.093.68-2.093h5.407a1 1 0 00.95-.69l1.362-5.145z"
          />
        </svg>
        <span className="text-2xl font-extrabold">CourseApp</span>
      </a>

      {/* Navigation Links */}
      <nav>
        <Link
          to="/create-course"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          Create a Course
        </Link>
        <Link
          to="/create-instance"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          Create an Instance
        </Link>
        <Link
          to="/list-courses"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          List Courses
        </Link>
        <Link
          to="/list-instances"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          List Instances
        </Link>
      </nav>
    </div>
  );
};

export default sidebar;

import axios from "axios";
import { useEffect, useState } from "react";

export default function ListCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/courses").then((response) => {
      setCourses(response.data);
    });
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/api/courses/${id}`);
    setCourses(courses.filter((course) => course.id !== id));
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">List of Courses</h1>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-blue-200">
            <th className="px-4 py-2">Course Title</th>
            <th className="px-4 py-2">Code</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id} className="bg-blue-50">
              <td className="border px-4 py-2">{course.title}</td>
              <td className="border px-4 py-2">{course.courseCode}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => alert(`Viewing course: ${course.id}`)}
                  className="text-blue-500 hover:text-blue-700 mr-2"
                >
                  🔍
                </button>
                <button
                  onClick={() => handleDelete(course.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import axios from "axios";
import { useEffect, useState } from "react";

export default function CreateInstance() {
  const [courses, setCourses] = useState([]);
  const [courseId, setCourseId] = useState("");
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/api/courses").then((response) => {
      setCourses(response.data);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const instance = { year, semester, course: { id: courseId } };
    await axios.post("http://localhost:8080/api/instances", instance);
    alert("Course instance created successfully!");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Create a Course Instance</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Select Course</label>
          <select
            className="w-full px-3 py-2 border rounded"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
          >
            <option value="">Select course</option>
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.title}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Year</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Semester</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Instance
        </button>
      </form>
    </div>
  );
}

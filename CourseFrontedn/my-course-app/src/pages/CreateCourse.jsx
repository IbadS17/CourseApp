import axios from "axios";
import { useState } from "react";

export default function CreateCourse() {
  const [title, setTitle] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const course = { title, courseCode, description };
    await axios.post("http://localhost:8080/api/courses", course);
    alert("Course created successfully!");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Create a Course</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Course Title</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Course Code</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            value={courseCode}
            onChange={(e) => setCourseCode(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            className="w-full px-3 py-2 border rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Course
        </button>
      </form>
    </div>
  );
}

import axios from "axios";
import { useEffect, useState } from "react";

export default function ListInstances() {
  const [instances, setInstances] = useState([]);
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");

  // Function to fetch instances based on year and semester
  const fetchInstances = async () => {
    try {
      const response = await axios.get(
        year && semester
          ? `http://localhost:8080/api/instances/${year}/${semester}`
          : `http://localhost:8080/api/instances`
      );
      setInstances(response.data);
    } catch (error) {
      console.error("Error fetching instances:", error);
    }
  };

  // Fetch all instances when the component mounts
  useEffect(() => {
    fetchInstances();
  }, []);

  // Function to handle delete action
  const handleDelete = async (year, semester, courseId) => {
    try {
      await axios.delete(
        `http://localhost:8080/api/instances/${year}/${semester}/${courseId}`
      );
      // Refetch the instances after deletion
      fetchInstances();
    } catch (error) {
      console.error("Error deleting instance:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">List Course Instances</h1>

      <div className="mb-4 flex items-center space-x-4">
        <input
          type="text"
          placeholder="Year"
          className="border p-2 rounded"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <select
          className="border p-2 rounded"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
        >
          <option value="">Select semester</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <button
          onClick={fetchInstances}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          List Instances
        </button>
      </div>

      <table className="w-full table-auto">
        <thead>
          <tr className="bg-blue-200">
            <th className="px-4 py-2">Course Title</th>
            <th className="px-4 py-2">Year-Sem</th>
            <th className="px-4 py-2">Code</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {instances.map((instance) => (
            <tr key={instance.course.id} className="bg-blue-50">
              <td className="border px-4 py-2">{instance.course.title}</td>
              <td className="border px-4 py-2">
                {instance.year}-{instance.semester}
              </td>
              <td className="border px-4 py-2">{instance.course.courseCode}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() =>
                    alert(`Viewing instance: ${instance.course.id}`)
                  }
                  className="text-blue-500 hover:text-blue-700 mr-2"
                >
                  🔍
                </button>
                <button
                  onClick={() =>
                    handleDelete(
                      instance.year,
                      instance.semester,
                      instance.course.id
                    )
                  }
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

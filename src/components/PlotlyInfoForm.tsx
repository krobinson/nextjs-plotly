import { useStore } from "@/store";
import { useState } from "react";

export default function PlotlyInfoForm() {
  const addPlotlyInfo = useStore((state) => state.fetchPlotlyInfo);
  const [loading, setLoading] = useState(false);
  const [newPlotlyInfo, setNewPlotlyInfo] = useState("");

  const handleFetchPlotlyInfo = async () => {
    //if (newTodo.length === 0) return alert("Todo input must not be empty");
    try {
      setLoading(true);
      //const todo = { title: newTodo };
      await addPlotlyInfo();
      setNewPlotlyInfo("");
    } catch (error) {
      console.error("Error getting plotlyinfo:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center space-x-2 mb-4">
      <input
        type="text"
        value={newPlotlyInfo}
        onChange={(e) => setNewPlotlyInfo(e.target.value)}
        className="border rounded px-2 py-1 flex-1"
      />
      <button
        disabled={loading}
        className={`px-2 py-1 text-white rounded ${
          loading ? "bg-gray-400" : "bg-green-500"
        }`}
        onClick={handleFetchPlotlyInfo}
      >
        Add
      </button>
    </div>
  );
}

import { useStore } from "@/store";
import { useState } from "react";

interface PlotlyInfoProps {
  plotlyinfo: {  
    attribute: string;
    country: string;
    details: JSON;
  };
}

const PlotlyInfoItem: React.FC<PlotlyInfoProps> = ({ plotlyinfo: plotlyinfoobj }) => {
  const [loading, setLoading] = useState(false);
  const updateTodo = useStore((state) => state.fetchPlotlyInfo);
  //const deleteTodo = useStore((state) => state.deleteTodo);

  //const handleToggleComplete = () => {
  //  setLoading(true);
  //  const updatedTodo = { ...plotlyinfoobj, completed: !plotlyinfoobj.completed };
  //  updateTodo(updatedTodo);
  //  setLoading(false);
  //};

  //const handleDelete = () => {
  //  setLoading(true);
  //  deleteTodo(plotlyinfoobj.id);
  //  setLoading(false);
  //};

  //return (
  //  <div className="flex items-center space-x-2 mb-2">
  //    <span
  //      className={`text-gray-700 flex-1 ${
  //        plotlyinfoobj.completed ? "line-through" : ""
  //      }`}
  //      onClick={handleToggleComplete}
  //    >
  //      {plotlyinfoobj.title}
  //    </span>
  //    <button
  //      disabled={loading}
  //      className={`px-2 py-1 text-white rounded ${
  //        loading ? "bg-gray-400" : "bg-red-500"
  //      }`}
  //      onClick={handleDelete}
  //    >
  //      Delete
  //    </button>
  //  </div>
  //);

  return (
    <div className="flex items-center space-x-2 mb-2">
      <span
        className={`text-gray-700 flex-1 line-through`}> 
        Kens Title
      </span>
      <button
        disabled={loading}
        className={`px-2 py-1 text-white rounded bg-gray-400`}>
        Delete
      </button>
    </div>
  );
};

export default PlotlyInfoItem;

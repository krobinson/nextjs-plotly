"use client";

import PlotlyInfoForm from "@/components/PlotlyInfoForm";
import PlotlyInfoItem from "@/components/PlotlyInfoItem";
import { useStore } from "@/store";
import { useEffect } from "react";

const Home: React.FC = () => {
  const plotlyinfos = useStore((state) => state.plotlyinfos);
  const fetchPlotlyInfos = useStore((state) => state.fetchPlotlyInfo);

  useEffect(() => {
    fetchPlotlyInfos();
  }, []);

  return (
    <div className="container mx-auto max-w-md p-4">
      <PlotlyInfoForm />
      <h1 className="text-2xl font-bold mb-4">PlotlyInfo List</h1>
      {plotlyinfos.length === 0 ? (
        <p className="text-center">No PlotlyInfos Found</p>
      ) : (
        plotlyinfos.map((plotlyinfo) => <PlotlyInfoItem key={plotlyinfo.attribute} plotlyinfo={plotlyinfo} />)
      )}
    </div>
  );
};

export default Home;
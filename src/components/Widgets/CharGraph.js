import React, { useState } from "react";
import { CChart } from "@coreui/react-chartjs";

import { month } from "../../resources/months";
import { chartGraphInitialData } from "../../resources/chartGraphInitialData";

export default function ChartGraph() {
  const [chartData1, setChartData1] = useState([]);
  const [chartData2, setChartData2] = useState([]);

  const AddNewData = () => {
    const rand = Math.floor(Math.random() * 70) + 10;
    const rand1 = Math.floor(Math.random() * 60) + 20;
    setChartData1([...chartData1, rand]);
    setChartData2([...chartData2, rand1]);
  };

  return (
    <>
      <CChart
        type="line"
        data={{
          labels: month,
          datasets: [
            { ...chartGraphInitialData[0], data: chartData1 },
            { ...chartGraphInitialData[1], data: chartData2 },
          ],
        }}
      />
      <button
        type="button"
        className="btn btn-sm btn-primary"
        onClick={() => AddNewData()}
      >
        Add
      </button>
    </>
  );
}

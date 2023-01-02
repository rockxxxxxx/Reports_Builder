import * as React from "react";
import { useState } from "react";

import { CChart } from "@coreui/react-chartjs";
import { month } from "../../resources/months";

export default function BarGraph() {
  const [barData, setBarData] = useState([]);

  const AddNewData = (event) => {
    const rand = Math.floor(Math.random() * 70) + 10;
    setBarData([...barData, rand]);
  };
  return (
    <>
      <CChart
        type="bar"
        data={{
          labels: month,
          datasets: [
            {
              label: "GitHub Commits",
              backgroundColor: "#f87979",
              data: barData,
            },
          ],
        }}
        labels="months"
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

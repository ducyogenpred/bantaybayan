// BarChart.tsx
import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const BarChart: React.FC = () => {
  const data = [
    {
      id: "Crimes",
      YouthMisconduct: 50,
      Theft: 40,
      Harrasment: 30,
      NoiseComplaint: 20,
      Vandalism: 10,
    },
  ];

  return (
    <div style={{ height: 80 }}>
      <ResponsiveBar
        data={data}
        keys={[
          "YouthMisconduct",
          "Theft",
          "Harrasment",
          "NoiseComplaint",
          "Vandalism",
        ]}
        indexBy="id"
        layout="horizontal"
        padding={0.3}
        colors={["#B5CF66", "#ea3737", "#F97316", "#3B82F6", "#8852f6"]}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        enableGridY={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        animate={true}
        theme={{
          labels: {
            text: {
              fontSize: 16, // Change font size here
              fontWeight: "bold", // Change font weight here
              fontFamily: "Inter", // Change font family here
              fill: "#000000", // Text color (optional override)
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;

import React, { useContext, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import "../App.css";
import { ToolBarContext } from "./contextApi/toolbarContext";
import BarGraph from "./Widgets/BarGraph";
import ChartGraph from "./Widgets/CharGraph";
import Table from "./Widgets/Table";
import Title from "./Widgets/Title";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const displyWidget = (widgetName) => {
  switch (widgetName) {
    case "Bar Graph":
      return <BarGraph />;
    case "Chart Graph":
      return <ChartGraph />;
    case "Table":
      return <Table />;
    case "Title":
      return <Title />;
    default:
      return;
  }
};

const DashBoard = () => {
  const [layouts, setLayouts] = useState(null);
  const { widgetArray, setWidgetArray } = useContext(ToolBarContext);
  console.log(widgetArray);
  const handleModify = (layouts, layout) => {
    const tempArray = widgetArray;
    setLayouts(layout);
    layouts?.map((position) => {
      tempArray[Number(position.i)].x = position.x;
      tempArray[Number(position.i)].y = position.y;
      tempArray[Number(position.i)].width = position.w;
      tempArray[Number(position.i)].height = position.h;

      return tempArray;
    });
    setWidgetArray(tempArray);
  };

  const handleDelete = (key) => {
    console.log(key);
    const tempArray = widgetArray.filter((widget) => widget.i !== key);
    console.log(tempArray);
    setWidgetArray(tempArray);
  };

  return (
    <div>
      <ResponsiveReactGridLayout
        onLayoutChange={handleModify}
        verticalCompact={true}
        layout={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        preventCollision={false}
        cols={{ lg: 8, md: 8, sm: 4, xs: 2, xxs: 2 }}
        autoSize={true}
        margin={{
          lg: [20, 20],
          md: [20, 20],
          sm: [20, 20],
          xs: [20, 20],
          xxs: [20, 20],
        }}
      >
        {widgetArray?.map((widget, index) => {
          return (
            <div
              className="reactGridItem"
              key={index}
              data-grid={{
                x: widget?.x,
                y: widget?.y,
                w: widget?.w,
                h: widget?.h,
                i: widget.i,
                minW: 2,
                maxW: Infinity,
                minH: 2,
                maxH: Infinity,
                isDraggable: true,
                isResizable: widget.i === "Title" ? true : false,
              }}
            >
              <button
                className="deleteButton"
                onClick={() => handleDelete(widget.i)}
              >
                x
              </button>
              <div>{displyWidget(widget.i.replace(/[0-9]/g, ""))}</div>
            </div>
          );
        })}
      </ResponsiveReactGridLayout>
    </div>
  );
};

export default DashBoard;

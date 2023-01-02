import { createContext, useState } from "react";

export const ToolBarContext = createContext({
  widgetArray: "",
  setWidgetArray: () => {},
});

export const ToolBarContextProvider = ({ children }) => {
  const [widgetArray, setWidgetArray] = useState([]);

  const value = {
    widgetArray,
    setWidgetArray,
  };
  return (
    <ToolBarContext.Provider value={value}>{children}</ToolBarContext.Provider>
  );
};

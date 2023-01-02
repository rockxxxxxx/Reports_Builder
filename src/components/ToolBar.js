import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { ListItemButton } from "@mui/material";
import { Paper } from "@mui/material";
import { ToolBarName } from "../resources/ToolBarName";
import { ToolBarContext } from "./contextApi/toolbarContext";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Button from "@mui/material/Button";

export default function ToolBar() {
  const { setWidgetArray, widgetArray } = React.useContext(ToolBarContext);
  const handleAdd = (name) => {
    setWidgetArray([
      ...widgetArray,
      {
        i: name + (Math.floor(Math.random() * 99) + 1),
        x: (widgetArray.length + 1) % 2 === 0 ? 2 : 0,
        y: (widgetArray.length + 1) % 2 === 0 ? 2 : 0,
        w: name === "Title" ? 4 : 2,
        h: name === "Title" ? 0.2 : 2,
      },
    ]);
  };
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };
  return (
    <Card style={{ height: "92vh", marginRight: "-24px", marginTop: "-24px" }}>
      <CardContent>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <Button variant="contained" size="medium">
            Components
          </Button>
          <Button variant="contained" size="medium" disabled>
            Charts
          </Button>
        </ToggleButtonGroup>
        {ToolBarName.map((name) => {
          return (
            <ListItemButton
              component="a"
              href="#simple-list"
              onClick={() => handleAdd(name)}
            >
              <Paper
                variant="outlined"
                style={{ padding: "10px", width: "100%" }}
              >
                {name}
                <br />
              </Paper>
            </ListItemButton>
          );
        })}
      </CardContent>
    </Card>
  );
}

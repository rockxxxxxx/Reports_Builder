import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import { ChevronLeft, MoreHoriz, RotateRight } from "@mui/icons-material";
import Divider from "@mui/material/Divider";

export default function NavBar() {
  return (
    <Toolbar>
      <ChevronLeft />

      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        2022 Inventory Dashboard
      </Typography>
      <Stack direction="row" spacing={1}>
        <Button variant="contained" disabled>
          <RotateLeftIcon />
        </Button>
        <Button variant="contained" disabled>
          <RotateRight />
        </Button>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Button variant="contained" disabled>
          Discard Changes
        </Button>
        <Button variant="contained">Save</Button>
        <Button variant="contained" disabled>
          <MoreHoriz />
        </Button>
      </Stack>
    </Toolbar>
  );
}

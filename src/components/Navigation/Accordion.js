import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { accordianData } from "../../resources/accordionData";
import Divider from "@mui/material/Divider";

export default function Accordions() {
  return (
    <div>
      {accordianData.map((accordion) => {
        return (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{accordion.header}</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <ul>
                <li>{accordion.item}</li>
              </ul>

              <Divider />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}

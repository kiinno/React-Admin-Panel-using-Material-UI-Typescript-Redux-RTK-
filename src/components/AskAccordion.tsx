import React from "react";
import {
  Stack,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMoreOutlined";
import { tokens } from "../theme";
import { useSelector } from "react-redux";

type AskAccordionType = {
  setExpanded: React.Dispatch<React.SetStateAction<string | number | null>>;
  expanded: string | number | null;
  hint?: string;
  question: string;
  answer: string;
  askId?: string | number | undefined;
  showID?: boolean;
};

const AskAccordion: React.FC<AskAccordionType> = ({
  expanded,
  setExpanded,
  hint,
  question,
  answer,
  askId,
  showID = true,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const system = useSelector((state: any) => state.System);
  const handleExpanded =
    (accordionId: string | number) =>
    (event: React.SyntheticEvent<Element, Event>, expanded: boolean) => {
      setExpanded(expanded === true ? accordionId : null);
    };
  const accordionID = React.useMemo(
    () => askId ?? Math.trunc(Math.random() * 1e7),
    [askId]
  );

  return (
    <Accordion
      expanded={expanded === accordionID}
      onChange={handleExpanded(accordionID)}
      disableGutters
      sx={{
        backgroundColor: colors[system.themeColor as "blueAccent"][900],
        "& .MuiStack-root": { flex: 1, pr: 2 },
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignContent={"space-between"}
        >
          <Typography variant="subtitle1">{question}</Typography>
          {hint && <Typography variant="subtitle2">{hint}</Typography>}
          {showID && <Typography variant="body2">ask#{accordionID}</Typography>}
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AskAccordion;

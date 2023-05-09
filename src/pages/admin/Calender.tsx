import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import {
  Box,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Header from "../../components/Header";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { useSelector } from "react-redux";

const Calender = () => {
  const theme = useTheme();
  const system = useSelector((state: any) => state.System);
  const colors = tokens(theme.palette.mode);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentEvents, setCurrentEvents] = useState([
    { title: "event 1", start: "2023-05-01", end: "2023-05-05" },
    { title: "event 2", date: "2019-04-02" },
  ]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleDateClick = (selected: any) => {
    const title = prompt("Please enter a new title for your event.");
    const calenderApi = selected.view.calendar;
    calenderApi.unselect();

    if (title) {
      calenderApi.addEvent({
        id: `${selected.dateStr}-`,
        start: selected.startStr,
        end: selected.endStr,
        title,
        allDay: selected.allDay,
      });
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleEventClick = (selected: any) => {
    const confirm = window.confirm(
      `are you sure you want to delete this item '${selected.event.title}' ?`
    );
    if (confirm) {
      selected.event.remove();
    }
  };
  return (
    <Box>
      <Header title="Calender" subtitle="Easy to handle your events." />
      <Stack direction={"row"} justifyContent={"space-between"} spacing={2}>
        <Box
          flex={"1 1 20%"}
          bgcolor={colors.primary[400]}
          p={2}
          borderRadius={"4px"}
        >
          <Typography gutterBottom variant="h5" fontWeight={"bold"}>
            {currentEvents.length > 0 ? currentEvents.length + 1 : "No"} Event
            Available
          </Typography>
          <List disablePadding>
            {currentEvents.map((event: any, idx: number) => {
              return (
                <ListItem
                  key={idx}
                  sx={{
                    backgroundColor:
                      colors[system.themeColor as "blueAccent"][800],
                    my: 1,
                  }}
                >
                  <ListItemText
                    primary={`${event.title.toUpperCase()}`}
                    secondary={`On ${event.date}`}
                  />
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Box
          flex={"1 1 100%"}
          bgcolor={colors.primary[400]}
          p={2}
          borderRadius={"4px"}
        >
          <FullCalendar
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              listPlugin,
              interactionPlugin,
            ]}
            initialView="dayGridMonth"
            initialDate={Date.now()}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            events={currentEvents}
            editable={true}
            selectable={true}
            navLinks={true}
            buttonText={{
              today: "Today",
              month: "Month",
              week: "Week",
              day: "Day",
              list: "List",
            }}
            dateClick={(arg) => console.log(arg)}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default Calender;

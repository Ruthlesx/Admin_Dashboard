import { useState } from 'react';
import FullCalendar from "@fullcalendar/react"
import  { formatDate, type DateSelectArg, type EventClickArg, type EventApi } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin  from "@fullcalendar/list"
import {Box, List, ListItem, ListItemText, Typography, useTheme} from "@mui/material"
import Header from "../../components/Header"
import { tokens } from "../../theme"


const Calendar:React.FC = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);

    const handleDateClick = (selected: DateSelectArg) => {
        const title = prompt("Please enter a new title for your event");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect()


        if (title) {
            calendarApi.addEvent({
                id: `${selected.startStr}-${Date.now()}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            })
        }

    }

    const handleEventClick = (selected: EventClickArg) => {
        if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}' ?`)
        )    {
                selected.event.remove();
    }
    };

  return (
    <Box m="20px">
        <Header title="CALENDAR" subtitle="Full Calendar Interative Page" />

        <Box display="flex" justifyContent="space-between">
            {/* CALENDAR SIDEBAR*/}
            <Box flex="1 1 20%" bgcolor={colors.primary[400]} p="15px" borderRadius="4px">
                <Typography variant='h5'>Events</Typography>
                <List>
                    {currentEvents.map((event) => (
                        <ListItem key={event.id} sx={{
                            backgroundColor: colors.greenAccent[500],
                            margin: "10px 0",
                            borderRadius: "2px",
                        }}>
                            <ListItemText primary={event.title} secondary={ 
                                event.start ? (
                                <Typography>
                                    {formatDate(event.start, {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric"

                                    })}
                                </Typography>
                                ) : null 
                            } />

                            
                        </ListItem>
                    ))}
                </List>
            </Box>


            {/**Full Calendar Main */}

            <Box flex="1 1 100%" ml="15px">
                <FullCalendar height="75vh"
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                    headerToolbar={{left: 'prev,next,today', center: 'title', right: 'dayGridMonth, timeGridWeek, timeGridDay,listMonth'}}
                    initialView="dayGridMonth"
                    selectable={true}
                    editable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    select={handleDateClick}
                    eventClick={handleEventClick}
                    eventsSet={(events: EventApi[]) => setCurrentEvents(events)}
                    initialEvents={[
                        {
                            id: 'initial-event',
                            title: 'Team Meeting',
                            start: new Date().toISOString().split('T')[0],
                            allDay: true
                        }
                    ]}
                />
            </Box>






        </Box>

        </Box>
  )
}

export default Calendar
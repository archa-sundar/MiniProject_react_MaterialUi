
import React from 'react'

import {
  Box,
  Typography,
  Button,
 Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,

} from '@mui/material'

import { Link } from 'react-router-dom'
import { MdEvent } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { MdEventNote } from "react-icons/md";



const Dashboard = () => {

  const events = [
    {
      id: 1,
      name: "College Arts Fest",
      date: "15 Dec 2026",
      time: "10:00 AM",
      status: "Upcoming"
    },
    {
      id: 2,
      name: "Music Concert",
      date: "20 Dec 2026",
      time: "06:00 PM",
      status: "Upcoming"
    },
    {
      id: 3,
      name: "Tech Conference",
      date: "10 Nov 2026",
      time: "09:00 AM",
      status: "Completed"
    },
    {
      id: 4,
      name: "Sports Day",
      date: "05 Nov 2026",
      time: "08:00 AM",
      status: "Cancelled"
    }
  ]

const cards = [
    {
      title: "Total Events",
      count: 24,
      icon: <MdEvent />,
      color: "white",
      iconColor: "purple"
    },
    {
      title: "Upcoming Events",
      count: 10,
      icon: <SlCalender />,
      color: "white",
      iconColor: "green"
    },
    {
      title: "Completed Events",
      count: 11,
      icon: <FaRegCheckCircle />,
      color: "white",
      iconColor: "blue"
    },
    {
      title: "Cancelled Events",
      count: 3,
      icon: <MdCancel />,
      color: "white",
      iconColor: "red"
    }
  ]



  return (

    <Box sx={{
      display: "flex",
      minHeight: "100vh",
      backgroundColor: "white"
    }}>

      

      <Box sx={{
        width: "240px",
        backgroundColor: "purple",
        color: "white",
        p: 3
      }}>

        <Typography variant="h5" fontWeight="bold" mb={5}>
           Event Manager
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>

          <Button
            component={Link}
            to="/"
          
            sx={{
              color: "white",
              justifyContent: "flex-start",
              backgroundColor: "purple",
              p: 1.5
            }}
          >
            Dashboard
          </Button>

          <Button
            component={Link}
            to="/add-event"
           
            sx={{ color: "white", justifyContent: "flex-start", p:2}}
          >
            Add Event
          </Button>

          <Button
            component={Link}
            to="/view-events"
           
            sx={{ color: "white", justifyContent: "flex-start", p: 2 }}
          >
            View Events
          </Button>

          <Button
            component={Link}
            to="/event-details"
           
            sx={{ color: "white", justifyContent: "flex-start", p:2 }}
          >
            Event Details
          </Button>

        </Box>

        <Box sx={{ mt: 10, textAlign: "center" }}>
          
          <Typography variant="h6" sx={{ mt: 2, color: "white" }}>
            Plan . Organize . Celebrate
          </Typography>
        </Box>

      </Box>

      <Box sx={{  p: 3 }}>


        <Box sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3
        }}>

          <Typography variant="h6" fontWeight="bold">
            Event Management Dashboard 
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <RiAdminFill />
            <Typography fontWeight="bold">Admin</Typography>
          </Box>

        </Box>




        <Card sx={{
          p: 4,
          mb: 3,
          borderRadius: 3,
          background: "linear-gradient(100deg, #eee7ff, #d9c8ff)"
          
        }}>

          <Typography variant="h4" fontWeight="bold" color="blue">
            Welcome to Event Management System! <MdEventNote />
          </Typography>

          <Typography sx={{ mt: 1, color: "blue" }}>
            Manage your events easily and efficiently.
          </Typography>

          <Button
            component={Link}
            to="/add-event"
            variant="h6"
            
            sx={{
              mt: 2,
              backgroundColor: "purple",
              borderRadius: 3,
              color:'white'
            }}
          >
            Add New Event
          </Button>

        </Card>


      

        <Box sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: 2,
          mb: 3
        }}>

          {cards.map((card) => (

            <Card  sx={{
              p:3,
              borderRadius: 3,
              display: "flex",
              alignItems: "center",
              gap: 2,
              backgroundColor: card.color
            }}>

              <Box sx={{
                color: card.iconColor,
                display: "flex"
              }}>
                {card.icon}
              </Box>

              <Box>
                <Typography variant="h6" sx={{fontWeight:"bold", color:"blue"}}>
                  {card.count}
                </Typography>

                <Typography variant="h6" sx={{color:"purple"}} >
                  {card.title}
                </Typography>
              </Box>

            </Card>

          ))}

        </Box>


        <Box sx={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: 2
        }}>


          <Card sx={{
            p: 3,
            borderRadius: 3,
            border: "1px solid white"
          }}>

            <Box sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 2
            }}>

              <Typography variant="h6" fontWeight="bold">
                Recent Events
              </Typography>

              <Button component={Link} to="/view-events">
                View All 
              </Button>

            </Box>

            <TableContainer >

              <Table>

                <TableHead>
                  <TableRow sx={{ backgroundColor: "white" }}>
                    <TableCell><b>#</b></TableCell>
                    <TableCell><b>Event Name</b></TableCell>
                    <TableCell><b>Date & Time</b></TableCell>
                    <TableCell><b>Status</b></TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>

                  {events.map((event) => (

                    <TableRow >

                      <TableCell>{event.id}</TableCell>

                      <TableCell>{event.name}</TableCell>

                      <TableCell>
                        {event.date} <br />
                        {event.time}
                      </TableCell>

                      <TableCell>

                        <Box sx={{
                          
                          px: 2,
                          py: 1,
                          borderRadius: 3,
                          fontSize: 12,
                          fontWeight: "bold",
                          
                          backgroundColor:
                            event.status === "Upcoming" ? "green" :
                            event.status === "Completed" ? "white" :
                            "grey",
                          color:
                            event.status === "Upcoming" ? "white" :
                            event.status === "Completed" ? "blue" :
                            "red"
                        }}>
                          {event.status}
                        </Box>

                      </TableCell>

                    </TableRow>

                  ))}

                </TableBody>

              </Table>

            </TableContainer>

          </Card>


          {/* QUICK ACTIONS */}

          <Card sx={{
            p: 3,
            borderRadius: 3,
            boxShadow: "none",
            border: "1px solid #e5def5"
          }}>

            <Typography variant="h6" fontWeight="bold" mb={3}>
              Quick Actions
            </Typography>

            <Button
              component={Link}
              to="/add-event"
              fullWidth
              variant="contained"
             
              sx={{
                backgroundColor: "#642bc4",
                py: 1.5,
                mb: 2
              }}
            >
              Add New Event
            </Button>

            <Button
              component={Link}
              to="/view-events"
              fullWidth
              variant="outlined"
            
              sx={{ py: 1.5, color: "#642bc4" }}
            >
              View All Events
            </Button>

            <Typography
              variant="h6"
              textAlign="center"
              sx={{ mt: 5, color: "#7040cc", fontStyle: "italic" }}
            >
              Make your events memorable!
            </Typography>

          </Card>

        </Box>

      </Box>

    </Box>

  )
}

export default Dashboard
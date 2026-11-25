
import React from 'react'
import {
  Box,
  Typography,
  Button,
  Paper,
  
  Divider
} from '@mui/material'

import { FaArrowLeft } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { IoIosTime } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";



const EventDetails = () => {
  return (
    <Box
      sx={{
        
        backgroundColor: 'white',
        p:3
      }}
    >
      <Box sx={{ maxWidth: '1000px', mx: 'auto' }}>
        <Button
       startIcon={<FaArrowLeft/>}>
          Back to Events
        </Button>

    
        <Typography
          variant="h4"
          sx={{ fontWeight: 'bold', color: 'purple', mb: 1 }}
        >
          Event Details
        </Typography>

        <Typography  sx={{color:'purple',mb:2}}>
          View complete information about your event.
        </Typography>

      
        <Paper
          sx={{
            borderRadius: 4,
            boxShadow: '2'
          }}
        >
          <Box
            sx={{
              background: 'Purple',
              color: 'white',
              p: 5
            }}
          >
            <Typography variant="h6">
              EVENT INFORMATION
            </Typography>

            <Typography variant="h3"  sx={{fontWeight:"bold",mt: 1}}  >
              College Arts Fest
            </Typography>

            <Typography sx={{ mt: 1, opacity: 0.9 }}>
              Celebrate creativity, culture and talent.
            </Typography>

            <Button
  sx={{
    mt: 2,
    backgroundColor: 'white',
    color: 'green',
    fontWeight: 'bold'
  }}
>
 UPCOMING
</Button>
          </Box>

         
          <Box sx={{ p:4 }}>

            <Typography variant="h6" SX={{fontWeight:"bold", mb:'3'}} >
              Event Overview
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns:  '1fr 1fr',
                gap: 3
              }}
            >

              <Paper sx={{ p: 3, backgroundColor: 'white', borderRadius: 3 }}>
                 <SlCalender />
                <Typography  sx={{color:"black" ,mt:1}}>
                  Event Date
                </Typography>
                <Typography fontWeight="bold">
                  15 December 2026
                </Typography>
              </Paper>

              <Paper sx={{ p: 3, backgroundColor: 'white', borderRadius: 3 }}>
                <IoIosTime  sx={{ color: '#6366f1', fontSize: 32 }} />
                <Typography  sx={{color:"black" ,mt:1}}>
                  Event Time
                </Typography>
                <Typography fontWeight="bold">
                  10:00 AM
                </Typography>
              </Paper>

              <Paper sx={{ p: 3, backgroundColor: 'white', borderRadius: 3 }}>
               <IoLocation />
                <Typography sx={{color:"black", mt:1}}>
                  Venue
                </Typography>
                <Typography fontWeight="bold">
                  College Auditorium
                </Typography>
              </Paper>

              <Paper sx={{ p: 3, backgroundColor: 'white', borderRadius: 3 }}>
               <BiSolidCategory />
                <Typography sx={{color:"black" ,mt:1}} >
                  Category
                </Typography>
                <Typography fontWeight="bold">
                  College
                </Typography>
              </Paper>

            </Box>

            <Box>
<Typography variant="h6" sx={{fontWeight:"bold"}} >
              About This Event
            </Typography>

            </Box>

            
            
            <Typography
              color="black"
              sx={{ lineHeight: 2, p: 3, borderRadius: 2 }}
            >
              College Arts Fest is an exciting cultural celebration
              where students can showcase their talents through music,
              dance, art, drama and other creative activities.
              Join us for a memorable day filled with entertainment
              and creativity.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
               
                gap: 2,
                mt: 4
              }}
            >
              <Button
                variant="h6"
                 sx={{color:"white",backgroundColor:"purple"}}
                
                startIcon={<MdDelete />}
              >
                Delete Event
              </Button>

              <Button
  variant="contained"
  startIcon={<MdEdit />}
  sx={{
    backgroundColor: 'purple',
    
  }}
>
  Edit Event
</Button>

                   </Box>
        </Box>
      </Paper>
    </Box>
    </Box>
  )
}

export default EventDetails






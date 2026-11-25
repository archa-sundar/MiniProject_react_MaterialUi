



import React from 'react'
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem
} from '@mui/material'
import { FaArrowRight } from "react-icons/fa";

const AddEvent = () => {
  
      
return (
  <Box
    sx={{
      background: 'purple',
      p: 3
    }}
  >
    
    
       

        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'white',
            mb: 1
          }}
        >
          Create Event
        </Typography>

        <Typography
          sx={{
            color: 'white',
            textAlign: 'center',
            mb: 4
          }}
        >
          Add all the necessary information about your event.
        </Typography>

       

        <Box
          sx={{
            backgroundColor: 'white',
            p: 4,
            borderRadius: 4,
            boxShadow: 4
          }}
        >

        

          <Typography
            sx={{
              color: 'blue',
              fontWeight: 'bold',
              mb: 1
            }}
          >
            Event Name
          </Typography>

          <TextField
            fullWidth
            label="Event Name"
            placeholder="Enter event name"
            sx={{ mb: 3 }}
          />

         

          <Typography
            sx={{
              color: 'blue',
              fontWeight: 'bold',
              mb: 1
            }}
          >
            Category
          </Typography>

          <TextField
            fullWidth
            select
            label="Category"
            defaultValue=""
            sx={{ mb: 3 }}
          >
            <MenuItem value="College">College</MenuItem>
            <MenuItem value="Music">Music</MenuItem>
            <MenuItem value="Sports">Sports</MenuItem>
            <MenuItem value="Technology">Technology</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </TextField>

    

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 3,
              mb: 3
            }}
          >

            <Box>
              <Typography
                sx={{
                  color: 'blue',
                  fontWeight: 'bold',
                  mb: 1
                }}
              >
                Date
              </Typography>

              <TextField
                fullWidth
                type="date"
                
              />
            </Box>

            <Box>
              <Typography
                sx={{
                  color: 'blue',
                  fontWeight: 'bold',
                  mb: 1
                }}
              >
                Time
              </Typography>

              <TextField
                fullWidth
                type="time"
               
              />
            </Box>

          </Box>

       

          <Typography
            sx={{
              color: 'blue',
              fontWeight: 'bold',
              mb: 1
            }}
          >
            Location Details
          </Typography>

          <TextField
            fullWidth
            label="Venue / Location"
            placeholder="Enter venue or address"
            sx={{ mb: 3 }}
          />

       

          <Typography
            sx={{
              color: 'blue',
              fontWeight: 'bold',
              mb: 1
            }}
          >
            Additional Information
          </Typography>

          <TextField
            fullWidth
            multiline
            rows='4'
            label="Description"
            placeholder="Write something about the event..."
          />

        

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
              mt: 4
            }}
          >

            <Button
              variant="outlined"
              sx={{
                color: 'blue',
                borderColor: 'blue',
                px: 4,
                py: 1
                }
              }
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              sx={{
                backgroundColor: 'blue',
                px: 4,
                py: 1,
                
              }}
            >
              Create Event
            </Button>

          </Box>

        </Box>
      </Box>
 
    
  )
}

export default AddEvent

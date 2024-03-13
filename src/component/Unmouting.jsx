import { Box, List, ListItem, Typography } from '@mui/material'
import React from 'react'

const Unmouting = () => {
  return (
  
  <>
  <Box>
  <Typography variant='h4' sx={{ textAlign: "center", mt: "30px" }}>
          Brief About Updating In React
        </Typography> 
    <Box sx={{ width: "80%", margin: "auto" }}>
    <List>
  <ListItem>
    <Typography>
      componentWillUnmount(): This method is called immediately before a component is unmounted and destroyed. It's often used to perform cleanup tasks such as removing event listeners or canceling asynchronous tasks to prevent memory leaks.
    </Typography>
  </ListItem>
</List>

    </Box>
  </Box>
  </>
  )
}

export default Unmouting

import { Box, List, ListItem, Typography } from '@mui/material'
import React from 'react'

const Updating = () => {
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
      render(): The render method is called whenever the component needs to re-render due to changes in props or state. It returns JSX representing the updated component UI.
    </Typography>
  </ListItem>
  <ListItem>
    <Typography>
      componentDidUpdate(prevProps, prevState): This method is called after the component updates and after the render method has been called. It's often used to perform actions such as updating the DOM or fetching new data based on changes in props or state.
    </Typography>
  </ListItem>
  <ListItem>
    <Typography>
      shouldComponentUpdate(nextProps, nextState): This method is called before the component updates. It allows the component to control whether or not the update should proceed by returning true or false based on comparisons between the current props and state and the next props and state.
    </Typography>
  </ListItem>
</List>

    </Box>
   </Box>
   </>
  )
}

export default Updating
import { Box, List, ListItem, Typography } from '@mui/material';
import React from 'react';

const Mounting = () => {
  return (
    <>
      <Box>
        <Typography variant='h4' sx={{ textAlign: "center", mt: "30px" }}>
          Brief About Mounting In React
        </Typography>
        <Box sx={{ width: "80%", margin: "auto" }}>
        
        <List>
  <ListItem>
    <Typography>
      constructor(): The constructor is called before the component is mounted. It is used to initialize state and bind event handlers.
    </Typography>
  </ListItem>
  <ListItem>
    <Typography>
      render(): The render method is required and must return JSX representing the component's UI. It's responsible for rendering the component's output.
    </Typography>
  </ListItem>
  <ListItem>
    <Typography>
      componentDidMount(): This method is called after the component is mounted to the DOM. It's often used to perform actions such as fetching data from an API or setting up event listeners.
    </Typography>
  </ListItem>
</List>

        </Box>
      </Box>
    </>
  );
};

export default Mounting;

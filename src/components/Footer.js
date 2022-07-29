import React from 'react';
import { Box, Typography, Link, InputBase, IconButton, Badge, makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  footerContainer: {
    display: 'flex',
    alignItems: 'center',
    miHeight: '5vh',
    padding: '20px',
    justifyContent: 'center',
    backgroundColor: '#fdfdff',
    flexDirection: 'column',
  },
  footerText: {
    paddingBottom: '1px',
  },
  footerDate: {
    opacity: '0.4',
  }
}))

const Footer = () => {
  const date = new Date().getFullYear();
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.footerContainer}>
      {/* <Typography className={classes.footerText}>
        Provided by{' '}
        <Link href="https://appseed.us" target="_blank" underline="none">
          AppSeed
        </Link>
      </Typography> */}
        <Typography className={classes.footerText}>
        © 2022 Clarience Technologies. All Rights Reserved. Disclousures
      </Typography>
      
      <Typography className={classes.footerDate}> All Rights Reserved. Disclousures</Typography>
    </Box>
  );
};

export default Footer;
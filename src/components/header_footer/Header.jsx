import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import pcImage from '../../../images/pc.png'; // Import the image


const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
  color: {
    backgroundColor: '#734399',
  },
  whiteColor: {
    color: '#fff',
  }
};

function DenseAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.color}>
        <Toolbar variant="dense">
          <Typography className={classes.whiteColor}>
            <div class="row">
              <div class="col-md-9 mt-3">
                <h4 className="font_righteous footer_logo_venue"> Cyber Quiz</h4>
              </div>
              <div class="col-md-2 d-none d-lg-block">
                <img src={pcImage} alt="pcImage" width='60rem'></img>
              </div>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

DenseAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DenseAppBar);
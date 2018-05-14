import React from 'react';

import MainArea from '../../components/main-area';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

const styles = {
  root: {
    background: 'black'
  },
  input: {
    color: 'white'
  }
};
function ContentArea(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <TextField
            id="searchAll"
            placeholder="Search Asset Wizard"
            className={styles.root}
            InputProps={{
              className: styles.input
            }}
          />
        </Toolbar>
      </AppBar>
      <MainArea />
    </div>
  );
}
ContentArea.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContentArea);

import React from 'react';
import Paper from '@material-ui/core/Paper';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  facetPaper: {
    height: '80vh'
  }
});
class AllocationFacet extends React.Component {
  render() {
    const { classes, theme } = this.props;
    return <Paper className={classes.facetPaper}>This is Facet</Paper>;
  }
}

AllocationFacet.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};
export default withStyles(styles, { withTheme: true })(AllocationFacet);

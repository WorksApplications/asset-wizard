import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Store from '@material-ui/icons/Store';
import Collapse from '@material-ui/core/Collapse';

import { Link } from 'react-router-dom';
export const DRAWER_WIDTH = 240;

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: DRAWER_WIDTH
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  nested: {
    paddingLeft: theme.spacing.unit * 1
  }
});

class SideMenu extends React.Component {
  state = {
    assetMenuOpen: false,
    allocationMenuOpen: false
  };

  handleAssetManagementClick = () => {
    this.setState({ assetMenuOpen: !this.state.assetMenuOpen });
  };

  handleAllocationManagementClick = () => {
    this.setState({ allocationMenuOpen: !this.state.allocationMenuOpen });
  };

  handleMenuClick = () => {
    alert('hello');
  };

  render() {
    const { classes, theme } = this.props;
    return (
      <div>
        <Drawer
          variant="persistent"
          open={this.props.open}
          classes={{
            paper: classes.drawerPaper
          }}>
          <div className={classes.drawerHeader} />
          <Divider />
          <div>
            <ListItem
              className={classes.nested}
              button
              onClick={this.handleAssetManagementClick}>
              <ListItemIcon>
                <Store />
              </ListItemIcon>
              <ListItemText primary="Asset Management" />
              {this.state.assetMenuOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse
              in={this.state.assetMenuOpen}
              timeout="auto"
              unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <Store />
                  </ListItemIcon>
                  <Link to="/assets">
                    <ListItemText primary="Inventory Management" />
                  </Link>
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <Store />
                  </ListItemIcon>
                  <Link to="/categories">
                    <ListItemText primary="Category Management" />
                  </Link>
                </ListItem>
              </List>
            </Collapse>
          </div>
          <Divider />
          <div>
            <ListItem
              className={classes.nested}
              button
              onClick={this.handleAllocationManagementClick}>
              <ListItemIcon>
                <Store />
              </ListItemIcon>
              <ListItemText primary="Allocation Management" />
              {this.state.allocationMenuOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse
              in={this.state.allocationMenuOpen}
              timeout="auto"
              unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <Store />
                  </ListItemIcon>
                  <Link to="/allocations">
                    <ListItemText primary="Allocations" />
                  </Link>
                </ListItem>
              </List>
            </Collapse>
          </div>
        </Drawer>
      </div>
    );
  }
}

SideMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};
export default withStyles(styles, { withTheme: true })(SideMenu);

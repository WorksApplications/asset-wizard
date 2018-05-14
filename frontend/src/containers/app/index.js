import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { InputAdornment } from '@material-ui/core/InputAdornment';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import SideMenu, { DRAWER_WIDTH } from '../../components/side-menu';
import { HashRouter, Switch, Route } from 'react-router-dom';
import AssetList from '../../pages/asset-list';
import { AllocationList } from '../../pages/allocation-list';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  appFrame: {
    height: 960,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%'
  },
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: DRAWER_WIDTH
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: 'none'
  },
  content: {
    flexGrow: 1,
    height: '980px',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  'content-left': {
    marginLeft: -DRAWER_WIDTH
  },
  'content-right': {
    marginRight: -DRAWER_WIDTH
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  searchinput: {
    color: 'white',
    backgroundColor: 'white',
    padding: '0px 0px 0px 5px'
  },
  searchContainer: {
    width: '80%',
    minHeight: '35px'
  }
});

class App extends React.Component {
  state = {
    open: false
  };

  toggleDrawer = () => {
    var drawerState = this.state.open;
    this.setState({ open: !drawerState });
  };

  render() {
    console.log('This is APP');

    const { classes, theme } = this.props;
    const { open } = this.state;

    const drawer = <SideMenu open={open} />;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar
            className={classNames(classes.appBar, {
              [classes.appBarShift]: open
            })}>
            <Toolbar disableGutters={!open}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.toggleDrawer}>
                <MenuIcon />
              </IconButton>
              <div id="searchContainer" className={classes.searchContainer}>
                <TextField
                  placeholder="Search Asset Wizard"
                  fullWidth
                  margin={'dense'}
                  className={classes.searchinput}
                  startAdornment={
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  }
                />
              </div>
            </Toolbar>
          </AppBar>
          {drawer}
          <main
            className={classNames(
              classes.content,
              classes[`content-${'left'}`],
              {
                [classes.contentShift]: open
              }
            )}>
            <div className={classes.drawerHeader} />
            <Switch>
              <Route exact path="/assets" component={AssetList} />
              <Route exact path="/allocations" component={AllocationList} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};
export default withStyles(styles, { withTheme: true })(App);

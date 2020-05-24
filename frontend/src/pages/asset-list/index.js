import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core//styles';
import InsertAssetForm from '../asset-list/insert-asset-form';
import AssetCard from '../../components/AssetCard';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Snackbar from '@material-ui/core/Snackbar';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    position: 'fixed',
    bottom: theme.spacing.unit * 3,
    right: theme.spacing.unit * 3,
    top: 'auto'
  },
  pageContainer: {
    height: '100%'
  },
  modalContentContainer: {
    backgroundColor: theme.palette.background.default
  },
  dialogFormContainer: {
    minWidth: '500px'
  },
  noAssetHeading: {
    position: 'relative',
    top: '25%',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#757575'
  }
});
class AssetList extends React.Component {
  constructor() {
    super();
    this.state = {
      assets: [],
      dialogOpen: false,
      formData: {},
      createSucessOpen: false
    };
  }
  showSuccessMsg = () => {
    this.setState({ createSucessOpen: true });
  };

  handleCloseAssetSucessMsg = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ createSucessOpen: false });
  };

  handleClickOpen = () => {
    this.setState({ dialogOpen: true });
  };
  handleClose = () => {
    this.setState({ dialogOpen: false });
  };

  renderAssetList = () => {
    fetch('/assets/')
      .then(results => {
        return results.json();
      })
      .then(data => {
        const { classes } = this.props;
        let assets = (
          <h1 className={classes.noAssetHeading}>
            There are no assets registered.
          </h1>
        );
        if (data.length != 0) {
          assets = data.map((asset, index) => {
            return (
              <AssetCard
                key={index}
                name={asset.name}
                brand={asset.brand}
                code={asset.code}
              />
            );
          });
        }
        this.setState({ assets: assets });
      });
  };

  componentDidMount() {
    this.renderAssetList();
  }

  createAsset = () => {
    console.log(this.state.formData);
    fetch('/assets/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.formData)
    }).then(result => {
      if (result.status === 200) {
        this.renderAssetList();
        this.showSuccessMsg();
        this.handleClose();
      }
    });
  };

  handleFormChange = assetDto => {
    this.setState({ formData: assetDto });
  };

  render() {
    let assets = this.state.assets;
    const { classes } = this.props;
    return (
      <div className={classes.pageContainer}>
        {this.state.assets}
        <Dialog
          open={this.state.dialogOpen}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title">
          <div className={classes.dialogFormContainer}>
            <DialogTitle id="form-dialog-title">Register New Asset</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Use the form to register new asset
              </DialogContentText>
              <InsertAssetForm onChange={this.handleFormChange} />
            </DialogContent>
            <DialogActions>
              <Button color="primary" onClick={this.createAsset}>
                Create Asset
              </Button>
              <Button color="secondary" onClick={this.handleClose}>
                Close
              </Button>
            </DialogActions>
          </div>
        </Dialog>
        <Button
          variant="fab"
          color="primary"
          aria-label="add"
          className={classes.button}
          color={'secondary'}
          onClick={this.handleClickOpen}>
          <AddIcon />
        </Button>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          open={this.state.createSucessOpen}
          autoHideDuration={3000}
          onClose={this.handleCloseAssetSucessMsg}
          SnackbarContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span id="message-id">Asset Registered</span>}
        />
      </div>
    );
  }
}
AssetList.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles, { withTheme: true })(AssetList);

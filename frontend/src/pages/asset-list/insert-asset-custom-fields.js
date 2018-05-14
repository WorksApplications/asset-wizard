import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AssetCustomField from './asset-custom-field';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    top: '0px',
    right: '8px',
    position: 'absolute'
  },
  customFieldContainer: {
    position: 'relative'
  },
  customFieldButton: {
    paddingBottom: '40px'
  }
});

class InsertAssetCustomFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customFieldData: [],
      maxKey: 0
    };
  }
  handleDelete = key => {
    const newDatas = this.state.customFieldData.filter(
      (s, sidx) => key !== sidx
    );
    this.setState({ customFieldData: newDatas });
    this.props.onChangingCustomField(newDatas);
  };
  handleCustomDataChange = (idx, newData) => {
    const newCustomFieldDatas = this.state.customFieldData.map((data, sidx) => {
      if (idx !== sidx) return data;
      return { ...data, ...newData };
    });
    this.setState({ customFieldData: newCustomFieldDatas });
    this.props.onChangingCustomField(newCustomFieldDatas);
  };

  createCustomField = () => {
    let newMakKey = this.state.maxKey + 1;
    this.setState({ maxKey: newMakKey });
    this.setState({
      customFieldData: this.state.customFieldData.concat([
        {
          fieldName: '',
          fieldValue: ''
        }
      ])
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.customFieldContainer}>
        <div className={classes.customFieldButton}>
          <Button className={classes.button} onClick={this.createCustomField}>
            Add Custom Field
          </Button>
        </div>
        <div id="customFields">
          {this.state.customFieldData.map((customData, idx) => (
            <AssetCustomField
              key={idx}
              uniqueId={idx}
              customFieldName={customData.fieldName}
              customFieldValue={customData.fieldValue}
              deleteHandler={this.handleDelete}
              changeHandler={this.handleCustomDataChange}
            />
          ))}
        </div>
      </div>
    );
  }
}

InsertAssetCustomFields.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(InsertAssetCustomFields);

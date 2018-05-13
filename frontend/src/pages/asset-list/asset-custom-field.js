import React from 'react';
import { FormControl, FormHelperText, FormControlLabel } from 'material-ui/Form';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    deleteContainer: {
        verticalAlign:'center'
    },
    deleteIcon:{
        paddingTop:'20px'
    }

  });

class AssetCustomField extends React.Component{
    constructor(props){
        super(props);
    }
    handleDelete = (uniqueId)=>{

        this.props.deleteHandler(uniqueId)
    }
    handleFieldNameChange = (event) => {
        var newObj = {
            fieldName: event.target.value,
            fieldValue:this.props.customFieldValue
        };
        this.props.changeHandler(this.props.uniqueId, newObj);
    }
    handleFieldValueChange = (event) => {
        var newObj = {
            fieldName: this.props.customFieldName,
            fieldValue:event.target.value
        };
        this.props.changeHandler(this.props.uniqueId, newObj);
    }
    render(){
        const { classes } = this.props;
        return (
            <FormControl style={{display:'flex'}}>
                <Grid container>
                    <Grid item xs>
                        <TextField label="Custom Field Name" value={this.props.customFieldName} onChange={this.handleFieldNameChange}/>
                    </Grid>
                    <Grid item xs>
                        <TextField label="Custom Field Value" value={this.props.customFieldValue} onChange={this.handleFieldValueChange}/>
                    </Grid>
                    <Grid item xs className={classes.deleteContainer}>
                        <Button color="secondary" className={classes.deleteIcon} onClick={() => this.handleDelete(this.props.uniqueId)}>X</Button>
                    </Grid>
                </Grid>
            </FormControl>
        )
    }
}
AssetCustomField.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default  withStyles(styles)(AssetCustomField);
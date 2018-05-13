import React from 'react';
import TextField from 'material-ui/TextField';

import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText, FormControlLabel } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Switch from 'material-ui/Switch';
import AssetDto from '../../models/AssetDto';

import InsertAssetCustomFields from './insert-asset-custom-fields';


class InsertAssetForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            currency: 'USD',
            name:'',
            code:'',
            brand:'',
            invoiceDate:'',
            price:'',
            invoiceNumber:'',
            isCustomFields:false,
            customFieldData:null
        };
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        var formData = {
            name:this.state.name,
            code:this.state.code,
            brand:this.state.brand,
            invoiceDate:this.state.invoiceDate,
            price:this.state.price,
            currency:this.state.currency,
            invoiceNumber:this.state.invoiceNumber
        };
        formData[event.target.name] = event.target.value;
        var assetDto = new AssetDto(null, formData.code, formData.name,formData.brand, formData.invoiceDate,
            formData.price, formData.currency, formData.invoiceNumber, this.state.customFieldData);
        this.props.onChange(assetDto);
    };

    handleCustomFieldSwitch = event => {
        this.setState({isCustomFields : !this.state.isCustomFields});
    }

    handleCustomFieldData = (data)=>{
        let customFieldData = data;
        this.setState({customFieldData : customFieldData});
        var formData = {
            name:this.state.name,
            code:this.state.code,
            brand:this.state.brand,
            invoiceDate:this.state.invoiceDate,
            price:this.state.price,
            currency:this.state.currency,
            invoiceNumber:this.state.invoiceNumber
        };
        var assetDto = new AssetDto(null, formData.code, formData.name,formData.brand, formData.invoiceDate,
            formData.price, formData.currency, formData.invoiceNumber, customFieldData);
        this.props.onChange(assetDto);
    }

    render(){
        const { classes } = this.props;
        return (
            <div>
                <form>
                    <FormControl style={{display:'flex'}}>
                        <TextField label="Asset Name" name="name" onChange={this.handleChange}/>
                    </FormControl>
                    <FormControl style={{display:'flex'}}>
                        <TextField label="Asset Code" name="code" onChange={this.handleChange}/>
                    </FormControl>
                    <FormControl style={{display:'flex'}}>
                        <TextField label="Brand" onChange={this.handleChange} name="brand"/>
                    </FormControl>
                    <FormControl style={{display:'flex'}}>
                        <TextField label="Invoice Date" type="date" name="invoiceDate" InputLabelProps={{
                            shrink: true,
                            }} onChange={this.handleChange}/>
                    </FormControl>
                    <FormControl style={{display:'flex'}}>
                        <TextField label="Price" type="number" name="price" onChange={this.handleChange}/>
                    </FormControl>
                    <FormControl style={{display:'flex'}}>
                        <Select
                            defaultValue = {'USD'}
                            value={this.state.currency}
                            onChange={this.handleChange}
                            inputProps={{
                            name: 'currency',
                            id: 'currency-select',
                            }}
                        >
                            <MenuItem value={'USD'}>USD</MenuItem>
                            <MenuItem value={'SGD'}>SGD</MenuItem>
                            <MenuItem value={'JPY'}>JPY</MenuItem>
                        </Select>
                        <FormHelperText>Select Currency</FormHelperText>
                    </FormControl>
                    <FormControl style={{display:'flex'}}>
                        <TextField label="Invoice Number" name="invoiceNumber" onChange={this.handleChange}/>
                    </FormControl>
                    <FormControlLabel
                        control={
                        <Switch
                            checked={this.state.isCustomFields}
                            onChange={this.handleCustomFieldSwitch}
                            value="false"
                        />
                        }
                        label="Show Custom Fields"
                    />
                    { this.state.isCustomFields && <InsertAssetCustomFields onChangingCustomField={this.handleCustomFieldData}/> }

                </form>
            </div>
        )
    }

}
export default InsertAssetForm;
import React from 'react';
import Grid from 'material-ui/Grid';

import AllocationFacet from './allocation-facet'

export class AllocationList extends React.Component {
    render(){
        return(
            <Grid container>
                <Grid item xs={2}>
                    <AllocationFacet />
                </Grid>
                <Grid item xs={10}>
                    <span>This is Allocation Part</span>
                </Grid>
            </Grid>
        );
    }
}
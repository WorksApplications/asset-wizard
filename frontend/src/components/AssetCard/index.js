import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
    minWidth: 345,
    display: 'inline-block'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
};
class AssetCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://lerablog.org/wp-content/uploads/2013/04/fixed-assets.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {this.props.name.toUpperCase()}
          </Typography>
          <Typography
            gutterBottom
            variant="subheading"
            component="span"
            align="center">
            AssetCode: #{this.props.code}
          </Typography>
          <Typography
            gutterBottom
            variant="subheading"
            component="span"
            align="center">
            Asset Brand : {this.props.brand}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
AssetCard.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(AssetCard);

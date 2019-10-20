import React, { Component } from 'react';
import {
  withStyles,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
  Grid,
  TextField,
  FormControl,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';

import ACTIONS from '../redux/action';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});

class ToDO extends Component {
  state = {};

  generate = () => {
    const { items } = this.props;
    return items.map(item => (
      <ListItem key={item.id}>
        <ListItemText primary={item.description} />
        <ListItemSecondaryAction>
          <IconButton
            aria-label="Delete"
            onClick={this.handleDelete}
            value={item.id}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ));
  };

  handleSubmit = event => {
    const { item } = this.state;
    const { createItem } = this.props;
    // console.log(this.state.item);
    this.setState({ item: '' });
    if (item !== '') {
      // add the item to the store
      createItem(item);
    }
    event.preventDefault();
  };

  handleDelete = event => {
    const { deleteItem } = this.props;

    // delete the item from the store
    deleteItem(event.target.value);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { item } = this.state;
    return (
      <div>
        <div>
          <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
            <FormControl>
              <TextField
                label="Press Enter After Writing "
                id="margin-dense"
                value={item}
                className={classes.textField}
                margin="dense"
                name="item"
                onChange={this.handleChange}
              />
            </FormControl>
            {/* <FormControl>
              <Button>Add</Button>
            </FormControl> */}
          </form>
        </div>
        <div>
          <Grid item container justify="space-evenly" alignItems="center">
            <div className={classes.demo}>
              <List dense={false}>{this.generate()}</List>
            </div>
          </Grid>
        </div>
      </div>
    );
  }
}

ToDO.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  classes: '',
  deleteItem: PropTypes.func,
  createItem: '',
};

ToDO.defaultProps = {
  items: [],
  classes: '',
  deleteItem: PropTypes.func,
  createItem: '',
};

const mapStateToProps = state => ({
  items: state.items,
});

const mapDispatchToProps = dispatch => ({
  createItem: item => dispatch(ACTIONS.createItem(item)),
  deleteItem: id => dispatch(ACTIONS.deleteItem(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(ToDO));

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {
  render() {
    if (!this.props.title) {
      return null;
    }
    return (
      <div data-test='listItemComponent'>
        <h2 data-test="componentTitle">{this.props.title}</h2>
        <p data-test="componentDesc">{this.props.desc}</p>
      </div>
    );
  }
}

ListItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string
}

export default ListItem;
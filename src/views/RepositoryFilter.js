import React from 'react';
import PropTypes from 'prop-types'

export default class RepositoryFilter extends React.Component  {
  render() {
    return (
      <section className="border-bottom">
        <input
          type="text"
          placeholder="Filter repositories..."
          className="form-control"
          onKeyUp={({target: {value}}) => this.props.onUpdate(value)}
        />
      </section>
    );
  }
}

RepositoryFilter.propTypes = {
  onUpdate: PropTypes.func.isRequired,
};

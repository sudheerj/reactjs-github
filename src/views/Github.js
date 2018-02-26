import React from 'react';
import UserProfile from './UserProfile'
import Repositories from './Repositories'
import Stars from './Stars'
import Followers from './Followers'
import Following from './Following'
import RepositoryFilter from './RepositoryFilter'
import PropTypes from 'prop-types';

export default class Github extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {filter: ''}

  }

  handleFilterUpdate = (filter) => {
    this.setState({filter})
  }

  render() {
    const {username} = this.props.match.params
    const {filter} = this.state
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <UserProfile username={username} />
          </div>
            <h3>Repositories</h3>
            <RepositoryFilter onUpdate={this.handleFilterUpdate} />
            <Repositories filter={filter} username={username} />
            <Stars filter={filter} username={username} />
            <Followers username={username} />
            <Following username={username} />
          </div>
        </div>
    );
  }
}

Github.propTypes = {
    params: PropTypes.shape({
        username: PropTypes.string,
    }),
  }

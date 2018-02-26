import React from 'react';
import {getUserData} from '../services/github-api'
import PropTypes from 'prop-types';

export default class UserProfile extends React.Component  {
  constructor() {
    super()
    this.state = {user: {}, orgs: []}
  }

  getUser() {
    const {username} = this.props
    getUserData(username)
      .then(({user, orgs}) => {
        this.setState({user, orgs});
      });
  }

  componentWillMount() {
    this.getUser();
  }

  render() {
    const {user, orgs} = this.state;
    return (
      <div>
        <section className="user border-bottom">
          <img
            src={user.avatar_url}
            className="img-rounded img-responsive"
            alt="User Avatar"
          />
          <h2>{user.name}</h2>
          <h5>{user.login}</h5>
          <div className="user-profile-bio">{user.bio}</div>
        </section>
       {/* <section className="stats border-bottom">
          <ProfileStat value={user.followers} label="followers" />
          <ProfileStat value={user.public_repos} label="repositories" />
          <ProfileStat value={user.following} label="following" />
        </section>*/}
        <section className="user border-bottom">
          <h2>{user.email}</h2>
        </section>
        <section className="orgs">
          <h4>Organizations</h4>
          {orgs.map(org => (
            <img
              key={org.id}
              src={org.avatar_url}
              alt="Organization Avatar"
              data-tip={org.login}
            />
          ))}
          {/*<Tooltip effect="solid" />*/}
        </section>
      </div>
    );
  }
}

UserProfile.propTypes = {
  username: PropTypes.string.isRequired
}

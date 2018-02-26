import React from 'react';
import PropTypes from 'prop-types';

export default FollowingItem;

function FollowingItem({following}) {
  return (
    <li className="border-bottom">
      <img
          src={following.avatar_url}
          className="img-rounded img-responsive"
          alt="User Avatar"
      />
      <h2>{following.name}</h2>
      <h5>{following.login}</h5>
    </li>
  );
}

FollowingItem.propTypes = {
    following: PropTypes.shape({
    stargazers_count: PropTypes.number,
    forks_count: PropTypes.number,
    html_url: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }),
};

FollowingItem.defaultProps = {
  following: {},
};

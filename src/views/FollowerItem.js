import React from 'react';
import PropTypes from 'prop-types';

export default FollowerItem;

function FollowerItem({follower}) {
  return (
    <li className="border-bottom">
      <img
          src={follower.avatar_url}
          className="img-rounded img-responsive"
          alt="User Avatar"
      />
      <h2>{follower.name}</h2>
      <h5>{follower.login}</h5>
    </li>
  );
}

FollowerItem.propTypes = {
    follower: PropTypes.shape({
    pushed_at: PropTypes.string,
    language: PropTypes.string,
    stargazers_count: PropTypes.number,
    forks_count: PropTypes.number,
    html_url: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }),
};

FollowerItem.defaultProps = {
    follower: {},
};

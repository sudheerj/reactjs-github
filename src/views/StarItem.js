import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

export default StarItem;

function StarItem({repo}) {
  const timeUpdated = moment(repo.pushed_at).fromNow();
  return (
    <li className="border-bottom">
      <h4><a href={repo.html_url}>{repo.name}</a></h4>
      <p>{repo.description}</p>
        <div>
        <strong>{repo.language}</strong>
        <strong>&#9734; {repo.stargazers_count}</strong>
        <strong>&#4292; {repo.forks_count}</strong>
      <time>Updated {timeUpdated}</time>
        </div>
    </li>
  );
}

StarItem.propTypes = {
  repo: PropTypes.shape({
    pushed_at: PropTypes.string,
    language: PropTypes.string,
    stargazers_count: PropTypes.number,
    forks_count: PropTypes.number,
    html_url: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }),
};

StarItem.defaultProps = {
  repo: {},
};

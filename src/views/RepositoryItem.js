import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

export default RepositoryItem;

function RepositoryItem({repository}) {
  const timeUpdated = moment(repository.pushed_at).fromNow();
  return (
    <li className="border-bottom">
      <div className="pull-right">
        <strong>{repository.language}</strong>
        <strong>&#9734; {repository.stargazers_count}</strong>
        <strong>&#4292; {repository.forks_count}</strong>
      </div>
      <h4><a href={repository.html_url}>{repository.name}</a></h4>
      <p>{repository.description}</p>
      <time>Updated {timeUpdated}</time>
    </li>
  );
}

RepositoryItem.propTypes = {
    repository: PropTypes.shape({
    pushed_at: PropTypes.string,
    language: PropTypes.string,
    stargazers_count: PropTypes.number,
    forks_count: PropTypes.number,
    html_url: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }),
};

RepositoryItem.defaultProps = {
    repository: {},
};

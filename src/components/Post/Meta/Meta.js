import React from 'react';
import moment from 'moment';
import styles from './Meta.module.scss';

const Meta = ({ date, slug }) => (
  <div className={styles['meta']}>
    <p className={styles['meta__date']}>
      Published {moment(date).format('MMMM D, YYYY')}
      {' • '}
      <a
        href={`https://github.com/hjylewis/website/edit/master/content/${slug.slice(
          1,
          slug.length - 1
        )}.md`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Edit on GitHub
      </a>
    </p>
  </div>
);

export default Meta;

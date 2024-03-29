import React from "react";
import classNames from "classnames/bind";
import { Link } from "gatsby";
import { PAGINATION } from "../../constants";
import styles from "./Pagination.module.scss";

const cx = classNames.bind(styles);

const Pagination = ({
  prevPagePath,
  nextPagePath,
  hasNextPage,
  hasPrevPage,
}) => {
  if (!hasPrevPage && !hasNextPage) {
    return null;
  }

  const prevClassName = cx({
    pagination__prevLink: true,
    pagination__prevLinkDisable: !hasPrevPage,
  });

  const nextClassName = cx({
    pagination__nextLink: true,
    pagination__nextLinkDisable: !hasNextPage,
  });

  return (
    <div className={styles["pagination"]}>
      <div className={styles["pagination__prev"]}>
        <Link rel="prev" to={prevPagePath} className={prevClassName}>
          {PAGINATION.PREV_PAGE}
        </Link>
      </div>
      <div className={styles["pagination__next"]}>
        <Link rel="next" to={nextPagePath} className={nextClassName}>
          {PAGINATION.NEXT_PAGE}
        </Link>
      </div>
    </div>
  );
};

export default Pagination;

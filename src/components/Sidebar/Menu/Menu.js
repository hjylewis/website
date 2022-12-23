import React from "react";
import { Link } from "gatsby";
import styles from "./Menu.module.scss";

const Menu = ({ menu }) => (
  <nav className={styles["menu"]}>
    <ul className={styles["menu__list"]}>
      {menu.map((item) => (
        <li className={styles["menu__listItem"]} key={item.path}>
          {item.path.match(/^https/) ? (
            <a
              className={styles["menu__listItemLink"]}
              href={item.path}
              rel="noopener noreferrer"
              target="_blank"
            >
              {item.label}
            </a>
          ) : (
            <Link to={item.path} className={styles["menu__listItemLink"]}>
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;

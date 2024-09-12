"use client";

import { useEffect, useState } from "react";
import ApIcon from "@/components/ApIcon/ApIcon";
import { faCaretDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchBox.module.scss";

const SearchBox = () => {
  const [searchKey, setSearchKey] = useState<string>("");

  useEffect(() => {
    setTimeout(() => {
      // refetch search in here
    }, 1000);
  }, [searchKey]);

  return (
    <div className={styles.container}>
      <div className={styles.searchBox}>
        <ApIcon icon={faMagnifyingGlass} color="var(--primary-dark)" size="1.25rem" onClick />
        <input
          className={styles.input}
          placeholder="Explore anime . . ."
          value={searchKey}
          onChange={(event) => setSearchKey(event.target.value)}
        />
        <ApIcon icon={faCaretDown} color="var(--primary-dark)" size="1.25rem" onClick />
      </div>
      <div className={styles.searchResult}>Result</div>
    </div>
  );
};

export default SearchBox;

import styles from "../Header/Header.module.css";
import Search from "antd/es/input/Search";

export const InputSearch = () => {
  return(
      <form>
          <Search placeholder="input search text"
                  allowClear
                  size="middle"
          />

          {/*{false && <div className={styles.box}></div>}*/}
      </form>
  )
}
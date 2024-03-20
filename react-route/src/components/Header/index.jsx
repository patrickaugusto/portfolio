import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <span>ODS 8</span>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/ods">ODS</Link>
        <Link to="/sobre">Contatos</Link>
      </nav>
    </header>
  );
}

export default Header;

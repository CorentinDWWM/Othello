import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import styles from "./App.module.scss";
import { Outlet } from "react-router-dom";
import SquareProvider from "./components/Provider/SquareProvider";

function App() {
  return (
    <div className={`d-flex center flex-column ${styles.appContainer}`}>
      <SquareProvider>
        <Header />
        <Outlet />
        <Footer />
      </SquareProvider>
    </div>
  );
}
export default App;

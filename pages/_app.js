import {useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/root.scss";
import appStore from "../contexts/storeContext";
import store from "../store/store";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <appStore.Provider value={store}>
       <Component {...pageProps} />
    </appStore.Provider>
  )
}

export default MyApp

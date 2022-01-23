import App from "next/app"
import withRedux from "next-redux-wrapper"
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/root.scss";
import store from "../store/store";
import {
  Provider
} from "react-redux"
class MyApp extends App {
  static async getInitialProps({
    Component,
    ctx
  }) {
    const appProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return {
      appProps
    };
  }
  componentDidMount() {
    import("bootstrap/dist/js/bootstrap");
  }
  render() {
    const {
      Component,
      appProps
    } = this.props;

    return ( 
      <Provider store = {store} >
      <Component {...appProps}/>
       </Provider>
    );
  }
}
const makeStore = () => store
export default withRedux(makeStore)(MyApp)
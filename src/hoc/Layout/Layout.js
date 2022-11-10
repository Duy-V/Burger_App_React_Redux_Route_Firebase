import React, { Component } from "react";
import Ax from "../Ax/Ax";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
class Layout extends Component {
  state = { showSideDrawer: true };
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  //không nên viết như thế này
  // sideDrawerToggleHandler = () => {
  //   this.setState({ showSideDrawer: !this.state.showSideDrawer });
  // };
  sideDrawerToggleHandler = () => {
    this.setState((prev) => {
      return { showSideDrawer: !prev.showSideDrawer };
    });
  };
  render() {
    return (
      <Ax>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Ax>
    );
  }
}
export default Layout;

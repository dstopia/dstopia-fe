import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import "./Home.css";

/** Components */
import ChatsBody from "../../components/Chats/ChatsBody";
import Journey from "../Pages/Journey/Journey";
import Map from "../../components/Map/Map";
import Post from "../../components/Post/Post";
import PostClosed from "../../components/Post/PostClosed";
import NavbarLte from "../../components/Navbar/NavbarLte";
import Gallery from "../Pages/Galery/Galery";
import SidebarLte from "../../components/Sidebar/SidebarLte";
import PageNotFound from "../Pages/404/PageNotFound";
import SignIn from "../Pages/SignIn/SignIn";

function Home() {
  return (
    <Router>
      <div className="wrapper">
        {/* Preloader */}
        <div className="preloader flex-column justify-content-center align-items-center">
          <h6>Loading...</h6>
        </div>

        {/* <Navbar /> */}
        <NavbarLte />
        <SidebarLte />
        <div className="content-wrapper">
          <Route path="/" exact component={Lobby} />
          <Route path="/journey" component={Journey} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/chats" component={ChatsBody} />
          <Route path="/404" component={PageNotFound} />
          <Route path="/signin" component={SignIn} />
        </div>
      </div>
    </Router>
  );
}

function Lobby() {
  return (
    <div className="row">
      <div className="col-lg-7">
        <Map />
        <div className="card m-3">
          <div className="card-header">title</div>
          <div className="card-body">Something here</div>
          <div className="card-footer">footer</div>
        </div>
        <div className="card m-3">
          <div className="card-header">title</div>
          <div className="card-body">Something here</div>
          <div className="card-footer">footer</div>
        </div>
        <div className="card m-3">
          <div className="card-header">title</div>
          <div className="card-body">Something here</div>
          <div className="card-footer">footer</div>
        </div>
      </div>
      <div className="col-lg-5 overflow-auto">
        <div className="post-wrapper overflow-auto">
          <Post />
          <Post />
          <Post />
          <PostClosed />
          <PostClosed />
          <PostClosed />
        </div>
      </div>
    </div>
  );
}

const mapStateToProos = (state) => {
  // state global
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    greet: () => dispatch({ type: "GREET_USER" }),
  };
};
export default connect(mapStateToProos, mapDispatchToProps)(Home);

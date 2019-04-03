import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "../landingPage/HomePage";
import BlogTips from "../travelblog/BlogTips";
import MyBlogs from "../travelblog/MyBlogs";
import BlogsForm from "../travelblog/BlogsForm";
import BlogFormPage from "../travelblog/BlogFormPage";
import MapContainer from "../googlemaps/MapContainer";
// import AllPosts from "../comments/AllPosts";
// import CommentsForm from '../comments/CommentsForm';

const Navigation = () => {
  return (
    <Router>
      <div>
        <button className="btn btn-outline-primary">
          <Link to="/homePage">Home Page</Link>
        </button>
        <button className="btn btn-outline-primary">
          <Link to="/blogTips">Travel Tips</Link>
        </button>
        <button className="btn btn-outline-primary">
          <Link to="/Myblogs">Travel Blog</Link>
        </button>
        <button className="btn btn-outline-primary">
          <Link to="/mapContainer">Google Map</Link>
        </button>
        {/* <button className="btn btn-outline-primary">
          <Link to="/allPosts">Comments</Link>
        </button> */}

        <Route exact path="/blogTips" component={BlogTips} />
        <Route exact path="/blogsForm" component={BlogsForm} />
        <Route exact path="/blogFormPage" component={BlogFormPage} />
        <Route exact path="/blogFormPage/:id" component={BlogFormPage} />
        <Route exact path="/Myblogs" component={MyBlogs} />
        <Route exact path="/mapContainer" component={MapContainer} />
        <Route exact path="/homePage" component={HomePage} />
        {/* <Route exact path="/allPosts" component={AllPosts} /> */}
      </div>
    </Router>
  );
};
export default Navigation;

import axios from "axios";

class BlogService {
  static DisplayAll(data, onSuccess, onError) {
    axios
      .get(`/api/myblog/displayBlog`, data, { withCredentials: true })
      .then(onSuccess)
      .catch(onError);
  }
  static DisplayMyPosts(data, onSuccess, onError) {
    axios
      .get(`/api/myblog/displayMyBlogs`, data, { withCredentials: true })
      .then(onSuccess)
      .catch(onError);
  }
  static selectMyBlogById(id, onSuccess, onError) {
    axios
      .get(`/api/myblog/myPosts/${id}`, { withCredentials: true })
      .then(onSuccess)
      .catch(onError);
  }
  static insert(data, onSuccess, onError) {
    axios
      .post("/api/myblog/myblogposts", data, { withCredentials: true })
      .then(onSuccess)
      .catch(onError);
  }
  static selectById(id, onSuccess, onError) {
    axios
      .get(`/api/myblog/${id}`, { withCredentials: true })
      .then(onSuccess)
      .catch(onError);
  }
  static update(id, data, onSuccess, onError) {
    axios
      .put(`/api/myblog/${id}`, data, { withCredentaials: true })
      .then(onSuccess)
      .catch(onError);
  }
  static delete(id, onSuccess, onError) {
    axios
      .delete(`/api/myblog/${id}`, { withCredentials: true })
      .then(onSuccess)
      .catch(onError);
  }
}

export default BlogService;

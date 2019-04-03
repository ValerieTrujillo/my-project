import axios from "axios";

class BlogService {
  static Delete(id, onSuccess, onError) {
    axios
      .delete(`/api/fileUpload/${id}`, { withCredentials: true })
      .then(onSuccess)
      .catch(onError);
  }
}

export default BlogService;

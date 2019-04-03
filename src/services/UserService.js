import axios from "axios";

class UserService {
    static register(data, onSuccess, onError) {
        axios.post(`/api/users/register`, 
          data, { withCredentials: true })
          .then(onSuccess)
          .catch(onError);
    }
}

export default UserService;
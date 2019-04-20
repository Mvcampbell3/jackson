import Axios from "axios";

export default {
  getAll() {
    return Axios.get("/jack/seamonster");
  }
}
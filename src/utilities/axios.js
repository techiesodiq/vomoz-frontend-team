import axios from "axios";

const Axios = axios.create({
  baseURL: "https://secure.vomozflex.com/test-api/v4/",
});

export const config = {
  auth: {
    username: "francis.richard@vomoz.com",
    password: "Gr0Ve!Wet1aND$$",
  },
  headers: {
    "Content-Type": "application/json",
  },
};

export default Axios;

import api from "utilities/axios";

const signup = async (data) => {
  try {
    api.post("signup", data).then((res) => {
      const data = res.data;
      console.log(data);
    });
  } catch (e) {
    console.log(e.message);
  }
};

export { signup };

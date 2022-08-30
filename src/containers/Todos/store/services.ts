import axios from "axios";

export const testServiceThunk = () => {
  return new Promise((res, rej) => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=100")
      .then((response) => res(response.data))
      .catch((error) => rej(error));
  });
};

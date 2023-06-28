import { userInfo } from "os";

export const getSysUsername = () => {
  console.log(userInfo().username);
};

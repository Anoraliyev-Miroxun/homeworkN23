import React from "react";
import { request } from "../CONFIG/request";

export const Profile = () => {
  React.useEffect(() => {
    request.get("/messages").then((res) => {
      console.log(res.data);
    });
  }, []);
  return <div>Profile</div>;
};

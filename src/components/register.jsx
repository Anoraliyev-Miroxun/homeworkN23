import { useForm } from "react-hook-form";
import { request } from "../CONFIG/request";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const { handleSubmit, register, reset } = useForm();
  const navigate = useNavigate();

  const submit = (data) => {
    request.post("/register", data).then((res) => {
      if (res?.data?.accessToken) {
        Cookies.set("token", res?.data?.accessToken);
        navigate("/home");
      }
    });
    reset();
  };

  return (
    <>
      <h2 className="text-3xl">Register</h2>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <input
            className="p-2 mb-[5px] border"
            {...register("username")}
            type="text"
          />
        </div>
        <div>
          <input
            className="p-2 mb-[5px] border"
            {...register("email")}
            type="email"
          />
        </div>
        <div>
          <input
            className="p-2 mb-[5px] border"
            {...register("password")}
            type="password"
          />
        </div>
        <button className="bg-green-300 cursor-pointer" type="submit">
          Send
        </button>
      </form>
    </>
  );
};

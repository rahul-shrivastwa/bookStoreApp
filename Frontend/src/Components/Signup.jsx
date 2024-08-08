import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    console.log(data);
    await axios
      .post("https://book-app-mos8.onrender.com/user/signup", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Signup Successfully");
          setTimeout(()=>{
            navigate(from, {replace: true});
        }, 1000);
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if(err.response){
          console.log(err.response.data);
          toast.error("Error:" + err.response.data.message);
        }
      });
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="modal-box border dark:bg-slate-900 dark:text-white">
          <form method="div" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-3 space-y-1">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your name..."
                className="w-80 px-3 border rounded outline-none px-3 py-1"
                {...register("fullname", { required: true })}
              />{" "}
              <br />
              {errors.fullname && (
                <span className="text-sm text-red-500">
                  Please enter your name
                </span>
              )}
            </div>
            {/* Email */}
            <div className="mt-3 space-y-1">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email..."
                className="w-80 px-3 border rounded outline-none px-3 py-1"
                {...register("email", { required: true })}
              />{" "}
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">Please enter email</span>
              )}
            </div>
            {/* Password */}
            <div className="mt-3 space-y-1">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password..."
                {...register("password", { required: true })}
                className="w-80 px-3 border rounded outline-none px-3 py-1"
              />{" "}
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  Please enter the password
                </span>
              )}
            </div>
            {/* Button */}
            <div className="flex justify-around mt-5">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300">
                Sign up
              </button>
              <p className="text-md">
                Have account?{" "}
                <button
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>
                <Login />
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;

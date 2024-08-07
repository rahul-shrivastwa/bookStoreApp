import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    console.log(data);
    await axios
      .post("https://book-app-mos8.onrender.com/user/login", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Logged-in Successfully");
          document.getElementById("my_modal_3").close();
          setTimeout(()=>{
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if(err.response){
          console.log(err);
          toast.error("Error:" + err.response.data.message);
          setTimeout(() => {}, 2000);
        }
      });
  };

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box dark:bg-slate-900 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </Link>
              <h3 className="font-bold text-lg">Login</h3>
              {/* Email */}
              <div className="mt-3 space-y-1">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email..."
                  {...register("email", { required: true })}
                  className="w-80 px-3 border rounded outline-none px-3 py-1"
                /> <br />
                {errors.email && <span className="text-sm text-red-500">Please enter email</span>}
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
                /> <br />
                {errors.password && <span className="text-sm text-red-500">Please enter the password</span>}
              </div>  
              {/* Button */}
              <div className="flex justify-around mt-5">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300">
                  Login
                </button>
                <p>
                  Not registered?{" "}
                  <Link
                    to="/signup"
                    className="underline text-blue-500 cursor-pointer"
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;

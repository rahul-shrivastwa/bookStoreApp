import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

function Logout() {

    const [authUser, setAuthUser] = useAuth();
    const handleLogout = () =>{
        try {
            setAuthUser({
                ...authUser,
                user: null
            });
            localStorage.removeItem("Users");
            toast.success("Logout successfully");
            setTimeout(()=>{
                window.location.reload();
            }, 2000);
        } catch (error) {
            toast.error("Error:" + error.message);
            setTimeout(() => {}, 2000);
        }
    }
  return (
    <>
      <button className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer" onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Logout;

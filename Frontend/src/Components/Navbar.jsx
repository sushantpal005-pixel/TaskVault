import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { setUser } from "../Redux/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/v1/user/logout`, { withCredentials: true })
      if (res.data.success) {
        dispatch(setUser(null))
        toast.success("Logout successfully")
        navigate("/login")
      }
    } catch (error) {
      toast.error("Logout failed")
    }
  }
  return (
    <nav className="border-b border-slate-800 bg-slate-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">

          <Link to="/dashboard">
            <h1 className="text-2xl font-bold">
              Task<span className="text-indigo-500">Vault</span>
            </h1>
          </Link>

          <div className="flex items-center gap-4">
            <span className="hidden sm:block text-sm text-slate-400">
              Welcome back, {user.user.user.fullName}
            </span>

            <div className="sm:hidden w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
              {user.user.user.fullName?.charAt(0).toUpperCase()}
            </div>

            <button onClick={logoutHandler} className="px-4 py-2 text-sm font-medium text-slate-300 border border-slate-700 rounded-lg hover:bg-slate-800 transition">
              Logout
            </button>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar;
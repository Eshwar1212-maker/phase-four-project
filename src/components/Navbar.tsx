import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="flex justify-between text-white p-8 cursor-pointer bg-slate-900 text-white">
        <div className="text-3xl">
           AppName
        </div>
        <div>
        </div>
        <div>
            <ul className="flex flex-row gap-8 px-[50px] text-xl font-bold text-white sm:text-white">
                <li><Link to="/selltracks">Sell tracks</Link></li>
                <li><Link to="/buytracks">Find tracks</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/">Home</Link></li>
                <li>Profile</li>
            </ul>
        </div>
    </div>
  )
}

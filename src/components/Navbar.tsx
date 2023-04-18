import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="flex justify-between text-white p-8 cursor-pointer bg-transparent">
        <div>
           Logo
        </div>
        <div>

        </div>
        <div>
            <ul className="flex flex-row gap-8 px-[50px] text-xl font-bold text-white sm:text-black">
                <li><Link to="/seller">Become a Seller</Link></li>
                <li><Link to="/findBeats">Find Beats</Link></li>
                <li><Link to="/">Sign in</Link></li>
            </ul>
        </div>
    </div>
  )
}

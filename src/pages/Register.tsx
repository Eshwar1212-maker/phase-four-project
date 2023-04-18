import { useEffect, useState } from "react";
import background from "../assets/background.mp4"
import { Navigate, useNavigate } from "react-router-dom";

export const Register = () => {

  const [userName, setUserName] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [isLoginOrRegister, setIsLoginOrRegister] = useState('Register');

  const navigate = useNavigate()


  useEffect(() => {
    const getUser = async () => {
      const response = await fetch("http://127.0.0.1:5000/user");
      const data = await response.json();
      console.log(data);
    };
    getUser();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(userName, password);
    try {
      const endpoint = isLoginOrRegister === 'Register' ? 'register' : " login"
      const response = await fetch(`http://127.0.0.1:5000/${isLoginOrRegister}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userName, password: password }),
      });

      const result = await response.json();
      console.log(result);

      if (response.status === 200) {
        navigate("/");
      } else {
        console.log("Error:", result.error);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="text-white relative h-screen">
      <video
        className="w-full h-full object-cover"
        src={background}
        autoPlay
        loop
        muted
      />
    <div className="bg-blue-50 flex py-[200px] absolute w-full h-full top-0 left-0 bg-gray-900/30 text-center">
        <form onSubmit={handleSubmit} className="w-64 mx-auto">
        <h1 className="mb-[50px] text-2xl w-[250px]">Welcome to (App name)! Create an account!</h1>
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                  placeholder="username"
                  className="text-lg block w-full rounded-xl p-2 mb-2 text-black"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="password"
                  className="text-lg text-black block w-full rounded-xl p-2 mb-2"
                />
                <button className="bg-blue-900 text-white w-full rounded-md p-2">
                  {isLoginOrRegister}
                </button>

                {
                  isLoginOrRegister == "Register" ? <p>Already have an account?<button className="underline" onClick={() => setIsLoginOrRegister("Login")}>Log in</button></p> :
                  <p>Not a user? <button className="underline" onClick={() => setIsLoginOrRegister("Register")}>Register</button></p>
                }
             
              </form>
      </div>
    </div>
  );
};

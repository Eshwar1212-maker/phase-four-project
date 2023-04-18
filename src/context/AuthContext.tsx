import { useEffect, useState } from "react"

export const AuthContext = () => {

  const [state, setstate] = useState("")
  useEffect(() => {
    const getUser = async () => {
      const response = await fetch("http://127.0.0.1:5000/users")
      const data = await response.json()
      console.log(data);
    }
    getUser()
  }, [])

  return (
    <div>
        <div>

        </div>
    </div>
  )
}

import React, { useEffect } from "react"
import { authStatus } from "../../firebase"
import { useLocation, useNavigate } from "react-router-dom"
import AdminNavtab from "../../components/adminNavtab"

const ViewNanny = () => {
  let { state } = useLocation()
  const navigate = useNavigate()

    const checkStatus = async () => {
      try {
        let auth = await authStatus()
        auth ? console.log("logged") : navigate("/admin/login")
      } catch (err) {
        alert("error: unable to authenticate", err)
        navigate("/admin/login")
      }
    }

  useEffect(() => {
    checkStatus()
  }, [])

  return (
    <div>
      <AdminNavtab />

      <div className="w-11/12 lg:w-10/12 mx-auto my-10 border">
        <p className="text-md font-medium text-white bg-[#B36824] amber-500 px-3 py-5">View Nanny</p>

        <p className="px-3 py-2 text-sm">
          <span className="font-semibold">Name: </span>
          {state.name}
        </p>

        <p className="px-3 py-2 text-sm">
          <span className="font-semibold">Age: </span>
          {state.age}
        </p>

        <p className="px-3 py-2 text-sm">
          <span className="font-semibold">About: </span>
          {state.about}
        </p>

        <p className="px-3 py-2 text-sm">
          <span className="font-semibold">Category: </span>
          {state.category.map((category, index) => (
            <li>{category}</li>
          ))}
        </p>

        <p className="px-3 py-2 text-sm">
          <span className="font-semibold">Education: </span>
          {state.education}
        </p>

        <p className="px-3 py-2 text-sm">
          <span className="font-semibold">Skills: </span>
          {state.skills}
        </p>

        <div className="px-3 py-2 text-sm">
          <p className="font-semibold">Images:</p>

          <div className="flex flex-wrap gap-5 py-5">
            {state.images.map((image, index) => (
              <img src={image.file} alt="houseImage" className="w-full lg:w-3/12 object-cover" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewNanny

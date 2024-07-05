import React, { useState, useEffect } from "react"
import { uploadResource, authStatus } from "../../firebase"
import { useNavigate } from "react-router-dom"
import Loader from "../../components/loader"
import AdminNavtab from "../../components/adminNavtab"

const AddNanny = () => {
  const navigate = useNavigate()
  const [Files, setFiles] = useState([])
  const [loading, setLoading] = useState(false)
  const [resource, setResource] = useState({
    name: "",
    age: "",
    category: [],
    images: [],
    about: "",
    education: "",
    skills: "",
  })

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

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setResource((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0]
    setFiles([selectedFile])
  }

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target
    const updatedCategories = checked
      ? [...resource.category, value]
      : resource.category.filter((category) => category !== value)
    setResource({ ...resource, category: updatedCategories })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("logging data: ", resource)

    try {
      let percentage = 0.0
      setLoading(true)

      await uploadResource(Files, resource, "nannies", (progress) => {
        percentage += parseInt(progress.toFixed(2), 10)
        console.log(percentage)
      })

      console.log("navig")

      setLoading(false)
     navigate("/admin/indexnanny")
    } catch (error) {
      setLoading(false)
      console.log("error: ", error)
    }
  }

  return (
    <div className="">
      <AdminNavtab />

      {loading && <Loader />}

      <div className="w-11/12 lg:w-10/12 mx-auto my-10">
        <p className="text-xl lg:text-3xl text-[#B36824] font-medium pb-10">Add Nanny</p>

        <form onSubmit={handleSubmit} className="px-3 py-5 border">
          <div className="mb-4">
            <label htmlFor="name" className="text-xs text-[#B36824]">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border"
              value={resource.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="age" className="text-xs text-[#B36824]">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              className="mt-1 p-2 w-full border"
              value={resource.age}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="text-xs text-[#B36824]">Category</label>
            <div className="flex flex-wrap">
              {[
                "Parents Helper",
                "Sitters",
                "Nanny (Part or Full Time)",
                "Specialty Nanny",
                "Newborn and Infant Care",
                "Overnight Nannies",
              ].map((category) => (
                <label key={category} className="mr-4">
                  <input
                    type="checkbox"
                    name="category"
                    value={category}
                    checked={resource.category.includes(category)}
                    onChange={handleCategoryChange}
                  />{" "}
                  {category}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="about" className="text-xs text-[#B36824]">
              About
            </label>
            <textarea
              id="about"
              name="about"
              className="mt-1 p-2 w-full border"
              value={resource.about}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="education" className="text-xs text-[#B36824]">
              Education
            </label>
            <input
              type="text"
              id="education"
              name="education"
              className="mt-1 p-2 w-full border"
              value={resource.education}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="skills" className="text-xs text-[#B36824]">
              Skills
            </label>
            <input
              type="text"
              id="skills"
              name="skills"
              className="mt-1 p-2 w-full border"
              value={resource.skills}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="picture" className="text-xs text-[#B36824]">
              Picture
            </label>
            <input
              type="file"
              accept="image/*"
              id="picture"
              name="picture"
              onChange={handleFileChange}
              className="mt-1 p-2 w-full border"
              required
            />
          </div>

          <div className="mt-4">
            <button type="submit" className="bg-[#B36824] text-sm text-white py-2 px-5 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddNanny

import React, { useState, useEffect } from "react"
import { updateResource } from "../../firebase"
import { useLocation, useNavigate } from "react-router-dom"
import Loader from "../../components/loader"
// import AdminNavtab from "../../components/adminNavtab"
import { CloseCircleTwoTone } from "@ant-design/icons"

const EditNanny = () => {
  let { state } = useLocation()
  const navigate = useNavigate()
  const [Files, setFiles] = useState([])
  const [loading, setLoading] = useState(false)
  const [resource, setResource] = useState(state)

//   const checkStatus = async () => {
//     try {
//       let auth = await authStatus()
//       auth ? console.log("logged") : navigate("/admin/login")
//     } catch (err) {
//       alert("error: unable to authenticate", err)
//       navigate("/admin/login")
//     }
//   }

  useEffect(() => {
    // checkStatus()
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setResource((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleDeleteItem = (name) => {
    const updatedObject = { ...resource }
    const itemIndex = updatedObject.images.findIndex((item) => item.name === name)

    if (itemIndex !== -1) {
      updatedObject.images.splice(itemIndex, 1)
    }
    setResource(updatedObject)
  }

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target
    const updatedCategories = checked
      ? [...resource.category, value]
      : resource.category.filter((category) => category !== value)
    setResource({ ...resource, category: updatedCategories })
  }

  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0]
    setFiles([selectedFile])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      let percentage = 0.0
      setLoading(true)

      await updateResource(Files, resource, "nannies", (progress) => {
        percentage += parseInt(progress.toFixed(2), 10)
        console.log(percentage)
      })

      setLoading(false)
      navigate("/admin/index")
    } catch (error) {
      setLoading(false)
      console.log("error: ", error)
    }
  }

  return (
    <div className=''>
      {/* <AdminNavtab /> */}

      {loading && <Loader />}

      <div className='w-11/12 lg:w-10/12 mx-auto my-10'>
        <p className='text-xl lg:text-3xl text-[#B36824] font-medium pb-10'>Edit Nanny</p>

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

<div className='mb-4'>
            <label htmlFor='houseImages' className='text-xs text-[#B36824]'>
              House Images
            </label>

            {resource.images && (
              <>
                {resource.images.map((file, index) => (
                  <div className='w-fit relative border rounded bg-primary px-5 py-3 flex-row' id={index}>
                    <p className=''>
                      <a className='text-secondary underline' href={file.file}>
                        {file.name}
                      </a>
                    </p>

                    <CloseCircleTwoTone
                      onClick={() => handleDeleteItem(file.name)}
                      className='absolute -top-1 -right-1'
                    />
                  </div>
                ))}{" "}
              </>
            )}

            <input
              type='file'
              id='houseImages'
              name='houseImages'
              onChange={handleFileInputChange}
              multiple
              className='form-input mt-1 text-sm px-1 py-2 block w-full border'
              accept='image/*'
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

export default EditNanny
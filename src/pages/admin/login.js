import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { logIn } from "../../firebase"
import Loader from "../../components/loader"

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const onLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await logIn(email, password)
      setLoading(false)
      navigate("/admin/indexnanny")
    } catch (error) {
      setErrorMessage("Invalid credentials")
      setLoading(false)
    }
  }

  return (
    <>
      <main>
        {loading && <Loader />}
        <section className='bg-gray-100 h-screen flex items-center justify-center'>

          <div className='w-11/12 mx-auto bg-white p-10 rounded shadow-lg lg:w-96'>


            <p className='text-xl lg:text-3xl font-semibold text-[#B36824] text-center border-b border-b-[#B36824] mt-10 mb-10'>
              ADMIN LOGIN
            </p>
            <form onSubmit={onLogin}>
              <div className='mb-4'>
                <label
                  htmlFor='email-address'
                  className='block text-xs font-medium text-gray-700'
                >
                  Email
                </label>
                <input
                  id='email-address'
                  name='email'
                  type='email'
                  required
                  placeholder='Email address'
                  onChange={(e) => setEmail(e.target.value)}
                  className='mt-1 p-2 border rounded w-full focus:ring-orange-500 focus:border-orange-500'
                />
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='password'
                  className='block text-xs font-medium text-gray-700'
                >
                  Password
                </label>
                <input
                  id='password'
                  name='password'
                  type='password'
                  required
                  placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)}
                  className='mt-1 p-2 border rounded w-full focus:ring-orange-500 focus:border-orange-500'
                />
              </div>

              <div>
                <p className='mt-4 text-sm text-red-500 text-center'>
                  {errorMessage}
                </p>

                <button
                  type='submit'
                  className='mt-4 w-full py-2 bg-[#B36824] text-white rounded'
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}

export default Login
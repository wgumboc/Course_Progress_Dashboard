import React from 'react'
import { useState, useEffect } from 'react'
import {FaSignInAlt} from 'react-icons/fa'

const Login = () => {
  const [formData, setFormData] = useState({
      email: '',
      password: '',
  })

  const {email, password,} = formData

  const onChange = () => {}

  return <>
    <section className="heading">
        <h1>
            <FaSignInAlt /> Login
        </h1>
        <p>Login and track your course progress</p>
    </section>

    <section className="form">
        <form>
            <div className='form-group'>
                <input type="email" 
                    className="form-control" 
                    id="email" 
                    name="email" 
                    value={email}
                    placeholder='Enter your email'
                    onChange={onChange} />
            </div>
            <div className='form-group'>
                <input type="password" 
                    className="form-control" 
                    id="password" 
                    name="password" 
                    value={password}
                    placeholder='Enter your password'
                    onChange={onChange} />
            </div>
            <div className="form-group">
                <button type="submit" className='btn btn-block'>
                    Submit
                </button>
            </div>
        </form>
    </section>
  </>

}

export default Login
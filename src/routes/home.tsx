import { ChangeEvent, FormEvent, useState } from 'react'
  import reactLogo from '.././assets/react.svg'
  import { signInUser } from '../firebase/firebase'
  import { useNavigate } from 'react-router-dom'
  import '.././App.css'

  const defaultFormFields = {
    email: '',
    password: '',
  }

  function Home() {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields
    const navigate = useNavigate()

    const resetFormFields = () => {
      return (
        setFormFields(defaultFormFields)
      );
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      try {
        // Send the email and password to firebase
        const userCredential = await signInUser(email, password)

        if (userCredential) {
          resetFormFields()
          navigate('/profile')
        }
      } catch (error:any) {
        console.log('User Sign In Failed', error.message);
      }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target
      setFormFields({...formFields, [name]: value })
    }

    return(
        <div className="center-container">
      <div className="container py-15">

      <div className="box-card">
        <div className="box-header text-center">
          <h1 className='title mb-7'>
            Welcome
          </h1>
          <p className="paragraph mb-22">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, voluptatem?
          </p>

        </div>
        <form onSubmit={handleSubmit}>
          <div className="box-input mb-7">
            <label>User</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="box-input mb-22">
            <label>Password</label>
            <input
              type='password'
              name='password'
              value={password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>
          <div>
            <a href="#" className="d-block mb-22">Forgot your password?</a>
            <button className="btn d-inline" id='recaptcha' type="submit">Login</button>
          </div>
        </form>
      </div>
        </div>
      </div>
    )
  }

  export default Home
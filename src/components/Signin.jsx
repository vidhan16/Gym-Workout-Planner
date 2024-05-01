import React, { useEffect, useRef, useState } from 'react';
import Google from './google.png';
import Logo from './Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

export default function Signin() {
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [suclogin, setsuclogin] = useState(false);
  const [sucsignup, setsucsignup] = useState(false);
  const [name, setname] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify([]));
    }
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!email) {
      newErrors.email = 'Email is required';
      setsucsignup(false);
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email address';
      setsucsignup(false);
    }

    if (!password) {
      newErrors.password = 'Password is required';
      setsucsignup(false);
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      setsucsignup(false);
    }

    if (register && password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      setsucsignup(false);
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const userData = {
        email,
        password,
      };
      const users = JSON.parse(localStorage.getItem('users'));
      const userExists = users.some((user) => user.email === email);

      if (register && userExists) {
        setErrors({ email: 'Email already exists. Please use a different email.' });
        setsucsignup(false);
        return;
      }
      users.push(userData);
      localStorage.setItem('users', JSON.stringify(users));

      setsucsignup(true);
      sendEmail;
      console.log('User registered successfully:', userData);
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setErrors({});
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!email) {
      newErrors.email = 'Email is required';
      setsuclogin(false);
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email address';
      setsuclogin(false);
    }

    if (!password) {
      newErrors.password = 'Password is required';
      setsuclogin(false);
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const users = JSON.parse(localStorage.getItem('users'));
      const user = users.find((user) => user.email === email);

      if (!user) {
        setErrors({ email: 'User not found. Please register first.' });
        setsuclogin(false);
        return;
      }

      if (user.password !== password) {
        setErrors({ password: 'Invalid email or password. Please try again.' });
        setsuclogin(false);
        return;
      }

      setsuclogin(true);
      sessionStorage.setItem("set", email);
      let data = sessionStorage.getItem("set");
      console.log(data);
      console.log('Login successful:', user);
      var nam="";
      for(var i=0;i<email.length;i++){
        if(email[i]=='@'){
          break;
        }
        nam+=email[i];
      }
      setname(nam);
      setEmail('');
      setPassword('');
      setErrors({});
      navigate('/');
    }
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ikqrgfw', 'template_3tv2d0l', form.current, {
        publicKey: 't7K_YzAvF05s1FYuc',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  
  return (
    <div className='flex flex-col lg:flex-row h-screen'>
      <div className="lg:w-2/3 h-80 lg:h-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?cs=srgb&dl=pexels-william-choquette-1954524.jpg&fm=jpg"
          alt=""
        />
      </div>
      <div className="lg:w-1/3 h-full bg-[#E0E0E0] p-10 lg:p-20">
        <div className="flex flex-col space-y-4 h-full justify-between">
          <div>
            <h3 className='text-3xl font-semibold mb-2'>
              {register ? 'Register' : 'Login'}
            </h3>
            <p className='text-sm mb-2'>
              {register ? 'Welcome! Please enter your details' : 'Welcome back! Please enter your details'}
            </p>
          </div>

          <form onSubmit={register ? handleFormSubmit : handleLogin} ref={form} className="flex flex-col space-y-2">
            <input
              className='text-black border bg-transparent p-2 border-black outline-none focus:outline-none'
              type="email" name='user_email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <input
              className='text-black border bg-transparent p-2 border-black outline-none focus:outline-none'
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

            {register && (
              <>
                <input
                  className='text-black border bg-transparent p-2 border-black outline-none focus:outline-none'
                  type="password"
                  placeholder='Confirm Password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
              </>
            )}

            <button className='bg-[#060606] rounded-md p-3 text-white' type="submit">
              {register ? 'Sign Up' : 'Login'}
            </button>
            {suclogin ? <Link to={`/${name}`}><button className='w-full bg-[green] text-white border-none rounded-lg p-2 text-sm'>Successfully logged in,<span className=' underline'>Go to Home Page</span></button></Link> :null}
            {sucsignup && register ? <button className='w-full bg-[green] text-white border-none rounded-lg p-2 text-sm'>Successfully signed up,<span onClick={()=>(setRegister((prev)=>(!prev)))} className='underline'>Login to your account</span></button> :null}
          </form>

          {register ? (
            <button onClick={() => setRegister(false)} className='font-semibold bg-white border-2 border-black rounded-md p-3'>
              Login
            </button>
          ) : (
            <button onClick={() => setRegister(true)} className='font-semibold bg-white border-2 border-black rounded-md p-3'>
              Register
            </button>
          )}

          <div className='flex items-center justify-center relative py-2'>
            <div className='w-full h-[1px] bg-black'></div>
            <p className='absolute text-black/80 bg-[#E0E0E0] p-1'>or</p>
          </div>

          <div className='cursor-pointer font-semibold bg-white border-2 border-black/40 rounded-md p-2 text-center flex items-center justify-center'>
            <img className='mx-2' src={Google} alt="" />
            Sign In with Google
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect } from 'react'
import Logo from '../../src/assets/img/logo.png'
import Footer from './Footer'
import AuthButtonProvider from '../Components/AuthButtonProvider'
import {FaGoogle, FaGithub} from 'react-icons/fa6'
import { toast } from 'react-toastify'
import useUser from '../Hooks/Useuser'
import { useNavigate } from 'react-router-dom'
import MianSpinner from '../Components/MianSpinner'

function Authentication() {
  // const notify = () => toast("Wow so easy!");
  const {data, isLoading, isError} = useUser()

  const navigate = useNavigate()

  useEffect(() => { 
      if(!isLoading && data) {
        navigate("/", {replace : true})
      }
  }, [isLoading,data,navigate])

  if(isLoading) {
    return <MianSpinner />
  }

  return (
    <div className='auth-section'>
      {/* Authentication-haeder */}
      <img src={Logo} alt="logo_here" className='w-12 h-auto object-contain' />


      {/* Main-section */}
      <div className='w-full flex flex-1 flex-col justify-center items-center gap-6'>
        <h1 className='text-3xl lg:text-4xl text-blue-700'>Welcome to Expressresume</h1>
        <p className='text-base text-gray-600'>express way to create a resume</p>
        <h2 className='text-2xl text-gray-600'>Auhenticate</h2>
        <div className='w-full lg:w-96 rounded-md  p-2 flex flex-col items-center justify-start gap-6'>
        <AuthButtonProvider Icon={FaGoogle} label={"Signin With Google"} provider={'GoogleAuthProvider'} />
        <AuthButtonProvider Icon={FaGithub} label={"Signin With Github"} provider={'GithubAuthProvider'} />
        </div>

      </div>

      <button onClick={() => toast.success('Wah its fucked')}>Click me</button>

      {/* Fotter-section */}
      <Footer />
    </div>
  )
}

export default Authentication

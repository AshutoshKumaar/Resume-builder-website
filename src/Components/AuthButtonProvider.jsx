import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import {GoogleAuthProvider, GithubAuthProvider, signInWithRedirect} from 'firebase/auth'
import { auth } from '../Config/firebase.config';

function AuthButtonProvider({Icon, label, provider}) {
    const googleAuthProvider = new GoogleAuthProvider();
    const gitAuthProvider = new GithubAuthProvider();

    const handleClick = async () => {
        switch (provider) {
            case "GoogleAuthProvider":
                await signInWithRedirect(auth, googleAuthProvider)
                .then((results) => {
                    console.log(results)
                }).catch((err) => {
                    console.log(`Error ${err.Messages}`)
                })
                console.log("Google Auth click");
                break;
            
            case 'GithubAuthProvider': 
                await signInWithRedirect(auth, gitAuthProvider)
                .then((results) => {
                    console.log(results)
                }).catch((err) => {
                    console.log(`Error ${err.Messages}`)
                })
                console.log("Gith-hub click");
                break;
            
            default:
                await signInWithRedirect(auth, googleAuthProvider)
                .then((results) => {
                    console.log(results)
                }).catch((err) => {
                    console.log(`Error ${err.Messages}`)
                })
                console.log('Inside the GoogleAuth');
                break;
        }
    }
  return (
    <div onClick={handleClick} className='w-full px-4 py-3 rounded-md border-2 border-blue-700 flex items-center justify-between group cursor-pointer  hover:bg-blue-700 active:scale-95 duration-150 hover:shadow-md'>
      <Icon className = 'text-txtPrimary text-xl group-hover:text-white' />
      <p className = 'text-txtPrimary text-lg group-hover:text-white' >{label}</p>
      <FaChevronRight className='text-txtPrimary text-base group-hover:text-white' />
    </div>
  )
}

export default AuthButtonProvider

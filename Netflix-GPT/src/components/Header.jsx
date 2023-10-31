import React from 'react'
import { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';
const Header = ({ onclickHandle, isGpt }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const user = useSelector(state => state.user)
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate('/browse')
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
                navigate('/browse')
            }
            else {
                dispatch(removeUser())
                navigate('/')
            }
        })

        return () => {
            unsub()
        }
    }, [])

    const signOutFunction = () => {
        signOut(auth).then(() => {
            navigate('/')
        }).catch((error) => {
            navigate('/browse')
        });
    }


    return (
        <div className='absolute px-8 py-2 flex justify-between item-center w-full z-30 bg-gradient-to-b from-black'>
            < img className='w-44 cursor-pointer' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
            {
                user && <div className='flex items-center gap-1'>
                    <button className='bg-white  text-black py-2 px-4 text-lg  rounded font-semibold hover:opacity-80 cursor-pointer' onClick={onclickHandle}>{isGpt ? 'Home' : 'GPT Search '}</button>
                    <h1 className='text-white text-base'>{user?.displayName}</h1>
                    <button className='border border-black bg-red-500  py-2 px-4 text-white  text-lg ml-2 rounded font-semibold cursor-pointer' onClick={signOutFunction}>Sign out</button>
                </div>
            }

        </div >
    )
}

export default Header

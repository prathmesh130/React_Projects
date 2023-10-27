import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';
export default function Layout() {
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uuid, email, displayName } = user;
                dispatch(addUser({ uuid: uuid, email: email, name: displayName }))
            }
            else {
                dispatch(removeUser())
            }
        })
    }, [])
    return (
        <div></div>
    )
}

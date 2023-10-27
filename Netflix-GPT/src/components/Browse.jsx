import { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';
function Browse() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
            }
            else {
                dispatch(removeUser())
            }
        })
    }, [])
    const signOutFunction = () => {
        signOut(auth).then(() => {
            navigate('/')
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div className=''>
            <button className='border border-black bg-red-500  p-2 m-2 text-white' onClick={signOutFunction}>Sign out</button>
        </div>
    )
}

export default Browse
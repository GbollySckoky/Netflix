import React, {useRef} from 'react'
// import { auth } from '../../Firebase'

const SignIn = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const register = (e) => {
        e.preventDefault()
        // auth.createUsersWithEmailAndPassword(
        //     emailRef.current.value,
        //     passwordRef.current.value
        // )
        // then((authUser) => {
        //     console.log(authUser)
        // })
        // .catch((err) => {
        //     alert(err.message)
        // })
    }
    const signIn = (e) => {
        e.preventDefault()
    }
  return (
    <div className='signIn'>
        <form>
            <h1>Sign In</h1>
            <div>
                <input 
                    type="email" 
                    placeholder='Email Address' 
                    ref={emailRef}
                />
            </div>
            <div>
                <input 
                    type="password" 
                    placeholder='Password'
                    ref={passwordRef}
                />
            </div>
            <button 
                type='submit' 
                id='signIn_btn'
                onClick={signIn}>
                Sign In
            </button>
            <h4 className='gid'> 
                <span className='grey'>New to Netflix?</span>
                <span className='signIn_link' onClick={register}> Sign Up now.</span> 
            </h4>
        </form>
    </div>
  )
}

export default SignIn
import React from 'react'

const SignUp = () => {
    return (
        <div>
            <form>
                <h1>SignUp</h1>
                <p>signup to Continue</p>
                <label>UserName : <input type="text" placeholder='Name' /> </label>
                <label>Email : <input type="email" placeholder='Email' /></label>
                <label>Password : <input type="password" placeholder='Password' /></label>
                <button>Signup</button>
                <input type="checkbox" /> <p>Remember me</p>
            </form>
        </div>
    )
}

export default SignUp
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProviders';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from './firebase/firebase.config';

const Login = () => {
    const auth = getAuth(app);

    //sign in by google
    const googleProvider = new GoogleAuthProvider();
    const handleLoginWithGoogle =()=>{
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            const user = result.user;
            console.log(user)
        })
        .catch(error=>{
            const errorMessage = error.message;
        })
    }

    //sign in by github;
    const githubProvider = new GithubAuthProvider();
    const handleGithubSignIn =()=>{
        signInWithPopup(auth, githubProvider)
        .then(result=>{
            const user = result.user;
            console.log(user)
        })
        .catch(error=>{
            const errorMessage = error.message;
            console.log('error', error.message )
        })
    }

    const {logIn} =useContext(AuthContext);
    const handleLogin =(event)=>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
        .then(result=>{
            const loggedUser =result.user;
            console.log(loggedUser)
            form.reset()
           
        })
        .catch(error=>{
            console.log(error.message)
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 pt-10">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Please Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <label className="label">
                                    <a href="#" className="label-text-alt ">Don't have account? <Link className='link link-hover' to='/register'>Registration</Link></a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className='text-center'>
                            <div  className=" mt-6">
                                <button onClick={handleLoginWithGoogle} className="btn btn-sm">Login by Google</button>
                            </div>
                            <div className=" my-6">
                                <button onClick={handleGithubSignIn} className="btn btn-sm">Login by Github</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
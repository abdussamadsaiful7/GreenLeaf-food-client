import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProviders';

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess]= useState('');
    const { createUser } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value

        console.log(name, email, password, confirm);
        setError('');
        setSuccess('');
        if (password !== confirm) {
            setError("Your password did't match");
            return
        }
        else if (password.length < 6) {
            setError("Password must be 6 characters or longer")
            return
        }
        else{
            setSuccess('Registration successful!')
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
               
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 pt-20">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Please Registration!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='confirm' placeholder="Confirm password" className="input input-bordered" required />
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt ">Already have an account?
                                    <Link className='link link-hover' to='/login'>Login</Link></a>
                            </label>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className='ml-8 mb-4' style={{color:'red'}}>{error}</p>
                        <p className='ml-8 mb-4' style={{color:'green'}}>{success}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
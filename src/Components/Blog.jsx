import React from 'react';
import group_pic from '../assets/group_pic.jpg'
import ReactToPrint from 'react-to-print';
import { useRef } from 'react';

const Blog = () => {
    const ref = useRef();
    return (
        <div>

            <div className='print'>
                <div className='sss'>
                    <div ref={ref} className='a'>
                        <div className='mb-10'>
                            <h1 className='text-center my-8 text-3xl font-semibold bg-gray-200 py-4 mx-28 shadow-md '>Theory of Documentation 📝</h1>
                            <div className='bg-gray-200 lg:py-8 lg:mx-28'>
                                <div className='mx-14 my-4 bg-white shadow-md p-8'>
                                    <h1 className='text-md font-semibold'>🆀  Q1. Tell us the differences between uncontrolled and controlled components.</h1>
                                    <p className='text-gray-500'>✎ <span className="text-green-400 font-bold">Answer: </span>Now that we have understood both the controlled and uncontrolled components in react, let us look at a few key differences between them : <br /> (a).Controlled component - The parent component has held over the form data, moreover  The DOM itself holds control over the data of Uncontrolled component.<br /> (b).Controlled component does not maintain its internal state, moreover Uncontrolled component maintains its internal state.<br /> (c).Controlled component allows validation control, moreover Uncontrolled component does not allow validation control.</p>
                                </div>
                                <div className='mx-14 my-4 bg-white shadow-md p-8'>
                                    <h1 className='text-md font-semibold'>🆀  Q2. How to validate React props using PropTypes.
                                    </h1>
                                    <p className='text-gray-500'>✎ <span className="text-green-400 font-bold">Answer:
                                    </span>A Since parent components can pass down any data as props to child components, we need to validate the data type to ensure the child gets what it expects.</p>
                                </div>
                                <div className='mx-14 my-4 bg-white shadow-md p-8'>
                                    <h1 className='text-md font-semibold'>🆀  Q3. Tell us the difference between nodejs and express js.</h1>
                                    <p className='text-gray-500'>✎ <span className="text-green-400 font-bold">Answer:
                                    </span>NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>
                                </div>
                                <div className='mx-14 my-4 bg-white shadow-md p-8'>
                                    <h1 className='text-md font-semibold'>🆀  Q4. What is a custom hook, and why will you create a custom hook?</h1>
                                    <p className='text-gray-500'>✎ <span className="text-green-400 font-bold">Answer:
                                    </span>A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. That's it! If you have code in a component that you feel would make sense to extract, either for reuse elsewhere or to keep the component simpler, you can pull that out into a function.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center mb-4 '>
                    <ReactToPrint trigger={() => <button className='btn btn-xs btn-error text-white font-semibold'>Download Pdf</button>} content={() => ref.current} />
                </div>
            </div>
        </div>
    );
};

export default Blog;
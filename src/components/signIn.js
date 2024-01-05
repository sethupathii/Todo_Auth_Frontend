// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import '../styles/SignIn.css';
// import axios from 'axios';
// import { Helmet } from "react-helmet";


// const SignIn = () => {

//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//     });

//     const [showMessage, setShowMessage] = useState(false);
//     const [message, setMessage] = useState('');

//     // const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await axios.post(`https://todo-vl9r.onrender.com/signin/verify`, formData);
//             setMessage('Registration Link will be sent to your email, please check and update.');
//             setShowMessage(true);
//             console.log(response);

//             setFormData({
//                 name: '',
//                 email: '',
//                 password: '',
//             });
//         } catch (error) {
//             console.log('Error During Registration', error);
//         }
//     };

//     return (
//         <div className="body">
//             <Helmet key={Math.random()}>
//                 <title>Registration-Page</title>
//                 <meta name="description" content="signIn-page" />
//                 <meta property="og:site_name" content="Registration Page" />
//                 <meta property="og:title" content="Register" />
//                 <meta property="og:description" content="Registration page" />
//                 <meta property="og:image" content="https://albion-backend.s3.ap-south-1.amazonaws.com/properties/1b8fe7e708e2f24168dcc5dfbe71e638.jpg" />
//                 <meta property="og:type" content="website" />
//                 <meta property="og:image:type" content="image/jpg" />
//                 <meta property="og:image:width" content="300" />
//                 <meta property="og:image:height" content="300" />
//             </Helmet>
//             <div className="background">
//                 <form className="for" onSubmit={handleSubmit}>
//                     <h3>Create an Account</h3>
//                     <label htmlFor="name">Name:</label>
//                     <input type="text" id="name" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} required />
//                     <label htmlFor="username">Username</label>
//                     <input type="email" placeholder="Email" id="username" name="email" value={formData.email} onChange={handleChange} required />
//                     <label htmlFor="password">Password</label>
//                     <input type="password" placeholder="Password" id="password" name="password" value={formData.password} onChange={handleChange} required />
//                     <button >Register</button>
//                     <p>Already have an account <Link to="/login">Login</Link></p>

//                 </form>

//                 {showMessage && (
//                     <div className="message">
//                         <p>{message}</p>
//                         <button onClick={() => setShowMessage(false)}>Close</button>
//                     </div>
//                 )}
//             </div >
//         </div>
//     )
// }

// export default SignIn;



import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/SignIn.css';
import axios from 'axios';
// import { Helmet } from "react-helmet";
import MetaTags from 'react-meta-tags';

const SignIn = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState('');

    // const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`https://todo-vl9r.onrender.com/signin/verify`, formData);
            setMessage('Registration Link will be sent to your email, please check and update.');
            setShowMessage(true);
            console.log(response);

            setFormData({
                name: '',
                email: '',
                password: '',
            });
        } catch (error) {
            console.log('Error During Registration', error);
        }
    };

    return (
        <div className="body">
            <MetaTags key={Math.random()}>
                <title>Registration-Page</title>
                <meta name="description" content="signIn-page" />
                <meta property="og:site_name" content="Registration Page" />
                <meta property="og:title" content="Register" />
                <meta property="og:description" content="Registration page" />
                <meta property="og:image" content="https://albion-backend.s3.ap-south-1.amazonaws.com/properties/1b8fe7e708e2f24168dcc5dfbe71e638.jpg" />
                <meta property="og:type" content="website" />
                <meta property="og:image:type" content="image/jpg" />
                <meta property="og:image:width" content="300" />
                <meta property="og:image:height" content="300" />
            </MetaTags>
            <div className="background">
                <form className="for" onSubmit={handleSubmit}>
                    <h3>Create an Account</h3>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} required />
                    <label htmlFor="username">Username</label>
                    <input type="email" placeholder="Email" id="username" name="email" value={formData.email} onChange={handleChange} required />
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                    <button >Register</button>
                    <p>Already have an account <Link to="/login">Login</Link></p>

                </form>

                {showMessage && (
                    <div className="message">
                        <p>{message}</p>
                        <button onClick={() => setShowMessage(false)}>Close</button>
                    </div>
                )}
            </div >
        </div>
    )
}

export default SignIn;
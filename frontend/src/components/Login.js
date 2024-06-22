import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from '../api';

const Login = () => {
    const responseGoogle = async (response) => {
        const { credential } = response;
        try {
            const res = await axios.post('/auth/google', { tokenId: credential });
            console.log(res.data); // Handle successful login
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div className="google-login-button">
            <GoogleOAuthProvider clientId="944941422437-9utfkbp3cip1vuimiip45sollb90uvk3.apps.googleusercontent.com">
                <GoogleLogin
                    onSuccess={responseGoogle}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </GoogleOAuthProvider>
        </div>
    );
};

export default Login;

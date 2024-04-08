import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'
import './App.css'

function App() {
    const [user, setUser] = useState({})

    const refreshToken = async () => {
        try {
            const response = await axios.post(`/api/refresh`, { token: user.refreshToken })
            const { accessToken, refreshToken } = response.data;
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
            setUser({ ...user, accessToken, refreshToken });
            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    const axiosJWT = axios.create();
    axiosJWT.interceptors.request.use(
        async (config) => {
            let currentDate = new Date();
            const decodeToken = jwtDecode(user.accessToken)
            if (decodeToken.exp! * 1000 < currentDate.getTime()) {
                const data = await refreshToken();
                setUser({ ...user, accessToken: data.accessToken, refreshToken: data.refreshToken });
                axiosJWT.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`
            }
            return config
        }, (error) => Promise.reject(error)
    );

    const handleLogin = async () => {
        const response = await axios.post(`/api/login`, {
            "username": "Smith",
            "password": "111"
        });

        const { user, accessToken, refreshToken } = response.data;
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`

        setUser({ ...user, accessToken, refreshToken });
        //console.log(response.data);
    }

    const handleList = async () => {
        try {
            const response = (await axiosJWT.get(`/api/list`)).data
            console.log(response);
        } catch (error) { }
    }

    return (
        <>
            <div><button onClick={handleLogin}>Login</button></div>
            <div><button onClick={handleList}>List</button></div>
            <pre style={{ textAlign: 'left' }}>{JSON.stringify(user, null, 4)}</pre>
        </>
    )
}

export default App

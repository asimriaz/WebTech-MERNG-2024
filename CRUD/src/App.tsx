import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import CourseLIst from "./components/CourseLIst";

function App() {
	const [count, setCount] = useState(0);

    // useEffect(()=>{
    //     axios.get(`/api/msg`).then(res => console.log(res.data))
    // }, [])

	return (
		<>
        <CourseLIst />
		</>
	);
}

export default App;

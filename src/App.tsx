import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Comp from "./components";

function App() {
    // const SITE_KEY = "6LfYm48eAAAAALijNLawLq5AmM_-FdBaaqTzNlQV";

    // useEffect(() => {
    //     const script = document.createElement("script");
    //     script.src = "https://www.google.com/recaptcha/api.js?render=" + SITE_KEY;
    //     document.body.appendChild(script);
    // }, []);

    return (
        <div className="App">
            <Comp />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;

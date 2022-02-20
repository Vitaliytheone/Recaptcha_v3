import { useEffect } from "react";
import "./App.css";

function App() {
    const SITE_KEY = "6LfYm48eAAAAALijNLawLq5AmM_-FdBaaqTzNlQV";

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.google.com/recaptcha/api.js?render=" + SITE_KEY;
        document.body.appendChild(script);
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <button>Submit recaptcha</button>
            </header>
        </div>
    );
}

export default App;

import { useEffect } from "react";
import { useGetCaptchaToken } from "./hook/useGetCaptchaToken";
import "./App.css";

declare global {
    interface Window {
        grecaptcha: any;
    }
}

function App() {
    const SITE_KEY = "6LfYm48eAAAAALijNLawLq5AmM_-FdBaaqTzNlQV";
    const onGetToken = useGetCaptchaToken();

    const onSubmit = async () => {
        const token = await onGetToken(SITE_KEY);
        alert(token);
    };

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.google.com/recaptcha/api.js?render=" + SITE_KEY;
        document.body.appendChild(script);
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={onSubmit}>Submit recaptcha</button>
            </header>
        </div>
    );
}

export default App;

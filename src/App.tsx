import { useEffect } from "react";
import { useGetCaptchaToken } from "./hook/useGetCaptchaToken";
import { useGetInitialCaptcha } from "./hook/useInitialCaptcha";
import "./App.css";

declare global {
    interface Window {
        grecaptcha: any;
    }
}

function App() {
    const SITE_KEY = "6LfYm48eAAAAALijNLawLq5AmM_-FdBaaqTzNlQV";
    useGetInitialCaptcha(SITE_KEY);
    const onGetToken = useGetCaptchaToken();

    const onSubmit = async () => {
        const token = await onGetToken(SITE_KEY);
        alert(token);
    };

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={onSubmit}>Submit recaptcha</button>
            </header>
        </div>
    );
}

export default App;

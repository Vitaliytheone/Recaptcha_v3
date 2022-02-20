import { useEffect } from "react";

const Comp = () => {
    const SITE_KEY = "6LfYm48eAAAAALijNLawLq5AmM_-FdBaaqTzNlQV";

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.google.com/recaptcha/api.js?render=" + SITE_KEY;
        document.body.appendChild(script);
    }, []);

    return null;
};

export default Comp;

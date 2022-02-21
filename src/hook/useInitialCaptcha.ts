import { useEffect } from "react";

export const useGetInitialCaptcha = (key: string) => {
   useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.google.com/recaptcha/api.js?render=" + key;
        document.body.appendChild(script);
    }, [key]);
};

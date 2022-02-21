import { useEffect } from "react";

export const useGetInitialCaptcha = (key: string) => {
useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.google.com/recaptcha/api.js?render=" + key;
        script.id = "g-recaptcha-id";
        document.body.appendChild(script);

        // if we need recaptcha on the single page
        return () => {
            const scriptElem = document.getElementById("g-recaptcha-id");
            scriptElem!.remove();
            const recaptchaElems = document.getElementsByClassName("grecaptcha-badge");
            recaptchaElems[0].remove();
        };
    }, [key]);
};

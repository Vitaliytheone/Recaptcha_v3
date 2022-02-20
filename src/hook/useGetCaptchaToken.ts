import { useCallback } from "react";

export const useGetCaptchaToken = () => {
    return useCallback(
        async (key: string) => {
            let token = "";
            await window.grecaptcha.execute(key, {action: 'homepage'})
                    .then((res: string) => {
                        token = res;
            })
            return token;
        },
        [],
    );
};

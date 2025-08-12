// src/hooks/useSmoothScroll.ts
import { useCallback } from "react";

export const useSmoothScroll = () => {
    const scrollToId = useCallback((id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }, []);

    return scrollToId;
};

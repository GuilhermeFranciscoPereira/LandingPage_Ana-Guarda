'use client';
import AOS from 'aos';
import { useEffect } from "react";

export default function ScrollAnimation(): null {
    useEffect(() => {
        AOS.init({
            once: false,
            mirror: true,
            offset: 10,
            duration: 1000,
            easing: "ease-out"
        });

        return () => {
            AOS.refresh();
        };
    }, []);

    return null;
}
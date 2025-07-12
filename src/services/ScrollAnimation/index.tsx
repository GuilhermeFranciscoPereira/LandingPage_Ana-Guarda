'use client';
import AOS from 'aos';
import { useEffect } from "react";

export default function ScrollAnimation(): null {
    useEffect(() => {
        AOS.init({
            once: false,
            mirror: true,
            offset: 100,
            easing: "ease-in-out"
        });

        return () => {
            AOS.refresh();
        };
    }, []);

    return null;
}
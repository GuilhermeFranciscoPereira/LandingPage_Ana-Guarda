import { useEffect, useState } from "react";

type useHeaderProps = {
    modalIsOpen: boolean;
    doAnimation: boolean;
    fadeOut: boolean;
    isScrolled: boolean;
    toSetModalIsOpen: () => void;
}

export default function useHeader(): useHeaderProps {
    const [fadeOut, setFadeOut] = useState<boolean>(false);
    const [doAnimation, setDoAnimation] = useState<boolean>(false);
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    function toSetModalIsOpen(): void {
        setDoAnimation(!doAnimation)
        if (modalIsOpen) {
            //This is to get the necessary time to do the animation when close the menu of the routes
            setFadeOut(true);
            setTimeout(() => {
                setModalIsOpen(false);
                setFadeOut(false);
            }, 2200);
        } else {
            setModalIsOpen(true);
        }
    }

    useEffect(() => {
        const onScroll = (): void => {
            const limite = window.innerHeight * 0.1
            setIsScrolled(window.scrollY > limite);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return { modalIsOpen, doAnimation, fadeOut, isScrolled, toSetModalIsOpen };
}
import { useState } from "react";

type useHeaderProps = {
    modalIsOpen: boolean;
    doAnimation: boolean;
    fadeOut: boolean;
    toSetModalIsOpen: () => void;
}

export default function useHeader(): useHeaderProps {
    const [fadeOut, setFadeOut] = useState<boolean>(false);
    const [doAnimation, setDoAnimation] = useState<boolean>(false);
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    function toSetModalIsOpen(): void {
        setDoAnimation(!doAnimation)
        if (modalIsOpen) {
            //This is to get the necessary time to do the animation when close the menu of the routes
            setFadeOut(true);
            setTimeout(() => {
                setModalIsOpen(false);
                setFadeOut(false);
            }, 1300);
        } else {
            setModalIsOpen(true);
        }
    }

    return { modalIsOpen, doAnimation, fadeOut, toSetModalIsOpen };
}
import { useEffect } from 'react';

export default function useAboutWhoAmI(): void {
    useEffect(() => {
        const styleSheet = document.createElement('style');
        styleSheet.type = 'text/css';
        styleSheet.innerText = `
            @keyframes scroll {
            0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(-50%);
                }
            }
        `;
        document.head.appendChild(styleSheet);

        const headlineScroll = document.getElementById('headline-scroll');
        if (headlineScroll) {
            const clone = headlineScroll.cloneNode(true) as HTMLElement;
            headlineScroll.parentNode?.appendChild(clone);

            const scrollWidth = headlineScroll.scrollWidth;
            headlineScroll.style.width = `${scrollWidth}px`;
            clone.style.width = `${scrollWidth}px`;
        }
    }, []);
};

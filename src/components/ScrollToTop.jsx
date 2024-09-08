import React, { useEffect, useState } from 'react';

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        setVisible(window.scrollY > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        visible && (
            <button id="scrollToTopBtn" onClick={scrollToTop}>
                ↑
            </button>
        )
    );
};

export default ScrollToTop;
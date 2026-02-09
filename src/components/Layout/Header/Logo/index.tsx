'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const texts = [
    'Chandresh AI Model',
    'Prajan AI Model',
    'Harish AI Model',
];

const TYPING_SPEED = 80;
const DELETING_SPEED = 50;
const HOLD_DELAY = 1200;

const Logo: React.FC = () => {
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[textIndex];
        let timeout: NodeJS.Timeout;

        if (!isDeleting && charIndex < currentText.length) {
        // Typing
        timeout = setTimeout(() => {
            setDisplayText(currentText.slice(0, charIndex + 1));
            setCharIndex(charIndex + 1);
        }, TYPING_SPEED);
        } else if (!isDeleting && charIndex === currentText.length) {
        // Pause before deleting
        timeout = setTimeout(() => {
            setIsDeleting(true);
        }, HOLD_DELAY);
        } else if (isDeleting && charIndex > 0) {
        // Deleting
        timeout = setTimeout(() => {
            setDisplayText(currentText.slice(0, charIndex - 1));
            setCharIndex(charIndex - 1);
        }, DELETING_SPEED);
        } else if (isDeleting && charIndex === 0) {
        // Move to next text
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, textIndex]);

    return (
        <Link href="/" className="no-underline">
            <h2
                className="
                font-bold tracking-wide
                text-xl sm:text-2xl
                text-blue-600 dark:text-cyan-400
                transition-colors duration-300
                cursor-pointer
                whitespace-nowrap
                "
            >
                {displayText}
                <span className="animate-pulse">|</span>
            </h2>
        </Link>
    );
};

export default Logo;
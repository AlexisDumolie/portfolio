import { useState, useEffect } from 'react';

const useKonamiCode = () => {
    const [isRetroMode, setIsRetroMode] = useState(false);
    const [sequence, setSequence] = useState<string[]>([]);
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown'];

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            const key = event.key;
            const newSequence = [...sequence, key];
            
            // Keep only the last 4 keys pressed
            if (newSequence.length > 4) {
                newSequence.shift();
            }
            
            setSequence(newSequence);

            // Check if the sequence matches the Konami code
            if (JSON.stringify(newSequence) === JSON.stringify(konamiCode)) {
                setIsRetroMode(prev => !prev);
                setSequence([]);
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [sequence]);

    return isRetroMode;
};

export default useKonamiCode;

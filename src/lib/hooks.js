import { useEffect } from 'react';

/**
 * When this is in a component, it will listen for key down events and call the callback function when it detects one.
 * 
 * @param {function} callback the function to call on a key down event
 */
export function keyDown(callback) {
    useEffect(() => {
        document.addEventListener("keydown", callback);

        // clean up
        return () => {
            ocument.removeEventListener("keydown", callback);
        };
    }, []);
}
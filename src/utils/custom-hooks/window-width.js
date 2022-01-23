import { useState, useLayoutEffect } from 'react';


//custom Hook to check window's width
const useWindowWidth = () => {
    const [width, setWidth] = useState([window.innerWidth]);

    useLayoutEffect(() => {

        const updateSize = () => {
            setWidth([window.innerWidth])
        }

        window.addEventListener('resize', updateSize)

        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return width;
}


export default useWindowWidth;
import React, { useState, useEffect } from 'react'

export const UIColors = {
    dark: {
        bg: 'rgb(21, 21, 43)',
        selected: 'rgb(34, 33, 36)',
        text: 'whitesmoke'
    },
    light: {
        bg: 'whitesmoke',
        selected: 'white',
        text: 'rgb(21, 21, 43)'
    }
}


export default function StyleManager() {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const { bg, selected, text } = (theme === 'dark' ? UIColors.dark : UIColors.light);
        document.body.style.backgroundColor = bg;
        document.body.style.color = text;
    }, [theme]);

    function changeTheme() {
            setTheme((theme === 'dark') ? 'light' : 'dark')
    }

    return (
        <div>
            <button onClick={()=>{changeTheme()}}>Change theme</button>
        </div>
    )
}

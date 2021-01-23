import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleLight, toggleDark } from '../actions';

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
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();
    

    useEffect(() => {
        const { bg, selected, text } = (theme === 'dark' ? UIColors.dark : UIColors.light);
        document.body.style.backgroundColor = bg;
        document.body.style.color = text;
    }, [theme]);

    function changeTheme() {
        console.log();
        dispatch(theme === 'light' ? toggleDark() : toggleLight());
    }

    return (
        <div>
            <button onClick={()=>{changeTheme()}}>Change theme</button>
        </div>
    )
}

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLight, toggleDark } from '../actions';


export default function UserThemeListener() {
    const [mode, setMode] = useState(
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"
    );

    const dispatch = useDispatch();
    // const theme = useSelector(state => state.theme);

    useEffect(() => {
        const modeMe = (e) => {
            setMode(e.matches ? "dark" : "light");
        }
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', modeMe);
        return window.matchMedia('(prefers-color-scheme: dark)').removeListener(modeMe);

    }, []);

    useEffect(() => {
        dispatch(mode === 'dark' ? toggleDark(): toggleLight());
    }, [mode]);

  
    return null;
}

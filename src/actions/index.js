export const toggleLight = () => {
    return {
        type: 'light'
    };
};

export const toggleDark = () => {
    return {
        type: 'dark'
    };
};
export const openApp = (data) => {
    console.log("called this");
    return {
        type: 'open-app',
        payload: data
    };
};

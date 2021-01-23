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

export const openApplication = (data) => {
    return {
        type: 'open-app',
        payload: data
    };
};

const toggleTheme = (state, action) => {
    switch (action.type) {
        case 'light':
            return 'light';
        case 'dark':
            return 'dark';
        default: {
            return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ?
                'dark' : 'light'
        }   
    }
};
export default toggleTheme;
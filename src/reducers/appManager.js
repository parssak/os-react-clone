const appManager = (state, action) => {
    switch (action.type) {
        case 'open-app':
            return [...state, action.payload] //new todos array 
        // case '@@INIT':
        //     return []
        default:
            return (state || []);
    }
};
export default appManager;
const appManager = (state, action) => {
    switch (action.type) {
        case 'open-app':
            return { // returning a copy of orignal state 
                ...state, //copying the original state
                apps: [...state.apps, action.payload] //new todos array 
            }
        default:
            console.log("hit this default");
            return {
                ...state, //copying the original state
                apps: [] //new todos array 
            }
    }
};
export default appManager;
const appManager = (state, action) => {
    switch (action.type) {
        case 'open-app':
            return [...state, action.payload] //new todos array 
        case 'quit-app': {
            console.log(action.appName);
            console.log("current apps:");
            console.log(state);
            let index = 0;
            let appIndex = -1;
            state.forEach(e => {
                if (e.name === action.appName) {
                    appIndex = index;
                }
                index++;
            })

            if (appIndex !== -1) {
                console.log("got him!", appIndex, state);
                const curr = state;
                console.log("curr", curr);
                curr.splice(appIndex, 1);
                console.log("new array");
                console.log(curr);
                return curr
            } else {
                console.log("didn't get him!!!!!!!");
                return state;
            }
        }
        default:
            return (state || []);
    }
};
export default appManager;
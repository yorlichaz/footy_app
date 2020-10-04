const getOnRouteChange = (setSignIn, setRoute) =>{
    return (route) =>{
        console.log(route);
        if(route === 'feed'){
            setSignIn(true);
        } else if(route === "signOut"){
            setSignIn(false);
        }
        setRoute(route);
    };
};

export default getOnRouteChange;
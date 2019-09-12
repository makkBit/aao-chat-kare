
const isAuthenticated = () => {
    return localStorage.getItem("token") !== null;
};

export default isAuthenticated;
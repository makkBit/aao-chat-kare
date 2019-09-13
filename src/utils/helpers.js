export const getUserNameFirstChar = () => {
    let username = localStorage.getItem('username');
    return username ? username[0] : "YOU";
}

export const getUserName = () => {
    let username = localStorage.getItem('username');
    return username ? username : "YOU";
}
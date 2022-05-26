  const logout = (setToken) => {
    window.localStorage.clear();
    setToken();
}
export default logout;
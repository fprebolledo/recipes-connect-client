function isLoggedIn (): boolean {
  const token = localStorage.getItem('token')
  return token !== null
}

export { isLoggedIn }

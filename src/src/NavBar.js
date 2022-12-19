const NavBar = ({user}) => {
  return (
    <>
    {!user && (
      <span><a href="/.auth/login/github">GitHub Login</a></span>
    )}
    {user && (
      <div>
        <p>
          <span>{user && user?.userDetails}</span>
          <span> <a href="/.auth/logout">Logout</a></span>
        </p>
      </div>
    )}
    </>
  )
}

export default NavBar;

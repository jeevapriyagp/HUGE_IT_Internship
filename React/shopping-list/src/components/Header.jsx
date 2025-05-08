// login or logout button/toggle component in the header

function Header({ isLoggedIn, toggleLogin }) 
{
    return (
      <button onClick={toggleLogin}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    );
}

export default Header;
  
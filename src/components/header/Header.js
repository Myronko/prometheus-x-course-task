import { useNavigate, Link } from "react-router-dom";
import cartImg from "./cart.svg";
import "./header.css";
export const Header = () => {
  const navigate = useNavigate();
  const userName = window.localStorage.getItem('userName');
  return(
    <>
      <h3 className="header-prometeus">“X-course task / Прізвище Ім’я”</h3>
      <hr className="top"/>
      <header className="header">
        <Link to="/"><h4 className="header-h4">JS BAND STORE / Your full name</h4></Link>
        {userName &&
          <form
          action=""
          method="post"
          className="header-form"
         >
            <Link to='/cart-complite'>
              <img
                src={cartImg}
                width="40px"
                height="40px"
                alt=""
              />
            </Link>
            <button
              className="header-out"
              onClick={() => {
                window.localStorage.clear();
                navigate('/');
                window.location.reload(false);
              }}
            >Sign-out
            </button>
            <input
              type="text"
              id="test-user"
              name="test-user"
              className="test-user-book"
            />
            <label for="test-user" className="user-name">{userName}</label>
          </form>
        }
      </header>
      <hr className="bottom"/>
    </>
  )
}
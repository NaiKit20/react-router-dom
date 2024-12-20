import { Link, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      MainLayout
      <br />
      <div>
        <nav>
          <ul>
            <li>
              <Link to="home">home</Link>
            </li>
            <li>
              <Link to="about">about</Link>
            </li>
            <li>
              <Link to="test">test</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default MainLayout;

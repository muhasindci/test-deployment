import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/blogs" className="nav-link">
        Blogs
      </NavLink>
      <NavLink to="/add-blog" className="nav-link">
        AddBlog
      </NavLink>
      <NavLink to="/contact" className="nav-link">
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;

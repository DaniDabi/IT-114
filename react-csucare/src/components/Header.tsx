import { FaHeartbeat, FaBars } from "react-icons/fa";
function Header() {
  return (
    <div className="App">
      {/* header section starts */}
      <header className="header">
        <a href="#" className="logo">
          <i className="fa">
            <FaHeartbeat />
          </i>{" "}
          <strong>CSU</strong>care
        </a>

        <nav className="navbar">
          <a href="#home" className="nav">
            home
          </a>
          <a href="#about" className="nav">
            about
          </a>
          <a href="#services" className="nav">
            services
          </a>
          <a href="#doctors" className="nav">
            doctors
          </a>
          <a href="#appointment" className="nav">
            appointment
          </a>
        </nav>
        <div id="menu-btn" className="fas fa-bars">
          <FaBars />
        </div>
      </header>
      {/* header section ends */}
      <section className="home" id="home">
        <div className="content">
          <h3>we take care of your healthy life</h3>
          <p>
            A person who has good physical health is likely to have bodily
            functions and processes working at their peak.
          </p>
          <a href="#appointment" className="btn">
            Make an Appointment
          </a>
        </div>
        <div className="image">
          <img src="home-img.svg" alt="" />
        </div>
      </section>
    </div>
  );
}

export default Header;

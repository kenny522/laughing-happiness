import React from "react";
function Nav(props) {
  const { pages, setCurrentPage, currentPage } = props;
  console.log(pages);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top px-3">
        <div className="container-fluid navPadding">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav justify-content-end">
              <ul className="navbar-nav justify-content-end">
                {pages.map((page) => (
                  <li key={page}>
                    <span
                      className={`nav-link text-end ${
                        currentPage.name === page.name && "navActive"
                      }`}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;

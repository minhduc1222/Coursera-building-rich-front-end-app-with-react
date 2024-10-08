const NavBar = () => {

    return (
        <nav className="navbar">
            <h1>the blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a className="/create" style={{
                    color: "white",
                    backgroundolor: "#f1356d",
                    borderRadius: "8px"
                }}>Newblog</a>
            </div>
        </nav>
    );
}

export default NavBar;
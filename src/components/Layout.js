import imagen from '../img/pngtree.png'

const Layout = () => {
    return (
        <>
        
        <nav className="navbar bg-warning">
            <div className="container-fluid">
                <a className="navbar-brand ketchum-font" href="./">
                <img src={imagen} alt="Logo" width="30" height="30" className="d-inline-block align-text-top"/>
                Pokémon
                </a>
            </div>
        </nav>
         
        </>
    )
}
export default Layout;
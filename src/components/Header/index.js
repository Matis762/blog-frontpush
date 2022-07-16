import logoSvg from '../../svg/logo.svg'

function Header() {

    const descLogo = 'Essa é a logo do blog';


    return (
        <>
            <header className='flex-space-between'>
                <div className='logo '>
                    <img src={logoSvg} alt={descLogo} />

                </div>

                <div className="search">
                    <input type='text'className='input-search' name='search' placeholder='Buscar artigos, podcast, destaques' />

                </div>


                <ul className='menu'>
                    <li> <a href='#' className='nav-link'>Categories</a> </li>
                    <li> <a href='#' className='nav-link'>About</a> </li>
                    <li> <a href='#' className='nav-link'>Contact</a> </li>
                </ul>


            </header>
        </>
    );
}

export default Header;
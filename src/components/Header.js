import Theme from './Theme';
import Order from './Order';
import Search from './Search';

const Header = () => {
    
    return (
        <header>
            <h1 className="montserrat-bold">Users</h1>
            <section id="header">
                <Theme />
                <Order />
                <Search />
            </section>
        </header>
    )
}   

export default Header

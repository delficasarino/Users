import { ApiProvider } from '../context/ApiContext';
import { ThemeProvider } from '../context/ThemeContext';
import { SearchProvider } from '../context/SearchContext';
import Header from './Header';
import Main from './Main';

export default function Users() {
    
    return (
        <div id="main">
            <ApiProvider>
                <SearchProvider>
                <ThemeProvider>
                        <Header />
                        <Main />
                </ThemeProvider>
                </SearchProvider>
            </ApiProvider>
        </div>
    )
}
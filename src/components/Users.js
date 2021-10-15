import { ApiProvider } from '../context/ApiContext';
import { ThemeProvider } from '../context/ThemeContext';
import { SearchProvider } from '../context/SearchContext';
import { ActualProvider } from '../context/ActualContext';
import { OrderProvider } from '../context/OrderContext';
import Header from './Header';
import Main from './Main';

export default function Users() {
    
    return (
        <div id="main">
            <ApiProvider>
                <ActualProvider>
                <OrderProvider>
                <SearchProvider>
                <ThemeProvider>
                        <Header />
                        <Main />
                </ThemeProvider>
                </SearchProvider>
                </OrderProvider>
                </ActualProvider>
            </ApiProvider>
        </div>
    )
}
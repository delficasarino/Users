import { createContext,useState } from "react"

const ThemeContext = createContext();

const actualTheme = 'list'
const ThemeProvider =  ({children}) => { 
    const [theme, setTheme] = useState(actualTheme);
    const handleTheme = (e) => {
        if (e.target.value === 'list') {
            setTheme('list');
        } else {
            setTheme('grid');
        }
    };
    const data = {handleTheme,theme}
    return (
        <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
    )
}

export {ThemeProvider}
export default ThemeContext;
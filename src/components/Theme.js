import {useContext} from 'react';
import ThemeContext from '../context/ThemeContext';

const Theme = () => {
    const {handleTheme} = useContext(ThemeContext)
    return (
        <section id="theme">
            <select name="theme" onChange={handleTheme} >
                <option value="list" id="list">Lista</option>
                <option value="grid" id="grid">Grilla</option>
            </select>
        </section>
    )
}

export default Theme

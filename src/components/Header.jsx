import './components.css';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav class="main-nav">
        
            <h3 class="header-title"><strong>plot twist</strong></h3>
            <div class="nav-links">
                <Link to="/">🏠︎ HOME</Link> 
                <Link to="/progress">✔ PROGRESS</Link>
                <Link to="/vocab">🗪 VOCAB</Link>
                <Link to="/about">🔎︎ ABOUT</Link>
            </div>
        </nav>
    )
}
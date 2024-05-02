import Main from "./Main.tsx"
import { Route, Routes, Link } from 'react-router-dom'

export default function Nav() {
    return(
        <>
        <nav>
            <Link to="/" className="nav-item">Homepage</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Main />} />
        </Routes>
        </>
    )
}
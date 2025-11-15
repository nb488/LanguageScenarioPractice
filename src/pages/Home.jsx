import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>Welcome to PlotTwist!!</h1>
            <p>Create and practice language learning using storytelling.</p>
            
            <Link
                to="/chat"
            >
                START
            </Link>
            
        </div>
    )
}
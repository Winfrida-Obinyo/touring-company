import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Destinations from "../components/destinations";
import "./safaris.css";

export default function safaris() {
    return (
        <div>
            <Navbar />
            <div className="mid">
            <Destinations />
            </div>
            <Footer />
        </div>
    )
}

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { useLocation } from 'react-router-dom';

export default function AppLayout({ children }) {
    const location = useLocation();
    
    const pagesWithPadding = 
    [
        '/accommodation', 
        '/game-drives', 
        '/beach-holidays', 
        '/mountain-climbing',
        '/cultural-visits',
        '/historical-visits',
        '/client-testimonial',
        '/contact',
    ];


    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <div><Navbar /></div>
            <main style={{ paddingTop: pagesWithPadding.includes(location.pathname) ? '81px' : '0' }}>
                {children}
            </main>
            <Footer />
        </div>
    );
}

import 'react';
import './Header.css';

const Header = ({ menuOpen, onMenuToggle, onMenuClose }) => {
    const navLinks = [
        { label: 'Home', href: '#' },
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Classes', href: '#classes' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        <div className="logo-icon">E</div>
                        <span>Elevate</span>
                    </div>

                    <nav className={`nav ${menuOpen ? 'active' : ''}`}>
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="nav-link"
                                onClick={onMenuClose}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="header-actions">
                        <button className="btn btn-primary">Get Started</button>
                        <button className="menu-toggle" onClick={onMenuToggle}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
import logo from '../assets/logo.png'

export default function Header() {
    return (
        <header>
        <img src={logo} alt='logo image' />
        <h2>Investment Calculator</h2>
        </header>
    )
}
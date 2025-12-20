import Logo from "../assets/logo.png";
import '../styles/home.css'
export default function SideLogo() {
  return (
    <div className="side-logo">
      <img src={Logo} alt="logo" />
      <LanguageSwitcher />
        <h2>
          <img src={Logo} width="100%"></img>
        </h2>

      
    </div>
  );
}

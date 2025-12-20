import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "../assets/logo.png";

export default function SideLogo() {
  return (
    <div className="side-logo">
      <img src={Logo} alt="logo" />
      <LanguageSwitcher />
    </div>
  );
}

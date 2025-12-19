import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "../assets/logo.png";

export default function SideLogo() {
  return (
    <div className="side-logo">
        <h2>
          <img src={Logo}></img>
        </h2>

      <LanguageSwitcher />
    </div>
  );
}

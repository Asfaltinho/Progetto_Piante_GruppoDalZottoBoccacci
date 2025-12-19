import LanguageSwitcher from "./LanguageSwitcher";

export default function SideLogo() {
  return (
    <div className="side-logo">
      <div className="logo-box">
        <h2>
          PLANT <br /> FINDER
        </h2>
      </div>

      <LanguageSwitcher />
    </div>
  );
}

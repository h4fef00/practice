import ButtonSidebar from "./ButtonSidebar";
import NavbarIcons from "./NavbarIcons";
function Navbar() {
  return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xxl flex flex-wrap items-center justify-between mx-auto p-2">
        <ButtonSidebar />
        <NavbarIcons />
      </div>
    </nav>
  );
}
export default Navbar;

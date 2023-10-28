import SideBar from "./side-bar/side-bar";
import Socials from "./socials/Socials";

const FixedComponents = () => {
  return (
    <>
      <div className="fixed-socials">
        <Socials />
      </div>
      <div className="fixed-side-bar">
        <SideBar />
      </div>
    </>
  );
};
export default FixedComponents;

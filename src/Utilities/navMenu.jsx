import useAuth from "../Hooks/useAuth";





const navMenu = () => {
  const { user } = useAuth();
  const navMenu = [
    {
      id: 1,
      title: "Home",
      path: "/",
      isVisible: true,
    },
    {
      id: 2,
      title: "Dashboard",
      path: "/dashboard",
      isVisible: user ? true : false,
    },
    {
      id: 3,
      title: "About Us",
      path: "/about-us",
      isVisible: true,
    },
    {
      id: 4,
      title: "Contact Us",
      path: "/contact-us",
      isVisible: true,
    },
  ];
  return navMenu;
};

export default navMenu;

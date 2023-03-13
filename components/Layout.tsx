import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className=" flex flex-col h-auto  items-center bg-[#F9F5F2]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

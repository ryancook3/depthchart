import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <header>Depth Chart</header>
      <main>
        <Sidebar />
        {children}
      </main>
    </>
  );
};

export default Layout;

import Header from "../../Containers/Header/Header";
import SideNav from "../../Containers/SideNav/SideNav";

type LayoutTypes = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutTypes) => {
  return (
    <section className="relative">
      <header className="fixed w-full top-0 height-134px z-10 ">
        <Header />
      </header>

      <main className="bg-grey-300 min-h-screen pt-headerMargin pb-10 pl-10 pr-10 flex items-start gap-16  relative">
        <div className="basis-sideNavWidth sticky top-headerMargin">
          <SideNav />
        </div>
        <div className="basis-full p-8 bg-white rounded">{children}</div>
      </main>
    </section>
  );
};

export default Layout;

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Providers } from "../providers";

const Mainlayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex  flex-col h-screen">
      <Header />
      <main className="flex-1 overflow-auto">
        <Providers>{children}</Providers>
      </main>
      <Footer />
    </div>
  );
};

export default Mainlayout;

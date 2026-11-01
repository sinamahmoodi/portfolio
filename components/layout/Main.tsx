import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

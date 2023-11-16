import Footer from "@/components/Footer";
const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-black-200 bg-opacity-50 ">
      <div className="mx-auto w-full bg-sky-100">{children}</div>
      <Footer />
    </main>
  );
};

export default LandingLayout;

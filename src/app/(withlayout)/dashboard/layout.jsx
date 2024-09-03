import Footer from "@/app/components/Shared/Footer";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <dir className="min-h-screen">{children}</dir>
      <Footer />
    </div>
  );
};

export default DashboardLayout;

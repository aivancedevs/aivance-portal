import logo from "@/assets/img/logo.png";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <img 
            src={logo} 
            alt="AIVANCE Logo" 
            className="h-8 w-auto"
          />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AIVANCE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const Footer = () => {
  return (
    <footer className="py-6 sm:py-8 border-t border-primary-foreground/10 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-primary-foreground/70 text-center">
            © {new Date().getFullYear()} AIVANCE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

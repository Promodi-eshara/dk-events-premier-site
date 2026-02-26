import logo from "@/assets/dk-logo.jpg";

const quickLinks = ["Home", "About", "Services", "Gallery", "Contact"];
const services = ["Corporate Events", "Weddings", "Concert Productions", "Destination Events"];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="DK Events" className="h-10 w-10 rounded object-cover" />
              <span className="font-display text-xl tracking-wider text-foreground">
                DK <span className="text-primary">Events</span>
              </span>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Creating unforgettable experiences through premium event planning and production.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-base font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-base font-semibold mb-4 text-primary">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-base font-semibold mb-4 text-primary">Contact</h4>
            <div className="space-y-2 font-body text-sm text-muted-foreground">
              <p>Info@dkevents.ae</p>
              <p>+971 58 635 4399</p>
              <p>Rigga Business Center, Office 1001</p>
              <p>Murqabat, Deira, Dubai, UAE</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="font-body text-xs text-muted-foreground tracking-wider">
            © 2026 DK Events. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

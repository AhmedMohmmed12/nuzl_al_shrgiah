import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center gold-glow">
                <span className="text-primary-foreground font-bold text-xl">ن</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">نزل الشرقية</h3>
                <p className="text-sm text-muted-foreground">للمقاولات</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              نبني المستقبل بأيدٍ سعودية محترفة. مؤسسة رائدة في مجال المقاولات والبناء في المنطقة الشرقية.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">روابط سريعة</h4>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-muted-foreground hover:text-primary transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  خدماتنا
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  مشاريعنا
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-lg">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+966563742892" className="text-muted-foreground hover:text-primary transition-colors" dir="ltr">
                  +966 56 374 2892
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:hisham4747.ha@gmail.com" className="text-muted-foreground hover:text-primary transition-colors break-all">
                  hisham4747.ha@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  المملكة العربية السعودية - المنطقة الشرقية
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} مؤسسة نزل الشرقية للمقاولات. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

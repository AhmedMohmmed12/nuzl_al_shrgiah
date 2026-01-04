import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero" />
      <div className="absolute inset-0 geometric-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <span className="text-sm text-primary font-medium">تواصل معنا</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            نحن هنا <span className="text-gradient">لخدمتك</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            تواصل معنا الآن لمناقشة مشروعك القادم والحصول على استشارة مجانية
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Phone Card */}
            <div className="bg-card-gradient rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 gold-glow">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">الهاتف</h4>
                  <a
                    href="tel:+966563742892"
                    className="text-lg text-foreground hover:text-primary transition-colors"
                    dir="ltr"
                  >
                    +966 56 374 2892
                  </a>
                  <p className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    السبت - الخميس، 8 صباحاً - 8 مساءً
                  </p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-card-gradient rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 gold-glow">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">البريد الإلكتروني</h4>
                  <a
                    href="mailto:hisham4747.ha@gmail.com"
                    className="text-foreground hover:text-primary transition-colors break-all"
                  >
                    hisham4747.ha@gmail.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    نرد على رسائلك خلال 24 ساعة
                  </p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-card-gradient rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 gold-glow">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">الموقع</h4>
                  <p className="text-foreground">المملكة العربية السعودية</p>
                  <p className="text-muted-foreground">المنطقة الشرقية</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-card-gradient rounded-3xl p-8 border border-border/50"
            >
              <h3 className="text-2xl font-bold mb-6">أرسل لنا رسالة</h3>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">الاسم الكامل</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="أدخل اسمك"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">رقم الجوال</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="05xxxxxxxx"
                    dir="ltr"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="example@email.com"
                  dir="ltr"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">رسالتك</label>
                <textarea
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  rows={4}
                  placeholder="اكتب تفاصيل مشروعك أو استفسارك..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <Button variant="hero" size="xl" className="w-full">
                <Send className="w-5 h-5" />
                إرسال الرسالة
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

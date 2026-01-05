import { Button } from "@/components/ui/button";
import { ArrowDown, Building2, Droplets, Truck } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="absolute inset-0 geometric-pattern opacity-50" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 floating hidden lg:flex items-center justify-center">
        <Building2 className="w-10 h-10 text-primary" />
      </div>
      <div className="absolute bottom-1/3 left-10 w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 floating-delayed hidden lg:flex items-center justify-center">
        <Droplets className="w-8 h-8 text-accent" />
      </div>
      <div className="absolute top-1/2 left-1/4 w-14 h-14 rounded-xl bg-primary/5 border border-primary/10 floating hidden xl:flex items-center justify-center">
        <Truck className="w-7 h-7 text-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">مؤسسة رائدة في المقاولات</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 animate-fade-up delay-100">
            <span className="text-foreground">نبني </span>
            <span className="text-gradient">المستقبل</span>
            <br />
            <span className="text-foreground">بأيدٍ سعودية محترفة</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up delay-200">
            مؤسسة نزل الشرقية للمقاولات - خبرة واسعة في تنفيذ المشاريع السكنية والتجارية
            بأعلى معايير الجودة والاحترافية في المنطقة الشرقية
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">احصل على عرض سعر </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#services">استعرض خدماتنا</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 mb-24 animate-fade-up delay-400">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-gradient mb-2">+20</div>
              <div className="text-sm text-muted-foreground">سنوات الخبرة</div>
            </div>
            <div className="text-center border-x border-border/50">
              <div className="text-3xl md:text-4xl font-black text-gradient mb-2">+450</div>
              <div className="text-sm text-muted-foreground">مشروع منجز</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-gradient mb-2">+100</div>
              <div className="text-sm text-muted-foreground">عميل راضٍ</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce z-10">
        <a href="#services" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-sm">اسحب للأسفل</span>
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

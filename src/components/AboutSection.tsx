import { CheckCircle2, Award, Clock, Users, Wallet } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const features = [
  {
    icon: Award,
    title: "جودة مضمونة",
    description: "نستخدم أفضل المواد ونطبق أعلى معايير الجودة",
  },
  {
    icon: Clock,
    title: "التزام بالمواعيد",
    description: "نحرص على تسليم المشاريع في الوقت المحدد",
  },
  {
    icon: Users,
    title: "فريق محترف",
    description: "مهندسون وفنيون ذوو خبرة وكفاءة عالية",
  },
  {
    icon: Wallet,
    title: "أسعار تنافسية",
    description: "نقدم أفضل قيمة مقابل استثمارك",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero" />
      <div className="absolute inset-0 geometric-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroBg}
                alt="مشروع نزل الشرقية"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-card-gradient border border-border rounded-2xl p-6 shadow-2xl gold-glow">
              <div className="text-4xl font-black text-gradient mb-2">+20</div>
              <div className="text-sm text-muted-foreground">عاماً من الخبرة</div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl border-2 border-primary/30" />
            <div className="absolute -bottom-4 right-1/4 w-16 h-16 rounded-xl bg-primary/10" />
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <span className="text-sm text-primary font-medium">من نحن</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black mb-6">
              مؤسسة <span className="text-gradient">نزل الشرقية</span> للمقاولات
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              شركة رائدة في مجال المقاولات والبناء في المملكة العربية السعودية.
              نتميز بخبرة واسعة في تنفيذ المشاريع السكنية والتجارية بأعلى معايير الجودة والاحترافية.
            </p>

            <p className="text-muted-foreground mb-10 leading-relaxed">
              نؤمن بأن كل مشروع هو فرصة لتقديم الأفضل، ولذلك نلتزم بتوفير حلول متكاملة تجمع بين الابتكار
              والدقة والالتزام بالمواعيد.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

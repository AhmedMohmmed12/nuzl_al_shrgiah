import { Building2, Home, Droplets, Truck, Wrench, Handshake } from "lucide-react";
import serviceFinishing from "@/assets/service-finishing.jpg";
import serviceWater from "@/assets/service-water.jpg";
import serviceEquipment from "@/assets/service-equipment.jpg";
import serviceRealestate from "@/assets/service-realestate.jpg";
import serviceDrilling from "@/assets/service-drilling.jpg";

const services = [
  {
    icon: Truck,
    title: "بيع وتأجير المعدات الثقيلة",
    description: "توفير وتأجير مولدات كهربائية ومعدات ثقيلة للمشاريع الإنشائية بأحدث التقنيات",
    image: serviceEquipment,
  },
  {
    icon: Home,
    title: "مقاولات تشطيب المباني",
    description: "تنفيذ أعمال التشطيبات الداخلية والخارجية للمباني السكنية والتجارية بأعلى معايير الجودة",
    image: serviceFinishing,
  },
  {
    icon: Handshake,
    title: "الوساطة العقارية",
    description: "خدمات الوساطة العقارية المتكاملة لبيع وشراء وتأجير العقارات بمصداقية واحترافية",
    image: serviceRealestate,
  },
  {
    icon: Droplets,
    title: "خدمات المياه المتكاملة",
    description: "توريد المياه، تمديدات شبكات المياه، حفر الآبار، وصيانة أنظمة المياه",
    image: serviceWater,
  },
  {
    icon: Building2,
    title: "حفر الآبار الارتوازية",
    description: "خدمات حفر الآبار بمعدات حديثة وفريق متخصص ذو خبرة واسعة",
    image: serviceDrilling,
  },
  {
    icon: Wrench,
    title: "الصيانة والترميم",
    description: "خدمات الصيانة الدورية وترميم المباني بكفاءة عالية واحترافية",
    image: serviceFinishing,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 geometric-pattern opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <span className="text-sm text-primary font-medium">خدماتنا المتميزة</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            نقدم مجموعة شاملة من{" "}
            <span className="text-gradient">خدمات المقاولات</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            حلول متكاملة تجمع بين الابتكار والدقة والالتزام بالمواعيد
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card-gradient rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute bottom-4 right-4 w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg gold-glow">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-2xl transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

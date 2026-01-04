import serviceFinishing from "@/assets/service-finishing.jpg";
import serviceWater from "@/assets/service-water.jpg";
import serviceEquipment from "@/assets/service-equipment.jpg";
import serviceDrilling from "@/assets/service-drilling.jpg";

const projects = [
  {
    title: "محطات تحلية المياه",
    category: "خدمات المياه",
    description: "توريد وتركيب محطات تحلية مياه بأحدث التقنيات وأعلى معايير الجودة",
    image: serviceWater,
  },
  {
    title: "تمديدات وشبكات المياه",
    category: "البنية التحتية",
    description: "تصميم وتنفيذ شبكات توزيع المياه وأنظمة التمديدات المتكاملة",
    image: serviceWater,
  },
  {
    title: "حفر الآبار الارتوازية",
    category: "خدمات الحفر",
    description: "خدمات حفر الآبار بمعدات حديثة وفريق متخصص ذو خبرة واسعة",
    image: serviceDrilling,
  },
  {
    title: "تشطيبات فاخرة",
    category: "التشطيب",
    description: "تنفيذ أعمال التشطيبات الداخلية والخارجية للمباني الفاخرة",
    image: serviceFinishing,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 geometric-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <span className="text-sm text-primary font-medium">معرض أعمالنا</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            مشاريع <span className="text-gradient">متميزة</span> نفخر بها
          </h2>
          <p className="text-lg text-muted-foreground">
            نماذج من أعمالنا التي تعكس التزامنا بالجودة والاحترافية
          </p>
        </div>

        {/* Projects Grid - Bento Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Project Card */}
          <div className="lg:col-span-2 group relative rounded-3xl overflow-hidden h-[400px]">
            <img
              src={projects[0].image}
              alt={projects[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                {projects[0].category}
              </span>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                {projects[0].title}
              </h3>
              <p className="text-muted-foreground">{projects[0].description}</p>
            </div>
          </div>

          {/* Regular Project Cards */}
          {projects.slice(1).map((project, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden h-[400px]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

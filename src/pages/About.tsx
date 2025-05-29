
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const About = () => {
  const [activeStory, setActiveStory] = useState(0);

  const storyMilestones = [
    {
      year: "2018",
      title: "The Beginning",
      description: "Founded with a vision to bring sustainable, bohemian fashion to conscious consumers worldwide.",
      image: "photo-1523712999610-f77fbcfc3843"
    },
    {
      year: "2019",
      title: "Ethical Partnerships",
      description: "Established partnerships with fair-trade artisans and sustainable fabric producers across the globe.",
      image: "photo-1500673922987-e212871fec22"
    },
    {
      year: "2020",
      title: "Digital Growth",
      description: "Launched our online platform, making boho-chic fashion accessible to customers everywhere.",
      image: "photo-1482881497185-d4a9ddbe4151"
    },
    {
      year: "2021",
      title: "Community Impact",
      description: "Started our artisan support program, directly benefiting over 200 craftspeople in developing regions.",
      image: "photo-1509316975850-ff9c5deb0cd9"
    },
    {
      year: "2024",
      title: "Today",
      description: "Continuing to grow while staying true to our values of sustainability, ethics, and authentic style.",
      image: "photo-1465146344425-f00d5f5c8f07"
    }
  ];

  const teamMembers = [
    {
      name: "Maya Chen",
      role: "Founder & Creative Director",
      bio: "With a background in sustainable fashion and a passion for bohemian aesthetics, Maya founded Boho Vibes to create a more conscious fashion industry.",
      image: "photo-1494790108755-2616b612b6fd"
    },
    {
      name: "Aria Patel",
      role: "Head of Sustainability",
      bio: "Aria ensures every piece in our collection meets our strict environmental and ethical standards, working directly with our global artisan partners.",
      image: "photo-1507003211169-0a1dd7228f2d"
    },
    {
      name: "Luna Rodriguez",
      role: "Design Lead",
      bio: "Luna brings a unique blend of traditional craftsmanship and modern design sensibilities to every collection, creating timeless pieces with contemporary appeal.",
      image: "photo-1438761681033-6461ffad8d80"
    }
  ];

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-sage-50 via-cream-50 to-terracotta-50 texture-overlay relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-earth-800 mb-6 animate-slide-up">
            Our Story
          </h1>
          <p className="text-lg md:text-xl text-earth-600 max-w-3xl mx-auto leading-relaxed">
            Born from a dream to celebrate individual expression while honoring our planet, 
            Boho Vibes is more than a fashion brand—we're a movement toward conscious living.
          </p>
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-terracotta-300 rounded-full opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-sage-300 rounded-full opacity-40 animate-float-delayed"></div>
        <div className="absolute top-40 right-20 w-8 h-8 bg-earth-400 rounded-full opacity-50 animate-bounce-gentle"></div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-earth-800">
                Our Mission
              </h2>
              <p className="text-lg text-earth-600 leading-relaxed">
                We believe fashion should be a force for good. Every piece we create tells a story 
                of sustainable practices, fair wages, and respect for traditional craftsmanship.
              </p>
              <p className="text-lg text-earth-600 leading-relaxed">
                Our mission is to make ethical fashion accessible and beautiful, proving that 
                conscious choices don't mean compromising on style or quality.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-sage-50 rounded-xl">
                  <div className="text-2xl font-bold text-terracotta-600 mb-2">200+</div>
                  <div className="text-earth-700">Artisan Partners</div>
                </div>
                <div className="text-center p-4 bg-terracotta-50 rounded-xl">
                  <div className="text-2xl font-bold text-sage-600 mb-2">100%</div>
                  <div className="text-earth-700">Sustainable Materials</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=600&h=600&fit=crop"
                  alt="Sustainable fashion"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-sage-200 rounded-full opacity-70 animate-float"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-terracotta-200 rounded-full opacity-60 animate-float-delayed"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-earth-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-earth-800 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-earth-600 max-w-2xl mx-auto">
              From a small dream to a global community of conscious fashion lovers, 
              here's how we've grown while staying true to our values.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-sage-300 hidden lg:block"></div>
            
            <div className="space-y-12">
              {storyMilestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  onClick={() => setActiveStory(index)}
                >
                  {/* Content */}
                  <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                    <div className="flex items-center mb-4">
                      <span className="bg-terracotta-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-earth-800 mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-earth-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden lg:block w-6 h-6 bg-terracotta-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Image */}
                  <div className="flex-1">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={`https://images.unsplash.com/${milestone.image}?w=500&h=375&fit=crop`}
                        alt={milestone.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-earth-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-earth-600 max-w-2xl mx-auto">
              The passionate individuals behind Boho Vibes, working together to create 
              beautiful, sustainable fashion for the conscious consumer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/${member.image}?w=400&h=400&fit=crop&face`}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-earth-800 mb-2">{member.name}</h3>
                  <p className="text-terracotta-600 font-medium mb-4">{member.role}</p>
                  <p className="text-earth-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-sage-50 to-cream-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-earth-800 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-earth-600 max-w-2xl mx-auto">
              The principles that guide every decision we make, from design to delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Sustainability",
                description: "Using only eco-friendly materials and processes that protect our planet for future generations.",
                icon: "🌱"
              },
              {
                title: "Fair Trade",
                description: "Ensuring fair wages and safe working conditions for all our artisan partners worldwide.",
                icon: "🤝"
              },
              {
                title: "Quality",
                description: "Creating timeless pieces that last, reducing waste and promoting conscious consumption.",
                icon: "✨"
              },
              {
                title: "Authenticity",
                description: "Celebrating individual expression and the unique beauty of handcrafted, artisanal work.",
                icon: "🎨"
              }
            ].map((value, index) => (
              <div
                key={index}
                className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-earth-800 mb-4">{value.title}</h3>
                <p className="text-earth-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-terracotta-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Journey
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Be part of a movement that values people, planet, and beautiful design. 
            Together, we can make fashion a force for positive change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-terracotta-600 hover:bg-cream-50 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = '/catalog'}
            >
              Shop Our Collection
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-terracotta-600 px-8 py-4 rounded-full transition-all duration-300"
              onClick={() => window.location.href = '/lookbook'}
            >
              View Lookbook
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

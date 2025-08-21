import Navbar from '@/components/Navbar';
import { Heart, Users, Target, Sparkles } from 'lucide-react';

const About = () => {
  const team = [
    { name: 'Alex Chen', role: 'Product Designer', emoji: '🎨', color: 'bg-bubblegum-pink' },
    { name: 'Jamie Rodriguez', role: 'Developer', emoji: '💻', color: 'bg-sky-blue' },
    { name: 'Sam Taylor', role: 'Career Counselor', emoji: '🎯', color: 'bg-mint-green' },
    { name: 'Casey Kim', role: 'UX Researcher', emoji: '🔍', color: 'bg-sunshine-yellow' }
  ];

  const timeline = [
    { year: '2023', title: 'The Idea', description: 'Realized students need better career guidance', icon: '💡' },
    { year: '2024', title: 'Research Phase', description: 'Interviewed 500+ students and parents', icon: '📊' },
    { year: '2024', title: 'Development', description: 'Built the first version of Career Jodi', icon: '🚀' },
    { year: '2024', title: 'Launch', description: 'Helping students find their perfect career match!', icon: '🌟' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-lavender/10 via-white to-mint-green/10">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black mb-6 bounce-in">
              <span className="gradient-rainbow bg-clip-text text-transparent">About Career Jodi</span>
              <br />
              <span className="text-foreground text-2xl md:text-4xl">Making Career Dreams Come True! ✨</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We believe every student deserves to find a career they're passionate about, with the support of their family.
            </p>
          </div>

          {/* Mission Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-fun bounce-in">
              <div className="text-center mb-8">
                <div className="w-20 h-20 gradient-fun rounded-full flex items-center justify-center mx-auto mb-4 float">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 jiggle">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Bridge the Gap</h3>
                  <p className="text-muted-foreground">Connect student dreams with parent wisdom for better career decisions.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 jiggle" style={{ animationDelay: '0.5s' }}>
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Smart Matching</h3>
                  <p className="text-muted-foreground">Use advanced algorithms to find the perfect career fit for each student.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4 jiggle" style={{ animationDelay: '1s' }}>
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Make It Fun</h3>
                  <p className="text-muted-foreground">Transform career exploration into an exciting, engaging journey.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-center mb-12">
              <span className="gradient-fun bg-clip-text text-transparent">Meet Our Fun Team!</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <div 
                  key={member.name}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-fun hover:shadow-bounce transition-all duration-300 hover-bounce bounce-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-20 h-20 ${member.color} rounded-full flex items-center justify-center mx-auto mb-4 float`}>
                    <span className="text-3xl">{member.emoji}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black text-center mb-12">
              <span className="gradient-primary bg-clip-text text-transparent">Our Journey</span>
            </h2>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div 
                  key={item.year}
                  className="flex items-center gap-6 bounce-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Desktop Timeline */}
                  <div className="hidden md:flex items-center gap-6 w-full">
                    {index % 2 === 0 ? (
                      <>
                        <div className="flex-1 text-right">
                          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-fun hover:shadow-bounce transition-all duration-300">
                            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl mb-2 jiggle">
                            {item.icon}
                          </div>
                          <div className="text-primary font-bold text-lg">{item.year}</div>
                        </div>
                        <div className="flex-1"></div>
                      </>
                    ) : (
                      <>
                        <div className="flex-1"></div>
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-2xl mb-2 jiggle">
                            {item.icon}
                          </div>
                          <div className="text-accent font-bold text-lg">{item.year}</div>
                        </div>
                        <div className="flex-1">
                          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-fun hover:shadow-bounce transition-all duration-300">
                            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Mobile Timeline */}
                  <div className="md:hidden flex items-center gap-4 w-full">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-lg flex-shrink-0 jiggle">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-fun">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold">{item.title}</h3>
                          <span className="text-primary font-bold text-sm">{item.year}</span>
                        </div>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
import Navbar from '@/components/Navbar';
import { FunkyButton } from '@/components/ui/funky-button';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Plus, DollarSign, Briefcase, GraduationCap, TrendingUp } from 'lucide-react';

const CareerDetail = () => {
  const { id } = useParams();

  // Mock data - in real app this would come from API
  const careerData = {
    '1': {
      title: 'UX/UI Designer',
      icon: '🎨',
      description: 'Create beautiful, user-friendly digital experiences that people love to use every day.',
      longDescription: 'UX/UI Designers are the architects of digital experiences. They research user needs, create wireframes and prototypes, and design interfaces that are both beautiful and functional. This role combines creativity with problem-solving and requires understanding both human psychology and technology.',
      skills: ['Creative Thinking', 'Problem Solving', 'Adobe Creative Suite', 'Figma', 'User Research', 'Prototyping'],
      salary: '$65,000 - $120,000',
      education: 'Bachelor\'s degree in Design, HCI, or related field',
      growth: 'Excellent (13% growth expected)',
      funFact: '🎯 Did you know? The first computer mouse was designed by a UX pioneer in 1964!',
      workEnvironment: 'Modern offices, tech companies, remote work friendly',
      dayInLife: [
        'Research user needs and behaviors',
        'Create wireframes and mockups',
        'Collaborate with developers and product managers',
        'Test designs with real users',
        'Iterate and improve designs'
      ]
    }
  };

  const career = careerData[id as keyof typeof careerData] || careerData['1'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-bubblegum-pink/10 via-white to-mint-green/10">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-8">
            <Link to="/career-suggestions">
              <FunkyButton variant="outline" className="hover-bounce">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Careers
              </FunkyButton>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12 bounce-in">
              <div className="text-8xl mb-4 float">{career.icon}</div>
              <h1 className="text-4xl md:text-6xl font-black mb-6">
                <span className="gradient-fun bg-clip-text text-transparent">{career.title}</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                {career.description}
              </p>
              <FunkyButton variant="hero" size="lg" className="hover-bounce">
                <Plus className="w-6 h-6 mr-2" />
                Add to My Matches
              </FunkyButton>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-fun hover:shadow-bounce transition-all duration-300 hover-bounce bounce-in">
                <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Salary Range</h3>
                <p className="text-muted-foreground">{career.salary}</p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-fun hover:shadow-bounce transition-all duration-300 hover-bounce bounce-in" style={{ animationDelay: '0.1s' }}>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Education</h3>
                <p className="text-muted-foreground text-sm">{career.education}</p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-fun hover:shadow-bounce transition-all duration-300 hover-bounce bounce-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Job Growth</h3>
                <p className="text-muted-foreground text-sm">{career.growth}</p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-fun hover:shadow-bounce transition-all duration-300 hover-bounce bounce-in" style={{ animationDelay: '0.3s' }}>
                <div className="w-12 h-12 bg-fun rounded-full flex items-center justify-center mx-auto mb-3">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Environment</h3>
                <p className="text-muted-foreground text-sm">{career.workEnvironment}</p>
              </div>
            </div>

            {/* Content Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Skills Needed */}
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-fun bounce-in">
                <h2 className="text-3xl font-bold mb-6 text-center">
                  <span className="gradient-primary bg-clip-text text-transparent">Skills You'll Need</span>
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {career.skills.map((skill, index) => (
                    <div 
                      key={skill}
                      className="bg-primary/10 text-primary px-4 py-3 rounded-xl font-semibold text-center hover-bounce"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* A Day in the Life */}
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-fun bounce-in">
                <h2 className="text-3xl font-bold mb-6 text-center">
                  <span className="gradient-success bg-clip-text text-transparent">A Day in the Life</span>
                </h2>
                <ul className="space-y-3">
                  {career.dayInLife.map((activity, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-3 h-3 bg-success rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-foreground">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Fun Fact */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-fun text-center bounce-in mb-8">
              <h2 className="text-3xl font-bold mb-4">
                <span className="gradient-fun bg-clip-text text-transparent">Fun Fact!</span>
              </h2>
              <p className="text-xl text-foreground">{career.funFact}</p>
            </div>

            {/* Long Description */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-fun bounce-in">
              <h2 className="text-3xl font-bold mb-6 text-center">
                <span className="gradient-rainbow bg-clip-text text-transparent">What This Career is Really Like</span>
              </h2>
              <p className="text-lg text-foreground leading-relaxed">{career.longDescription}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CareerDetail;
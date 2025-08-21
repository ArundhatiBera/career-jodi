import Navbar from '@/components/Navbar';
import { FunkyButton } from '@/components/ui/funky-button';
import { Link } from 'react-router-dom';
import { Download, Compass, Star, TrendingUp, Heart } from 'lucide-react';

const StudentResults = () => {
  const careerMatches = [
    {
      id: 1,
      title: 'UX/UI Designer',
      match: 95,
      description: 'Create beautiful and user-friendly digital experiences',
      skills: ['Creativity', 'Problem Solving', 'Tech-Savvy'],
      icon: '🎨',
      color: 'gradient-fun'
    },
    {
      id: 2,
      title: 'Data Scientist',
      match: 88,
      description: 'Discover insights and patterns from complex data',
      skills: ['Analytics', 'Mathematics', 'Critical Thinking'],
      icon: '📊',
      color: 'gradient-primary'
    },
    {
      id: 3,
      title: 'Game Developer',
      match: 82,
      description: 'Build amazing games that people love to play',
      skills: ['Programming', 'Creativity', 'Storytelling'],
      icon: '🎮',
      color: 'gradient-success'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-mint-green/10 via-white to-bubblegum-pink/10">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="bounce-in">
              <div className="text-6xl mb-4">🎉</div>
              <h1 className="text-4xl md:text-6xl font-black mb-6">
                <span className="gradient-rainbow bg-clip-text text-transparent">Congratulations!</span>
                <br />
                <span className="text-foreground text-2xl md:text-4xl">Your Perfect Career Matches</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Based on your interests and your family's preferences, here are your top career matches!
              </p>
            </div>
          </div>

          {/* Results Cards */}
          <div className="max-w-4xl mx-auto space-y-6 mb-12">
            {careerMatches.map((career, index) => (
              <div 
                key={career.id}
                className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-fun hover:shadow-bounce transition-all duration-300 hover-bounce bounce-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Career Icon & Match */}
                  <div className="text-center">
                    <div className="text-6xl mb-2">{career.icon}</div>
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      <Star className="w-5 h-5 text-sunshine-yellow fill-current" />
                      <span className="text-2xl font-bold text-success">{career.match}%</span>
                    </div>
                    <span className="text-sm text-muted-foreground font-semibold">MATCH</span>
                  </div>

                  {/* Career Details */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl font-black mb-3 text-foreground">{career.title}</h3>
                    <p className="text-lg text-muted-foreground mb-4">{career.description}</p>
                    
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {career.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div>
                    <Link to={`/career-detail/${career.id}`}>
                      <FunkyButton variant="accent" className="whitespace-nowrap">
                        Learn More
                      </FunkyButton>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link to="/career-suggestions" className="w-full sm:w-auto">
                <FunkyButton variant="hero" size="lg" className="w-full">
                  <Compass className="w-6 h-6 mr-2" />
                  Explore More Careers
                </FunkyButton>
              </Link>
              
              <FunkyButton variant="outline" size="lg" className="w-full sm:w-auto">
                <Download className="w-6 h-6 mr-2" />
                Download PDF
              </FunkyButton>
            </div>

            {/* Motivational Message */}
            <div className="text-center p-6 bg-white/50 rounded-2xl shadow-fun">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <Heart className="w-6 h-6 text-accent" />
                <TrendingUp className="w-6 h-6 text-success" />
                <Heart className="w-6 h-6 text-bubblegum-pink" />
              </div>
              <p className="text-lg font-semibold text-foreground">
                Remember: These are suggestions to get you started on your journey. Your perfect career awaits! ✨
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentResults;
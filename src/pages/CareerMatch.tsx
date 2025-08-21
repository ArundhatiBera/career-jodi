import Navbar from '@/components/Navbar';
import { FunkyButton } from '@/components/ui/funky-button';
import { Link } from 'react-router-dom';
import { ChevronRight, BookOpen, Palette, Calculator, Stethoscope, Music, Code } from 'lucide-react';
import { useState } from 'react';

const CareerMatch = () => {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

  const subjects = [
    { id: 'science', name: 'Science', icon: Stethoscope, color: 'bg-mint-green' },
    { id: 'math', name: 'Mathematics', icon: Calculator, color: 'bg-sky-blue' },
    { id: 'art', name: 'Art & Design', icon: Palette, color: 'bg-bubblegum-pink' },
    { id: 'literature', name: 'Literature', icon: BookOpen, color: 'bg-lavender' },
    { id: 'music', name: 'Music', icon: Music, color: 'bg-sunshine-yellow' },
    { id: 'technology', name: 'Technology', icon: Code, color: 'bg-accent' }
  ];

  const toggleSubject = (id: string) => {
    setSelectedSubjects(prev => 
      prev.includes(id) 
        ? prev.filter(subj => subj !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-blue/10 via-white to-lavender/10">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black mb-6 bounce-in">
              <span className="gradient-fun bg-clip-text text-transparent">Career Match</span>
              <br />
              <span className="text-foreground text-2xl md:text-4xl">Tell us what excites you! 🌟</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select the subjects and activities that make you feel most excited and engaged.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Question */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-fun mb-8 bounce-in">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Which subjects excite you the most? (Select all that apply)
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {subjects.map((subject) => {
                  const Icon = subject.icon;
                  const isSelected = selectedSubjects.includes(subject.id);
                  
                  return (
                    <button
                      key={subject.id}
                      onClick={() => toggleSubject(subject.id)}
                      className={`
                        p-6 rounded-2xl border-3 transition-all duration-300 hover-bounce
                        ${isSelected 
                          ? 'border-primary bg-primary/10 shadow-bounce' 
                          : 'border-transparent bg-white/50 hover:border-primary/30 shadow-fun'
                        }
                      `}
                    >
                      <div className={`w-16 h-16 ${subject.color} rounded-full flex items-center justify-center mx-auto mb-4 ${isSelected ? 'jiggle' : ''}`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-lg">{subject.name}</h3>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Fun Illustration */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-4 p-6 bg-white/50 rounded-full shadow-fun">
                <div className="w-12 h-12 bg-sunshine-yellow rounded-full flex items-center justify-center float">
                  <span className="text-2xl">🎨</span>
                </div>
                <div className="w-12 h-12 bg-bubblegum-pink rounded-full flex items-center justify-center float" style={{ animationDelay: '0.5s' }}>
                  <span className="text-2xl">🔬</span>
                </div>
                <div className="w-12 h-12 bg-mint-green rounded-full flex items-center justify-center float" style={{ animationDelay: '1s' }}>
                  <span className="text-2xl">💡</span>
                </div>
              </div>
            </div>

            {/* Next Button */}
            <div className="text-center">
              <Link to="/parent-preferences">
                <FunkyButton 
                  variant="hero" 
                  size="lg" 
                  className={`${selectedSubjects.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={selectedSubjects.length === 0}
                >
                  Next: Parent Preferences
                  <ChevronRight className="w-6 h-6 ml-2" />
                </FunkyButton>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CareerMatch;
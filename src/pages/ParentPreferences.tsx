import Navbar from '@/components/Navbar';
import { FunkyButton } from '@/components/ui/funky-button';
import { Link } from 'react-router-dom';
import { ChevronRight, TrendingUp, Heart, Shield, Lightbulb } from 'lucide-react';
import { useState } from 'react';

const ParentPreferences = () => {
  const [preferences, setPreferences] = useState<Record<string, string>>({});

  const questions = [
    {
      id: 'priority',
      question: 'What matters most to you for your child\'s career?',
      options: [
        { id: 'stability', text: 'Job Security & Stability', icon: Shield, color: 'bg-success' },
        { id: 'creativity', text: 'Creative Expression', icon: Lightbulb, color: 'bg-bubblegum-pink' },
        { id: 'growth', text: 'Career Growth Potential', icon: TrendingUp, color: 'bg-sky-blue' },
        { id: 'passion', text: 'Following Their Passion', icon: Heart, color: 'bg-accent' }
      ]
    },
    {
      id: 'environment',
      question: 'What work environment would you prefer for your child?',
      options: [
        { id: 'office', text: 'Traditional Office Setting', icon: Shield, color: 'bg-primary' },
        { id: 'remote', text: 'Remote/Flexible Work', icon: Lightbulb, color: 'bg-mint-green' },
        { id: 'outdoor', text: 'Outdoor/Field Work', icon: TrendingUp, color: 'bg-sunshine-yellow' },
        { id: 'travel', text: 'Travel Opportunities', icon: Heart, color: 'bg-lavender' }
      ]
    }
  ];

  const handleAnswer = (questionId: string, answerId: string) => {
    setPreferences(prev => ({ ...prev, [questionId]: answerId }));
  };

  const canProceed = Object.keys(preferences).length === questions.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-lavender/10 via-white to-sunshine-yellow/10">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black mb-6 bounce-in">
              <span className="gradient-fun bg-clip-text text-transparent">Parent Preferences</span>
              <br />
              <span className="text-foreground text-2xl md:text-4xl">Your wisdom matters! 💙</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Help us understand what's important to your family when considering career paths.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {questions.map((question, index) => (
              <div 
                key={question.id} 
                className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-fun bounce-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h2 className="text-2xl font-bold mb-6 text-center">
                  {question.question}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {question.options.map((option) => {
                    const Icon = option.icon;
                    const isSelected = preferences[question.id] === option.id;
                    
                    return (
                      <button
                        key={option.id}
                        onClick={() => handleAnswer(question.id, option.id)}
                        className={`
                          p-6 rounded-2xl border-3 transition-all duration-300 hover-bounce text-left
                          ${isSelected 
                            ? 'border-primary bg-primary/10 shadow-bounce' 
                            : 'border-transparent bg-white/50 hover:border-primary/30 shadow-fun'
                          }
                        `}
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 ${option.color} rounded-full flex items-center justify-center ${isSelected ? 'jiggle' : ''}`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="font-bold text-lg">{option.text}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Fun Parent Illustration */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-4 p-6 bg-white/50 rounded-full shadow-fun">
                <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center float">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                </div>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center float" style={{ animationDelay: '0.5s' }}>
                  <span className="text-2xl">💭</span>
                </div>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center float" style={{ animationDelay: '1s' }}>
                  <span className="text-2xl">✨</span>
                </div>
              </div>
            </div>

            {/* Next Button */}
            <div className="text-center">
              <Link to="/student-results">
                <FunkyButton 
                  variant="hero" 
                  size="lg" 
                  className={`${!canProceed ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={!canProceed}
                >
                  See Results
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

export default ParentPreferences;
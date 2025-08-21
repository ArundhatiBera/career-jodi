import { Link } from 'react-router-dom';
import { FunkyButton } from '@/components/ui/funky-button';
import { Sparkles, Users, Target, Heart } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-blue/20 via-white to-mint-green/20">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-sunshine-yellow/30 rounded-full float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-bubblegum-pink/30 rounded-full float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-lavender/30 rounded-full float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-18 h-18 bg-mint-green/30 rounded-full float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="bounce-in">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="gradient-fun bg-clip-text text-transparent">
                Career Jodi
              </span>
              <br />
              <span className="text-foreground text-3xl md:text-5xl">
                Find Your Perfect Career Match Together! 
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="bounce-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A fun, interactive journey where students and parents discover amazing career paths that match dreams, skills, and family values! 🌟
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="bounce-in flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" style={{ animationDelay: '0.4s' }}>
            <Link to="/career-match">
              <FunkyButton variant="hero" size="lg" className="w-full sm:w-auto">
                <Sparkles className="w-6 h-6 mr-2" />
                Start Matching
              </FunkyButton>
            </Link>
            <Link to="/about">
              <FunkyButton variant="outline" size="lg" className="w-full sm:w-auto">
                Learn More
              </FunkyButton>
            </Link>
          </div>

          {/* Feature Icons */}
          <div className="bounce-in grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col items-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm shadow-fun hover:shadow-bounce transition-all duration-300 hover-bounce">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 jiggle">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Student + Parent</h3>
              <p className="text-muted-foreground text-center">
                Both perspectives matter in finding the perfect career fit
              </p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm shadow-fun hover:shadow-bounce transition-all duration-300 hover-bounce">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4 jiggle" style={{ animationDelay: '0.5s' }}>
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Smart Matching</h3>
              <p className="text-muted-foreground text-center">
                Advanced algorithm finds careers that fit skills and interests
              </p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm shadow-fun hover:shadow-bounce transition-all duration-300 hover-bounce">
              <div className="w-16 h-16 bg-fun rounded-full flex items-center justify-center mb-4 jiggle" style={{ animationDelay: '1s' }}>
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fun Journey</h3>
              <p className="text-muted-foreground text-center">
                Engaging, colorful experience makes career discovery exciting
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
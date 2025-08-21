import { useState } from 'react';
import { FunkyButton } from '@/components/ui/funky-button';
import { useAuth } from '@/contexts/AuthContext';
import { Eye, EyeOff, Users, GraduationCap, Heart } from 'lucide-react';

const LoginScreen = () => {
  const [credentials, setCredentials] = useState({ id: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const success = await login(credentials.id, credentials.password);
      if (!success) {
        setError('Invalid credentials! Please check your ID and password.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = (role: 'student' | 'parent') => {
    const demoCredentials = {
      student: { id: 'student123', password: 'demo123' },
      parent: { id: 'parent123', password: 'demo123' }
    };
    
    setCredentials(demoCredentials[role]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-blue/20 via-white to-bubblegum-pink/20 flex items-center justify-center p-4">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-sunshine-yellow/30 rounded-full float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-mint-green/30 rounded-full float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-lavender/30 rounded-full float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-18 h-18 bg-bubblegum-pink/30 rounded-full float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="text-center mb-8 bounce-in">
          <div className="w-20 h-20 gradient-fun rounded-full flex items-center justify-center mx-auto mb-4 float">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-black mb-4">
            <span className="gradient-rainbow bg-clip-text text-transparent">Welcome to</span>
            <br />
            <span className="gradient-fun bg-clip-text text-transparent">Career Jodi!</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Please sign in to continue your career journey
          </p>
        </div>

        {/* Demo Quick Login Buttons */}
        <div className="mb-6 bounce-in" style={{ animationDelay: '0.2s' }}>
          <p className="text-center text-sm font-semibold text-muted-foreground mb-3">Quick Demo Access:</p>
          <div className="grid grid-cols-2 gap-3">
            <FunkyButton 
              variant="primary" 
              onClick={() => handleDemoLogin('student')}
              className="flex flex-col items-center py-4 h-auto"
            >
              <GraduationCap className="w-6 h-6 mb-1" />
              <span>Student Demo</span>
            </FunkyButton>
            <FunkyButton 
              variant="accent" 
              onClick={() => handleDemoLogin('parent')}
              className="flex flex-col items-center py-4 h-auto"
            >
              <Users className="w-6 h-6 mb-1" />
              <span>Parent Demo</span>
            </FunkyButton>
          </div>
        </div>

        <div className="text-center mb-4">
          <span className="text-sm text-muted-foreground">Or login manually:</span>
        </div>

        {/* Login Form */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-fun bounce-in" style={{ animationDelay: '0.4s' }}>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="id" className="block text-sm font-bold text-foreground mb-2">
                User ID
              </label>
              <input
                type="text"
                id="id"
                value={credentials.id}
                onChange={(e) => setCredentials(prev => ({ ...prev, id: e.target.value }))}
                className="w-full px-4 py-3 rounded-2xl border-2 border-primary/20 focus:border-primary focus:outline-none transition-colors"
                placeholder="Enter your ID"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold text-foreground mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                  className="w-full px-4 py-3 pr-12 rounded-2xl border-2 border-primary/20 focus:border-primary focus:outline-none transition-colors"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-3 text-destructive text-sm font-medium">
                {error}
              </div>
            )}

            <FunkyButton 
              type="submit" 
              variant="hero" 
              size="lg" 
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </FunkyButton>
          </form>

          {/* Demo Credentials Info */}
          <div className="mt-6 p-4 bg-primary/5 rounded-2xl">
            <h3 className="font-bold text-sm mb-2 text-center">Demo Credentials:</h3>
            <div className="text-xs space-y-1">
              <div><strong>Student:</strong> ID: student123, Password: demo123</div>
              <div><strong>Parent:</strong> ID: parent123, Password: demo123</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
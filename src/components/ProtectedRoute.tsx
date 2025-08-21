import { ReactNode } from 'react';
import { useAuth, UserRole } from '@/contexts/AuthContext';
import { FunkyButton } from '@/components/ui/funky-button';
import { Lock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles: UserRole[];
  fallbackMessage?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  allowedRoles, 
  fallbackMessage = "You don't have permission to access this page." 
}) => {
  const { user } = useAuth();

  if (!user || !allowedRoles.includes(user.role)) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-destructive/10 via-white to-muted/20 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-6 jiggle">
            <Lock className="w-10 h-10 text-destructive" />
          </div>
          
          <h1 className="text-3xl font-bold mb-4 text-foreground">
            Access Denied
          </h1>
          
          <p className="text-lg text-muted-foreground mb-6">
            {fallbackMessage}
          </p>

          <div className="space-y-3">
            <p className="text-sm font-semibold">
              Current Role: {user?.role ? (
                <span className="capitalize text-primary">{user.role}</span>
              ) : (
                <span className="text-muted-foreground">Not logged in</span>
              )}
            </p>
            <p className="text-sm text-muted-foreground">
              Required Role: {allowedRoles.join(' or ')}
            </p>
          </div>

          <div className="mt-8">
            <Link to="/">
              <FunkyButton variant="primary">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back Home
              </FunkyButton>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
import Navbar from '@/components/Navbar';
import { FunkyButton } from '@/components/ui/funky-button';
import { Mail, MessageCircle, Phone, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thanks for your message! We\'ll get back to you soon! 🎉');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-blue/10 via-white to-bubblegum-pink/10">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black mb-6 bounce-in">
              <span className="gradient-rainbow bg-clip-text text-transparent">Let's Talk!</span>
              <br />
              <span className="text-foreground text-2xl md:text-4xl">We'd Love to Hear from You! 💬</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions, suggestions, or just want to say hi? Drop us a message and we'll get back to you faster than you can say "Career Jodi"!
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-fun bounce-in">
                <h2 className="text-3xl font-bold mb-6 text-center">
                  <span className="gradient-fun bg-clip-text text-transparent">Send us a Message</span>
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-foreground mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-primary/20 focus:border-primary focus:outline-none transition-colors"
                      placeholder="Enter your awesome name!"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-primary/20 focus:border-primary focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-foreground mb-2">
                      What's this about? *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-primary/20 focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Choose a topic...</option>
                      <option value="general">General Question</option>
                      <option value="bug">Found a Bug 🐛</option>
                      <option value="feature">Feature Request ✨</option>
                      <option value="feedback">Feedback & Suggestions</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="other">Something Else</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-primary/20 focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>

                  <FunkyButton type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="w-6 h-6 mr-2" />
                    Send Message
                  </FunkyButton>
                </form>
              </div>
            </div>

            {/* Contact Info & Fun Elements */}
            <div className="order-1 lg:order-2">
              {/* Contact Cards */}
              <div className="space-y-6 mb-8">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-fun hover:shadow-bounce transition-all duration-300 hover-bounce bounce-in">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center jiggle">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Email Us</h3>
                      <p className="text-muted-foreground">hello@careerjodi.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-fun hover:shadow-bounce transition-all duration-300 hover-bounce bounce-in" style={{ animationDelay: '0.1s' }}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center jiggle" style={{ animationDelay: '0.5s' }}>
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Live Chat</h3>
                      <p className="text-muted-foreground">Available 9 AM - 5 PM EST</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-fun hover:shadow-bounce transition-all duration-300 hover-bounce bounce-in" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center jiggle" style={{ animationDelay: '1s' }}>
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Call Us</h3>
                      <p className="text-muted-foreground">1-800-CAREER-J</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fun Doodle Section */}
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 text-center shadow-fun bounce-in" style={{ animationDelay: '0.3s' }}>
                <div className="mb-6">
                  <div className="inline-flex items-center space-x-4">
                    <div className="w-16 h-16 bg-sunshine-yellow rounded-full flex items-center justify-center float">
                      <span className="text-3xl">🚀</span>
                    </div>
                    <div className="w-16 h-16 bg-bubblegum-pink rounded-full flex items-center justify-center float" style={{ animationDelay: '0.5s' }}>
                      <span className="text-3xl">💫</span>
                    </div>
                    <div className="w-16 h-16 bg-mint-green rounded-full flex items-center justify-center float" style={{ animationDelay: '1s' }}>
                      <span className="text-3xl">✨</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 gradient-fun bg-clip-text text-transparent">
                  We're Here to Help!
                </h3>
                <p className="text-muted-foreground">
                  Our team typically responds within 24 hours. We can't wait to help make your career dreams come true!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
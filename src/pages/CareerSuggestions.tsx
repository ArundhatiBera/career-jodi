import Navbar from '@/components/Navbar';
import { FunkyButton } from '@/components/ui/funky-button';
import { Link } from 'react-router-dom';
import { Search, Filter, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const CareerSuggestions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const careers = [
    { id: 1, title: 'Software Developer', category: 'technology', icon: '💻', description: 'Build apps and websites' },
    { id: 2, title: 'Graphic Designer', category: 'creative', icon: '🎨', description: 'Create visual communications' },
    { id: 3, title: 'Doctor', category: 'healthcare', icon: '👩‍⚕️', description: 'Help people stay healthy' },
    { id: 4, title: 'Teacher', category: 'education', icon: '👨‍🏫', description: 'Inspire and educate students' },
    { id: 5, title: 'Engineer', category: 'technology', icon: '🔧', description: 'Design and build solutions' },
    { id: 6, title: 'Artist', category: 'creative', icon: '🖌️', description: 'Express through visual art' },
    { id: 7, title: 'Nurse', category: 'healthcare', icon: '👩‍⚕️', description: 'Provide patient care' },
    { id: 8, title: 'Musician', category: 'creative', icon: '🎵', description: 'Create and perform music' },
    { id: 9, title: 'Scientist', category: 'science', icon: '🔬', description: 'Discover and research' },
    { id: 10, title: 'Chef', category: 'hospitality', icon: '👨‍🍳', description: 'Create delicious dishes' },
    { id: 11, title: 'Pilot', category: 'transportation', icon: '✈️', description: 'Fly aircraft safely' },
    { id: 12, title: 'Veterinarian', category: 'healthcare', icon: '🐕‍🦺', description: 'Care for animals' }
  ];

  const categories = [
    { id: 'all', name: 'All Careers', color: 'bg-primary' },
    { id: 'technology', name: 'Technology', color: 'bg-sky-blue' },
    { id: 'creative', name: 'Creative', color: 'bg-bubblegum-pink' },
    { id: 'healthcare', name: 'Healthcare', color: 'bg-mint-green' },
    { id: 'education', name: 'Education', color: 'bg-sunshine-yellow' },
    { id: 'science', name: 'Science', color: 'bg-lavender' },
    { id: 'hospitality', name: 'Hospitality', color: 'bg-accent' },
    { id: 'transportation', name: 'Transportation', color: 'bg-fun' }
  ];

  const filteredCareers = careers.filter(career => {
    const matchesSearch = career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         career.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || career.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-sunshine-yellow/10 via-white to-sky-blue/10">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black mb-6 bounce-in">
              <span className="gradient-fun bg-clip-text text-transparent">Career Explorer</span>
              <br />
              <span className="text-foreground text-2xl md:text-4xl">Discover Amazing Careers! 🚀</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore hundreds of exciting career paths and find the one that sparks your curiosity!
            </p>
          </div>

          {/* Search & Filters */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-fun">
              {/* Search Bar */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search careers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-primary/20 focus:border-primary focus:outline-none text-lg"
                />
              </div>

              {/* Category Filter */}
              <div>
                <div className="flex items-center mb-4">
                  <Filter className="w-5 h-5 text-muted-foreground mr-2" />
                  <span className="font-semibold text-foreground">Filter by Category:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover-bounce ${
                        selectedCategory === category.id
                          ? `${category.color} text-white shadow-bounce`
                          : 'bg-white/50 text-foreground hover:bg-primary/10'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Career Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCareers.map((career, index) => (
                <Link
                  key={career.id}
                  to={`/career-detail/${career.id}`}
                  className="group"
                >
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-fun hover:shadow-bounce transition-all duration-300 hover-bounce bounce-in group-hover:scale-105">
                    <div className="text-center">
                      <div className="text-4xl mb-3 group-hover:jiggle">{career.icon}</div>
                      <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {career.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">{career.description}</p>
                      <div className="flex items-center justify-center text-primary font-semibold">
                        <span className="mr-2">Learn More</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* No Results */}
            {filteredCareers.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold mb-2">No careers found</h3>
                <p className="text-muted-foreground mb-6">Try adjusting your search or filter options</p>
                <FunkyButton 
                  variant="primary" 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                >
                  Show All Careers
                </FunkyButton>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CareerSuggestions;
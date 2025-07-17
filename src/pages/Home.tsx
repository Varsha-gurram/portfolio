import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Code, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/PortfolioImage.jpg';

const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-sage/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-primary">
                <Sparkles className="h-5 w-5" />
                <span className="text-sm font-medium tracking-wide uppercase">Welcome to my world</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight">
                <span className="text-gradient-primary">Varshini</span>
                <br />
                <span className="text-foreground">Gurram</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-muted-foreground font-light max-w-2xl">
                Aspiring Software Developer building smart and beautiful digital solutions
              </p>
              
              <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  <span>Computer Science Student</span>
                </div>
                <div ></div>
                <div className="flex items-center gap-2">
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
              >
                <Link to="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-display font-bold text-primary">9.2</div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-display font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-display font-bold text-primary">1</div>
                <div className="text-sm text-muted-foreground">Internship</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <img
                src={heroImage}
                alt="Varshini Gurram"
                className="relative w-full max-w-lg mx-auto rounded-3xl shadow-elegant hover-lift"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Quick Intro Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">
            Building Tomorrow's Solutions Today
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            As a Computer Science undergraduate at SRM University with a passion for innovative technology, 
            I blend technical expertise with creative problem-solving to craft meaningful digital experiences. 
            From full-stack web development to AI-driven solutions, I'm committed to writing code that makes a difference.
          </p>
          <div className="mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
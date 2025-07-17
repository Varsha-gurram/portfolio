import { CheckCircle, Lightbulb, Users, MessageSquare, Zap, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const qualities = [
    {
      icon: Zap,
      title: 'Fast Learner',
      description: 'Quickly adapts to new technologies and methodologies with enthusiasm',
      color: 'text-primary'
    },
    {
      icon: Target,
      title: 'Problem Solver',
      description: 'Approaches challenges with analytical thinking and creative solutions',
      color: 'text-sage'
    },
    {
      icon: MessageSquare,
      title: 'Communicator',
      description: 'Articulates technical concepts clearly to diverse audiences',
      color: 'text-secondary'
    },
    {
      icon: Users,
      title: 'Team Collaborator',
      description: 'Works effectively in team environments, contributing to collective success',
      color: 'text-peach'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            About <span className="text-gradient-primary">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about technology, driven by curiosity, and committed to continuous learning
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Story */}
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-bold mb-8">My Journey</h2>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Welcome to my digital space! I'm <strong className="text-foreground">Varshini Gurram</strong>, 
                  a passionate Computer Science undergraduate at SRM University, where I maintain a stellar 9.2 CGPA 
                  while pursuing my dream of becoming a software developer.
                </p>

                <p>
                  My journey into technology began with curiosity about how digital solutions can solve real-world problems. 
                  This curiosity has evolved into a deep passion for creating innovative software that combines functionality 
                  with beautiful user experiences.
                </p>

                <p>
                  Beyond technical skills, I value <strong className="text-accent">collaboration and communication</strong>. 
                  I've learned that the best software emerges from diverse perspectives and clear communication. My experience 
                  working in teams has taught me that empathy and understanding are just as important as algorithms and data structures.
                </p>
              </div>

              {/* Career Objective */}
              <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
                <h3 className="text-xl font-display font-semibold mb-4 flex items-center gap-3">
                  <Target className="h-5 w-5 text-primary" />
                  Career Objective
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To secure a challenging position as a Software Developer where I can apply my technical expertise, 
                  innovative problem-solving skills, and passion for building meaningful digital solutions while continuously 
                  growing in a collaborative environment.
                </p>
              </div>
            </div>

            {/* Qualities */}
            <div className="space-y-8">
              <h2 className="text-3xl font-display font-bold mb-8">What Drives Me</h2>

              <div className="space-y-6">
                {qualities.map((quality, index) => {
                  const Icon = quality.icon;
                  return (
                    <Card 
                      key={quality.title} 
                      className="group hover-lift border-border/50 bg-card/50 backdrop-blur-sm"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-xl bg-background ${quality.color} group-hover:scale-110 transition-transform`}>
                            <Icon className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-2">{quality.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {quality.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold mb-8">My Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Quality First</h3>
              <p className="text-muted-foreground text-sm">
                Every line of code matters. I believe in writing clean, maintainable, and well-documented code.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto">
                <Lightbulb className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold">Innovation Driven</h3>
              <p className="text-muted-foreground text-sm">
                Technology evolves rapidly. I stay curious and embrace new tools that enhance productivity.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-sage/10 rounded-xl flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-sage" />
              </div>
              <h3 className="text-lg font-semibold">Human Centered</h3>
              <p className="text-muted-foreground text-sm">
                Technology should serve people. I design solutions with real user needs at the center.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

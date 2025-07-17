import { Briefcase, Building, Calendar, Star, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experience = {
    position: 'Software Development Intern',
    company: 'CCC Digital India Pvt. Ltd.',
    duration: 'May 2025 - August 2025',
    status: 'Upcoming',
    description: 'Gaining hands-on experience in software development within a professional environment, contributing to real-world projects and learning industry best practices.',
    keyContributions: [
      'Real-world web development projects',
      'Following team protocols and code practices',
      'Hands-on learning with industry tools',
      'Collaborative development experience',
      'Code review and quality assurance'
    ],
    skills: ['Web Development', 'Team Collaboration', 'Industry Tools', 'Code Reviews', 'Best Practices'],
    achievements: [
      'Selected for competitive internship program',
      'Exposure to enterprise-level development',
      'Professional mentorship opportunity'
    ]
  };

  const learningAreas = [
    {
      title: 'Professional Development',
      icon: Star,
      description: 'Working within structured development environments',
      color: 'primary'
    },
    {
      title: 'Industry Standards',
      icon: CheckCircle,
      description: 'Learning coding standards and best practices',
      color: 'accent'
    },
    {
      title: 'Team Dynamics',
      icon: Building,
      description: 'Collaborating effectively in professional teams',
      color: 'sage'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: 'text-primary bg-primary/10',
      accent: 'text-accent bg-accent/10',
      sage: 'text-sage bg-sage/10'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Briefcase className="h-12 w-12 text-primary" />
            <h1 className="text-4xl sm:text-5xl font-display font-bold">
              My <span className="text-gradient-primary">Experience</span>
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building professional expertise through hands-on industry experience
          </p>
        </div>
      </section>

      {/* Main Experience */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="hover-lift shadow-elegant border-border/50 overflow-hidden">
            <div className="bg-gradient-secondary p-2">
              <div className="bg-card rounded-lg">
                <CardContent className="p-8">
                  <div className="space-y-8">
                    {/* Header */}
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <Building className="h-10 w-10 text-primary" />
                      </div>
                      
                      <div>
                        <h2 className="text-3xl font-display font-bold text-foreground mb-2">
                          {experience.position}
                        </h2>
                        <h3 className="text-xl font-semibold text-primary mb-3">
                          {experience.company}
                        </h3>
                        
                        <div className="flex items-center justify-center gap-6 text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{experience.duration}</span>
                          </div>
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                            {experience.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="text-center max-w-3xl mx-auto">
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {experience.description}
                      </p>
                    </div>

                    {/* Key Contributions */}
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          Key Contributions
                        </h4>
                        <ul className="space-y-3">
                          {experience.keyContributions.map((contribution, index) => (
                            <li key={index} className="flex items-start gap-3 text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{contribution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                          <Star className="h-5 w-5 text-accent" />
                          Skills Developed
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill, index) => (
                            <span 
                              key={index}
                              className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm border border-accent/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        <div className="mt-6 space-y-3">
                          <h5 className="font-medium text-foreground">Key Achievements:</h5>
                          <ul className="space-y-2">
                            {experience.achievements.map((achievement, index) => (
                              <li key={index} className="flex items-start gap-3 text-muted-foreground text-sm">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0"></div>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Learning Areas */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Learning Focus Areas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key areas of professional growth and development during the internship
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {learningAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card 
                  key={area.title}
                  className="text-center p-8 hover-lift shadow-soft border-border/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="space-y-4">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto ${getColorClasses(area.color)}`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-display font-bold">{area.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {area.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Professional Growth */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold mb-8">Professional Growth Journey</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-3">
              <div className="text-3xl font-display font-bold text-primary">3</div>
              <div className="text-sm text-muted-foreground">Months Duration</div>
              <div className="text-xs text-muted-foreground">Intensive learning period</div>
            </div>
            <div className="space-y-3">
              <div className="text-3xl font-display font-bold text-accent">1st</div>
              <div className="text-sm text-muted-foreground">Industry Experience</div>
              <div className="text-xs text-muted-foreground">Professional environment</div>
            </div>
            <div className="space-y-3">
              <div className="text-3xl font-display font-bold text-sage">∞</div>
              <div className="text-sm text-muted-foreground">Learning Opportunities</div>
              <div className="text-xs text-muted-foreground">Continuous growth mindset</div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
            <h3 className="text-xl font-display font-semibold mb-4">Internship Goals</h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              This internship represents a crucial step in my professional journey, providing 
              hands-on experience with real-world projects, exposure to industry standards, 
              and the opportunity to apply my academic knowledge in a practical setting. 
              I'm excited to contribute meaningfully while learning from experienced professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Future Aspirations */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">Looking Forward</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            This internship is just the beginning. I'm committed to building a career that combines 
            technical excellence with meaningful impact, always staying curious and eager to take on 
            new challenges in the ever-evolving world of technology.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
              <Briefcase className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">Ready for the Next Challenge</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
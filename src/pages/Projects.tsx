import { ExternalLink, Github, Code, Database, Globe, Gamepad2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Bank Management System',
      description: 'A comprehensive banking application built with C++ featuring secure transaction processing, account management, and robust file handling for data persistence.',
      icon: Database,
      color: 'primary',
      features: [
        'Object-Oriented Programming architecture',
        'Secure transaction processing',
        'File-based data persistence',
        'Multi-user account management',
        'Transaction history tracking'
      ],
      technologies: ['C++', 'OOP', 'File Handling', 'Data Structures'],
      category: 'System Programming',
      status: 'Completed'
    },
    {
      title: 'Fashion E-Commerce Website',
      description: 'A modern, responsive fashion e-commerce platform with real-time inventory management, secure payment integration, and intuitive user experience.',
      icon: Globe,
      color: 'accent',
      features: [
        'Responsive web design',
        'Real-time inventory management',
        'User authentication & authorization',
        'Shopping cart functionality',
        'Order tracking system'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'CSS3', 'REST APIs'],
      category: 'Full-Stack Development',
      status: 'Completed'
    },
    {
      title: 'Flappy Bird Clone',
      description: 'An engaging recreation of the classic Flappy Bird game using Python and Pygame, featuring smooth animations, collision detection, and progressive difficulty.',
      icon: Gamepad2,
      color: 'sage',
      features: [
        'Smooth sprite animations',
        'Precise collision detection',
        'Progressive difficulty system',
        'High score tracking',
        'Sound effects integration'
      ],
      technologies: ['Python', 'Pygame', 'Game Physics', 'Animation'],
      category: 'Game Development',
      status: 'Completed'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: {
        icon: 'text-primary bg-primary/10',
        badge: 'bg-primary/10 text-primary border-primary/20',
        button: 'bg-primary hover:bg-primary/90'
      },
      accent: {
        icon: 'text-accent bg-accent/10',
        badge: 'bg-accent/10 text-accent border-accent/20',
        button: 'bg-accent hover:bg-accent/90'
      },
      sage: {
        icon: 'text-sage bg-sage/10',
        badge: 'bg-sage/10 text-sage border-sage/20',
        button: 'bg-sage hover:bg-sage/90'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Code className="h-12 w-12 text-primary" />
            <h1 className="text-4xl sm:text-5xl font-display font-bold">
              My <span className="text-gradient-primary">Projects</span>
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions built with passion and precision
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-1 gap-12">
            {projects.map((project, index) => {
              const Icon = project.icon;
              const colors = getColorClasses(project.color);
              
              return (
                <Card 
                  key={project.title}
                  className="group hover-lift shadow-soft border-border/50 overflow-hidden"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="grid lg:grid-cols-5 gap-0">
                    {/* Project Info */}
                    <div className="lg:col-span-3 p-8">
                      <CardHeader className="p-0 mb-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className={`p-3 rounded-xl ${colors.icon} group-hover:scale-110 transition-transform`}>
                            <Icon className="h-8 w-8" />
                          </div>
                          <div className="text-right">
                            <Badge variant="outline" className={colors.badge}>
                              {project.status}
                            </Badge>
                          </div>
                        </div>
                        
                        <CardTitle className="text-2xl font-display font-bold mb-2">
                          {project.title}
                        </CardTitle>
                        
                        <Badge variant="outline" className="w-fit text-xs">
                          {project.category}
                        </Badge>
                      </CardHeader>

                      <CardContent className="p-0 space-y-6">
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>

                        {/* Key Features */}
                        <div>
                          <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                                <div className={`w-1.5 h-1.5 rounded-full ${project.color === 'primary' ? 'bg-primary' : project.color === 'accent' ? 'bg-accent' : 'bg-sage'}`}></div>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 pt-4">
                          <Button 
                            size="sm" 
                            className={`${colors.button} text-white`}
                          >
                            <Github className="h-4 w-4 mr-2" />
                            View Code
                          </Button>
                          <Button variant="outline" size="sm">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </Button>
                        </div>
                      </CardContent>
                    </div>

                    {/* Tech Stack */}
                    <div className="lg:col-span-2 bg-muted/30 p-8 flex flex-col justify-center">
                      <h4 className="font-semibold mb-4 text-foreground">Technologies Used:</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {project.technologies.map((tech, techIndex) => (
                          <div 
                            key={techIndex}
                            className="bg-background rounded-lg p-3 text-center shadow-sm border border-border/50 hover:shadow-md transition-shadow"
                          >
                            <span className="text-sm font-medium text-foreground">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">
            Interested in My Work?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always excited to discuss new projects and opportunities. Let's collaborate and build something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary">
              <Github className="h-4 w-4 mr-2" />
              View All Projects
            </Button>
            <Button variant="outline" size="lg">
              Get In Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
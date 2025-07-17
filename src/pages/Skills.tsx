import { Code, Database, Globe, Settings, Heart, Brain } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'primary',
      skills: [
        { name: 'C', description: 'System programming & algorithms' },
        { name: 'C++', description: 'OOP & data structures' },
        { name: 'Python', description: 'Scripting & game development' },
        { name: 'JavaScript', description: 'Web development & APIs' }
      ]
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      color: 'accent',
      skills: [
        { name: 'HTML5', description: 'Semantic markup & accessibility' },
        { name: 'CSS3', description: 'Responsive design & animations' },
        { name: 'React', description: 'Component-based architecture' },
        { name: 'Bootstrap', description: 'Rapid UI development' },
        { name: 'PHP', description: 'Server-side scripting language used for backend logic and dynamic web pages' },
{ name: 'JavaScript', description: 'Client-side scripting language enabling dynamic behavior in web applications' },
{ name: 'JSON', description: 'Lightweight data-interchange format commonly used for API communication' }

      ]
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'sage',
      skills: [
        { name: 'MySQL', description: 'Relational database design' },
        { name: 'MongoDB', description: 'NoSQL document storage' }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Settings,
      color: 'peach',
      skills: [
        { name: 'Git', description: 'Version control & collaboration' },
        { name: 'VS Code', description: 'Efficient development environment' },
        { name: 'REST APIs', description: 'API design & integration' }
      ]
    }
  ];

  const softSkills = [
    {
      title: 'Problem Solving',
      icon: Brain,
      description: 'Analytical thinking and creative solution development'
    },
    {
      title: 'Team Collaboration',
      icon: Heart,
      description: 'Effective communication and teamwork abilities'
    },
    {
      title: 'Fast Learning',
      icon: Settings,
      description: 'Quick adaptation to new technologies and methodologies'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: 'text-primary bg-primary/10 border-primary/20',
      accent: 'text-accent bg-accent/10 border-accent/20',
      sage: 'text-sage bg-sage/10 border-sage/20',
      peach: 'text-peach bg-peach/10 border-peach/20'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Settings className="h-12 w-12 text-primary" />
            <h1 className="text-4xl sm:text-5xl font-display font-bold">
              My <span className="text-gradient-primary">Skills</span>
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building innovative digital solutions
          </p>
        </div>
      </section>

      {/* Code Editor Simulation */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-2xl shadow-elegant overflow-hidden">
            <div className="bg-gray-800 px-6 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <span className="text-gray-300 text-sm ml-4">skills.js</span>
            </div>
            <div className="p-8 font-mono text-sm">
              <div className="text-gray-500">// Varshini's Technical Arsenal</div>
              <div className="text-blue-400 mt-2">const</div>
              <span className="text-white"> skills = &#123;</span>
              <div className="ml-4 mt-2">
                <div className="text-blue-300">languages:</div>
                <span className="text-white"> [</span>
                <span className="text-green-300">&quot;C&quot;</span>
                <span className="text-white">, </span>
                <span className="text-green-300">&quot;C++&quot;</span>
                <span className="text-white">, </span>
                <span className="text-green-300">&quot;Python&quot;</span>
                <span className="text-white">, </span>
                <span className="text-green-300">&quot;JavaScript&quot;</span>
                <span className="text-white">],</span>
              </div>
              <div className="ml-4 mt-2">
                <div className="text-blue-300">web:</div>
                <span className="text-white"> [</span>
                <span className="text-green-300">"HTML"</span>
                <span className="text-white">, </span>
                <span className="text-green-300">"CSS"</span>
                <span className="text-white">, </span>
                <span className="text-green-300">"React"</span>
                <span className="text-white">, </span>
                <span className="text-green-300">"Bootstrap"</span>
                <span className="text-white">, </span>
                <span className="text-green-300">"PHP"</span>
                <span className="text-white">, </span>
                <span className="text-green-300">"JavaScript"</span>
                <span className="text-white">, </span>
                <span className="text-green-300">"JSON"</span>
                <span className="text-white">],</span>
              </div>
              <div className="ml-4 mt-2">
                <div className="text-blue-300">databases:</div>
                <span className="text-white"> [</span>
                <span className="text-green-300">"MySQL"</span>
                <span className="text-white">, </span>
                <span className="text-green-300">"MongoDB"</span>
                <span className="text-white">],</span>
              </div>
              <div className="ml-4 mt-2">
                <div className="text-blue-300">tools:</div>
                <span className="text-white"> [</span>
                <span className="text-green-300">"Git"</span>
                <span className="text-white">, </span>
                <span className="text-green-300">"VS Code"</span>
                <span className="text-white">, </span>
                <span className="text-green-300">"REST APIs"</span>
                <span className="text-white">]</span>
              </div>
              <div className="text-white mt-2">&#125;;</div>
              <div className="text-gray-500 mt-4">// Always learning, always growing 🚀</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Technical Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Proficient across multiple domains of software development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={category.title}
                  className="hover-lift shadow-soft border-border/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-xl ${getColorClasses(category.color)}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-display font-bold">{category.title}</h3>
                    </div>

                    <div className="space-y-4">
                      {category.skills.map((skill) => (
                        <div 
                          key={skill.name}
                          className="p-4 bg-background rounded-lg border border-border/50 hover:shadow-sm transition-shadow"
                        >
                          <h4 className="font-semibold text-foreground">{skill.name}</h4>
                          <p className="text-sm text-muted-foreground">{skill.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Soft Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Beyond technical abilities, the human skills that drive successful collaboration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card 
                  key={skill.title}
                  className="text-center p-8 hover-lift shadow-soft border-border/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-display font-bold">{skill.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;

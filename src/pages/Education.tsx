import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'SRM University, Andhra Pradesh',
      duration: '2023 - 2027',
      grade: 'CGPA: 9.21/10',
      status: 'Currently Pursuing',
      description: 'Focused on software engineering, data structures, algorithms, and AI/ML fundamentals.',
      achievements: [],
      color: 'primary'
    },
    {
      degree: 'Intermediate (Class XII)',
      institution: 'Sri Chaitanya Junior College',
      duration: '2021 - 2023',
      grade: '98.7%',
      status: 'Completed',
      description: 'Mathematics, Physics, Chemistry with focus on analytical problem-solving.',
      achievements: [
        'State rank holder in intermediate examinations',
        'Mathematics Olympiad participant',
      ],
      color: 'accent'
    },
    {
      degree: 'Secondary School (Class X)',
      institution: 'Little Flower High School',
      duration: '2020 - 2021',
      grade: 'GPA: 10/10',
      status: 'Completed',
      description: 'Strong foundation in core subjects with emphasis on STEM education.',
      achievements: [
        'Perfect GPA achievement',
        'School topper in Mathematics',
      ],
      color: 'sage'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: 'border-primary bg-primary/5 text-primary',
      accent: 'border-accent bg-accent/5 text-accent',
      sage: 'border-sage bg-sage/5 text-sage'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <GraduationCap className="h-12 w-12 text-primary" />
            <h1 className="text-4xl sm:text-5xl font-display font-bold">
              My <span className="text-gradient-primary">Education</span>
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey of academic excellence and continuous learning
          </p>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-sage"></div>

            <div className="space-y-12">
              {educationData.map((education) => (
                <div key={education.institution} className="relative flex gap-8">
                  {/* Timeline Node */}
                  <div className={`relative z-10 w-16 h-16 rounded-full border-4 ${getColorClasses(education.color)} flex items-center justify-center shadow-soft`}>
                    <BookOpen className="h-6 w-6" />
                  </div>

                  {/* Content Card */}
                  <Card className="flex-1 hover-lift shadow-soft border-border/50">
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        {/* Header */}
                        <div className="space-y-2">
                          <div className="flex items-start justify-between flex-wrap gap-4">
                            <h3 className="text-2xl font-display font-bold text-foreground">
                              {education.degree}
                            </h3>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getColorClasses(education.color)}`}>
                              {education.status}
                            </span>
                          </div>

                          <h4 className="text-lg font-semibold text-primary">
                            {education.institution}
                          </h4>

                          <div className="flex items-center gap-6 text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>{education.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Award className="h-4 w-4" />
                              <span className="font-semibold text-primary">{education.grade}</span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed">
                          {education.description}
                        </p>

                        {/* Conditionally Render Achievements */}
                        {education.achievements.length > 0 && (
                          <div className="space-y-3">
                            <h5 className="font-semibold text-foreground">Key Achievements:</h5>
                            <ul className="space-y-2">
                              {education.achievements.map((achievement, index) => (
                                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                                  <div className={`w-1.5 h-1.5 rounded-full ${
                                    education.color === 'primary'
                                      ? 'bg-primary'
                                      : education.color === 'accent'
                                      ? 'bg-accent'
                                      : 'bg-sage'
                                  }`}></div>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academic Highlights */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Academic Highlights</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Consistent academic excellence across different educational phases
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover-lift shadow-soft border-border/50">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-primary">9.21/10</h3>
                <p className="text-sm text-muted-foreground">Current University CGPA</p>
                <p className="text-xs text-muted-foreground">Maintaining excellence in Computer Science</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover-lift shadow-soft border-border/50">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <GraduationCap className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-display font-bold text-accent">98.7%</h3>
                <p className="text-sm text-muted-foreground">Intermediate Percentage</p>
                <p className="text-xs text-muted-foreground">State-level academic recognition</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover-lift shadow-soft border-border/50">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto">
                  <BookOpen className="h-8 w-8 text-sage" />
                </div>
                <h3 className="text-2xl font-display font-bold text-sage">10/10</h3>
                <p className="text-sm text-muted-foreground">School GPA</p>
                <p className="text-xs text-muted-foreground">Perfect academic foundation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;

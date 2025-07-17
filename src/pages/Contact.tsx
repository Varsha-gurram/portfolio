import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "varshinigurram@srmap.edu.in",
      href: "mailto:varshinigurram@srmap.edu.in",
      color: "primary",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9492958810",
      href: "tel:+919492958810",
      color: "accent",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Andhra Pradesh, India",
      href: "#",
      color: "sage",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Varsha-gurram",
      color: "text-gray-600 hover:text-foreground",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/varshini-gurram/",
      color: "text-blue-600 hover:text-blue-700",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: "text-primary bg-primary/10",
      accent: "text-accent bg-accent/10",
      sage: "text-sage bg-sage/10",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="h-12 w-12 text-primary" />
            <h1 className="text-4xl sm:text-5xl font-display font-bold">
              Let's <span className="text-gradient-primary">Connect</span>
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'd love to hear from you! Whether you have a project in mind, want
            to collaborate, or just want to say hello.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-display font-bold mb-4">
                  Send Me a Message
                </h2>
                <p className="text-muted-foreground">
                  Got a question or project idea? I'm always excited to discuss
                  new opportunities and collaborations.
                </p>
              </div>

              <Card className="shadow-soft border-border/50">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground"
                      >
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="transition-smooth focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="transition-smooth focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-foreground"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project or just say hello!"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="resize-none transition-smooth focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                    >
                      <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-display font-bold mb-4">
                  Get In Touch
                </h2>
                <p className="text-muted-foreground">
                  Ready to start a conversation? Here are the best ways to reach
                  me.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <Card
                      key={contact.label}
                      className="hover-lift shadow-soft border-border/50"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardContent className="p-6">
                        <a
                          href={contact.href}
                          className="flex items-center gap-4 group"
                        >
                          <div
                            className={`p-3 rounded-xl ${getColorClasses(
                              contact.color
                            )} group-hover:scale-110 transition-transform`}
                          >
                            <Icon className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {contact.label}
                            </h3>
                            <p className="text-muted-foreground text-sm">
                              {contact.value}
                            </p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-xl font-display font-semibold">
                  Connect on Social
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 rounded-xl bg-card border border-border/50 hover:shadow-md transition-all group ${social.color}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <Icon className="h-6 w-6 group-hover:scale-110 transition-transform" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Availability */}
              <Card className="bg-gradient-secondary border-0 shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    Current Availability
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    I'm currently available for internships, freelance projects,
                    and collaboration opportunities. Feel free to reach out if
                    you have an exciting project or opportunity to discuss!
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-green-600">
                      Available for new opportunities
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">
            Let's Create Something Amazing
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're looking for a dedicated developer, a creative
            collaborator, or just want to connect, I'm always excited to meet
            new people and explore new possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:varshinigurram@srmap.edu.in">
              <Button size="lg" className="bg-gradient-primary">
                <Mail className="h-4 w-4 mr-2" />
                Email Me
              </Button>
            </a>

            <a
              href="https://github.com/Varsha-gurram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg">
                <Github className="h-4 w-4 mr-2" />
                View My Code
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

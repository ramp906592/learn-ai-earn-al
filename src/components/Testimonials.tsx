import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "AI Product Manager at Google",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
    content: "Al Club's courses completely transformed my career. The practical approach and real-world projects helped me land my dream job at Google. The instructors are world-class!",
    rating: 5,
    course: "AI Fundamentals Masterclass"
  },
  {
    id: 2,
    name: "Maria Garcia",
    role: "Freelance AI Consultant",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=64&h=64&fit=crop&crop=face",
    content: "Thanks to Al Club, I went from zero AI knowledge to earning $10k/month as a freelance AI consultant. The monetization strategies they teach actually work!",
    rating: 5,
    course: "AI Content Creation & Monetization"
  },
  {
    id: 3,
    name: "David Chen",
    role: "Startup Founder",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
    content: "The computer vision course helped me build the core technology for my startup. We just raised $2M in seed funding. Al Club's training was instrumental in our success.",
    rating: 5,
    course: "Advanced Computer Vision"
  },
  {
    id: 4,
    name: "Sarah Wilson",
    role: "Data Scientist at Microsoft",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
    content: "Outstanding content quality and practical exercises. I've taken courses from other platforms, but Al Club's depth and real-world applicability is unmatched.",
    rating: 5,
    course: "Machine Learning Specialization"
  },
  {
    id: 5,
    name: "James Rodriguez",
    role: "AI Research Engineer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face",
    content: "The best investment I've made in my career. The instructors are actual practitioners, not just teachers. Every lesson builds towards real skills you can use immediately.",
    rating: 5,
    course: "Deep Learning Specialization"
  },
  {
    id: 6,
    name: "Emily Brown",
    role: "Content Creator (500K followers)",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=face",
    content: "Al Club taught me how to leverage AI for content creation. My productivity increased 10x and my content quality improved dramatically. My audience loves the AI-enhanced content!",
    rating: 5,
    course: "AI for Creators"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-teal-primary to-teal-light bg-clip-text text-transparent">
              Students Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of successful AI creators who transformed their careers with Al Club
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-card border-border/50 hover:border-teal-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-teal-primary/5 relative overflow-hidden">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-teal-primary/30 mb-4" />
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Course */}
                <div className="mb-4">
                  <span className="text-xs text-teal-primary bg-teal-primary/10 px-2 py-1 rounded-full">
                    {testimonial.course}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-teal-primary/20"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>

              {/* Gradient Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-primary to-teal-light"></div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-teal-primary">98%</div>
              <div className="text-sm text-muted-foreground">Course Completion Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-teal-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-teal-primary">5000+</div>
              <div className="text-sm text-muted-foreground">Happy Students</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-teal-primary">89%</div>
              <div className="text-sm text-muted-foreground">Career Advancement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
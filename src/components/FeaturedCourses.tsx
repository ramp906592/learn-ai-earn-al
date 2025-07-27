import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, ArrowRight } from "lucide-react";

const featuredCourses = [
  {
    id: 1,
    title: "Complete AI Fundamentals Masterclass",
    instructor: "Dr. Sarah Chen",
    price: 299,
    originalPrice: 399,
    rating: 4.9,
    students: 2847,
    duration: "12 hours",
    level: "Beginner",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
    topics: ["Machine Learning", "Neural Networks", "Python", "TensorFlow"]
  },
  {
    id: 2,
    title: "Advanced Computer Vision with AI",
    instructor: "Prof. Michael Rodriguez",
    price: 399,
    originalPrice: 499,
    rating: 4.8,
    students: 1923,
    duration: "18 hours",
    level: "Advanced",
    thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
    topics: ["OpenCV", "Deep Learning", "Image Processing", "PyTorch"]
  },
  {
    id: 3,
    title: "AI Content Creation & Monetization",
    instructor: "Emma Thompson",
    price: 249,
    originalPrice: 349,
    rating: 4.9,
    students: 3521,
    duration: "10 hours",
    level: "Intermediate",
    thumbnail: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=400&h=250&fit=crop",
    topics: ["ChatGPT", "Midjourney", "Content Strategy", "Marketing"]
  }
];

const FeaturedCourses = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-teal-primary to-teal-light bg-clip-text text-transparent">
              Masterclasses
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hand-picked courses from industry experts to accelerate your AI journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCourses.map((course) => (
            <Card key={course.id} className="bg-card border-border/50 hover:border-teal-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-primary/10 group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={course.thumbnail} 
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge 
                    variant="secondary" 
                    className={`${
                      course.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                      course.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}
                  >
                    {course.level}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-teal-primary/90 text-white">
                    ${course.price}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-teal-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-muted-foreground mb-4">by {course.instructor}</p>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {course.topics.slice(0, 3).map((topic, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                  {course.topics.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{course.topics.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-teal-primary">
                      ${course.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ${course.originalPrice}
                    </span>
                  </div>
                  <Badge className="bg-green-500/20 text-green-400">
                    Save ${course.originalPrice - course.price}
                  </Badge>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-gradient-to-r from-teal-primary to-teal-dark hover:from-teal-light hover:to-teal-primary group">
                  Enroll Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-teal-primary text-teal-primary hover:bg-teal-primary hover:text-background"
          >
            View All Courses
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
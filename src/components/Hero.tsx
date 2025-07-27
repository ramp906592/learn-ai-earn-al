import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="AI Learning Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-primary/20 border border-teal-primary/30 mb-8">
            <Star className="w-4 h-4 text-teal-primary mr-2" />
            <span className="text-sm font-medium text-teal-primary">
              #1 AI Masterclass Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Learn AI.{" "}
            <span className="bg-gradient-to-r from-teal-primary to-teal-light bg-clip-text text-transparent">
              Create Impact.
            </span>{" "}
            Start Earning.
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Master artificial intelligence with hands-on courses designed by industry experts. 
            Transform your career and become an AI creator in weeks, not years.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10 text-sm md:text-base">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-teal-primary mr-2">5,000+</span>
              <span className="text-muted-foreground">Students</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-teal-primary mr-2">50+</span>
              <span className="text-muted-foreground">Courses</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-teal-primary mr-2">4.9/5</span>
              <span className="text-muted-foreground">Rating</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-teal-primary to-teal-dark hover:from-teal-light hover:to-teal-primary text-lg px-8 py-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Start Learning Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-teal-primary text-teal-primary hover:bg-teal-primary hover:text-background text-lg px-8 py-6"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">Trusted by professionals from</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <span className="text-lg font-semibold">Google</span>
              <span className="text-lg font-semibold">Microsoft</span>
              <span className="text-lg font-semibold">OpenAI</span>
              <span className="text-lg font-semibold">Meta</span>
              <span className="text-lg font-semibold">Tesla</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-teal-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-dark/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;
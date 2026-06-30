import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Database, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-primary/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/2 bg-primary/10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Database size={16} />
            <span>Expert Database Administrator</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Azmera <span className="text-primary">Abebe</span> Teshale
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Database Administrator & Data Scientist with 10+ years of expertise in high-availability systems, performance tuning, and data-driven insights.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gap-2" asChild>
              <a href="#contact">
                Get in Touch <ArrowRight size={18} />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-primary/20 rounded-2xl rotate-3 -z-10" />
            <div className="absolute inset-0 bg-primary/10 rounded-2xl -rotate-3 -z-10" />
            <img
              src="https://storage.googleapis.com/dala-prod-public-storage/attachments/34eae071-bba6-429c-b4ae-5def6671bff7/1782825896783_profile.jpg"
              alt="Azmera Abebe Teshale"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>
          
          {/* Stats Floating Badge */}
          <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-xl shadow-xl border border-border hidden md:block">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-2 rounded-lg text-primary">
                <Database size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">Experience</p>
                <p className="text-xl font-bold">10+ Years</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, BarChart } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'FIFA 21 Data Analysis',
    description: 'A comprehensive data analysis project using Python to explore player statistics, market values, and performance metrics. Insights were visualized using Matplotlib and Seaborn.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/5f4ce210-cb04-4bb1-938a-957129306f79/fifa-analysis-project-d38cb973-1782821416332.webp',
    tags: ['Python', 'Pandas', 'Data Visualization', 'Cleaning'],
    icon: BarChart,
  },
  {
    title: 'Banking Data Analysis',
    description: 'Analyzing customer transaction patterns and financial data to identify trends in loan approvals and customer churn for a retail banking environment.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/5f4ce210-cb04-4bb1-938a-957129306f79/banking-analysis-project-14581719-1782821415404.webp',
    tags: ['SQL', 'Python', 'Financial Analysis', 'Excel'],
    icon: Database,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow border-border/50">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-background/90 backdrop-blur-sm p-2 rounded-lg text-primary shadow-sm">
                      <project.icon size={20} />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-background">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-3">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github size={16} /> Code
                  </Button>
                  <Button size="sm" className="gap-2">
                    <ExternalLink size={16} /> Demo
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

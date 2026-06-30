import React from 'react';
import { motion } from 'framer-motion';
import { Database, Activity, Shield, Code, BarChart3 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const services = [
  {
    title: 'Database Administration',
    description: 'Comprehensive management of Oracle (12c/19c) and SQL Server environments including installation, configuration, and maintenance.',
    icon: Database,
  },
  {
    title: 'Performance Tuning',
    description: 'Optimization of database performance, query tuning, and resource management to ensure lightning-fast operations.',
    icon: Activity,
  },
  {
    title: 'Backup & Recovery',
    description: 'Implementing robust backup strategies and disaster recovery plans using RMAN and other enterprise tools.',
    icon: Shield,
  },
  {
    title: 'SQL/PLSQL Development',
    description: 'Development of efficient stored procedures, triggers, and complex queries to support business logic.',
    icon: Code,
  },
  {
    title: 'Data Management Consulting',
    description: 'Strategic advice on data architecture, security compliance, and migration strategies for digital transformation.',
    icon: BarChart3,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialized technical solutions designed to ensure your data infrastructure is secure, performant, and scalable.
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-border/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <service.icon size={24} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Database Administrator',
    company: 'Hibret Bank',
    period: 'Current',
    description: 'Responsible for managing enterprise-wide Oracle and SQL Server databases, ensuring 99.9% uptime, and leading performance tuning initiatives for core banking systems.',
  },
  {
    role: 'Database Administrator',
    company: 'Ethiopian Ministry of Revenue',
    period: 'Past',
    description: 'Managed large-scale taxpayer databases, implemented security protocols, and handled critical backup and recovery operations during system migrations.',
  },
  {
    role: 'Database Administrator / IT Specialist',
    company: 'Addis Ababa Housing Development Office',
    period: 'Past',
    description: 'Maintained IT infrastructure and database systems for housing projects, providing technical support and ensuring data integrity for public records.',
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A decade of professional experience in high-stakes environments.
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l border-primary/30 pl-8 ml-4 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-background border-2 border-primary shadow-sm" />
                
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <span className="hidden md:inline text-muted-foreground">•</span>
                  <div className="flex items-center gap-1 text-primary font-semibold">
                    <Briefcase size={16} />
                    {exp.company}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar size={14} />
                  {exp.period}
                </div>
                
                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

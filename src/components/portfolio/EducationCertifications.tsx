import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, CheckCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const certifications = [
  'Oracle Database Administration',
  'Oracle Data Guard Implementation',
  'Oracle RAC (Real Application Clusters)',
  'PL/SQL Fundamentals',
  'Advanced SQL',
  'Linux Administration',
  'Oracle Cloud Infrastructure Foundations',
];

export function EducationCertifications() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary/10 p-3 rounded-xl text-primary">
                <GraduationCap size={28} />
              </div>
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            
            <div className="bg-muted/30 p-8 rounded-2xl border border-border/50">
              <h3 className="text-xl font-bold mb-1">Bachelor of Science in IT</h3>
              <p className="text-primary font-medium mb-4">Wollo University</p>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold">
                  GPA 3.2
                </span>
              </div>
              <p className="text-muted-foreground">
                Solid academic foundation in information technology, systems analysis, and database management principles.
              </p>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary/10 p-3 rounded-xl text-primary">
                <Award size={28} />
              </div>
              <h2 className="text-3xl font-bold">Certifications</h2>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index}>
                  <div className="flex items-center gap-3 py-1">
                    <CheckCircle className="text-primary shrink-0" size={18} />
                    <span className="font-medium text-muted-foreground">{cert}</span>
                  </div>
                  {index < certifications.length - 1 && (
                    <Separator className="mt-3 opacity-50" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

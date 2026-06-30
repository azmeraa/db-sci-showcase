import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const expertiseItems = [
  'Database Performance Tuning',
  'Backup & Recovery (RMAN)',
  'Security Management',
  'High Availability Systems (RAC/Data Guard)',
  'SQL & PL/SQL Development',
  'Data Analysis with Python',
];

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over 10 years of experience in the banking and government sectors, I have built a solid foundation in managing mission-critical database systems. My expertise lies in ensuring the security, availability, and performance of large-scale Oracle and SQL Server environments.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently, I am expanding my horizons into Data Science, leveraging Python to extract meaningful insights from complex datasets. My background as a DBA gives me a unique perspective on data integrity and performance that I bring to every analysis project.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Core Expertise</h3>
              <ul className="space-y-4">
                {expertiseItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary shrink-0" size={20} />
                    <span className="text-muted-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

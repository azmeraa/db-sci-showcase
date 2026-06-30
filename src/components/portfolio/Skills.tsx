import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const technicalSkills = [
  { name: 'Oracle 12c/19c', level: 95 },
  { name: 'SQL Server', level: 90 },
  { name: 'SQL & PL/SQL', level: 95 },
  { name: 'Python for Data Analysis', level: 85 },
  { name: 'Linux Administration', level: 80 },
  { name: 'RMAN Backup/Recovery', level: 95 },
  { name: 'Oracle RAC & Data Guard', level: 90 },
  { name: 'Windows Server', level: 85 },
];

const technologies = [
  'Oracle Database', 'Microsoft SQL Server', 'PostgreSQL', 'Python', 'Pandas', 'NumPy', 
  'Matplotlib', 'Scikit-learn', 'Linux/Unix', 'Bash Scripting', 'Git', 'Excel'
];

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-8">Expertise Levels</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8">Technology Stack</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/10">
              <h4 className="font-bold mb-2">Continuous Learning</h4>
              <p className="text-sm text-muted-foreground">
                Currently focusing on advanced Data Science methodologies, machine learning, and cloud-native database architectures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

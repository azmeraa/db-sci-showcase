import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Twitter, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! I will get back to you soon.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next data project? Feel free to reach out for consultations or professional opportunities.
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <a 
                href="mailto:azmeraabebe26@gmail.com" 
                className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary transition-colors group"
              >
                <div className="bg-primary/10 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">azmeraabebe26@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+251918664908" 
                className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary transition-colors group"
              >
                <div className="bg-primary/10 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+251 918 664 908</p>
                </div>
              </a>

              <div className="pt-8">
                <p className="font-semibold mb-4">Follow Me</p>
                <div className="flex gap-4">
                  {[
                    { icon: Linkedin, href: '#' },
                    { icon: Twitter, href: '#' },
                    { icon: Github, href: '#' },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      className="bg-background border border-border p-3 rounded-lg hover:border-primary hover:text-primary transition-colors"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-background p-8 rounded-2xl shadow-xl border border-border"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project..." 
                  className="min-h-[150px]" 
                  required 
                />
              </div>
              <Button type="submit" className="w-full gap-2">
                <Send size={18} /> Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

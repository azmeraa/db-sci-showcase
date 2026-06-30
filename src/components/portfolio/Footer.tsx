import React from 'react';

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold tracking-tighter">
          AZMERA<span className="text-primary">.</span>
        </div>
        
        <p className="text-muted-foreground text-sm text-center">
          &copy; {new Date().getFullYear()} Azmera Abebe Teshale. All rights reserved.
        </p>
        
        <div className="flex gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

import React, { ReactNode } from 'react';

interface LayoutProps {
  header: ReactNode;
  children: ReactNode;
  footer: ReactNode;
}

export default function NormalLayout({ header, children, footer }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">

      <header className="flex-shrink-0">
        {header}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="flex-shrink-0">
        {footer}
      </footer>
    </div>
  );
}
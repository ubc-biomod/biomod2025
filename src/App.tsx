import React from 'react';
import Footer from "./components/FooterComponent";
import Card from "./components/reusable/Card"
import Navbar from './components/Navbar';
import { Link } from './components/Navbar';

const links: Link[] = [
  {
    href: "https://www.google.com",
    title: "Link 1"
  },
  {
    href: "https://www.google.com",
    title: "Link 2"
  }
];

const currentBase: string = "haha";

const callToActionLink: Link = {
  href: "https://www.google.com",
    title: "Call to Action Link"
}

const isNormalPage: boolean = true


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-red-400">
        <Navbar links={links} currentBase={currentBase} callToActionLink={callToActionLink} isNormalPage={isNormalPage} />
        <Footer links={[{title: "Instagram", href: "https://www.ubcbiomod.com"}, {title: "Instagram", href: "https://www.ubcbiomod.com"}, {title: "Instagram", href: "https://www.ubcbiomod.com"}]} />
      </main>
    </div>
  );
}

export default App;
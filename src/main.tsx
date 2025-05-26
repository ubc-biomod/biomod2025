import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';
import NormalLayout from './layout/NormalLayout';
import Footer from "./components/FooterComponent";
import Navbar from './components/Navbar';
import { Link } from './components/Navbar';

const links: Link[] = [
  {
    href: "/",
    title: "Home"
  },
  {
    href: "/elsi",
    title: "ELSI"
  },
  {
    href: "/sponsors", 
    title: "Sponsors"
  }
];

const currentBase: string = "filler";

const callToActionLink: Link = {
  href: "https://www.google.com",
  title: "Call to Action Link"
}

const isNormalPage: boolean = true;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NormalLayout
      header={
        <Navbar 
          links={links} 
          currentBase={currentBase} 
          callToActionLink={callToActionLink} 
          isNormalPage={isNormalPage} 
        />
      }
      footer={
        <Footer 
          links={[
            {title: "Instagram", href: "https://www.ubcbiomod.com"}, 
            {title: "Twitter", href: "https://www.ubcbiomod.com"}, 
            {title: "LinkedIn", href: "https://www.ubcbiomod.com"}
          ]} 
        />
      }
    >
      <App/>
    </NormalLayout>
  </React.StrictMode>
);
import React from 'react';
import NormalLayout from '../layout/NormalLayout';
import Footer from "../components/FooterComponent";
import Navbar from '../components/Navbar';
import { Link } from '../components/Navbar';

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

const currentBase: string = "filler";

const callToActionLink: Link = {
  href: "https://www.google.com",
  title: "Call to Action Link"
}

const isNormalPage: boolean = true;

function MainPage() {
  return (
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

      {/* Place content of page here!!!! (if using this layout) */}
      <div className="p-8">
        
        <div className="mt-8 space-y-4">
          {Array.from({ length: 10 }, (_, i) => (
            <p key={i}>
              This is paragraph {i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          ))}
        </div>
      </div>
      {/* End of content for page!!! */}
    </NormalLayout>
  );
}

export default MainPage;
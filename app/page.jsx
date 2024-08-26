import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Socials from "@/components/Socials";

const page = () => {
  return ( 
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Computer Engineer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Dylan Ramdhan</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I'm a rising senior at Boston University, majoring in Computer Engineering. 
              I'm passionate about software & hardware development, and I'm always looking 
              for new opportunities to share and learn my passion for programming languages and technologies.
            </p>
            {/* socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="sm" className="px-4 py-2 text-sm uppercase flex items-center gap-2">
                <span>Download my Resume!</span>
                <FiDownload className="text-lg"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconsStyles="w-9 h-9 border border-accent rounded-full flex 
                justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          
          {/* photo */} 
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default page;

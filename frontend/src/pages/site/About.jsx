import aboutImage from "@/assets/images/bn-video.jpg";

import storyImage from "@/assets/images/quantumPro.webp";

import useTitle from "@/hooks/useTitle.js";

const About = () => {
  useTitle("About Us | ProCtrl");

  return (
    <>
      <section>
        <div className="section-container">
          <div className="grid items-center gap-10 lg:gap-14 md:grid-cols-2">
            <div className="flex">
              <img className="rounded-lg shadow-2xl" src={aboutImage} alt="Gaming Gear Showcase" />
            </div>

            <div className="space-y-4 lg:space-y-6 w-full max-w-md md:max-w-lg">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-dark-secondary dark:text-light mb-4">
                About ProCtrl
              </h1>
              <div className="text-base lg:text-lg font-normal text-dark dark:text-light space-y-4">
                <p>
                  Welcome to <span className="text-primary font-semibold">ProCtrl</span> — your ultimate destination for cutting-edge gaming gear designed for champions. 
                  Whether you're grinding ranked matches, conquering battle royales, or building your dream setup, 
                  we provide the tools to elevate your performance and style.
                </p>
                <p>
                  At ProCtrl, we are passionate gamers first and foremost. Our curated collections feature elite gaming keyboards, precision mice, immersive headsets, 
                  and high-performance accessories — all tested and approved by real competitive players.
                </p>
                <p>
                  Power up your gameplay with gear built for precision, endurance, and domination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

<section className="bg-light dark:bg-dark-primary py-12">
  <div className="section-container">
    <h3 className="text-3xl lg:text-4xl font-extrabold text-gray dark:text-light">
      Our Story
    </h3>
    <hr className="line-break" />

    <div className="space-y-6 lg:space-y-8 mt-8 text-base lg:text-lg font-normal text-dark dark:text-light">
      
      {/* First Paragraph */}
      <p className="float-left max-w-2xl">
        
      </p>
      <div className="clear-both"></div>

      {/* Image + Second Paragraph */}
      <div className="flex flex-col md:flex-row items-center gap-6">

        <p className="max-w-2xl">
          Born from late-night gaming sessions, clutch plays, and the never-ending pursuit of victory, 
        <span className="text-primary font-semibold"> ProCtrl</span> was founded with a mission: 
         to provide gamers everywhere with gear that doesn’t just meet the standard — it sets it.<br />
          We partner with leading brands and engineers to offer products that blend next-gen technology with gamer-tested durability. <br />
          Every item in our store is handpicked to ensure it delivers the speed, comfort, and responsiveness needed for competitive gaming.<br />
          From casual players to esports professionals, our community drives us. 
         Together, we celebrate the wins, learn from the losses, and push the limits of what's possible. 
        At ProCtrl, it's not just about gaming — it's about creating a legacy.
        </p>
        <img 
          src={storyImage} 
          alt="Gaming Setup" 
          className="w-full md:w-1/2 rounded-lg shadow-xl"
        />
      </div>

      {/* Third Paragraph Centered */}
      <p className="text-center max-w-4xl mx-auto">

      </p>
    </div>
  </div>
</section>


      <section className="section-container py-16">
        <div className="bg-primary/10 dark:bg-primary/20 rounded-2xl p-10 text-center space-y-6">
          <h3 className="text-3xl lg:text-4xl font-extrabold text-primary">
            Join the ProCtrl Movement
          </h3>
          <p className="text-base lg:text-lg font-normal text-dark dark:text-light">
            Level up your gaming journey with us. Discover exclusive drops, epic deals, and gear crafted for legends. 
            Your ultimate setup starts here — welcome to the future of gaming.
          </p>
          <a
            href="/products"
            className="inline-block px-8 py-3 rounded-full bg-primary text-light hover:bg-primary-dark transition-all duration-300 font-semibold text-lg"
          >
            Explore Our Gear
          </a>
        </div>
      </section>
    </>
  );
};

export default About;

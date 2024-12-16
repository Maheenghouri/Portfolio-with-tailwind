import Footer from "@/components/footer";
export default function Home() {
  return (
    <div>

      <section className="bg-black text-white text-center py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center space-y-6">

            <div className="rounded-full bg-gradient-to-br from-[#FF6A00] to-[#B832D1] w-[213] h-[213] flex items-center justify-center">
              <img
                src="/images/avatar.png"
                alt="Profile"
                className="rounded-full w-full"
              />
            </div>


            <h1 className="text-4xl leading-snug poppins-extrabold text-[55]">
              I do code <br />
              and make content{' '}
              <span className="bg-gradient-to-r from-[#FF8A00] via-[#FF4A8D] to-[#8A2BE2] bg-clip-text text-transparent">
                about it!
              </span>
            </h1>

            <p className="text-gray-400 max-w-lg poppins-light text-[18]">
              I am a web developer who creates websites.
              I focus on making them user-friendly, responsive, and visually appealing.
              I enjoy building and improving websites to bring ideas to life .
            </p>


            <div className="flex space-x-6 poppins-semibold text-[21]">
              <a
                href="#contact"
                className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-all"
              >
                Get In Touch
              </a>
              <a
                href="/resume.pdf"
                className="border border-white text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all"
              >
                Download CV
              </a>
            </div>
          </div>

          <br />
          <br />
          <div className="container mx-auto text-center">

            <h2 className="text-lg tracking-widest text-gray-400 mb-8 poppins-semibold text-[20]">
              EXPERIENCE WITH
            </h2>


            <div className="flex justify-center items-center space-x-8">

              <div className="w-12 h-12">
                <img
                  src="/images/javascript.png"
                  alt="JavaScript"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="w-12 h-12">
                <img
                  src="/images/nodejs.png"
                  alt="Next.js"
                  className="w-full h-full object-contain"
                />
              </div>


              <div className="w-12 h-12">
                <img
                  src="/images/html.png"
                  alt="HTML5"
                  className="w-full h-full object-contain"
                />
              </div>


              <div className="w-12 h-12">
                <img
                  src="/images/css.png"
                  alt="CSS3"
                  className="w-full h-full object-contain"
                />
              </div>


              <div className="w-12 h-12">
                <img
                  src="/images/reactjs.png"
                  alt="React"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-4xl text-center text-orange-500 mb-8 poppins-extrabold text-[35]">
            PROJECTS
          </h2>


          <div className="flex flex-col md:flex-row justify-center items-center gap-10">


            <div className="bg-gray-800 rounded-[18px] overflow-hidden shadow-lg w-full md:w-1/2 hover:scale-105 transition-transform duration-300">
              <div>
                <img
                  src="/images/project-1.png"
                  alt="HTML Tutorial"
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-[#1A1A1A] p-5 flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-400 uppercase mb-1 poppins-bold text-[10]">
                    Click here to visit
                  </p>
                  <h3 className="text-xl font-bold text-white poppins-extrabold text-[19]">HTML Tutorial</h3>
                </div>
                <a href="/html-tutorial" className="flex items-center justify-center">
                  <img
                    src="/images/arrow.png"
                    alt="Arrow"
                    className="w-6 h-6 opacity-80 hover:opacity-100"
                  />
                </a>
              </div>
            </div>


            <div className="bg-gray-800 rounded-[18px] overflow-hidden shadow-lg w-full md:w-1/2 hover:scale-105 transition-transform duration-300">
              <div>
                <img
                  src="/images/project-2.png"
                  alt="CSS Tutorial"
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-[#1A1A1A] p-5 flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-400 uppercase mb-1 poppins-bold text-[10]">
                    Click here to visit
                  </p>
                  <h3 className="text-xl font-bold text-white poppins-extrabold text-[19]">CSS Tutorial</h3>
                </div>
                <a href="/css-tutorial" className="flex items-center justify-center">
                  <img
                    src="/images/arrow.png"
                    alt="Arrow"
                    className="w-6 h-6 opacity-80 hover:opacity-100"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl text-center text-blue-500 mb-12 poppins-extrabold text-[35]">
            EXPERIENCE
          </h2>

          <div className="space-y-12">

            <div className="relative flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <img
                  src="/images/google.logo.png"
                  alt="Google Logo"
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="text-xl poppins-bold text-[21]">Lead Software Engineer at Google</h3>
                  <p className="text-gray-400 mt-2 poppins-regular text-[14]">
                    As a Senior Software Engineer at Google, I played a pivotal role
                    in developing innovative solutions for Google&rsquo;s core search
                    algorithms. Collaborating with a dynamic team of engineers, I
                    contributed to the enhancement of search accuracy and efficiency,
                    optimizing user experiences for millions of users worldwide.
                  </p>
                </div>
              </div>
              <div className="absolute top-0 right-0 text-gray-400 text-sm md:text-right poppins-regular text-[14]">
                Nov 2019 – Present
              </div>
            </div>


            <div className="relative flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <img
                  src="/images/applelogo.png"
                  alt="Apple Logo"
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="text-xl poppins-bold text-[21]">Junior Software Engineer at Apple</h3>
                  <p className="text-gray-400 mt-2 poppins-regular text-[14]">
                    During my tenure at Apple, I held the role of Software Architect,
                    where I played a key role in shaping the architecture of
                    mission-critical software projects. Responsible for designing
                    scalable and efficient systems, I provided technical leadership
                    to a cross-functional team.
                  </p>
                </div>
              </div>
              <div className="absolute top-0 right-0 text-gray-400 text-sm md:text-right poppins-regular text-[14]">
                Jan 2016 – Dec 2017
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <img
                  src="/images/metalogo.png"
                  alt="Meta Logo"
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="text-xl poppins-bold text-[21]">Software Engineer at Meta</h3>
                  <p className="text-gray-400 mt-2 poppins-regular text-[14]">
                    At Meta, I served as a Software Engineer, focusing on the design
                    and implementation of backend systems for the social media
                    giant’s dynamic platform. Working on projects that involved
                    large-scale data processing and user engagement features, I
                    leveraged my expertise to ensure seamless functionality and
                    scalability.
                  </p>
                </div>
              </div>
              <div className="absolute top-0 right-0 text-gray-400 text-sm md:text-right poppins-regular text-[14]">
                Jan 2017 – Oct 2019
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

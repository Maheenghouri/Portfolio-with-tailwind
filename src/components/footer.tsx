export default function Contact() {
    return (
      <section className="bg-[#191919] text-white py-16">
        <div className="container mx-auto px-6">
   
          <h2 className="mb-6 text-3xl poppins-bold text-[23]">Contact</h2>
  
      
          <p className="text-gray-400 mb-3 poppins-light text-[14]">
          I worked as a web developer at ABC Company, where I created user-friendly, responsive, and visually appealing websites. 
          I focused on delivering seamless experiences that brought ideas to life and improved overall functionality for clients.
          </p>
  
          
          <div className="flex items-center space-x-4 mb-8">
            <span className="text-lg">📧</span>
            <a
              href="mailto:khi.ghouri021@gmail.com"
              className="text-[14] poppins-semibold text-white hover:underline"
            >
             khi.ghouri021@gmail.com
            </a>
          </div>
  
 
          <div className="flex items-center space-x-6">
    
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="/images/instagram.png" 
                alt="Instagram"
                className="w-8 h-8"
              />
            </a>
   
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="/images/x.png"  
                alt="Twitter"
                className="w-8 h-8"
              />
            </a>
   
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="/images/youtube.png"  
                alt="YouTube"
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>
      </section>
    );
  }
  
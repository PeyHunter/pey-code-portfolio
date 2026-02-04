function About() {
  return (
    <div className="min-h-screen bg-black text-white p-8 pt-40 font-bricolage">
      <h1 className="text-[10vw] font-black leading-none mb-12 tracking-tighter">
        About
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
        {/* LEFT COLUMN: Content (Occupies 7/12 columns) */}
        <div className="lg:col-span-7 pt-4">
          {/* Introduction - Now smaller (text-base) */}
          <p className="font-reddit text-base md:text-xl leading-relaxed mb-10 opacity-70 max-w-1/2">
            Hi! My name is Peyton and I am a Full Stack Developer currently in my fourth
            semester of Datamatiker at Københavns Erhvervsakademi. This semester, I am
            taking electives in Python and AI automation, building on my experience with
            Spring Boot, JPA, and CI/CD. With a solid foundation in full stack development,
            I am now looking for an internship where I can apply my skills in a
            professional environment.
          </p>

          {/* Contact Code Snippet - Adjusted width and text size */}
          <div className="font-reddit leading-relaxed p-8 bg-white/5 rounded-2xl border border-white/10 mb-12 max-w-xl">

            {/* Class Initialization - Larger Text */}
            <div className="text-base md:text-xl">
              <span className="text-purple-400">ContactInfo</span> contact ={" "}
              <span className="text-blue-400">new</span>{" "}
              <span className="text-purple-400">ContactInfo</span>();
            </div>

            {/* Methods - Larger Text */}
            <div className="ml-6 border-l border-white/10 pl-6 my-4 text-base md:text-xl space-y-2">
              <div>
                contact.<span className="text-yellow-200">email</span>(
                <a
                  href="mailto:Nando.goat@gmail.com"
                  className="text-orange-300 hover:underline transition-all"
                >
                  "Nando.goat@gmail.com"
                </a>
                );
              </div>
              <div>
                contact.<span className="text-yellow-200">github</span>(
                <a
                  href="https://github.com/peyhunter"
                  target="_blank"
                  className="text-orange-300 hover:underline transition-all"
                >
                  "github/peyhunter"
                </a>
                );
              </div>
              <div>
                contact.<span className="text-yellow-200">phone</span>(
                <a
                  href="tel:+4512345678"
                  className="text-orange-300 hover:underline transition-all"
                >
                  "+45 12 34 56 78"
                </a>
                );
              </div>
            </div>


          </div>
        </div>

        {/* RIGHT COLUMN: Image (Occupies 5/12 columns) */}
        <div className="lg:col-span-5 flex justify-end items-start">
          <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group">
            <img
              src="/your-photo.jpg"
              alt="Peyton"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 text-center">
      
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
        LET'S WORK <br />
        <span className="text-neutral-600">TOGETHER.</span>
      </h1>

      <div className="space-y-6 text-lg md:text-xl font-light w-full max-w-md">
        <p>
          Based in <span className="text-yellow-500">India</span>.
          <br />Available for weddings, portraits, and commercial projects.
        </p>

        <div className="flex flex-col gap-4 mt-8">
          {/* Email Button */}
          <a 
            href="mailto:photographermohitsingh@gmail.com" 
            className="bg-white text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-neutral-200 transition block w-full"
          >
            Send an Email
          </a>

          {/* WhatsApp Button */}
          <a 
            href="https://wa.me/917909050538" 
            target="_blank"
            className="bg-green-600 text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-green-500 transition block w-full"
          >
            Chat on WhatsApp
          </a>
          
          {/* Call Button */}
          <a 
            href="tel:+917909050538" 
            className="border border-neutral-700 text-neutral-400 px-8 py-4 font-bold uppercase tracking-widest hover:border-white hover:text-white transition block w-full"
          >
            Call: +91 7909050538
          </a>

          {/* Instagram Button */}
          <a 
            href="https://www.instagram.com/mohit_singh_no.1_photographer" 
            target="_blank"
            className="border border-neutral-700 text-neutral-400 px-8 py-4 font-bold uppercase tracking-widest hover:border-pink-500 hover:text-pink-500 transition block w-full"
          >
            Instagram
          </a>
        </div>
      </div>

    </main>
  );
}
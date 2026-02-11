'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects');
        
        // Check if the response is actually OK before trying to parse JSON
        if (!res.ok) {
          throw new Error(`Server returned status: ${res.status}`);
        }

        const data = await res.json();
        
        // Handle both { data: [...] } and [...] API response structures safely
        const projectList = data.data ? data.data : data;
        setProjects(projectList);
        
      } catch (err) {
        console.error("Fetch Error:", err);
        setError("Could not load photos. Please check your connection.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <main className="min-h-screen bg-neutral-900 text-white font-sans">
      {/* HEADER (Commented out as in your original) */}
      {/* <nav className="p-8 flex justify-between items-center uppercase tracking-widest border-b border-neutral-800">
        <h1 className="text-2xl font-bold">Mohit Singh</h1>
        <div className="space-x-6 text-sm text-neutral-400">
          <a href="#" className="hover:text-white transition">Work</a>
          <a href="#" className="hover:text-white transition">Presets</a>
          <a href="/admin" className="hover:text-white transition">Admin</a>
        </div>
      </nav> */}

      {/* HERO SECTION */}
      <section className="h-[60vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070')] bg-cover bg-center">
        <div className="bg-black/50 p-4 w-full h-full flex items-center justify-center">
          <h2 className="text-5xl font-black tracking-tighter text-center">
            CAPTURE <span className="text-neutral-500">EVERYTHING.</span>
          </h2>
        </div>
      </section>

      {/* DYNAMIC CONTENT AREA (Error, Loading, or Grid) */}
      <section className="p-4 md:p-8">
        
        {/* State 1: Error */}
        {error && (
          <div className="text-center py-20 text-red-400 border border-red-900 bg-red-950/20 rounded-lg">
            <p className="font-bold tracking-widest uppercase">⚠️ {error}</p>
          </div>
        )}

        {/* State 2: Loading */}
        {isLoading && !error && (
          <div className="text-center py-20 text-neutral-500">
            <p className="animate-pulse tracking-widest uppercase">Loading Portfolio...</p>
          </div>
        )}

        {/* State 3: Success (Masonry Grid) */}
        {!isLoading && !error && projects.length > 0 && (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {projects.map((project) => (
              <div key={project._id} className="relative group overflow-hidden break-inside-avoid">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full rounded-sm transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-xs text-yellow-500 tracking-widest uppercase">{project.category}</p>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* State 4: Empty (No photos uploaded yet) */}
        {!isLoading && !error && projects.length === 0 && (
          <div className="text-center py-20 text-neutral-500">
            <p className="tracking-widest uppercase">No projects found. Add some in the Admin panel.</p>
          </div>
        )}

      </section>
    </main>
  );
}
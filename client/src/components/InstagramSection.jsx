// import { Instagram } from 'lucide-react';
import { instagramPosts } from '../data/instagramPosts';

const IG_PROFILE_URL = 'https://www.instagram.com/aabha_bybhanupriya?igsh=MWc5bDE2NXRxMjZmag%3D%3D';
const InstagramSection = () => {
  return (
    <section className="bg-secondary py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-charcoal mb-2">
            Follow Our Glow
          </h2>
          <a
            href={IG_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-body text-sm text-charcoal/60 hover:text-charcoal transition-colors"
          >
            {/* <Instagram size={16} /> */}
            aabha_bybhanupriya
          </a>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={IG_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg aspect-square block"
            >
              <img
                src={post.image}
                alt="Instagram post"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300 flex items-center justify-center">
                {/* <Instagram
                  size={20}
                  className="text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                /> */}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
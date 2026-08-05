import React, { useState } from 'react';
import { Heart, MessageCircle, ExternalLink, Sparkles, CheckCircle } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './SocialIcons';

interface SocialPost {
  id: string;
  platform: 'instagram' | 'facebook';
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  timeAgo: string;
  tag: string;
}

export const SocialFeed: React.FC = () => {
  const [likesMap, setLikesMap] = useState<Record<string, boolean>>({});

  const posts: SocialPost[] = [
    {
      id: "post-1",
      platform: "instagram",
      imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
      caption: "✨ End of Lease Magic in Ringwood! Baked carbon oven turned mirror-clean in under 90 minutes. 100% bond returned guaranteed! 🧼#CyseraCleaning #MelbourneCleaners #EndOfLease",
      likes: 142,
      comments: 18,
      timeAgo: "2h ago",
      tag: "Ringwood Job"
    },
    {
      id: "post-2",
      platform: "facebook",
      imageUrl: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80",
      caption: "Fresh carpet steam clean completed for our amazing client in Bayswater North! 🐾 Removed years of pet stains & dust mites. Book your carpet steam clean today!",
      likes: 98,
      comments: 12,
      timeAgo: "1d ago",
      tag: "Bayswater Local"
    },
    {
      id: "post-3",
      platform: "instagram",
      imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
      caption: "Bathroom grout restoration in Croydon! No chemicals, just non-toxic eco steam scrub & sealing. Clean space = happy mind 🌿 #EcoClean #CroydonVic",
      likes: 215,
      comments: 24,
      timeAgo: "3d ago",
      tag: "Tile & Grout"
    },
    {
      id: "post-4",
      platform: "facebook",
      imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
      caption: "Commercial office cleaning team hard at work in Box Hill! High-touch point disinfection and gleaming timber floors for tomorrow morning's team return. 💼",
      likes: 176,
      comments: 15,
      timeAgo: "5d ago",
      tag: "Commercial Clean"
    }
  ];

  const handleToggleLike = (id: string) => {
    setLikesMap(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-800">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Social Media Feed
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Follow Our Recent Transformations
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Real daily work photos & customer reviews directly from our Instagram & Facebook channels.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg transition-all"
          >
            <InstagramIcon className="w-4 h-4" /> Instagram
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg transition-all"
          >
            <FacebookIcon className="w-4 h-4" /> Facebook
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.map(post => {
          const isLiked = !!likesMap[post.id];
          const displayLikes = post.likes + (isLiked ? 1 : 0);

          return (
            <div
              key={post.id}
              className="bg-slate-800/90 rounded-2xl border border-slate-700/80 overflow-hidden flex flex-col justify-between hover:border-emerald-500/50 transition-all duration-300 group"
            >
              <div>
                <div className="p-3 flex items-center justify-between text-xs text-slate-300 border-b border-slate-700/50">
                  <div className="flex items-center gap-2">
                    {post.platform === 'instagram' ? (
                      <InstagramIcon className="w-4 h-4 text-pink-400" />
                    ) : (
                      <FacebookIcon className="w-4 h-4 text-blue-400" />
                    )}
                    <span className="font-bold text-white flex items-center gap-1">
                      cysera_cleaning <CheckCircle className="w-3 h-3 text-emerald-400 fill-emerald-400/20" />
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400">{post.timeAgo}</span>
                </div>

                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-2 left-2 bg-slate-950/80 text-emerald-300 text-[10px] font-bold px-2.5 py-1 rounded-md backdrop-blur-md">
                    📍 {post.tag}
                  </span>
                </div>

                <div className="p-3.5 text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {post.caption}
                </div>
              </div>

              <div className="p-3.5 pt-0 flex items-center justify-between text-xs text-slate-400 border-t border-slate-700/40">
                <button
                  onClick={() => handleToggleLike(post.id)}
                  className={`flex items-center gap-1.5 font-semibold transition-colors ${
                    isLiked ? 'text-rose-500' : 'hover:text-rose-400'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-500' : ''}`} />
                  <span>{displayLikes}</span>
                </button>
                <div className="flex items-center gap-1.5 font-semibold">
                  <MessageCircle className="w-4 h-4 text-slate-400" />
                  <span>{post.comments}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// components/DynamicBackground.tsx
'use client';

import { usePathname } from 'next/navigation';

export default function DynamicBackground() {
  const pathname = usePathname();

  const getBackgroundImage = () => {
    switch (pathname) {
      case '/':
        return '/backgrounds/home.webp';
      case '/about':
        return '/backgrounds/about.webp';
      case '/experience':
        return '/backgrounds/experience.webp';
      case '/portfolio':
        return '/backgrounds/portfolio.webp';
      case '/skills':
        return '/backgrounds/skills.webp';
      case '/hobbies':
        return '/backgrounds/hobbies.webp';
      default:
        return '/backgrounds/home.webp';
    }
  };

  return (
    <>
      {/* Background Image */}
      <div
        key={pathname}
        className="fixed inset-0 -z-10 transition-all duration-1000"
        style={{
          backgroundImage: `url('${getBackgroundImage()}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          // Removed background-attachment: fixed (this was causing jitter)
          transform: 'translate3d(0, 0, 0)',           // Hardware acceleration
          willChange: 'transform',                     // Tells browser to optimize
        }}
      />

      {/* Dark overlay for readability */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
    </>
  );
}
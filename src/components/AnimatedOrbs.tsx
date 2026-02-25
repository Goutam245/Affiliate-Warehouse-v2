const AnimatedOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div
      className="absolute w-[500px] h-[500px] rounded-full animate-float opacity-30"
      style={{
        background: 'radial-gradient(circle, rgba(124,58,237,0.4) 0%, transparent 70%)',
        top: '10%',
        left: '-10%',
      }}
    />
    <div
      className="absolute w-[400px] h-[400px] rounded-full animate-float-slow opacity-20"
      style={{
        background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)',
        top: '50%',
        right: '-5%',
        animationDelay: '2s',
      }}
    />
    <div
      className="absolute w-[300px] h-[300px] rounded-full animate-float opacity-25"
      style={{
        background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)',
        bottom: '10%',
        left: '30%',
        animationDelay: '4s',
      }}
    />
  </div>
);

export default AnimatedOrbs;

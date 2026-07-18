function TypewriterHeading() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "hi, krishna here.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-[var(--lightest-slate)] mb-8">
      {displayText.slice(0, 4)}<span className="text-[var(--green)]">{displayText.slice(4, 11)}</span>{displayText.slice(11)}
      <motion.span 
        animate={{ opacity: [1, 0, 1] }} 
        transition={{ repeat: Infinity, duration: 0.9 }} 
        className="inline-block w-[6px] h-[0.9em] bg-white ml-2 align-baseline" 
      />
    </h1>
  );
}
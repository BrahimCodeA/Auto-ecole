export default function BackgroundGlow() {
  return (
    <>
      <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-yellow-400/20 blur-[120px]" />
    </>
  );
}

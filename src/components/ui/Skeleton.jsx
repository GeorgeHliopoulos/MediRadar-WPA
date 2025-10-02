// src/components/ui/Skeleton.jsx

// A simple page-level skeleton
function PageSkeleton() {
  return (
    <div className="animate-pulse grid gap-3">
      <div className="h-10 rounded-xl bg-white/10" />
      <div className="h-6 rounded-xl bg-white/10" />
      <div className="h-6 rounded-xl bg-white/10" />
      <div className="h-24 rounded-xl bg-white/10" />
    </div>
  );
}

// Export in both styles so any import works
export default PageSkeleton;
export { PageSkeleton };

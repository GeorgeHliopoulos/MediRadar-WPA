import React from "react";

/** Μικρά building blocks για skeletons */
export function Skeleton({ className = "" }) {
  return <div className={`skeleton ${className}`} />;
}

export function SkeletonText({ lines = 2 }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} className="h-3 w-full rounded-md" />
      ))}
    </div>
  );
}

export function SkeletonButton() {
  return <Skeleton className="h-10 w-28 rounded-2xl" />;
}

/** Έτοιμη “κάρτα” skeleton για λίστες */
export function SkeletonCard() {
  return (
    <div className="rounded-2xl bg-white border border-gray-100 p-4 shadow-soft">
      <div className="flex items-start gap-4">
        <Skeleton className="h-12 w-12 rounded-xl" />
        <div className="flex-1">
          <Skeleton className="h-4 w-40 rounded-md mb-2" />
          <SkeletonText lines={2} />
        </div>
        <SkeletonButton />
      </div>
    </div>
  );
}

/** Μεγάλο hero skeleton για σελίδες */
export function SkeletonHero() {
  return (
    <div className="rounded-2xl bg-white border border-gray-100 p-6 md:p-8 shadow-soft">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <Skeleton className="h-20 w-20 rounded-2xl" />
        <div className="flex-1 w-full">
          <Skeleton className="h-7 w-48 rounded-md mb-3" />
          <Skeleton className="h-4 w-72 rounded-md mb-4" />
          <div className="flex gap-3">
            <Skeleton className="h-12 w-full rounded-2xl" />
            <SkeletonButton />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Fallback έτοιμο για <Suspense fallback={...}> */
export function PageSkeleton() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      <SkeletonHero />
      <div className="grid md:grid-cols-3 gap-4">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  );
}

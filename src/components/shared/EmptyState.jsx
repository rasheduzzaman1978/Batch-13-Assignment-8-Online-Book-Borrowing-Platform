"use client";

export default function EmptyState({
  title = "Nothing found",
  subtitle = "Try a different search or filter",
  icon = "😕",
  action,
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      
      {/* Icon */}
      <div className="text-5xl mb-4">{icon}</div>

      {/* Title */}
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
        {title}
      </h2>

      {/* Subtitle */}
      <p className="text-gray-500 mt-2 max-w-md">
        {subtitle}
      </p>

      {/* Optional Action Button */}
      {action && <div className="mt-5">{action}</div>}
      
    </div>
  );
}
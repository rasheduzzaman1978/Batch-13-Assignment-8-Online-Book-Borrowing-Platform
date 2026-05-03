export default function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white">

      {/* 🔵 Spinner */}
      <div className="relative mb-6">
        <div className="w-10 md:w-16 h-10 md:h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>

        {/* Glow ring */}
        <div className="absolute inset-0 w-10 md:w-16 h-10 md:h-16 border-4 border-transparent border-t-blue-300 rounded-full animate-ping"></div>
      </div>

      {/* 📚 Title */}
      <h1 className="text-2xl md:text-3xl font-bold mb-2">
        Loading BookNest...
      </h1>

      {/* 📝 Subtitle */}
      <p className="text-gray-200 text-sm md:text-base">
        Please wait while we prepare your experience 📖
      </p>

      {/* ✨ Animated dots */}
      <div className="flex gap-2 mt-4">
        <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
        <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-150"></span>
        <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-300"></span>
      </div>

    </div>
  );
}
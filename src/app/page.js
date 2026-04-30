export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-2xl text-center p-6 bg-white shadow-lg rounded-2xl">
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Welcome to{" "}
          <span className="text-blue-600">
            Online Book Borrowing Platform 📚
          </span>
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Browse, borrow, and manage your favorite books online with ease. 
          A simple and efficient digital library system for readers.
        </p>

        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
          Explore Books
        </button>

      </div>
    </div>
  );
}
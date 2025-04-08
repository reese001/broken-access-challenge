export default function Home() {
  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Welcome to the Security Demo App</h2>
        <p className="mb-4">
          This application demonstrates a broken access control vulnerability for educational purposes.
        </p>
        <div className="flex flex-col space-y-4">
          <a 
            href="/users" 
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-center"
          >
            View All Users
          </a>
          <a 
            href="/admin" 
            className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded text-center"
          >
            Admin Dashboard
          </a>
          <a 
            href="/login" 
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded text-center"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

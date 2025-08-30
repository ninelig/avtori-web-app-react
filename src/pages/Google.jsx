import { useState } from "react";
// import { FcGoogle } from "react-icons/fc"; // Optional: Google icon


function GoogleLogin() {
  const [googleLoading, setGoogleLoading] = useState(false);
  const [googleMessage, setGoogleMessage] = useState("");

  const handleGoogleLogin = () => {
    setGoogleLoading(true);
    setGoogleMessage("");

    
    setTimeout(() => {
      setGoogleLoading(false);
      setGoogleMessage("Logged in with Google");
    }, 1000);
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {googleMessage && (
          <div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-center">
            {googleMessage}
          </div>
        )}

        <button
          onClick={handleGoogleLogin}
          disabled={googleLoading}
          className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded border ${
            googleLoading
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          }`}
        >
          {/* <FcGoogle size={24} /> */}
          {googleLoading ? "Logging in..." : "Continue with Google"}
        </button>
      </div>
    </div>
  );
}



export default GoogleLogin
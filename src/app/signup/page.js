export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Create an account
        </h1>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-full hover:bg-gray-900"
          >
            Continue
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600">
            Login
          </a>
        </p>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-gray-500 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300" />
        </div>

        <div className="space-y-3">
          <OAuthButton icon="G" label="Continue with Google" />
          <OAuthButton icon="M" label="Continue with Microsoft Account" />
          <OAuthButton icon="" label="Continue with Apple" />
          <OAuthButton icon="📞" label="Continue with phone" />
        </div>

        <div className="mt-8 text-sm text-gray-500 text-center space-x-4">
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}

function OAuthButton({ icon, label }) {
  return (
    <button className="w-full flex items-center px-4 py-3 border rounded-full hover:bg-gray-100">
      <span className="text-xl mr-3">{icon}</span>
      <span className="text-sm">{label}</span>
    </button>
  );
}

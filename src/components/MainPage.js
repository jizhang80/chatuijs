import Head from "./Head";
import Foot from "./Foot";

export default function MainPage() {
  return (
    <div id="mainpage" className="flex flex-col min-h-screen">
      <Head />

      <div className="flex-grow flex flex-col items-center justify-center w-full bg-white space-y-6 px-4">
        <h1 className="text-3xl font-semibold">Chat with LLM</h1>

        {/* Input Box */}
        <div className="w-full max-w-3xl">
          <div className="flex items-center border rounded-full shadow-sm px-4 py-3 space-x-3">
            <input
              type="text"
              placeholder="Ask anything"
              className="flex-grow bg-transparent outline-none text-base"
            />
          </div>
        </div>
      </div>

      <Foot />
    </div>
  );
}

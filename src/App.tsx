import { AuthProvider } from "./providers/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <div className="bg-primary text-white text-center p-8">
        <h1 className="text-2xl font-bold">Hello, TailwindCSS!</h1>
        <p className="text-xl mt-4">TailwindCSS đã hoạt động thành công!</p>
      </div>
    </AuthProvider>
  );
}

export default App;

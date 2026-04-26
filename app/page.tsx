import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6">
      <h1 className="text-5xl font-bold">PlacePrep 🚀</h1>
      <p className="text-gray-400 text-lg">
        Your college placement preparation platform
      </p>
      <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
        Get Started
      </Button>
    </main>
  );
}
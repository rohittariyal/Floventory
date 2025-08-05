import { useAuth } from "@/hooks/use-auth";
import { Navbar } from "@/components/navbar";
import { Dashboard } from "@/components/dashboard";

export default function HomePage() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {user && <Dashboard user={user} />}
      </main>
    </div>
  );
}

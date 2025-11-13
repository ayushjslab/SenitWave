/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth"; // make sure you have AuthProvider

const DashboardPage = () => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [redirecting, setRedirecting] = useState(false);

  // Redirect to login if user is not authenticated
  useEffect(() => {
    if (!loading && !user) {
      setRedirecting(true);
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading || redirecting) {
    return (
      <div className="ml-22 text-center mt-10 text-gray-600">
        Loading authentication...
      </div>
    );
  }

  return (
    <div className="ml-22 p-6">
      <h1 className="text-3xl font-bold text-emerald-600 mb-4">
        Welcome, {user?.name}
      </h1>
      <p className="text-gray-700">This is your dashboard content.</p>
    </div>
  );
};

export default DashboardPage;

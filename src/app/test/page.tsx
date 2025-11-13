"use client";

import { useAuth } from "@/hooks/useAuth";

export default function Dashboard() {
  const { user, loading, error } = useAuth();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
      <p>Email: {user?.email}</p>
    </div>
  );
}

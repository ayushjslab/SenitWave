"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import {
  BarChart3,
  Globe,
  User,
  CreditCard,
  Settings as SettingsIcon,
} from "lucide-react";

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="ml-22 text-center mt-10 text-gray-600 animate-pulse">
        Checking authentication...
      </div>
    );
  }

  return (
    <div className="ml-22 p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-emerald-600 mb-2">
        Welcome, {user?.name}
      </h1>
      <p className="text-gray-600 mb-8">
        Manage your websites, analyze customer feedback, and keep your account
        up to date.
      </p>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Analysis Card */}
        <div
          onClick={() => router.push("/dashboard/analysis")}
          className="cursor-pointer p-6 bg-white border rounded-xl shadow-sm hover:shadow-md hover:border-emerald-500 transition-all"
        >
          <BarChart3 className="text-emerald-600 mb-4" size={32} />
          <h3 className="text-xl font-semibold">Feedback Analysis</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Monitor user insights, review trends, and analyze responses.
          </p>
        </div>

        {/* Add Website */}
        <div
          onClick={() => router.push("/dashboard/add-website")}
          className="cursor-pointer p-6 bg-white border rounded-xl shadow-sm hover:shadow-md hover:border-emerald-500 transition-all"
        >
          <Globe className="text-emerald-600 mb-4" size={32} />
          <h3 className="text-xl font-semibold">Add Website</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Connect a new website and start collecting customer feedback.
          </p>
        </div>

        {/* Profile */}
        <div
          onClick={() => router.push("/dashboard/profile")}
          className="cursor-pointer p-6 bg-white border rounded-xl shadow-sm hover:shadow-md hover:border-emerald-500 transition-all"
        >
          <User className="text-emerald-600 mb-4" size={32} />
          <h3 className="text-xl font-semibold">Profile</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Update personal details, avatar, and account preferences.
          </p>
        </div>

        {/* Billing */}
        <div
          onClick={() => router.push("/dashboard/billing")}
          className="cursor-pointer p-6 bg-white border rounded-xl shadow-sm hover:shadow-md hover:border-emerald-500 transition-all"
        >
          <CreditCard className="text-emerald-600 mb-4" size={32} />
          <h3 className="text-xl font-semibold">Billing</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Manage your plan, invoices, and subscription settings.
          </p>
        </div>

        {/* Settings */}
        <div
          onClick={() => router.push("/dashboard/settings")}
          className="cursor-pointer p-6 bg-white border rounded-xl shadow-sm hover:shadow-md hover:border-emerald-500 transition-all"
        >
          <SettingsIcon className="text-emerald-600 mb-4" size={32} />
          <h3 className="text-xl font-semibold">Settings</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Configure your dashboard, security, and notification preferences.
          </p>
        </div>
      </div>
    </div>
  );
}

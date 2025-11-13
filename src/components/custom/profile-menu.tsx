/* eslint-disable @next/next/no-img-element */
"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/useAuth";
import { LogOut } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function ProfileMenu() {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axios.post("/api/logout");
      toast.success("Logged out successfully!");
      router.push("/login");
    } catch (err) {
      console.error(err);
      toast.error("Logout failed. Try again.");
    }
  };

  if (!user) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-3 cursor-pointer rounded-full hover:bg-emerald-50 transition-all px-2 py-1">
          <div className="relative w-10 h-10 rounded-full overflow-hidden  border-emerald-200 shadow-sm">
            {user.picture ? (
              <img
                src={user.picture}
                alt={user.name}
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-emerald-100 text-emerald-700 font-semibold text-sm">
                {user.name?.[0]?.toUpperCase() || "U"}
              </div>
            )}
          </div>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-56 bg-white border border-emerald-100 shadow-lg rounded-xl p-1"
      >
        <DropdownMenuLabel className="text-emerald-700 font-semibold text-sm">
          {user.name}
        </DropdownMenuLabel>
        <p className="text-xs text-gray-500 px-2 truncate">{user.email}</p>

        <DropdownMenuSeparator className="bg-emerald-100" />

        <DropdownMenuItem
          onClick={handleLogout}
          className="text-red-600 focus:text-red-700 focus:bg-red-50 font-medium flex items-center gap-2 cursor-pointer rounded-lg px-2 py-2"
        >
          <LogOut size={16} />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

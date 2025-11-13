"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Edit2, Save, X} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

export default function SettingsPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loadingSave, setLoadingSave] = useState(false);

  const { user, loading } = useAuth();

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
      setImageUrl(user.picture || "");
    }
  }, [user]);

  const handleSave = async () => {
    if (!user?.id) return alert("User not found");
    try {
      setLoadingSave(true);
      const { data } = await axios.put("/api/update-user", {
        id: user.id,
        name,
        picture: imageUrl,
      });
      if(data.success){
        toast.success(data.message)
      }
      console.log("✅ Updated:", data);
      setIsEditing(false);
    } catch (error) {
      console.error(error);
      alert("Failed to update user");
    } finally {
      setLoadingSave(false);
    }
  };

  if (loading)
    return (
      <p className="text-center mt-10 text-emerald-600 font-semibold">
        Loading profile...
      </p>
    );

  return (
    <div className="bg-linear-to-br from-background via-background to-secondary/10 py-12">
      <div className="max-w-2xl mx-auto space-y-8">
        <Card className="border border-border/60 shadow-xl backdrop-blur-lg bg-background/60 rounded-2xl">
          <CardHeader className="pb-4 border-b border-border/40">
            <CardTitle className="text-3xl font-bold tracking-tight text-foreground">
              Profile Settings
            </CardTitle>
            <p className="text-muted-foreground text-sm">
              Edit your name and profile picture, then save changes.
            </p>
          </CardHeader>

          <CardContent className="pt-8">
            <div className="flex flex-col items-center gap-6">
              {/* Profile Image */}
              <div className="relative group">
                <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-md">
                  <motion.img
                    key={imageUrl}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    src={imageUrl || "/placeholder.svg"}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {!isEditing && (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="absolute bottom-2 right-2 bg-primary text-primary-foreground p-2 rounded-xl shadow-lg hover:scale-110 transition-transform duration-200 opacity-0 group-hover:opacity-100"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Display Info (View Mode) */}
              {!isEditing && (
                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-bold text-foreground">{name}</h2>
                  <p className="text-muted-foreground text-sm">{email}</p>
                </div>
              )}

              {/* Edit Mode */}
              {isEditing && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full space-y-5 mt-4"
                >
                  <div className="grid gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1 text-muted-foreground">
                        Full Name
                      </label>
                      <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="text-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1 text-muted-foreground">
                        Profile Image URL
                      </label>
                      <Input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="Paste image URL"
                        className="text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 pt-3">
                    <Button
                      onClick={handleSave}
                      className="bg-primary text-primary-foreground"
                      disabled={loadingSave}
                    >
                      <Save className="w-4 h-4 mr-1" />
                      {loadingSave ? "Saving..." : "Save Changes"}
                    </Button>
                    <Button
                      onClick={() => setIsEditing(false)}
                      variant="secondary"
                      className="text-muted-foreground"
                    >
                      <X className="w-4 h-4 mr-1" /> Cancel
                    </Button>
                  </div>
                </motion.div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

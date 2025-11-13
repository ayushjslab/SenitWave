/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import axios from "axios";
import { useState, useEffect } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  picture: string;
}

interface UseAuthReturn {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchUser () {
            try {
                setLoading(true)
                const {data} = await axios.get(`/api/authentication`);
                if(!data.success) {
                    setError(data.message)
                    setUser(null)
                }
                setUser(data.user);
                setError(null)
            } catch (err: any) {
        setError(err.message || "Something went wrong");
        setUser(null);
            }finally{
                setLoading(false)
            }
        }
        fetchUser();
    },[])

  return { user, loading, error };
}

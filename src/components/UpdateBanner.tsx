import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "@/firebase";

interface Update {
  message: string;
  createdAt: number;
  expiresAt: number;
}

const UpdateBanner = () => {
  const [updates, setUpdates] = useState<Update[]>([]);

  useEffect(() => {
    const updatesRef = ref(db, "updates");
    const unsub = onValue(updatesRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) return setUpdates([]);
      const now = Date.now();
      const active = Object.values(data as Record<string, Update>).filter(
        (u) => u.expiresAt > now
      );
      setUpdates(active);
    });
    return () => unsub();
  }, []);

  if (updates.length === 0) return null;

  return (
    <div className="bg-teal-dark text-accent-foreground py-2 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        {updates.map((u, i) => (
          <span key={i} className="mx-8 text-sm font-medium">
            📢 {u.message}
          </span>
        ))}
      </div>
    </div>
  );
};

export default UpdateBanner;

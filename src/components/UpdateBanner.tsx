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

  if (updates.length === 0) {
    return (
      <p className="text-muted-foreground text-sm italic">
        No announcements today.
      </p>
    );
  }

  return (
    <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-lg py-3 px-6 shadow-lg w-full overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        {updates.map((u, i) => (
          <span key={i} className="mx-8 font-semibold">
            📢 {u.message}
          </span>
        ))}
      </div>
    </div>
  );
};

export default UpdateBanner;
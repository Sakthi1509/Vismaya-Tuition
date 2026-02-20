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
 const [descriptions, setDescriptions] = useState<Update[]>([]);

  useEffect(() => {
    const updatesRef = ref(db, "updates");
      const descRef = ref(db, "descriptions");
    const unsub = onValue(updatesRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) return setUpdates([]);

      const now = Date.now();
      const active = Object.values(data as Record<string, Update>).filter(
        (u) => u.expiresAt > now
      );

      setUpdates(active);
    });
    const unsubDesc = onValue(descRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) return setDescriptions([]);
      const now = Date.now();
      const active = Object.values(data as Record<string, Update>).filter(
        (d) => d.expiresAt > now
      );

      setDescriptions(active);
    });

    return () => {
      unsub();
      unsubDesc();
    };
  }, []);

  if (updates.length === 0 && descriptions.length === 0) {
    return (
      <p className="text-muted-foreground text-sm italic">
         No announcements or activities today.
      </p>
    );
  }


  return (
    <div className="space-y-4 w-full">
      {/* Marquee */}
      {updates.length > 0 && (
        <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-lg py-3 px-6 shadow-lg overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            {updates.map((u, i) => (
              <span key={i} className="mx-8 font-semibold">
                📢 {u.message}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Static Description Box */}
      {descriptions.length > 0 && (
        <div className="bg-card border border-border rounded-lg p-5 shadow-md">
          {descriptions.map((d, i) => (
            <p key={i} className="text-sm text-muted-foreground">
              {d.message}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default UpdateBanner;

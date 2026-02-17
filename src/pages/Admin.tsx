import { useEffect, useState } from "react";
import { ref, onValue, push ,remove,update} from "firebase/database";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, User } from "firebase/auth";
import { db, auth } from "@/firebase";

interface Registration {
  id: string;
  name: string;
  email: string;
  phone: string;
  program: string;
  createdAt: number;
  parentFirstName: string;
  location: string;
  educationLevel: string;
}

interface UpdateItem {
  id: string;
  message: string;
  createdAt: number;
  expiresAt: number;
}



const ADMIN_EMAIL = "achieverstuition.centre2018@gmail.com";
const Admin = () => {
 const [updates, setUpdates] = useState<UpdateItem[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");

  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [updateMsg, setUpdateMsg] = useState("");
  const [posting, setPosting] = useState(false);

  
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (u && u.email === ADMIN_EMAIL) setUser(u);
      else setUser(null);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!user) return;
    const regRef = ref(db, "registrations");
    const unsub = onValue(regRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) return setRegistrations([]);
      const list = Object.entries(data).map(([id, val]: [string, any]) => ({ id, ...val }));
      list.sort((a, b) => b.createdAt - a.createdAt);
      setRegistrations(list);
    });
    return () => unsub();
  }, [user]);
  useEffect(() => {
  if (!user) return;

  const updatesRef = ref(db, "updates");

  const unsub = onValue(updatesRef, (snapshot) => {
    const data = snapshot.val();
    if (!data) return setUpdates([]);

    const list = Object.entries(data).map(([id, val]: [string, any]) => ({
      id,
      ...val,
    }));

    list.sort((a, b) => b.createdAt - a.createdAt);
    setUpdates(list);
  });

  return () => unsub();
}, [user]);
const handleDelete = async (id: string) => {
  await remove(ref(db, `updates/${id}`));
};
const handleEdit = (u: UpdateItem) => {
  setEditingId(u.id);
  setEditText(u.message);
};

const handleSaveEdit = async () => {
  if (!editingId) return;

  await update(ref(db, `updates/${editingId}`), {
    message: editText,
  });

  setEditingId(null);
  setEditText("");
};
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch {
      setLoginError("Invalid credentials or not an admin account.");
    }
  };

  const handlePostUpdate = async () => {
    if (!updateMsg.trim()) return;
    setPosting(true);
    const now = Date.now();
    await push(ref(db, "updates"), {
      message: updateMsg,
      createdAt: now,
      expiresAt: now + 24 * 60 * 60 * 1000,
    });
    setUpdateMsg("");
    setPosting(false);
  };

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <form onSubmit={handleLogin} className="bg-card border border-border rounded-xl p-8 w-full max-w-sm shadow-md space-y-4">
            <h2 className="text-xl font-heading font-bold text-center">Admin Login</h2>
            {loginError && <p className="text-destructive text-xs text-center">{loginError}</p>}
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Admin email"
              className="w-full rounded-lg bg-muted px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"
              className="w-full rounded-lg bg-muted px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" />
            <button type="submit"
              className="w-full bg-teal-dark text-accent-foreground font-bold text-sm py-3 rounded-lg hover:opacity-90 transition-opacity">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container py-8 flex-1"><br></br>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-heading font-bold">Admin Dashboard</h2>
          <button onClick={() => signOut(auth)} className="text-sm text-destructive hover:underline">Logout</button>
        </div>

        {/* Post Update */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <h3 className="font-bold text-sm mb-3">Post Daily Update</h3>
          <div className="flex gap-3">
            <input value={updateMsg} onChange={(e) => setUpdateMsg(e.target.value)} placeholder="Type update message..."
              className="flex-1 rounded-lg bg-muted px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" />
            <button onClick={handlePostUpdate} disabled={posting}
              className="bg-teal-dark text-accent-foreground font-bold text-sm px-6 py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50">
              {posting ? "Posting..." : "Post"}
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Update will expire after 24 hours.</p>
        </div>
        {/* Existing Updates */}
<div className="bg-card border border-border rounded-xl p-6 mb-8">
  <h3 className="font-bold text-sm mb-4">Posted Updates</h3>

  {updates.length === 0 && (
    <p className="text-sm text-muted-foreground">No updates posted yet.</p>
  )}

  <div className="space-y-4">
    {updates.map((u) => (
      <div
        key={u.id}
        className="border border-border rounded-lg p-4 flex justify-between items-start"
      >
        {editingId === u.id ? (
          <div className="flex-1 mr-4">
            <input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="w-full rounded-lg bg-muted px-3 py-2 text-sm"
            />
          </div>
        ) : (
          <p className="text-sm flex-1 mr-4">{u.message}</p>
        )}

        <div className="flex gap-2">
          {editingId === u.id ? (
            <button
              onClick={handleSaveEdit}
              className="text-xs bg-primary text-white px-3 py-1 rounded"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => handleEdit(u)}
              className="text-xs bg-secondary px-3 py-1 rounded"
            >
              Edit
            </button>
          )}

          <button
            onClick={() => handleDelete(u.id)}
            className="text-xs bg-destructive text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

        {/* Registrations Table */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="p-4 border-b border-border">
            <h3 className="font-bold text-sm">Registrations ({registrations.length})</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-secondary text-secondary-foreground">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Name</th>
                  <th className="text-left px-4 py-3 font-semibold">Email</th>
                  <th className="text-left px-4 py-3 font-semibold">Phone</th>
                  <th className="text-left px-4 py-3 font-semibold">Program</th>
                  <th className="text-left px-4 py-3 font-semibold">Parent Name</th>
                  <th className="text-left px-4 py-3 font-semibold">Location</th>
                  <th className="text-left px-4 py-3 font-semibold">class</th>
                  <th className="text-left px-4 py-3 font-semibold">Date</th>
                </tr>
              </thead>
              <tbody>

                {registrations.map((r) => (
                  <tr key={r.id} className="border-t border-border hover:bg-muted/50 transition-colors">
                    <td className="px-4 py-3">{r.name}</td>
                    <td className="px-4 py-3">{r.email}</td>
                    <td className="px-4 py-3">{r.phone}</td>
                    <td className="px-4 py-3 capitalize">{r.program}</td>
                    <td className="px-4 py-3">{r.parentFirstName}</td>
                    <td className="px-4 py-3">{r.location}</td>
                    <td className="px-4 py-3">{r.educationLevel}</td>
                    <td className="px-4 py-3 text-muted-foreground">{new Date(r.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}
                {registrations.length === 0 && (
                  <tr><td colSpan={5} className="text-center py-8 text-muted-foreground">No registrations yet.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;

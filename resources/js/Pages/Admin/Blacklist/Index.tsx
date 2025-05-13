
import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { useForm } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { toast } from "sonner";

export default function BlacklistIndex({ blacklist }) {
  const form = useForm({
    name: "",
    email: "",
    reason: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    form.post(route("admin.blacklist.store"), {
      onSuccess: () => {
        form.reset();
        toast.success("Email blacklisted successfully");
      },
    });
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Manage Blacklist</h2>
        
        <form onSubmit={submit} className="max-w-xl mb-8 space-y-4">
          <div>
            <Input
              placeholder="Name"
              value={form.data.name}
              onChange={e => form.setData("name", e.target.value)}
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={form.data.email}
              onChange={e => form.setData("email", e.target.value)}
            />
          </div>
          <div>
            <Textarea
              placeholder="Reason"
              value={form.data.reason}
              onChange={e => form.setData("reason", e.target.value)}
            />
          </div>
          <Button type="submit" disabled={form.processing}>
            Add to Blacklist
          </Button>
        </form>

        <div className="mt-6">
          <table className="min-w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Reason</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {blacklist.data.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.reason}</td>
                  <td>{new Date(item.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}

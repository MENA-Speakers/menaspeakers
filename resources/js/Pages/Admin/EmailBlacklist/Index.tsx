import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";
import { toast } from "sonner";
import { Trash } from "lucide-react";

interface EmailBlacklistProps {
  blacklist: {
    data: Array<{
      id: number;
      name: string;
      email: string;
      reason: string;
      created_at: string;
    }>;
    links: any;
  };
}

export default function EmailBlacklist({ blacklist }: EmailBlacklistProps) {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    reason: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route("admin.email-blacklist.store"), {
      onSuccess: () => {
        reset("name", "email", "reason");
        toast.success("Email added to blacklist successfully");
      },
      onError: () => {
        toast.error("Failed to add email to blacklist");
      },
    });
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to remove this email from the blacklist?")) {
      window.axios
        .delete(route("admin.email-blacklist.destroy", id))
        .then(() => {
          toast.success("Email removed from blacklist");
        })
        .catch(() => {
          toast.error("Failed to remove email from blacklist");
        });
    }
  };

  return (
    <AdminLayout>
      <Head title="Email Blacklist" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold mb-6">Email Blacklist</h1>

          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6 mb-6">
            <h2 className="text-lg font-medium mb-4">Add Email to Blacklist</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email">Email Address (required)</Label>
                <Input
                  id="email"
                  type="email"
                  value={data.email}
                  onChange={(e) => setData("email", e.target.value)}
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <Label htmlFor="name">Name (optional)</Label>
                <Input
                  id="name"
                  type="text"
                  value={data.name}
                  onChange={(e) => setData("name", e.target.value)}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <Label htmlFor="reason">Reason for Blacklisting (optional)</Label>
                <Textarea
                  id="reason"
                  value={data.reason}
                  onChange={(e) => setData("reason", e.target.value)}
                  rows={3}
                />
                {errors.reason && (
                  <p className="text-red-500 text-sm mt-1">{errors.reason}</p>
                )}
              </div>

              <Button type="submit" disabled={processing}>
                Add to Blacklist
              </Button>
            </form>
          </div>

          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
            <h2 className="text-lg font-medium mb-4">Blacklisted Emails</h2>
            
            {blacklist.data.length === 0 ? (
              <p className="text-gray-500">No emails in the blacklist.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Reason
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date Added
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {blacklist.data.map((item) => (
                      <tr key={item.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.name || "-"}
                        </td>
                        <td className="px-6 py-4">
                          {item.reason || "-"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {new Date(item.created_at).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDelete(item.id)}
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
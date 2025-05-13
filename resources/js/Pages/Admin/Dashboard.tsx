import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Link } from "@inertiajs/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Ban, Users, FileText, MapPin } from "lucide-react";

interface DashboardProps {
  speaker_count: number;
  blog_count: number;
  user_count: number;
  blacklist_count: number;
}

function Dashboard({
  speaker_count,
  blog_count,
  user_count,
  blacklist_count,
}: DashboardProps) {
  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-6">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Speakers
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{speaker_count}</div>
              <p className="text-xs text-muted-foreground">
                <Link
                  href={route("admin.speakers.index")}
                  className="text-blue-600 hover:underline"
                >
                  View all speakers
                </Link>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Blogs</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{blog_count}</div>
              <p className="text-xs text-muted-foreground">
                <Link
                  href={route("admin.blogs.index")}
                  className="text-blue-600 hover:underline"
                >
                  View all blogs
                </Link>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{user_count}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Blacklisted Emails
              </CardTitle>
              <Ban className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{blacklist_count}</div>
              <p className="text-xs text-muted-foreground">
                <Link
                  href={route("admin.email-blacklist.index")}
                  className="text-blue-600 hover:underline"
                >
                  Manage blacklist
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Dashboard;

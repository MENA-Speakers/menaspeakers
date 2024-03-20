import React from 'react';
import AdminLayout from "@/Layouts/AdminLayout";
import {Link} from "@inertiajs/react";
import {Button} from "@/Components/ui/button";

function Index() {
  return (
    <AdminLayout >
      <main>
        <div className="flex items-center justify-between mb-4">
          <h1>Employees</h1>
          <Link href={route('admin.employees.create')}>
            <Button className="btn btn-primary">Add Employee</Button>
          </Link>
        </div>
      </main>
    </AdminLayout>
      );
}

      export default Index;

<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\EmployeeResource;
use App\Models\Employee;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EmployeeController extends Controller
{

  public function index(){
    return Inertia::render('Admin/Employees/Index', [
      'employees' => EmployeeResource::collection(Employee::latest()->paginate(12))
    ]);
  }



  public function create(){
    return Inertia::render('Admin/Employees/Create');
  }
}

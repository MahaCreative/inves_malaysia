<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        return inertia('Home');
    }
    public function home($referal_code)
    {
        return inertia('Home');
    }
}

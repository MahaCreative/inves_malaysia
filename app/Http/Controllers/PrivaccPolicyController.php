<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PrivaccPolicyController extends Controller
{
    public function index()
    {
        return inertia('PrivacyPolicy');
    }
}

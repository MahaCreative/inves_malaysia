<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class PaketTradingController extends Controller
{
    protected function get_referal_code($code)
    {
        return User::where('referal_code', $code)->first();
    }
    public function index()
    {
        return inertia('PaketTrading');
    }
}

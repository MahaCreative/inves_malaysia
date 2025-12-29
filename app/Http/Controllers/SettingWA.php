<?php

namespace App\Http\Controllers;

use App\Models\WhatsAppSetting;
use Illuminate\Http\Request;

class SettingWA extends Controller
{
    public function store(Request $request)
    {
        $user = $request->user();

        $wa = WhatsAppSetting::where('user_id', $user->id)->first();
        $wa->update(['whatsapp' => $request->whatsapp]);
    }
}

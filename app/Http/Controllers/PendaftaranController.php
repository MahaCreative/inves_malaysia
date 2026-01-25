<?php

namespace App\Http\Controllers;

use App\Models\Member;
use App\Models\Profit;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Controllers\SendMessageWa;
use App\Models\User;
use App\Models\WhatsAppSetting;

class PendaftaranController extends Controller
{
    private function generateMemberId()
    {
        do {
            $id = strtoupper(Str::random(8)); // A-Z & 0-9
        } while (\App\Models\Member::where('id_member', $id)->exists());

        return $id;
    }
    public function index($referal_code)
    {
        $user = User::where('referal_code', $referal_code)->first();
        // dd($referal_code);
        $whatsApp = WhatsAppSetting::where('user_id', $user->id)->first();
        return inertia('Pendaftaran', compact('whatsApp'));
    }

    public function store(Request $request, $referal_code)
    {
        $user = User::where('referal_code', $referal_code)->first();
        $whatsApp = WhatsAppSetting::where('user_id', $user->id)->first();
        // dd($request->all());
        $request->validate([
            'nama_member'      => 'required|string|max:255',
            'ic_number'        => 'required|string|max:20',
            'email'            => 'required|email',
            'no_telp'          => 'required|numeric|min_digits:5',
            'alamat_lengkap'   => 'required|string',
            'pekerjaan'        => 'required|string|max:100',
            'nama_rekening'    => 'required|string|max:255',
            'nomor_rekening'   => 'required|numeric|min_digits:6',
            'nama_bank'        => 'required|string|max:100',
        ]);

        $member = Member::create([
            'user_id'         => $user->id,
            'id_member'       => $this->generateMemberId(),
            'nama_member'     => $request->nama_member,
            'ic_number'       => $request->ic_number,
            'email'           => $request->email,
            'no_telp'         => $request->no_telp,
            'alamat_lengkap'  => $request->alamat_lengkap,
            'pekerjaan'       => $request->pekerjaan,
            'nama_rekening'   => $request->nama_rekening,
            'nomor_rekening'  => $request->nomor_rekening,
            'nama_bank'       => $request->nama_bank,
        ]);

        Profit::create([
            'id_member' => $member->id,
        ]);
        $message = "
Halo Admin, Terdapat 1 Pendaftaran Baru Dengan Informasi Berikut Ini
Nama: {$member->nama_member}
IC Number: {$member->ic_number}
No. Telp: {$member->no_telp}
Alamat: {$member->alamat_lengkap}
Pekerjaan: {$member->pekerjaan}
Nama Rekening: {$member->nama_rekening}
Nomor Rekening: {$member->nomor_rekening}
Nama Bank: {$member->nama_bank}
ID Member: {$member->id_member}
        ";
        // normalisasi nomor target: jika diawali 0 => ganti leading 0 menjadi +62
        $target = $whatsApp->whatsapp ?? '';
        if (str_starts_with($target, '0')) {
            $target = '+62' . substr($target, 1);
        } elseif (!str_starts_with($target, '+') && str_starts_with($target, '62')) {
            // jika mulai dengan 62 tanpa plus, tambahkan +
            $target = '+' . $target;
        }

        SendMessageWa::send(
            [
                'target' => $target,
                'message' => $message,
            ]
        );

        return redirect()->back()->with('success', 'Pendaftaran berhasil');
    }
}

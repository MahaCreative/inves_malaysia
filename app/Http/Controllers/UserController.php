<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Inertia\Inertia;

class UserController extends Controller
{
    private function generateMemberId()
    {
        do {
            $id = strtoupper(Str::random(8)); // A-Z & 0-9
        } while (\App\Models\Member::where('id_member', $id)->exists());

        return $id;
    }
    public function create()
    {
        return view('users.create');
    }

    public function index()
    {
        $users = User::with('whatsapp')->select('id', 'name', 'email', 'role', 'referal_code', 'link', 'created_at')->get();
        return inertia('Admin/Users', compact('users'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8',
            'whatsapp' => 'nullable|string|max:50',
        ]);

        $referal_code = $this->generateMemberId();

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'role' => 'users',
            'referal_code' => $referal_code,
            'link' => 'http://dhervainvestindo.site/' . $referal_code,
        ]);

        if ($request->filled('whatsapp')) {
            $user->whatsapp()->create(['whatsapp' => $request->whatsapp]);
        }

        return redirect()->route('dashboard')->with('success', 'User berhasil dibuat.');
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $user->id,
            'password' => 'nullable|string|min:8',
            'whatsapp' => 'nullable|string|max:50',
        ]);

        if (!empty($data['password'])) {
            $data['password'] = Hash::make($data['password']);
        } else {
            unset($data['password']);
        }

        $user->update($data);

        // update or create whatsapp setting
        if (array_key_exists('whatsapp', $data)) {
            if ($user->whatsapp) {
                $user->whatsapp->update(['whatsapp' => $data['whatsapp']]);
            } else {
                $user->whatsapp()->create(['whatsapp' => $data['whatsapp']]);
            }
        }

        return redirect()->back()->with('success', 'User berhasil diperbarui.');
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return redirect()->back()->with('success', 'User berhasil dihapus.');
    }
}

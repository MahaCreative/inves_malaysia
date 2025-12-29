<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('members', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('id_member')->unique();
            $table->string('nama_member');
            $table->string('email');
            $table->string('no_telp');
            $table->string('jenis_kelamin')->nullable();
            $table->string('provinsi')->nullable();
            $table->string('kota')->nullable();
            $table->string('alamat_lengkap')->nullable();
            $table->string('pekerjaan')->nullable();
            $table->string('nama_rekening');
            $table->string('nomor_rekening');
            $table->string('nama_bank');
            $table->string('modal_investasi')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('members');
    }
};

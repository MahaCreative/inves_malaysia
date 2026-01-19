export function formatRupiah(angka) {
    if (angka === null || angka === undefined) return 'RM 0';

    return new Intl.NumberFormat('ms-MY', {
        style: 'currency',
        currency: 'MYR',
        minimumFractionDigits: 0
    }).format(angka);
}

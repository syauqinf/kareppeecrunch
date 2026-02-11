# Images Folder

Folder ini untuk menyimpan gambar-gambar yang digunakan dalam website Kareppe Crunch.

## Cara Menggunakan Background Hero Section

Untuk mengganti background hero section dengan foto dari UMKM:

1. **Letakkan foto** di folder ini (misal: `hero-bg.jpg`)
2. **Edit file** `app/components/Hero.jsx`
3. **Ganti baris 12-14** dengan:
   ```jsx
   <img 
     src="/images/hero-bg.jpg" 
     alt="Kareppe Crunch Potato Field" 
     className="w-full h-full object-cover" 
   />
   ```

## Rekomendasi Foto Background

- **Format**: JPG, PNG, atau WebP
- **Ukuran**: Minimal 1920x1080px (Full HD)
- **Rasio**: 16:9 landscape
- **Kualitas**: High resolution, tidak blur
- **Isi Foto**: Ladang ubi, kebun, atau pemandangan alam yang relevan

## Struktur Folder

```
public/images/
├── hero-bg.jpg          # Background hero section
├── products/            # Foto produk
│   ├── original.jpg
│   ├── pedas.jpg
│   └── keju.jpg
└── about/               # Foto tentang kami
    ├── team.jpg
    └── factory.jpg
```

## Optimasi Gambar

- Gunakan format WebP untuk ukuran lebih kecil
- Kompres gambar dengan tools seperti TinyPNG
- Pastikan gambar tidak terlalu besar (< 500KB)

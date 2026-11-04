const searchForm = document.getElementById("searchForm");
const usernameInput = document.getElementById("username");
const message = document.getElementById("message");
const profile = document.getElementById("profile");

searchForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const username = usernameInput.value.trim();

    if (username === "") {
        message.textContent = "Masukkan username GitHub!";
        profile.innerHTML = "";
        return;
    }

    // Menghapus profil sebelumnya
    profile.innerHTML = "";

    // Menampilkan loading
    message.textContent = "Loading... Sedang mencari profil.";

    try {

        // Mengambil data dari GitHub API
        const response = await fetch(
            `https://api.github.com/users/${encodeURIComponent(username)}`
        );

        // Jika pengguna tidak ditemukan
        if (response.status === 404) {
            message.textContent = "User tidak ditemukan!";
            return;
        }

        // Jika terjadi error lainnya
        if (!response.ok) {
            throw new Error("Terjadi kesalahan saat mengambil data.");
        }

        // Mengubah data menjadi JSON
        const data = await response.json();

        // Menghilangkan pesan loading
        message.textContent = "Profil berhasil ditemukan!";

        // Menampilkan profil pengguna
        profile.innerHTML = `
            <div class="profile-card">

                <img src="${data.avatar_url}" alt="Avatar GitHub">

                <h2>${data.name || data.login}</h2>

                <p>@${data.login}</p>

                <p>${data.bio || "Bio tidak tersedia."}</p>

                <h3>Public Repositories</h3>
                <p>${data.public_repos}</p>

                <a href="${data.html_url}" target="_blank" rel="noopener noreferrer">
                    Lihat Profil GitHub
                </a>

            </div>
        `;

    } catch (error) {

        message.textContent = "Gagal mengambil data. Periksa koneksi internet.";

        console.error(error);

    }

});
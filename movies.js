// ====== KINOLAR RO'YXATI ======
// title bo'sh ("") bo'lsa, vaqtincha author (avvalgi nom) chiqadi.
// Kino nomini shu yerga yozing.
const movies = [
    { title: "", author: "Xudoyberdi Toʻxtaboyev", rating: 7.4, year: 2012, duration: "1 soat 21 minut", genre: "Oilaviy, komediya, sarguzasht", lang: "uz", link: "https://www.youtube.com/watch?v=9q1BH7RvcOs", img: "https://files.itv.uz/uploads/content/poster/2023/08/08/fdaaa42bda4ae9cb811235cd210c8b55-q-700x1002.jpeg" },
    { title: "", author: "Xudoyberdi Toʻxtaboyev", rating: 7.9, year: 2014, duration: "1 soat 23 minut", genre: "Oilaviy, sarguzasht, komediya", lang: "uz", link: "https://www.youtube.com/watch?v=nWQS38wkEzE", img: "https://files.itv.uz/uploads/content/poster/2023/09/20/e3fd30723c7354ab9a9e30e00b4cf626-q-700x1002.jpeg" },
    { title: "", author: "Erbolot Toygonboyev", rating: 6.8, year: 2025, duration: "1 soat 30 minut", genre: "Kriminal, komediya", lang: "uz", link: "https://www.youtube.com/watch?v=KXJXAdZNrAU", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOfdUD9ZHIVDOcXrRfzyGTcqXcijKhkHdSF8jZQ0yQgA&s=10" },
    { title: "", author: "Jahongir Ahmedov", rating: 7.6, year: 2013, duration: "1 soat 29 minut", genre: "Komediya, melodrama", lang: "uz", link: "https://www.youtube.com/watch?v=PoTR6n3Mt6E", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0HkMKVpXqWf3rTbct3OLMj8Zo9qsscsu8bBBnKAJsbQ&s=10" },
    { title: "", author: "Otabek Mirzaxolov", rating: 6.4, year: 2017, duration: "1 soat 23 minut", genre: "Komediya, hajviy film", lang: "uz", link: "https://www.youtube.com/watch?v=LWMPPh2_bZI", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYFIsiY5ePf18pr0l2s-gQxSmfUhmZ0K-BGyrxvPaXhA&s=10" },
    { title: "", author: "Azamat Ismoilov", rating: 6.6, year: 2023, duration: "1 soat 21 minut", genre: "Harbiy, sarguzasht, jangari, tarixiy drama", lang: "uz", link: "https://www.youtube.com/watch?v=vZtjpyFvHqM", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHuG7C7edjgD8UxR5S0WEIHsbQDcR_v2Glss1k40bf3Q&s=10" },
    { title: "", author: "Nozim Tulaqo'jayev", rating: 6.6, year: 2010, duration: "1 soat 36 minut", genre: "Fentezi, sarguzasht, oilaviy komediya", lang: "uz", link: "https://www.youtube.com/watch?v=INi3mBgYuhQ", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmYbpmrUqp9VUeTKWVlx1n5Y6PuiDAnTmVKLMvSt9Nsg&s=10" },
    { title: "", author: "Gregori Levassor", rating: 6.6, year: 2014, duration: "1 soat 32 minut", genre: "Qo'rqinchli (horror), sarguzasht, detektiv", lang: "ru", link: "https://www.youtube.com/watch?v=D-Zs1Z-fQ9g", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKB49bxf4eWKy1dvuAjEzEI2kBwEnXUmgGzSHdxGekYQ&s=10" },
    { title: "", author: "Kashtan Films", rating: 6.6, year: 2025, duration: "1 soat 20 minut", genre: "Komediya, oilaviy, hajviy film", lang: "uz", link: "https://www.youtube.com/watch?v=RpX4OWwZ2go", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtNktfGT3ZsXyIVCINXEfzPs54IO6I0poX6rM9YBVbIw&s=10" },
    { title: "", author: "Nurillo Abbosxon", rating: 6.6, year: 2021, duration: "1 soat 14 minut", genre: "Drama, komediya, o'smirlar hayoti", lang: "uz", link: "https://www.youtube.com/watch?v=Q1W3HsT6kPY", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJ69_3su3rMc42C6CIWRxz8Qo9QnT-6Ct8v5-hj6q1Q&s=10" },
    { title: "Qasoskorlar (The Avengers)", author: "Joss Uedon", rating: 6.6, year: 2012, duration: "2 soat 47 minut", genre: "Ilmiy-fantastik, jangari, superqahramonlar filmi", lang: "en", link: "https://www.youtube.com/watch?v=yYDUveNKg90", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8YeXTXk7lXh7CLfKQ1_KowO5-ZD2ehgPmWoCVNMG9rA&s=10" },
    { title: "Taksi (Taxi)", author: "Jirar Pires", rating: 6.6, year: 1998, duration: "1 soat 29 minut", genre: "Komediya, jangari, poyga", lang: "ru", link: "https://www.youtube.com/watch?v=_OlShfghQn4", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVwiKDazrTR3k_Cy2hTSt4LNsOstDqqBIppPpPjS72Ew&s=10" },
    { title: "", author: "Kashtan Films", rating: 6.6, year: 2026, duration: "1 soat 34 minut", genre: "Melodrama, komediya, sun'iy intellekt (AI) loyihasi", lang: "uz", link: "https://www.youtube.com/watch?v=nyxpFY-e588", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZaR473ZeLbLOqq-UXzy1pLIsnzo6MdiyQAS_-kPvaw&s=10" },
    { title: "", author: "Kashtan Films", rating: 6.6, year: 2026, duration: "1 soat 5 minut", genre: "Melodrama, hayotiy drama, sun'iy intellekt (AI) kino", lang: "uz", link: "https://www.youtube.com/watch?v=GQFdvR1zcIQ", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz3nevSmIp7fOLh9t4j8s1G4bRcF5y0uvPZOTqGYp_tg&s=10" },
    { title: "", author: "Umid Umarov", rating: 6.6, year: 2025, duration: "1 soat 27 minut", genre: "Komediya, oilaviy, sarguzasht, yengil hajviy film", lang: "uz", link: "https://www.youtube.com/watch?v=f_9cECx-2KA", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_uI3IDkSJ6tYNVOzJipI5SIVzDY-n3nZeEbTkNbAZLg&s=10" }
];

// ====== ELEMENTLAR ======
const searchInput = document.getElementById('search');
const langSelect  = document.getElementById('lang');
const sortSelect  = document.getElementById('sort');
const searchBtn   = document.getElementById('searchBtn');
const resetBtn    = document.getElementById('resetBtn');
const grid        = document.getElementById('cards');
const countEl     = document.getElementById('count');
const emptyEl     = document.getElementById('empty');

// Ko'rinadigan nom: title bo'sh bo'lsa author chiqadi
const showName = m => m.title || m.author;

// ====== KARTOCHKA ======
function createCard(m, i) {
    const name = showName(m);
    return `
    <div class="card" style="animation-delay:${i * 50}ms">
        <img class="poster" src="${m.img}" alt="${name}"
             onerror="this.style.background='linear-gradient(135deg,#2b2b4a,#1a1a2e)';this.removeAttribute('src')">
        <span class="rating">⭐ ${m.rating}</span>
        <span class="year-tag">${m.year}</span>
        <div class="info">
            <div class="title">${name}</div>
            ${m.title ? `<div class="author">${m.author}</div>` : ''}
            <div class="duration">⏱ ${m.duration}</div>
            <div class="extra">
                <div class="genre">${m.genre}</div>
                <a class="watch" href="${m.link}" target="_blank">▶ Ko'rish</a>
            </div>
        </div>
    </div>`;
}

// ====== QIDIRUV + FILTR + SARALASH ======
function render() {
    const q    = searchInput.value.trim().toLowerCase();
    const lang = langSelect.value;
    const sort = sortSelect.value;

    let list = movies.filter(m =>
        (!q ||
            showName(m).toLowerCase().includes(q) ||
            m.author.toLowerCase().includes(q) ||
            m.genre.toLowerCase().includes(q)) &&
        (!lang || m.lang === lang)
    );

    const sorters = {
        rating: (a, b) => b.rating - a.rating,
        new:    (a, b) => b.year - a.year,
        old:    (a, b) => a.year - b.year,
        az:     (a, b) => showName(a).localeCompare(showName(b))
    };
    if (sorters[sort]) list = [...list].sort(sorters[sort]);

    grid.innerHTML = list.map(createCard).join('');
    countEl.textContent = `Topildi: ${list.length} ta kino`;
    emptyEl.classList.toggle('hidden', list.length > 0);
}

// ====== HODISALAR ======
searchBtn.addEventListener('click', render);
searchInput.addEventListener('input', render);
searchInput.addEventListener('keydown', e => { if (e.key === 'Enter') render(); });
langSelect.addEventListener('change', render);
sortSelect.addEventListener('change', render);
resetBtn.addEventListener('click', () => {
    searchInput.value = '';
    langSelect.value = '';
    sortSelect.value = '';
    render();
});

render();
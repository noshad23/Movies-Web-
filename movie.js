let url = '';

let butt0 = document.querySelector('#butt-0');

butt0.addEventListener('click', () => {
    let products = [];
    let currentPage= 1;
    async function getdata(page) {
         url = `https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&page=${page}`;
        let response = await fetch(url);
        let data = await response.json();
        products = data.results;
        genratecard(products);
        console.log(data);
        document.getElementById('page-number').textContent = `Page ${currentPage}`;
    }

    function genratecard(data) {
        let cards = '';
        data.forEach(e => {
            cards += `
            <div class="item">
            <a href="#" onclick="event.preventDefault()">
            <img src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="${e.title}">
            <h3>${e.title}</h3>
            <h4>${e.release_date}</h4>
            </a>
            </div>
            `;
        });
        document.querySelector('.container').innerHTML = cards;
    }
    
    let prev = document.querySelector('#prev')
    let next = document.querySelector('#next')
    next.addEventListener('click',()=>{
        console.log('aage ka page nhi aara he')
        currentPage = e.total_pages
        
    })
    
    getdata(currentPage);

    let search = document.querySelector('#ser');

    function getMovie() {
        let srValue = search.value.toLowerCase();
        let filterAry = products.filter(e => e.title.toLowerCase().includes(srValue));
        console.log(filterAry);
        genratecard(filterAry);
    }
});
let butt = document.querySelector('#butt-1');

function bollywood() {
    // e.preventDefault()
    let products = [];
    let currentPage = 1;
    async function getdata(page) {
         url = `https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&with_original_language=hi&page=${page}`;
        let response = await fetch(url);
        let data = await response.json();
        products = data.results;
        genratecard(products);
        console.log(data);
        pagesBtn.textContent = `Page ${currentPage}`;
    }
    function genratecard(data) {
        let cards = '';
        data.forEach(e => {
            cards += `
            <div class="item">
            <a href="#" onclick="event.preventDefault()">
            <img src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="${e.title}">
            <h3>${e.title}</h3>
            <h4>${e.release_date}</h4>
            </a>
            </div>
            `;
        });
        document.querySelector('.container').innerHTML = cards;
    }

    function changePage(direction) {
        if (direction === 'next') {
            currentPage++;
        } else if (direction === 'prev' && currentPage > 1) {
            currentPage--;
        }
        getdata(currentPage);
    }

    getdata(currentPage);

    let search = document.querySelector('#ser');
    let pagesBtn = document.getElementById('page-number')
    function getMovie() {
        // event.preventDefault()
        let srValue = search.value.toLowerCase();
        let filtArray = products.filter(e => e.title.toLowerCase().includes(srValue));
        console.log(filtArray);
        genratecard(filtArray);
    }
}

let butt2 = document.querySelector('#butt-2');

function telagu(){
    let products = [];
    let currentPage = 1;
    async function getdata(page) {
        url = `https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&with_original_language=te&page=${page}`;
        let response = await fetch(url);
        let data = await response.json();
        products = data.results;
        genratecard(products);
        console.log(data);
        document.getElementById('page-number').textContent = `Page ${currentPage}`;
    }

    function genratecard(data) {
        let cards = '';
        data.forEach(e => {
            cards += `
            <div class="item">
            <a href="#" onclick="event.preventDefault()">
            <img src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="${e.title}">
            <h3>${e.title}</h3>
            <h4>${e.release_date}</h4>
            </a>
            </div>
            `;
        });
        document.querySelector('.container').innerHTML = cards;
    }

    function changePage(direction) {
        if (direction === 'next') {
            currentPage++;
        } else if (direction === 'prev' && currentPage > 1) {
            currentPage--;
        }
        getdata(currentPage);
    }

    getdata(currentPage);

    let search = document.querySelector('#ser');

    function getMovie() {
        let srValue = search.value.toLowerCase();
        let filterAry = products.filter(e => e.title.toLowerCase().includes(srValue));
        console.log(filterAry);
        genratecard(filterAry);
    }
};

let butt3 = document.querySelector('#butt-3');

function tamil(){
    let products = [];
    let currentPage = 1;
    async function getdata(page) {
         url = `https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&with_original_language=ta&page=${page}`;
        let response = await fetch(url);
        let data = await response.json();
        products = data.results;
        genratecard(products);
        console.log(data);
        document.getElementById('page-number').textContent = `Page ${currentPage}`;
    }

    function genratecard(data) {
        let cards = '';
        data.forEach(e => {
            cards += `
            <div class="item">
            <a href="#" onclick="event.preventDefault()">
            <img src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="${e.title}">
            <h3>${e.title}</h3>
            <h4>${e.release_date}</h4>
            </a>
            </div>
            `;
        });
        document.querySelector('.container').innerHTML = cards;
    }

    function changePage(direction) {
        if (direction === 'next') {
            currentPage++;
        } else if (direction === 'prev' && currentPage > 1) {
            currentPage--;
        }
        getdata(currentPage);
    }

    getdata(currentPage);

    let search = document.querySelector('#ser');

    function getMovie() {
        let srValue = search.value.toLowerCase();
        let filterAry = products.filter(e => e.title.toLowerCase().includes(srValue));
        console.log(filterAry);
        genratecard(filterAry);
    }
};

let butt4 = document.querySelector('#butt-4');

function anime(){
    let products = [];
    let currentPage = 1;
    async function getdata(page) {
         url = `https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&with_genres=16&page=${page}`;
        let response = await fetch(url);
        let data = await response.json();
        products = data.results;
        genratecard(products);
        console.log(data);
        document.getElementById('page-number').textContent = `Page ${currentPage}`;
    }

    function genratecard(data) {
        let cards = '';
        data.forEach(e => {
            cards += `
            <div class="item">
            <a href="#" onclick="event.preventDefault()">
            <img src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="${e.title}">
            <h3>${e.title}</h3>
            <h4>${e.release_date}</h4>
            </a>
            </div>
            `;
        });
        document.querySelector('.container').innerHTML = cards;
    }

    function changePage(direction) {
        if (direction === 'next') {
            currentPage++;
        } else if (direction === 'prev' && currentPage > 1) {
            currentPage--;
        }
        getdata(currentPage);
    }

    getdata(currentPage);

    let search = document.querySelector('#ser');

    function getMovie() {
        let srValue = search.value.toLowerCase();
        let filterAry = products.filter(e => e.title.toLowerCase().includes(srValue));
        console.log(filterAry);
        genratecard(filterAry);
    }
};

let Series = document.querySelector('#web');
let home = document.querySelector('#home');

function WebSeries(){
    Series.style.background = 'rgb(49, 48, 48)';
    home.style.background ='none';
    let products = [];
    let currentPage = 1;
    async function getdata(page) {
        url = `https://api.themoviedb.org/3/discover/tv?api_key=2fa260ec42c3ae9f620b0a8423ca9a75&page=${page}`;
        let response = await fetch(url);
        let data = await response.json();
        products = data.results;
        genratecard(products);
        console.log(data);
        document.getElementById('page-number').textContent = `Page ${currentPage}`;
    }

    function genratecard(data) {
        let cards = '';
        data.forEach(e => {
            cards += `
            <div class="item">
            <a href="#" onclick="event.preventDefault()">
            <img src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="${e.title}">
            <h3>${e.name}</h3>
            <h4>${e.original_language}</h4>
            </a>
            </div>
            `;
        });
        document.querySelector('.container').innerHTML = cards;
    }

    function changePage(direction) {
        if (direction === 'next') {
            currentPage++;
        } else if (direction === 'prev' && currentPage > 1) {
            currentPage--;
        }
        getdata(currentPage);
    }

    getdata(currentPage);

    let search = document.querySelector('#ser');

    function getMovie() {
        let srValue = search.value.toLowerCase();
        let filterAry = products.filter(e => e.title.toLowerCase().includes(srValue));
        console.log(filterAry);
        genratecard(filterAry);
    }
};

let trailer = document.querySelector('#Trailer')
function Trailer(){
    trailer.style.background = 'rgb(49, 48, 48)';
    Series.style.background = 'none';
    home.style.background ='none';
    let products = [];
    let currentPage = 1;
    async function getdata(page) {
        url = `https://api.themoviedb.org/3/tv/1399/videos?api_key=2fa260ec42c3ae9f620b0a8423ca9a75`;
        let response = await fetch(url);
        let data = await response.json();
        products = data.results;
        genratecard(products);
        console.log(data);
        document.getElementById('page-number').textContent = `Page ${currentPage}`;
    }

    function genratecard(data) {
        let cards = '';
        data.forEach(e => {
            cards += `
            <div class="item">
            <a href="#" onclick="event.preventDefault()">
            <img src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="${e.title}">
            <h3>${e.name}</h3>
            <h4>${e.published_at}</h4>
            </a>
            </div>
            `;
        });
        document.querySelector('.container').innerHTML = cards;
    }

    function changePage(direction) {
        if (direction === 'next') {
            currentPage++;
        } else if (direction === 'prev' && currentPage > 1) {
            currentPage--;
        }
        getdata(currentPage);
    }

    getdata(currentPage);

    let search = document.querySelector('#ser');

    function getMovie() {
        let srValue = search.value.toLowerCase();
        let filterAry = products.filter(e => e.title.toLowerCase().includes(srValue));
        console.log(filterAry);
        genratecard(filterAry);
    }
};

let mcu = document.querySelector('#mcu')

function Marvel(){
    mcu.style.background = 'rgb(49, 48, 48)';
    trailer.style.background = 'none';
    Series.style.background = 'none';
    home.style.background ='none';
    let products = [];
    let currentPage = 1;
    async function getdata(page) {
        // let url = `https://api.themoviedb.org/3/search/collection?api_key=2fa260ec42c3ae9f620b0a8423ca9a75&query=Avengers`;
         url = `https://api.themoviedb.org/3/discover/movie?api_key=2fa260ec42c3ae9f620b0a8423ca9a75&with_keywords=180547`;
        let response = await fetch(url);
        let data = await response.json();
        products = data.results;
        genratecard(products);
        console.log(data);
        document.getElementById('page-number').textContent = `Page ${currentPage}`;
    }

    function genratecard(data) {
        let cards = '';
        data.forEach(e => {
            cards += `
            <div class="item">
            <a href="#" onclick="event.preventDefault()">
            <img src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="${e.title}">
            <h3>${e.title}</h3>
            <h4>${e.release_date}</h4>
            </a>
            </div>
            `;
        });
        document.querySelector('.container').innerHTML = cards;
    }

    function changePage(direction) {
        if (direction === 'next') {
            currentPage++;
        } else if (direction === 'prev' && currentPage > 1) {
            currentPage--;
        }
        getdata(currentPage);
    }

    getdata(currentPage);

     search = document.querySelector('#ser');

    function getMovie() {
        let srValue = search.value.toLowerCase();
        let filterAry = products.filter(e => e.title.toLowerCase().includes(srValue));
        console.log(filterAry);
        genratecard(filterAry);
    }
};

let coll = document.querySelector('#collect')
function collection(){
    coll.style.background = 'rgb(49, 48, 48)';
    mcu.style.background = 'none';
    trailer.style.background = 'none';
    Series.style.background = 'none';
    home.style.background ='none';

    let products = [];
    let currentPage = 1;

    async function getdata(page) {
         url = `https://api.themoviedb.org/3/search/collection?api_key=2fa260ec42c3ae9f620b0a8423ca9a75&query=Avengers`;
        
        let response = await fetch(url);
        let data = await response.json();
        products = data.results;
        genratecard(products);
        console.log(data);
        document.getElementById('page-number').textContent = `Page ${currentPage}`;
    }

    function genratecard(data) {
        let cards = '';
        data.forEach(e => {
            cards += `
            <div class="item">
            <a href="#" onclick="event.preventDefault()">
            <img src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="${e.title}">
            <h3>${e.name}</h3>
            <h4>${e.release_date}</h4>
            </a>
            </div>
            `;
        });
        document.querySelector('.container').innerHTML = cards;
    }

    function changePage(direction) {
        if (direction === 'next') {
            currentPage++;
        } else if (direction === 'prev' && currentPage > 1) {
            currentPage--;
        }
        getdata(currentPage);
    }

    getdata(currentPage);

    let search = document.querySelector('#ser');

    function getMovie() {
        let srValue = search.value.toLowerCase();
        let filterAry = products.filter(e => e.title.toLowerCase().includes(srValue));
        console.log(filterAry);
        genratecard(filterAry);
    }
};

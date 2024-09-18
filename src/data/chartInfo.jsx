import data from '../movies.json'


// by decade

const d1930 = data.filter((movie)=> movie.released >= 1930 && movie.released < 1940).length
const d1940 = data.filter((movie)=> movie.released >= 1940 && movie.released < 1950).length
const d1950 = data.filter((movie)=> movie.released >= 1950 && movie.released < 1960).length
const d1960 = data.filter((movie)=> movie.released >= 1960 && movie.released < 1970).length
const d1970 = data.filter((movie)=> movie.released >= 1970 && movie.released < 1980).length
const d1980 = data.filter((movie)=> movie.released >= 1980 && movie.released < 1990).length
const d1990 = data.filter((movie)=> movie.released >= 1990 && movie.released < 2000).length
const d2000 = data.filter((movie)=> movie.released >= 2000 && movie.released < 2010).length
const d2010 = data.filter((movie)=> movie.released >= 2010 && movie.released < 2020).length
const d2020 = data.filter((movie)=> movie.released >= 2020 && movie.released < 2030).length


export const decade = {
    labels: [`1930's`,`1940's`, `1950's`, `1960's`, `1970's`, `1980's`, `1990's`, `2000's`, `2010's`,`2020's`],
    datasets: [
        {
            label: 'Movies By Decade',
            data: [d1930, d1940, d1950, d1960, d1970, d1980, d1990, d2000, d2010, d2020],
            backgroundColor:[
                'rgb(176, 218, 190, 0.6)',
                'rgb(218, 189, 143, 0.6)',
                'rgb(245, 133, 91, 0.6)',
                'rgb(45, 117, 140, 0.6)',
                'rgb(253, 77, 46, 0.6)',
                'rgb(249, 235, 15, 0.6)',
                'rgb(40, 126, 158, 0.6)',
                'rgb(35, 213, 19, 0.6)',
                'rgb(239, 182, 191, 0.6)',
                'rgb(231, 122, 106, 0.6)',
            ],
            
            borderColor: [
                'rgb(58, 115, 89, 1)',
                'rgb(179, 128, 105, 1)',
                'rgb(232, 27, 35, 1)',
                'rgb(117, 140, 51, 1)',
                'rgb(169, 45, 163, 1)',
                'rgb(255, 33, 83, 1)',
                'rgb(22, 77, 176, 1)',
                'rgb(255, 98, 0, 1)',
                'rgb(200, 110, 76, 1)',
                'rgb(32, 94, 88, 1)',
            ],
            borderWidth: 2,
            borderRadius: 0,
            inflateAmount: 0,
            borderSkipped: 'start'
        }
    ]
}

//by rating

const g = data.filter((movie)=> movie.rated == 'G').length
const pg = data.filter((movie)=> movie.rated == 'PG').length
const pg13 = data.filter((movie)=> movie.rated == 'PG-13').length
const r = data.filter((movie)=> movie.rated == 'R').length
const nr = data.filter((movie)=> movie.rated == 'NR').length
const approved = data.filter((movie)=> movie.rated == 'Approved').length


export const rating = {
    labels: ['G', "PG", "PG-13", 'R', 'NR', "Approved"],
    datasets: [
        {
            label: 'Movies By Rating',
            data: [g, pg, pg13, r, nr, approved],
            backgroundColor:[
                'rgb(82, 245, 108, 0.6)',
                'rgb(79, 101, 240, 0.6)',
                'rgb(240, 223, 101, 0.6)',
                'rgb(240, 17, 0, 0.6)',
                'rgb(184, 30, 239, 0.6)',
                'rgb(58, 217, 240, 0.6)'
            ],
            
            borderColor: [
                'rgb(65, 196, 87, 1)',
                'rgb(79, 202, 240, 1)',
                'rgb(238, 223, 147, 1)',
                'rgb(240, 73, 73, 1)',
                'rgb(219, 1, 239, 1)',
                'rgb(115, 222, 240, 1)'
            ],
            borderWidth: 2
        }
    ]
}

// by genre

const action = data.filter((movie) => movie.genres.includes('Action')).length
const adventure = data.filter((movie) => movie.genres.includes('Adventure')).length
const animation = data.filter((movie) => movie.genres.includes('Animation')).length
const bio = data.filter((movie) => movie.genres.includes('Biography')).length
const comedy = data.filter((movie) => movie.genres.includes('Comedy')).length
const crime = data.filter((movie) => movie.genres.includes('Crime')).length
const drama = data.filter((movie) => movie.genres.includes('Drama')).length
const family = data.filter((movie) => movie.genres.includes('Family')).length
const fantasy = data.filter((movie) => movie.genres.includes('Fantasy')).length
const horror = data.filter((movie) => movie.genres.includes('Horror')).length
const music = data.filter((movie) => movie.genres.includes('Music')).length
const mystery = data.filter((movie) => movie.genres.includes('Mystery')).length
const romance = data.filter((movie) => movie.genres.includes('Romance')).length
const scifi = data.filter((movie) => movie.genres.includes('Sci-Fi')).length
const sport = data.filter((movie) => movie.genres.includes('Sport')).length
const thriller = data.filter((movie) => movie.genres.includes('Thriller')).length
const western = data.filter((movie) => movie.genres.includes('Western')).length


export const genre = {
    labels: ['Action', 'Adventure', ' Animation', 'Biography', 'Comedy', 'Crime', 'Drama', 'Family', 'Fantasy', 'Horror', 'Music', 'Mystery', 'Romance', 'Sci-Fi', 'Sport', 'Thriller', 'Western'],
    datasets: [
        {
            label: 'Movies By Genre',
            data: [action, adventure, animation, bio, comedy, crime, drama, family, fantasy, horror, music, mystery, romance, scifi, sport, thriller, western],
            backgroundColor:[
                'rgb(225, 15, 53, 0.6)',
                'rgb(30, 22, 222, 0.6)',
                'rgb(22, 199, 122, 0.6)',
                'rgb(224, 207, 24, 0.6)',
                'rgb(224, 131, 25, 0.6)',
                'rgb(224, 31, 31, 0.6)',
                'rgb(107, 57, 142, 0.6)',
                'rgb(222, 156, 22, 0.6)',
                'rgb(0, 219, 216, 0.6)',
                'rgb(225, 26, 13, 0.6)',
                'rgb(112, 106, 53, 0.6)',
                'rgb(34, 143, 127, 0.6)',
                'rgb(214, 0, 17, 0.6)',
                'rgb(0, 219, 52, 0.6)',
                'rgb(60, 0, 219, .06)',
                'rgb(219, 4, 0, 0.6)',
                'rgb(214, 209, 174, 0.6)'

            ],
            
            borderColor: [
                'rgb(137, 59, 74, 1 )',
                'rgb(224, 193, 38, 1)',
                'rgb(224, 97, 0, 1)',
                'rgb(75, 22, 222 1)',
                'rgb(22, 163, 222, 87)',
                'rgb(142, 39 , 39, 1)',
                'rgb(198, 222, 22, 1)',
                'rgb(31, 105, 224, 1)',
                'rgb(214, 77, 0, 1)',
                'rgb(55, 145, 92, 1)',
                'rgb(216, 213, 224, 1)',
                'rgb(140, 218, 206)',
                'rgb(143, 0, 12, 1)',
                'rgb(0, 110, 26, 1)',
                'rgb(214, 196, 0, 1)',
                'rgb(158, 3, 0, 1)',
                'rgb(143, 133, 63, 1)'
            ],
            borderWidth: 2
        }
    ]
}




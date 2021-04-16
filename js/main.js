/**
 *  OMDb template
 *	Documentation: http://www.omdbapi.com/
 *  Generate an API key here: http://www.omdbapi.com/apikey.aspx
 */
/**
* According to documentation, you need at least 2 parameters when calling the API http://www.omdbapi.com/
* 1 Required parameter: apikey
* 2 Required parameter: One of the following i=, t= or s=
*
* Example with parameter s=star trek
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek
*
* Example with parameter s=star trek AND y=2020
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&y=2020
*
* Example with parameter s=star trek AND type=series
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&type=series
*
*/
const url = 'http://www.omdbapi.com/?apikey=83256d1f&s=star%20wars&type=movie';
const fetchBtn = document.getElementById('fetch-btn');
fetchBtn.addEventListener('click', fetchData);

async function fetchData() {
    try {
        const response = await fetch(url);
        console.log(response);

        if (!response.ok) {
            throw new Error('HTTP Error! status: ' + response.status);
        }
        const movies = await response.json();
        console.log(movies);

        let displayMoviesHtml = "";
        for (let movie of movies.Search) {
            displayMoviesHtml += `
            <article>
                <img src="${movie.Poster}">
                <h2>${movie.Title}</h2>
                <i>${movie.Year}</i>
            </article>
            `;
        }
        document.getElementById('movie-list').innerHTML = displayMoviesHtml;


    } catch (error) {
        console.log(error);
    }
}
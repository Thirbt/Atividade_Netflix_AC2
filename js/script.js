loadVideoPrincipal();
loadTop10();
loadAlta();
loadAcao();

function loadVideoPrincipal(){
    const urlVideo = 'https://api.themoviedb.org/3/movie/603692/videos?language=en-US';
    const urlOverview ='https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

    let video = document.getElementById("video-principal");
    let descricao = document.getElementById("descricao");
    let titulo = document.getElementById("titulo");
    requisitionVideo(urlVideo, video, 13);
    requisitionOverview(urlOverview, descricao, titulo, 1);
}

function loadTop10() {
    let filmes = [238, 424, 239, 240, 76600, 640146, 594767, 758323];
    let cont = 1;

    for (let i = 0; i < filmes.length; i++) {
        const urlVideo = 'https://api.themoviedb.org/3/movie/' + filmes[i] + '/videos?language=en-US';
        const urlImage = 'https://api.themoviedb.org/3/movie/' + filmes[i] + '/images';
        let video = document.getElementById('serie' + cont);
        let image = document.getElementById('card' + cont);
        video.addEventListener('mouseover', function() {
            requisitionVideo(urlVideo, video, 1);
        })
        requisitionImage(urlImage, image, 0);
        cont++;
    }
}

function loadAlta() {
    let filmes = [389, 496243, 497, 882569, 447365, 840326, 278, 747188];
    let cont = 1;

    for (let i = 0; i < filmes.length; i++) {
        const urlVideo = 'https://api.themoviedb.org/3/movie/' + filmes[i] + '/videos?language=en-US';
        const urlImage = 'https://api.themoviedb.org/3/movie/' + filmes[i] + '/images';
        let video = document.getElementById('alta' + cont);
        let image = document.getElementById('altaCard' + cont);
        video.addEventListener('mouseover', function() {
            requisitionVideo(urlVideo, video, 1);
        })
        requisitionImage(urlImage, image, 0);
        cont++;
    }
}

function loadAcao() {
    let filmes = [884605, 298618, 869626, 842544, 532408, 758336, 697843, 976573];
    let cont = 1;

    for (let i = 0; i < filmes.length; i++) {
        const urlVideo = 'https://api.themoviedb.org/3/movie/' + filmes[i] + '/videos?language=en-US';
        const urlImage = 'https://api.themoviedb.org/3/movie/' + filmes[i] + '/images';
        let video = document.getElementById('acao' + cont);
        let image = document.getElementById('acaoCard' + cont);
        video.addEventListener('mouseover', function() {
            requisitionVideo(urlVideo, video, 1);
        })
        requisitionImage(urlImage, image, 0);
        cont++;
    }
}

function requisitionImage(url, image, num) {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGE3ZjEzMDI0OTI3NzM3NDAzNGFhMjYwM2IwYjY4NCIsInN1YiI6IjY0NmZkZTA1NzcwNzAwMDExOTI0MmJkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vM60jB_-uxM694lHSF3GITFG7YKMTGuvOBsiKByDJR4'
        }
      };

      fetch(url, options)
      .then(response => response.json())
      .then((data) => {

          let link = "https://image.tmdb.org/t/p/w780/" + data.posters[num].file_path;
          console.log(link);
          image.src = link;

      })
      .catch(err => console.error(err));
}

function requisitionOverview(url, text, title, num) {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGE3ZjEzMDI0OTI3NzM3NDAzNGFhMjYwM2IwYjY4NCIsInN1YiI6IjY0NmZkZTA1NzcwNzAwMDExOTI0MmJkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vM60jB_-uxM694lHSF3GITFG7YKMTGuvOBsiKByDJR4'
        }
      };

      fetch(url, options)
      .then(response => response.json())
      .then((data) => {

          let overview = data.results[num].overview;
          let titulo = data.results[num].title;
          console.log(overview);
          console.log(titulo);
          text.textContent = overview;
          title.textContent = titulo;

      })
      .catch(err => console.error(err));
}

function requisitionVideo(url, video, num) {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGE3ZjEzMDI0OTI3NzM3NDAzNGFhMjYwM2IwYjY4NCIsInN1YiI6IjY0NmZkZTA1NzcwNzAwMDExOTI0MmJkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vM60jB_-uxM694lHSF3GITFG7YKMTGuvOBsiKByDJR4'
        }
    }
    fetch(url, options)
        .then(response => response.json())
        .then((data) => {

            let link = "https://www.youtube.com/embed/" + data.results[num].key;
            console.log(link);
            video.src = link;

        })
        .catch(err => console.error(err));
}
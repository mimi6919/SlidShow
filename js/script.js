let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
   "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/A_cat_on_a_motorcycle_in_the_medina_of_Tunis_20171017_131525.jpg/1200px-A_cat_on_a_motorcycle_in_the_medina_of_Tunis_20171017_131525.jpg",
  "https://img.benesse-cms.jp/pet-cat/item/image/normal/3315437f-8cd9-4741-acc7-19c550e92bde.jpg?w=1120&h=1120&resize_type=cover&resize_mode=force",
  "https://i.kobe-np.co.jp/rentoku/omoshiro/202112/img/d_14902568.jpg"
  
];

function left() {
    // console.log(count);
    count--;
    if (count <= 0) {
        count = url.length - 1;
    }
    mainElement.setAttribute('src', url[count]);
}

function right() {
    count++;
    if (count >= url.length) {
        count = 0;
    }
    mainElement.setAttribute('src', url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
    right();
    timer = setTimeout(function() {
        autoPlay();
    }, 200);
}

function play() {
    if (nowPlaying) {
        return;
    }
    nowPlaying = true;
    autoPlay();
}

function stop() {
    clearTimeout(timer);
    nowPlaying = false;
}

function reset() {
    stop();
    mainElement.setAttribute('src', url[0]);
    count = 0;
}
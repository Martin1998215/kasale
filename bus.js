const cover = document.querySelector('.cover-nav-bar');
const addBtn = document.querySelector('.more-product-1');
const deleteBtn = document.querySelector('.more-product-2');
const section = document.querySelector('.section-2-body');
const sectionLeftMenu = document.querySelector('.section-1');
const menuBtn = document.querySelector('.menu-btn');
// const projectBtn = document.querySelector('.project-title-1');
// const projectDesignStatementBtn = document.querySelector('.project-title-2');
// const projectDesignStatement = document.querySelector('.project-end-part');
// const projectDesignCancelBtn = document.querySelector('.design-cancel');
// const projectFooter = document.querySelector('.project-footer');
const highlightShow = document.querySelector('.highlights-main-section-1');
const highlightView = document.querySelector(".highlight-view");
const serviceTextHead = document.querySelector('.service-text-head');
const serviceTextPara = document.querySelector('.service-text-para');
const cancelBtn = document.querySelector('.service-cancel-btn');
const serviceViewBtn = document.querySelector('.service-view');
const serviceDisplay = document.querySelector('.service-display-1');
const serviceDisplayFront = document.querySelector('.service-display-front');
// const projectDisplay = document.querySelector('.project-side-part');

const updatePhoto = document.querySelector('.update-sub-1-photo');
const updatePhotoBtnPrev = document.querySelector('.update-sub-1-Btn-1');
const updatePhotoBtnNext = document.querySelector('.update-sub-1-Btn-2');
const updateSubText = document.querySelector('.update-sub-1-text');
const updateSubDate = document.querySelector('.update-sub-1-date');
//const updateSubText = document.querySelector('.update-sub-1-text');

const updateList = document.querySelector('.update-sub');




let status = false;
let count = 0;

let highlightStatus = false;

let menuStatus = false;

menuBtn.addEventListener('click', function () {
  if (menuStatus == false) {
    sectionLeftMenu.style.display = 'flex';
    menuStatus = true;
  } else if (menuStatus == true) {
    sectionLeftMenu.style.display = 'none';
    menuStatus = false;
  }
});

menuBtn.addEventListener('click', function(){
  console.log("clicked")
})

function removeMenuBar() {
  sectionLeftMenu.style.display = 'none';
}



// udpdates section
const updateCover = document.querySelector(".update-cover");
const updateImg = document.querySelectorAll("img.update-sub-1-photo");
const progress = document.querySelector('.update-scroll-bar');
let tick = 0;
let timer = 1;

setInterval(function () {
  tick++;
  if (tick > updateImg.length - 1) {
    tick = 0;
  }
  updateCover.style.transform = "translateX(" + -tick * 100 + "%" + ")";

}, 7000);


const hlArry = [
  { name: 'Wheelchair',
  group: 'Chair',
    pic: "Photos/a11.jpg",
    text: "this is one of our insane designs of a wheelchair we made. it is very confortable to seat. and the material is so strong.it will save many more years to come."
  },
  {  name: '4 in 1 Chair',
  group: 'Chair',
    pic: "Photos/a39.jpg",
    text: "A highly confortable 4 in 1 chair. can be in various places- in sporting events, church areas, schools, hospitals and just anywhere else. it is very affordable."
  },
  {  name: 'Vanish',
  group: 'Texture',
    pic: "Photos/a21.jpg",
    text: "Vanishing is one of the things that adds beauty to metallic materials. it makes products look as new as ever. bring all your old products so that we can make them as new as ever."
  },
  {  name: 'Kasale Engineering',
  group: 'About Us',
    pic: "Photos/a1.jpg",
    text: "Kasale Engineering is a company that wins contracts from schools, colleges, hospitals, homes and just anywhere else calling for furniture. we are a company that mass produce. try us and see for yourself."
  }
];





const highlightText = document.querySelector(".show-1-para");
const highlightImg = document.querySelector(".show-2-pic");
const highlightName = document.querySelector(".show-name");
const highlightGroup = document.querySelector(".show-group");
const highlightNext = document.querySelector(".show-2-next-pic");

let num = 0;

setInterval(function () {
  num++;

  if (num > hlArry.length - 1) {
    num = 0;
  }
  highlightImg.src = hlArry[num].pic;
  highlightText.innerHTML = hlArry[num].text;
  highlightName.innerHTML = hlArry[num].name;
  highlightGroup.innerHTML = hlArry[num].group;
}, 7000);

let nextNum = 1;

setInterval(function () {
  nextNum++;

  if (nextNum > hlArry.length - 1) {
    nextNum = 0;
  }
  highlightNext.src = hlArry[nextNum].pic;
}, 7000);


const Data = [
  {
background: "url('Photos/a12.jpg')",
year: "2020*",
text_1: 'Garden Chair',
text_2: "Good Quality"
},
{background: "url('Photos/a9.jpg')",
year: "2020*",
text_1: 'Order Set',
text_2: "Standard Quality"
},
{
  background: "url('Photos/a34.jpg')",
 year: "2020**",
 text_1: 'Office Table',
 text_2: "Excellent Quality"
 },
{background: "url('Photos/a11.jpg')",
year: "2020*",
text_1: 'Wheel Chair',
text_2: "Good Quality"
},
// {
// background: "url('Photos/a37.jpg')",
// year: "2018",
// text_1: 'baby Chair',
// text_2: "Standard Quality"
// },
// {
// background: "url('Photos/a28.jpg')",
// year: "2016",
// text_1: 'Office Chair',
// text_2: "Good Quality"
// },
// {
// background: "url('Photos/a5.jpg')",
// year: "2012",
// text_1: 'Home Chair',
// text_2: "Low Quality"
//    }
]

let project_counter = 0;
const project_quality = document.querySelector('.project-quality');
const project_year = document.querySelector('.project-year');
const project_title = document.querySelector('.project-para-title');
const project_contain = document.querySelector('.project-contain');
const project_left_btn = document.querySelector('.project-left');
const project_right_btn = document.querySelector('.project-right');

project_left_btn.addEventListener('click', function(){
  project_counter--;
if(project_counter < 0){
  project_counter = Data.length - 1;
}
project_quality.innerHTML = Data[project_counter].text_2;
project_title.innerHTML = Data[project_counter].text_1;
project_year.innerHTML = Data[project_counter].year;
project_contain.style.backgroundImage = Data[project_counter].background;

});

project_right_btn.addEventListener('click', function(){
  project_counter++;
if(project_counter > Data.length - 1){
  project_counter = 0;
}

project_quality.innerHTML = Data[project_counter].text_2;
project_title.innerHTML = Data[project_counter].text_1;
project_year.innerHTML = Data[project_counter].year;
project_contain.style.backgroundImage = Data[project_counter].background;

});




// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -17.8477, lng: 25.8684 };
  // The map, centered at Uluru
  const options = {
      zoom: 14,
      center: uluru,
  }

  const map = new google.maps.Map(document.getElementById("map"), options);
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
      position: uluru,
      map: map,
  });

}
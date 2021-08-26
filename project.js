const sectionLeftMenu = document.querySelector('.section-1');
const menuBtn = document.querySelector('.menu-btn');

const cover_photos = document.querySelector('.cover-photos');
const cover_header = document.querySelector('.cover-header');
const text_1 = document.querySelector('.cover-text-1');
const text_2 = document.querySelector('.cover-text-2');
 // const menuBtn = document.querySelector('.menu-btn');

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


const Data = [
    {
background: 'Photos/a12.jpg',
year: "2020*",
text_1: 'Garden Chair',
text_2: "Good Quality"
},
{
background: 'Photos/a37.jpg',
year: "2018",
text_1: 'baby Chair',
text_2: "Standard Quality"
},
{
background: 'Photos/a28.jpg',
year: "2016",
 text_1: 'Office Chair',
text_2: "Good Quality"
},
{
background: 'Photos/a5.jpg',
year: "2012",
text_1: 'Home Chair',
text_2: "Low Quality"
     },
 {
 background: 'Photos/a34.jpg',
year: "2020**",
text_1: 'Office Table',
text_2: "Excellent Quality"
},
{
background: 'Photos/a36.jpg',
year: "2020*",
text_1: 'Affordable Table',
text_2: "Good Quality"
},
{
background: 'Photos/a23.jpg',
year: "2015",
text_1: 'Kitchen Table',
text_2: "Stndard Quality"
 },
{background: 'Photos/a3.jpg',
 year: "2019*",
 text_1: 'School Table',
text_2: "Good Quality"
 },
{
background: 'Photos/a15.jpg',
year: "2011",
text_1: 'Mediam Desk',
text_2: "Standard Quality"
},
{
background: 'Photos/a40.jpg',
 year: "2020*",
text_1: 'Garden Desk',
text_2: "Excellency Quality"
},
{
background: 'Photos/a29.jpg',
year: "2018*",
 text_1: 'Work Desk',
 text_2: "Good Quality"
},
{background: 'Photos/a6.jpg',
year: "2014",
text_1: 'Outdoor Desk',
text_2: "Standard Quality"
},
{background: 'Photos/a8.jpg',
year: "2016",
text_1: 'Hospital Bed',
text_2: "Nice Quality"
},
{background: 'Photos/a30.jpg',
year: "2017",
text_1: 'King Size Bed',
text_2: "Standard Quality"
},
{background: 'Photos/a20.jpg',
year: "2012",
text_1: 'Bunker Bed',
text_2: "Low Quality"
},
{background: 'Photos/a9.jpg',
year: "2020*",
text_1: 'Order Set',
text_2: "Standard Quality"
},
{background: 'Photos/a10.jpg',
year: "2017*",
text_1: 'Set',
text_2: "Perfect Quality"
},
{background: 'Photos/a11.jpg',
year: "2020*",
text_1: 'Wheel Chair',
text_2: "Good Quality"
},
{background: 'Photos/a25.jpg',
year: "2010*",
text_1: 'Dining Set',
text_2: "Good Quality"
},
{background: 'Photos/a13.jpg',
year: "2021*",
text_1: 'Wheelbarrow',
text_2: "Good Quality"
}


]

const cover_all = document.querySelector('.cover');

function products(menu){
let x = menu.map(item => {
return `<div class="cover-element">
    <div class="cover-head">
    <img src=${item.background} alt="photo" class="cover-photo" />
    <h6 class="cover-header"><i>${item.year}</i></h6>
    </div>
  <div class="cover-para">
<h5 class="cover-text-1">${item.text_1}</h5>
<h5 class="cover-text-2">${item.text_2}</h5>
  </div>
</div>`
})

cover_all.innerHTML = x;
}


products(Data)
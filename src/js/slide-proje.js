let productse = [
    {
        "id":1,
        "title":"Villa with garden",
        "place":"Trani - Italy",
        "brand":"Sloped Pergolas, Glass Walls",
        "thumbnail":"https://www.ministryofvillas.com/wp-content/uploads/2015/07/bali-serenevillas-hibiscus-12.jpg"
    },
    {
        "id":2,
        "title":"Contemporary house",
        "place":"Portorose - Slovenia",
        "brand":"Bioclimatic Pergolas",
        "thumbnail":"https://juliasbali.com/wp-content/uploads/2016/07/villa-tjitrap-garden-view-entertainment-room.jpg"

    },
    {
        "id":3,
        "title":"Family house with garden",
        "place":"Antibes - France",
        "brand":"Sloped Pergolas, Glass walls",
        "thumbnail":"https://t4.ftcdn.net/jpg/02/09/12/47/360_F_209124756_OQZUOTTFGBfygAGE5qzRzgRR5IHVq4y4.jpg"

    },
    {
        "id":4,
        "title":"Villa with garden",
        "place":"Trani - Italy",
        "brand":"Sloped Pergolas, Glass walls",
        "thumbnail":"https://img.freepik.com/premium-photo/exterior-design-house-home-pool-villa-feature-swimming-pool-terrace-landscape-garden-sun-bed_176546-393.jpg"

    },
    {
        "id":5,
        "title":"Family house with garden",
        "place":"Antibes - France",
        "brand":"Sloped Pergolas, Glass walls",
        "thumbnail":"https://i.pinimg.com/736x/dd/6d/8d/dd6d8ddd40d48f351f1481631da6ea0d.jpg"

    },
    {
        "id":6,
        "title":"Villa with garden",
        "place":"Trani - Italy",
        "brand":"Sloped Pergolas, Glass walls",
        "thumbnail":"https://img.freepik.com/premium-photo/exterior-design-house-home-pool-villa-feature-swimming-pool-terrace-landscape-garden-sun-bed_176546-393.jpg"

    }
    
]



const productsElement = document.querySelector(".cardOne-wrapper");
productse.forEach(item => productsElement.innerHTML += `

<div class="cardOne swiper-slide">
<div class="image-content">
  <div class="cardOne-image">
  <div class="villagesBox">
<img
src="${item.thumbnail}"
alt=""
/>
<div class="villagesBoxText">
<h3 style="display: flex;  margin-left: 16px;">${item.title}</h3>
<div class="villagesBoxTextOne"  style="display: flex; width: 60%; background: #F5F5F5; border-radius: 100px; padding: 10px; margin-left: 10px; margin-bottom: 10px;">
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
>
  <g clip-path="url(#clip0_72_10940)">
    <path
      d="M12 12.8572C15.3137 12.8572 18 10.1709 18 6.85718C18 3.54347 15.3137 0.857178 12 0.857178C8.68629 0.857178 6 3.54347 6 6.85718C6 10.1709 8.68629 12.8572 12 12.8572Z"
      stroke="#000001"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 12.8572V23.1429"
      stroke="#000001"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.42773 23.1429H14.5706"
      stroke="#000001"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <defs>
    <clipPath id="clip0_72_10940">
      <rect width="24" height="24" fill="white" />
    </clipPath>
  </defs>
</svg>
<p>${item.place}</p>
</div>
<div class="villagesBoxTextTwo"  style="display: flex;  width: 280px; background: #F5F5F5; border-radius: 100px; padding: 10px; margin-left: 10px;  margin-bottom: 10px;">
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
>
  <g clip-path="url(#clip0_72_10947)">
    <path
      d="M14.5717 23.1429H0.857422V6.85718L7.71456 0.857178L14.5717 6.85718V23.1429Z"
      stroke="#000001"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.5723 23.1429H23.1437V11.1429H14.5723"
      stroke="#000001"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.71484 23.1429V19.7144"
      stroke="#000001"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.14258 14.5714H10.2854"
      stroke="#000001"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.14258 9.42859H10.2854"
      stroke="#000001"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <defs>
    <clipPath id="clip0_72_10947">
      <rect width="24" height="24" fill="white" />
    </clipPath>
  </defs>
</svg>
<p style="margin-left:4px;">${item.brand}</p>

</div>
<div class="buttonJs" style =" margin-left: 10px;">
<button><a href="./projectdetail.html">Find Out More</a>
<svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
<g clip-path="url(#clip0_72_10959)">
<path d="M9.78355 6.5576L3.84115 12.5L2.22115 10.88L6.59875 6.5L2.21875 2.12L3.84115 0.5L9.78355 6.4424L9.72595 6.5L9.78355 6.5576Z" fill="#333333"/>
</g>
<defs>
<clipPath id="clip0_72_10959">
<rect width="12" height="12" fill="white" transform="translate(0 0.5)"/>
</clipPath>
</defs>
</svg>
</button>

</div>
</div>
</div>
</div>
</div>
</div>

`);


// var swiper = new Swiper(".slider-content", {
//     slidesPerView: 1,
//     spaceBetween: 20,
//     // slidesPerGroup: 3,
//     loop: true,
//     // loopFillGroupWithBlank: true,
//     centerSlide: "true",
//     fade: "true",
//     grapCursor: "true",
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       dynamicBullets: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
  
//     breakpoints: {
//       0: {
//         slidesPerView: 1,
//       },
//       520: {
//         slidesPerView: 2,
//       },
//       950: {
//         slidesPerView: 3,
//       },
//     },
//   });
  
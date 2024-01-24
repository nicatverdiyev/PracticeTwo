let products = [
    {
        "id":1,
        "title":"Villa with garden",
        "place":"Trani - Italy",
        "brand":"Sloped Pergolas, Glass Walls",
        "thumbnail":"https://www.ministryofvillas.com/wp-content/uploads/2015/07/bali-serenevillas-hibiscus-12.jpg"
    },
    {
        "id":2,
        "title":"Contemporary house with swimming pool",
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
        "title":"Contemporary house with swimming pool",
        "place":"Slovenia",
        "brand":"Sloped Pergolas, Glass walls",
        "thumbnail":"https://cdn.trav3l.net/sapancakonaklamarehberi.com/files/hotels/276/image11-f.jpeg"

    },
    {
        "id":7,
        "title":"Villa with garden",
        "place":"Trani - Italy",
        "brand":"Sloped Pergolas, Glass walls",
        "thumbnail":"https://www.villaboxturkey.com/img/upload/villa-resim/villa-dream-garden-005.jpg_2022-11-19_05-00-53-%C3%96S.jpg"

    },
    {
        "id":8,
        "title":"Contemporary house with swimming pool",
        "place":"Portorose - Slovenia",
        "brand":"Bioclimatic Pergolas",
        "thumbnail":"https://www.beyazhomes.com/wp-content/uploads/2023/02/1_resize.jpg"

    },
    {
        "id":9,
        "title":"Family house with garden",
        "place":"Antibes - France",
        "brand":"Sloped Pergolas, Glass walls",
        "thumbnail":"https://www.beyazhomes.com/wp-content/uploads/2022/11/2.jpeg"

    }
    
]


const productsElem = document.querySelector(".villages .row");

products.forEach(item => productsElem.innerHTML += `

            <div class="col-lg-4">
              <div class="villagesBox">
                <img
                  src="${item.thumbnail}"
                  alt=""
                />
                <div class="villagesBoxText">
                  <h3>${item.title}</h3>
                  <div class="villagesBoxTextOne">
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
                  <div class="villagesBoxTextTwo">
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
                    <p>${item.brand}</p>
                  </div>
                </div>
              </div>
            </div>
            

`
    
    );
const access_key = "_leSm6EuqT4K-CXcwqPMJuKd_2r4D6FlknVf_a-6Ug0"

const formInput = document.querySelector("form")
const input_section = document.getElementById("search_input")

const search_results = document.querySelector(".seacrh_results")

const show_more = document.getElementById("show_more_button")

let input_data = ""
let page = 1;

async function search_images(){
    input_data = input_section.value;
    const url = "https://api.unsplash.com/search/photos?page=${page}&query=${input_data}&client_id=${access_key}"

    const response = await fetch(url)
    const data = await response.json()

    const results = data.results

    if(page === 1){
        search_results.innerHTML = ""
    }

    results.map((result) =>{
        const img_wrapper = document.createElement("div")
        img_wrapper.classList.add("search_result")

        const image = document.createElement('img')
        image.src = result.urls.small
        image.alt = result.alt_description

        const img_link = document.createElement('a')
        img_link.href = result.links.innerHTML
        img_link.target = "_blank"
        img_link.textContent = result.alt_description

        img_wrapper.appendChild(image)
        img_wrapper.appendChild(img_link)
        img_wrapper.appendChild(img_wrapper)
        
    });
    page++
    if(page>1){
        show_more.style.display ="block"
    }
}
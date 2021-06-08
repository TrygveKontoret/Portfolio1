// const url = "https://trygvegrant.no/wp-json/wp/v2/posts?_embed=true&per_page=3";
// const out = document.querySelector(".posts");

// fetch(url)
//     .then(response => response.json())
//     .then(data => blogs(data))
//     .catch(error => {
//         console.error(error);
//         out.innerHTML = "Error"})
//     // .finally(()=> loading.style.display="none");

// blogs = (posts) => {
//     console.log(posts);
//     for (blog of posts) {
//         let media = blog._embedded["wp:featuredmedia"];
//         for (images of media){
//             console.log(images);
//             let blogPost = `
//             <div>
//             <p>${posts.title.rendered}</p>
//             <img src="${images.media_details.sizes.medium.source_url}" alt="${images.alt_text}">
//             </div>
//             `;
//             out.innerHTML += blogPost;
//         };
//     };
// };

const url = "https://trygvegrant.no/wp-json/wp/v2/posts?_embed=true&per_page=3";
const out = document.querySelector(".posts");
// const carouselContainer = document.querySelector(".carousel")
// const loading = document.querySelector(".loading");


fetch(url)
    .then(response => response.json())
    .then(data => blogs(data))
    .catch(error => {
        console.error(error);
        out.innerHTML = "Error!"})


blogs = (posts) => {
    console.log(posts);
    for (blog of posts) {
        let media = blog._embedded["wp:featuredmedia"]
        for (images of media){
            console.log(images);
            let blogPost = `
            <div>
                <p>${blog.title.rendered}</p>
                <div class="imgContainer">
                <img src="${images.media_details.sizes.medium.source_url}" alt="${images.alt_text}">
                </div>
            </div>
            `;
            out.innerHTML += blogPost;
        };
    };
};
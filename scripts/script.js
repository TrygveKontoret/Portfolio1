const url = "https://trygvegrant.no/wp-json/wp/v2/posts?_embed=true&per_page=3";
const out = document.querySelector(".posts");
const spinner = document.querySelector(".spinner");

fetch(url)
    .then(response => response.json())
    .then(data => blogs(data))
    .catch(error => {
        console.error(error);
        out.innerHTML = "Error!"})
    .finally(()=> spinner.style.display="none");


blogs = (posts) => {
    console.log(posts);
    for (blog of posts) {
        let media = blog._embedded["wp:featuredmedia"]
        for (images of media){
            console.log(images);
            let blogPost = `
            <div>
                <a href="blog.html?id=${blog.id}"><h3>${blog.title.rendered}</h3></a>
                <div class="imgContainer">
                <a href="blog.html?id=${blog.id}"><img src="${images.media_details.sizes.medium.source_url}" alt="${images.alt_text}"></a>
                </div>
            </div>
            `;
            out.innerHTML += blogPost;
        };
    };
};
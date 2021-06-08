const url = "https://trygvegrant.no/wp-json/wp/v2/posts?_embed=true&per_page=3";
const out = document.querySelector(".posts");

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
                <a href="blog.html?id=${blog.id}"><p>${blog.title.rendered}</p></a>
                <div class="imgContainer">
                <a href="blog.html?id=${blog.id}"><img src="${images.media_details.sizes.medium.source_url}" alt="${images.alt_text}"></a>
                </div>
            </div>
            `;
            out.innerHTML += blogPost;
        };
    };
};
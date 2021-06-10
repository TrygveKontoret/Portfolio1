const query = document.location.search;
const parameter = new URLSearchParams(query);
const id = parameter.get("id");

const url = `https://trygvegrant.no/wp-json/wp/v2/posts/${id}?_embed=true`;
const out = document.querySelector(".blogPost");
const meta = document.querySelector(".meta");



blog = (post) => {
    console.log(post);
    document.title = `Trygve Grant | ${post.title.rendered}`
    meta.setAttribute("content", `${post.excerpt.rendered.replace('<p>', "").replace('</p>', "")}`);
    console.log(meta);
    let media = post._embedded["wp:featuredmedia"]
    for (images of media){
        console.log(images);
        let newPost = `
        <div>
        <h1>${post.title.rendered}</h1>
        <img class="bigger" src="${images.media_details.sizes.full.source_url}" alt="${images.alt_text}">
        </div>
        <div>
        <p class="postText">${post.content.rendered}</p>
        </div>
        `
        out.innerHTML += newPost;
    };
};


fetch(url)
    .then(response => response.json())
    .then(data => blog(data))
    .catch(error => {
        console.error(error);
        out.innerHTML = "Error!"});
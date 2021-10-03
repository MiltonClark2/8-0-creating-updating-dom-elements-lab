//////////// Adds class featured to main section
let featured = document.querySelector("main section");
featured.classList.add("featured");
//////////// Adds class featured to main section

//////////// Create article and img element and set attributes for the img
let article = document.createElement("article");
let img = document.createElement("img");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");
article.append(img);


//////////// Create h3 tag and add text
let h3 = document.createElement("h3");
h3.textContent = "Stop Planning";
article.append(h3);


//////////// Adds a paragraph and text content to the article
let paragraph = document.createElement("p");
paragraph.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing.";
paragraph.textContent += "Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
article.append(paragraph);


//////////// Create and adds aside tag to the article
let aside = document.createElement("aside");
article.append(aside);



//////////// Create and adds paragraph inside the aside tag 
let asideParagraph = document.createElement("p");
aside.append(asideParagraph);


//////////// Adds class featured to main section



// let postSection = document.querySelector("section.posts");

// postSection.append("article");


// {/* <article>
//   <img
//     src="./images/paul-gilmore-unsplash.jpg"
//     alt="Image of a mountain in front of a lake."
//   />
//   <h3>Stop Planning</h3>
//   <p>
    // You -- yes you! You're an over-planner, I can tell. It's time to stop
    // planning so much and instead focusing on relaxing. Taking a break at all
    // is so stressful these days; why add to the stress by overworking yourself?
//   </p>
//   <aside>
//     <p>
//       <span><strong>Read Time:</strong> 4 Minutes</span
//       ><a href="#">Read more...</a>
//     </p>
//   </aside>
// </article> */}
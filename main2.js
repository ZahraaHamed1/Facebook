// home.html
// icone
let bb = document.querySelectorAll(".active");
let is = document.querySelectorAll(".is");
bb.forEach(b => {
  b.addEventListener('click', () => { b.style.borderBottom = '1px solid #1877f2' })
  b.onmouseout = function () { this.style.borderBottom = '' }
})
is.forEach(i => {
  i.addEventListener('click', () => { i.style.color = '#1877f2' })
  i.onmouseout = function () { this.style.color = '' }
})
// icone

// stories
const allStories = [
  {
    id: 0,
    namep: "John",
    imgSUrl: "image\\beaty.jpeg",
    imgUrl: "image\\IMG_8060.png",
  },
  {
    id: 1,
    namep: "Mouhamad",
    imgSUrl: "image\\pexels-photo-846741.jpeg",
    imgUrl: "image\\8b205ffe-8f61-40be-9744-d34ae47a3c80.jpg",
  },
  {
    id: 2,
    namep: "Mira",
    imgSUrl: "image\\pexels-photo-774909.jpeg",
    imgUrl: "image\\IMG_9312.JPEG",
  },
  {
    id: 3,
    namep: "Narin",
    imgSUrl: "image\\pexels-photo-1239291.jpeg",
    imgUrl: "image\\2cfc0071-eb23-464f-b856-9e68c871adc0.jpg",
  },
  {
    id: 4,
    namep: "Zahraa",
    imgSUrl: "image\\IMG_3698.JPEG",
    imgUrl: "image\\IMG_3751.JPEG",
  },
  {
    id: 5,
    namep: "Yasmin",
    imgSUrl: "image\\pexels-photo-1239291.jpeg",
    imgUrl: "image\\IMG_4584.PNG",
  },
  {
    id: 6,
    namep: "Nour",
    imgSUrl: "image\\pexels-photo-8120091.jpeg",
    imgUrl: "image\\pexels-photo-8120091.jpeg",
  },
  {
    id: 7,
    namep: "Ali",
    imgSUrl: "image\\pexels-photo-9889915.jpeg",
    imgUrl: "image\\IMG_8875.JPG",
  }
]


const stories = document.querySelector(".stories");
const storiesFullView = document.querySelector(".stories-full-view");
const closebtn = document.querySelector(".close-btn");
const storyimagefull = document.querySelector(".stories-full-view .stories2 img");
const storyPFull = document.querySelector(".stories-full-view .stories2 .p");
const nextbtn = document.querySelector(".middle-side .next-btn");
const previousbtn = document.querySelector(".middle-side .previous-btn");
const storiescontent = document.querySelector(".middle-side .content");
const nextbtnFull = document.querySelector(".stories-full-view .next-btn");
const previousbtnFull = document.querySelector(".stories-full-view .previous-btn");


let currentactive = 0;


function addImage() {
  const input = document.createElement("input")
  input.type = "file"
  input.accept = "image/*"
  input.onchange = (event) => {
    const file = event.target.files[0]
    allStories.push({
      id: 20,
      namep: "Zahraa",
      imgSUrl: "image\\" + file.name,
      imgUrl: "image\\IMG_8060.png",
    },)
    addStory(file.name)
    console.log(file.name)
  }
  input.click();
}

const createStories = () => {
  allStories.forEach((s, i) => {
    const story = document.createElement("div");
    story.classList.add("second2");

    const imgsmall = document.createElement("img");
    imgsmall.classList.add("small")
    imgsmall.src = s.imgSUrl;

    const img = document.createElement("img");
    img.classList.add("second");
    img.src = s.imgUrl;

    const namep = document.createElement("div");
    namep.classList.add("namep");
    namep.innerHTML = s.namep;

    story.appendChild(imgsmall);
    story.appendChild(img);
    story.appendChild(namep);

    stories.appendChild(story);

    story.addEventListener("click", () => {
      showFullView(i);
    });
  });

};


function addStory(image) {
  const story = document.createElement("div");
  story.classList.add("second2");
  const imgsmall = document.createElement("img");
  imgsmall.classList.add("small")
  imgsmall.src = "image/prof.jpg";

  const img = document.createElement("img");
  img.classList.add("second");
  img.src = "image/"+image;

  const namep = document.createElement("div");
  namep.classList.add("namep");
  namep.innerHTML = "Zahraa";

  story.appendChild(imgsmall);
  story.appendChild(img);
  story.appendChild(namep);
  stories.insertBefore(story,stories.firstChild)
  story.addEventListener("click", () => {
    showFullView(i);
  });
}

createStories();

const showFullView = (index) => {
  currentactive = index;
  updateFullView();
  storiesFullView.classList.add("active");
};

closebtn.addEventListener('click', () => {
  storiesFullView.classList.remove("active");
});

const updateFullView = () => {
  storyimagefull.src = allStories[currentactive].imgUrl;
  storyPFull.innerHTML = allStories[currentactive].namep;
};

nextbtn.addEventListener('click', () => {
  storiescontent.scrollLeft += 300;

});

previousbtn.addEventListener('click', () => {
  storiescontent.scrollLeft -= 200;
});

storiescontent.addEventListener('scroll', () => {
  if (storiescontent.scrollLeft <= 24) {
    previousbtn.classList.remove("active");
  }
  else {
    previousbtn.classList.add("active");
  }

  let maxScrollValue = storiescontent.scrollWidth - storiescontent.clientWidth - 24;

  if (storiescontent.scrollLeft >= maxScrollValue) {
    nextbtn.classList.remove("active");
  }
  else {
    nextbtn.classList.add("active");
  }
});

nextbtnFull.addEventListener("click", () => {
  if(currentactive >= allStories.length - 1){
    return;
  }
  currentactive++;
  updateFullView();
});
previousbtnFull.addEventListener("click", () => {
  if(currentactive <= 0){
    return;
  }
  currentactive--;
  updateFullView();

});

// stories



// posts
const allPost = [
  {
    id: 0,
    namepost: "john",
    timepost: "11 hrs ago",
    caption:"did you like it my tattoo",
    imgpostSUrl: "image\\beaty.jpeg",
    imgpostUrl: "image\\IMG_8060.png",
  },
  {
    id: 1,
    namepost: "Mouhamad",
    timepost: "20 hrs ago",
    caption:"the best gift of my bestie",
    imgpostSUrl: "image\\pexels-photo-846741.jpeg",
    imgpostUrl: "image\\8b205ffe-8f61-40be-9744-d34ae47a3c80.jpg",
  },
  {
    id: 2,
    namepost: "Mira",
    timepost: "2 hrs ago",
    caption:"What does the writer say?",
    imgpostSUrl: "image\\pexels-photo-774909.jpeg",
    imgpostUrl: "image\\IMG_9312.JPEG",
  },
  {
    id: 3,
    namepost: "Narin",
    timepost: "6 hrs ago",
    caption:"I Love Coffe",
    imgpostSUrl: "image\\pexels-photo-1239291.jpeg",
    imgpostUrl: "image\\2cfc0071-eb23-464f-b856-9e68c871adc0.jpg",
  },
  {
    id: 4,
    namepost: "Zahraa",
    timepost: "4 hrs ago",
    caption:"Assi River",
    imgpostSUrl: "image\\IMG_3698.JPEG",
    imgpostUrl: "image\\IMG_3751.JPEG",
  },
  {
    id: 5,
    namepost: "Yasmin",
    timepost: "8 hrs ago",
    caption:"Reading Time",
    imgpostSUrl: "image\\pexels-photo-1239291.jpeg",
    imgpostUrl: "image\\IMG_4584.PNG",
  },
  {
    id: 6,
    namepost: "Nour",
    timepost: "5 hrs ago",
    caption:"If You Don't BeLong Don't Be Long...",
    imgpostSUrl: "image\\pexels-photo-8120091.jpeg",
    imgpostUrl: "image\\pexels-photo-8120091.jpeg",
  },
  {
    id: 7,
    namepost: "Ali",
    timepost: "9 hrs ago",
    caption:"لا يوجد أحن من الله علينا",
    imgpostSUrl: "image\\pexels-photo-9889915.jpeg",
    imgpostUrl: "image\\IMG_8875.JPG",
  },
  {
    id: 8,
    namepost: "Zahraa",
    timepost: "10 hrs ago",
    caption:"it was a nice day",
    imgpostSUrl: "image\\prof.jpg",
    imgpostUrl: "image\\pexels-photo-8910400.jpeg",
  }
]
let postimg =document.querySelector(".post-img");

function addpost() {
  let post = document.getElementById('posttext').value
  if (post == "") {
    alert("Post can not be empty")
  } else {
    let posts = document.querySelector('#posts')
    let postdiv = document.createElement("div")
    postdiv.className = "container2"
    code_string = `<div class="posts"><div class="post"><div class="postDetail"><a href="#"><img class="img-post-s" src="image/prof.jpg" alt=""></a><div class="post-name-time"><h3>Zahraa</h3><p class="time-post"> 1 min ago</p></div></div><div class="ellipsis"><a href="#"><i class="fas fa-ellipsis-h"></i></a></div></div>
    <div class="thepost"><p>$post</p>$image</div>
    <div class="reacts"><div><i class="far fa-thumbs-up"></i><p>Like</p></div><div><i class="far fa-comment"></i><p>comment</p></div><div><i class="fas fa-share"></i><p>share</p></div></div></div>`
    const image = document.getElementById('postimg').getAttribute('src')
    if (image == "") {
      code_string = code_string.replace("$image", "");
      
      
    } else {
      code_string = code_string.replace("$image", '<img src="' + image + '" alt="">');
      document.getElementById('postimg').setAttribute('src',"");
      
    }
    postdiv.innerHTML = code_string.replace('$post', post)
    posts.insertBefore(postdiv, posts.firstChild)
    document.getElementById('posttext').value = "";
    postimg.classList.remove("active");
    
  }
}

function showPost() {
  let post = document.getElementById('posttext').value
  if (post != "") {
    document.getElementById('postbutton').removeAttribute('hidden')
  } else {
    document.getElementById('postbutton').setAttribute('hidden', 'true')
  }
}

function addPostImage() {
  const input = document.createElement("input")
  input.type = "file"
  input.accept = "image/*"
  input.onchange = (event) => {
    const file = event.target.files[0]
    document.getElementById('postimg').setAttribute('src', "image\\" + file.name)
    postimg.classList.add("active");
  }
  input.click();
}


const posts = document.querySelector(".f-post");
let currentItem ="";
function createPost () {
  allPost.forEach (p =>{
  currentItem += `
  <div class="posts">
    <div class="post">
      <div class="postDetail">
          <a href="#"><img class="img-post-s" src="${p.imgpostSUrl}" alt=""></a>
          <div class="post-name-time">
              <h3>${p.namepost}</h3>
              <p class="time-post">${p.timepost}</p>
          </div>
      </div>
      <div class="ellipsis">
          <a href="#"><i class="fas fa-ellipsis-h"></i></a>
      </div>
    </div>
    <div class="thepost">
      <p>${p.caption}</p>
      <img src="${p.imgpostUrl}" alt="">
    </div>
      <div class="reacts">
        <div>
            <i class="far fa-thumbs-up"></i>

            <p>Like</p>
        </div>
        <div>
            <i class="far fa-comment"></i>

            <p>comment</p>
        </div>
        <div>
            <i class="fas fa-share"></i>


            <p>share</p>
        </div>

      </div>
    </div>`
    posts.innerHTML = currentItem;
  })
}
createPost ();
// posts
// home.html

const users = [
  {
    username: "travel_diaries",
    userlocation: "Paris, France",
    userprofile:
      "https://images.unsplash.com/photo-1524638431109-93d95c968f03?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userPost:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=3546&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: true,
    likeCount: 1200,
    commentCount: 45,
    shareCount: 30,
    caption:
      "Enjoying the sunset at the Eiffel Tower. #ParisVibes #TravelGoals",
    timeAgoUploaded: 5,
  },
  {
    username: "foodie_lover",
    userlocation: "Mumbai, India",
    userprofile:
      "https://images.unsplash.com/photo-1487069838269-7c05365b400b?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userPost:
      "https://images.unsplash.com/photo-1554978991-33ef7f31d658?q=80&w=2620&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: false,
    likeCount: 530,
    commentCount: 20,
    shareCount: 12,
    caption: "The best vada pav I've ever had! 🌮❤️ #MumbaiStreetFood",
    timeAgoUploaded: 12,
  },
  {
    username: "fitness_freak",
    userlocation: "New York, USA",
    userprofile:
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userPost:
      "https://images.unsplash.com/photo-1485727749690-d091e8284ef3?q=80&w=3532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: true,
    likeCount: 800,
    commentCount: 60,
    shareCount: 25,
    caption: "Start your day with some yoga. #FitnessGoals #HealthyLiving",
    timeAgoUploaded: 24,
  },
  {
    username: "artsy_corner",
    userlocation: "London, UK",
    userprofile:
      "https://images.unsplash.com/photo-1647205552933-12e3dfdb77b5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userPost:
      "https://plus.unsplash.com/premium_photo-1692650759141-ed71d789ef1b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: true,
    likeCount: 950,
    commentCount: 78,
    shareCount: 40,
    caption:
      "New piece in the gallery. Let me know your thoughts! 🎨 #AbstractArt",
    timeAgoUploaded: 7,
  },
  {
    username: "adventure_seeker",
    userlocation: "Kyoto, Japan",
    userprofile:
      "https://images.unsplash.com/photo-1681562978415-bbf1dfe59353?q=80&w=2624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userPost:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: false,
    likeCount: 600,
    commentCount: 33,
    shareCount: 18,
    caption: "The serenity of Kyoto's bamboo forest. 🌳 #NatureLover",
    timeAgoUploaded: 18,
  },
];

var container = document.querySelector(".container");
var main = document.querySelector("main");
let clutter = "";

users.forEach((element) => {
  clutter += `  <div class="container">
        <div class="top">
          <div class="top_left">
            <div id="logo">
              <img
                src = ${element.userprofile}
                alt=""
              />
            </div>

            <div id="user_name">${element.username}</div>
          </div>
          <div class="top_right">
            <button>Follow</button>
            <div class="icon">
              <img
                width="16"
                height="16"
                src="https://img.icons8.com/small/16/more.png"
                alt="more"
              />
            </div>
          </div>
        </div>
        <div class="middle">
          <img
            src= ${element.userprofile}
            alt=""
          />
        </div>
        <div class="bottom">
          <div class="bottom_top">
            <div class="bottom_top_left">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/material-outlined/24/filled-like.png"
                alt="filled-like"
              />
              <div id="likes">${element.likeCount}</div>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/forma-light/24/speech-bubble.png"
                alt="speech-bubble"
              />
              <div id="comments">${element.commentCount}</div>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/material-outlined/24/filled-sent.png"
                alt="filled-sent"
              />
              <div id="sent">${element.shareCount}</div>
            </div>
            <div class="bottom_top_right">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/material-outlined/24/bookmark-ribbon--v1.png"
                alt="bookmark-ribbon--v1"
              />
            </div>
          </div>
          <div class="bottom_middle">
            <div id="caption">
              ${element.caption}
            </div>
          </div>
          <div class="bottom_bottom">
            <div id="comments">View all comments</div>
            <div id="time_ago">${element.timeAgoUploaded} days ago</div>
          </div>
        </div>
      </div> `;
});

main.innerHTML = clutter;

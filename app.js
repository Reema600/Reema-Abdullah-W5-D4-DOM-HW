let likes = 0;
$(document).ready(function () {
  likes = 0;
  setLikes(likes);
});

$("body").on("click", ".likeBtn", function () {
  likes++;
  setLikes(likes);
});

function setLikes(count) {
  $(".totalLikes").text(count);
}

//==========================Likes============================

const commentInput = document.getElementById("comment");
const commentText = document.querySelector("#floatingTextarea2");
const commentSubmit = document.querySelector("#comment-sub");
const deleteComment = document.querySelector("#dele-but");

commentSubmit.onclick = () => {
  commentText.innerHTML = commentInput.value;
  commentInput.value = "";
};


deleteComment.onclick= ()=>{

    commentText.innerHTML = ''
}



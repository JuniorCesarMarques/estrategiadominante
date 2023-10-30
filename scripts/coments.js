document.addEventListener("DOMContentLoaded", function() {
    const commentButton = document.getElementById("comment-button");
    const commentInput = document.getElementById("comment-input");
    const commentsContainer = document.querySelector(".comments");

    commentButton.addEventListener("click", function() {
        const commentText = commentInput.value;
        if (commentText) {
            const newComment = createComment(commentText);
            commentsContainer.appendChild(newComment);
            commentInput.value = "";
        }
    });

    commentsContainer.addEventListener("click", function(event) {
        if (event.target.classList.contains("like-button")) {
            const likeButton = event.target;
            const likesCount = likeButton.nextElementSibling;
            const comment = likeButton.parentNode;

            if (likeButton.classList.contains("liked")) {
                likeButton.classList.remove("liked");
                likesCount.textContent = (parseInt(likesCount.textContent) - 1) + " curtidas";
            } else {
                likeButton.classList.add("liked");
                likesCount.textContent = (parseInt(likesCount.textContent) + 1) + " curtidas";
            }
        }
    });

    function createComment(text) {
        const comment = document.createElement("div");
        comment.classList.add("comment");

        const commentAvatar = document.createElement("div");
        commentAvatar.classList.add("comment-avatar");

        const commentContent = document.createElement("div");
        commentContent.classList.add("comment-content");

        const commentText = document.createElement("p");
        commentText.classList.add("comment-text");
        commentText.textContent = text;

        const likeButton = document.createElement("button");
        likeButton.classList.add("like-button");
        likeButton.textContent = "Curtir";

        const likesCount = document.createElement("span");
        likesCount.classList.add("likes-count");
        likesCount.textContent = "0 curtidas";

        commentContent.appendChild(commentText);
        commentContent.appendChild(likeButton);
        commentContent.appendChild(likesCount);

        comment.appendChild(commentAvatar);
        comment.appendChild(commentContent);

        return comment;
    }
});


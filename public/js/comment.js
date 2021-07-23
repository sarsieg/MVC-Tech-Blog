// we need to substract post_id by one due to the array, post 1 is 0 in the array
// when a user posts a comment, get that data back from the db
async function commentFormHandler(event) {
    event.preventDefault();

    const comment_text = document.querySelector('input[name="comment-body').value.trim();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
}
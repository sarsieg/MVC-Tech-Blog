// this function corresponds to the add-post form
async function newFormHandler(event) {
    event.preventDefault();

    // capture the values of a form considered to be add-post
    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('textarea[name="content"]').value;
}
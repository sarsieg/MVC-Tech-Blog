// this function corresponds to the add-post form
async function newFormHandler(event) {
    event.preventDefault();

    // capture the values of a form considered to be add-post
    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('textarea[name="content"]').value;

    // post stringified data to the post-routes folder of our routes
    const responce = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // once our route is received properly re-direct the user to the dashboard
    if (responce.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(responce.statusText);
    }
};

document.querySelector('#add-post-form').addEventListener('submit', newFormHandler);
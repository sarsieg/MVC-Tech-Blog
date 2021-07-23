// this function is the same idea as update, add, login, etc.
async function deleteFormHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    // post stringified data to the post-routes folder of our routes
    const responce = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
            post_id: id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // once our route is received properly re-direct the user to the dashboard
    if (responce.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
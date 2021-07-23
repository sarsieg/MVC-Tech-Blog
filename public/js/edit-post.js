async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value.trim();
    const content = document.querySelector('textarea[name="content"]').value.trim();
    console.log(title);
    console.log(content);

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];


    const responce = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            post_id: id,
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

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
const newFormHandler = async (event) => {
    event.preventDefault();
  
    const comments = document.querySelector('#post-comments').value.trim();
    
  
    if (comments) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ comments }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/posts/:id');
      } else {
        alert('Failed to create comment');
      }
    }
  };
  
//   const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/posts/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to delete post');
//       }
//     }
//   };
  
  document
    .querySelector('.new-comments-form')
    .addEventListener('submit', newFormHandler);
  
//   document
//     .querySelector('.post-list')
//     .addEventListener('click', delButtonHandler);
  
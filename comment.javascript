document.addEventListener('DOMContentLoaded', function() {
  const commentForm = document.getElementById('commentForm');
  const commentsList = document.getElementById('commentsList');

  commentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    // Create a new comment element
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.innerHTML = `<strong>${name}</strong>: ${comment}`;

    // Append the new comment to the comments list
    commentsList.appendChild(newComment);

    // Clear the form inputs after submission
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
  });
});

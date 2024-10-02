function submitIssue() {
    const issue = document.getElementById('issue').value;
    alert('Issue reported: ' + issue);
    document.getElementById('issue').value = ''; // Clear the input
}

function submitFeedback() {
    const feedback = document.getElementById('feedback').value;
    alert('Feedback submitted: ' + feedback);
    document.getElementById('feedback').value = ''; // Clear the input
}

function submitResponse() {
    const response = document.getElementById('response').value;
    alert('Response submitted: ' + response);
    document.getElementById('response').value = ''; // Clear the input
}

function submitUpdate() {
    const update = document.getElementById('update').value;
    alert('Update posted: ' + update);
    document.getElementById('update').value = ''; // Clear the input
}

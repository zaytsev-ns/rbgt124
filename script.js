document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.getElementById('iframe');
    const loading = document.getElementById('loading');
    const content = document.getElementById('content');

    iframe.onload = function() {
        loading.style.display = 'none';
        content.style.display = 'block';
    };
});

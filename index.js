async function shortenUrl() {
    const longUrl = document.getElementById("longUrl").value;
    const apiUrl = 'https://tinyurl.com/api-create.php?url=' + encodeURIComponent(longUrl);

    try {
        const response = await fetch(apiUrl);
        const shortUrl = await response.text();
        console.log(shortUrl)
        const shortenedUrl = document.getElementById("shortenedUrl");
        shortenedUrl.value = shortUrl;
    } catch (error) {
        console.error('Error shortening URL:', error);
    }
}
let newUrl = document.getElementById("shortenedUrl");
let copyBtn = document.getElementById("copy");
copyBtn.onclick = function() {
    newUrl.select();
    window.navigator.clipboard.writeText(newUrl.value);
}
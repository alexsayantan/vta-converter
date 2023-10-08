const url = 'https://865d-2405-201-801a-2119-f00f-e15-749b-a0ba.ngrok-free.app/api/upload-media/'

const output = document.getElementById("output");
const loader = document.getElementById("loader");
loader.style.display = 'none';

document.getElementById('videoFile').addEventListener('change', function(event) {
    event.preventDefault();

    var fileInput = document.getElementById('videoFile');
    var file = fileInput.files[0];
    var formData = new FormData();

    formData.append('media', file);
    loader.style.display = 'block';
    fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + btoa('alex@gmail.com:8230')
        },
        body: formData
    })
    .then(response => response.blob())
    .then(data => {

        loader.style.display = 'none';

        const url = URL.createObjectURL(data);
        output.innerHTML = `<audio controls>
            <source src="${url}" type="audio/ogg">
        </audio>`
    })
    .catch(error => console.error(error));
});

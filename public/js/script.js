function fileValidation(id) {
    const fileInput = document.getElementById(id)
    const filePath = fileInput.value
    const allowedExt = /(\.jpg|\.jpeg|\.png)$/i

    if (!allowedExt.exec(filePath)) {
        alert('file not valid!')
        fileInput.value = ''
        return false
    } else {
        // image preview
        if (fileInput.files && fileInput.files[0]) {
            const reader = new FileReader()
            reader.onload = (e) => {
                document
                    .querySelector('#profile-img')
                    .setAttribute('src', e.target.result)
            }
            reader.readAsDataURL(fileInput.files[0])
        }
    }
}

const panoramaImage = new PANOLENS.ImagePanorama("./images/pexels-sergio-souza-5048124.jpg")
const imagecontainer = document.querySelector(".image-container")

const viewer = new PANOLENS.viewer({
    container: imagecontainer,
    autoRotate: true,
    autoRotateSpeed: 0.3,
    controlBar: true,
})

viewer.add(panoramaImage)
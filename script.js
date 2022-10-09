let audio = document.getElementById('audioEjetar')
let bt_ejetar = document.getElementById('bt-ejetar')
let bt_parar = document.getElementById('bt-parar')
//2:24 de tempo - 144 segundos

const ejetar = () => {
    audio.play()
    console.log("Ejetando...")
    bt_ejetar.style.display = "none"
    bt_parar.style.display = "block"
    
    setInterval(() => {
        alert('Água ejetada com sucesso!')
    }, 144000)
}
    
const parar = () => {
    audio.pause()
    audio.currentTime = 0
    console.log("Parei!")
    bt_ejetar.style.display = "block"
    bt_parar.style.display = "none"
}

bt_ejetar.addEventListener('click', ejetar)
bt_parar.addEventListener('click', parar)

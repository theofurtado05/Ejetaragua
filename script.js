let audio = document.getElementById('audioEjetar')
//2:24 de tempo - 144 segundos

const ejetar = () => {
    audio.play()
    console.log("Ejetando...")
    
    setInterval(() => {
        alert('Água ejetada com sucesso!')
    }, 144000)
}
    

document.getElementById('bt-ejetar').addEventListener('click', ejetar)

var gif_ = '<img src="cc.gif">'
function petitPoney(){
    var dd = document.querySelector('.play-button')
    dd.innerHTML = gif_
    var audio_file = new Audio('audio2.wav')
    audio_file.play()
    audio_file.addEventListener('timeupdate', function(){
        var buffer = .30
        if(this.currentTime > this.duration - buffer){
            this.currentTime = 0
            this.play()
        }
    });
}


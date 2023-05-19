function verifyAcorde(acorde){
    var todosAcordes = ["A", "Am", "A7", "A7+", "B", "Bm", "B7", "B7+", "Bb", "Bbm", "Bb7+", "C", "Cm", "C7", "C#7", "C#m", "C#7+", "D", "Dm", "D7+", "E", "Em", "E7", "E7+", "F", "Fm", "F7", "F7+", "F#7+", "G", "Gm", "G7", "G7+", "G#7+"]
    var countPossiveis = 0;
    for (var h = 0; h < todosAcordes.length; h++){
        if (acorde.toLowerCase() == todosAcordes[h].toLowerCase()){
            countPossiveis++;
        }
    }
    if(countPossiveis == 0){
        return false
    }
    else{
        return true;
    }
}
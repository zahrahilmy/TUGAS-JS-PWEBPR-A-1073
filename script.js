document.getElementById("no").onclick = function() {
    document.getElementById("header").innerHTML = "Anda Benar!";
    document.getElementById("image").src = "mhs.png";
    document.getElementById("text").innerHTML = "Anda adalah seorang Mahasiswa"
    document.getElementById("box").style.backgroundColor = "#6FD240";
    document.getElementById("ya").style.visibility = "hidden";
    document.getElementById("no").style.visibility = "hidden";
  };

document.getElementById("ya").onclick = function() {
    document.getElementById("header").innerHTML = "Anda Berbohong!";
    document.getElementById("image").src = "teknisi.png";
    document.getElementById("text").innerHTML = "Anda adalah seorang Teknisi"
    document.getElementById("box").style.backgroundColor = "#E12E2E";
    document.getElementById("ya").style.visibility = "hidden";
    document.getElementById("no").style.visibility = "hidden";
  };
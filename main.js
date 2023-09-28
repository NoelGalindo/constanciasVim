function descargarImg(){
    let captura = document.getElementById('capture')
    captura.style.display = 'block'
    const qrcode = new QRCode(document.getElementById('qrcode'), {
        text: "Noel Maximiliano asistio",
        width: 240,
        height: 240,
        colorDark : '#000',
        colorLight : '#fff',
        correctLevel : QRCode.CorrectLevel.H
      });
    html2canvas(document.querySelector("#capture"), {
      allowTaint : true,
      useCors : true})
      .then(canvas => {
        saveAs(canvas.toDataURL(), 'Constancia.png');
        //captura.style.display = 'none'
    });
}

function saveAs(uri, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
      link.href = uri;
      link.download = filename;

      //Firefox requires the link to be in the body
      document.body.appendChild(link);

      //simulate click
      link.click();

      //remove the link when done
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  }
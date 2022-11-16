const Id_QrElement = 'QRCodeGenerated';

var button_generateQR = document.querySelector('#generateQR_code');

button_generateQR.addEventListener('click', (e) =>
{
  e.preventDefault();
  e.stopPropagation();

  const urlTo = document.querySelector('input#urlInput').value,
  qrColor = document.querySelector('input#colorInput').value,
  qrOpacity = document.querySelector('input#qrOpacityInput').value,
  bgColor = document.querySelector('input#bgInput').value,
  bgOpacity = document.querySelector('input#bgOpacityInput').value,
  qrLevel = document.querySelector('select#levelInput').value,
  codeSize = document.querySelector('input#sizeInput').value;
  
  makeQR_code(urlTo, qrColor, qrOpacity, bgColor, bgOpacity, qrLevel, codeSize);
});

function makeQR_code(urlTo='https://arpicstudio.com/', qrColor='#00A19', qrOpacity=1.00, bgColor='#ffffff', bgOpacity=0.00, qrLevel='M', codeSize='150')
{
  var QR_object = new QRious(
    {
      background: bgColor,
      backgroundAlpha: bgOpacity,
      foreground: qrColor,
      foregroundAlpha: qrOpacity,
      level: qrLevel,
      size: codeSize,
      padding:24,
      element: document.querySelector('#'+Id_QrElement),
      value: urlTo.toString()
    }
  );
}
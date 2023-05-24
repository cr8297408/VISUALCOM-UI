// import { send } from '@/utils/sendImg';
// import React, { useCallback, useRef, useState } from 'react';
// import Webcam from 'react-webcam';

// function Camera({
//   takePicture = false,
// }: {takePicture: boolean}) {
//   const webcamRef = useRef<any>(null);
//   const [imagen, setImagen] = useState(null);

//   const capture = useCallback(async () => {
//     const imageSrc = webcamRef.current!.getScreenshot();
//     setImagen(imageSrc);
//   }, [webcamRef]);

//   return (
//     //TODO: MAKE ESTILES AND SEND IMAGE TO THE BACKEND
//     <>
//       <form className="App flex items-center justify-center pt-10">
//         <Webcam
//           audio={false}
//           height={500}
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//           mirrored={true}
//           width={600}
//           style={{}}
//         />
//         <br />
//         <img id="myImage" src={imagen ?? undefined} alt="" />
//         <button onClick={capture}>TAKE PICTURE</button>
//       </form>
//     </>
//   );
// }

// export default Camera;
import { send } from '@/utils/sendImg';
import React, { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';

function Camera({ takePicture = false }: { takePicture: boolean }) {
  const webcamRef = useRef<any>(null);
  const [imagen, setImagen] = useState<File | null>(null);
  const [predict, setPredict] = useState<any>(null);

  const capture = useCallback(async () => {
    const imageSrc = webcamRef.current!.getScreenshot();
    const blob = await fetch(imageSrc).then((res) => res.blob());
    const file = new File([blob], 'image.jpg', { type: 'image/jpeg' });
    setImagen(file);
    sendImageToBackend()
  }, [webcamRef]);

  const sendImageToBackend = () => {
    if (imagen) {
      const formData = new FormData();
      formData.append('image', imagen);

      fetch('http://localhost:3000/predict', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data); // Aquí puedes manejar la respuesta del backend
          setPredict(data)
        })
        .catch((error) => {
          console.error('Error al enviar la imagen al backend:', error);
        });
    }
  };

  return (
    // TODO: Agregar estilos y enviar imagen al backend
    <>
      <div className="App flex items-center justify-center pt-10">
        <Webcam
          audio={false}
          height={500}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          mirrored={true}
          width={600}
          style={{}}
        />
        <br />
        <img
          id="myImage"
          src={imagen ? URL.createObjectURL(imagen) : ''}
          alt=""
        />
      </div>
      <button className="bg-red-500 m-2" onClick={capture}>
        TAKE PICTURE
      </button>
      <div>
        <button className="bg-red-500 m-2" onClick={sendImageToBackend}>
          Predict
        </button>
      </div>
      <div>
        <h1>Prediction: {predict?.predict ?? ''}</h1>
      </div>
    </>
  );
}

export default Camera;

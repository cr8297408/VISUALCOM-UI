import InitialButton from "@/components/buttons/initialButton";
import CameraCapture from "@/components/camera";
import RootLayout from "@/components/layout";
import { useState } from "react";

export default function Test () {

  const [onClick, setOnClick] = useState({
    camera: false,
    microphone: false,
    text: false,
  })

  const [takePicture, setTakePicture] = useState(false)
  return (
    <RootLayout>
      <>
        {onClick.camera ? <CameraCapture takePicture={takePicture}/> : null}
        <div
          style={{
            bottom: '0',
            padding: '13px 0 4px',
            display: 'flex',
            position: 'fixed',
            width: '100%',
            zIndex: '5000',
            justifyContent: 'space-evenly',
          }}
        >
          <InitialButton
            path1="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"
            path2="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z"
          ></InitialButton>
          <div className="flex rounded-full bg-gray-400 w-12 h-12 items-center justify-center">
            <InitialButton
              onClick={() => {
                setOnClick({
                  ...onClick,
                  camera: true
                })

                // onClick ? setTakePicture(true) : null
              }}
              path1="M5 8c0-1.657 2.343-3 4-3V4a4 4 0 0 0-4 4z"
              path2="M12.318 3h2.015C15.253 3 16 3.746 16 4.667v6.666c0 .92-.746 1.667-1.667 1.667h-2.015A5.97 5.97 0 0 1 9 14a5.972 5.972 0 0 1-3.318-1H1.667C.747 13 0 12.254 0 11.333V4.667C0 3.747.746 3 1.667 3H2a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1h.682A5.97 5.97 0 0 1 9 2c1.227 0 2.367.368 3.318 1zM2 4.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0zM14 8A5 5 0 1 0 4 8a5 5 0 0 0 10 0z"
            ></InitialButton>
          </div>
          <InitialButton path1="M12.258 3h-8.51l-.083 2.46h.479c.26-1.544.758-1.783 2.693-1.845l.424-.013v7.827c0 .663-.144.82-1.3.923v.52h4.082v-.52c-1.162-.103-1.306-.26-1.306-.923V3.602l.431.013c1.934.062 2.434.301 2.693 1.846h.479L12.258 3z"></InitialButton>
        </div>
      </>
    </RootLayout>
  );
}

export const send = async (formDataImg: any) => {
  try {
    const sendImg = await fetch('http://localhost:3000/predict', {
      body: formDataImg,
      method: 'POST',
    });

    return sendImg
  } catch (error) {
    return error
  }
}
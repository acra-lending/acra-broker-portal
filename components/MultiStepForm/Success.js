import IframeUpload from '../IframeUpload';

export default function Success() {
  return (
    <>
      <h1>Your submission has been received</h1>
      <p>Please upload related documents</p>
      <p>Once upload is complete, you may close this window</p>
      <br />
      <IframeUpload />
    </>
  );
}

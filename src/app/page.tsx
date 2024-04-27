import { titleFont } from "../config/fonts";



export default function Home() {
  return (
    <>
      <h1 className={`${titleFont.className} font-bold`}>Home</h1>
      <p>Welcome to the home page</p>
    </>
  );
}

import Carousel from "@/app/components/Carousel";

import Child from "./components/Child";
import Workers from "./components/Workers";

export default async function Home() {
  return (
    <main className="p-auto bg-gray-100">
      <Carousel >
        <Child />
        <Workers />
      </Carousel>
    </main>
  );
}

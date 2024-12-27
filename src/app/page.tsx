import Carousel from "@/app/components/Carousel";

import Child from "./components/Child";
import Workers from "./components/Workers";

export default async function Home() {
  return (
    <main className="px-20 bg-gray-100 ">
      <Carousel>
        <Child />
        <Workers />
      </Carousel>
      <div className="h-16">

      </div>
    </main>
  );
}

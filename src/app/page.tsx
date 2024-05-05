'use client';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';

export default function Home() {
  return (
    <div className="p-6 flex flex-col gap-4 mt-16 h-screen">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Hello World!!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa velit
          neque cumque, repellat, qui optio sunt provident vero, minima nesciunt
          facilis est eos nisi. Aliquam earum excepturi rem hic nemo possimus
          porro minus suscipit similique fuga numquam quasi ipsa, officia cum
          labore quia aliquid. Mollitia excepturi in earum libero a.
        </p>
      </div>
      <div className="flex gap-4">
        <Button>Hello!!</Button>
        <Button>World!!</Button>
      </div>
      <Calendar />
    </div>
  );
}

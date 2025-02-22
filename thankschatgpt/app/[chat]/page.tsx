//work on here
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Page() {
  return (
    // full container, holds messages and input/send seperately
    <div className="flex flex-col items-center justify-center h-screen w-full">
      {/* Messages container*/}
      <div className="w-full max-w-md h-96 overflow-y-auto border border-gray-300 rounded-lg p-4 bg-gray-50"></div>
      {/* input and send button*/}
      <div className="flex w-full max-w-md items-center space-x-2 pt-2 mt-2">
        <Input
          className="border border-transparent focus:outline-none focus:ring-2 focus:border-indigo-600 hover:border-indigo-600 flex-1"
          type="message"
          placeholder="Type away"
        />
        <Button className="bg-indigo-600 hover:bg-indigo-700">Send</Button>
      </div>
    </div>
  );
}

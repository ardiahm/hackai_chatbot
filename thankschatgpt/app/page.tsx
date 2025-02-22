import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <Card className="">
            <CardHeader>
              <CardTitle>We are here for you!</CardTitle>
              <CardDescription>
                Are you going through some hard time?
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <p>We would like to know you better</p>
              <Input placeholder="Enter your name" />
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <p>
                Enter someone's phone number who you can trust <br />
                in case you need help
              </p>
              <Input placeholder="Enter phone number" />
              <Button variant="outline">Submit</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}

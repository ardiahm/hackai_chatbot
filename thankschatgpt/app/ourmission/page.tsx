"use client";

import { Card } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { CardDescription } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/chat");
  };

  return (
    <div className="flex flex-col h-max justify-center items-center px-20 py-10">
      <Card>
        <div className="">
          <CardHeader className="items-center text-center">
            <CardTitle className="text-5xl item-center text-center">
              Our Mission
            </CardTitle>
            <CardDescription className="text-center">
              - Ardi Ahmed and Junna Park -
            </CardDescription>
          </CardHeader>
        </div>
        <CardContent className="flex flex-col gap-4 text-center">
          <p className="text-sm">
            As Computer Science students, we are <em>definitely</em> familiar
            with the term stress. We also know how vulnerable one might feel
            when physically attending a therapy session. To meet someone for the
            first time and pour your heart out can be, <em>and often is</em>,
            difficult for most.
          </p>
          <p className="text-sm">
            That's why we designed <em>Mindly</em>, an interactive AI therapist
            built to support <em>anyone</em> who needs a safe space to express
            their thoughts, free from judgment and social pressure.
          </p>
          <p className="text-sm">
            We understand that seeking help can be intimidating. That’s why we
            emphasize such an accessible and empathetic approach. Whether you're
            dealing with stress, self-doubt, or simply need someone to talk to,{" "}
            <em>Mindly</em> is here for you.
          </p>
          <p className="text-sm">
            While AI is not a replacement for having emotional, pure
            conversations, we hope <em>Mindly</em> can serve as a starting
            point— a bridge between recognizing your emotions and seeking
            further support if needed.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <CardDescription className="text-center">
            Click below to start chatting with <em>MindlyAI</em>
          </CardDescription>

          <Button
            className="bg-indigo-600 hover:bg-indigo-700 text-white hover:text-white"
            variant="outline"
            onClick={handleNavigate}
          >
            Start Chatting
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

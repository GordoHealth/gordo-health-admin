"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl space-y-10 px-4 py-12">
      <h1 className="text-3xl font-bold text-foreground">Component Showcase</h1>

      {/* Buttons */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Buttons</h2>
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </section>

      {/* Badges */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Badges</h2>
        <div className="flex flex-wrap gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </section>

      {/* Avatars */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Avatars</h2>
        <div className="flex items-center gap-4">
          <Avatar className="size-8">
            <AvatarImage src="" alt="User" />
            <AvatarFallback>AU</AvatarFallback>
          </Avatar>
          <Avatar className="size-10">
            <AvatarImage src="" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar className="size-14">
            <AvatarImage src="" alt="User" />
            <AvatarFallback>GH</AvatarFallback>
          </Avatar>
        </div>
      </section>

      {/* Card */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Card</h2>
        <Card className="max-w-sm">
          <CardHeader>
            <p className="font-semibold text-foreground">Health Summary</p>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted">
              Your weekly activity looks great. Keep it up!
            </p>
          </CardContent>
          <CardFooter>
            <Button size="sm">View Details</Button>
          </CardFooter>
        </Card>
      </section>

      {/* Input */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Input</h2>
        <div className="max-w-sm space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" />
        </div>
      </section>

      {/* Alert */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Alert</h2>
        <Alert>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            Your next check-in is scheduled for tomorrow.
          </AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Failed to sync health data. Please try again.
          </AlertDescription>
        </Alert>
      </section>

      {/* Skeleton */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Skeleton</h2>
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-10 w-10 rounded-full" />
        </div>
      </section>

      {/* Dialog */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Dialog</h2>
        <Dialog>
          <DialogTrigger>
            <Button variant="outline">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Action</DialogTitle>
              <DialogDescription>
                Are you sure you want to proceed? This cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>

      {/* Toast */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Toast</h2>
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => toast("Data saved successfully!")}>
            Show Toast
          </Button>
          <Button
            variant="destructive"
            onClick={() => toast.error("Something went wrong.")}
          >
            Show Error Toast
          </Button>
        </div>
      </section>
    </div>
  );
}

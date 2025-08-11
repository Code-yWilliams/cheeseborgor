import { useState } from "react";
import { router, usePage } from "@inertiajs/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function PasswordSetupPage() {
  const [username, setUsername] = useState("");
  const { errors } = usePage().props;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    router.post("/profile-setup", {
      username: username.trim(),
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Button asChild className="absolute top-4 right-4">
        <a href="/auth/logout">Logout</a>
      </Button>
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Complete Setup</CardTitle>
          <CardDescription className="text-center">
            Choose a username to continue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {errors?.username && (
              <Alert variant="destructive">
                <AlertDescription>{errors.username}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={false}>
              Complete Setup
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

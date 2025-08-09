import { usePage } from "@inertiajs/react";
import { SharedInertiaData } from "../ts-types.ts";
import { Button } from "@app/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { CheckCircle, Plus, Users } from "lucide-react";

const Landing = () => {
  const { csrfToken } = usePage<SharedInertiaData>().props;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Cheeseborgor</h1>
          <div className="space-x-4">
            <form
              action="/auth/auth0"
              method="post"
              style={{ display: "inline" }}
            >
              <input
                type="hidden"
                name="authenticity_token"
                value={csrfToken}
              />
              <Button variant="ghost" type="submit">
                Sign In
              </Button>
            </form>
            <form
              action="/auth/auth0?screen_hint=signup"
              method="post"
              style={{ display: "inline" }}
            >
              <input
                type="hidden"
                name="authenticity_token"
                value={csrfToken}
              />
              <input type="hidden" name="signup" value="true" />
              <Button type="submit">Get Started</Button>
            </form>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Gift giving made simple</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Create wish lists, share with friends, and never give duplicate gifts
          again.
        </p>
        <form
          action="/auth/auth0?screen_hint=signup"
          method="post"
          style={{ display: "inline" }}
        >
          <input type="hidden" name="authenticity_token" value={csrfToken} />
          <input type="hidden" name="signup" value="true" />
          <Button size="lg" className="mr-4" type="submit">
            Create Your First List
          </Button>
        </form>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader className="text-center">
              <Plus className="w-12 h-12 mx-auto mb-4 text-primary" />
              <CardTitle>Create Lists</CardTitle>
              <CardDescription>Add any item to your wish lists</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <CardTitle>Share with Friends</CardTitle>
              <CardDescription>
                Let others see what you're hoping for
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
              <CardTitle>Claim Items</CardTitle>
              <CardDescription>
                Mark gifts as purchased to avoid duplicates
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to get started?</h3>
          <p className="text-lg text-muted-foreground mb-8">
            Join Cheeseborgor and make gift giving effortless.
          </p>
          <form
            action="/auth/auth0?screen_hint=signup"
            method="post"
            style={{ display: "inline" }}
          >
            <input type="hidden" name="authenticity_token" value={csrfToken} />
            <input type="hidden" name="signup" value="true" />
            <Button size="lg" type="submit">
              Sign Up Free
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 Cheeseborgor. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;

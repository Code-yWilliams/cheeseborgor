import { usePage } from "@inertiajs/react";
import { SharedInertiaData } from "../ts-types.ts";
import { Button } from "@mantine/core";

const Landing = () => {
  const { csrfToken } = usePage<SharedInertiaData>().props;

  return (
    <form action="/auth/auth0" method="post">
      <input type="hidden" name="authenticity_token" value={csrfToken} />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default Landing;

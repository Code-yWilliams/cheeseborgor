import { CurrentUser } from "@tstypes/User";
import { PageProps } from "@inertiajs/core";

export interface SharedInertiaData extends PageProps {
  currentUser: CurrentUser;
  csrfToken: string;
}

import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { PropsWithChildren } from "react";

const RootLayout = ({ children }: PropsWithChildren) => {
  return <MantineProvider>{children}</MantineProvider>;
};

export default RootLayout;

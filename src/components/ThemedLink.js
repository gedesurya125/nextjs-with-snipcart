/** @jsxImportSource theme-ui */

import Link from "next/link";

export const ThemedLink = ({ children, sx, ...props }) => {
  return (
    <Link sx={sx} {...props}>
      {children}
    </Link>
  );
};

type NavLink = {
  href: String;
  label: String;
};

export const links: NavLink[] = [
  {
    href: "/",
    label: "home",
  },
  {
    href: "/favorites",
    label: "favorites",
  },
  {
    href: "/bookings",
    label: "bookings",
  },
  {
    href: "/reviews",
    label: "reviews",
  },
  {
    href: "/rentals/create",
    label: "create rental",
  },
  {
    href: "/rentals",
    label: "my rentals",
  },
  {
    href: "/profiles",
    label: "profile",
  },
];

import {
  IconBook,
  IconHome,    
  IconUsersGroup,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Home",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconHome,
    href: "/",
  },
  {
    navlabel: true,
    subheader: "Stories",
  },
  {
    id: uniqueId(),
    title: "Characters",
    icon: IconUsersGroup,
    href: "/character",
  },
  {
    id: uniqueId(),
    title: "Origins",
    icon: IconBook,
    href: "/origin",
  },  
];

export default Menuitems;

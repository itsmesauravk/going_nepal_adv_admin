import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { FaUserCircle } from "react-icons/fa"

import Link from "next/link"
import Image from "next/image"

// Menu items.
const items = [
  {
    title: "Home",
    url: "http://localhost:3000/home",
    icon: Home,
  },
  {
    title: "Trekkings",
    url: "http://localhost:3000/trekkings",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="bg-gray-900 text-white">
      <SidebarHeader className="py-4 px-6">
        <Image
          src={"/going_use.png"}
          alt="Going Nepal Adventure"
          width={200}
          height={200}
        />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-6 text-secondary text-lg font-semibold">
            Application
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-2">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="mb-2">
                  <SidebarMenuButton
                    asChild
                    className="flex items-center p-2 rounded-lg text-gray-900 hover:bg-primary hover:text-white transition-all"
                  >
                    <Link
                      href={item.url}
                      className="flex items-center space-x-3"
                    >
                      <item.icon className="text-xl" />
                      <span className="text-lg font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-6 border-t border-gray-700">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="flex items-center  w-full text-lg font-bold text-secondary hover:text-primary">
                  <FaUserCircle />
                  Admin
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width] bg-gray-800 text-white shadow-lg border border-gray-700 rounded-md"
              >
                <DropdownMenuItem className="p-2 hover:bg-primary hover:text-white rounded">
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-2 hover:bg-primary hover:text-white rounded">
                  <Link href="/login">Sign out</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

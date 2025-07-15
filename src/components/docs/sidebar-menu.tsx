"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"

import { components } from "@/data/components"
import { docs } from "@/data/docs"

export function SidebarMenu() {
  const pathname = usePathname()

  const isDocsPage = pathname?.startsWith("/docs")
  const items = isDocsPage ? docs : components
  const basePath = isDocsPage ? "/docs" : "/components"

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden md:block">
        <h3 className="text-sm font-semibold mb-3 text-muted-foreground">
          {isDocsPage ? "Docs" : "Components"}
        </h3>
        <nav className="flex flex-col gap-2">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`${basePath}/${item.slug}`}
              className={cn(
                "text-sm hover:text-foreground transition",
                pathname === `${basePath}/${item.slug}` && "font-medium text-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile popover menu */}
      <div className="block md:hidden mb-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">
              <Menu className="mr-2 h-4 w-4" />
              {isDocsPage ? "Docs" : "Components"}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            sideOffset={8}
            className="w-[200px] ml-2 mr-2 rounded-md border bg-popover p-3 shadow-md"
          >
            <nav className="flex flex-col gap-2">
              {items.map((item) => (
                <Link
                  key={item.slug}
                  href={`${basePath}/${item.slug}`}
                  className={cn(
                    "text-sm hover:text-foreground transition",
                    pathname === `${basePath}/${item.slug}` && "font-medium text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </PopoverContent>
        </Popover>
      </div>
    </>
  )
}

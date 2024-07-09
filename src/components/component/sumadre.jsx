/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/GDa7nTtT0Bb
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export function Sumadre() {
  const [selectedLocation, setSelectedLocation] = useState("")
  const [selectedType, setSelectedType] = useState("")
  const filteredEquipment = useMemo(() => {
    return [
      { id: "desktop", name: "Desktop", location: "office", type: "desktop" },
      { id: "laptop", name: "Laptop", location: "office", type: "laptop" },
      { id: "monitor", name: "Monitor", location: "office", type: "monitor" },
      { id: "router", name: "Router", location: "remote", type: "networking" },
      { id: "switch", name: "Switch", location: "warehouse", type: "networking" },
      { id: "firewall", name: "Firewall", location: "remote", type: "networking" },
      { id: "web-server", name: "Web Server", location: "data-center", type: "server" },
      { id: "app-server", name: "Application Server", location: "data-center", type: "server" },
      { id: "db-server", name: "Database Server", location: "data-center", type: "server" },
      { id: "printer", name: "Printer", location: "office", type: "printer" },
    ].filter((item) => {
      if (selectedLocation && item.location !== selectedLocation) return false
      if (selectedType && item.type !== selectedType) return false
      return true
    });
  }, [selectedLocation, selectedType])
  return (
    (<div className="flex flex-col w-full min-h-screen bg-background">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <nav
          className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
            prefetch={false}>
            <WrenchIcon className="w-6 h-6" />
            <span className="sr-only">Maintenance Manager</span>
          </Link>
          <Link href="#" className="font-bold" prefetch={false}>
            Maintenance Schedule
          </Link>
          <Link href="#" className="text-muted-foreground" prefetch={false}>
            Equipment
          </Link>
          <Link href="#" className="text-muted-foreground" prefetch={false}>
            Reports
          </Link>
        </nav>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="flex-1 ml-auto sm:flex-initial">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search maintenance..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]" />
            </div>
          </form>
          <Button variant="ghost" size="icon" className="rounded-full">
            <img
              src="/placeholder.svg"
              width="32"
              height="32"
              className="rounded-full"
              alt="Avatar" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <section className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1">
          <Card className="col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle>Equipment Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="equipment">Select Equipment</Label>
                  <div className="flex gap-2">
                    <Select
                      id="equipment"
                      value={selectedLocation}
                      onValueChange={setSelectedLocation}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All Locations</SelectItem>
                        <SelectItem value="office">Office</SelectItem>
                        <SelectItem value="warehouse">Warehouse</SelectItem>
                        <SelectItem value="remote">Remote</SelectItem>
                        <SelectItem value="data-center">Data Center</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select id="equipment-type" value={selectedType} onValueChange={setSelectedType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All Types</SelectItem>
                        <SelectItem value="desktop">Desktop</SelectItem>
                        <SelectItem value="laptop">Laptop</SelectItem>
                        <SelectItem value="monitor">Monitor</SelectItem>
                        <SelectItem value="networking">Networking</SelectItem>
                        <SelectItem value="server">Server</SelectItem>
                        <SelectItem value="printer">Printer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label>Equipment Maintenance Status</Label>
                  <div className="grid gap-2">
                    {filteredEquipment.map((item) => (
                      <div key={item.id} className="flex items-center gap-2">
                        <Checkbox id={item.id} />
                        <Label htmlFor={item.id}>{item.name}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>)
  );
}

function SearchIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}


function WrenchIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>)
  );
}
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Search, LayoutDashboard, Bookmark, TrendingUp, Package, Settings } from "lucide-react";
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
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "Dashboard",
    url: createPageUrl("Dashboard"),
    icon: LayoutDashboard,
  },
  {
    title: "Product Search",
    url: createPageUrl("Search"),
    icon: Search,
  },
  {
    title: "Saved Products",
    url: createPageUrl("Saved"),
    icon: Bookmark,
  },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <style>{`
          :root {
            --primary: 220 53% 18%;
            --primary-foreground: 210 20% 98%;
            --secondary: 160 84% 39%;
            --secondary-foreground: 0 0% 98%;
            --accent: 220 14% 96%;
            --accent-foreground: 220 53% 18%;
            --muted: 220 14% 96%;
            --muted-foreground: 220 8% 46%;
          }
        `}</style>
        
        <Sidebar className="border-r border-slate-200/60 bg-white/80 backdrop-blur-xl">
          <SidebarHeader className="border-b border-slate-200/60 p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-xl flex items-center justify-center shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-slate-900 text-lg">DropScope</h2>
                <p className="text-xs text-slate-500 font-medium">MCP Platform</p>
              </div>
            </div>
          </SidebarHeader>
          
          <SidebarContent className="p-3">
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-3 py-2">
                Navigation
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-1">
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild 
                        className={`hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 rounded-xl mb-1 ${
                          location.pathname === item.url 
                            ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 shadow-sm border border-blue-100' 
                            : 'hover:shadow-sm'
                        }`}
                      >
                        <Link to={item.url} className="flex items-center gap-3 px-4 py-3">
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup className="mt-8">
              <SidebarGroupLabel className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-3 py-2">
                Quick Stats
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <div className="px-4 py-3 space-y-3 bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl border border-emerald-100/50">
                  <div className="flex items-center gap-3 text-sm">
                    <Package className="w-4 h-4 text-emerald-600" />
                    <span className="text-slate-700 font-medium">Saved Products</span>
                    <span className="ml-auto font-bold text-emerald-600">0</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                    <span className="text-slate-700 font-medium">Trending This Week</span>
                    <span className="ml-auto font-bold text-blue-600">0</span>
                  </div>
                </div>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="border-t border-slate-200/60 p-4 bg-white/60">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center">
                <span className="text-slate-700 font-bold text-sm">D</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-slate-900 text-sm truncate">Dropshipper</p>
                <p className="text-xs text-slate-500 truncate">Find trending products</p>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 flex flex-col">
          <header className="bg-white/80 backdrop-blur-xl border-b border-slate-200/60 px-6 py-4 md:hidden">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="hover:bg-slate-100 p-2 rounded-xl transition-colors duration-200" />
              <h1 className="text-xl font-bold text-slate-900">DropScope</h1>
            </div>
          </header>

          <div className="flex-1 overflow-auto">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
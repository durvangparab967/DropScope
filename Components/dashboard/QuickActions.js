import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Search, Bookmark, Upload, BarChart3, Zap } from "lucide-react";

const quickActions = [
  {
    title: "Search Products",
    description: "Find trending products for your store",
    icon: Search,
    url: "Search",
    color: "from-blue-500 to-indigo-500",
    bgColor: "from-blue-50 to-indigo-50"
  },
  {
    title: "View Saved",
    description: "Manage your saved product collection", 
    icon: Bookmark,
    url: "Saved",
    color: "from-emerald-500 to-green-500",
    bgColor: "from-emerald-50 to-green-50"
  },
  {
    title: "Upload Products",
    description: "Upload products to your platforms",
    icon: Upload,
    url: "Saved",
    color: "from-purple-500 to-indigo-500",
    bgColor: "from-purple-50 to-indigo-50"
  },
  {
    title: "Analytics",
    description: "View performance insights",
    icon: BarChart3,
    url: "Dashboard",
    color: "from-amber-500 to-orange-500", 
    bgColor: "from-amber-50 to-orange-50"
  }
];

export default function QuickActions() {
  return (
    <Card className="bg-white/70 backdrop-blur-sm border-slate-200/60 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-slate-900">
          <Zap className="w-5 h-5 text-amber-600" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <Link key={action.title} to={createPageUrl(action.url)}>
              <div className={`p-6 rounded-xl bg-gradient-to-br ${action.bgColor} border border-slate-100 hover:shadow-lg transition-all duration-300 cursor-pointer group`}>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{action.title}</h3>
                <p className="text-sm text-slate-600">{action.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
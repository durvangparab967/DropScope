import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Smartphone, Home, Dumbbell, Shirt, Sparkles } from "lucide-react";

const trendingCategories = [
  { name: "Electronics", growth: "+23%", icon: Smartphone, color: "bg-blue-500" },
  { name: "Home & Garden", growth: "+18%", icon: Home, color: "bg-green-500" },
  { name: "Fashion", growth: "+15%", icon: Shirt, color: "bg-purple-500" },
  { name: "Fitness", growth: "+12%", icon: Dumbbell, color: "bg-orange-500" },
  { name: "Beauty", growth: "+9%", icon: Sparkles, color: "bg-pink-500" }
];

export default function TrendingCategories() {
  return (
    <Card className="bg-white/70 backdrop-blur-sm border-slate-200/60 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-slate-900">
          <TrendingUp className="w-5 h-5 text-emerald-600" />
          Trending Categories
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {trendingCategories.map((category, index) => (
          <div key={category.name} className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-white/60 to-slate-50/60 border border-slate-100">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg ${category.color} flex items-center justify-center`}>
                <category.icon className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium text-slate-800">{category.name}</span>
            </div>
            <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 font-semibold">
              {category.growth}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
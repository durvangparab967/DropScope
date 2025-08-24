import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Package, TrendingUp, Upload, DollarSign } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function StatsOverview({ stats, isLoading }) {
  const statItems = [
    {
      title: "Total Products",
      value: stats.totalProducts,
      icon: Package,
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-100"
    },
    {
      title: "Saved Products", 
      value: stats.savedProducts,
      icon: TrendingUp,
      gradient: "from-emerald-500 to-emerald-600",
      bgGradient: "from-emerald-50 to-green-50",
      borderColor: "border-emerald-100"
    },
    {
      title: "Uploaded",
      value: stats.uploadedProducts,
      icon: Upload,
      gradient: "from-indigo-500 to-indigo-600", 
      bgGradient: "from-indigo-50 to-purple-50",
      borderColor: "border-indigo-100"
    },
    {
      title: "Avg. Trending Score",
      value: `${stats.avgTrendingScore}/100`,
      icon: DollarSign,
      gradient: "from-amber-500 to-amber-600",
      bgGradient: "from-amber-50 to-yellow-50", 
      borderColor: "border-amber-100"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {statItems.map((item, index) => (
        <Card key={item.title} className={`bg-gradient-to-br ${item.bgGradient} ${item.borderColor} border backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300`}>
          <CardContent className="p-6">
            {isLoading ? (
              <div className="space-y-3">
                <Skeleton className="h-8 w-8 rounded-lg" />
                <Skeleton className="h-8 w-16" />
                <Skeleton className="h-4 w-20" />
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-slate-900">
                    {item.value}
                  </p>
                  <p className="text-sm font-medium text-slate-600">
                    {item.title}
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
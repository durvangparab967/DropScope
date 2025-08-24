import React, { useState, useEffect } from "react";
import { Product } from "@/entities/Product";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, TrendingUp, Package, DollarSign, BarChart3, Plus, ArrowRight, Star, Target } from "lucide-react";
import { motion } from "framer-motion";

import StatsOverview from "./components/dashboard/StatsOverview";
import TrendingCategories from "./components/dashboard/TrendingCategories";
import RecentProducts from "../components/dashboard/RecentProducts";
import QuickActions from "./components/dashboard/QuickActions";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setIsLoading(true);
    try {
      const data = await Product.list("-created_date", 10);
      setProducts(data);
    } catch (error) {
      console.error("Error loading products:", error);
    }
    setIsLoading(false);
  };

  const stats = {
    totalProducts: products.length,
    savedProducts: products.filter(p => p.status === 'saved').length,
    uploadedProducts: products.filter(p => p.status === 'uploaded').length,
    avgTrendingScore: products.length > 0 
      ? Math.round(products.reduce((sum, p) => sum + (p.trending_score || 0), 0) / products.length)
      : 0
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">DropScope</span>
              </h1>
              <p className="text-slate-600 text-lg font-medium">
                Discover trending products and scale your dropshipping business
              </p>
            </div>
            <Link to={createPageUrl("Search")}>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <Search className="w-5 h-5 mr-2" />
                Find Products
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <StatsOverview stats={stats} isLoading={isLoading} />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <QuickActions />
            </motion.div>

            {/* Recent Products */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <RecentProducts products={products} isLoading={isLoading} />
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <TrendingCategories />
            </motion.div>

            {/* Performance Insights */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="bg-white/70 backdrop-blur-sm border-slate-200/60 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-slate-900">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Performance Insights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border border-emerald-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm font-semibold text-slate-700">Top Category</span>
                    </div>
                    <p className="text-emerald-800 font-bold">Electronics</p>
                    <p className="text-xs text-emerald-600">Highest conversion rate</p>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-semibold text-slate-700">Market Trend</span>
                    </div>
                    <p className="text-blue-800 font-bold">Rising</p>
                    <p className="text-xs text-blue-600">+15% this week</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
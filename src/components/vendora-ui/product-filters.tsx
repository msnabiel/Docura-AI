"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

interface ProductFiltersProps {
  categories: string[]
  onFilterChange?: (filters: {
    priceRange: [number, number]
    selectedCategories: string[]
    sortBy: string
  }) => void
  className?: string
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  categories,
  onFilterChange,
  className,
}) => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("newest")

  const handleCategoryToggle = (category: string) => {
    const updated = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category]
    setSelectedCategories(updated)
    onFilterChange?.({ priceRange, selectedCategories: updated, sortBy })
  }

  const handlePriceChange = (newRange: [number, number]) => {
    setPriceRange(newRange)
    onFilterChange?.({ priceRange: newRange, selectedCategories, sortBy })
  }

  const handleSortChange = (value: string) => {
    setSortBy(value)
    onFilterChange?.({ priceRange, selectedCategories, sortBy: value })
  }

  return (
    <div className={cn("space-y-6", className)}>
      <div>
        <h4 className="text-sm font-medium mb-2">Sort By</h4>
        <Select value={sortBy} onValueChange={handleSortChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="low-to-high">Price: Low to High</SelectItem>
            <SelectItem value="high-to-low">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <h4 className="text-sm font-medium mb-2">Price Range</h4>
        <Slider
          min={0}
          max={1000}
          step={50}
          value={priceRange}
          onValueChange={(val) => handlePriceChange([val[0], val[val.length - 1]])}
        />
        <p className="text-muted-foreground text-sm mt-1">
          ₹{priceRange[0]} – ₹{priceRange[1]}
        </p>
      </div>

      <div>
        <h4 className="text-sm font-medium mb-2">Categories</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center gap-2">
              <Checkbox
                id={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => handleCategoryToggle(category)}
              />
              <Label htmlFor={category} className="text-sm capitalize">
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

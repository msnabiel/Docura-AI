import Link from "next/link"
import Image from "next/image"
import { FlattenedVariant } from "@/data/products"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  product: FlattenedVariant
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/product/${product.slug}`} className="group block overflow-hidden rounded-xl border bg-background hover:shadow transition">
      <Image
        src={product.images?.[0] || "/placeholder.svg"}
        alt={product.name}
        width={400}
        height={400}
        className="aspect-square w-full object-cover"
      />
      <div className="p-3 space-y-1">
        <h3 className="text-sm font-medium text-foreground group-hover:underline">
          {product.parentName} – {product.name}
        </h3>
        <p className="text-sm text-muted-foreground">₹{product.price}</p>
        <Button variant="outline" size="sm" className="w-full mt-2">View</Button>
      </div>
    </Link>
  )
}

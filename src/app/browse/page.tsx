import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SearchIcon, StarIcon } from "lucide-react";
import Image from "next/image";

export default function BrowsePage() {
  // This would typically come from a backend API
  const softwareProducts = [
    {
      id: 1,
      name: "BeatMaker Pro",
      category: "DAW",
      rating: 4.5,
      price: "$199.99",
    },
    {
      id: 2,
      name: "SynthWizard",
      category: "Synthesizer",
      rating: 4.2,
      price: "$149.99",
    },
    {
      id: 3,
      name: "DrumCraft",
      category: "Drums",
      rating: 4.7,
      price: "$79.99",
    },
    {
      id: 4,
      name: "MixMaster",
      category: "Mixing",
      rating: 4.4,
      price: "$129.99",
    },
    {
      id: 5,
      name: "VocalEnhance",
      category: "Vocal Processing",
      rating: 4.3,
      price: "$89.99",
    },
    {
      id: 6,
      name: "GuitarSuite",
      category: "Guitar",
      rating: 4.6,
      price: "$109.99",
    },
  ];

  const categories = [
    "DAW",
    "Synthesizer",
    "Drums",
    "Mixing",
    "Vocal Processing",
    "Guitar",
    "Bass",
    "Mastering",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-1/4">
          <div className="mb-6">
            <Input
              type="text"
              placeholder="Search software..."
              className="w-full"
            />
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Categories</h2>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center">
                  <Checkbox id={category} />
                  <label
                    htmlFor={category}
                    className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Price Range</h2>
            <div className="flex items-center space-x-2">
              <Input type="number" placeholder="Min" className="w-1/2" />
              <span>-</span>
              <Input type="number" placeholder="Max" className="w-1/2" />
            </div>
          </div>
          <Button className="w-full">Apply Filters</Button>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Browse Music Software</h1>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="name">Name</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwareProducts.map((product) => (
              <Card key={product.id} className="bg-[#000000]">
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src={`/image/5-1.png?height=100&width=200&text=${product.name}`}
                    alt={product.name}
                    width={"200"}
                    height={"300"}
                    className="w-full h-32 object-cover mb-4 rounded"
                  />
                  <p className="text-sm text-muted-foreground mb-2">
                    {product.category}
                  </p>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm">{product.rating}</span>
                  </div>
                  <p className="font-bold">{product.price}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button variant="outline" className="mx-1">
              Previous
            </Button>
            <Button variant="outline" className="mx-1">
              1
            </Button>
            <Button variant="outline" className="mx-1">
              2
            </Button>
            <Button variant="outline" className="mx-1">
              3
            </Button>
            <Button variant="outline" className="mx-1">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

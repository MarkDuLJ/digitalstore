import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Key, Leaf } from "lucide-react";
import Link from "next/link";

const perks=[
  {
    name:"Instand Delivery",
    Icon: ArrowDownToLine,
    description:"delivery to your email very quick, so you can download it."
  },
  {
    name:"Guaranteed Quality",
    Icon: CheckCircle,
    description:"quality here always good."
  },
  {
    name:"For the Planet",
    Icon: Leaf,
    description:"we will donate 5% to ngo based on your purchase."
  },
]

export default function Home() {
  return (
    <>
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center justify-center max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">High-End Staff <span className="text-blue-600">HERE</span></h1>
      <p className="mt-6 text-lg max-w-prose text-muted-foreground">Welcom to my place</p>
      <div className="flex flex-col sm:flex-row mt-6 gap-4">
        <Link href='/products' className={buttonVariants()}>Browse Trending</Link>
        <Button variant="ghost">Quality Promise &rarr;</Button>
      </div>
      </div>
    </MaxWidthWrapper>

    <section className="border-t border-gray-200 bg-gray-50">
      <MaxWidthWrapper className="py-20">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-0">
          {perks.map(perk => (
            <div 
              key={perk.name}
              className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-green-100 text-green-400">
                    {<perk.Icon className="w-1/3 h-1/3"/>}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">{perk.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{perk.description}</p>
                </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
    </>
  );
}

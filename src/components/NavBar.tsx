import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Icons } from "./icons"
import NavItems from "./NavItems"
import { buttonVariants } from "./ui/button"

const NavBar = () => {
    const user = "Mark"

    return (
        <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
            <header className="relative bg-white">
                <MaxWidthWrapper>
                    <div className="border-b border-gray-200">
                    <div className="flex h-16 items-center">
                        <div className="ml-4 flex lg:ml-0">
                            <Link href="/">
                                <Icons.logo className="h-10 w-10" />
                            </Link>
                        </div>
                        <div className="hidden z-50 lg:ml-8 lg:block lf:self-stretch">
                            <NavItems />
                        </div>
                        <div className="ml-auto flex items-center">
                            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:gap-x-4">
                            {user ? (<span className="h-6 w-px bg-gray-200">{user}</span>)
                                  :<Link href="/sign-in" className={buttonVariants({variant:'ghost'})}>Sign In</Link>  }
                            </div>
                        </div>
                    </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    )
}

export default NavBar
import Link from "next/link";
import ShoppingCartBtn from "./ShoppingCartBtn";

console.log(typeof window);

function Navbar() {
  return (
    <nav className="flex gap-10 items-center sticky top-0">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/store">Store</Link>
      <ShoppingCartBtn />
    </nav>
  );
}

export default Navbar;

import Link from "next/link";

export default function Dashboard() {
    return (
      <div className="flex flex-col h-screen justify-center items-center gap-2">
        <Link href="/Products" className="border border-slate-200 text-slate-200 rounded-l px-2 py2 w-1/3 flex justify-center cursor-pointer hover:scale-110 hover:bg-green-300">Products</Link>
        <Link href="/Orders" className="border border-slate-200 text-slate-200 rounded-l px-2 py2 w-1/3 flex justify-center cursor-pointer hover:scale-110 hover:bg-green-300">Orders</Link>
        <Link href="/Settings" className="border border-slate-200 text-slate-200 rounded-l px-2 py2 w-1/3 flex justify-center cursor-pointer hover:scale-110 hover:bg-green-300">Settings</Link>
        
      </div>
    )
  }
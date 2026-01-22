import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-base-300 text-neutral ">
      <div className="max-w-7xl mx-auto py-10 px-4 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link
            href={"/"}
            className="text-xl font-bold normal-case hover:scale-105 transition-transform"
          >
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ElectroNexus
            </span>
          </Link>
          <p className="mt-3 text-sm text-neutral">
            Your trusted destination for modern electronic devices and smart
            gadgets.
          </p>
        </div>
        <div>
          <h3 className="footer-title text-neutral">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href={"/"} className="link link-hover">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/items"} className="link link-hover">
                Items
              </Link>
            </li>
            <li>
              <Link href={"/login"} className="link link-hover">
                Login
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="footer-title text-neutral">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>Smartphones</li>
            <li>laptops</li>
            <li>Headphones</li>
            <li>Accessories</li>
          </ul>
        </div>
        <div>
          <h3 className="footer-title text-neutral">Contact</h3>
          <p className="text-sm">Email: support@electronexus.com</p>
          <p className="text-sm">Phone: +8801234 567890</p>
        </div>
      </div>

      <div className="border-t border-base-300">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} ElectroNexus. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="/privacy" className="link link-hover">
              Privacy
            </Link>
            <Link href="/terms" className="link link-hover">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

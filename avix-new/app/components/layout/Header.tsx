"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import {
  Menu,
  X,
  Calculator,
  Phone,
  Zap,
  ArrowRight,
  CreditCard,
  TrendingUp,
  Home,
} from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Announcement bar */}
      {showAnnouncement && (
        <div className="bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white py-3 px-4 relative overflow-hidden">
          <div className="whitespace-nowrap overflow-hidden animate-scroll">
            <span className="inline-flex space-x-8 text-sm md:text-base font-medium">
              <span className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-yellow-300 animate-pulse" />
                <span>🎉 Personal Loans from</span>
                <span className="font-bold text-yellow-300">9.99%*</span>
                <span>| Approval in 24 Hours</span>
              </span>
              <span className="flex items-center space-x-2">
                <CreditCard className="w-5 h-5" />
                <span>💰 Business Loans</span>
                <span>| Fully Digital Process</span>
              </span>
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-1/2 -translate-y-1/2 right-2 text-white/70 hover:text-white hover:bg-white/10 p-1"
            onClick={() => setShowAnnouncement(false)}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      )}

      {/* Main Header */}
      <header className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-900 via-purple-800 to-pink-700 p-1 shadow-lg">
                <Image
                  src="/assets/AvixLogo.png"
                  alt="AVIX Logo"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col">
                <span className="text-2xl font-bold">AVIX</span>
                <span className="text-xs text-gray-500 hidden sm:block">
                  Financial Services
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-lg font-medium hover:text-[#8A1C9D] ${
                    isActive(item.href)
                      ? "text-[#8A1C9D] border-b-2 border-[#8A1C9D] pb-1"
                      : "text-gray-800"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                className="bg-gradient-to-tr from-indigo-900 via-purple-800 to-pink-700 text-white"
                size="sm"
                asChild
              >
                <Link href="/contact" className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>Contact Us</span>
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 text-base font-medium ${
                      isActive(item.href)
                        ? "text-[#8A1C9D] bg-gray-100"
                        : "text-gray-800"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-3 pt-2">
                  <Button
                    className="bg-gradient-to-tr from-indigo-900 via-purple-800 to-pink-700 text-white w-full"
                    size="sm"
                    asChild
                  >
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      <Phone className="w-4 h-4 mr-2" />
                      Get Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;

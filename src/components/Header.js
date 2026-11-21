"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const menu = [
  { label: "Home", href: "/", current: true },
  { label: "About Us", href: "#aboutus" },
  { label: "Products", href: "#products" },
  { label: "Contact Us", href: "#contactus" },
];

function CloseIcon() {
  return (
    <svg className="ct-icon" width="12" height="12" viewBox="0 0 15 15" aria-hidden="true">
      <path d="M1 15a1 1 0 01-.71-.29 1 1 0 010-1.41l5.8-5.8-5.8-5.8A1 1 0 011.7.29l5.8 5.8 5.8-5.8a1 1 0 011.41 1.41l-5.8 5.8 5.8 5.8a1 1 0 01-1.41 1.41l-5.8-5.8-5.8 5.8A1 1 0 011 15z" />
    </svg>
  );
}



function MenuIcon() {
  return (
    <svg className="ct-icon" width="18" height="14" viewBox="0 0 18 14" aria-hidden="true">
      <rect y="0.00" width="18" height="1.7" rx="1" />
      <rect y="6.15" width="18" height="1.7" rx="1" />
      <rect y="12.3" width="18" height="1.7" rx="1" />
    </svg>
  );
}

function Logo() {
  return (
    <Link href="/" className="site-logo" rel="home">
      <Image
        src="/logo.png"
        alt="Sandhya Plastic"
        width={1402}
        height={1121}
        priority
        sizes="150px"
      />
    </Link>
  );
}

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const searchInput = useRef(null);

  useEffect(() => {
    const open = searchOpen || drawerOpen;
    document.body.style.overflow = open ? "hidden" : "";
    if (searchOpen) searchInput.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setDrawerOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [searchOpen, drawerOpen]);

  const onSearch = (e) => {
    e.preventDefault();
    setSearchOpen(false);
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      

      <header id="header" className="site-header">
        {/* Desktop */}
        <div className="header-row header-desktop">
          <div className="header-col header-col-start">
            <Logo />
          </div>
          <div className="header-col header-col-middle">
            <nav className="header-menu" aria-label="Menu">
              <ul>
                {menu.map((item) => (
                  <li key={item.label} className={item.current ? "current" : undefined}>
                    <a href={item.href} aria-current={item.current ? "page" : undefined}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="header-col header-col-end">
            <button
              type="button"
              className="header-toggle"
              aria-label="Search"
              aria-controls="search-modal"
              onClick={() => setSearchOpen(true)}
            >
            </button>
          </div>
        </div>

        {/* Mobile */}
        <div className="header-row header-mobile">
          <div className="header-col header-col-start">
            <Logo />
          </div>
          <div className="header-col header-col-end">
            <button
              type="button"
              className="header-toggle"
              aria-label="Menu"
              aria-controls="offcanvas"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {/* Search modal */}
      <div
        id="search-modal"
        className={`search-modal${searchOpen ? " active" : ""}`}
        role="dialog"
        aria-label="Search modal"
        inert={!searchOpen}
      >
        <div className="panel-actions">
          <button
            type="button"
            className="panel-close"
            aria-label="Close search modal"
            onClick={() => setSearchOpen(false)}
          >
            <CloseIcon />
          </button>
        </div>
        <div className="search-modal-content">
          <form role="search" className="search-form" onSubmit={onSearch}>
            <input
              ref={searchInput}
              type="search"
              className="search-field"
              placeholder="Search"
              name="s"
              autoComplete="off"
              title="Search for..."
              aria-label="Search for..."
            />
            <button type="submit" className="search-submit" aria-label="Search button">
          
            </button>
          </form>
        </div>
      </div>

      {/* Offcanvas (mobile menu) */}
      <div
        id="offcanvas"
        className={`offcanvas${drawerOpen ? " active" : ""}`}
        role="dialog"
        aria-label="Offcanvas modal"
        inert={!drawerOpen}
        onClick={(e) => {
          if (e.target === e.currentTarget) setDrawerOpen(false);
        }}
      >
        <div className="offcanvas-inner">
          <div className="panel-actions">
            <button
              type="button"
              className="panel-close"
              aria-label="Close drawer"
              onClick={() => setDrawerOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>
          <nav className="mobile-menu" aria-label="Menu">
            <ul>
              {menu.map((item) => (
                <li key={item.label}>
                  <a href={item.href} onClick={() => setDrawerOpen(false)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

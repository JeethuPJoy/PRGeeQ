"use client";

import { useState, useRef, useEffect } from "react";
import "./Navbar.css";

const menuItems = [
  {
    label: "Features",
    children: [
      {
        label: "Learning",
        hasSubmenu: true,
        submenu: [
          "Learning Style Analysis",
          "Goal Setting & Planning",
          "Learning Paths",
          "Personalization",
          "Progress Tracking",
        ],
      },
      {
        label: "Augmentation",
        hasSubmenu: true,
        submenu: [
          "Gamification",
          "Interactivities",
          "Social Learning",
          "Content Curation",
          "Content Formats",
        ],
      },
      {
        label: "Learning Eco-System",
        hasSubmenu: true,
        submenu: [
          "Assessments",
          "Analytics & Reporting",
          "Career Paths",
          "Career & Skills Development",
          "Compliances",
        ],
      },
      {
        label: "Add-On Modules",
        hasSubmenu: true,
        submenu: [
          "Content Creation & Management",
          "User Support & Community",
          "Security & Compliances",
          "Accessibility & Inclusivity",
          "Mobile Learning",
          "Interconnectivity",
        ],
      },
    ],
  },
  {
    label: "Use Cases",
    children: [
      {
        label: "By Challenge",
        hasSubmenu: true,
        submenu: [
          "Blended Learning",
          "Customer Training",
          "Employee Induction",
          "Standards Training",
          "Extended Enterprise",
        ],
      },
    ],
  },
  {
    label: "Our Customers",
    children: [
      {
        label: "Industries we Serve",
        hasSubmenu: true,
        submenu: [
          "Higher Education",
          "BFSI",
          "Retail & Healthcare",
          "States",
          "NonProfit",
        ],
      },
      {
        label: "Solutions for",
        hasSubmenu: true,
        submenu: [
          "Corporate Training",
          "E-Learning",
          "Education",
          "Government",
          "Training Management",
        ],
      },
      {
        label: "By Customer Size",
        hasSubmenu: false,
        submenu: [],
      },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Events", hasSubmenu: false },
      { label: "Media Presence", hasSubmenu: false },
      { label: "White Papers", hasSubmenu: false },
      { label: "Blogs", hasSubmenu: false },
      { label: "Help, Support & FAQs", hasSubmenu: false },
    ],
  },
  {
    label: "genZgalaxy",
    children: [],
  },
  {
    label: "NeuroLabs",
    children: [
      { label: "Coding Labs", hasSubmenu: false },
      { label: "Coding Bootcamps", hasSubmenu: false },
      { label: "Coding Challenges", hasSubmenu: false },
      { label: "Coding Resources", hasSubmenu: false },
    ],
  },
  {
    label: "NeuroLXP 2.10",
    children: [
      { label: "Digital Literacy", hasSubmenu: false },
      { label: "Information Literacy", hasSubmenu: false },
      { label: "Media Literacy", hasSubmenu: false },
      { label: "Financial Literacy", hasSubmenu: false },
    ],
  },
];

function Submenu({ items }) {
  return (
    <div className="nm-submenu">
      {items.map((item) => (
        <a key={item} href="#" className="nm-dropdown-item">
          {item}
        </a>
      ))}
    </div>
  );
}

function Dropdown({ items, mobileOpenSubs, onToggleSub }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="nm-dropdown">
      {items.map((item) => {
        if (!item.hasSubmenu) {
          return (
            <a key={item.label} href="#" className="nm-dropdown-item">
              {item.label}
            </a>
          );
        }
        const isOpen = mobileOpenSubs[item.label];
        return (
          <div
            key={item.label}
            className={`nm-dropdown-item has-sub${isOpen ? " mobile-open" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleSub(item.label);
            }}
          >
            <span>{item.label}</span>
            <span className="nm-sub-arrow">▶</span>
            {item.submenu && item.submenu.length > 0 && (
              <Submenu items={item.submenu} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOpenItems, setMobileOpenItems] = useState({});
  const [mobileOpenSubs, setMobileOpenSubs] = useState({});
  const navRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function toggleMobileItem(label) {
    setMobileOpenItems((prev) => ({ ...prev, [label]: !prev[label] }));
  }
  function toggleMobileSub(label) {
    setMobileOpenSubs((prev) => ({ ...prev, [label]: !prev[label] }));
  }

  return (
    <header ref={navRef}>
      <nav className="nm-navbar">
        <div className="nm-navbar-container">

          <a href="#" className="nm-brand">
            <img
              src="/assets/PRGEEQ-Logo.webp"
              alt="PRGeeQ Logo"
              onError={(e) => { e.target.style.display = "none"; }}
            />
          </a>

          <ul className={`nm-menu${mobileOpen ? " open" : ""}`}>
            {menuItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isMobileOpen = mobileOpenItems[item.label];

              return (
                <li
                  key={item.label}
                  className={`nm-nav-item${isMobileOpen ? " mobile-open" : ""}`}
                >
                  <span
                    className="nm-nav-link"
                    onClick={() => {
                      if (hasChildren) toggleMobileItem(item.label);
                    }}
                  >
                    {item.label}
                    {hasChildren && <span className="nm-arrow">▾</span>}
                  </span>

                  {hasChildren && (
                    <Dropdown
                      items={item.children}
                      mobileOpenSubs={mobileOpenSubs}
                      onToggleSub={toggleMobileSub}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="nm-cta-area">
            {/* <a href="#" className="nm-btn nm-btn-ghost">
              Login
            </a> */}
            <a href="#" className="nm-btn nm-btn-primary">
              SignIn
            </a>
            <button
              className="nm-hamburger"
              aria-label="Toggle navigation"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              <span
                className="nm-bar"
                style={
                  mobileOpen
                    ? { transform: "translateY(7px) rotate(45deg)" }
                    : {}
                }
              />
              <span
                className="nm-bar"
                style={mobileOpen ? { opacity: 0 } : {}}
              />
              <span
                className="nm-bar"
                style={
                  mobileOpen
                    ? { transform: "translateY(-7px) rotate(-45deg)" }
                    : {}
                }
              />
            </button>
          </div>

        </div>
      </nav>
    </header>
  );
}

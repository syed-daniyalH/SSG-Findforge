"use client";
 
import React, { useState, useEffect, useRef } from "react";
import {
  Accessibility,
  X,
  Type,
  Contrast,
  Link,
  Heading,
  Moon,
  Sun,
  Search,
  RotateCcw,
  FileText,
  Eye,
  VolumeX,
  Pause,
  ZoomIn,
  Minus,
  Plus,
  Book,
  ChevronDown,
  Keyboard,
} from "lucide-react";
import * as Tooltip from "@radix-ui/react-tooltip";
 
// Types for accessibility settings
interface AccessibilitySettings {
  highlightLinks: boolean;
  highlightHeadings: boolean;
  highContrast: boolean;
  largeFontSize: boolean;
  darkMode: boolean;
  lightMode: boolean;
  readableFont: boolean;
  textMagnifier: boolean;
  muteSounds: boolean;
  stopAnimations: boolean;
  fontSize: number; // 0: small, 1: default, 2: large
  hideImages: boolean;
  readingMask: boolean;
  bigBlackCursor: boolean;
  bigWhiteCursor: boolean;
  keyboardNavigation: boolean;
  screenReader: boolean;
}
 
// Default settings
const defaultSettings: AccessibilitySettings = {
  highlightLinks: false,
  highlightHeadings: false,
  highContrast: false,
  largeFontSize: false,
  darkMode: true, // Not active by default - this is the natural state
  lightMode: false, // Not active by default
  readableFont: false,
  textMagnifier: false,
  muteSounds: false,
  stopAnimations: false,
  fontSize: 1,
  hideImages: false,
  readingMask: false,
  bigBlackCursor: false,
  bigWhiteCursor: false,
  keyboardNavigation: false,
  screenReader: false,
};
 
// Storage key for localStorage
const STORAGE_KEY = "accessibility-settings";
 
// Useful Links Data Structure
interface UsefulLink {
  label: string;
  url: string;
}
 
interface UsefulLinksCategory {
  category: string;
  links: UsefulLink[];
}
 
const USEFUL_LINKS: UsefulLinksCategory[] = [
  {
    category: "Main Pages",
    links: [
      { label: "Home", url: "/" },
      { label: "About", url: "/about-us" },
      { label: "Services", url: "/services" },
    ],
  },
  {
    category: "Insights",
    links: [
      { label: "Blog", url: "/blog" },
      { label: "Case Studies", url: "/case-study" },
    ],
  },
  {
    category: "Resources",
    links: [
      { label: "Contact", url: "/contact-us" },
      { label: "Privacy Policy", url: "/privacy-policy" },
    ],
  },
];
 
// Utility function to fetch word meaning from the API route
const fetchWordMeaning = async (word: string) => {
  try {
    const response = await fetch(
      `/api/dictionary?word=${encodeURIComponent(word)}`,
    );
    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching word meaning:", error);
    return null;
  }
};
 
export const AccessibilityWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] =
    useState<AccessibilitySettings>(defaultSettings);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("dark");
  const [showTooltip, setShowTooltip] = useState(false);
  const [magnifierContent, setMagnifierContent] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showUsefulLinksDropdown, setShowUsefulLinksDropdown] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
 
  // Initialize theme on component mount
  // useEffect(() => {
  //   initializeTheme();
  //   setCurrentTheme(getCurrentTheme());
 
  //   // Listen for theme changes
  //   const handleThemeChange = (event: Event) => {
  //     const customEvent = event as CustomEvent<{ theme: "light" | "dark" }>;
  //     setCurrentTheme(customEvent.detail.theme);
  //   };
 
  //   window.addEventListener("themechange", handleThemeChange);
  //   return () => {
  //     window.removeEventListener("themechange", handleThemeChange);
  //   };
  // }, []);
 
  // Handle dictionary search
  // Add this inside your component
  // This handles the automatic search with a 500ms delay
  useEffect(() => {
    if (!searchTerm.trim()) {
      setSearchResult(null);
      return;
    }
 
    const delayDebounceFn = setTimeout(() => {
      handleDictionarySearch();
    }, 500);
 
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);
 
  // Keep your existing handleDictionarySearch function
  const handleDictionarySearch = async () => {
    if (!searchTerm.trim()) return;
 
    setIsSearching(true);
    try {
      const result = await fetchWordMeaning(searchTerm.trim());
      setSearchResult(result);
    } catch (error) {
      setSearchResult(null);
    } finally {
      setIsSearching(false);
    }
  };
 
  // Load settings from localStorage on component mount
  useEffect(() => {
    const savedSettings = localStorage.getItem(STORAGE_KEY);
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        applyAccessibilityClasses(parsed);
      } catch (error) {
        console.error("Error loading accessibility settings:", error);
      }
    }
  }, []);
 
  // Close panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
 
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
 
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
 
  // Text magnifier with cursor-following tooltip
  useEffect(() => {
    if (settings.textMagnifier) {
      // Elements that should trigger magnification (text content elements only)
      const TEXT_ELEMENTS = new Set([
        "p",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "a",
        "span",
        "strong",
        "em",
        "b",
        "i",
        "li",
        "label",
        "abbr",
        "code",
        "small",
        "mark",
        "del",
        "ins",
        "kbd",
        "samp",
        "var",
        "blockquote",
        "q",
        "cite",
        "dfn",
        "pre",
      ]);
 
      const handleMouseMove = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
 
        // Only trigger magnification for text content elements
        if (target && TEXT_ELEMENTS.has(target.tagName.toLowerCase())) {
          const textContent = target.textContent?.trim() || "";
 
          // Only show tooltip if there's actual text content
          if (textContent.length > 0) {
            setMagnifierContent(textContent);
            setTooltipPosition({ x: e.clientX, y: e.clientY });
            setShowTooltip(true);
          } else {
            setShowTooltip(false);
          }
        } else {
          setShowTooltip(false);
        }
      };
 
      const handleMouseLeave = () => {
        setShowTooltip(false);
      };
 
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseleave", handleMouseLeave);
 
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [settings.textMagnifier]);
 
  // Handle reading mask mouse following
  useEffect(() => {
    let readingMaskElement: HTMLDivElement | null = null;
 
    const createReadingMask = () => {
      // Remove existing mask if any
      const existingMask = document.getElementById("reading-mask-overlay");
      if (existingMask) {
        existingMask.remove();
      }
 
      // Create mask overlay
      readingMaskElement = document.createElement("div");
      readingMaskElement.id = "reading-mask-overlay";
      readingMaskElement.style.cssText = `
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 90% !important;
        height: 100% !important;
        z-index: 9998 !important;
        pointer-events: none !important;
      `;
 
      // Create reading window
      const readingWindow = document.createElement("div");
      readingWindow.style.cssText = `
        position: fixed !important;
        width: 100% !important;
        height: 200px !important;
        background-color: transparent !important;
        box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.7) !important;
        z-index: 9999 !important;
        pointer-events: none !important;
        border-radius: 8px !important;
        transform: translateX(-50%) translateY(-50%) !important;
        left: 50% !important;
      `;
 
      readingMaskElement.appendChild(readingWindow);
      document.body.appendChild(readingMaskElement);
    };
 
    const handleMouseMove = (event: MouseEvent) => {
      if (readingMaskElement && settings.readingMask) {
        const readingWindow = readingMaskElement.firstChild as HTMLDivElement;
        if (readingWindow) {
          readingWindow.style.left = "50%";
          readingWindow.style.top = `${event.clientY}px`;
          readingWindow.style.transform = "translateX(-50%) translateY(-50%)";
        }
      }
    };
 
    if (settings.readingMask) {
      createReadingMask();
      document.addEventListener("mousemove", handleMouseMove);
    } else {
      // Remove reading mask
      const existingMask = document.getElementById("reading-mask-overlay");
      if (existingMask) {
        existingMask.remove();
      }
      document.removeEventListener("mousemove", handleMouseMove);
    }
 
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      const existingMask = document.getElementById("reading-mask-overlay");
      if (existingMask) {
        existingMask.remove();
      }
    };
  }, [settings.readingMask]);
 
  // Apply CSS classes to document based on settings
  const applyAccessibilityClasses = (
    currentSettings: AccessibilitySettings,
  ) => {
    const body = document.body;
 
    // Remove all accessibility classes first
    body.classList.remove(
      "accessibility-highlight-links",
      "accessibility-highlight-headings",
      "accessibility-high-contrast",
      "accessibility-large-font",
      "accessibility-dark-mode",
      // 'accessibility-light-mode',
      "accessibility-readable-font",
      "accessibility-text-magnifier",
      "accessibility-mute-sounds",
      "accessibility-stop-animations",
      "accessibility-font-small",
      "accessibility-font-default",
      "accessibility-font-large",
      "accessibility-hide-images",
      "accessibility-big-black-cursor",
      "accessibility-big-white-cursor",
      "accessibility-keyboard-navigation",
      "accessibility-screen-reader",
    );
 
    // Apply classes based on current settings
    if (currentSettings.highlightLinks) {
      body.classList.add("accessibility-highlight-links");
    }
    if (currentSettings.highlightHeadings) {
      body.classList.add("accessibility-highlight-headings");
    }
    if (currentSettings.highContrast) {
      body.classList.add("accessibility-high-contrast");
      // Close panel when high contrast is activated
      setIsOpen(false);
    }
    if (currentSettings.largeFontSize) {
      body.classList.add("accessibility-large-font");
    }
    if (currentSettings.darkMode) {
      body.classList.add("accessibility-dark-mode");
    }
    if (currentSettings.lightMode) {
      body.classList.add("accessibility-light-mode");
    }
    if (currentSettings.readableFont) {
      body.classList.add("accessibility-readable-font");
    }
    if (currentSettings.textMagnifier) {
      body.classList.add("accessibility-text-magnifier");
    }
    if (currentSettings.muteSounds) {
      body.classList.add("accessibility-mute-sounds");
    }
    if (currentSettings.stopAnimations) {
      body.classList.add("accessibility-stop-animations");
    }
    if (currentSettings.hideImages) {
      body.classList.add("accessibility-hide-images");
    }
    if (currentSettings.bigBlackCursor) {
      body.classList.add("accessibility-big-black-cursor");
    }
    if (currentSettings.bigWhiteCursor) {
      body.classList.add("accessibility-big-white-cursor");
    }
    if (currentSettings.keyboardNavigation) {
      body.classList.add("accessibility-keyboard-navigation");
    }
    if (currentSettings.screenReader) {
      body.classList.add("accessibility-screen-reader");
    }
 
    // Font size classes
    if (currentSettings.fontSize === 0) {
      body.classList.add("accessibility-font-small");
    } else if (currentSettings.fontSize === 1) {
      body.classList.add("accessibility-font-default");
    } else if (currentSettings.fontSize === 2) {
      body.classList.add("accessibility-font-large");
    }
  };
 
  // Toggle a specific setting
  const toggleSetting = (key: keyof AccessibilitySettings) => {
    const newSettings = {
      ...settings,
      [key]: !settings[key],
    };
 
    // Special handling for dark/light mode
    if (key === "darkMode") {
      // When dark mode is activated, deactivate light mode
      if (newSettings.darkMode) {
        newSettings.lightMode = false;
      }
    } else if (key === "lightMode") {
      // When light mode is activated, deactivate dark mode
      if (newSettings.lightMode) {
        newSettings.darkMode = false;
      }
    }
 
    setSettings(newSettings);
    applyAccessibilityClasses(newSettings);
 
    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newSettings));
  };
 
  // Adjust font size
  const adjustFontSize = (delta: number) => {
    const newFontSize = Math.max(0, Math.min(2, settings.fontSize + delta));
    const newSettings = {
      ...settings,
      fontSize: newFontSize,
    };
 
    setSettings(newSettings);
    applyAccessibilityClasses(newSettings);
 
    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newSettings));
  };
 
  // Reset all settings
  const resetSettings = () => {
    setSettings(defaultSettings);
    applyAccessibilityClasses(defaultSettings);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultSettings));
  };
 
  // Hide interface
  const hideInterface = () => {
    setIsOpen(false);
  };
 
  return (
    <>
      {/* CSS Styles - Only for accessibility feature effects */}
      <style jsx global>{`
        /* Accessibility Feature Styles */
 
        /* Highlight Links */
        body.accessibility-highlight-links a {
          // background: #fef3c7 !important;
          border: 2px solid white !important;
          border-bottom: 2px solid green !important;
          border-radius: 4px !important;
          // padding: 2px 4px !important;
          text-decoration: underline !important;
          transition: all 0.3s ease !important;
        }
 
        body.accessibility-highlight-links a:hover {
          // background: #fed7aa !important;
          border-color: #ea580c !important;
        }
 
        /* Highlight Headings */
        body.accessibility-highlight-headings h2,
        body.accessibility-highlight-headings h3 {
          border: 2px solid orange !important;
          border-radius: 4px !important;
          padding: 4px 8px !important;
          margin: 8px 0 !important;
        }
 
        /* High Contrast Mode */
        body.accessibility-high-contrast {
          filter: contrast(1) !important;
        }
 
        body.accessibility-high-contrast * {
          background-color: white !important;
          color: black !important;
          border-color: black !important;
        }
 
        // body.accessibility-high-contrast img {
        //   filter: grayscale(100%) contrast(1.5) !important;
        // }
 
        /* Dark Mode - Reset to default theme */
        body.accessibility-dark-mode {
          /* Remove any forced light mode styles to return to default */
        }
 
        body.accessibility-dark-mode * {
          /* Remove any forced light mode styles to return to default */
        }
 
        /* Light Mode - Force light theme override */
        body.accessibility-light-mode {
          background-color: white !important;
          color: #1f2937 !important;
        }
 
        body.accessibility-light-mode * {
          background-color: inherit !important;
          color: inherit !important;
          border-color: #4b5563 !important;
        }
 
        /* Text Magnifier - handled by React Tooltip */
        body.accessibility-text-magnifier {
          /* Magnification handled via floating tooltip component */
        }
 
        /* Hide Images - Show alt text */
        body.accessibility-hide-images img {
          display: none !important;
        }
 
        body.accessibility-hide-images img[alt]::after {
          content: attr(alt) !important;
          display: inline-block !important;
          background-color: #f3f4f6 !important;
          border: 1px solid #d1d5db !important;
          padding: 4px 8px !important;
          border-radius: 4px !important;
          font-style: italic !important;
          color: #6b7280 !important;
        }
 
        /* Readable Font */
        body.accessibility-readable-font,
        body.accessibility-readable-font * {
          font-family: "Arial", "Helvetica", sans-serif !important;
          line-height: 1.6 !important;
          letter-spacing: 0.5px !important;
          word-spacing: 1px !important;
        }
 
        body.accessibility-readable-font h1,
        body.accessibility-readable-font h2,
        body.accessibility-readable-font h3,
        body.accessibility-readable-font h4,
        body.accessibility-readable-font h5,
        body.accessibility-readable-font h6 {
          font-family: "Arial", "Helvetica", sans-serif !important;
          font-weight: 600 !important;
          line-height: 1.4 !important;
        }
 
        body.accessibility-readable-font p,
        body.accessibility-readable-font li,
        body.accessibility-readable-font span,
        body.accessibility-readable-font div {
          font-family: "Arial", "Helvetica", sans-serif !important;
          line-height: 1.6 !important;
        }
 
        /* Big Black Cursor */
        body.accessibility-big-black-cursor {
          cursor:
            url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M8 2 L8 26 L12 22 L16 30 L20 28 L16 20 L22 20 Z" fill="black"/></svg>')
              0 0,
            auto !important;
        }
 
        body.accessibility-big-black-cursor * {
          cursor:
            url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M8 2 L8 26 L12 22 L16 30 L20 28 L16 20 L22 20 Z" fill="black"/></svg>')
              0 0,
            auto !important;
        }
 
        /* Big White Cursor */
        body.accessibility-big-white-cursor {
          cursor:
            url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M8 2 L8 26 L12 22 L16 30 L20 28 L16 20 L22 20 Z" fill="white" stroke="black" stroke-width="1"/></svg>')
              0 0,
            auto !important;
        }
 
        body.accessibility-big-white-cursor * {
          cursor:
            url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M8 2 L8 26 L12 22 L16 30 L20 28 L16 20 L22 20 Z" fill="white" stroke="black" stroke-width="1"/></svg>')
              0 0,
            auto !important;
        }
 
        /* Mute Sounds */
        body.accessibility-mute-sounds video,
        body.accessibility-mute-sounds audio {
          muted: true !important;
        }
 
        /* Stop Animations */
        body.accessibility-stop-animations *,
        body.accessibility-stop-animations *::before,
        body.accessibility-stop-animations *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
 
        /* Font Sizes */
        body.accessibility-font-small {
          font-size: 90% !important;
        }
 
        body.accessibility-font-small * {
          font-size: inherit !important;
        }
 
        body.accessibility-font-large {
          font-size: 120% !important;
        }
 
        body.accessibility-font-large * {
          font-size: inherit !important;
        }
 
        /* Large Font Size (legacy) */
        body.accessibility-large-font {
          font-size: 120% !important;
        }
 
        body.accessibility-large-font * {
          font-size: inherit !important;
        }
 
        body.accessibility-large-font h1 {
          font-size: 2.5em !important;
        }
 
        body.accessibility-large-font h2 {
          font-size: 2em !important;
        }
 
        body.accessibility-large-font h3 {
          font-size: 1.5em !important;
        }
 
        body.accessibility-large-font p,
        body.accessibility-large-font li,
        body.accessibility-large-font span {
          font-size: 1.1em !important;
        }
 
        /* High contrast panel positioning fix */
        body.accessibility-high-contrast .accessibility-panel {
          position: absolute !important;
          bottom: auto !important;
          top: 100px !important;
        }
      `}</style>
 
      {/* Text Magnifier Floating Tooltip */}
      {showTooltip && (
        <div
          className="fixed bg-orange-500 text-white text-lg font-semibold px-4 py-2 rounded-lg shadow-2xl pointer-events-none z-50 max-w-3xl break-words dark:bg-orange-600 dark:text-white"
          style={{
            left: `${Math.min(tooltipPosition.x + 12, window.innerWidth - 320)}px`,
            top: `${Math.min(tooltipPosition.y + 12, window.innerHeight - 120)}px`,
            whiteSpace: "normal",
            wordWrap: "break-word",
            overflowWrap: "break-word",
          }}
          role="tooltip"
          aria-hidden="true"
        >
          {magnifierContent}
        </div>
      )}
 
      {/* Floating Button */}
      <button
        ref={buttonRef}
        className="fixed bottom-24 right-5 w-14 h-14 rounded-full bg-primary border-none cursor-pointer flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 z-1000"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Accessibility Options"
        title="Accessibility Options"
      >
        <Accessibility size={24} color="white" />
      </button>
 
      {/* Accessibility Panel */}
      <div
        ref={panelRef}
        className={`fixed bottom-30 top-20 sm:bottom-44 left-1/2 sm:left-auto sm:right-5 -translate-x-1/2 sm:translate-x-0 w-[92vw] sm:w-96 max-h-[75vh] sm:max-h-[80vh] bg-white rounded-xl shadow-2xl overflow-y-auto z-[1001] transform translate-y-5 opacity-0 invisible transition-all duration-300 ${
          isOpen ? "translate-y-0 opacity-100 visible" : ""
        }`}
      >
        {/* Header */}
        <div className="bg-primary-dark text-primary p-5 rounded-t-xl">
          <div className="text-xl font-semibold mb-4 flex items-center gap-2.5">
            <Accessibility size={20} />
            Accessibility Adjustments
          </div>
 
          {/* Search Bar */}
          <div className="mb-4">
            <div className="relative mb-3">
              <input
                type="text"
                placeholder="Unclear content? Search in dictionary..."
                aria-label="Search dictionary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-2.5 px-4 text-black pr-10 border-none rounded-lg bg-white/90 text-sm outline-none"
              />
              <button
                onClick={handleDictionarySearch}
                // Button is disabled if searching OR if the input is empty
                disabled={isSearching || !searchTerm.trim()}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors disabled:opacity-30"
                aria-label="Search"
              >
                {isSearching ? (
                  <div className="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full" />
                ) : (
                  <Search size={16} />
                )}
              </button>
            </div>
 
            {/* Search Result Display - Only shows if a valid word is found */}
            {searchResult &&
              Array.isArray(searchResult) &&
              searchResult.length > 0 && (
                <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-md max-h-48 overflow-y-auto">
                  <div className="text-sm">
                    <div className="font-semibold text-gray-800 mb-2">
                      {searchResult[0].word}
                    </div>
                    {searchResult[0].meanings?.[0] && (
                      <div>
                        <div className="text-gray-600 italic mb-2">
                          {searchResult[0].meanings[0].partOfSpeech}
                        </div>
                        <div className="text-gray-700">
                          {
                            searchResult[0].meanings[0].definitions?.[0]
                              ?.definition
                          }
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
 
            {/* Loading State - Shows while debounced search is in flight */}
            {isSearching && (
              <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-md text-sm text-gray-600">
                Searching...
              </div>
            )}
          </div>
 
          {/* Action Buttons */}
          <div className="flex gap-2 flex-wrap">
            <button
              className="py-1.5 px-3 bg-secondary border border-white/30 rounded-md text-white text-xs cursor-pointer transition-all hover:bg-secondary flex items-center gap-1.5"
              onClick={resetSettings}
            >
              <RotateCcw size={12} />
              Reset Settings
            </button>
            {/* <button className="py-1.5 px-3 bg-white/20 border border-white/30 rounded-md text-white text-xs cursor-pointer transition-all hover:bg-white/30 flex items-center gap-1.5">
              <FileText size={12} />
              Statement
            </button> */}
            <button
              className="py-1.5 px-3 bg-secondary border border-white/30 rounded-md text-white text-xs cursor-pointer transition-all hover:bg-secondary flex items-center gap-1.5"
              onClick={hideInterface}
            >
              <Eye size={12} />
              Hide Interface
            </button>
          </div>
        </div>
 
        {/* Content */}
        <div className="p-5">
          {/* Color Adjustment Section */}
          
 
          {/* Content Adjustment Section */}
          <div className="mb-6">
            <div className="text-base font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
              Content Adjustment
            </div>
 
            {/* Readable Font */}
            <div
              className={`flex items-center gap-2.5 text-sm text-gray-600 cursor-pointer select-none p-2 rounded-md transition-all ${settings.readableFont ? "border-2 border-blue-500 bg-blue-50" : "border-2 border-transparent hover:border-gray-300"}`}
              onClick={() => toggleSetting("readableFont")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleSetting("readableFont");
                }
              }}
            >
              <Type className="w-4.5 h-4.5 text-gray-500" />
              Readable Font
            </div>
 
            {/* Highlight Titles */}
            <div
              className={`flex items-center gap-2.5 text-sm text-gray-600 cursor-pointer select-none p-2 rounded-md transition-all ${settings.highlightHeadings ? "border-2 border-blue-500 bg-blue-50" : "border-2 border-transparent hover:border-gray-300"}`}
              onClick={() => toggleSetting("highlightHeadings")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleSetting("highlightHeadings");
                }
              }}
            >
              <Heading className="w-4.5 h-4.5 text-gray-500" />
              Highlight Titles
            </div>
 
            {/* Highlight Links */}
            <div
              className={`flex items-center gap-2.5 text-sm text-gray-600 cursor-pointer select-none p-2 rounded-md transition-all ${settings.highlightLinks ? "border-2 border-blue-500 bg-blue-50" : "border-2 border-transparent hover:border-gray-300"}`}
              onClick={() => toggleSetting("highlightLinks")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleSetting("highlightLinks");
                }
              }}
            >
              <Link className="w-4.5 h-4.5 text-gray-500" />
              Highlight Links
            </div>
 
            {/* Text Magnifier */}
            <div
              className={`flex items-center gap-2.5 text-sm text-gray-600 cursor-pointer select-none p-2 rounded-md transition-all ${settings.textMagnifier ? "border-2 border-blue-500 bg-blue-50" : "border-2 border-transparent hover:border-gray-300"}`}
              onClick={() => toggleSetting("textMagnifier")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleSetting("textMagnifier");
                }
              }}
            >
              <ZoomIn className="w-4.5 h-4.5 text-gray-500" />
              Text Magnifier
            </div>
 
            {/* Hide Images */}
            <div
              className={`flex items-center gap-2.5 text-sm text-gray-600 cursor-pointer select-none p-2 rounded-md transition-all ${settings.hideImages ? "border-2 border-blue-500 bg-blue-50" : "border-2 border-transparent hover:border-gray-300"}`}
              onClick={() => toggleSetting("hideImages")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleSetting("hideImages");
                }
              }}
            >
              <Eye className="w-4.5 h-4.5 text-gray-500" />
              Hide Images
            </div>
 
            {/* Reading Mask */}
            <div
              className={`flex items-center gap-2.5 text-sm text-gray-600 cursor-pointer select-none p-2 rounded-md transition-all ${settings.readingMask ? "border-2 border-blue-500 bg-blue-50" : "border-2 border-transparent hover:border-gray-300"}`}
              onClick={() => toggleSetting("readingMask")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleSetting("readingMask");
                }
              }}
            >
              <Book className="w-4.5 h-4.5 text-gray-500" />
              Reading Mask
            </div>
 
            {/* Big Black Cursor */}
            <div
              className={`flex items-center gap-2.5 text-sm text-gray-600 cursor-pointer select-none p-2 rounded-md transition-all ${settings.bigBlackCursor ? "border-2 border-blue-500 bg-blue-50" : "border-2 border-transparent hover:border-gray-300"}`}
              onClick={() => toggleSetting("bigBlackCursor")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleSetting("bigBlackCursor");
                }
              }}
            >
              <div className="w-4.5 h-4.5 bg-black rounded-full"></div>
              Big Black Cursor
            </div>
 
            {/* Big White Cursor */}
            <div
              className={`flex items-center gap-2.5 text-sm text-gray-600 cursor-pointer select-none p-2 rounded-md transition-all ${settings.bigWhiteCursor ? "border-2 border-blue-500 bg-blue-50" : "border-2 border-transparent hover:border-gray-300"}`}
              onClick={() => toggleSetting("bigWhiteCursor")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleSetting("bigWhiteCursor");
                }
              }}
            >
              <div className="w-4.5 h-4.5 bg-white border-2 border-black rounded-full"></div>
              Big White Cursor
            </div>
 
            {/* Adjust Font Sizing */}
            <div className="flex items-center justify-between p-2">
              <div className="flex items-center gap-2.5 text-sm text-gray-600">
                <Type className="w-4.5 h-4.5 text-gray-500" />
                Adjust Font Sizing
              </div>
              <div className="flex items-center gap-2.5">
                <button
                  className="w-8 h-8 border border-gray-300 bg-white rounded-md cursor-pointer flex items-center justify-center transition-colors hover:bg-gray-50"
                  onClick={() => adjustFontSize(-1)}
                  aria-label="Decrease font size"
                >
                  <Minus className="text-black" size={14} />
                </button>
                <span className="text-sm text-gray-500 min-w-[60px] text-center">
                  {settings.fontSize === 0
                    ? "Small"
                    : settings.fontSize === 1
                      ? "Default"
                      : "Large"}
                </span>
                <button
                  className="w-8 h-8 border border-gray-300 bg-white rounded-md cursor-pointer flex items-center justify-center transition-colors hover:bg-gray-50"
                  onClick={() => adjustFontSize(1)}
                  aria-label="Increase font size"
                >
                  <Plus className="text-black" size={14} />
                </button>
              </div>
            </div>
 
            {/* Mute Sounds */}
            <div
              className={`flex items-center gap-2.5 text-sm text-gray-600 cursor-pointer select-none p-2 rounded-md transition-all ${settings.muteSounds ? "border-2 border-blue-500 bg-blue-50" : "border-2 border-transparent hover:border-gray-300"}`}
              onClick={() => toggleSetting("muteSounds")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleSetting("muteSounds");
                }
              }}
            >
              <VolumeX className="w-4.5 h-4.5 text-gray-500" />
              Mute Sounds
            </div>
 
            {/* Stop Animations */}
            <div
              className={`flex items-center gap-2.5 text-sm text-gray-600 cursor-pointer select-none p-2 rounded-md transition-all ${settings.stopAnimations ? "border-2 border-blue-500 bg-blue-50" : "border-2 border-transparent hover:border-gray-300"}`}
              onClick={() => toggleSetting("stopAnimations")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleSetting("stopAnimations");
                }
              }}
            >
              <Pause className="w-4.5 h-4.5 text-gray-500" />
              Stop Animations
            </div>
          </div>
 
          {/* Useful Links Section */}
          <div className="mb-6">
            <div className="text-base font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
              Useful Links
            </div>
 
            {/* Useful Links Dropdown */}
            <div className="relative">
              <button
                onClick={() =>
                  setShowUsefulLinksDropdown(!showUsefulLinksDropdown)
                }
                className="w-full flex items-center justify-between gap-2.5 text-sm text-gray-600 p-2 rounded-md border-2 border-gray-300 bg-white hover:border-blue-500 transition-all"
                aria-label="Useful links dropdown"
                aria-expanded={showUsefulLinksDropdown}
              >
                <div className="flex items-center gap-2.5">
                  <Link className="w-4.5 h-4.5 text-gray-500" />
                  Select a link
                </div>
                <ChevronDown
                  className="w-4 h-4 text-gray-500 transition-transform"
                  style={{
                    transform: showUsefulLinksDropdown
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                />
              </button>
 
              {/* Dropdown Menu */}
              {showUsefulLinksDropdown && (
                <div className="absolute left-0 right-0 bottom-full mb-2 bg-white border-2 border-gray-300 rounded-md shadow-xl z-50 max-h-[500px] overflow-y-auto">
                  {USEFUL_LINKS.map((category, categoryIndex) => (
                    <div
                      key={categoryIndex}
                      className={`px-3 py-2 ${
                        categoryIndex < USEFUL_LINKS.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      <div className="text-xs font-semibold text-gray-600 uppercase mb-2">
                        {category.category}
                      </div>
                      <ul className="space-y-1">
                        {category.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <a
                              href={link.url}
                              className="text-sm text-blue-600 hover:text-blue-800 block p-1 rounded hover:bg-blue-50 transition-colors"
                              onClick={(e) => {
                                e.preventDefault();
                                setShowUsefulLinksDropdown(false);
                              }}
                            >
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
 
          {/* Motor Accessibility Section */}
          <div className="mb-6">
            <div className="text-base font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
              Motor Accessibility
            </div>
 
            {/* Keyboard Navigation */}
            <div
              className={`flex items-center gap-2.5 text-sm text-gray-600 cursor-pointer select-none p-2 rounded-md transition-all ${settings.keyboardNavigation ? "border-2 border-blue-500 bg-blue-50" : "border-2 border-transparent hover:border-gray-300"}`}
              onClick={() => toggleSetting("keyboardNavigation")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleSetting("keyboardNavigation");
                }
              }}
            >
              <Keyboard className="w-4.5 h-4.5 text-gray-500" />
              Keyboard Navigation
            </div>
 
            {/* Keyboard Navigation Info */}
            {settings.keyboardNavigation && (
              <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-md mt-2 text-xs text-gray-700">
                <div className="font-semibold mb-2">Keyboard Shortcuts:</div>
                <ul className="space-y-1">
                  <li>
                    <span className="font-semibold">Tab / Shift+Tab:</span> Move
                    forward/backward through focusable elements
                  </li>
                  <li>
                    <span className="font-semibold">Arrow Keys:</span> Move
                    through focusable elements cyclically
                  </li>
                  <li>
                    <span className="font-semibold">Enter:</span> Activate links
                    or buttons
                  </li>
                  <li>
                    <span className="font-semibold">Space:</span> Toggle
                    checkboxes or activate button-like elements
                  </li>
                  <li>
                    <span className="font-semibold">Escape:</span> Clear focus
                    and close dropdowns
                  </li>
                </ul>
              </div>
            )}
 
            {/* Screen Reader */}
            <div
              className={`flex items-center gap-2.5 text-sm text-gray-600 cursor-pointer select-none p-2 rounded-md transition-all mt-3 ${settings.screenReader ? "border-2 border-blue-500 bg-blue-50" : "border-2 border-transparent hover:border-gray-300"}`}
              onClick={() => toggleSetting("screenReader")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleSetting("screenReader");
                }
              }}
            >
              <div className="w-4.5 h-4.5 text-gray-500">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="14" r="4" />
                  <circle cx="12" cy="14" r="8" />
                  <path d="M12 2v2M2 12h2m16 0h2m-3.64-8.36l1.42 1.42M5.22 18.78l1.42 1.42m12.12-12.12l1.42-1.42m-12.12 12.12l1.42-1.42" />
                </svg>
              </div>
              Blind Users (Screen Reader)
            </div>
 
            {/* Screen Reader Info */}
            {settings.screenReader && (
              <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-md mt-2 text-xs text-gray-700">
                <div className="font-semibold mb-2">Screen Reader Enabled</div>
                <p>
                  All page elements are optimized for screen reader
                  accessibility. Use keyboard navigation shortcuts above to
                  navigate.
                </p>
              </div>
            )}
          </div>
        </div>
 
        {/* Footer */}
        {/* <div className="py-4 px-5 bg-gray-50 border-t border-gray-200 rounded-b-xl text-center text-xs text-gray-500">
          Web Accessibility By Techionik <a href="#" onClick={(e) => e.preventDefault()} className="text-primary no-underline hover:underline">Learn More &gt;</a>
        </div> */}
      </div>
    </>
  );
};
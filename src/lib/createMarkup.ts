export function createMarkup(htmlString: string) {
  if (!htmlString) return { __html: "" };
 
  // 1. Server-side handling (Next.js SSR)
  if (typeof window === "undefined") {
    // On the server, we use regex to strip all 'style' attributes.
    // This prevents "flashing" of bad editor colors before the JS hydrates.
    const serverCleaned = htmlString.replace(/\sstyle="[^"]*"/gi, "");
    return { __html: serverCleaned };
  }
 
  // 2. Client-side handling (Browser)
  const container = document.createElement("div");
  container.innerHTML = htmlString;
 
  container.querySelectorAll("*").forEach((el) => {
    const style = el.getAttribute("style");
    if (style) {
      const lowerStyle = style.toLowerCase();
      // If the editor set a custom color, we swap it for our theme's muted class
      if (lowerStyle.includes("color:") || lowerStyle.includes("color :")) {
        el.classList.add("text-muted");
      }
      // Completely strip the inline style attribute
      el.removeAttribute("style");
    }
  });
 
  return { __html: container.innerHTML };
}
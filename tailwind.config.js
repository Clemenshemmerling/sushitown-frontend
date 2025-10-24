/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        sushi: {
          bg: "#f8f7f4",
          paper: "rgba(255,255,255,0.65)",
          ink: "#111111",
          red: "#D7263D",
          gold: "#C59D5F"
        }
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.08)"
      },
      backgroundImage: {
        rice: "url('https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop')",
        dots: "radial-gradient(#00000014_0.5px,transparent_0.5px)",
        dotsSoft: "radial-gradient(#00000010_1px,transparent_1px)"
      }
    }
  }
}

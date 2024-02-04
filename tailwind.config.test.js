const { parse } = require("@tailwindcss/postcss");
const tailwindConfig = require("./tailwind.config.js");

describe("Tailwind CSS config", () => {
  it("should have correct darkMode setting", () => {
    expect(tailwindConfig.darkMode).toEqual(["class"]);
  });

  it("should have correct content options", () => {
    expect(tailwindConfig.content).toEqual([
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
      "./src/**/*.{ts,tsx}",
    ]);
  });

  it("should have correct container options", () => {
    expect(tailwindConfig.theme.container).toEqual({
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    });
  });

  it("should have correct color extensions", () => {
    expect(tailwindConfig.theme.extend.colors).toEqual({
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
    });
  });

  it("should have correct border radius extensions", () => {
    expect(tailwindConfig.theme.extend.borderRadius).toEqual({
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    });
  });

  it("should have correct keyframes extensions", () => {
    expect(tailwindConfig.theme.extend.keyframes).toEqual({
      "accordion-down": {
        from: { height: 0 },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: 0 },
      },
    });
  });

  it("should have correct animation extensions", () => {
    expect(tailwindConfig.theme.extend.animation).toEqual({
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    });
  });
});

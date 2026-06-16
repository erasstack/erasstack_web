export const theme = {
  brand: {
    name: "ErasStack",
    legalName: "ERASSTACK LTD",
    email: "support@erasstack.com",
    slogan: "Innovate. Build. Transform.",
    site: "https://erasstack.com",
    subtext:
      "ERASSTACK LTD engineers transformative digital solutions — from software platforms to next-generation products that improve lives, empower businesses, and redefine technology.",
    heroHeadline: "Engineering Transformative Digital Solutions",
    heroSubtext:
      "ERASSTACK LTD is a technology company registered in Nigeria, building the next generation of digital products and services.",
    identity:
      "A CAC-registered technology company engineering transformative solutions across digital platforms, enterprise systems, and next-generation products.",
    location: "Abuja, Nigeria",
    phone: "+234 703 806 3828",
    registration:
      "Registered under the Corporate Affairs Commission (CAC) of Nigeria",
  },

  colors: {
    bg: {
      primary: "#FFFFFF",
      secondary: "#F5F7FA",
      elevated: "#EAEef5",
      navy: "#0C1E3E",
      navyDark: "#071528",
    },
    text: {
      primary: "#0C1E3E",
      secondary: "#4B5563",
      muted: "#9CA3AF",
      inverse: "#FFFFFF",
    },
    accent: {
      primary: "#C8943A",
      secondary: "#E8A84A",
      light: "#FEF3DC",
    },
    border: {
      subtle: "rgba(12, 30, 62, 0.08)",
      strong: "rgba(12, 30, 62, 0.15)",
    },
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    "2xl": 48,
    "3xl": 64,
    "4xl": 96,
    "5xl": 128,
  },

  radius: {
    sm: 6,
    md: 10,
    lg: 14,
    xl: 20,
  },

  typography: {
    fontFamily: {
      primary: "'Inter', sans-serif",
    },
    fontSize: {
      xs: 12,
      sm: 14,
      base: 16,
      lg: 18,
      xl: 20,
      "2xl": 24,
      "3xl": 32,
      "4xl": 40,
      "5xl": 56,
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.1,
      normal: 1.5,
      relaxed: 1.65,
    },
    letterSpacing: {
      tight: "-0.02em",
      normal: "0em",
      wide: "0.04em",
      wider: "0.08em",
    },
    variants: {
      title: {
        fontSize: 56,
        fontWeight: 700,
        lineHeight: 1.1,
        letterSpacing: "-0.02em",
      },
      h1: {
        fontSize: 40,
        fontWeight: 700,
        lineHeight: 1.2,
      },
      h2: {
        fontSize: 32,
        fontWeight: 600,
        lineHeight: 1.3,
      },
      h3: {
        fontSize: 22,
        fontWeight: 600,
        lineHeight: 1.4,
      },
      body: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1.65,
      },
      small: {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 1.5,
      },
    },
  },

  layout: {
    sectionPaddingY: 96,
    sectionPaddingX: 24,
    maxWidth: 1200,
    gap: 64,
  },

  components: {
    card: {
      bg: "#FFFFFF",
      border: "1px solid rgba(12, 30, 62, 0.08)",
      radius: 12,
      padding: 28,
      hover: {
        y: -3,
        shadow: "0 12px 32px rgba(12, 30, 62, 0.10)",
        border: "rgba(200, 148, 58, 0.4)",
      },
    },
    button: {
      primary: {
        bg: "#C8943A",
        color: "#FFFFFF",
        paddingX: 24,
        paddingY: 13,
        radius: 8,
      },
      secondary: {
        bg: "transparent",
        border: "1.5px solid rgba(12, 30, 62, 0.20)",
        color: "#0C1E3E",
        paddingX: 24,
        paddingY: 13,
        radius: 8,
      },
      navy: {
        bg: "#0C1E3E",
        color: "#FFFFFF",
        paddingX: 24,
        paddingY: 13,
        radius: 8,
      },
    },
  },

  motion: {
    duration: {
      fast: 0.2,
      normal: 0.5,
      slow: 0.8,
    },
    easing: {
      smooth: "easeOut",
      inOut: "easeInOut",
      standard: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
    variants: {
      fadeUp: {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 },
      },
      fade: {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
      },
      scaleUp: {
        hidden: { opacity: 0, scale: 0.96 },
        show: { opacity: 1, scale: 1 },
      },
    },
  },

  shadow: {
    sm: "0 2px 8px rgba(12, 30, 62, 0.06)",
    md: "0 8px 24px rgba(12, 30, 62, 0.10)",
    lg: "0 20px 50px rgba(12, 30, 62, 0.14)",
  },
};

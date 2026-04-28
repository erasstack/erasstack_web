export const theme = {
  // =====================
  // BRAND (CONTENT LAYER)
  // =====================
  brand: {
    name: "ErasStack",
    email: "erastack@gmail.com",
    slogan: "Innovate. Build. Scale.",
    site:"https://erasstack.com",
    subtext:
      "We build AI-driven platforms and scalable software systems that power the next generation of digital products.",
    heroHeadline: "Engineering Intelligent Systems",
    identity:
      "A technology company building intelligent systems for the next era of software.",
  },

  // =====================
  // DESIGN TOKENS
  // =====================
  colors: {
    bg: {
      primary: "#05060A",
      secondary: "#0B0F1A",
      elevated: "#111827",
    },

    text: {
      primary: "#FFFFFF",
      secondary: "#A1A1AA",
      muted: "#71717A",
    },

    accent: {
      primary: "#3B82F6",
      secondary: "#8B5CF6",
      glow: "rgba(59, 130, 246, 0.25)",
    },

    border: {
      subtle: "rgba(255, 255, 255, 0.06)",
      strong: "rgba(255, 255, 255, 0.12)",
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
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
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
      "5xl": 64,
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
      relaxed: 1.6,
    },

    letterSpacing: {
      tight: "-0.03em",
      normal: "0em",
      wide: "0.02em",
    },

    // 🔥 PRESET TEXT STYLES (VERY IMPORTANT)
    variants: {
      title: {
        fontSize: 64,
        fontWeight: 700,
        lineHeight: 1.1,
        letterSpacing: "-0.03em",
      },

      h1: {
        fontSize: 40,
        fontWeight: 600,
        lineHeight: 1.2,
      },

      h2: {
        fontSize: 32,
        fontWeight: 600,
        lineHeight: 1.3,
      },

      h3: {
        fontSize: 24,
        fontWeight: 500,
        lineHeight: 1.4,
      },

      body: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1.6,
      },

      small: {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 1.5,
      },
    },
  },
  // =====================
  // LAYOUT SYSTEM
  // =====================
  layout: {
    sectionPaddingY: 96,
    sectionPaddingX: 24,
    maxWidth: 1200,
    gap: 64,
  },

  // =====================
  // COMPONENT TOKENS
  // =====================
  components: {
    card: {
      bg: "#111827",
      border: "1px solid rgba(255,255,255,0.06)",
      radius: 16,
      padding: 24,
      hover: {
        y: -4,
        shadow: "0 20px 40px rgba(0,0,0,0.4)",
        border: "rgba(59, 130, 246, 0.3)",
      },
    },

    button: {
      primary: {
        bg: "#3B82F6",
        color: "#FFFFFF",
        paddingX: 20,
        paddingY: 12,
        radius: 12,
      },

      secondary: {
        bg: "transparent",
        border: "1px solid rgba(255,255,255,0.12)",
        color: "#FFFFFF",
        paddingX: 20,
        paddingY: 12,
        radius: 12,
      },
    },
  },

  // =====================
  // MOTION SYSTEM
  // =====================
  motion: {
    duration: {
      fast: 0.2,
      normal: 0.5,
      slow: 0.8,
      ambient: 10,
    },

    easing: {
      smooth: "easeOut",
      inOut: "easeInOut",
      standard: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },

    variants: {
      fadeUp: {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0 },
      },

      fade: {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
      },

      scaleUp: {
        hidden: { opacity: 0, scale: 0.95 },
        show: { opacity: 1, scale: 1 },
      },
    },
  },

  // =====================
  // SHADOWS
  // =====================
  shadow: {
    sm: "0 4px 10px rgba(0,0,0,0.2)",
    md: "0 10px 25px rgba(0,0,0,0.3)",
    lg: "0 20px 50px rgba(0,0,0,0.4)",
  },
};

"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface FormStyles {
  heading: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  feedbackPlaceholder: string;
  buttonText: string;
  headingColor: string;
  inputBackground: string;
  primaryBackground: string;
  secondaryBackground: string;
  primaryColor: string;
  secondaryColor: string;
  borderRadius: number;
  blurEffect: number;
  shadowIntensity: number;
  starColor: string;
  starInactiveColor: string;
}

export default function FeedbackCustomizer({websiteId}: {websiteId: string}) {
  const [styles, setStyles] = useState<FormStyles>({
    heading: "Feedback",
    namePlaceholder: "Ayush Saini",
    emailPlaceholder: "ayush.jslab@gmail.com",
    feedbackPlaceholder: "Tell us what you think...",
    inputBackground: "#ffffff",
    headingColor: "#10b981",
    primaryBackground: "#ffffff",
    secondaryBackground: "#ffffff",
    buttonText: "Send Feedback",
    primaryColor: "#10b981",
    secondaryColor: "#059669",
    borderRadius: 18,
    blurEffect: 12,
    shadowIntensity: 18,
    starColor: "#f59e0b",
    starInactiveColor: "#d1d5db",
  });

  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);


  const updateStyle = <K extends keyof FormStyles>(
    key: K,
    value: FormStyles[K]
  ) => {
    setStyles((prev) => ({ ...prev, [key]: value }));
  };

  const hexToRgba = (hex: string, alpha = 1) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  };

  const saveStyles = async () => {
    try {
      setLoading(true);

      await axios.post("/api/website/save-styles", {
        websiteId: websiteId,
        styles,
      });

      toast.success("Saved successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to save");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchStyles = async () => {
      try {
        const res = await axios.get("/api/website/fetch-styles", {
          params: { websiteId },
        });

        if (res.data?.formStyles) {
          console.log(res.data)
          setStyles(res.data.formStyles);
        }
      } catch (err) {
        console.error("Failed to fetch styles:", err);
      }
    };

    fetchStyles();
  }, [websiteId]);



  return (
    <div className="flex flex-wrap gap-6 p-6 ml-22">
      {/* Left: Controls */}
      <div className="flex-1 min-w-[280px] p-6 bg-white rounded-xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Customize Form
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          {[
            { label: "Heading", key: "heading", type: "text" },
            { label: "Name Placeholder", key: "namePlaceholder", type: "text" },
            {
              label: "Email Placeholder",
              key: "emailPlaceholder",
              type: "text",
            },
            {
              label: "Feedback Placeholder",
              key: "feedbackPlaceholder",
              type: "text",
            },
            { label: "Button Text", key: "buttonText", type: "text" },
            { label: "Heading Color", key: "headingColor", type: "color" },
            {
              label: "Input Background",
              key: "inputBackground",
              type: "color",
            },
            {
              label: "Primary Background",
              key: "primaryBackground",
              type: "color",
            },
            {
              label: "Secondary Background",
              key: "secondaryBackground",
              type: "color",
            },
            { label: "Primary Color", key: "primaryColor", type: "color" },
            { label: "Secondary Color", key: "secondaryColor", type: "color" },
            { label: "Border Radius", key: "borderRadius", type: "number" },
            { label: "Blur Effect", key: "blurEffect", type: "number" },
            {
              label: "Shadow Intensity",
              key: "shadowIntensity",
              type: "number",
            },
            { label: "Star Color", key: "starColor", type: "color" },
            {
              label: "Star Inactive Color",
              key: "starInactiveColor",
              type: "color",
            },
          ].map(({ label, key, type }) => (
            <div key={key} className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {label}
              </label>
              <input
                type={type}
                value={styles[key as keyof FormStyles] as string | number}
                onChange={(e) =>
                  updateStyle(
                    key as keyof FormStyles,
                    type === "number" ? Number(e.target.value) : e.target.value
                  )
                }
                className={`w-full px-3 py-2 rounded-lg border bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 transition-all ${
                  type === "color"
                    ? "border-gray-300 dark:border-gray-600 cursor-pointer h-10" // Set height for color inputs
                    : "border-gray-300 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500"
                }`}
              />
            </div>
          ))}
        </div>

        <button
          onClick={saveStyles}
          disabled={loading}
          className={`mt-6 w-full py-3 rounded-lg font-semibold shadow transition-all ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white hover:scale-105"
          }`}
        >
          {loading ? "Saving..." : "Save Styles"}
        </button>
      </div>

      {/* Right: Preview */}
      <div className="flex-1 min-w-[320px]">
        <div
          className="p-6 max-w-[380px] rounded shadow"
          style={{
            background: `linear-gradient(135deg, ${styles.primaryBackground}, ${styles.secondaryBackground})`,
            backdropFilter: `blur(${styles.blurEffect}px)`,
            borderRadius: `${styles.borderRadius}px`,
            boxShadow: `0 16px 50px rgba(0,0,0,${
              styles.shadowIntensity / 100
            })`,
            border: `1px solid ${hexToRgba(styles.primaryColor, 0.2)}`,
          }}
        >
          <h3
            style={{
              marginBottom: "18px",
              fontSize: "22px",
              fontWeight: 700,
              color: `${styles.headingColor}`,
            }}
          >
            {styles.heading}
          </h3>
          <input
            type="text"
            placeholder={styles.namePlaceholder}
            style={{
              padding: "10px 14px",
              borderRadius: `${styles.borderRadius - 6}px`,
              border: `1.5px solid ${hexToRgba(styles.primaryColor, 0.3)}`,
              background: `${styles.inputBackground}`,
              marginBottom: "6px",
              width: "100%",
            }}
          />
          <input
            type="email"
            placeholder={styles.emailPlaceholder}
            style={{
              padding: "10px 14px",
              borderRadius: `${styles.borderRadius - 6}px`,
              border: `1.5px solid ${hexToRgba(styles.primaryColor, 0.3)}`,
              background: `${styles.inputBackground}`,
              marginBottom: "6px",
              width: "100%",
            }}
          />
          <textarea
            placeholder={styles.feedbackPlaceholder}
            rows={3}
            style={{
              padding: "10px 14px",
              borderRadius: `${styles.borderRadius - 6}px`,
              border: `1.5px solid ${hexToRgba(styles.primaryColor, 0.3)}`,
              background: `${styles.inputBackground}`,
              marginBottom: "6px",
              width: "100%",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <label
              style={{
                fontSize: "12px",
                fontWeight: 500,
                color: "#374151",
                textAlign: "center",
              }}
            >
              Rate Your Experience
            </label>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "6px",
                padding: "4px 0",
              }}
            >
              {Array.from({ length: 5 }).map((_, i) => {
                const val = i + 1;
                return (
                  <span
                    key={val}
                    onClick={() => setRating(val)}
                    style={{
                      fontSize: "26px",
                      cursor: "pointer",
                      color:
                        rating >= val
                          ? styles.starColor
                          : styles.starInactiveColor,
                      transition: "all 0.2s ease",
                      userSelect: "none",
                    }}
                  >
                    ★
                  </span>
                );
              })}
            </div>
          </div>

          <button
            style={{
              padding: "12px",
              border: "none",
              borderRadius: `${styles.borderRadius - 4}px`,
              background: `linear-gradient(135deg, ${styles.primaryColor} 0%, ${styles.secondaryColor} 100%)`,
              color: "#fff",
              fontWeight: 600,
              cursor: "pointer",
              width: "100%",
              marginTop: "6px",
            }}
          >
            {styles.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

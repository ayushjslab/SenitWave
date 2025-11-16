import mongoose, { Schema, Document, Model } from "mongoose";

export interface IWebsite extends Document {
  websiteName: string;
  websiteUrl: string;
  addedBy: mongoose.Types.ObjectId;

  formStyles: {
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
  };

  createdAt: Date;
  updatedAt: Date;
}

const websiteSchema = new Schema<IWebsite>(
  {
    websiteName: { type: String, required: true, trim: true },
    websiteUrl: { type: String, required: true, trim: true },
    addedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },

    formStyles: {
      heading: { type: String, default: "Feedback" },
      namePlaceholder: { type: String, default: "Enter your name" },
      emailPlaceholder: { type: String, default: "Enter your email" },
      feedbackPlaceholder: { type: String, default: "Write your feedback..." },
      buttonText: { type: String, default: "Send Feedback" },

      headingColor: { type: String, default: "#10b981" },
      inputBackground: { type: String, default: "rgba(255,255,255,0.8)" },

      primaryBackground: { type: String, default: "#ffffff" },
      secondaryBackground: { type: String, default: "#f0fdfa" },

      primaryColor: { type: String, default: "#10b981" },
      secondaryColor: { type: String, default: "#059669" },

      borderRadius: { type: Number, default: 18 },
      blurEffect: { type: Number, default: 12 },
      shadowIntensity: { type: Number, default: 18 },

      starColor: { type: String, default: "#f59e0b" },
      starInactiveColor: { type: String, default: "#d1d5db" },
    },
  },
  { timestamps: true }
);

const Website: Model<IWebsite> =
  mongoose.models.Website || mongoose.model<IWebsite>("Website", websiteSchema);

export default Website;

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-emerald-600 mb-6 flex gap-3 items-center">
          <Link
            href="/"
            className="cursor-pointer hover:translate-x-0.5 transition"
          >
            <ArrowLeft />
          </Link>
          Privacy Policy
        </h1>
        <p className="text-gray-700 text-lg mb-10">
          This Privacy Policy explains how we collect, use, and protect the
          information you provide while using our platform and feedback widget.
        </p>

        {/* Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-emerald-500 mb-3">
            1. Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We collect data when users add their website, generate a script, or
            when visitors submit feedback through the embedded widget. This may
            include:
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-700">
            <li>Name and email (if provided by feedback submitters).</li>
            <li>Feedback content and rating.</li>
            <li>Website details added by the account owner.</li>
            <li>
              Analytical and technical data (browser, device, timestamps).
            </li>
          </ul>
        </section>

        {/* Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-emerald-500 mb-3">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside mt-3 text-gray-700">
            <li>To generate feedback analytics and insights.</li>
            <li>To allow website owners to view and manage feedback.</li>
            <li>To improve platform performance and security.</li>
            <li>To prevent abuse and unauthorized activity.</li>
          </ul>
        </section>

        {/* Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-emerald-500 mb-3">
            3. Cookies and Authentication
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We use secure, HTTP-only cookies to manage user authentication.
            Cookies are never shared with third parties and are used only for
            login verification and session management.
          </p>
        </section>

        {/* Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-emerald-500 mb-3">
            4. Third-Party Integrations
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our platform may integrate services such as Google Authentication to
            simplify sign-in. Any data shared with external providers is handled
            according to their own privacy policies.
          </p>
        </section>

        {/* Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-emerald-500 mb-3">
            5. Data Security
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We implement strong security practices including encryption, hashed
            authentication tokens, and secure database storage to protect your
            information from unauthorized access or misuse.
          </p>
        </section>

        {/* Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-emerald-500 mb-3">
            6. Data Ownership
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Feedback collected through your integrated widget belongs to you.
            You may export, delete, or request removal of this data at any time.
          </p>
        </section>

        {/* Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-emerald-500 mb-3">
            7. Data Retention
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We retain feedback and account data only as long as it is required
            for platform functionality or until you request deletion.
          </p>
        </section>

        {/* Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-emerald-500 mb-3">
            8. User Rights
          </h2>
          <ul className="list-disc list-inside mt-3 text-gray-700">
            <li>Request deletion of your data.</li>
            <li>Request export or correction of information.</li>
            <li>Disable or remove your feedback widget at any time.</li>
          </ul>
        </section>

        {/* Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-emerald-500 mb-3">
            9. Changes to This Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy at any time. All changes will be
            posted on this page with the updated revision date.
          </p>
        </section>

        {/* Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-emerald-500 mb-3">
            10. Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you have questions about this Privacy Policy or need to request
            data changes, please contact us at:
            <br />
            <span className="font-semibold text-emerald-600">
              ayush.jslab@gmail.com
            </span>
          </p>
        </section>

        <footer className="mt-16 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} EchoMark — All Rights Reserved.
        </footer>
      </div>
    </div>
  );
}

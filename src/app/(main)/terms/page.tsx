"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-12 px-6 md:px-24">
      <h1 className="text-4xl font-extrabold text-emerald-600 mb-6 flex items-center gap-3">
        <Link
          href="/"
          className="cursor-pointer hover:translate-x-0.5 transition"
        >
          <ArrowLeft />
        </Link>
        Terms & Conditions
      </h1>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-emerald-600 mb-3">
            1. Introduction
          </h2>
          <p>
            These Terms & Conditions (“Terms”) govern your use of our platform,
            services, analytics tools, and feedback widgets (“Service”). By
            accessing or using our Service, you agree to be bound by these
            Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-emerald-600 mb-3">
            2. Use of the Service
          </h2>
          <p>
            You may use our Service only for lawful purposes and in accordance
            with these Terms. You must not misuse, disrupt, or exploit any
            functionality of the platform or its APIs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-emerald-600 mb-3">
            3. User Accounts
          </h2>
          <p>
            To access certain features, you may need to create an account. You
            are responsible for maintaining the confidentiality of your account
            credentials and for all activities under your account.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-emerald-600 mb-3">
            4. Website Ownership Verification
          </h2>
          <p>
            To prevent misuse, you may be required to verify ownership of any
            website you add. Providing false information or adding websites you
            do not control is strictly prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-emerald-600 mb-3">
            5. Feedback Submission Rules
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Users must provide accurate and honest feedback.</li>
            <li>
              Submission of harmful, misleading, or illegal content is not
              allowed.
            </li>
            <li>
              We reserve the right to remove any feedback that violates our
              policies.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-emerald-600 mb-3">
            6. Data Collection & Usage
          </h2>
          <p>
            We collect and process feedback data to provide insights and display
            analytics. For complete details, please refer to our
            <Link
              href="/privacy"
              className="text-emerald-600 font-medium hover:underline ml-1"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-emerald-600 mb-3">
            7. Intellectual Property
          </h2>
          <p>
            All content, branding, scripts, and platform technology are the
            exclusive property of our company. You may not copy,
            reverse-engineer, or redistribute parts of the Service without
            permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-emerald-600 mb-3">
            8. Prohibited Activities
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Attempting to hack, bypass, or disable security features.</li>
            <li>Submitting spam feedback or automating submissions.</li>
            <li>Using the widget on websites you do not control.</li>
            <li>Abusing the API or sending malicious requests.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-emerald-600 mb-3">
            9. Termination
          </h2>
          <p>
            We may suspend or terminate your access if you violate these Terms
            or engage in harmful activities. You may also delete your account at
            any time if you no longer wish to use the Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-emerald-600 mb-3">
            10. Limitation of Liability
          </h2>
          <p>
            We are not responsible for any indirect, incidental, or
            consequential damages arising from the use of the Service. Your use
            of the platform is at your own risk.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-emerald-600 mb-3">
            11. Updates to Terms
          </h2>
          <p>
            We may update these Terms occasionally. Continued use of the Service
            after updates means you accept the revised Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-emerald-600 mb-3">
            12. Contact Information
          </h2>
          <p>
            If you have any questions about these Terms, feel free to reach out
            at:
            <span className="font-semibold text-emerald-600">
              {" "}
              ayush.jslab@gmail.com{" "}
            </span>
          </p>
        </section>
      </div>

      <footer className="mt-16 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} EchoMark. All rights reserved.
      </footer>
    </div>
  );
}

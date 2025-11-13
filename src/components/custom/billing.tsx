"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, Sparkles, ArrowRight, Star } from "lucide-react";

export function ComingSoonBilling() {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      // 4 months from now
      const launchDate = new Date();
      launchDate.setMonth(launchDate.getMonth() + 4);

      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / 1000 / 60) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" bg-white overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-50 rounded-full blur-3xl opacity-20 -z-10" />


      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-700">
              Launching Soon
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Premium Billing{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
              Coming Soon
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Unlock advanced payment processing, subscription management, and
            detailed financial insights for your business
          </p>
        </div>

        {/* Offer Banner */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-2xl p-8 md:p-12 mb-12 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-white fill-white" />
                <span className="text-emerald-100 font-semibold text-sm">
                  LIMITED TIME OFFER
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                100% Free for 4 Months
              </h2>
              <p className="text-emerald-50 text-lg">
                Join early and get full premium access free while we gather
                feedback to perfect our service
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="text-white">
                <div className="text-5xl font-bold">4</div>
                <div className="text-emerald-100 text-sm font-semibold">
                  Months Free
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 mb-12 shadow-sm">
          <h3 className="text-center text-lg font-semibold text-gray-600 mb-8">
            Time Until Launch
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Days", value: timeLeft?.days ?? 0 },
              { label: "Hours", value: timeLeft?.hours ?? 0 },
              { label: "Minutes", value: timeLeft?.minutes ?? 0 },
              { label: "Seconds", value: timeLeft?.seconds ?? 0 },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="bg-emerald-50 rounded-xl p-4 mb-2">
                  <div className="text-4xl md:text-5xl font-bold text-emerald-600">
                    {String(item.value).padStart(2, "0")}
                  </div>
                </div>
                <p className="text-sm font-semibold text-gray-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "Smart Payments",
              description:
                "Accept payments globally with support for 150+ currencies",
              icon: "💳",
            },
            {
              title: "Subscriptions",
              description:
                "Recurring billing with flexible plans and easy management",
              icon: "📊",
            },
            {
              title: "Analytics",
              description:
                "Real-time insights into revenue, customer behavior, and trends",
              icon: "📈",
            },
            {
              title: "Compliance",
              description:
                "Enterprise-grade security and regulatory compliance included",
              icon: "🔒",
            },
            {
              title: "Automation",
              description: "Automated invoicing, reminders, and retry logic",
              icon: "⚙️",
            },
            {
              title: "Support 24/7",
              description: "Dedicated support team available round the clock",
              icon: "👥",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Pricing Tiers Preview */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            After Launch: Choose Your Plan
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Free",
                price: "$0",
                features: [
                  "Up to 10 transactions/month",
                  "Basic analytics",
                  "Email support",
                  "Single user",
                ],
                color: "bg-gray-50",
                borderColor: "border-gray-200",
              },
              {
                name: "Professional",
                price: "$29",
                period: "/month",
                features: [
                  "Unlimited transactions",
                  "Advanced analytics",
                  "Priority support",
                  "Up to 5 users",
                  "Subscription management",
                  "API access",
                ],
                color: "bg-emerald-50",
                borderColor: "border-emerald-200",
                featured: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: [
                  "Everything in Professional",
                  "Custom integrations",
                  "24/7 dedicated support",
                  "Unlimited users",
                  "Custom branding",
                  "SLA guarantee",
                ],
                color: "bg-gray-50",
                borderColor: "border-gray-200",
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`${plan.color} border-2 ${
                  plan.borderColor
                } rounded-2xl p-8 relative ${
                  plan.featured
                    ? "ring-2 ring-emerald-500 scale-105 md:scale-100 md:order-last md:-ml-4 md:-mr-4 md:z-10"
                    : ""
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-600 font-semibold">
                      {plan.period}
                    </span>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                    plan.featured
                      ? "bg-emerald-600 text-white hover:bg-emerald-700"
                      : "bg-white border border-gray-300 text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of businesses getting 4 months of premium billing
            free
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2">
              Notify Me When Live
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:border-white transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

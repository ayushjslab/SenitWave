/* eslint-disable @next/next/no-html-link-for-pages */
'use client'

import { Mail, Phone, Globe, ArrowLeft } from 'lucide-react'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { SiThreads } from 'react-icons/si'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* Top Navigation */}
      <div className="w-full px-6 py-4 sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
        <a
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl 
                     border border-emerald-500/40 text-emerald-600 
                     font-medium hover:bg-emerald-100 hover:border-emerald-600 
                     transition-all shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Go to Home Page
        </a>
      </div>

      {/* Main Content */}
      <section className="px-6 py-16 md:py-20 max-w-5xl mx-auto">
        <div className="space-y-12">

          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-extrabold text-emerald-600">
              Get in Touch
            </h1>

            <p className="text-lg md:text-xl text-zinc-600 max-w-3xl leading-relaxed">
              I&apos;m always open to collaborations and conversations.  
              Reach out through any channel below.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* Direct Contact */}
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold text-emerald-600">
                Direct Contact
              </h2>

              {/* Email */}
              <div className="group p-5 rounded-xl border border-zinc-200 bg-white
                              hover:border-emerald-500 hover:bg-emerald-50/40
                              transition-all shadow-sm hover:shadow-md">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition" />
                  <div>
                    <p className="text-sm text-zinc-500 uppercase tracking-wide">Email</p>
                    <a
                      href="mailto:ayushjslab@gmail.com"
                      className="text-lg font-semibold hover:text-emerald-600 transition"
                    >
                      ayushjslab@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="group p-5 rounded-xl border border-zinc-200 bg-white
                              hover:border-emerald-500 hover:bg-emerald-50/40
                              transition-all shadow-sm hover:shadow-md">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition" />
                  <div>
                    <p className="text-sm text-zinc-500 uppercase tracking-wide">Phone</p>
                    <a
                      href="tel:+918824415430"
                      className="text-lg font-semibold hover:text-emerald-600 transition"
                    >
                      +91 8824415430
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold text-emerald-600">
                Social Media
              </h2>

              <div className="space-y-4">
                {[
                  {
                    icon: <FaLinkedin className="w-6 h-6" />,
                    label: 'LinkedIn',
                    url: 'https://www.linkedin.com/in/ayushjslab/',
                    tag: '@ayushjslab',
                  },
                  {
                    icon: <FaGithub className="w-6 h-6" />,
                    label: 'GitHub',
                    url: 'https://github.com/ayushjslab',
                    tag: '@ayushjslab',
                  },
                  {
                    icon: <FaXTwitter className="w-6 h-6" />,
                    label: 'X / Twitter',
                    url: 'https://x.com/ayushjslab',
                    tag: '@ayushjslab',
                  },
                  {
                    icon: <FaInstagram className="w-6 h-6" />,
                    label: 'Instagram',
                    url: 'https://www.instagram.com/ayushjslab',
                    tag: '@ayushjslab',
                  },
                  {
                    icon: <SiThreads className="w-6 h-6" />,
                    label: 'Threads',
                    url: 'https://www.threads.net/@ayushjslab',
                    tag: '@ayushjslab',
                  },
                  {
                    icon: <Globe className="w-6 h-6" />,
                    label: 'Portfolio',
                    url: 'https://ayushjslab.vercel.app',
                    tag: 'ayushjslab.vercel.app',
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-zinc-200 
                               bg-white hover:border-emerald-500 hover:bg-emerald-50/40
                               transition shadow-sm hover:shadow-md group"
                  >
                    <div className="text-emerald-600 group-hover:scale-110 transition">
                      {item.icon}
                    </div>

                    <span className="font-medium">{item.label}</span>

                    <span className="ml-auto text-zinc-500 text-sm">
                      {item.tag}
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* CTA */}
          <div className="border-t border-zinc-200 pt-10 mt-6">
            <h3 className="text-2xl font-semibold text-emerald-700 mb-3">
              Let&lsquo;s Build Something Powerful
            </h3>
            <p className="text-lg text-zinc-600 max-w-2xl leading-relaxed">
              Whether you&apos;re planning something impactful or want to collaborate  
              on something innovative — I’m here to build, create, and push ideas forward.
            </p>
          </div>

        </div>
      </section>

    </main>
  )
}

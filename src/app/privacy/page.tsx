"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Shield, Mail, ArrowLeft, ExternalLink, Calendar } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }, // TypeScript is happy now
    },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-orange-500 selection:text-black">
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        {/* BACK BUTTON */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-orange-500 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border-b border-slate-900 pb-8 mb-12"
        >
          <div className="flex items-center gap-3 text-orange-500 mb-4">
            <Shield className="w-8 h-8" />
            <span className="text-xs font-mono tracking-widest uppercase bg-orange-500/10 px-2.5 py-1 rounded border border-orange-500/20">
              Legal Framework
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
            Privacy Policy
          </h1>
          <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
            <Calendar className="w-4 h-4 text-slate-500" />
            <span>Last Updated: June 2026</span>
          </div>
        </motion.div>

        {/* MAIN CONTENT ACCORDING TO DOCUMENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12 text-slate-300 leading-relaxed text-base md:text-lg"
        >
          {/* INTRO */}
          <motion.p variants={itemVariants} className="text-slate-400">
            At <span className="text-white font-semibold">Codeverse Lab</span>,
            we value your privacy and are committed to protecting your personal
            information. This Privacy Policy explains how we collect, use, and
            safeguard information when you visit our website.
          </motion.p>

          {/* SECTION 1 */}
          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-orange-500 font-mono text-base">01.</span>{" "}
              Information We Collect
            </h2>
            <p>
              We may collect information that you voluntarily provide through:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-2 mt-2">
              {[
                "Contact forms",
                "Email communications",
                "Project inquiries",
                "Consultation requests",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-sm bg-slate-900/50 border border-slate-900 p-3 rounded-xl"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="pt-2">This information may include:</p>
            <div className="flex flex-wrap gap-2">
              {[
                "Name",
                "Email address",
                "Phone number",
                "Project details or messages",
              ].map((detail, idx) => (
                <span
                  key={idx}
                  className="text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1.5 rounded-lg"
                >
                  {detail}
                </span>
              ))}
            </div>
          </motion.section>

          {/* SECTION 2 */}
          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-orange-500 font-mono text-base">02.</span>{" "}
              How We Use Your Information
            </h2>
            <p>We use the information you provide to:</p>
            <ul className="space-y-2.5 pl-4 list-disc list-inside marker:text-orange-500 text-sm md:text-base">
              <li>Respond to inquiries</li>
              <li>Discuss project requirements</li>
              <li>Provide quotations and consultations</li>
              <li>Improve our services and website experience</li>
            </ul>
            <div className="mt-4 p-4 rounded-xl bg-orange-500/5 border border-orange-500/10 text-sm text-orange-400/90">
              <strong>Note:</strong> We do not sell, rent, or share your
              personal information with third parties for marketing purposes.
            </div>
          </motion.section>

          {/* SECTION 3 */}
          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-orange-500 font-mono text-base">03.</span>{" "}
              Cookies and Analytics
            </h2>
            <p>
              Our website may use cookies and analytics tools to understand
              visitor behavior and improve website performance.
            </p>
            <p>These tools may collect non-personal information such as:</p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                "Browser type",
                "Device information",
                "Pages visited",
                "Time spent on the website",
              ].map((info, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-slate-900/30 rounded-xl border border-slate-800/60 font-medium"
                >
                  {info}
                </div>
              ))}
            </div>
          </motion.section>

          {/* SECTION 4 */}
          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-orange-500 font-mono text-base">04.</span>{" "}
              Third-Party Services
            </h2>
            <p>
              Our website may contain links to third-party services such as:
            </p>
            <div className="flex flex-wrap gap-3">
              {["LinkedIn", "Instagram", "YouTube", "Justdial"].map(
                (platform, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 px-4 py-2 bg-slate-900/80 border border-slate-800 rounded-xl text-sm font-semibold text-white"
                  >
                    {platform}
                  </div>
                ),
              )}
            </div>
            <p className="text-sm text-slate-400 pt-1">
              We are not responsible for the privacy practices of these external
              websites.
            </p>
          </motion.section>

          {/* SECTION 5 */}
          <motion.section variants={itemVariants} className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-orange-500 font-mono text-base">05.</span>{" "}
              Data Security
            </h2>
            <p>
              We take reasonable measures to protect the information you provide
              from unauthorized access, disclosure, or misuse.
            </p>
          </motion.section>

          {/* SECTION 6 */}
          <motion.section variants={itemVariants} className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-orange-500 font-mono text-base">06.</span>{" "}
              Your Rights
            </h2>
            <p>
              You may request access to, correction of, or deletion of your
              personal information by contacting us directly.
            </p>
          </motion.section>

          {/* SECTION 7 (CONTACT) */}
          <motion.section
            variants={itemVariants}
            className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 space-y-4"
          >
            <h2 className="text-xl font-bold text-white">Contact Us</h2>
            <p className="text-sm text-slate-400">
              If you have any questions regarding this Privacy Policy, please
              contact:
            </p>
            <div className="space-y-2 pt-2 text-sm font-medium">
              <p className="text-white">Codeverse Lab</p>

              <a
                href="mailto:support@codeverselab.com"
                className="flex items-center gap-2 text-orange-500 hover:underline w-fit"
              >
                <Mail className="w-4 h-4" />
                support@codeverselab.com
              </a>

              <Link
                href="https://www.codeverselab.com/"
                target="_blank"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors w-fit pt-1"
              >
                <span className="underline">
                  https://www.codeverselab.com/
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </Link>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}

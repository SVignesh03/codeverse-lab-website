"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  FileText,
  Mail,
  ArrowLeft,
  ExternalLink,
  Calendar,
  Scale,
} from "lucide-react";
import Link from "next/link";

export default function TermsOfServicePage() {
  // Explicitly typing variants to prevent Easing/string TypeScript type mismatches
  const containerVariants: Variants = {
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
      transition: { duration: 0.5, ease: "easeOut" },
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
            <Scale className="w-8 h-8" />
            <span className="text-xs font-mono tracking-widest uppercase bg-orange-500/10 px-2.5 py-1 rounded border border-orange-500/20">
              Legal Framework
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
            Terms & Conditions
          </h1>
          <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
            <Calendar className="w-4 h-4 text-slate-500" />
            <span>Last Updated: June 2026</span>
          </div>
        </motion.div>

        {/* MAIN CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12 text-slate-300 leading-relaxed text-base md:text-lg"
        >
          {/* INTRO */}
          <motion.p variants={itemVariants} className="text-slate-400">
            Welcome to{" "}
            <span className="text-white font-semibold">Codeverse Lab</span>. By
            accessing and using this website, you agree to comply with and be
            bound by the following Terms & Conditions. If you do not agree with
            any part of these terms, please do not use this website.
          </motion.p>

          {/* SECTION 1 */}
          <motion.section variants={itemVariants} className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-orange-500 font-mono text-base">01.</span>{" "}
              Website Purpose
            </h2>
            <p>
              This website is intended to provide information about Codeverse
              Lab, our services, portfolio, and ways to contact us regarding
              potential projects and business inquiries.
            </p>
          </motion.section>

          {/* SECTION 2 */}
          <motion.section variants={itemVariants} className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-orange-500 font-mono text-base">02.</span>{" "}
              Intellectual Property
            </h2>
            <p>
              All content on this website, including text, graphics, logos,
              images, designs, and source code, is the property of Codeverse Lab
              unless otherwise stated.
            </p>
            <p className="text-sm text-slate-400">
              You may not reproduce, distribute, modify, or use any content from
              this website without prior written permission.
            </p>
          </motion.section>

          {/* SECTION 3 */}
          <motion.section variants={itemVariants} className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-orange-500 font-mono text-base">03.</span>{" "}
              Project Inquiries
            </h2>
            <p>
              Submitting an inquiry through our contact forms or email does not
              create a client relationship, contract, or guarantee of service.
            </p>
            <p className="text-sm text-slate-400">
              Any project engagement will require separate discussions,
              quotations, and mutually agreed terms.
            </p>
          </motion.section>

          {/* SECTION 4 */}
          <motion.section variants={itemVariants} className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-orange-500 font-mono text-base">04.</span>{" "}
              Service Estimates
            </h2>
            <p>
              Any timelines, estimates, quotations, or project discussions
              provided through this website are preliminary and subject to
              change based on project requirements and scope.
            </p>
          </motion.section>

          {/* SECTION 5 */}
          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-orange-500 font-mono text-base">05.</span>{" "}
              Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party platforms, including
              but not limited to:
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
              We are not responsible for the content, policies, or practices of
              these third-party websites.
            </p>
          </motion.section>

          {/* SECTION 6 */}
          <motion.section variants={itemVariants} className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-orange-500 font-mono text-base">06.</span>{" "}
              Limitation of Liability
            </h2>
            <p>
              Codeverse Lab shall not be liable for any direct, indirect,
              incidental, consequential, or special damages arising from the use
              of this website or reliance on information provided on the
              website.
            </p>
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 font-mono text-xs text-slate-400 tracking-wide">
              ALL INFORMATION IS PROVIDED ON AN &quot;AS-IS&quot; BASIS WITHOUT
              WARRANTIES OF ANY KIND.
            </div>
          </motion.section>

          {/* SECTION 7 */}
          <motion.section variants={itemVariants} className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-orange-500 font-mono text-base">07.</span>{" "}
              Availability
            </h2>
            <p>
              We strive to keep the website available and accurate at all times.
              However, we do not guarantee uninterrupted access, error-free
              operation, or the completeness of all information presented.
            </p>
          </motion.section>

          {/* SECTION 8 */}
          <motion.section variants={itemVariants} className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-orange-500 font-mono text-base">08.</span>{" "}
              Changes to These Terms
            </h2>
            <p>
              We reserve the right to update or modify these Terms & Conditions
              at any time without prior notice. Changes become effective
              immediately upon publication on this page.
            </p>
          </motion.section>

          {/* SECTION 9 */}
          <motion.section variants={itemVariants} className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-orange-500 font-mono text-base">09.</span>{" "}
              Governing Law
            </h2>
            <p>
              These Terms & Conditions shall be governed by and interpreted in
              accordance with the laws of{" "}
              <span className="text-white font-medium">India</span>.
            </p>
          </motion.section>

          {/* SECTION 10 (CONTACT) */}
          <motion.section
            variants={itemVariants}
            className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 space-y-4"
          >
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-orange-500" /> Contact
              Information
            </h2>
            <p className="text-sm text-slate-400">
              For questions regarding these Terms & Conditions, please contact:
            </p>
            <div className="space-y-2 pt-1 text-sm font-medium">
              <p className="text-white font-semibold">Codeverse Lab</p>

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

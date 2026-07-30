"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ourservices from "@/data/ourservices.json";
import budgetRanges from "@/data/budgetRanges.json";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(7, "Phone number must be at least 7 digits")
    .max(15, "Phone number is too long"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget range"),
  promoCode: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const services = ourservices;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [promoStatus, setPromoStatus] = useState<{
    loading: boolean;
    applied: boolean;
    message: string;
  }>({ loading: false, applied: false, message: "" });

  const handleApplyPromo = async () => {
    const code = getValues("promoCode");
    if (!code) return;

    setPromoStatus({ loading: true, applied: false, message: "" });

    try {
      const res = await fetch("/api/validate-promo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ promoCode: code }),
      });
      const data = await res.json();

      if (data.valid) {
        setPromoStatus({
          loading: false,
          applied: true,
          message: `✓ ${data.message} (${data.discount})`,
        });
      } else {
        setPromoStatus({
          loading: false,
          applied: false,
          message: data.message || "Invalid promo code",
        });
      }
    } catch (error) {
      console.error("Promo validation error:", error);
      setPromoStatus({
        loading: false,
        applied: false,
        message: "Failed to validate code.",
      });
    }
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const result = await response.json();
      console.log("✅ Message sent:", result);

      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("❌ Error sending message:", error);
      alert("There was an error sending your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Get In Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Ready to start your project? Let&apos;s discuss how we can help
              bring your vision to life.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Let&apos;s Start a Conversation
                </h2>
                <p className="text-gray-600 text-lg">
                  We&apos;d love to hear about your project and discuss how we
                  can help. Reach out to us using any of the methods below.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">support@codeverselab.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+91 63693 43481</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 fill-current text-orange-600"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.4 0 11.91 0c3.152.001 6.116 1.23 8.344 3.463 2.23 2.231 3.456 5.197 3.455 8.353-.003 6.56-5.339 11.907-11.849 11.907-2.012-.001-3.992-.513-5.744-1.487L0 24zm5.835-4.267l.37.22c1.554.922 3.39 1.41 5.27 1.412 5.399 0 9.792-4.393 9.795-9.794.002-2.617-1.018-5.078-2.873-6.935C16.58 2.78 14.12 1.76 11.5 1.76c-5.4 0-9.794 4.393-9.796 9.795-.001 1.957.513 3.865 1.488 5.56l.24.417-1.01 3.69 3.774-.99.42-.249zm12.35-5.908c-.329-.165-1.953-.965-2.251-1.074-.3-.11-.518-.165-.736.165-.218.33-.846 1.074-1.037 1.293-.191.218-.383.245-.712.08-1.548-.773-2.554-1.353-3.574-3.104-.266-.457.266-.425.762-1.418.083-.165.042-.31-.02-.444-.064-.135-.518-1.25-.71-1.71-.187-.45-.377-.389-.517-.396l-.44-.007c-.153 0-.4-.058-.61.173-.21.23-.803.784-.803 1.913 0 1.128.82 2.218.934 2.371.114.153 1.614 2.463 3.91 3.455.547.235.973.375 1.306.481.55.174 1.05.15 1.446.09.44-.067 1.953-.797 2.228-1.53.275-.733.275-1.363.192-1.493-.083-.131-.3-.211-.63-.376z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                    <p className="text-gray-600">+91 96779 02003</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">Tamil Nadu, India</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">Mon - Fri: 9AM - 6PM IST</p>
                  </div>
                </div>
              </div>

              {/* Official Business Verification Info Card */}
              <div className="pt-4">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                  <div className="flex items-center space-x-2 mb-3">
                    <ShieldCheck className="w-5 h-5 text-orange-600" />
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                      Official Business Details
                    </h4>
                  </div>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>
                      <strong className="text-gray-800">Legal Entity:</strong>{" "}
                      Codeverse Lab
                    </p>
                    <p>
                      <strong className="text-gray-800">
                        Govt. MSME Reg No:
                      </strong>{" "}
                      UDYAM-TN-18-0101857
                    </p>
                    <p>
                      <strong className="text-gray-800">
                        Registered Activity:
                      </strong>{" "}
                      Computer Programming & Web Design Services
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. We&apos;ll get back to you
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        {...register("name")}
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile Number *
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="+91 12345 67890"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      {...register("company")}
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service *
                      </label>
                      <select
                        {...register("service")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.service.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget *
                      </label>
                      <select
                        {...register("budget")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                      {errors.budget && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.budget.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Promo Code Section */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Promo Code
                    </label>
                    <div className="flex gap-2">
                      <input
                        {...register("promoCode")}
                        type="text"
                        disabled={promoStatus.applied}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent uppercase tracking-wider"
                        placeholder="Enter code (e.g. SAVE10)"
                      />
                      <button
                        type="button"
                        onClick={handleApplyPromo}
                        disabled={promoStatus.loading || promoStatus.applied}
                        className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg font-medium hover:shadow-lg transition-colors disabled:opacity-50"
                      >
                        {promoStatus.loading
                          ? "Checking..."
                          : promoStatus.applied
                            ? "Applied"
                            : "Apply"}
                      </button>
                    </div>
                    {promoStatus.message && (
                      <p
                        className={`text-sm mt-1.5 ${promoStatus.applied ? "text-green-600 font-medium" : "text-red-500"}`}
                      >
                        {promoStatus.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

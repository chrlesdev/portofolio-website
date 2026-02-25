"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import Image from "next/image";
import { toast } from "sonner";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Send } from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email" }),
  name: z.string().min(1, { message: "Name is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/xvgqpzzr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("🎉 Message sent! I'll get back to you soon.");
        form.reset();
      } else {
        toast.error("❌ Failed to send message.");
      }
    } catch {
      toast.error("⚠️ Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 flex flex-col lg:flex-row">
          <div className="flex-1 p-8 md:p-14">
            <div className="mb-10">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Let&apos;s Connect</h2>
              <p className="text-slate-500 text-lg leading-relaxed">Have a project in mind or just want to chat? Send me a message and I&apos;ll get back to you within 24 hours.</p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-semibold">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Charles" {...field} className="bg-slate-50 border-slate-200 focus:bg-white transition-all rounded-xl h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-semibold">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="charles@example.com" {...field} className="bg-slate-50 border-slate-200 focus:bg-white transition-all rounded-xl h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700 font-semibold">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="How can I help you?" {...field} className="min-h-[150px] bg-slate-50 border-slate-200 focus:bg-white transition-all rounded-xl resize-none" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" disabled={isLoading} className="w-full h-14 bg-slate-900 hover:bg-emerald-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-slate-200 hover:shadow-emerald-200 flex gap-2">
                  {isLoading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>

          <div className="lg:w-[400px] bg-slate-900 p-12 text-white flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 space-y-8">
              <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-sm border border-white/10">
                <Image src="/email.svg" alt="Contact illustration" width={300} height={300} className="w-full h-auto drop-shadow-2xl" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Collaborate with me</h3>
                <p className="text-slate-400">Ready to turn your ideas into a high-performance reality?</p>
              </div>

              <div className="pt-4 flex flex-col gap-3 items-center">
                <span className="text-emerald-400 font-mono text-[10px] tracking-[0.2em] uppercase">Socials</span>
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/chrlesdev"
                    target="_blank"
                    className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300 group/social"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover/social:scale-110 transition-transform"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </Link>

                  <Link
                    href="https://www.linkedin.com/in/muhamad-charles-cornelio-a53a75339/"
                    target="_blank"
                    className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300 group/social"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover/social:scale-110 transition-transform"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

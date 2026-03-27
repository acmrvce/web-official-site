"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";

interface EventHeaderProps {
  title: string;
  description: string;
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function EventHeader({
  title,
  description,
  searchTerm,
  onSearchChange,
}: EventHeaderProps) {
  const [email, setEmail] = React.useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Subscribed Successfully!",
      description: `Updates will be sent to ${email}.`,
    });

    setEmail("");
  };

  return (
    <motion.div
      className="py-12 md:py-16"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.h1
          className="font-heading text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mt-6 text-lg text-muted-foreground md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {description}
        </motion.p>
      </div>
      <motion.div
        className="mx-auto mt-10 max-w-xl flex flex-col gap-4 md:max-w-2xl md:flex-row md:gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="group flex w-full items-center gap-2 rounded-full border bg-background/50 px-3 py-2 ring-offset-background transition-colors hover:bg-accent focus-within:bg-accent">
          <Search className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="flex-grow border-0 bg-transparent p-0 text-sm shadow-none focus-visible:ring-0"
          />
        </div>

        <form
          onSubmit={handleSubscribe}
          className="group flex w-full items-center gap-2 rounded-full border bg-background/50 px-3 py-2 ring-offset-background transition-colors hover:bg-accent focus-within:bg-accent md:w-auto"
        >
          <Mail className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow border-0 bg-transparent p-0 text-sm shadow-none focus-visible:ring-0 md:w-48"
          />
          <Button
            type="submit"
            size="sm"
            variant="default"
            className="h-8 rounded-full px-4 transition-colors hover:bg-primary/90"
          >
            Subscribe
          </Button>
        </form>
      </motion.div>
    </motion.div>
  );
}

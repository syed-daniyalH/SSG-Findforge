"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, ArrowRight, Check } from "lucide-react";
import Image from "next/image";

type Message = {
  id: string;
  text: string;
  sender: "user" | "assistant";
  timestamp: string;
};
const SUGGESTIONS = [
  "What can I ask you to do?",
  "Which one of my projects is performing the best?",
];

export default function TechionikChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const hasAutoOpened = sessionStorage.getItem("chatOpened");
    if (!hasAutoOpened) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("chatOpened", "true");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Lead Form State
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [pendingMessage, setPendingMessage] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "" });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const messageIdRef = useRef(0);

  const getNextMessageId = () => {
    messageIdRef.current += 1;
    return messageIdRef.current.toString();
  };

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        chatWindowRef.current &&
        !chatWindowRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSendMessage = (e?: React.FormEvent, textOverride?: string) => {
    e?.preventDefault();
    const textToSend = textOverride || inputValue;

    if (!textToSend.trim()) return;

    // Intercept message if the form hasn't been submitted
    if (!isFormSubmitted) {
      setPendingMessage(textToSend);
      setShowLeadForm(true);
      return;
    }

    proceedWithChat(textToSend);
  };

  const proceedWithChat = (text: string) => {
    const newUserMessage: Message = {
      id: getNextMessageId(),
      text: text,
      sender: "user",
      timestamp: "Just Now",
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue("");
    setIsTyping(true);

    // Mock API Response delay
    setTimeout(() => {
      const newAssistantMessage: Message = {
        id: getNextMessageId(),
        text: "This is a mocked response from the SSGMindForge bot. API integration pending.",
        sender: "assistant",
        timestamp: "Just Now",
      };
      setMessages((prev) => [...prev, newAssistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;

    // Show success message
    setShowLeadForm(false);
    setShowSuccess(true);
    setIsFormSubmitted(true);

    // Wait 2 seconds, then hide success message and send the pending chat
    setTimeout(() => {
      setShowSuccess(false);
      if (pendingMessage) {
        proceedWithChat(pendingMessage);
        setPendingMessage("");
      }
    }, 2000);
  };

  return (
    <div className="fixed bottom-5 right-5 z-1100 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div
          ref={chatWindowRef}
          className="relative mb-4 flex h-125 sm:h-162.5 w-full sm:w-95 flex-col overflow-hidden rounded-3xl bg-linear-to-b from-white to-ghost-white shadow-2xl transition-all duration-300 ease-in-out"
        >
          {/* --- LEAD FORM & SUCCESS OVERLAYS --- */}
          {(showLeadForm || showSuccess) && (
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-6">
              {showLeadForm ? (
                <div className="w-full max-w-[320px] rounded-3xl bg-white p-6 shadow-2xl">
                  <h3 className="mb-6 text-[15px] sm:text-[16px] font-bold leading-tight text-secondary">
                    Please Enter the Fields in form for{" "}
                    <span className="text-primary">Chat*</span>
                  </h3>

                  <form
                    onSubmit={handleFormSubmit}
                    className="flex flex-col space-y-5"
                  >
                    <div>
                      <label className="mb-2 block text-[13px] font-bold text-secondary">
                        Name<span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter Your Name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full rounded-2xl bg-ghost-white px-4 py-3.5 text-secondary outline-none transition-all placeholder:text-slate-light focus:ring-2 focus:ring-primary/30"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-[13px] font-bold text-secondary">
                        Company Email<span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Enter Your Company Email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full rounded-2xl bg-ghost-white px-4 py-3.5 text-secondary outline-none transition-all placeholder:text-slate-light focus:ring-2 focus:ring-primary/30"
                      />
                    </div>

                    <div className="pt-2 pb-1">
                      <button
                        type="submit"
                        className="flex items-center gap-3 rounded-full bg-primary py-2 pl-5 pr-1.5 text-white shadow-md transition-transform hover:scale-105 active:scale-95"
                      >
                        <span className="text-[14px] font-semibold tracking-wide">
                          Submit Now
                        </span>
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
                          <ArrowRight size={16} className="text-secondary" />
                        </div>
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="w-full max-w-[320px] flex flex-col items-center justify-center rounded-[28px] bg-white px-6 py-10 text-center shadow-2xl">
                  <div className="mb-5 flex h-19 w-19 items-center justify-center rounded-t-[38px] rounded-br-[38px] rounded-bl-md border-[1.5px] border-primary bg-ghost-white">
                    <Check size={36} className="text-primary stroke-3" />
                  </div>
                  <h3 className="text-[15px] sm:text-[16px] font-bold leading-snug text-secondary">
                    Thank You for Submitting
                    <br />
                    Your Information
                  </h3>
                </div>
              )}
            </div>
          )}
          {/* --- END OVERLAYS --- */}

          {/* Header */}
          <div className="relative flex flex-col items-center pb-4 pt-6">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 rounded-full bg-white/50 p-1.5 text-neutral-dark hover:bg-ghost-white/80 transition-colors"
            >
              <X size={18} />
            </button>
            <div className="mb-10">
              <Image
                src="/images/header-logo.webp"
                alt="SSGMindForge"
                width={100}
                height={50}
              />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-secondary">
              Ask our <span className="text-primary">AI</span> anything
            </h3>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto px-5 scrollbar-hide">
            <div className="flex flex-col space-y-6 pb-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex w-full flex-col ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div className="flex items-end gap-2 max-w-[85%]">
                    {msg.sender === "assistant" && (
                      <div className="mb-6">
                        <Image
                          src="/icons/globe-logo.svg"
                          alt="SSGMindForge Logo"
                          width={50}
                          height={50}
                        />
                      </div>
                    )}
                    <div className="flex flex-col">
                      {msg.sender === "assistant" && (
                        <span className="mb-1 ml-1 text-xs font-medium text-neutral-dark">
                          Assistant
                        </span>
                      )}
                      <div
                        className={`rounded-2xl px-4 py-3 text-[13px] sm:text-[14px] leading-relaxed ${
                          msg.sender === "user"
                            ? "bg-black text-white rounded-tr-sm"
                            : "bg-ghost-white text-secondary rounded-tl-sm border border-ghost-white/50 shadow-sm"
                        }`}
                      >
                        {msg.text}
                      </div>
                      <span
                        className={`mt-1 text-[11px] text-slate-light ${
                          msg.sender === "user" ? "text-right mr-1" : "ml-1"
                        }`}
                      >
                        {msg.timestamp}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex w-full flex-col items-start">
                  <div className="flex items-end gap-2">
                    <div className="mb-6 flex h-8 w-8 shrink-0 items-center justify-center">
                      <Image
                        src="/technionik-cube.svg"
                        alt="Techionik Logo"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="mb-1 ml-1 text-xs font-medium text-neutral-dark">
                        Assistant
                      </span>
                      <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm bg-white px-4 py-4 shadow-sm border border-border-light">
                        <div
                          className="h-2 w-2 animate-bounce rounded-full bg-primary/20"
                          style={{ animationDelay: "0ms" }}
                        />
                        <div
                          className="h-2 w-2 animate-bounce rounded-full bg-primary/30"
                          style={{ animationDelay: "150ms" }}
                        />
                        <div
                          className="h-2 w-2 animate-bounce rounded-full bg-primary/20"
                          style={{ animationDelay: "300ms" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Suggestions & Input Area */}
          <div className="px-5 pb-5 pt-2">
            {messages.length <= 1 && (
              <div className="mb-3">
                <p className="mb-2 text-xs font-semibold text-slate-light">
                  Suggestions on what to ask Our AI
                </p>
                <div className="flex flex-col gap-2">
                  {SUGGESTIONS.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(undefined, suggestion)}
                      className="w-full rounded-xl bg-ghost-white/60 px-4 py-2 text-left text-[12px] sm:text-[13px] text-secondary shadow-sm transition-colors hover:bg-ghost-white border border-ghost-white/40"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <form onSubmit={handleSendMessage} className="relative mt-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything..."
                className="w-full rounded-xl bg-white py-3 sm:py-3.5 pl-4 pr-12 text-[13px] sm:text-[14px] text-secondary shadow-sm outline-none placeholder:text-slate-light border border-transparent focus:border-border-light focus:ring-2 focus:ring-border-light/30 transition-all"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-light hover:text-neutral-dark disabled:opacity-50 transition-colors"
              >
                <Send size={20} strokeWidth={1.5} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 ${
          isOpen ? " scale-90 opacity-50 pointer-events-none" : "opacity-100"
        }`}
      >
        <MessageSquare size={24} />
      </button>
    </div>
  );
}

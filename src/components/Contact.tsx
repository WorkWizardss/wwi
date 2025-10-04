import { useState } from "react";
import { Mail, Linkedin, Twitter, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gray-300 via-gray-600 to-gray-300 mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can help bring your ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={6}
                  required
                  className="w-full resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full group">
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            <div className="space-y-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Connect With Us</h3>
                <p className="text-muted-foreground mb-6">
                  Follow us on social media to stay updated with our latest innovations and products.
                </p>
                
                <div className="space-y-3">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-gray-900 group-hover:bg-gray-800 transition-colors">
                      <Linkedin className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium text-gray-700">LinkedIn</span>
                  </a>

                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-gray-900 group-hover:bg-gray-800 transition-colors">
                      <Twitter className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium text-gray-700">Twitter</span>
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-gray-900 group-hover:bg-gray-800 transition-colors">
                      <Instagram className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium text-gray-700">Instagram</span>
                  </a>

                  <a
                    href="mailto:contact@workwizards.com"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-gray-900 group-hover:bg-gray-800 transition-colors">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium text-gray-700">contact@workwizards.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

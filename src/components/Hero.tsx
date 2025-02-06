import { useToast } from "@/hooks/use-toast";
import { createSite } from "@/lib/api";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSend = async () => {
    try {
      const response = await createSite();

      navigate(`/builder/${response.identifier}`);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to process your request. Please try again.",
      });
    }
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-3 py-1 text-sm rounded-full bg-secondary inline-block mb-4">
            Crafting Digital Experiences
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Transform Your Ideas Into
            <br /> Digital Reality
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create stunning websites with our intuitive platform. Bring your vision to life
            with powerful tools and seamless design capabilities.
          </p>
          <button className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity" onClick={handleSend}>
            Get Started
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
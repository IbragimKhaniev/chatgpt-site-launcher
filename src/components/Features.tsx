import { motion } from "framer-motion";
import { Zap, Shield, Smartphone } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Lightning Fast",
    description: "Optimized for speed and performance across all devices.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Secure by Design",
    description: "Built with security best practices from the ground up.",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile First",
    description: "Responsive design that works perfectly on any screen size.",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="px-3 py-1 text-sm rounded-full bg-secondary inline-block mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Powerful features to help you build faster and smarter.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl hover-lift"
            >
              <div className="h-12 w-12 bg-secondary rounded-xl flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
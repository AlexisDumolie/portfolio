import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="py-4 bg-background">
            <div className="container mx-auto px-4 text-center text-accent">
                <motion.p 
                    className="konami-hint"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    transition={{ duration: 2 }}
                >
                    Psst... Il y a un mode secret caché quelque part... 
                    <span className="opacity-50">⬆️⬆️⬇️⬇️</span>
                </motion.p>
            </div>
        </footer>
    );
};

export default Footer;


export interface Project {
    id: string;
    tag: string;
    title: string;
    description: string;
    meta: string;
    price: string;
    delay: number;
}

export const projects: Project[] = [
    {
        id: 'prompt2app',
        tag: "AGENTIC AI • LLMS",
        title: "Prompt2App",
        description: "Transforms simple prompts into ready-to-use web applications using agentic AI. Showcases automation, design generation, and modern full-stack workflows.",
        meta: "Agentic AI ,LLMs ,LangGraph",
        price: "All Systems Operational",
        delay: 0.1
    },
    {
        id: 'vendora',
        tag: "WEB DEVLOPMENT",
        title: "Vendora",
        description: " A full-stack eCommerce Platform with secure authentication, product management, and cart functionality. Built to simulate real-world online shopping experience using modern web technologies",
        meta: "Next.js ,TypeScript ,MongoDB ,TailwindCSS ",
        price: "All Systems Operational",
        delay: 0.2
    },
    {
        id: 'cancer-classification',
        tag: "Machine Learning",
        title: "Cancer Classification (Gene-Based)",
        description: "A machine learning project for classifying cancer types using gene expression data. Focused on feature selection, model training, and evaluation for accurate prediction.",
        meta: "Python ,Numpy ,Pandas ,Scikit-Learn ,XGBoost(Model)",
        price: "All Systems Operational",
        delay: 0.3
    },
    {
        id: 'pixel-revive',
        tag: "Computer Vision",
        title: "PixelRevive",
        description: "A digital image processing project focused on restoring old and damaged photographs. Applied filtering, enhancement, and noise reduction techniques to improve visual quality.",
        meta: "Pyhton , OpenCV,Scikit-Image, DIP Techniques",
        price: "All Systems Operational",
        delay: 0.4
    },
    {
        id: 'gesture-sense',
        tag: "DATA",
        title: "GestureSense",
        description: "Real-time hand gesture recognition using hand landmarks feature extraction and ML models. Focused on accuracy, low latency, and real-time performance.",
        meta: "OpenCV,MediaPipe,ML,Scikit-Learn",
        price: "All Systems Operational",
        delay: 0.5
    },
    {
        id: 'crypto-pulse',
        tag: "Data Analytics",
        title: "CryptoPulse",
        description: "A cryptocurrency tracking and prediction system with real-time price updates and daily tech news.",
        meta: "Pandas,Express,Next.jsCryptocurrency APIs,News APIs",
        price: "All Systems Operational",
        delay: 0.6
    }
];

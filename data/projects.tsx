export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "Clean-Up",
    description:
      "A Python toolkit for cleaning datasets, handling missing values, and performing exploratory data analysis.",
    technologies: ["Python", "Pandas", "Matplotlib"],
    github: "https://github.com/eveurquiza/Clean-up",
    image: "/images/projects/cleanup.png",
  },
  {
    title: "Stock Market Prediction",
    description:
      "Machine learning model for predicting stock prices using feature engineering and regression techniques.",
    technologies: ["Python", "Scikit-learn", "Pandas"],
    github: "https://github.com/eveurquiza/Stock-market-prediction",
    image: "/images/projects/stock-market.png",
  },
];
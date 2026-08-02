export const projects = [
  {
    id: "epidemic-transformer-focasting",
    title: "Epidemic Forcasting with Transformers",
    description: "Built a Transformer-based time-series forecasting model for influenza prevalence prediction. Reproduced an encoder-decoder baseline and developed a decoder-only architecture with RoPE, Pre-LayerNorm, and horizon-weighted loss for multi-step forecasting.",
    tech: [
      "Python",
      "PyTorch",
      "Transformers",
      "Time Series",
      "Forecasting"
    ],
    image: "/projects/epidemic.png",
    github: "https://github.com/wangly7/epidemic-transformer-forecasting",
  },
 {
    id: "quicktree-parallelism",
    title: "QuickTree Parallelism",
    description:
      "Accelerated the Neighbor-Joining phylogenetic tree construction algorithm using CUDA, significantly improving parallel computation performance.",
    tech: ["C++", "CUDA", "GPU Computing"],
    image: "/projects/quicktree.jpg",
    github: "https://github.com/wangly7/quicktree-parallelism",
  },
  {
    id: "cnn-systolic-array-accelerator",
    title: "CNN Systolic Array Accelerator",
    description:
      "Designed a hardware/software co-designed CNN accelerator featuring quantization-aware training, versatile pruning, and reconfigurable FPGA systolic arrays for efficient low-precision inference.",
    tech: ["Verilog", "FPGA", "PyTorch", "CNN", "Quantization", "Systolic Array"],
    image: "/projects/systolic-array.png",
    github: "https://github.com/wangly7/cnn-systolic-array-accelerator",
  },
  {
    id: "ai-music-generation",
    title: "Music Transformer",
    description:
      "Implemented a Transformer-based symbolic music generation model that learns long-range musical structure from MIDI sequences and generates coherent Bach-style chorales.",
    tech: ["Python", "PyTorch", "Transformer", "Music AI"],
    image: "/projects/ml-music.png",
    github: "https://github.com/wangly7/music-transformer/tree/main",
  },
 
];
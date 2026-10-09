# What this page carries from others

| What | From | Licence |
|---|---|---|
| The model's weights (fetched by the page, not stored here) | SITR: Gupta, Mo, Jin, Yuan, ICLR 2025 · https://huggingface.co/datasets/hgupt3/sitr_dataset · converted to ONNX | MIT, as stated on the authors' dataset card |
| The real tactile pictures in `assets/img/real/`, and the real background pictures inside the four sensor presets | The SITR dataset, same address | MIT, as stated on the authors' dataset card |
| ONNX Runtime Web 1.30 (`dist/ort/`) | Microsoft · https://github.com/microsoft/onnxruntime | MIT |
| three.js r170 (inside `dist/deck.js`) | https://threejs.org | MIT |
| Inter typeface (inside `dist/deck.css`) | The Inter Project Authors · https://github.com/rsms/inter | SIL Open Font License 1.1 (`assets/fonts/OFL.txt`) |

## What is ours

The two MoiréSkin models in `models/` (`shape1d_w32.onnx`, `shape1d_w32_any.onnx`, with their `.json` descriptions) and the simulation of MoiréSkin in `dist/deck.js` are our group's own, as is the page. They are not SITR's and were not made by SITR's authors.

The SITR paper: Harsh Gupta, Yuchen Mo, Shengmiao Jin, Wenzhen Yuan. “Sensor-Invariant Tactile Representation.” ICLR 2025. arXiv 2502.19638.

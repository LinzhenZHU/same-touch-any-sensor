# Same touch, any sensor

An interactive page for our group: press an object into four optical tactile sensors (GelSight Mini, DIGIT, GelSight Hex, GelSight Wedge) or one you bend yourself, and watch one model recover the shape from each of them.

Open it on a computer, in Chrome or Edge: https://linzhenzhu.github.io/same-touch-any-sensor/

- The first click starts the download of the model (389 MB, once; the browser keeps it).
- It runs on your own graphics card (WebGPU). Without WebGPU it runs on the processor, a few seconds per answer.
- → or Space: next step. ←: back. R: captions on or off. F: full screen.

## What is whose

- **The model** is SITR (Harsh Gupta, Yuchen Mo, Shengmiao Jin, Wenzhen Yuan, “Sensor-Invariant Tactile Representation”, ICLR 2025, arXiv 2502.19638), its released weights unchanged, run in the browser.
- **The four sensors** are simulated, each on its real background picture and fitted to its nine real ball images from the SITR dataset. The real pictures on the page are from that dataset.
- **The presses** are simulated in the browser: object, gel, lights, camera.

This is an independent demonstration built on SITR. It was not made by SITR's authors. Their work: https://hgupt3.github.io/sitr/

This repository holds the built page only. Licences of what it carries: `THIRD-PARTY.md`.

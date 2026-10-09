# Same touch, any sensor

An interactive page for our group: press an object into four optical tactile sensors (GelSight Mini, DIGIT, GelSight Hex, GelSight Wedge) or one you bend yourself, and watch one model recover the shape from each of them.

Open it on a computer, in Chrome or Edge: https://linzhenzhu.github.io/same-touch-any-sensor/

- The first click starts the download of the model (389 MB, once; the browser keeps it).
- MoiréSkin's own two models (70 MB each) are downloaded when MoiréSkin comes on stage: on its slide of the walkthrough (both, one after the other), or when one of its two entries is chosen in the sandbox (that one). Once; the browser keeps them.
- It runs on your own graphics card (WebGPU). Without WebGPU it runs on the processor, a few seconds per answer.
- → or Space: next step. ←: back. R: captions on or off. F: full screen.

## What is whose

- **The model** is SITR (Harsh Gupta, Yuchen Mo, Shengmiao Jin, Wenzhen Yuan, “Sensor-Invariant Tactile Representation”, ICLR 2025, arXiv 2502.19638), its released weights unchanged, run in the browser.
- **The four sensors** are simulated, each on its real background picture and fitted to its nine real ball images from the SITR dataset. The real pictures on the page are from that dataset.
- **The presses** are simulated in the browser: object, gel, lights, camera.
- **MoiréSkin** is our own sensor (a clear, inflated membrane with two line gratings over a camera: no side lights, no gel). SITR cannot read it, and the page shows that by letting SITR try. Everything of MoiréSkin on this page is simulated: its picture is simulated in the browser from the sensor's calibration, and it is read by two models of ours (`models/shape1d_w32.onnx`, at one fixed pressure; `models/shape1d_w32_any.onnx`, at a pressure the visitor sets), which were trained on simulated presses only and have never been tested on pictures of the real sensor. The pressures on the page are the simulation's and say nothing about the real sensor.

This is an independent demonstration built on SITR. It was not made by SITR's authors. Their work: https://hgupt3.github.io/sitr/

This repository holds the built page only. Licences of what it carries: `THIRD-PARTY.md`.

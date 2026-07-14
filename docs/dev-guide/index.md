# Marlim3 Developer Documentation

Welcome to the **Marlim3** developer documentation. This guide covers the internal architecture of the Marlim3 1D multiphase flow simulator.

## Contents

- [Num4Main.cpp — Main Entry Point](num4main.md)
- [Core Domain Classes](core-domain-classes.md)
- [Input Parsing and SProd Construction](input-parsing.md)
- [Steady-State Solution of a Single Branch](steady-state-branch.md)
- [Transient Solver for a Single Branch](transient-solver.md)
- [Network Simulation](network-simulation.md)
- [Fluid Thermodynamic Modeling](fluid-thermodynamics.md)
- [Heat Transfer Modeling](heat-transfer.md)
- [Injection Well Simulation](injection-well.md)
- [2D Natural Convection Solver](natural-convection.md)
- [Parametric Analysis](parametric-analysis.md)
- [Translations](translations.md)

## Build System

The project uses **CMake** with presets defined in `CMakePresets.json`. See [README.md](../../README.md) for build instructions.

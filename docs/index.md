<h1 align="center">
	<img src="img/logo_marlim3.svg" alt="Marlim3 logo" width="320"/>
</h1>

Marlim3 is a transient 1D multiphase-flow simulator for production and injection systems in oil and gas applications.

## Core Capabilities

- **Production wells**
- **Injection wells** (water or gas)
- **Network**
	- Production networks
	- Injection networks
	- Gas-lift loops
- **Artificial lift models**
	- Gas-lift valves
	- ESP pumps
	- Volumetric pumps

## Advanced modeling

- **Natural convection**: 2D solutions for natural convection analysis in confined spaces (single-phase or two-phase), such as pipeline cross-sections during production shutdowns
- **Compositional fluid model library**
- **Near wellbore model**: radial and 2D models to consider phenomena such as water coning
- **Thermal diffusion**: 2D and 3D coupled to the 1D flow model

## How You Can Use Marlim3

- **Streamlit GUI** for interactive model setup and result inspection (available also as a standalone app in GitHub Releases section)
- **Python package** for automation, integration, and parametric studies
- **Command-line executable** for direct simulation workflows

For installation instructions and usage guidelines in any of these settings, please refer to the [official repository](https://github.com/petrobras/marlim3).

## Documentation Map

| Section | Content |
|---------|---------|
| [Tutorials](tutorials/index.md) | Step-by-step notebook-based workflows for common simulation tasks |
| [Single-Branch Model Reference](single-branch-model-reference/fluids.md) | Full field catalog for fluids, pipes, accessories, boundary conditions, and more |
| [Theoretical Reference](theoretical-reference/mass-momentum-balances.md) | Mathematical foundations: mass/momentum/energy balances and discretization |
| [Developer Guide](dev-guide/index.md) | Internal architecture, domain classes, solvers, and extension points |

## Build This Documentation

```bash
uv sync --group docs
uv run mkdocs serve
```

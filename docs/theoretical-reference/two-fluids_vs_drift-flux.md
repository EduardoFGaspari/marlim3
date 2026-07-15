In transient simulators for multiphase pipe flow, the most widely used mechanistic formulation is the **two-fluid model**. `OLGA`, for instance, is based on this class of model; see Bendiksen et al. (1991). In a one-dimensional, two-phase two-fluid formulation, two mass conservation equations are employed, one for the liquid phase and one for the gas phase. Likewise, two momentum conservation equations are solved, again one for each phase. Energy conservation may be represented either by a mixture equation or by separate equations for each phase, depending on the desired level of detail.

Focusing on mass and momentum conservation, the governing equations can be written as follows.

## Two-fluid model

### Liquid mass conservation

$$
A\frac{\partial \left[\rho_l(1-\alpha)\right]}{\partial t}
+ \frac{\partial \dot{M}_l}{\partial x}
= \frac{\Gamma_l}{\Delta L} - \psi
$$

### Gas mass conservation

$$
A\frac{\partial \left(\rho_g\alpha\right)}{\partial t}
+ \frac{\partial \dot{M}_g}{\partial x}
= \frac{\Gamma_g}{\Delta L} + \psi
$$

### Liquid momentum conservation

$$
\frac{\partial \dot{M}_l}{\partial t}
+ \frac{\partial \left(u_l \dot{M}_l\right)}{\partial x}
+ A(1-\alpha)\frac{\partial p}{\partial x}
=
- f_{lp}\,\frac{\rho_l U_{ls}^{2}}{2}\,S_w
- f_i\,\frac{\rho_m\lvert U_{gs}-U_{ls} \rvert (U_{gs}-U_{ls})}{2}\,S_i
+ \rho_l g A(1-\alpha)\sin\theta
$$

### Gas momentum conservation

$$
\frac{\partial \dot{M}_g}{\partial t}
+ \frac{\partial \left(u_g \dot{M}_g\right)}{\partial x}
+ A\alpha\frac{\partial p}{\partial x}
=
- f_{gp}\,\frac{\rho_g U_{gs}^{2}}{2}\,S_w
+ f_i\,\frac{\rho_m\lvert U_{gs}-U_{ls} \rvert (U_{gs}-U_{ls})}{2}\,S_i
+ \rho_g g A\alpha\sin\theta
$$

Where:

- $\rho_l$ is the liquid density;
- $\rho_g$ is the gas density;
- $\alpha$ is the mixture void fraction;
- $\psi$ is the interphase mass-transfer term, positive for evaporation and negative for condensation;
- $\Gamma_l$ is the liquid-phase mass source;
- $\Gamma_g$ is the gas-phase mass source;
- $\Delta L$ is the reference length associated with the source terms;
- $\dot{M}_l$ is the liquid mass flow rate;
- $\dot{M}_g$ is the gas mass flow rate;
- $A$ is the pipe cross-sectional area;
- $S_w$ is the wetted perimeter;
- $S_i$ is the interfacial perimeter;
- $U_{ls}$ is the liquid superficial velocity;
- $U_{gs}$ is the gas superficial velocity;
- $f_i$ is the interfacial friction factor;
- $f_{lp}$ is the liquid-wall friction factor;
- $f_{gp}$ is the gas-wall friction factor;
- $\theta$ is the pipe inclination angle measured from the horizontal.

In the two-fluid model, each phase is treated in a manner analogous to the corresponding single-phase formulation. However, important distinctions arise once the phases are allowed to interact. Although the void fraction is essential for defining the flow area occupied by each phase, it is not by itself the main quantity responsible for phase coupling. The true hallmark of two-phase flow lies in the interfacial interaction between phases.

Remarkably, among the four equations above, only two terms directly represent the coupling between phases, both of them appearing on the right-hand side. The first, usually of secondary importance, is the interphase mass-transfer term $\psi$. The second, and generally the dominant coupling mechanism, is the interfacial shear stress term,

$$
f_i\,\frac{\rho_m\lvert U_{gs}-U_{ls} \rvert (U_{gs}-U_{ls})}{2}
$$

Special care must therefore be taken in estimating the interfacial friction factor $f_i$. In one-dimensional two-fluid models, this quantity is not obtained from first principles, but rather from empirical or semi-empirical correlations. Deriving a reliable expression for $f_i$ is far from trivial, since the forces acting at the interface have a decisive impact on the predictive capability of any two-fluid formulation; see Stuhmiller (1977).

For stratified flow with a smooth interface — the canonical separated-flow configuration — the interfacial closure is comparatively straightforward. In this regime, interfacial friction is essentially associated with film drag rather than form drag. Since form drag depends strongly on interfacial geometry, its absence greatly simplifies closure development. Moreover, because the interfacial shear is relatively small in smooth stratified flow, the coupling between phases is also weak.

By contrast, in wavy stratified flow the interface is disturbed by dispersive waves whose wavelength is much smaller than the pipe diameter; see Figure 12. Under these conditions, the interfacial phenomena become substantially more complex and more difficult to model. Even the pressure field in the vicinity of the interface may exhibit highly intricate behavior. In addition, the friction factor is no longer associated solely with film drag: a significant contribution from **form drag** typically arises, and this contribution is generally much larger than the film-drag component.

As a consequence, the coupling between the liquid and gas phases increases, which is physically expected. In more intuitive terms, strong interfacial drag causes the two phases to move in a more tightly coupled manner, even when the configuration remains clearly separated, as in stratified flow. The same reasoning applies to annular flow, in which the interfacial friction force associated with form drag is also very large, again leading to strong phase coupling.

Defining the interfacial friction factor when form drag plays a relevant role is particularly challenging, because form drag depends strongly on interfacial shape, and this shape may itself be severely distorted by short-wavelength dispersive waves. The difficulty becomes even greater in dispersed-flow configurations. Consider, for example, the canonical dispersed regime, namely dispersed bubbly flow. In that case, constructing a mechanistic or empirical representation of the interfacial processes — including both pressure disturbances at the interface and the corresponding form-drag contribution from a very large number of bubbles — becomes highly nontrivial.

It is therefore reasonable to state that both the **degree of phase coupling** and the **difficulty of modeling interfacial effects** follow a hierarchy, ranging from the simplest and most weakly coupled configuration, smooth stratified flow, to highly coupled dispersed configurations such as dispersed bubbly flow.

The objective here is not to present a full characteristic analysis of the two-fluid model represented by the equations above. It suffices to note that such a model gives rise to **four families of dynamic waves**. For instance, in horizontal stratified flow, the propagation speeds in a two-fluid formulation are approximately given by

$$
c_{1,2} \sim U_g \pm \sqrt{\left.\frac{\partial p}{\partial \rho}\right}
$$

and

$$
c_{3,4} \sim U_l \pm \sqrt{g h}
$$

In the expressions above, $h$ denotes a characteristic liquid-level scale, and the derivative $\left.\frac{\partial p}{\partial \rho}\right$ represents an effective gas compressibility contribution, whose precise form depends on the thermodynamic closure adopted.

These four wave families are one of the key mathematical signatures of the two-fluid model. They reflect the fact that the formulation retains separate momentum balances for the two phases.


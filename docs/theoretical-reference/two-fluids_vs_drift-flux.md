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
c_{1,2} \sim U_g \pm \sqrt{\frac{\partial p}{\partial \rho}}
$$

and

$$
c_{3,4} \sim U_l \pm \sqrt{g h}
$$

In the expressions above, $h$ denotes a characteristic liquid-level scale, and the derivative $\frac{\partial p}{\partial \rho}$ represents an effective gas compressibility contribution, whose precise form depends on the thermodynamic closure adopted.

These four wave families are one of the key mathematical signatures of the two-fluid model. They reflect the fact that the formulation retains separate momentum balances for the two phases.

For subsonic flow, these expressions — even in approximate form — already reveal two wave families with relatively high propagation speeds, primarily associated with gas compressibility, and two slower wave families, closely analogous to gravity waves in open-channel shallow-water models, that is, in the long-wavelength limit relative to the channel height.

Because these are all dynamic waves, every family carries information related to the pressure field. The faster waves do so mainly through gas compression and expansion, whereas the slower waves are associated with variations in liquid level, which modify the mean flow pressure through changes in the hydrostatic liquid head across the pipe cross-section. The actual mechanism is somewhat more involved, but this interpretation captures the dominant effect.

The two faster wave families transport pressure information more efficiently. By contrast, the slower waves require comparatively large variations in liquid-film height to produce small pressure changes. Consequently, even when these slower waves are involved in pressure transmission, the most evident system response is generally a variation in void fraction or, equivalently, in liquid holdup. In simplified terms, the faster dynamic-wave pair is more directly associated with the transport of pressure information, whereas the slower dynamic-wave pair is more closely associated with the transport of void-fraction information.

In addition to these dynamic wave families, the source terms appearing in the momentum equations give rise to another class of waves, of lower hierarchy than the dynamic ones: the so-called **kinematic waves**, or **density waves**. These waves become important when the inertial terms in the momentum equations are comparatively weak relative to frictional and hydrostatic contributions.

It is important to note that the governing system is not a purely hyperbolic system because of the source terms. As the transient evolves, these source terms may become increasingly influential, and a behavior with elliptic character may emerge. In this regime, pressure can be treated approximately as in a quasi-steady problem, so that the pressure gradient becomes determined essentially by the source terms in the momentum equations.

The principal quantity transported by the kinematic wave is the void fraction. In a two-fluid model, the kinematic-wave propagation speed is approximately given by

$$
c_{\mathrm{kin}} \sim \frac{\partial U_{sg}}{\partial \alpha}
$$

This value is also often close to the gas velocity itself. This is an important result: whenever the dynamic terms become of secondary relevance, the kinematic wave assumes most of the responsibility for transporting void-fraction information.

In a drift-flux model, a kinematic wave does not arise as directly as in the two-fluid formulation. Nevertheless, the slowest dynamic wave family in the drift-flux model is itself closely related to the mean gas velocity. In this sense, the two approaches become similar with respect to the transport of void-fraction information in two-phase flow.

Consider the initial condition illustrated in the next figure: a pipe divided into two regions by a ball valve. If the valve is opened rapidly, the system undergoes fast transient changes, partly governed by the faster wave families and partly governed by the slower ones.

As expected, pressure information propagates more rapidly than holdup information. The latter is associated with the slower dynamic waves and, once dynamic effects related to fluid acceleration become negligible, the transient behavior is governed predominantly by the kinematic wave, also referred to as the continuity wave or density wave; see Wallis (1969).

## Drift-flux model

As discussed above, the principal difficulty of the two-fluid model lies in the reliable representation of interfacial effects. The **drift-flux model** emerges as a simplification of the two-fluid formulation and seeks to bypass, at least partially, the need for a detailed description of interfacial effects in multiphase flow. The classical reference for this model is Zuber and Findlay (1965).

The main structural difference relative to the two-fluid model is the reduction in the number of momentum equations. Instead of solving one momentum equation for each phase, the drift-flux model employs a single **mixture momentum equation**:

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

### Mixture momentum conservation

$$
\frac{\partial \dot{M}_m}{\partial t}
+ \frac{\partial \left(u_l \dot{M}_l + u_g \dot{M}_g\right)}{\partial x}
+ A\frac{\partial p}{\partial x}
= f_m\,\frac{\rho_m j^2}{2}\,S_w
+ \rho_m g A\sin\theta
$$

Compared with the two-fluid model, the drift-flux formulation replaces the two separate phase-momentum equations by a single mixture momentum balance. This reduction simplifies the mathematical structure of the model and removes the explicit interfacial shear term from the momentum equations. The relative motion between phases is then introduced through an additional closure relation, which plays the central role in the drift-flux framework.

The price paid for this simplification is that the relative motion between phases must now be introduced through an additional closure relation. In the drift-flux framework, this role is played by a constitutive relation linking gas velocity, mixture velocity, and phase distribution. The resulting model is therefore simpler than the two-fluid formulation, while still retaining the essential mechanisms required to describe phase slip in many practical situations.

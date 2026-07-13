Considering a one-dimensional model for energy conservation. For each phase (liquid + gas) of the stream, the following energy conservation equations are obtained:

$$\begin{aligned}
\underbrace{\frac{\partial}{\partial t}\!\left[\rho_g\!\left(e_g+\frac{u_g^{2}}{2}\right)\alpha A\right]}_{\text{Energy variation in the control volume}}
\;+\;
\underbrace{\frac{\partial}{\partial x}\!\left[\rho_g u_g\!\left(e_g+\frac{u_g^{2}}{2}\right)\alpha A\right]}_{\text{Energy transport across the control-volume boundary}}
&=
-\underbrace{\frac{\partial}{\partial x}\!\left(p\,u_g\,\alpha A\right)}_{\text{Boundary work}}
\\[6pt]
&\quad
+\underbrace{\left(\rho_g u_g \alpha\right)A g}_{\text{Potential energy variation}}
+\underbrace{Q_g}_{\text{Heat flux}}
+\underbrace{\frac{h_{Fg}\,\Gamma_g}{\Delta l}}_{\text{Mass source}}
+\underbrace{h_t\Psi_g}_{\text{Phase change}}
\end{aligned} \label{eq:gas_energy_initial}$$

$$
\begin{aligned}
\underbrace{\frac{\partial}{\partial t}\!\left[\rho_l\!\left(e_l+\frac{u_l^{2}}{2}\right)(1-\alpha) A\right]}_{\text{Energy variation in the control volume}}
\;+\;
\underbrace{\frac{\partial}{\partial x}\!\left[\rho_l u_l\!\left(e_l+\frac{u_l^{2}}{2}\right)(1-\alpha) A\right]}_{\text{Energy transport across the control-volume boundary}}
&=
-\underbrace{\frac{\partial}{\partial x}\!\left(p\,u_l\,(1-\alpha) A\right)}_{\text{Boundary work}}
\\[6pt]
&\quad
+\underbrace{\rho_l u_l(1-\alpha)A g}_{\text{Potential energy variation}}
+\underbrace{Q_l}_{\text{Heat flux}}
+\underbrace{\frac{h_{Flp}\Gamma_{lp}+h_{Flc}\Gamma_{lc}}{\Delta l}}_{\text{Mass source}}
-\underbrace{h_t\Psi_g}_{\text{Phase change}}
\end{aligned} \label{eq:liq_energy_initial}
$$

Equation \eqref{eq:liq_energy_initial} deals with energy conservation of the liquid phase, which in the simulator can be a mixture of two liquids (in homogeneous flow), a production liquid, always referred to by the subscript p and a complementary liquid, referred to by the subscript c. The volumetric fraction of the conditioning liquid within the liquid phase is given by the term beta. In \eqref{eq:liq_energy_initial}, the properties $\rho_l$ and $e_l$ are obtained from a weighting of properties between these fluids.

Note that in \eqref{eq:gas_energy_initial} and \eqref{eq:liq_energy_initial} there is a term for energy transfer due to vaporization/condensation, this portion of energy transported is, of course, equal in magnitude in both equations.

Equations \eqref{eq:gas_energy_initial} and \eqref{eq:liq_energy_initial} are in their conservative form, the model does not work directly with enthalpies and internal energies, but with primitive variables pressure and temperature, therefore, it is more appropriate to work with the energy equation in its non-conservative form. Deriving by chain rule:

$$\rho_g\alpha A\frac{\partial\left(e_g+\frac{u_g^2}{2}\right)}{\partial t}+\rho_gu_g\alpha A\frac{\partial\left(e_g+\frac{u_g^2}{2}\right)}{\partial x}+\left(e_g+\frac{u_g^2}{2}\right)\frac{\partial\rho_g\alpha A}{\partial t}+\left(e_g+\frac{u_g^2}{2}\right)\frac{\partial\rho_gu_g\alpha A}{\partial x}+u_g\rho_g\alpha A\frac{\partial\frac{p}{\rho_g}}{\partial x}+\frac{p}{\rho_g}\frac{\partial\rho_gu_g\alpha A}{\partial x}=-\left(\rho_gu_g\alpha_g\right)Ag+Q_g+\frac{h_{Fg}\mathrm{\Gamma}_g}{\mathrm{\Delta l}}+h_t\psi_g$$

$$\rho_l\left(1-\alpha\right)A\frac{\partial\left(e_l+\frac{u_l^2}{2}\right)}{\partial t}+\rho_lu_l\left(1-\alpha\right)A\frac{\partial\left(e_l+\frac{u_l^2}{2}\right)}{\partial x}+\left(e_l+\frac{u_l^2}{2}\right)\frac{\partial\rho_l\left(1-\alpha\right)A}{\partial t}+\left(e_l+\frac{u_l^2}{2}\right)\frac{\partial\rho_lu_l\left(1-\alpha\right)A}{\partial x}+u_l\rho_l\left(1-\alpha\right)A\frac{\partial\frac{p}{\rho_l}}{\partial x}+\frac{p}{\rho_l}\frac{\partial\rho_lu_l\left(1-\alpha\right)A}{\partial x}=-\rho_lu_l\left(1-\alpha\right)Ag+Q_l+h_{Fonte}\frac{\left(h_{Flp}\mathrm{\Gamma}_{lp}+h_{Flc}\mathrm{\Gamma}_{lc}\right)}{\mathrm{\Delta l}}-h_t\psi_g$$

Regrouping some terms:

$$\rho_g\alpha A\frac{\partial\left(e_g+\frac{u_g^2}{2}\right)}{\partial t}+\rho_gu_g\alpha A\frac{\partial\left(h_g+\frac{u_g^2}{2}\right)}{\partial x}+\left(e_g+\frac{u_g^2}{2}\right)\frac{\partial\rho_g\alpha A}{\partial t}+\left(e_g+\frac{u_g^2}{2}\right)\frac{\partial\rho_gu_g\alpha A}{\partial x}+\frac{p}{\rho_g}\frac{\partial\rho_gu_g\alpha A}{\partial x}=-\left(\rho_gu_g\alpha_g\right)Ag+Q_g+\frac{h_{Fg}\mathrm{\Gamma}_g}{\mathrm{\Delta l}}+h_t\psi_g \label{eq:energ_intermediario_gas}$$

$$\rho_l\left(1-\alpha\right)A\frac{\partial\left(e_l+\frac{u_l^2}{2}\right)}{\partial t}+\rho_lu_l\left(1-\alpha\right)A\frac{\partial\left(h_l+\frac{u_l^2}{2}\right)}{\partial x}+\left(e_l+\frac{u_l^2}{2}\right)\frac{\partial\rho_l\left(1-\alpha\right)A}{\partial t}+\left(e_l+\frac{u_l^2}{2}\right)\frac{\partial\rho_lu_l\left(1-\alpha\right)A}{\partial x}+\frac{p}{\rho_l}\frac{\partial\rho_lu_l\left(1-\alpha\right)A}{\partial x}=-\rho_lu_l\left(1-\alpha\right)Ag+Q_l+\frac{\left(h_{Flp}\mathrm{\Gamma}_{lp}+h_{Flc}\mathrm{\Gamma}_{lc}\right)}{\mathrm{\Delta l}}-h_t\psi_g \label{eq:energ_intermediario_liquido}$$

At this point, it is important to note that enthalpy only appears in the equations when moving to the non-conservative representation. In the conservative form, even in the spatial derivative, it would be complicated to consider enthalpy and one must consider internal energy and pressure boundary work separately.

To proceed with the study, the following mass conservation relations will be used:

$$A\frac{\partial\rho_{lp}\left(1-\alpha\right)\left(1-\beta\right)}{\partial t}+\frac{\partial{\dot{M}}_p}{\partial x}=\frac{\mathrm{\Gamma}_{lp}}{\mathrm{\Delta L}}-\psi \label{eq:rel_cons_mass1}$$

$$A\frac{\partial\rho_{lc}\left(1-\alpha\right)\beta}{\partial t}+\frac{\partial{\dot{M}}_c}{\partial x}=\frac{\mathrm{\Gamma}_{cp}}{\mathrm{\Delta L}} \label{eq:rel_cons_mass2}$$

$$A\frac{\partial\rho_g\alpha}{\partial t}+\frac{\partial{\dot{M}}_g}{\partial x}=\frac{\mathrm{\Gamma}_g}{\mathrm{\Delta L}}+\psi$$

Adding \eqref{eq:rel_cons_mass1} and \eqref{eq:rel_cons_mass2}:

$$A\frac{\partial\rho_l\left(1-\alpha\right)}{\partial t}+\frac{\partial{\dot{M}}_l}{\partial x}=\frac{\mathrm{\Gamma}_{lp}+\mathrm{\Gamma}_{cp}}{\mathrm{\Delta L}}-\psi$$

Where:

$$
\rho_l = \rho_{lp}(1-\beta) + \rho_{lc}\beta
$$

$$
\dot{M}_p = \rho_{lp}(1-\beta)(1-\alpha)\,u_l\,A
$$

$$
\dot{M}_c = \rho_{lc}\beta(1-\alpha)\,u_l\,A
$$

$$
\dot{M}_l = \dot{M}_c + \dot{M}_p
$$

$$
\dot{M}_g = \rho_g\,\alpha\,u_g\,A \label{eq:last_dotM}
$$

Applying \eqref{eq:rel_cons_mass1} to \eqref{eq:last_dotM} in \eqref{eq:energ_intermediario_gas} and \eqref{eq:energ_intermediario_liquido}:

$$\rho_g\alpha A\left[\frac{\partial\left(e_g+\frac{u_g^2}{2}\right)}{\partial t}+u_g\frac{\partial\left(h_g+\frac{u_g^2}{2}\right)}{\partial x}\right]+\frac{p}{\rho_g}\frac{\partial\rho_gu_g\alpha A}{\partial x}=-\left(e_g+\frac{u_g^2}{2}\right)\left(\frac{\mathrm{\Gamma}_g}{\mathrm{\Delta L}}+\psi\right)-\left(\rho_gu_g\alpha_g\right)Ag+Q_g+\frac{h_{Fg}\mathrm{\Gamma}_g}{\mathrm{\Delta l}}+h_t\psi_g$$

$$\rho_l\left(1-\alpha\right)A\left[\frac{\partial\left(e_l+\frac{u_l^2}{2}\right)}{\partial t}+u_l\frac{\partial\left(h_l+\frac{u_l^2}{2}\right)}{\partial x}\right]+\frac{p}{\rho_l}\frac{\partial\rho_lu_l\left(1-\alpha\right)A}{\partial x}=-\left(e_l+\frac{u_l^2}{2}\right)\left(\frac{\mathrm{\Gamma}_{lp}+\mathrm{\Gamma}_{cp}}{\mathrm{\Delta L}}-\psi\right)-\rho_lu_l\left(1-\alpha\right)Ag+Q_l+\frac{\left(h_{Flp}\mathrm{\Gamma}_{lp}+h_{Flc}\mathrm{\Gamma}_{lc}\right)}{\mathrm{\Delta l}}-h_t\psi_g$$

At this moment, it becomes convenient to add the two energy equations, since in the simulator it will be assumed that the pressure and temperature of each phase are identical:

$$\rho_g\alpha A\left[\frac{\partial\left(e_g+\frac{u_g^2}{2}\right)}{\partial t}+u_g\frac{\partial\left(h_g+\frac{u_g^2}{2}\right)}{\partial x}\right]+\rho_l\left(1-\alpha\right)A\left[\frac{\partial\left(e_l+\frac{u_l^2}{2}\right)}{\partial t}+u_l\frac{\partial\left(h_l+\frac{u_l^2}{2}\right)}{\partial x}\right]+\frac{p}{\rho_g}\frac{\partial\rho_gu_g\alpha A}{\partial x}+\frac{p}{\rho_l}\frac{\partial\rho_lu_l\left(1-\alpha\right)A}{\partial x}=-\left(e_g+\frac{u_g^2}{2}\right)\left(\frac{\mathrm{\Gamma}_g}{\mathrm{\Delta L}}+\psi\right)-\left(e_l+\frac{u_l^2}{2}\right)\left(\frac{\mathrm{\Gamma}_{lp}+\mathrm{\Gamma}_{cp}}{\mathrm{\Delta L}}-\psi\right)-\left(\rho_gu_g\alpha_g\right)Ag-\rho_lu_l\left(1-\alpha\right)Ag+Q_w+\frac{h_{Fg}\mathrm{\Gamma}_g}{\mathrm{\Delta l}}+\frac{\left(h_{Flp}\mathrm{\Gamma}_{lp}+h_{Flc}\mathrm{\Gamma}_{lc}\right)}{\mathrm{\Delta l}} \label{eq:energy_sum}$$

Note that the term $h_t \psi_g$ ceases to exist when the two equations are added.

In \eqref{eq:energy_sum}, the term $\frac{p}{\rho_g}\frac{\partial\rho_gu_g\alpha A}{\partial x}+\frac{p}{\rho_l}\frac{\partial\rho_lu_l\left(1-\alpha\right)A}{\partial x}$ can be simplified using equations \eqref{eq:rel_cons_mass1} to \eqref{eq:last_dotM} (disregarding the time variation of density of the liquids):

$$\frac{p}{\rho_g}\frac{\partial\rho_gu_g\alpha A}{\partial x}+\frac{p}{\rho_l}\frac{\partial\rho_lu_l\left(1-\alpha\right)A}{\partial x}=-Ap\frac{\partial\alpha}{\partial t}-\frac{A}{\rho_g}p\alpha\frac{\partial\rho_g}{\partial t}+\frac{1}{\rho_g}p\left(\frac{\mathrm{\Gamma}_g}{\mathrm{\Delta L}}+\psi\right)-Ap\frac{\partial\left(1-\alpha\right)}{\partial t}-\frac{A}{\rho_l}p\left(1-\alpha\right)\left(\rho_{lp}-\rho_{lc}\right)\frac{\partial\beta}{\partial t}+\frac{1}{\rho_l}p\left(\frac{\mathrm{\Gamma}_{lp}+\mathrm{\Gamma}_{cp}}{\mathrm{\Delta L}}-\psi\right) \label{eq:pressure_work_expand}$$

Reorganizing:

$$\frac{p}{\rho_g}\frac{\partial\rho_gu_g\alpha A}{\partial x}+\frac{p}{\rho_l}\frac{\partial\rho_lu_l\left(1-\alpha\right)A}{\partial x}=-\frac{A}{\rho_g}p\alpha\frac{\partial\rho_g}{\partial t}-\frac{A}{\rho_l}p\left(1-\alpha\right)\left(\rho_{lp}-\rho_{lc}\right)\frac{\partial\beta}{\partial t}+\frac{1}{\rho_g}\left(\frac{\mathrm{\Gamma}_g}{\mathrm{\Delta L}}+\psi\right)+\frac{1}{\rho_l}\left(\frac{\mathrm{\Gamma}_{lp}+\mathrm{\Gamma}_{cp}}{\mathrm{\Delta L}}-\psi\right) \label{eq:pressure_work_reorg}$$

Or:

$$\frac{p}{\rho_g}\frac{\partial\rho_gu_g\alpha A}{\partial x}+\frac{p}{\rho_l}\frac{\partial\rho_lu_l\left(1-\alpha\right)A}{\partial x}=-\frac{Ap}{\rho_g}\alpha\left(\frac{\partial\rho_g}{\partial T}\frac{\partial T}{\partial t}+\frac{\partial\rho_g}{\partial p}\frac{\partial p}{\partial t}\right)-\frac{A}{\rho_l}p\left(1-\alpha\right)\left(\rho_{lp}-\rho_{lc}\right)\frac{\partial\beta}{\partial t}+\frac{p}{\rho_g}\left(\frac{\mathrm{\Gamma}_g}{\mathrm{\Delta L}}+\psi\right)+\frac{p}{\rho_l}\left(\frac{\mathrm{\Gamma}_{lp}+\mathrm{\Gamma}_{cp}}{\mathrm{\Delta L}}-\psi\right) \label{eq:pressure_work_final}$$

Applying \eqref{eq:pressure_work_final} in \eqref{eq:energy_sum}:

$$\rho_g\alpha A\left[\frac{\partial\left(e_g+\frac{u_g^2}{2}\right)}{\partial t}+u_g\frac{\partial\left(h_g+\frac{u_g^2}{2}\right)}{\partial x}\right]+\rho_l\left(1-\alpha\right)A\left[\frac{\partial\left(e_l+\frac{u_l^2}{2}\right)}{\partial t}+u_l\frac{\partial\left(h_l+\frac{u_l^2}{2}\right)}{\partial x}\right]-\frac{Ap}{\rho_g}\alpha\left(\frac{\partial\rho_g}{\partial T}\frac{\partial T}{\partial t}+\frac{\partial\rho_g}{\partial p}\frac{\partial p}{\partial t}\right)+\frac{p}{\rho_g}\left(\frac{\mathrm{\Gamma}_g}{\mathrm{\Delta L}}+\psi\right)+\frac{p}{\rho_l}\left(\frac{\mathrm{\Gamma}_{lp}+\mathrm{\Gamma}_{cp}}{\mathrm{\Delta L}}-\psi\right)=-\left(e_g+\frac{u_g^2}{2}\right)\left(\frac{\mathrm{\Gamma}_g}{\mathrm{\Delta L}}+\psi\right)-\left(e_l+\frac{u_l^2}{2}\right)\left(\frac{\mathrm{\Gamma}_{lp}+\mathrm{\Gamma}_{cp}}{\mathrm{\Delta L}}-\psi\right)-\left(\rho_gu_g\alpha_g\right)Ag-\rho_lu_l\left(1-\alpha\right)Ag+Q_w+\frac{h_{Fg}\mathrm{\Gamma}_g}{\mathrm{\Delta l}}+\frac{\left(h_{Flp}\mathrm{\Gamma}_{lp}+h_{Flc}\mathrm{\Gamma}_{lc}\right)}{\mathrm{\Delta l}}-\frac{A}{\rho_l}p\left(1-\alpha\right)\left(\rho_{lc}-\rho_{lp}\right)\frac{\partial\beta}{\partial t} \label{eq:energy_108}$$

Reorganizing:

$$\rho_g\alpha A\left[\frac{\partial\left(e_g+\frac{u_g^2}{2}\right)}{\partial t}+u_g\frac{\partial\left(h_g+\frac{u_g^2}{2}\right)}{\partial x}\right]+\rho_l\left(1-\alpha\right)A\left[\frac{\partial\left(e_l+\frac{u_l^2}{2}\right)}{\partial t}+u_l\frac{\partial\left(h_l+\frac{u_l^2}{2}\right)}{\partial x}\right]-\frac{Ap}{\rho_g}\alpha\left(\frac{\partial\rho_g}{\partial T}\frac{\partial T}{\partial t}+\frac{\partial\rho_g}{\partial p}\frac{\partial p}{\partial t}\right)=-\left(e_g+\frac{p}{\rho_g}+\frac{u_g^2}{2}\right)\left(\frac{\mathrm{\Gamma}_g}{\mathrm{\Delta L}}+\psi\right)-\left(e_l+\frac{p}{\rho_l}+\frac{u_l^2}{2}\right)\left(\frac{\mathrm{\Gamma}_{lp}+\mathrm{\Gamma}_{cp}}{\mathrm{\Delta L}}-\psi\right)-\left(\rho_gu_g\alpha_g\right)Ag-\rho_lu_l\left(1-\alpha\right)Ag+Q_w+\frac{h_{Fg}\mathrm{\Gamma}_g}{\mathrm{\Delta l}}+\frac{\left(h_{Flp}\mathrm{\Gamma}_{lp}+h_{Flc}\mathrm{\Gamma}_{lc}\right)}{\mathrm{\Delta l}}-\frac{A}{\rho_l}p\left(1-\alpha\right)\left(\rho_{lc}-\rho_{lp}\right)\frac{\partial\beta}{\partial t} \label{eq:energy_109}$$

From the relation $e_f+\frac{p}{\rho_f}=h_f$:

$$\rho_g\alpha A\left[\frac{\partial\left(e_g+\frac{u_g^2}{2}\right)}{\partial t}+u_g\frac{\partial\left(h_g+\frac{u_g^2}{2}\right)}{\partial x}\right]+\rho_l\left(1-\alpha\right)A\left[\frac{\partial\left(e_l+\frac{u_l^2}{2}\right)}{\partial t}+u_l\frac{\partial\left(h_l+\frac{u_l^2}{2}\right)}{\partial x}\right]-\frac{Ap}{\rho_g}\alpha\left(\frac{\partial\rho_g}{\partial T}\frac{\partial T}{\partial t}+\frac{\partial\rho_g}{\partial p}\frac{\partial p}{\partial t}\right)=-\left(h_g+\frac{u_g^2}{2}\right)\left(\frac{\mathrm{\Gamma}_g}{\mathrm{\Delta L}}+\psi\right)-\left(h_l+\frac{u_l^2}{2}\right)\left(\frac{\mathrm{\Gamma}_{lp}+\mathrm{\Gamma}_{cp}}{\mathrm{\Delta L}}-\psi\right)-\left(\rho_gu_g\alpha_g\right)Ag-\rho_lu_l\left(1-\alpha\right)Ag+Q_w+\frac{h_{Fg}\mathrm{\Gamma}_g}{\mathrm{\Delta l}}+\frac{\left(h_{Flp}\mathrm{\Gamma}_{lp}+h_{Flc}\mathrm{\Gamma}_{lc}\right)}{\mathrm{\Delta l}}-\frac{A}{\rho_l}p\left(1-\alpha\right)\left(\rho_{lc}-\rho_{lp}\right)\frac{\partial\beta}{\partial t} \label{eq:energy_110}$$

$$\rho_g\alpha A\left[\frac{\partial\left(e_g+\frac{u_g^2}{2}\right)}{\partial t}+u_g\frac{\partial\left(h_g+\frac{u_g^2}{2}\right)}{\partial x}\right]+\rho_l\left(1-\alpha\right)A\left[\frac{\partial\left(e_l+\frac{u_l^2}{2}\right)}{\partial t}+u_l\frac{\partial\left(h_l+\frac{u_l^2}{2}\right)}{\partial x}\right]-\frac{Ap}{\rho_g}\alpha\left(\frac{\partial\rho_g}{\partial T}\frac{\partial T}{\partial t}+\frac{\partial\rho_g}{\partial p}\frac{\partial p}{\partial t}\right)=-\left(h_g+\frac{u_g^2}{2}\right)\frac{\mathrm{\Gamma}_g}{\mathrm{\Delta L}}-\left(h_l+\frac{u_l^2}{2}\right)\frac{\mathrm{\Gamma}_{lp}+\mathrm{\Gamma}_{cp}}{\mathrm{\Delta L}}-\left(h_g-h_l+\frac{u_g^2}{2}-\frac{u_l^2}{2}\right)\psi-\left(\rho_gu_g\alpha_g\right)Ag-\rho_lu_l\left(1-\alpha\right)Ag+Q_w+\frac{h_{Fg}\mathrm{\Gamma}_g}{\mathrm{\Delta l}}+\frac{\left(h_{Flp}\mathrm{\Gamma}_{lp}+h_{Flc}\mathrm{\Gamma}_{lc}\right)}{\mathrm{\Delta l}}-\frac{A}{\rho_l}p\left(1-\alpha\right)\left(\rho_{lc}-\rho_{lp}\right)\frac{\partial\beta}{\partial t} \label{eq:energy_111}$$

In \eqref{eq:energy_111}, a term directly related to the rate of mass transfer between phases appears, $\left(h_g-h_l+\frac{u_g^2}{2}-\frac{u_l^2}{2}\right)\psi$. Note that this term is different from the original term of the energy conservation equation for each phase $h_t\psi_g$. It arises only in the non-conservative system and is a direct result of the manipulation of the term $\frac{p}{\rho_g}\frac{\partial\rho_gu_g\alpha A}{\partial x}+\frac{p}{\rho_l}\frac{\partial\rho_lu_l\left(1-\alpha\right)A}{\partial x}$. That is, it only makes sense to use this term in the non-conservative relations for energy transport.

As stated earlier, in the simulator, it was preferred to work with direct relations of pressure and temperature, one must now use the thermodynamic relations between enthalpy and internal energy with pressure and temperature to finally obtain the final form of the energy transport equation used in `Marlim3`.

From Van Wylen & Sonntag:

$$dh=c_pdT+\left(\frac{1}{\rho}-T\left.\frac{\partial\frac{1}{\rho}}{\partial T}\right|_p\right) dp \label{eq:dh_generic}$$

$$de=c_vdT-\frac{1}{\rho^2}\left(T\left.\frac{\partial p}{\partial T}\right|_\rho-p\right)d\rho \label{eq:de_generic}$$

For the gas phase, Relation \eqref{eq:de_generic} does not explicitly show the differential of pressure for internal energy, one must therefore substitute the differential of density by the appropriate relation of the differentials of temperature and pressure.

Considering the real gas relation:

$$p=Rz\left(p,T\right)\rho_gT \label{eq:real_gas}$$

From \eqref{eq:real_gas}

$$\left.\frac{\partial p}{\partial T}\right|_{\rho_g}=R\rho_gz+R\rho_gT\left.\frac{\partial z}{\partial T}\right|_{\rho_g} \label{eq:dpdT_rho}$$


Therefore:

$$\left.\frac{\partial z}{\partial T}\right|_{\rho_g}=\left.\frac{\partial z}{\partial T}\right|_p+\left.\frac{\partial z}{\partial p}\right|_T\left.\frac{\partial p}{\partial T}\right|_{\rho_g} \label{eq:dzdt_rho}$$

Com isto

$$\left.\frac{\partial p}{\partial T}\right|_{\rho_g}=R\rho_gz+R\rho_gT\left(\left.\frac{\partial z}{\partial T}\right|_p+\left.\frac{\partial z}{\partial p}\right|_T\left.\frac{\partial p}{\partial T}\right|_{\rho_g}\right)\Rightarrow 
\left(1-R\rho_gT\left.\frac{\partial z}{\partial p}\right|_T\right)\left.\frac{\partial p}{\partial T}\right|_{\rho_g}=R\rho_gz+R\rho_gT\left.\frac{\partial z}{\partial T}\right|_p\Rightarrow$$ 

$$\left.\frac{\partial p}{\partial T}\right|_{\rho_g}=\frac{R\rho_gz+R\rho_gT\left.\frac{\partial z}{\partial T}\right|_p}{\left(1-R\rho_gT\left.\frac{\partial z}{\partial p}\right|_T\right)} \label{eq:dpdT_final}$$

Aplicando \eqref{eq:dpdT_final} em \eqref{eq:de_generic}:

$$de_g=c_{vg}dT+\frac{1}{\rho_g^2}\left(p-R\rho_gT\frac{z+T\left.\frac{\partial z}{\partial T}\right|_p}{1-R\rho_gT\left.\frac{\partial z}{\partial p}\right|_T}\right)d\rho \label{eq:de_g_rho}$$

Sendo que 

$$\left.d\rho=\frac{\partial\rho}{\partial T}\right|_pdT+\left.\frac{\partial\rho}{\partial p}\right|_Tdp \label{eq:drho_total}$$

Applying \eqref{eq:drho_total} in \eqref{eq:de_g_rho}:

$$de_g=\left[c_{vg}+\frac{1}{\rho_g^2}\left.\frac{\partial\rho_g}{\partial T}\right|_p\left(p-R\rho_gT\frac{z+T\left.\frac{\partial z}{\partial T}\right|_p}{1-R\rho_gT\left.\frac{\partial z}{\partial p}\right|_T}\right)\right]dT+\frac{1}{\rho_g^2}\left.\frac{\partial\rho_g}{\partial p}\right|_T\left(p-R\rho_gT\frac{z+T\left.\frac{\partial z}{\partial T}\right|_p}{1-R\rho_gT\left.\frac{\partial z}{\partial p}\right|_T}\right)dp\ \ \label{eq:de_g_Tp}$$

Where 

$$\left.\frac{\partial\rho_g}{\partial T}\right|_p=-\rho_g\left(\frac{1}{T}+\frac{1}{z}\left.\frac{\partial z}{\partial T}\right|_p\right) \label{eq:drho_g_dT}$$

$$\left.\frac{\partial\rho_g}{\partial p}\right|_T=\rho_g\left(\frac{1}{p}-\frac{1}{z}\left.\frac{\partial z}{\partial p}\right|_T\right) \label{eq:drho_g_dp}$$

Applying \eqref{eq:drho_g_dT} and \eqref{eq:drho_g_dp} in \eqref{eq:de_g_Tp}:

$$de_g=\left[c_{vg}-R\left(z+\left.\frac{\partial z}{\partial T}\right|_pT\right)\left(1-\frac{z+\left.\frac{\partial z}{\partial T}\right|_pT}{z-\left.\frac{\partial z}{\partial p}\right|_Tp}\right)\right]dT+\frac{1}{z\rho_g}\left(z-p\left.\frac{\partial z}{\partial p}\right|_T\right)\left(1-\frac{z+T\left.\frac{\partial z}{\partial T}\right|_p}{z-p\left.\frac{\partial z}{\partial p}\right|_T}\right)dp \label{eq:de_g_simplified}$$

From this moment on, for convenience, the following variable will be defined

$$de_g=c_{vg}^\prime dT+\frac{1}{z\rho_g}\left(z-p\left.\frac{\partial z}{\partial p}\right|_T\right)\left(1-\frac{z+T\left.\frac{\partial z}{\partial T}\right|_p}{z-p\left.\frac{\partial z}{\partial p}\right|_T}\right)dp\Rightarrow 
c_{vg}^\prime=c_{vg}-R\left(z+\left.\frac{\partial z}{\partial T}\right|_pT\right)\left(1-\frac{z+\left.\frac{\partial z}{\partial T}\right|_pT}{z-\left.\frac{\partial z}{\partial p}\right|_Tp}\right) \label{eq:cvg_prime_def}$$

For the case of internal energy of the liquid phase, only the variation with temperature will be considered:

$$de_l=c_{vl}dT \label{eq:de_l}$$

Applying \eqref{eq:cvg_prime_def} and \eqref{eq:de_l} in \eqref{eq:energy_111} and already neglecting the variation of kinetic energy in the source terms:

$$\rho_g\alpha A\left[c_{vg}^\prime\frac{\partial T}{\partial t}+\frac{\partial\frac{u_g^2}{2}}{\partial t}+\frac{1}{z\rho_g}\left(z-p\left.\frac{\partial z}{\partial p}\right|_T\right)\left(1-\frac{z+T\left.\frac{\partial z}{\partial T}\right|_p}{z-p\left.\frac{\partial z}{\partial p}\right|_T}\right)\frac{\partial p}{\partial t}+u_g\frac{\partial\left(h_g+\frac{u_g^2}{2}\right)}{\partial x}\right]+\rho_l\left(1-\alpha\right)A\left[c_{vl}\frac{\partial T}{\partial t}++\frac{\partial\frac{u_l^2}{2}}{\partial t}+u_l\frac{\partial\left(h_l+\frac{u_l^2}{2}\right)}{\partial x}\right]-\frac{Ap}{\rho_g}\alpha\left(\frac{\partial\rho_g}{\partial T}\frac{\partial T}{\partial t}+\frac{\partial\rho_g}{\partial p}\frac{\partial p}{\partial t}\right)=-h_g\frac{\mathrm{\Gamma}_g}{\mathrm{\Delta L}}-h_l\frac{\mathrm{\Gamma}_{lp}+\mathrm{\Gamma}_{cp}}{\mathrm{\Delta L}}-\left(h_g-h_l\right)\psi-\left[\rho_gu_g\alpha_g+\rho_lu_l\left(1-\alpha\right)\right]Ag+Q_w+\frac{h_{Fg}\mathrm{\Gamma}_g}{\mathrm{\Delta l}}+\frac{\left(h_{Flp}\mathrm{\Gamma}_{lp}+h_{Flc}\mathrm{\Gamma}_{lc}\right)}{\mathrm{\Delta l}}-\frac{A}{\rho_l}p\left(1-\alpha\right)\left(\rho_{lc}-\rho_{lp}\right)\frac{\partial\beta}{\partial t} \label{eq:energy_127}$$

Applying \eqref{eq:drho_g_dT} and \eqref{eq:drho_g_dp} in \eqref{eq:energy_127}:

$$\rho_g\alpha A\left[c_{vg}^\prime\frac{\partial T}{\partial t}+\frac{1}{z\rho_g}\left(z-p\left.\frac{\partial z}{\partial p}\right|_T\right)\left(\frac{z+T\left.\frac{\partial z}{\partial T}\right|_p}{z-p\left.\frac{\partial z}{\partial p}\right|_T}\right)\frac{\partial p}{\partial t}+\frac{\partial\frac{u_g^2}{2}}{\partial t}+u_g\frac{\partial\left(h_g+\frac{u_g^2}{2}\right)}{\partial x}\right]+\rho_l\left(1-\alpha\right)A\left[c_{vl}\frac{\partial T}{\partial t}+{\frac{\partial\frac{u_l^2}{2}}{\partial t}+u}_l\frac{\partial\left(h_l+\frac{u_l^2}{2}\right)}{\partial x}\right]=\left(h_{Fg}-h_g\right)\frac{\mathrm{\Gamma}_g}{\mathrm{\Delta L}}+\left(h_{Flp}-h_l\right)\frac{\mathrm{\Gamma}_{lp}}{\mathrm{\Delta l}}+\left(h_{Flc}-h_l\right)\frac{\mathrm{\Gamma}_{lc}}{\mathrm{\Delta l}}-\left(h_g-h_l\right)\psi-\left[\rho_gu_g\alpha_g+\rho_lu_l\left(1-\alpha\right)\right]Ag+Q_w-\frac{A}{\rho_l}p\left(1-\alpha\right)\left(\rho_{lc}-\rho_{lp}\right)\frac{\partial\beta}{\partial t} \label{eq:energy_128}$$

Onde:

$$c_{vg}^\prime=c_{vg}+R\left(z+\left.\frac{\partial z}{\partial T}\right|_pT\right)\left(\frac{z+\left.\frac{\partial z}{\partial T}\right|_pT}{z-\left.\frac{\partial z}{\partial p}\right|_Tp}\right) \label{eq:cvg_prime_final}$$

Considering the variations of enthalpy. For the gas:

$$dh_g=c_{pg}dT+\left(\frac{1}{\rho_g}+\frac{T}{\rho_g^2}\left.\frac{\partial\rho_g}{\partial T}\right|_p\right)dp \label{eq:dh_g_general}$$

Applying \eqref{eq:drho_g_dT} in \eqref{eq:dh_g_general}:

$$dh_g=c_{pg}dT-\frac{T}{z\rho_g}\left.\frac{\partial z}{\partial T}\right|_pdp \label{eq:dh_g_Jg}$$

Defining

$$J_g=\frac{T}{z\rho_g}\left.\frac{\partial z}{\partial T}\right|_p \label{eq:Jg_def}$$

$J_g$ is the Joule-Thompson coefficient of the gas multiplied by its specific heat at constant pressure.

For the liquid:

$$dh_l=c_{pl}dT+\left(\frac{1}{\rho_l}+\frac{T}{\rho_l^2}\left.\frac{\partial\rho_l}{\partial T}\right|_p\right)dp \label{eq:dh_l_general}$$

In the case of the liquid, $\left.\frac{\partial\rho_l}{\partial T}\right|_p$ may be relevant to the energy equation, especially at high solubility ratio conditions. But currently this term is not being calculated, so the following simplification will be made 

$$dh_l=c_{pl}dT+\left(\frac{1}{\rho_l}\right)dp \label{eq:dh_l_simplified}$$

The components that make up the liquid phase in the model must be weighted by the quality (mass fraction) of each one

$$x_O=\frac{\rho_O\left(1-F_W\right)\left(1-\beta\right)}{\rho_O\left(1-F_W\right)\left(1-\beta\right)+\rho_WF_W\left(1-\beta\right)+\rho_{lc}\beta} \label{eq:x_O}$$

$$x_W=\frac{\rho_WF_W\left(1-\beta\right)}{\rho_O\left(1-F_W\right)\left(1-\beta\right)+\rho_WF_W\left(1-\beta\right)+\rho_{lc}\beta} \label{eq:x_W}$$

$$x_{lc}=\frac{\rho_{lc}\beta}{\rho_O\left(1-F_W\right)\left(1-\beta\right)+\rho_WF_W\left(1-\beta\right)+\rho_{lc}\beta} \label{eq:x_lc}$$

With this:

$$J_l=-x_O\left(\frac{1}{\rho_o}+\frac{T}{\rho_o^2}\left.\frac{\partial\rho_o}{\partial T}\right|_p\right)-x_W\left(\frac{1}{\rho_w}+\frac{T}{\rho_w^2}\left.\frac{\partial\rho_w}{\partial T}\right|_p\right)-x_{\mathrm{lc}}\left(\frac{1}{\rho_c}+\frac{T}{\rho_c^2}\left.\frac{\partial\rho_c}{\partial T}\right|_p\right) \label{eq:Jl_def}$$

With this:

$$dh_g=c_{pg}dT-J_gdp \label{eq:dh_g}$$

$$dh_l=c_{pl}dT-J_ldp \label{eq:dh_l}$$

Applying \eqref{eq:Jl_def} and \eqref{eq:dh_l} in \eqref{eq:energy_128}:

$$\rho_g\alpha A\left[c_{vg}^\prime\frac{\partial T}{\partial t}+\frac{1}{z\rho_g}\left(z+T\left.\frac{\partial z}{\partial T}\right|_p\right)\frac{\partial p}{\partial t}+\frac{\partial\frac{u_g^2}{2}}{\partial t}+u_g\left(c_{pg}\frac{\partial T}{\partial x}-J_g\frac{\partial p}{\partial x}+u_g\frac{\partial u_g}{\partial x}\right)\right]+\rho_l\left(1-\alpha\right)A\left[c_{vl}\frac{\partial T}{\partial t}+{\frac{\partial\frac{u_l^2}{2}}{\partial t}+u}_l\left(c_{pl}\frac{\partial T}{\partial x}-J_l\frac{\partial p}{\partial x}+u_l\frac{\partial u_l}{\partial x}\right)\right]=\left(h_{Fg}-h_g\right)\frac{\mathrm{\Gamma}_g}{\mathrm{\Delta L}}+\left(h_{Flp}-h_l\right)\frac{\mathrm{\Gamma}_{lp}}{\mathrm{\Delta l}}+\left(h_{Flc}-h_l\right)\frac{\mathrm{\Gamma}_{lc}}{\mathrm{\Delta l}}-\left(h_g-h_l\right)\psi-\left[\rho_gu_g\alpha_g+\rho_lu_l\left(1-\alpha\right)\right]Ag+Q_w-\frac{A}{\rho_l}p\left(1-\alpha\right)\left(\rho_{lc}-\rho_{lp}\right)\frac{\partial\beta}{\partial t} \label{eq:energy_140}$$

Reorganizing:

$$\left[\rho_g\alpha A c_{vg}^\prime+\rho_l\left(1-\alpha\right)Ac_{vl}\right]\frac{\partial T}{\partial t}+\rho_g\alpha A\frac{1}{z\rho_g}\left(z+T\left.\frac{\partial z}{\partial T}\right|_p\right)\frac{\partial p}{\partial t}+\left[\rho_g\alpha A u_gc_{pg}+\rho_l\left(1-\alpha\right)Au_lc_{pl}\right]\frac{\partial T}{\partial x}-\left[\rho_g\alpha A u_gJ_g+\rho_l\left(1-\alpha\right)Au_lJ_l\right]\frac{\partial p}{\partial x}+\left(\rho_g\alpha A\right)\left(\frac{\partial\frac{u_g^2}{2}}{\partial t}+u_g^2\frac{\partial u_g}{\partial x}\right)+\left[\rho_l\left(1-\alpha\right)A\right]\left(\frac{\partial\frac{u_l^2}{2}}{\partial t}+u_l^2\frac{\partial u_l}{\partial x}\right)=\left(h_{Fg}-h_g\right)\frac{\mathrm{\Gamma}_g}{\mathrm{\Delta L}}+\left(h_{Flp}-h_l\right)\frac{\mathrm{\Gamma}_{lp}}{\mathrm{\Delta l}}+\left(h_{Flc}-h_l\right)\frac{\mathrm{\Gamma}_{lc}}{\mathrm{\Delta l}}-\left(h_g-h_l\right)\psi-\left[\rho_gu_g\alpha_g+\rho_lu_l\left(1-\alpha\right)\right]Ag+Q_w-\frac{A}{\rho_l}p\left(1-\alpha\right)\left(\rho_{lc}-\rho_{lp}\right)\frac{\partial\beta}{\partial t} \label{eq:energy_final}$$

\eqref{eq:energy_final} is the current form of the equation being used in the simulator for calculating temperature in transient processes.

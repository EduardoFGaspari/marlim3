Considerando um modelo unidimensional para a conservação de energia. Para cada fase (líquido + gás) da corrente, tem-se as seguintes equações de conservação de energia:

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

A Equação \eqref{eq:liq_energy_initial} trata da conservação de energia da fase líquida, que no simulador pode ser a mistura de dois líquidos (em escoamento homogêneo), um líquido de produção, sempre referido pelo subíndice p e um líquido complementar, referido pelo subíndice c. A fração volumétrica do líquido de condicionamento dentro da fase líquida é dada pelo termo beta. Em \eqref{eq:liq_energy_initial}, as propriedades $\rho_l$ e $e_l$ são obtidas de uma ponderação de propriedades entre estes fluidos.

Observe que em \eqref{eq:gas_energy_initial} e em \eqref{eq:liq_energy_initial} existe um termo de transferência de energia devido à vaporização/condensação, esta porção de energia transportada, claro, é igual em módulo nas duas equações.

As equações \eqref{eq:gas_energy_initial} e \eqref{eq:liq_energy_initial} estão na sua forma conservativa, o modelo não trabalha diretamente com as entalpias e energias internas, mas com as variáveis primitivas pressão e temperatura, portanto, é mais adequado se trabalhar com a equação de energia na sua forma não conservativa. Derivando em cadeia:

$$\rho_g\alpha A\frac{\partial\left(e_g+\frac{u_g^2}{2}\right)}{\partial t}+\rho_gu_g\alpha A\frac{\partial\left(e_g+\frac{u_g^2}{2}\right)}{\partial x}+\left(e_g+\frac{u_g^2}{2}\right)\frac{\partial\rho_g\alpha A}{\partial t}+\left(e_g+\frac{u_g^2}{2}\right)\frac{\partial\rho_gu_g\alpha A}{\partial x}+u_g\rho_g\alpha A\frac{\partial\frac{p}{\rho_g}}{\partial x}+\frac{p}{\rho_g}\frac{\partial\rho_gu_g\alpha A}{\partial x}=-\left(\rho_gu_g\alpha_g\right)Ag+Q_g+\frac{h_{Fg}\mathrm{\Gamma}_g}{\mathrm{\Delta l}}+h_t\psi_g$$

$$\rho_l\left(1-\alpha\right)A\frac{\partial\left(e_l+\frac{u_l^2}{2}\right)}{\partial t}+\rho_lu_l\left(1-\alpha\right)A\frac{\partial\left(e_l+\frac{u_l^2}{2}\right)}{\partial x}+\left(e_l+\frac{u_l^2}{2}\right)\frac{\partial\rho_l\left(1-\alpha\right)A}{\partial t}+\left(e_l+\frac{u_l^2}{2}\right)\frac{\partial\rho_lu_l\left(1-\alpha\right)A}{\partial x}+u_l\rho_l\left(1-\alpha\right)A\frac{\partial\frac{p}{\rho_l}}{\partial x}+\frac{p}{\rho_l}\frac{\partial\rho_lu_l\left(1-\alpha\right)A}{\partial x}=-\rho_lu_l\left(1-\alpha\right)Ag+Q_l+h_{Fonte}\frac{\left(h_{Flp}\mathrm{\Gamma}_{lp}+h_{Flc}\mathrm{\Gamma}_{lc}\right)}{\mathrm{\Delta l}}-h_t\psi_g$$

Reagrupando alguns termos:

$$\rho_g\alpha A\frac{\partial\left(e_g+\frac{u_g^2}{2}\right)}{\partial t}+\rho_gu_g\alpha A\frac{\partial\left(e_g+\frac{u_g^2}{2}+\frac{p}{\rho_g}\right)}{\partial x}+\left(e_g+\frac{u_g^2}{2}\right)\frac{\partial\rho_g\alpha A}{\partial t}+\left(e_g+\frac{u_g^2}{2}\right)\frac{\partial\rho_gu_g\alpha A}{\partial x}+\frac{p}{\rho_g}\frac{\partial\rho_gu_g\alpha A}{\partial x}=-\left(\rho_gu_g\alpha_g\right)Ag+Q_g+\frac{h_{Fg}\mathrm{\Gamma}_g}{\mathrm{\Delta l}}+h_t\psi_g$$

$$\rho_l\left(1-\alpha\right)A\frac{\partial\left(e_l+\frac{u_l^2}{2}\right)}{\partial t}+\rho_lu_l\left(1-\alpha\right)A\frac{\partial\left(e_l+\frac{u_l^2}{2}+\frac{p}{\rho_l}\right)}{\partial x}+\left(e_l+\frac{u_l^2}{2}\right)\frac{\partial\rho_l\left(1-\alpha\right)A}{\partial t}+\left(e_l+\frac{u_l^2}{2}\right)\frac{\partial\rho_lu_l\left(1-\alpha\right)A}{\partial x}+\frac{p}{\rho_l}\frac{\partial\rho_lu_l\left(1-\alpha\right)A}{\partial x}=-\rho_lu_l\left(1-\alpha\right)Ag+Q_l+\frac{\left(h_{Flp}\mathrm{\Gamma}_{lp}+h_{Flc}\mathrm{\Gamma}_{lc}\right)}{\mathrm{\Delta l}}-h_t\psi_g$$

Lançando mão da relação:

$$e_f+\frac{p}{\rho_f}=h_f$$

$$\rho_g\alpha A\frac{\partial\left(e_g+\frac{u_g^2}{2}\right)}{\partial t}+\rho_gu_g\alpha A\frac{\partial\left(h_g+\frac{u_g^2}{2}\right)}{\partial x}+\left(e_g+\frac{u_g^2}{2}\right)\frac{\partial\rho_g\alpha A}{\partial t}+\left(e_g+\frac{u_g^2}{2}\right)\frac{\partial\rho_gu_g\alpha A}{\partial x}+\frac{p}{\rho_g}\frac{\partial\rho_gu_g\alpha A}{\partial x}=-\left(\rho_gu_g\alpha_g\right)Ag+Q_g+\frac{h_{Fg}\mathrm{\Gamma}_g}{\mathrm{\Delta l}}+h_t\psi_g \label{eq:energ_intermediario_gas}$$

$$\rho_l\left(1-\alpha\right)A\frac{\partial\left(e_l+\frac{u_l^2}{2}\right)}{\partial t}+\rho_lu_l\left(1-\alpha\right)A\frac{\partial\left(h_l+\frac{u_l^2}{2}\right)}{\partial x}+\left(e_l+\frac{u_l^2}{2}\right)\frac{\partial\rho_l\left(1-\alpha\right)A}{\partial t}+\left(e_l+\frac{u_l^2}{2}\right)\frac{\partial\rho_lu_l\left(1-\alpha\right)A}{\partial x}+\frac{p}{\rho_l}\frac{\partial\rho_lu_l\left(1-\alpha\right)A}{\partial x}=-\rho_lu_l\left(1-\alpha\right)Ag+Q_l+\frac{\left(h_{Flp}\mathrm{\Gamma}_{lp}+h_{Flc}\mathrm{\Gamma}_{lc}\right)}{\mathrm{\Delta l}}-h_t\psi_g \label{eq:energ_intermediario_liquido}$$

Neste ponto, é importante notar que a entalpia só aparece no equacionamento quando se parte para a representação não conservativa. Na forma conservativa, mesmo na derivada espacial, ficaria complicado se considerar a entalpia e deve-se considerar a energia interna e o trabalho de fronteira pela pressão em separado.

Para dar prosseguimento ao estudo, as seguintes relações de conservação de massa serão utilizadas:

$$A\frac{\partial\rho_{lp}\left(1-\alpha\right)\left(1-\beta\right)}{\partial t}+\frac{\partial{\dot{M}}_p}{\partial x}=\frac{\mathrm{\Gamma}_{lp}}{\mathrm{\Delta L}}-\psi \label{eq:rel_cons_mass1}$$

$$A\frac{\partial\rho_{lc}\left(1-\alpha\right)\beta}{\partial t}+\frac{\partial{\dot{M}}_c}{\partial x}=\frac{\mathrm{\Gamma}_{cp}}{\mathrm{\Delta L}} \label{eq:rel_cons_mass2}$$

$$A\frac{\partial\rho_g\alpha}{\partial t}+\frac{\partial{\dot{M}}_g}{\partial x}=\frac{\mathrm{\Gamma}_g}{\mathrm{\Delta L}}+\psi$$

Somando \eqref{eq:rel_cons_mass1} e \eqref{eq:rel_cons_mass2}:

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

Aplicando \eqref{eq:rel_cons_mass1} a \eqref{eq:last_dotM} em \eqref{eq:energ_intermediario_gas} e \eqref{eq:energ_intermediario_liquido}:

$$\rho_g\alpha A\left[\frac{\partial\left(e_g+\frac{u_g^2}{2}\right)}{\partial t}+u_g\frac{\partial\left(h_g+\frac{u_g^2}{2}\right)}{\partial x}\right]+\frac{p}{\rho_g}\frac{\partial\rho_gu_g\alpha A}{\partial x}=-\left(e_g+\frac{u_g^2}{2}\right)\left(\frac{\mathrm{\Gamma}_g}{\mathrm{\Delta L}}+\psi\right)-\left(\rho_gu_g\alpha_g\right)Ag+Q_g+\frac{h_{Fg}\mathrm{\Gamma}_g}{\mathrm{\Delta l}}+h_t\psi_g$$

$$\rho_l\left(1-\alpha\right)A\left[\frac{\partial\left(e_l+\frac{u_l^2}{2}\right)}{\partial t}+u_l\frac{\partial\left(h_l+\frac{u_l^2}{2}\right)}{\partial x}\right]+\frac{p}{\rho_l}\frac{\partial\rho_lu_l\left(1-\alpha\right)A}{\partial x}=-\left(e_l+\frac{u_l^2}{2}\right)\left(\frac{\mathrm{\Gamma}_{lp}+\mathrm{\Gamma}_{cp}}{\mathrm{\Delta L}}-\psi\right)-\rho_lu_l\left(1-\alpha\right)Ag+Q_l+\frac{\left(h_{Flp}\mathrm{\Gamma}_{lp}+h_{Flc}\mathrm{\Gamma}_{lc}\right)}{\mathrm{\Delta l}}-h_t\psi_g$$

Neste momento, torna-se conveniente somar as duas equações de energia, pois no simulador se admitirá que a pressão e a temperatura de cada fase são idênticas:

$$\rho_g\alpha A\left[\frac{\partial\left(e_g+\frac{u_g^2}{2}\right)}{\partial t}+u_g\frac{\partial\left(h_g+\frac{u_g^2}{2}\right)}{\partial x}\right]+\rho_l\left(1-\alpha\right)A\left[\frac{\partial\left(e_l+\frac{u_l^2}{2}\right)}{\partial t}+u_l\frac{\partial\left(h_l+\frac{u_l^2}{2}\right)}{\partial x}\right]+\frac{p}{\rho_g}\frac{\partial\rho_gu_g\alpha A}{\partial x}+\frac{p}{\rho_l}\frac{\partial\rho_lu_l\left(1-\alpha\right)A}{\partial x}=-\left(e_g+\frac{u_g^2}{2}\right)\left(\frac{\mathrm{\Gamma}_g}{\mathrm{\Delta L}}+\psi\right)-\left(e_l+\frac{u_l^2}{2}\right)\left(\frac{\mathrm{\Gamma}_{lp}+\mathrm{\Gamma}_{cp}}{\mathrm{\Delta L}}-\psi\right)-\left(\rho_gu_g\alpha_g\right)Ag-\rho_lu_l\left(1-\alpha\right)Ag+Q_w+\frac{h_{Fg}\mathrm{\Gamma}_g}{\mathrm{\Delta l}}+\frac{\left(h_{Flp}\mathrm{\Gamma}_{lp}+h_{Flc}\mathrm{\Gamma}_{lc}\right)}{\mathrm{\Delta l}} \label{eq:energy_sum}$$

Observe que o termo $h_t \psi_g$ deixa de existir quando as duas equações são somadas. 

Em \eqref{eq:energy_sum}, o termo $\frac{p}{\rho_g}\frac{\partial\rho_gu_g\alpha A}{\partial x}+\frac{p}{\rho_l}\frac{\partial\rho_lu_l\left(1-\alpha\right)A}{\partial x}$ pode ser simplificado por meio das equações (93) a (101) (desconsiderando a variação de massa específica dos líquidos com o tempo):

$$\frac{p}{\rho_g}\frac{\partial\rho_gu_g\alpha A}{\partial x}+\frac{p}{\rho_l}\frac{\partial\rho_lu_l\left(1-\alpha\right)A}{\partial x}=-Ap\frac{\partial\alpha}{\partial t}-\frac{A}{\rho_g}p\alpha\frac{\partial\rho_g}{\partial t}+\frac{1}{\rho_g}p\left(\frac{\mathrm{\Gamma}_g}{\mathrm{\Delta L}}+\psi\right)-Ap\frac{\partial\left(1-\alpha\right)}{\partial t}-\frac{A}{\rho_l}p\left(1-\alpha\right)\left(\rho_{lp}-\rho_{lc}\right)\frac{\partial\beta}{\partial t}+\frac{1}{\rho_l}p\left(\frac{\mathrm{\Gamma}_{lp}+\mathrm{\Gamma}_{cp}}{\mathrm{\Delta L}}-\psi\right)$$

Reorganizando:

$$\frac{p}{\rho_g}\frac{\partial\rho_gu_g\alpha A}{\partial x}+\frac{p}{\rho_l}\frac{\partial\rho_lu_l\left(1-\alpha\right)A}{\partial x}=-\frac{A}{\rho_g}p\alpha\frac{\partial\rho_g}{\partial t}-\frac{A}{\rho_l}p\left(1-\alpha\right)\left(\rho_{lp}-\rho_{lc}\right)\frac{\partial\beta}{\partial t}+\frac{1}{\rho_g}\left(\frac{\mathrm{\Gamma}_g}{\mathrm{\Delta L}}+\psi\right)+\frac{1}{\rho_l}\left(\frac{\mathrm{\Gamma}_{lp}+\mathrm{\Gamma}_{cp}}{\mathrm{\Delta L}}-\psi\right)$$

Ou:

$$\frac{p}{\rho_g}\frac{\partial\rho_gu_g\alpha A}{\partial x}+\frac{p}{\rho_l}\frac{\partial\rho_lu_l\left(1-\alpha\right)A}{\partial x}=-\frac{Ap}{\rho_g}\alpha\left(\frac{\partial\rho_g}{\partial T}\frac{\partial T}{\partial t}+\frac{\partial\rho_g}{\partial p}\frac{\partial p}{\partial t}\right)-\frac{A}{\rho_l}p\left(1-\alpha\right)\left(\rho_{lp}-\rho_{lc}\right)\frac{\partial\beta}{\partial t}+\frac{p}{\rho_g}\left(\frac{\mathrm{\Gamma}_g}{\mathrm{\Delta L}}+\psi\right)+\frac{p}{\rho_l}\left(\frac{\mathrm{\Gamma}_{lp}+\mathrm{\Gamma}_{cp}}{\mathrm{\Delta L}}-\psi\right)$$

Aplicando (107) em \eqref{eq:energy_sum}:

$$\rho_g\alpha A\left[\frac{\partial\left(e_g+\frac{u_g^2}{2}\right)}{\partial t}+u_g\frac{\partial\left(h_g+\frac{u_g^2}{2}\right)}{\partial x}\right]+\rho_l\left(1-\alpha\right)A\left[\frac{\partial\left(e_l+\frac{u_l^2}{2}\right)}{\partial t}+u_l\frac{\partial\left(h_l+\frac{u_l^2}{2}\right)}{\partial x}\right]-\frac{Ap}{\rho_g}\alpha\left(\frac{\partial\rho_g}{\partial T}\frac{\partial T}{\partial t}+\frac{\partial\rho_g}{\partial p}\frac{\partial p}{\partial t}\right)+\frac{p}{\rho_g}\left(\frac{\mathrm{\Gamma}_g}{\mathrm{\Delta L}}+\psi\right)+\frac{p}{\rho_l}\left(\frac{\mathrm{\Gamma}_{lp}+\mathrm{\Gamma}_{cp}}{\mathrm{\Delta L}}-\psi\right)=-\left(e_g+\frac{u_g^2}{2}\right)\left(\frac{\mathrm{\Gamma}_g}{\mathrm{\Delta L}}+\psi\right)-\left(e_l+\frac{u_l^2}{2}\right)\left(\frac{\mathrm{\Gamma}_{lp}+\mathrm{\Gamma}_{cp}}{\mathrm{\Delta L}}-\psi\right)-\left(\rho_gu_g\alpha_g\right)Ag-\rho_lu_l\left(1-\alpha\right)Ag+Q_w+\frac{h_{Fg}\mathrm{\Gamma}_g}{\mathrm{\Delta l}}+\frac{\left(h_{Flp}\mathrm{\Gamma}_{lp}+h_{Flc}\mathrm{\Gamma}_{lc}\right)}{\mathrm{\Delta l}}-\frac{A}{\rho_l}p\left(1-\alpha\right)\left(\rho_{lc}-\rho_{lp}\right)\frac{\partial\beta}{\partial t}$$

108

Reorganizando:

$$\rho_g\alpha A\left[\frac{\partial\left(e_g+\frac{u_g^2}{2}\right)}{\partial t}+u_g\frac{\partial\left(h_g+\frac{u_g^2}{2}\right)}{\partial x}\right]+\rho_l\left(1-\alpha\right)A\left[\frac{\partial\left(e_l+\frac{u_l^2}{2}\right)}{\partial t}+u_l\frac{\partial\left(h_l+\frac{u_l^2}{2}\right)}{\partial x}\right]-\frac{Ap}{\rho_g}\alpha\left(\frac{\partial\rho_g}{\partial T}\frac{\partial T}{\partial t}+\frac{\partial\rho_g}{\partial p}\frac{\partial p}{\partial t}\right)=-\left(e_g+\frac{p}{\rho_g}+\frac{u_g^2}{2}\right)\left(\frac{\mathrm{\Gamma}_g}{\mathrm{\Delta L}}+\psi\right)-\left(e_l+\frac{p}{\rho_l}+\frac{u_l^2}{2}\right)\left(\frac{\mathrm{\Gamma}_{lp}+\mathrm{\Gamma}_{cp}}{\mathrm{\Delta L}}-\psi\right)-\left(\rho_gu_g\alpha_g\right)Ag-\rho_lu_l\left(1-\alpha\right)Ag+Q_w+\frac{h_{Fg}\mathrm{\Gamma}_g}{\mathrm{\Delta l}}+\frac{\left(h_{Flp}\mathrm{\Gamma}_{lp}+h_{Flc}\mathrm{\Gamma}_{lc}\right)}{\mathrm{\Delta l}}-\frac{A}{\rho_l}p\left(1-\alpha\right)\left(\rho_{lc}-\rho_{lp}\right)\frac{\partial\beta}{\partial t}$$

109

Da Relação (90):

$$\rho_g\alpha A\left[\frac{\partial\left(e_g+\frac{u_g^2}{2}\right)}{\partial t}+u_g\frac{\partial\left(h_g+\frac{u_g^2}{2}\right)}{\partial x}\right]+\rho_l\left(1-\alpha\right)A\left[\frac{\partial\left(e_l+\frac{u_l^2}{2}\right)}{\partial t}+u_l\frac{\partial\left(h_l+\frac{u_l^2}{2}\right)}{\partial x}\right]\frac{Ap}{\rho_g}\alpha\left(\frac{\partial\rho_g}{\partial T}\frac{\partial T}{\partial t}+\frac{\partial\rho_g}{\partial p}\frac{\partial p}{\partial t}\right)=-\left(h_g+\frac{u_g^2}{2}\right)\left(\frac{\mathrm{\Gamma}_g}{\mathrm{\Delta L}}+\psi\right)-\left(h_l+\frac{u_l^2}{2}\right)\left(\frac{\mathrm{\Gamma}_{lp}+\mathrm{\Gamma}_{cp}}{\mathrm{\Delta L}}-\psi\right)-\left(\rho_gu_g\alpha_g\right)Ag-\rho_lu_l\left(1-\alpha\right)Ag+Q_w+\frac{h_{Fg}\mathrm{\Gamma}_g}{\mathrm{\Delta l}}+\frac{\left(h_{Flp}\mathrm{\Gamma}_{lp}+h_{Flc}\mathrm{\Gamma}_{lc}\right)}{\mathrm{\Delta l}}-\frac{A}{\rho_l}p\left(1-\alpha\right)\left(\rho_{lc}-\rho_{lp}\right)\frac{\partial\beta}{\partial t}$$

110

$$\rho_g\alpha A\left[\frac{\partial\left(e_g+\frac{u_g^2}{2}\right)}{\partial t}+u_g\frac{\partial\left(h_g+\frac{u_g^2}{2}\right)}{\partial x}\right]+\rho_l\left(1-\alpha\right)A\left[\frac{\partial\left(e_l+\frac{u_l^2}{2}\right)}{\partial t}+u_l\frac{\partial\left(h_l+\frac{u_l^2}{2}\right)}{\partial x}\right]-\frac{Ap}{\rho_g}\alpha\left(\frac{\partial\rho_g}{\partial T}\frac{\partial T}{\partial t}+\frac{\partial\rho_g}{\partial p}\frac{\partial p}{\partial t}\right)=-\left(h_g+\frac{u_g^2}{2}\right)\frac{\mathrm{\Gamma}_g}{\mathrm{\Delta L}}-\left(h_l+\frac{u_l^2}{2}\right)\frac{\mathrm{\Gamma}_{lp}+\mathrm{\Gamma}_{cp}}{\mathrm{\Delta L}}-\left(h_g-h_l+\frac{u_g^2}{2}-\frac{u_l^2}{2}\right)\psi-\left(\rho_gu_g\alpha_g\right)Ag-\rho_lu_l\left(1-\alpha\right)Ag+Q_w+\frac{h_{Fg}\mathrm{\Gamma}_g}{\mathrm{\Delta l}}+\frac{\left(h_{Flp}\mathrm{\Gamma}_{lp}+h_{Flc}\mathrm{\Gamma}_{lc}\right)}{\mathrm{\Delta l}}-\frac{A}{\rho_l}p\left(1-\alpha\right)\left(\rho_{lc}-\rho_{lp}\right)\frac{\partial\beta}{\partial t}$$

111

Em (111), surge um termo diretamente relacionado com a taxa de transferência de massa entre as fases, $\left(h_g-h_l+\frac{u_g^2}{2}-\frac{u_l^2}{2}\right)\psi$. Observe que este termo é diferente do termo original da equação de conservação de energia para cada fase $h_t\psi_g$. Ele surge apenas no sistema não conservativo e é um resultado direto da manipulação do termo $\frac{p}{\rho_g}\frac{\partial\rho_gu_g\alpha A}{\partial x}+\frac{p}{\rho_l}\frac{\partial\rho_lu_l\left(1-\alpha\right)A}{\partial x}$. Ou seja, só faz sentido utilizar este termo nas relações não conservativas para o transporte de energia.

Como dito anteriormente, no simulador, preferiu-se trabalhar com as relações diretas de pressão e temperatura, deve-se agora utilizar as relações termodinâmicas entre entalpia e energia interna com pressão e temperatura para finalmente obter-se a forma final da equação de transporte de energia utilizada no `Marlim3`.

De Van Wylen & Sonntag:

$$dh=c_pdT+\left(\frac{1}{\rho}-T\left.\frac{\partial\frac{1}{\rho}}{\partial T}\right|_p\right) dp$$

(112)

$$de=c_vdT-\frac{1}{\rho^2}\left(T\left.\frac{\partial p}{\partial T}\right|_\rho-p\right)d\rho$$

(113)

Para o caso da fase gasosa, a Relação (113) não explicita o diferencial de pressão para a energia interna, deve-se, portanto, substituir o diferencial da massa específica pela relação adequada dos diferencias de temperatura e pressão. 

Considerando a relação de gás real:

$$p=Rz\left(p,T\right)\rho_gT$$

(114)

De (114)

$$\left.\frac{\partial p}{\partial T}\right|_{\rho_g}=R\rho_gz+R\rho_gT\left.\frac{\partial z}{\partial T}\right|_{\rho_g}$$

(115)

Onde 

$$dz=\left.\frac{\partial z}{\partial T}\right|_pdT+\left.\frac{\partial z}{\partial p}\right|_Tdp$$

(116)

Logo:

$$\left.\frac{\partial z}{\partial T}\right|_{\rho_g}=\left.\frac{\partial z}{\partial T}\right|_p+\left.\frac{\partial z}{\partial p}\right|_T\left.\frac{\partial p}{\partial T}\right|_{\rho_g}$$

(117)

Com isto

$$\left.\frac{\partial p}{\partial T}\right|_{\rho_g}=R\rho_gz+R\rho_gT\left(\left.\frac{\partial z}{\partial T}\right|_p+\left.\frac{\partial z}{\partial p}\right|_T\left.\frac{\partial p}{\partial T}\right|_{\rho_g}\right)\Rightarrow 
\left(1-R\rho_gT\left.\frac{\partial z}{\partial p}\right|_T\right)\left.\frac{\partial p}{\partial T}\right|_{\rho_g}=R\rho_gz+R\rho_gT\left.\frac{\partial z}{\partial T}\right|_p\Rightarrow$$ 

$$\left.\frac{\partial p}{\partial T}\right|_{\rho_g}=\frac{R\rho_gz+R\rho_gT\left.\frac{\partial z}{\partial T}\right|_p}{\left(1-R\rho_gT\left.\frac{\partial z}{\partial p}\right|_T\right)}$$

(118)

Aplicando (118) em (113):

$$de_g=c_{vg}dT+\frac{1}{\rho_g^2}\left(p-R\rho_gT\frac{z+T\left.\frac{\partial z}{\partial T}\right|_p}{1-R\rho_gT\left.\frac{\partial z}{\partial p}\right|_T}\right)d\rho$$

(119)

Sendo que 

$$\left.d\rho=\frac{\partial\rho}{\partial T}\right|_pdT+\left.\frac{\partial\rho}{\partial p}\right|_Tdp$$

(120)

Aplicando (120) em (119):

$$de_g=\left[c_{vg}+\frac{1}{\rho_g^2}\left.\frac{\partial\rho_g}{\partial T}\right|_p\left(p-R\rho_gT\frac{z+T\left.\frac{\partial z}{\partial T}\right|_p}{1-R\rho_gT\left.\frac{\partial z}{\partial p}\right|_T}\right)\right]dT+\frac{1}{\rho_g^2}\left.\frac{\partial\rho_g}{\partial p}\right|_T\left(p-R\rho_gT\frac{z+T\left.\frac{\partial z}{\partial T}\right|_p}{1-R\rho_gT\left.\frac{\partial z}{\partial p}\right|_T}\right)dp\ \ \$$

(121)

Sendo que 

$$\left.\frac{\partial\rho_g}{\partial T}\right|_p=-\rho_g\left(\frac{1}{T}+\frac{1}{z}\left.\frac{\partial z}{\partial T}\right|_p\right)   						(122)
\left.\frac{\partial\rho_g}{\partial p}\right|_T=\rho_g\left(\frac{1}{p}-\frac{1}{z}\left.\frac{\partial z}{\partial p}\right|_T\right)$$

(123)

Aplicando (122) e (123) em (121):

$$de_g=\left[c_{vg}-R\left(z+\left.\frac{\partial z}{\partial T}\right|_pT\right)\left(1-\frac{z+\left.\frac{\partial z}{\partial T}\right|_pT}{z-\left.\frac{\partial z}{\partial p}\right|_Tp}\right)\right]dT+\frac{1}{z\rho_g}\left(z-p\left.\frac{\partial z}{\partial p}\right|_T\right)\left(1-\frac{z+T\left.\frac{\partial z}{\partial T}\right|_p}{z-p\left.\frac{\partial z}{\partial p}\right|_T}\right)dp$$

(124)

A partir deste momento, por comodidade, se definirá a seguinte variável

$$de_g=c_{vg}^\prime dT+\frac{1}{z\rho_g}\left(z-p\left.\frac{\partial z}{\partial p}\right|_T\right)\left(1-\frac{z+T\left.\frac{\partial z}{\partial T}\right|_p}{z-p\left.\frac{\partial z}{\partial p}\right|_T}\right)dp\Rightarrow 
c_{vg}^\prime=c_{vg}-R\left(z+\left.\frac{\partial z}{\partial T}\right|_pT\right)\left(1-\frac{z+\left.\frac{\partial z}{\partial T}\right|_pT}{z-\left.\frac{\partial z}{\partial p}\right|_Tp}\right)$$

(125)

Para o caso da energia interna da fase líquida, só será considerada a variação com a temperatura:

$$de_l=c_{vl}dT$$

(126)

Aplicando (125) e (126) em (111) e já desprezando a variação de energia cinética nos termos fontes:

$$\rho_g\alpha A\left[c_{vg}^\prime\frac{\partial T}{\partial t}+\frac{\partial\frac{u_g^2}{2}}{\partial t}+\frac{1}{z\rho_g}\left(z-p\left.\frac{\partial z}{\partial p}\right|_T\right)\left(1-\frac{z+T\left.\frac{\partial z}{\partial T}\right|_p}{z-p\left.\frac{\partial z}{\partial p}\right|_T}\right)\frac{\partial p}{\partial t}+u_g\frac{\partial\left(h_g+\frac{u_g^2}{2}\right)}{\partial x}\right]+\rho_l\left(1-\alpha\right)A\left[c_{vl}\frac{\partial T}{\partial t}++\frac{\partial\frac{u_l^2}{2}}{\partial t}+u_l\frac{\partial\left(h_l+\frac{u_l^2}{2}\right)}{\partial x}\right]-\frac{Ap}{\rho_g}\alpha\left(\frac{\partial\rho_g}{\partial T}\frac{\partial T}{\partial t}+\frac{\partial\rho_g}{\partial p}\frac{\partial p}{\partial t}\right)=-h_g\frac{\mathrm{\Gamma}_g}{\mathrm{\Delta L}}-h_l\frac{\mathrm{\Gamma}_{lp}+\mathrm{\Gamma}_{cp}}{\mathrm{\Delta L}}-\left(h_g-h_l\right)\psi-\left[\rho_gu_g\alpha_g+\rho_lu_l\left(1-\alpha\right)\right]Ag+Q_w+\frac{h_{Fg}\mathrm{\Gamma}_g}{\mathrm{\Delta l}}+\frac{\left(h_{Flp}\mathrm{\Gamma}_{lp}+h_{Flc}\mathrm{\Gamma}_{lc}\right)}{\mathrm{\Delta l}}-\frac{A}{\rho_l}p\left(1-\alpha\right)\left(\rho_{lc}-\rho_{lp}\right)\frac{\partial\beta}{\partial t}$$

(127)

Aplicando (122) e (123) em (127):

$$\rho_g\alpha A\left[c_{vg}^\prime\frac{\partial T}{\partial t}+\frac{1}{z\rho_g}\left(z-p\left.\frac{\partial z}{\partial p}\right|_T\right)\left(\frac{z+T\left.\frac{\partial z}{\partial T}\right|_p}{z-p\left.\frac{\partial z}{\partial p}\right|_T}\right)\frac{\partial p}{\partial t}+\frac{\partial\frac{u_g^2}{2}}{\partial t}+u_g\frac{\partial\left(h_g+\frac{u_g^2}{2}\right)}{\partial x}\right]+\rho_l\left(1-\alpha\right)A\left[c_{vl}\frac{\partial T}{\partial t}+{\frac{\partial\frac{u_l^2}{2}}{\partial t}+u}_l\frac{\partial\left(h_l+\frac{u_l^2}{2}\right)}{\partial x}\right]=\left(h_{Fg}-h_g\right)\frac{\mathrm{\Gamma}_g}{\mathrm{\Delta L}}+\left(h_{Flp}-h_l\right)\frac{\mathrm{\Gamma}_{lp}}{\mathrm{\Delta l}}+\left(h_{Flc}-h_l\right)\frac{\mathrm{\Gamma}_{lc}}{\mathrm{\Delta l}}-\left(h_g-h_l\right)\psi-\left[\rho_gu_g\alpha_g+\rho_lu_l\left(1-\alpha\right)\right]Ag+Q_w-\frac{A}{\rho_l}p\left(1-\alpha\right)\left(\rho_{lc}-\rho_{lp}\right)\frac{\partial\beta}{\partial t}$$

(128)

Onde:

$$c_{vg}^\prime=c_{vg}+R\left(z+\left.\frac{\partial z}{\partial T}\right|_pT\right)\left(\frac{z+\left.\frac{\partial z}{\partial T}\right|_pT}{z-\left.\frac{\partial z}{\partial p}\right|_Tp}\right)$$

(129)

Considerando as variações de entalpia. Para o gás:

$$dh_g=c_{pg}dT+\left(\frac{1}{\rho_g}+\frac{T}{\rho_g^2}\left.\frac{\partial\rho_g}{\partial T}\right|_p\right)dp$$

(130)

Aplicando (122) em (130):

$$dh_g=c_{pg}dT-\frac{T}{z\rho_g}\left.\frac{\partial z}{\partial T}\right|_pdp$$

(131)

Definindo

$$J_g=\frac{T}{z\rho_g}\left.\frac{\partial z}{\partial T}\right|_p$$

$J_g$ é o coeficiente de Joule-Thompson do gás multiplicado pelo seu calor específico a pressão constante.

Para o líquido:

$$dh_l=c_{pl}dT+\left(\frac{1}{\rho_l}+\frac{T}{\rho_l^2}\left.\frac{\partial\rho_l}{\partial T}\right|_p\right)dp$$

(132)

No caso do líquido, $\left.\frac{\partial\rho_l}{\partial T}\right|_p$ pode ser relevante para a equação de energia, principalmente em condições de razão de solubilidade alta. Mas atualmente não se está calculando este termo, se fará a seguinte simplificação 

$$dh_l=c_{pl}dT+\left(\frac{1}{\rho_l}\right)dp$$

(133)

Deve-se ponderar os componentes que compõem a fase líquida no modelo pelo título de cada um

$$x_O=\frac{\rho_O\left(1-F_W\right)\left(1-\beta\right)}{\rho_O\left(1-F_W\right)\left(1-\beta\right)+\rho_WF_W\left(1-\beta\right)+\rho_{lc}\beta}$$

(134)

$$x_W=\frac{\rho_WF_W\left(1-\beta\right)}{\rho_O\left(1-F_W\right)\left(1-\beta\right)+\rho_WF_W\left(1-\beta\right)+\rho_{lc}\beta}$$

(135)

$$x_{lc}=\frac{\rho_{lc}\beta}{\rho_O\left(1-F_W\right)\left(1-\beta\right)+\rho_WF_W\left(1-\beta\right)+\rho_{lc}\beta}$$

(136)

Com isto:

$$J_l=-x_O\left(\frac{1}{\rho_o}+\frac{T}{\rho_o^2}\left.\frac{\partial\rho_o}{\partial T}\right|_p\right)-x_W\left(\frac{1}{\rho_w}+\frac{T}{\rho_w^2}\left.\frac{\partial\rho_w}{\partial T}\right|_p\right)-x_{\mathrm{lc}}\left(\frac{1}{\rho_c}+\frac{T}{\rho_c^2}\left.\frac{\partial\rho_c}{\partial T}\right|_p\right)$$

(137)	

Com isto:

$$dh_g=c_{pg}dT-J_gdp$$

(138)

$$dh_l=c_{pl}dT-J_ldp$$

(139)

Aplicando (137) e (139) em (128):

$$\rho_g\alpha A\left[c_{vg}^\prime\frac{\partial T}{\partial t}+\frac{1}{z\rho_g}\left(z+T\left.\frac{\partial z}{\partial T}\right|_p\right)\frac{\partial p}{\partial t}+\frac{\partial\frac{u_g^2}{2}}{\partial t}+u_g\left(c_{pg}\frac{\partial T}{\partial x}-J_g\frac{\partial p}{\partial x}+u_g\frac{\partial u_g}{\partial x}\right)\right]+\rho_l\left(1-\alpha\right)A\left[c_{vl}\frac{\partial T}{\partial t}+{\frac{\partial\frac{u_l^2}{2}}{\partial t}+u}_l\left(c_{pl}\frac{\partial T}{\partial x}-J_l\frac{\partial p}{\partial x}+u_l\frac{\partial u_l}{\partial x}\right)\right]=\left(h_{Fg}-h_g\right)\frac{\mathrm{\Gamma}_g}{\mathrm{\Delta L}}+\left(h_{Flp}-h_l\right)\frac{\mathrm{\Gamma}_{lp}}{\mathrm{\Delta l}}+\left(h_{Flc}-h_l\right)\frac{\mathrm{\Gamma}_{lc}}{\mathrm{\Delta l}}-\left(h_g-h_l\right)\psi-\left[\rho_gu_g\alpha_g+\rho_lu_l\left(1-\alpha\right)\right]Ag+Q_w-\frac{A}{\rho_l}p\left(1-\alpha\right)\left(\rho_{lc}-\rho_{lp}\right)\frac{\partial\beta}{\partial t}$$

(140)

Reorganizando:


$$\left[\rho_g\alpha A c_{vg}^\prime+\rho_l\left(1-\alpha\right)Ac_{vl}\right]\frac{\partial T}{\partial t}+\rho_g\alpha A\frac{1}{z\rho_g}\left(z+T\left.\frac{\partial z}{\partial T}\right|_p\right)\frac{\partial p}{\partial t}+\left[\rho_g\alpha A u_gc_{pg}+\rho_l\left(1-\alpha\right)Au_lc_{pl}\right]\frac{\partial T}{\partial x}-\left[\rho_g\alpha A u_gJ_g+\rho_l\left(1-\alpha\right)Au_lJ_l\right]\frac{\partial p}{\partial x}+\left(\rho_g\alpha A\right)\left(\frac{\partial\frac{u_g^2}{2}}{\partial t}+u_g^2\frac{\partial u_g}{\partial x}\right)+\left[\rho_l\left(1-\alpha\right)A\right]\left(\frac{\partial\frac{u_l^2}{2}}{\partial t}+u_l^2\frac{\partial u_l}{\partial x}\right)=\left(h_{Fg}-h_g\right)\frac{\mathrm{\Gamma}_g}{\mathrm{\Delta L}}+\left(h_{Flp}-h_l\right)\frac{\mathrm{\Gamma}_{lp}}{\mathrm{\Delta l}}+\left(h_{Flc}-h_l\right)\frac{\mathrm{\Gamma}_{lc}}{\mathrm{\Delta l}}-\left(h_g-h_l\right)\psi-\left[\rho_gu_g\alpha_g+\rho_lu_l\left(1-\alpha\right)\right]Ag+Q_w-\frac{A}{\rho_l}p\left(1-\alpha\right)\left(\rho_{lc}-\rho_{lp}\right)\frac{\partial\beta}{\partial t}$$

(141)

(141) é a forma atual da equação que está sendo utilizada no simulador para o cálculo da temperatura em processos transientes.

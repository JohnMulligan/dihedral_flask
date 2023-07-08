function p_12_2016_1_4154721171687041(){


  background(0);

let A_x=[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
let A_y=[1000.0, 1000.0, 1000.0, 1000.0, 1000.0, 1000.0, 1000.0, 1000.0, 1000.0, 1000.0, 1000.0, 1000.0, 1000.0, 1000.0, 1000.0, 1000.0, 1000.0, 1000.0, 1000.0, 1000.0];
let A_z=[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
let B_x=[499.99999999999994, 499.99999999999994, 499.99999999999994, 499.99999999999994, 499.99999999999994, 499.99999999999994, 499.99999999999994, 499.99999999999994, 499.99999999999994, 499.99999999999994, 499.99999999999994, 499.99999999999994, 499.99999999999994, 499.99999999999994, 499.99999999999994, 499.99999999999994, 499.99999999999994, 499.99999999999994, 499.99999999999994, 499.99999999999994];
let B_y=[866.0254037844387, 866.0254037844387, 866.0254037844387, 866.0254037844387, 866.0254037844387, 866.0254037844387, 866.0254037844387, 866.0254037844387, 866.0254037844387, 866.0254037844387, 866.0254037844387, 866.0254037844387, 866.0254037844387, 866.0254037844387, 866.0254037844387, 866.0254037844387, 866.0254037844387, 866.0254037844387, 866.0254037844387, 866.0254037844387];
let B_z=[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
let C_x=[866.025403784439, 865.331970670327, 863.255518123861, 859.807565192685, 855.007239274706, 848.881170009526, 841.463341551447, 832.794904043569, 822.923945338817, 811.905224234263, 799.799866698619, 786.675026778072, 772.603514061569, 757.663389772176, 741.937533725182, 725.513184555234, 708.481455763069, 690.936830266568, 672.976636260082, 654.700507289691];
let C_y=[500.0, 499.814195157069, 499.257811374121, 498.333935170672, 497.047691717544, 495.406216405162, 493.418615260227, 491.095914430351, 488.450999016892, 485.498541595303, 482.254920819537, 478.738130562039, 474.967680093368, 470.964485855204, 466.750755427124, 462.34986433083, 457.786226355263, 453.085158121969, 448.272738642025, 443.375664643642];
let C_z=[0.0, 19.263808370602, 38.4207514401793, 57.3645567392151, 75.9901341724963, 94.1941590027291, 111.875645040894, 128.936504863588, 145.282093949559, 160.821735716872, 175.469224548066, 189.143304012785, 201.768117634984, 213.273629704062, 223.59601379551, 232.678006845764, 240.469226817039, 246.926452189914, 252.0138617332, 255.703233220958];
let D_x=[1000.0, 997.227933255025, 988.947034868713, 975.262573055611, 956.347883721045, 932.4412501075418, 903.8416259094658, 870.9032910622017, 834.0295515261473, 793.6656140722665, 750.2907839072276, 704.4101465872176, 656.545905766438, 607.2285546929, 556.98806186609, 506.345249859734, 455.803541025416, 405.841234752127, 356.904468368131, 309.400997918538];
let D_y=[0.0, 0.372056011907, 1.491498674374, 3.368015403392, 6.017300389881, 9.460389093689, 13.722749755591, 18.833154512494, 24.822358262648, 31.721618348074, 39.561092288109, 48.368154114978, 58.16567225275, 68.970293288734, 80.790776376928, 93.626422375151, 107.465640162305, 122.284689944144, 138.046639791028, 154.700567236685];
let D_z=[0.0, 52.5834291830201, 104.5987915350468, 155.4872954873017, 204.7085128405233, 251.7490966076931, 296.130953483911, 337.418707616555, 375.226307650853, 409.222647511776, 439.136092645794, 464.757827017766, 485.943961520361, 502.616371048346, 514.76225473312, 522.432441125532, 525.738486858103, 524.848642924516, 519.982786623561, 511.406438903342];
let E_x=[866.025403784439, 860.029640799527, 842.189578935974, 812.942136111715, 772.999815578939, 723.3278039727778, 665.1131559230668, 599.7272472274836, 528.6829263718033, 453.5879803385845, 376.0966475831626, 297.8609543862386, 220.483619510483, 145.474168598717, 74.209729727314, 7.901753622506, -52.430372547035, -105.97815698752, -152.154946971139, -190.598981554448];
let E_y=[-500.0, -497.276174465999, -489.121302711289, -475.585454865982, -456.752905041968, -432.74327063408, -403.712920247147, -369.856476800894, -331.408211481317, -288.643105936773, -241.877355804307, -191.468098886446, -137.812175877815, -81.343769472624, -22.530817232668, 38.1298476358663, 100.11860839867342, 162.90034260876, 225.9327110472587, 288.675240060076];
let E_z=[0.0, 90.9508591285947, 180.1667786445754, 265.9628199186847, 346.7522219734713, 421.0910063646521, 487.717412970068, 545.584786002869, 593.886802751973, 632.074254863207, 659.862939012843, 677.232574924645, 684.417027648909, 681.886451904252, 670.322284118557, 650.586269324845, 623.6849143081, 590.730897204471, 552.9030321376705, 511.4063838262017];
let F_x=[500.0, 490.828832112604, 463.714854188039, 419.836140721274, 361.089038309901, 289.9917260109518, 209.5573586631578, 123.1442869116257, 34.2920940516733, -53.4471425692105, -136.6729041792524, -212.2866870893314, -277.621057276273, -330.541064647982, -369.513688367407, -393.643095114009, -402.671651968469, -396.948695138381, -377.370878454436, -345.299397807592];
let F_y=[-866.02540378444, -858.590642659141, -836.413777883194, -799.874993645712, -749.600989357491, -686.45445342529, -611.519129956084, -526.080355396986, -431.601002737677, -329.6928879514383, -222.0838641378537, -110.5810439485733, 2.969165129328, 116.723275408889, 228.884008224126, 337.7432828657913, 441.72339198166543, 539.414791879155, 629.6089711925677, 711.324995861709];
let F_z=[0.0, 123.9934130606301, 244.1512443145745, 356.8097453330693, 458.6392342379323, 546.7877513283481, 618.998360637338, 673.694013321168, 710.025951746561, 727.8839201666094, 727.8687983496952, 711.2305259145083, 679.7761852132303, 635.7547287614912, 581.7259737778547, 520.422079495177, 454.609752165411, 386.960909596068, 319.9385420703495, 255.7031230666767];
let G_x=[0.0, -10.560568603699, -41.433614943193, -90.255780742088, -153.291460332755, -225.7193758740592, -301.9987744599712, -376.2842817045613, -442.8548979251657, -496.5222728628275, -532.9862008098374, -549.1108836597793, -543.103289194408, -514.584064289446, -464.5510223915583, -395.2442832062806, -309.9298657625132, -212.624266716461, -107.785873819027, 0.000182073099];
let G_y=[-1000.0, -985.889506890102, -943.996859843431, -875.6225356595411, -782.8811070316025, -668.6237059626354, -536.3330823112581, -389.994890504759, -233.949869575767, -72.7325488759133, 89.0970528681543, 247.1216446654527, 397.227380113469, 535.749704605331, 659.597438573657, 766.3491282428083, 854.3170539652654, 922.576015512834, 970.9560091429277, 1000.000033321651];
let G_z=[0.0, 142.7779930659781, 278.7936611100989, 401.7289390902479, 506.1190069296037, 587.6939399628117, 643.6270702014565, 672.6724820323301, 675.1838789265182, 653.0173355737179, 609.3301960455362, 548.2966755515603, 474.76682717218426, 393.8989487003752, 310.7960225187837, 230.174499080682, 156.089026564308, 91.730196048846, 39.3047640083235, -5.50771222938466e-05];
let H_x=[-500.0, -508.587277437529, -533.054720988082, -569.667925338314, -612.680944929788, -654.9933720392742, -688.9581918391582, -707.2458427251763, -703.6651155578417, -673.8490359151625, -615.7323924902164, -529.77438011392, -418.911191739902, -288.25514301379, -144.5850131469413, 4.3066024731254, 150.3312323111828, 285.808244417034, 404.082559085775, 500.000141019044];
let H_y=[-866.02540378444, -844.757351790355, -782.011471196897, -680.9000448677041, -546.4056404978675, -385.0877194503484, -204.6980589731901, -13.729391318684, 179.073864342138, 365.2112365330387, 536.8960863870973, 687.4693033460437, 811.730304356539, 906.164829261796, 969.056701645606, 1000.4794960468583, 1002.1731889772655, 977.3195612138101, 930.2375567348075, 866.025283890415];
let H_z=[0.0, 142.2261632346797, 274.47922170824694, 387.7168148902859, 474.6571633656615, 530.4193993713747, 552.9087532625159, 542.9115029971472, 503.8986839153262, 441.5707646434319, 363.2036315039982, 276.8759107669543, 190.6667723412883, 111.9112765388692, 46.5879419115447, -1.10726210222, -28.971713114407, -36.78971867398, -26.1315214928644, 5.50771884244114e-05];
let I_x=[-866.02540378444, -870.122892864951, -881.062595116755, -894.972466941316, -905.995955283459, -907.1064348333063, -891.0965121549912, -851.6150094123172, -784.1185045137495, -686.6155506169029, -560.1085947670645, -408.677558867445, -239.194832007493, -60.707947240624, 116.4326892462037, 281.5933558436014, 424.9005328111298, 538.185751861324, 615.725644309718, 654.700571355572];
let I_y=[-500.0, -478.840231451918, -416.6799952555, -317.3891499490551, -187.1317452826145, -33.9563130741034, 132.7408048386499, 302.844114153864, 466.197559031847, 613.2862862717727, 735.8730769284483, 827.5426468888307, 884.1124591336281, 903.877833535796, 887.6715619850579, 838.7330910500513, 762.3983821873884, 665.6372685278681, 556.4788359910855, 443.375483261133];
let I_z=[0.0, 84.38282090501149, 158.83915658353493, 214.5522200130029, 244.7924958997565, 245.6476812250977, 216.4205586993379, 159.65186283918814, 80.7717188275832, -12.5712596514181, -111.4155240229178, -206.5123500998677, -289.3457755629117, -353.0255318313028, -392.9520568496253, -407.185270995823, -396.488969420781, -364.06473237555, -315.0273774271944, -255.70312306662657];
let J_x=[-1000.0, -997.425785762897, -988.869615387279, -971.9975087141848, -943.4477117614395, -899.5322372379513, -837.0518998196917, -754.0892927430759, -650.6453231265265, -529.0076015558368, -393.7799254463055, -251.555039454663, -110.269396396865, 21.6704456583397, 136.3633621199313, 227.3482747192098, 290.3616995792728, 323.810736953915, 328.899475421241, 309.401026085309];
let J_y=[0.0, 12.935679386896, 50.601878098547, 109.6779555134699, 184.9606475965215, 269.8316641123376, 356.8558905576869, 438.458022773762, 507.6168360562005, 558.5125261954142, 587.0645932035053, 591.3060878200228, 571.5545803076501, 530.360001743346, 472.2327477534479, 403.1795689394463, 330.0967793921794, 260.0871371888291, 199.7758057979025, 154.700477581376];
let J_z=[0.0, -15.11401024853942, -36.03128665053708, -67.6357010659801, -113.1094592909235, -173.4044502321653, -247.0455141277871, -330.29384314068386, -417.6443180053718, -502.5802004177851, -578.4701261462538, -639.4719261388467, -681.3087800257517, -701.8054368538898, -701.1120028837393, -681.593348468005, -647.41489276158, -603.901419280335, -556.7770196666004, -511.4063838261946];
let K_x=[-866.02540378444, -856.079451607399, -826.554551590015, -778.4451932339579, -713.5715862658185, -634.7501061898123, -545.9039768161067, -452.0271882973119, -358.9381938786345, -272.8041031753608, -199.4718081705755, -143.697161684301, -108.40357707946127, -94.1161444459653, -98.7006615761047, -117.4899976226232, -143.8113635761012, -169.851465805272, -187.728818072049, -190.598912333602];
let K_y=[500.0, 497.61811644628, 490.14270140349, 476.6702911471589, 455.9676440742565, 426.8346930078336, 388.5268024329492, 341.1636611164195, 286.0492111375415, 225.8354051958942, 164.4821986308483, 106.9951997132417, 58.9571922245761, 25.90514878524599, 12.6343706415139, 22.5302137672553, 57.03108689530641, 115.3121327530821, 194.24853469726781, 288.675303620484];
let K_z=[0.0, -129.36523106520642, -256.0469159681451, -377.1568137376251, -489.4887456741605, -589.5650735813333, -673.8698722691871, -739.2455330486819, -783.3818342174447, -805.2927588163501, -805.6653457022958, -786.9806862014347, -753.347858863609, -710.0491805523067, -662.857212974057, -617.236322694469, -577.5717023805352, -546.5688797525697, -524.9360387220551, -511.4064389033424];
let L_x=[-500.0, -484.297057736379, -439.167033871341, -370.3466739427109, -286.7366224741025, -199.43344327021828, -120.4380546113787, -61.1375181087119, -30.7139654717945, -34.6870445496928, -73.8255579006715, -143.65208962898473, -234.70114072856228, -333.5791681929753, -424.7311928392667, -492.6727763760832, -524.3331478523852, -511.106192697183, -450.238814358107, -345.299251633511];
let L_y=[866.02540378444, 844.172545412099, 779.950399118748, 677.3478266070939, 542.9293320198645, 385.659628164545, 216.5726104823112, 48.2309012121355, -106.0546678810075, -233.2349355964688, -321.6980273577507, -362.4930095801083, -350.4413858931049, -284.957691528176, -170.4148182586741, -15.9397443043016, 165.3941588761574, 357.9142038922051, 545.0743608183178, 711.325120910577];
let L_z=[0.0, -227.48287373380893, -440.14363481960106, -624.4083410233651, -769.1291772031275, -866.6087695046183, -913.3687184964701, -910.5489374101569, -863.834282138359, -782.845464383345, -680.0030996539468, -568.9668982563487, -462.8467020971759, -372.4533464528066, -304.881963049768, -262.684299312933, -243.7906232984672, -242.2029176542117, -249.3295547498861, -255.70323322093242];
let M_x=[0.0, 17.409536698325, 65.775717935367, 134.1582547729811, 206.3956411637475, 263.9218217882007, 289.1416445513013, 268.8443401736701, 197.0734972630675, 76.8986381334452, -79.33274223663126, -251.44428961558074, -414.4479709378033, -542.6657836401413, -614.2234150591537, -615.0504445647742, -541.574052574888, -401.535124991432, -212.740093317525, 0.000364146282];
let M_y=[1000.0, 958.907520624401, 839.5904798901407, 653.6167397975544, 419.2252400637345, 159.784656030225, -98.3008935599388, -328.1285491984555, -505.0867032443025, -609.6254709215888, -629.6689126985347, -562.3076819113323, -414.4523727394193, -202.2423031403747, 50.8173047594299, 316.8028873709084, 567.0112413737974, 775.744194902988, 923.6383323721698, 1000.000066643279];
let M_z=[0.0, -282.9407045143884, -537.226437594195, -737.8138296539371, -866.4279984901389, -913.8484534269508, -880.9906562153438, -778.5840567703958, -625.432312755192, -445.461420941849, -263.9829112805568, -103.7743243965147, 18.34230756930909, 93.79781354127638, 123.017835845006, 114.483090350703, 82.3315358406398, 43.0364067119673, 11.8846664873609, 6.558993e-11];
let first_x=[-211.32486540518747, -211.32486540518747, -211.32486540518747, -211.32486540518747, -211.32486540518747, -211.32486540518747, -211.32486540518747, -211.32486540518747, -211.32486540518747, -211.32486540518747, -211.32486540518747, -211.32486540518747, -211.32486540518747, -211.32486540518747, -211.32486540518747, -211.32486540518747, -211.32486540518747, -211.32486540518747, -211.32486540518747, -211.32486540518747];
let first_y=[788.6751345948124, 788.6751345948124, 788.6751345948124, 788.6751345948124, 788.6751345948124, 788.6751345948124, 788.6751345948124, 788.6751345948124, 788.6751345948124, 788.6751345948124, 788.6751345948124, 788.6751345948124, 788.6751345948124, 788.6751345948124, 788.6751345948124, 788.6751345948124, 788.6751345948124, 788.6751345948124, 788.6751345948124, 788.6751345948124];
let first_z=[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
let B_C_x=[577.3502691896259, 577.3502691896259, 577.3502691896259, 577.3502691896259, 577.3502691896259, 577.3502691896259, 577.3502691896259, 577.3502691896259, 577.3502691896259, 577.3502691896259, 577.3502691896259, 577.3502691896259, 577.3502691896259, 577.3502691896259, 577.3502691896259, 577.3502691896259, 577.3502691896259, 577.3502691896259, 577.3502691896259, 577.3502691896259];
let B_C_y=[577.3502691896257, 577.3502691896257, 577.3502691896257, 577.3502691896257, 577.3502691896257, 577.3502691896257, 577.3502691896257, 577.3502691896257, 577.3502691896257, 577.3502691896257, 577.3502691896257, 577.3502691896257, 577.3502691896257, 577.3502691896257, 577.3502691896257, 577.3502691896257, 577.3502691896257, 577.3502691896257, 577.3502691896257, 577.3502691896257];
let B_C_z=[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
let D_E_x=[788.675134594813, 785.3964012776245, 775.6098169619706, 759.463256921503, 737.199961986908, 709.153784025738, 675.742672813334, 637.460543711848, 594.867700098725, 548.580015190686, 499.257104121293, 447.589738275728, 394.286769503796, 340.061841581831, 285.620169966206, 231.645668399942, 178.788692359914, 127.654654860142, 78.793750081905, 32.69199513199];
let D_E_y=[-211.324865405191, -210.444923435642, -207.801558140853, -203.384357594987, -197.176650751354, -189.156512331705, -179.298133393265, -167.573522295046, -153.954492108105, -138.414882846434, -120.93296041301, -101.493929010281, -80.092490076553, -56.735378667765, -31.443807661625, -4.255751235693, 24.771998255493, 55.562061661278, 88.015048657356, 122.008526586419];
let D_E_z=[0.0, 52.5567128577642, 104.3859493580819, 154.7739283779186, 203.0339692416663, 248.5193232433471, 290.635160372212, 328.84945863364, 362.702567380335, 391.815245086643, 415.895005370341, 434.74064205448, 448.24484384979, 456.394850947472, 459.271148521872, 457.044234910082, 449.9695441173, 438.380642368997, 422.680855810268, 403.333520315762];
let F_G_x=[211.324865405187, 203.037406310279, 178.622607999346, 139.397409272334, 87.472386579482, 25.6310048030758, -42.8283866254762, -114.2777170335553, -184.9598123463187, -251.1919724165125, -309.5600863833934, -357.0917813322204, -391.3987765104, -410.780914718202, -414.287083011242, -401.731206846312, -373.664484016801, -331.307801818368, -276.450660069068, -211.3247480886455];
let F_G_y=[-788.67513459481, -780.364397102196, -755.603437340775, -714.90254888457, -659.100655378109, -589.34791480384, -507.081314216929, -413.9932992524306, -311.9936183671866, -203.1647675574372, -89.711691004726, 26.093288869921, 141.968996057943, 255.685727893679, 365.125434950912, 468.3395814770613, 563.6023955965824, 649.457229571718, 724.7539062630237, 788.675232673036];
let F_G_z=[0.0, 104.6763941971722, 205.3118635066067, 298.0713506353492, 379.5189781558384, 446.7871177480952, 497.71119851464823, 530.9225828298273, 545.8946853104043, 542.940646443922, 523.164065901795, 488.367319200244, 440.9246097846, 383.628965030049, 319.523734556756, 251.72971504341, 183.278791598252, 116.963997562116, 55.2142546909515, -8.68759402938466e-05];
let H_I_x=[-577.35026918963, -582.525156932389, -596.836075959867, -616.803466059292, -637.14574061253, -651.4844486042542, -653.1989277940093, -636.3200244008473, -596.3488793366337, -530.8983898516445, -440.0798141048569, -326.5913422589664, -195.504338159311, -53.780929818659, 90.4113878022907, 228.5004902350634, 352.3284829272528, 454.894853790916, 530.945150362987, 577.350321749547];
let H_I_y=[-577.35026918962, -557.749554264293, -500.09574095437, -407.7569756167871, -286.0960145843725, -142.1123501537324, 16.0232791180849, 179.509187175502, 339.489479509933, 487.6259802472997, 616.6242350592263, 720.6757868267797, 795.785295192642, 839.960124482468, 853.251086860666, 837.6451801582372, 796.8233099591014, 735.806976119565, 660.5266443960877, 577.350125593065];
let H_I_z=[0.0, 103.8059652642267, 198.5064813546904, 275.9693227566139, 329.8926307410487, 356.4451057284947, 354.6166368705935, 326.2440676183721, 275.7179368513142, 209.4153408678189, 134.9362630674812, 60.2417028035793, -7.20068817969071, -61.1643655620488, -97.2249525111523, -113.082633217097, -108.6268159504, -85.756924522161, -48.0016878591152, 8.68759946010644e-05];
let J_K_x=[-788.67513459481, -783.3264093135705, -766.885508404114, -738.298936434042, -696.220278774708, -639.5372859883201, -567.9516439786792, -482.4878089596823, -385.8149207459005, -282.2954489737468, -177.7212427778085, -78.754093967456, 7.856232406507, 76.15865039593, 121.84904002479459, 142.9369969212894, 140.1136181125308, 116.750366319183, 78.519815656134, 32.691991066447];
let J_K_y=[211.32486540519, 217.953311078267, 236.971447768075, 265.8774381465499, 300.8240214869535, 337.0676974378816, 369.5312699064709, 393.4198224429308, 404.8221872739478, 401.2285750463257, 381.9011331979883, 348.0479867871887, 302.7720408891401, 250.79167195750298, 197.9585614006019, 150.6247148105893, 114.93226041897842, 96.1123672820371, 97.8810237001115, 122.008527675794];
let J_K_z=[0.0, -53.13538813934052, -108.87246473767408, -169.1398705193791, -234.6441146224585, -304.5468866301103, -376.4316978635311, -446.57192359726685, -510.4587330155798, -563.5003937553521, -601.7724393180098, -622.6872010096967, -625.4636387815287, -611.3124426373688, -583.3011263415303, -545.920288085648, -504.424888678647, -464.0633871729757, -429.3255511219424, -403.33352031575157];
let last_x=[-211.324865405191, -196.895350261148, -155.839703049859, -94.5846271741099, -22.9520337383135, 47.10956945060872, 103.1571429419623, 134.0821175357321, 131.9096542861775, 93.2985575481002, 20.4669039081025, -78.6829995488799, -191.35926361341006, -301.5584145723853, -392.4153062271867, -448.8576601407752, -460.1025207482082, -421.527869006016, -335.550397650647, -211.3246307720095];
let last_y=[788.67513459481, 764.591032896329, 694.099697772456, 582.4162027246219, 437.9930633771506, 272.1201978234156, 98.2992789448432, -68.6377452465595, -213.6629718462645, -322.8861505794878, -384.9753771397987, -392.4993665230183, -342.9929165106479, -239.547912891917, -90.7741259860551, 89.9441160906959, 285.8587811781634, 478.7808094992901, 651.2562349708168, 788.675330751287];
let last_z=[0.0, -207.9012782149048, -399.2574737749451, -559.1421336410971, -675.7350245709885, -741.5418349720013, -754.2052674307721, -716.7773945799441, -637.3604234005868, -528.093147838863, -403.5590616866888, -278.8030939074577, -167.24156095611792, -78.80556284323461, -18.648769510207, 13.332441436938, 22.0647862618318, 16.0283450750293, 5.4024105619719, 2.758993e-11];


let sec=floor(millis()/1000);
let steparray=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let t=steparray[sec%38];

background(0)

let angle=((sec*5)%360);




//adapted from
//from https://discourse.processing.org/t/how-to-rotate-around-a-sphere/25072/24
//and math.fandom.com/wiki/Ellipsoid
//and Simon Greenwold.

  let latitude = (frameCount%360)*3.141/180;
  let longitude = (((frameCount-(latitude/2))/5)%360)*3.141/180;
  let radius=5000;
  
  let cam_x = radius * cos(latitude)*cos(longitude);
  let cam_y = radius * cos(latitude)*sin(longitude);
  let cam_z = radius * sin(latitude);
  camera(cam_x, cam_y, cam_z, 0, 0, 0, 0, 1, 0);

/**
 * Points and Lines. 
 * 
 * Points and lines can be used to draw basic geometry.
 * Change the value of the variable 'd' to scale the form.
 * The four variables set the positions based on the value of 'd'. 
 */




//let cam_x=350 * cos(angle);
//let cam_y=350*sin(angle);
//let cam_x=350*cos(angle);
//let cam_y=350*sin(angle);
//console.log(angle,cam_x,cam_y);

//camera(cam_x,cam_y,-900,0,0,0,0,1,0);


fill(127);

beginShape();
vertex(A_x[t],A_y[t],A_z[t]);
vertex(B_x[t],B_y[t],B_z[t]);
vertex(B_C_x[t],B_C_y[t],B_C_z[t]);
vertex(first_x[t],first_y[t],first_z[t]);
endShape(CLOSE);
beginShape();
vertex(B_x[t],B_y[t],B_z[t]);
vertex(B_C_x[t],B_C_y[t],B_C_z[t]);
vertex(C_x[t],C_y[t],C_z[t]);
endShape(CLOSE);
beginShape();
vertex(B_C_x[t],B_C_y[t],B_C_z[t]);
vertex(C_x[t],C_y[t],C_z[t]);
vertex(D_x[t],D_y[t],D_z[t]);
vertex(D_E_x[t],D_E_y[t],D_E_z[t]);
endShape(CLOSE);
beginShape();
vertex(D_x[t],D_y[t],D_z[t]);
vertex(D_E_x[t],D_E_y[t],D_E_z[t]);
vertex(E_x[t],E_y[t],E_z[t]);
endShape(CLOSE);
beginShape();
vertex(D_E_x[t],D_E_y[t],D_E_z[t]);
vertex(E_x[t],E_y[t],E_z[t]);
vertex(F_x[t],F_y[t],F_z[t]);
vertex(F_G_x[t],F_G_y[t],F_G_z[t]);
endShape(CLOSE);
beginShape();
vertex(F_x[t],F_y[t],F_z[t]);
vertex(F_G_x[t],F_G_y[t],F_G_z[t]);
vertex(G_x[t],G_y[t],G_z[t]);
endShape(CLOSE);
beginShape();
vertex(F_G_x[t],F_G_y[t],F_G_z[t]);
vertex(G_x[t],G_y[t],G_z[t]);
vertex(H_x[t],H_y[t],H_z[t]);
vertex(H_I_x[t],H_I_y[t],H_I_z[t]);
endShape(CLOSE);
beginShape();
vertex(H_x[t],H_y[t],H_z[t]);
vertex(H_I_x[t],H_I_y[t],H_I_z[t]);
vertex(I_x[t],I_y[t],I_z[t]);
endShape(CLOSE);
beginShape();
vertex(H_I_x[t],H_I_y[t],H_I_z[t]);
vertex(I_x[t],I_y[t],I_z[t]);
vertex(J_x[t],J_y[t],J_z[t]);
vertex(J_K_x[t],J_K_y[t],J_K_z[t]);
endShape(CLOSE);
beginShape();
vertex(J_x[t],J_y[t],J_z[t]);
vertex(J_K_x[t],J_K_y[t],J_K_z[t]);
vertex(K_x[t],K_y[t],K_z[t]);
endShape(CLOSE);
beginShape();
vertex(J_K_x[t],J_K_y[t],J_K_z[t]);
vertex(K_x[t],K_y[t],K_z[t]);
vertex(L_x[t],L_y[t],L_z[t]);
vertex(last_x[t],last_y[t],last_z[t]);
endShape(CLOSE);
beginShape();
vertex(L_x[t],L_y[t],L_z[t]);
vertex(M_x[t],M_y[t],M_z[t]);
vertex(last_x[t],last_y[t],last_z[t]);
endShape(CLOSE);
}
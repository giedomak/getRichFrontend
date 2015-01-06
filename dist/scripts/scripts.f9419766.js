"use strict";var app=angular.module("getRichFrontendApp",["n3-line-chart","ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","tc.chartjs"]);app.config(["$routeProvider",function(a){return a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("getRichFrontendApp").controller("MainCtrl",["$scope",function(a){var b,c,d,e,f,g,h,i,j,k,l;for(a.setData=function(){},i=[[.03359771963223802,.0376312860532947,.04339390687794608,.03782577788820997,.0359872392366991,.037699356365101924,.03887191346276788,.03612800806676917,.04168339996088416,.03874396969114345,.03632780973428463,.03593865683679761,.04120069429325448,.03726251417040181,.034229604414740065,.039302676956999724,.037975141138447306,.04070051854524684,.038321475045997686,.03816456770101316,.03811441763736462,.04050720576271849,.03841630307000448,.03803557151644164,.03787326993478024,.04051411721392645,.03951102931734034,.04565680785423933,.040229842907979825,.03765603839544278,.03990118307884121],[.010059025332666713,.01027200843829804,.011273232521246427,.011270925488597754,.01191556205449385,.011608164125321464,.011615994144003447,.011024924820028164,.010946029207351975,.012498646515346275,.011428267720810346,.01268762622990204,.014729562379088706,.012859698402351181,.01461369728378951,.0143468712376559,.012212796187641565,.011094318358649062,.011555460458719101,.011193668099874128,.011569346297845872,.011554760958813411,.01272904825013273,.012780039121935375,.01112472444173593,.010642217564708399,.010540004679228667,.010818991521745975,.01159943666015384,.01274426132197808,.013207076943404188],[.033681246287455856,.0355058578033389,.03668451957685485,.034814049944535845,.0333190184411901,.03496256916002998,.03607709680814943,.032547588623510676,.03483278563899458,.03478057104402993,.03645862247943793,.03288831084995285,.03462253563843722,.03404575937548947,.031590734231117,.03610532235164405,.03551756202602854,.03540412956590881,.03480402167729398,.033200336153330706,.03492842467031559,.0346278796249,.03810303775601571,.03743150705343009,.03552608517672394,.035499243631881734,.03765801918788235,.03641444059086223,.0368711555205363,.03641292481622806,.03334853272134506],[.02214437601838612,.023409074980095385,.02256524381054909,.02468535690764407,.02303452622885403,.022182948189810817,.02312945463852163,.023459203204939855,.026409024632069004,.02504440919481264,.02472696463235008,.020667767940016558,.02468637713099769,.023488578192825106,.02308685020674137,.02558276258539117,.024513702175909913,.02343766811156232,.028532769994680456,.021494932485672053,.020572621357378303,.021950017657705337,.02703357503003634,.02658388597596631,.019456383786776967,.02190888610744963,.02542299501993127,.022850065258352703,.022040456006273145,.023757395876448765,.025911079980001014],[.1962974724918132,.17480566804023678,.17035107907906819,.1808749182809768,.17734561983512206,.17724448475161256,.17135563022737896,.1817630532710713,.1696298449603427,.18243321722982878,.1788215131939619,.17278565184365446,.17541729145606613,.176485811391839,.1769681139184373,.17318944083348148,.17481882617846645,.177665912064859,.17260482998953008,.17759014721594443,.1815737614859163,.16753175627952166,.17342144271896168,.17496896596440378,.16334775702158036,.16958164211727558,.17585235803342747,.17470130330210568,.16886662142126677,.1731572304219096,.16860026845044712],[.052717625907762126,.04669037178743755,.047960512452064244,.04605098903781652,.047247455559569745,.04897109872019173,.04997536449171489,.04804291503696345,.04469709438583833,.04520038919743286,.04790149040722075,.048373397926084055,.04493966532029771,.045338158029648905,.04606826339682152,.047450897074769384,.04646647198626624,.044426123018958194,.04506518850079885,.04313786014019032,.042641947314686346,.04393745940304382,.04438671361476531,.049412573350649296,.04752131913858536,.04568364558217926,.04640970974737578,.04792200418714735,.0470305525500568,.047732694845362876,.047834491900514774],[.013122164661337069,.01556548070751146,.018139643791456554,.015490845229286114,.015008019737213087,.015376717931769687,.015560232133016967,.014636269657850445,.01546647669442684,.01515524595472536,.016317555043224203,.014584860491772112,.0156565806663897,.01730130275053191,.01512996808879002,.01636250890449469,.017686981614911383,.016140115770611543,.016207037394261853,.013506190699681515,.016156541687296692,.015450401555139331,.015271376030796854,.015287488990426054,.013250460741657926,.016277710507847667,.01486925360683054,.017251534417054206,.016527380518817573,.01684747808946912,.015325660099098836],[.017840041453241,.01614552405648308,.017841256136612124,.017902132607679234,.015309171855504582,.01552183225181753,.016349573231170943,.017429847512702396,.015698006297200598,.016339060133510067,.01678242800050584,.02017314410309363,.017619926704136566,.017589112908174394,.016617936263663168,.016440842202076308,.016713526042733566,.01783498327576625,.017030436533627295,.01609693232865554,.020685327886022103,.020568846132016483,.019049517482531687,.020159346911896,.019642302936206824,.01624688965502304,.016257305815242633,.016581401527249528,.01669804777387676,.01681033197085552,.015801788333754185]],j=["9/13","9/12","9/11","9/10","9/17","9/16","9/15","9/14","9/30","9/19","9/18","9/28","9/29","9/26","9/27","9/24","9/25","9/22","9/23","9/20","9/21","10/1","9/9","9/8","9/7","9/6","9/5","9/4","9/3","9/2","9/1"],g="joy,trust,fear,surprise,sadness,disgust,anger,anticipation".split(","),a.data={labels:j,datasets:[]},h=k=0,l=i.length;l>k;h=++k)f=i[h],b=Math.floor(100*Math.random()+150),c=Math.floor(100*Math.random()+150),d=Math.floor(100*Math.random()+150),e={label:g[h],fillColor:"rgba("+b+","+c+","+d+",0.2)",strokeColor:"rgba("+b+","+c+","+d+",1)",pointColor:"rgba("+b+","+c+","+d+",1)",pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba("+b+","+c+","+d+",1)",data:f},a.data.datasets.push(e);return a.options={animation:!1,responsive:!0,scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,bezierCurve:!0,bezierCurveTension:.4,pointDot:!0,pointDotRadius:4,pointDotStrokeWidth:1,pointHitDetectionRadius:20,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,onAnimationProgress:function(){},onAnimationComplete:function(){},legendTemplate:'<ul class="tc-chart-js-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'}}]),angular.module("getRichFrontendApp").controller("AboutCtrl",["$scope",function(a){var b=new Date("September 1, 2013"),c=new Date("September 2, 2013"),d=new Date("September 3, 2013"),e=new Date("September 4, 2013"),f=new Date("September 5, 2013"),g=new Date("September 6, 2013"),h=new Date("September 7, 2013"),i=new Date("September 8, 2013"),j=new Date("September 9, 2013"),k=new Date("September 10, 2013"),l=new Date("September 11, 2013"),m=new Date("September 12, 2013"),n=new Date("September 13, 2013"),o=new Date("September 14, 2013"),p=new Date("September 15, 2013"),q=new Date("September 16, 2013"),r=new Date("September 17, 2013"),s=new Date("September 18, 2013"),t=new Date("September 19, 2013"),u=new Date("September 20, 2013"),v=new Date("September 21, 2013"),w=new Date("September 22, 2013"),x=new Date("September 23, 2013"),y=new Date("September 24, 2013"),z=new Date("September 25, 2013"),A=new Date("September 26, 2013"),B=new Date("September 27, 2013"),C=new Date("September 28, 2013"),D=new Date("September 29, 2013"),E=new Date("September 30, 2013");a.data=[{x:b,joy:.03990118307884121,trust:.013207076943404188,fear:.03334853272134506,surprise:.025911079980001014,sadness:.16860026845044712,disgust:.047834491900514774,anger:.015325660099098836,anticipation:.015801788333754185,Stock:70.31},{x:c,joy:.03765603839544278,trust:.01274426132197808,fear:.03641292481622806,surprise:.023757395876448765,sadness:.1731572304219096,disgust:.047732694845362876,anger:.01684747808946912,anticipation:.01681033197085552,Stock:70.31},{x:d,joy:.040229842907979825,trust:.01159943666015384,fear:.0368711555205363,surprise:.022040456006273145,sadness:.16886662142126677,disgust:.0470305525500568,anger:.016527380518817573,anticipation:.01669804777387676,Stock:70.31},{x:e,joy:.04565680785423933,trust:.010818991521745975,fear:.03641444059086223,surprise:.022850065258352703,sadness:.17470130330210568,disgust:.04792200418714735,anger:.017251534417054206,anticipation:.016581401527249528,Stock:70.84},{x:f,joy:.03951102931734034,trust:.010540004679228667,fear:.03765801918788235,surprise:.02542299501993127,sadness:.17585235803342747,disgust:.04640970974737578,anger:.01486925360683054,anticipation:.016257305815242633,Stock:70.75},{x:g,joy:.04051411721392645,trust:.010642217564708399,fear:.035499243631881734,surprise:.02190888610744963,sadness:.16958164211727558,disgust:.04568364558217926,anger:.016277710507847667,anticipation:.01624688965502304,Stock:70.28},{x:h,joy:.03787326993478024,trust:.01112472444173593,fear:.03552608517672394,surprise:.019456383786776967,sadness:.16334775702158036,disgust:.04752131913858536,anger:.013250460741657926,anticipation:.019642302936206824,Stock:71.14},{x:i,joy:.03803557151644164,trust:.012780039121935375,fear:.03743150705343009,surprise:.02658388597596631,sadness:.17496896596440378,disgust:.049412573350649296,anger:.015287488990426054,anticipation:.020159346911896,Stock:71.14},{x:j,joy:.03841630307000448,trust:.01272904825013273,fear:.03810303775601571,surprise:.02703357503003634,sadness:.17342144271896168,disgust:.04438671361476531,anger:.015271376030796854,anticipation:.019049517482531687,Stock:71.14},{x:k,joy:.03782577788820997,trust:.011270925488597754,fear:.034814049944535845,surprise:.02468535690764407,sadness:.1808749182809768,disgust:.04605098903781652,anger:.015490845229286114,anticipation:.017902132607679234,Stock:72.89},{x:l,joy:.04339390687794608,trust:.011273232521246427,fear:.03668451957685485,surprise:.02256524381054909,sadness:.17035107907906819,disgust:.047960512452064244,anger:.018139643791456554,anticipation:.017841256136612124,Stock:74.03},{x:m,joy:.0376312860532947,trust:.01027200843829804,fear:.0355058578033389,surprise:.023409074980095385,sadness:.17480566804023678,disgust:.04669037178743755,anger:.01556548070751146,anticipation:.01614552405648308,Stock:74.31},{x:n,joy:.03359771963223802,trust:.010059025332666713,fear:.033681246287455856,surprise:.02214437601838612,sadness:.1962974724918132,disgust:.052717625907762126,anger:.013122164661337069,anticipation:.017840041453241,Stock:74.21},{x:o,joy:.03612800806676917,trust:.011024924820028164,fear:.032547588623510676,surprise:.023459203204939855,sadness:.1817630532710713,disgust:.04804291503696345,anger:.014636269657850445,anticipation:.017429847512702396,Stock:73.89},{x:p,joy:.03887191346276788,trust:.011615994144003447,fear:.03607709680814943,surprise:.02312945463852163,sadness:.17135563022737896,disgust:.04997536449171489,anger:.015560232133016967,anticipation:.016349573231170943,Stock:73.89},{x:q,joy:.037699356365101924,trust:.011608164125321464,fear:.03496256916002998,surprise:.022182948189810817,sadness:.17724448475161256,disgust:.04897109872019173,anger:.015376717931769687,anticipation:.01552183225181753,Stock:73.89},{x:r,joy:.0359872392366991,trust:.01191556205449385,fear:.0333190184411901,surprise:.02303452622885403,sadness:.17734561983512206,disgust:.047247455559569745,anger:.015008019737213087,anticipation:.015309171855504582,Stock:74.67},{x:s,joy:.03632780973428463,trust:.011428267720810346,fear:.03645862247943793,surprise:.02472696463235008,sadness:.1788215131939619,disgust:.04790149040722075,anger:.016317555043224203,anticipation:.01678242800050584,Stock:75.94},{x:t,joy:.03874396969114345,trust:.012498646515346275,fear:.03478057104402993,surprise:.02504440919481264,sadness:.18243321722982878,disgust:.04520038919743286,anger:.01515524595472536,anticipation:.016339060133510067,Stock:74.98},{x:u,joy:.03816456770101316,trust:.011193668099874128,fear:.033200336153330706,surprise:.021494932485672053,sadness:.17759014721594443,disgust:.04313786014019032,anger:.013506190699681515,anticipation:.01609693232865554,Stock:74.75},{x:v,joy:.03811441763736462,trust:.011569346297845872,fear:.03492842467031559,surprise:.020572621357378303,sadness:.1815737614859163,disgust:.042641947314686346,anger:.016156541687296692,anticipation:.020685327886022103,Stock:74},{x:w,joy:.04070051854524684,trust:.011094318358649062,fear:.03540412956590881,surprise:.02343766811156232,sadness:.177665912064859,disgust:.044426123018958194,anger:.016140115770611543,anticipation:.01783498327576625,Stock:74},{x:x,joy:.038321475045997686,trust:.011555460458719101,fear:.03480402167729398,surprise:.028532769994680456,sadness:.17260482998953008,disgust:.04506518850079885,anger:.016207037394261853,anticipation:.017030436533627295,Stock:74},{x:y,joy:.039302676956999724,trust:.0143468712376559,fear:.03610532235164405,surprise:.02558276258539117,sadness:.17318944083348148,disgust:.047450897074769384,anger:.01636250890449469,anticipation:.016440842202076308,Stock:75.17},{x:z,joy:.037975141138447306,trust:.012212796187641565,fear:.03551756202602854,surprise:.024513702175909913,sadness:.17481882617846645,disgust:.04646647198626624,anger:.017686981614911383,anticipation:.016713526042733566,Stock:74.97},{x:A,joy:.03726251417040181,trust:.012859698402351181,fear:.03404575937548947,surprise:.023488578192825106,sadness:.176485811391839,disgust:.045338158029648905,anger:.01730130275053191,anticipation:.017589112908174394,Stock:75.79},{x:B,joy:.034229604414740065,trust:.01461369728378951,fear:.031590734231117,surprise:.02308685020674137,sadness:.1769681139184373,disgust:.04606826339682152,anger:.01512996808879002,anticipation:.016617936263663168,Stock:75.94},{x:C,joy:.03593865683679761,trust:.01268762622990204,fear:.03288831084995285,surprise:.020667767940016558,sadness:.17278565184365446,disgust:.048373397926084055,anger:.014584860491772112,anticipation:.02017314410309363,Stock:75.59},{x:D,joy:.04120069429325448,trust:.014729562379088706,fear:.03462253563843722,surprise:.02468637713099769,sadness:.17541729145606613,disgust:.04493966532029771,anger:.0156565806663897,anticipation:.017619926704136566,Stock:75.59},{x:E,joy:.04168339996088416,trust:.010946029207351975,fear:.03483278563899458,surprise:.026409024632069004,sadness:.1696298449603427,disgust:.04469709438583833,anger:.01546647669442684,anticipation:.015698006297200598,Stock:75.59}],a.options={axes:{x:{type:"date",key:"x"},y1:{type:"linear"},y2:{type:"linear"}},lineMode:"cardinal",tension:.3,series:[{y:"joy",axis:"y1",type:"area"},{y:"trust",axis:"y1",type:"area"},{y:"fear",axis:"y1",type:"area"},{y:"surprise",axis:"y1",type:"area"},{y:"sadness",axis:"y1",type:"area"},{y:"disgust",axis:"y1",type:"area"},{y:"anger",axis:"y1",type:"area"},{y:"anticipation",axis:"y1",type:"area"},{y:"Stock",axis:"y2",thickness:"10px",color:"#000000",type:"area"}],tooltip:{mode:"scrubber",formatter:function(a,b){return b}}}}]);
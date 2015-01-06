angular.module("getRichFrontendApp").controller('MainCtrl', function($rootScope, $scope) {
  $rootScope.tab = "home"

  var d1 = new Date("September 1, 2013");
  var d2 = new Date("September 2, 2013");
  var d3 = new Date("September 3, 2013");
  var d4 = new Date("September 4, 2013");
  var d5 = new Date("September 5, 2013");
  var d6 = new Date("September 6, 2013");
  var d7 = new Date("September 7, 2013");
  var d8 = new Date("September 8, 2013");
  var d9 = new Date("September 9, 2013");
  var d10 = new Date("September 10, 2013");
  var d11 = new Date("September 11, 2013");
  var d12 = new Date("September 12, 2013");
  var d13 = new Date("September 13, 2013");
  var d14 = new Date("September 14, 2013");
  var d15 = new Date("September 15, 2013");
  var d16 = new Date("September 16, 2013");
  var d17 = new Date("September 17, 2013");
  var d18 = new Date("September 18, 2013");
  var d19 = new Date("September 19, 2013");
  var d20 = new Date("September 20, 2013");
  var d21 = new Date("September 21, 2013");
  var d22 = new Date("September 22, 2013");
  var d23 = new Date("September 23, 2013");
  var d24 = new Date("September 24, 2013");
  var d25 = new Date("September 25, 2013");
  var d26 = new Date("September 26, 2013");
  var d27 = new Date("September 27, 2013");
  var d28 = new Date("September 28, 2013");
  var d29 = new Date("September 29, 2013");
  var d30 = new Date("September 30, 2013");

  $scope.data = [{
    x: d1,
    joy: 0.03990118307884121,
    trust: 0.013207076943404188,
    fear: 0.03334853272134506,
    surprise: 0.025911079980001014,
    sadness: 0.16860026845044712,
    disgust: 0.047834491900514774,
    anger: 0.015325660099098836,
    anticipation: 0.015801788333754185,
    Stock: 70.31
  }, {
    x: d2,
    joy: 0.03765603839544278,
    trust: 0.01274426132197808,
    fear: 0.03641292481622806,
    surprise: 0.023757395876448765,
    sadness: 0.1731572304219096,
    disgust: 0.047732694845362876,
    anger: 0.01684747808946912,
    anticipation: 0.01681033197085552,
    Stock: 70.31
  }, {
    x: d3,
    joy: 0.040229842907979825,
    trust: 0.01159943666015384,
    fear: 0.0368711555205363,
    surprise: 0.022040456006273145,
    sadness: 0.16886662142126677,
    disgust: 0.0470305525500568,
    anger: 0.016527380518817573,
    anticipation: 0.01669804777387676,
    Stock: 70.31
  }, {
    x: d4,
    joy: 0.04565680785423933,
    trust: 0.010818991521745975,
    fear: 0.03641444059086223,
    surprise: 0.022850065258352703,
    sadness: 0.17470130330210568,
    disgust: 0.04792200418714735,
    anger: 0.017251534417054206,
    anticipation: 0.016581401527249528,
    Stock: 70.84
  }, {
    x: d5,
    joy: 0.03951102931734034,
    trust: 0.010540004679228667,
    fear: 0.03765801918788235,
    surprise: 0.02542299501993127,
    sadness: 0.17585235803342747,
    disgust: 0.04640970974737578,
    anger: 0.01486925360683054,
    anticipation: 0.016257305815242633,
    Stock: 70.75
  }, {
    x: d6,
    joy: 0.04051411721392645,
    trust: 0.010642217564708399,
    fear: 0.035499243631881734,
    surprise: 0.02190888610744963,
    sadness: 0.16958164211727558,
    disgust: 0.04568364558217926,
    anger: 0.016277710507847667,
    anticipation: 0.01624688965502304,
    Stock: 70.28
  }, {
    x: d7,
    joy: 0.03787326993478024,
    trust: 0.01112472444173593,
    fear: 0.03552608517672394,
    surprise: 0.019456383786776967,
    sadness: 0.16334775702158036,
    disgust: 0.04752131913858536,
    anger: 0.013250460741657926,
    anticipation: 0.019642302936206824,
    Stock: 71.14
  }, {
    x: d8,
    joy: 0.03803557151644164,
    trust: 0.012780039121935375,
    fear: 0.03743150705343009,
    surprise: 0.02658388597596631,
    sadness: 0.17496896596440378,
    disgust: 0.049412573350649296,
    anger: 0.015287488990426054,
    anticipation: 0.020159346911896,
    Stock: 71.14
  }, {
    x: d9,
    joy: 0.03841630307000448,
    trust: 0.01272904825013273,
    fear: 0.03810303775601571,
    surprise: 0.02703357503003634,
    sadness: 0.17342144271896168,
    disgust: 0.04438671361476531,
    anger: 0.015271376030796854,
    anticipation: 0.019049517482531687,
    Stock: 71.14
  }, {
    x: d10,
    joy: 0.03782577788820997,
    trust: 0.011270925488597754,
    fear: 0.034814049944535845,
    surprise: 0.02468535690764407,
    sadness: 0.1808749182809768,
    disgust: 0.04605098903781652,
    anger: 0.015490845229286114,
    anticipation: 0.017902132607679234,
    Stock: 72.89
  }, {
    x: d11,
    joy: 0.04339390687794608,
    trust: 0.011273232521246427,
    fear: 0.03668451957685485,
    surprise: 0.02256524381054909,
    sadness: 0.17035107907906819,
    disgust: 0.047960512452064244,
    anger: 0.018139643791456554,
    anticipation: 0.017841256136612124,
    Stock: 74.03
  }, {
    x: d12,
    joy: 0.0376312860532947,
    trust: 0.01027200843829804,
    fear: 0.0355058578033389,
    surprise: 0.023409074980095385,
    sadness: 0.17480566804023678,
    disgust: 0.04669037178743755,
    anger: 0.01556548070751146,
    anticipation: 0.01614552405648308,
    Stock: 74.31
  }, {
    x: d13,
    joy: 0.03359771963223802,
    trust: 0.010059025332666713,
    fear: 0.033681246287455856,
    surprise: 0.02214437601838612,
    sadness: 0.1962974724918132,
    disgust: 0.052717625907762126,
    anger: 0.013122164661337069,
    anticipation: 0.017840041453241,
    Stock: 74.21
  }, {
    x: d14,
    joy: 0.03612800806676917,
    trust: 0.011024924820028164,
    fear: 0.032547588623510676,
    surprise: 0.023459203204939855,
    sadness: 0.1817630532710713,
    disgust: 0.04804291503696345,
    anger: 0.014636269657850445,
    anticipation: 0.017429847512702396,
    Stock: 73.89
  }, {
    x: d15,
    joy: 0.03887191346276788,
    trust: 0.011615994144003447,
    fear: 0.03607709680814943,
    surprise: 0.02312945463852163,
    sadness: 0.17135563022737896,
    disgust: 0.04997536449171489,
    anger: 0.015560232133016967,
    anticipation: 0.016349573231170943,
    Stock: 73.89
  }, {
    x: d16,
    joy: 0.037699356365101924,
    trust: 0.011608164125321464,
    fear: 0.03496256916002998,
    surprise: 0.022182948189810817,
    sadness: 0.17724448475161256,
    disgust: 0.04897109872019173,
    anger: 0.015376717931769687,
    anticipation: 0.01552183225181753,
    Stock: 73.89
  }, {
    x: d17,
    joy: 0.0359872392366991,
    trust: 0.01191556205449385,
    fear: 0.0333190184411901,
    surprise: 0.02303452622885403,
    sadness: 0.17734561983512206,
    disgust: 0.047247455559569745,
    anger: 0.015008019737213087,
    anticipation: 0.015309171855504582,
    Stock: 74.67
  }, {
    x: d18,
    joy: 0.03632780973428463,
    trust: 0.011428267720810346,
    fear: 0.03645862247943793,
    surprise: 0.02472696463235008,
    sadness: 0.1788215131939619,
    disgust: 0.04790149040722075,
    anger: 0.016317555043224203,
    anticipation: 0.01678242800050584,
    Stock: 75.94
  }, {
    x: d19,
    joy: 0.03874396969114345,
    trust: 0.012498646515346275,
    fear: 0.03478057104402993,
    surprise: 0.02504440919481264,
    sadness: 0.18243321722982878,
    disgust: 0.04520038919743286,
    anger: 0.01515524595472536,
    anticipation: 0.016339060133510067,
    Stock: 74.98
  }, {
    x: d20,
    joy: 0.03816456770101316,
    trust: 0.011193668099874128,
    fear: 0.033200336153330706,
    surprise: 0.021494932485672053,
    sadness: 0.17759014721594443,
    disgust: 0.04313786014019032,
    anger: 0.013506190699681515,
    anticipation: 0.01609693232865554,
    Stock: 74.75
  }, {
    x: d21,
    joy: 0.03811441763736462,
    trust: 0.011569346297845872,
    fear: 0.03492842467031559,
    surprise: 0.020572621357378303,
    sadness: 0.1815737614859163,
    disgust: 0.042641947314686346,
    anger: 0.016156541687296692,
    anticipation: 0.020685327886022103,
    Stock: 74.00
  }, {
    x: d22,
    joy: 0.04070051854524684,
    trust: 0.011094318358649062,
    fear: 0.03540412956590881,
    surprise: 0.02343766811156232,
    sadness: 0.177665912064859,
    disgust: 0.044426123018958194,
    anger: 0.016140115770611543,
    anticipation: 0.01783498327576625,
    Stock: 74.00
  }, {
    x: d23,
    joy: 0.038321475045997686,
    trust: 0.011555460458719101,
    fear: 0.03480402167729398,
    surprise: 0.028532769994680456,
    sadness: 0.17260482998953008,
    disgust: 0.04506518850079885,
    anger: 0.016207037394261853,
    anticipation: 0.017030436533627295,
    Stock: 74.00
  }, {
    x: d24,
    joy: 0.039302676956999724,
    trust: 0.0143468712376559,
    fear: 0.03610532235164405,
    surprise: 0.02558276258539117,
    sadness: 0.17318944083348148,
    disgust: 0.047450897074769384,
    anger: 0.01636250890449469,
    anticipation: 0.016440842202076308,
    Stock: 75.17
  }, {
    x: d25,
    joy: 0.037975141138447306,
    trust: 0.012212796187641565,
    fear: 0.03551756202602854,
    surprise: 0.024513702175909913,
    sadness: 0.17481882617846645,
    disgust: 0.04646647198626624,
    anger: 0.017686981614911383,
    anticipation: 0.016713526042733566,
    Stock: 74.97
  }, {
    x: d26,
    joy: 0.03726251417040181,
    trust: 0.012859698402351181,
    fear: 0.03404575937548947,
    surprise: 0.023488578192825106,
    sadness: 0.176485811391839,
    disgust: 0.045338158029648905,
    anger: 0.01730130275053191,
    anticipation: 0.017589112908174394,
    Stock: 75.79
  }, {
    x: d27,
    joy: 0.034229604414740065,
    trust: 0.01461369728378951,
    fear: 0.031590734231117,
    surprise: 0.02308685020674137,
    sadness: 0.1769681139184373,
    disgust: 0.04606826339682152,
    anger: 0.01512996808879002,
    anticipation: 0.016617936263663168,
    Stock: 75.94
  }, {
    x: d28,
    joy: 0.03593865683679761,
    trust: 0.01268762622990204,
    fear: 0.03288831084995285,
    surprise: 0.020667767940016558,
    sadness: 0.17278565184365446,
    disgust: 0.048373397926084055,
    anger: 0.014584860491772112,
    anticipation: 0.02017314410309363,
    Stock: 75.59
  }, {
    x: d29,
    joy: 0.04120069429325448,
    trust: 0.014729562379088706,
    fear: 0.03462253563843722,
    surprise: 0.02468637713099769,
    sadness: 0.17541729145606613,
    disgust: 0.04493966532029771,
    anger: 0.0156565806663897,
    anticipation: 0.017619926704136566,
    Stock: 75.59
  }, {
    x: d30,
    joy: 0.04168339996088416,
    trust: 0.010946029207351975,
    fear: 0.03483278563899458,
    surprise: 0.026409024632069004,
    sadness: 0.1696298449603427,
    disgust: 0.04469709438583833,
    anger: 0.01546647669442684,
    anticipation: 0.015698006297200598,
    Stock: 75.59
  }];

  // Column
  $scope.options = {
    axes: {
      x: {
        type: "date",
        key: "x"
      },
      y1: {
        type: "linear"
      },
      y2: {
        type: "linear"
      }
    },
    lineMode: 'cardinal',
    tension: 0.3,
    series: [{
      y: 'joy',
      axis: 'y1',
      type: 'area'
    }, {
      y: 'trust',
      axis: 'y1',
      type: 'area'
    }, {
      y: 'fear',
      axis: 'y1',
      type: 'area'
    }, {
      y: 'surprise',
      axis: 'y1',
      type: 'area'
    }, {
      y: 'sadness',
      axis: 'y1',
      type: 'area'
    }, {
      y: 'disgust',
      axis: 'y1',
      type: 'area'
    }, {
      y: 'anger',
      axis: 'y1',
      type: 'area'
    }, {
      y: 'anticipation',
      axis: 'y1',
      type: 'area'
    }, {
      y: 'Stock',
      axis: 'y2',
      thickness: "10px",
      color: "#000000",
      type: 'area'
    }],
    tooltip: {
      mode: "scrubber",
      formatter: function(x, y1, series) {
        return y1;
      }
    }
  }
});

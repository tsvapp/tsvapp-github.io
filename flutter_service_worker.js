'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "ec4281d0a8a4d5da0a0dd6df46a1c461",
"index.html": "f05363c2c8a359b5ce781937d02e18f0",
"/": "f05363c2c8a359b5ce781937d02e18f0",
"main.dart.js": "92aaadade5df0c368e78943990962b7f",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b5605d23c86006843065c0abd402de6b",
".git/ORIG_HEAD": "14b7cdcb5906438c1960cbb7632ed0b1",
".git/config": "538a5a7cfdfa568e28096c00dbf96d83",
".git/objects/0c/d653c8d27971fb30b9196305eb081f2e954698": "1abdc0c47bbce29a07378732a09d3fa5",
".git/objects/66/bf4e10435f0ff5b2c29e43f5785927f0f548ba": "51391dda5a7a7813fd81ea4523b2e326",
".git/objects/3e/01e93215f2b4cce86c77e0cdf02f92fa257a43": "479d8965e41a004113a5124b86bbf1fd",
".git/objects/68/8c8c246afc81f2f6219231911ec0d3536fd9c3": "15e9459f421f2d70be9b67bafdbacfbb",
".git/objects/68/43e2159ac5c73104c6ca4a3e3a772805fa55a1": "4d72ca469ff01b2c3ffb2a2eef258399",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/69/bba6e5d92fecb04b5eea49d901d0a3a05870a6": "ec06484d11af0657a08fd64cc0d7fc51",
".git/objects/69/fc4ae2bc69cd8edb7b2fb8e655adf03d1154d4": "e2123c4a7d1b22c258c0929d260eff55",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/3c/7a5b623f9897974f9ab715856fec0328e0f98a": "9f2f58b2c00102d578dd7bd1d61be94e",
".git/objects/3d/99aed9d130dfec6917edb9cff7b2c73bec5a48": "7c3647ea61bff97ee6b3a4f14ecb8676",
".git/objects/3d/83a56ab0be869b1bdaf6aec185a9da4c833f71": "5964f4236efac1294d574111000822ad",
".git/objects/67/425909076baae2d1d3ce96bcb92b2710086ce0": "1183f4b048143143644cf0c5d70175a7",
".git/objects/93/769163847c18b9ad720a7b8e8a8d647ebba2d2": "c27bf18e61d0eed7e2d90e137f07bce6",
".git/objects/93/e5a64d0319c0bb7dca9583785d499551537750": "e9f79ae8968f30d52d3f76b1a9ad0c42",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/94/8533b87ed32908c39aae7ba77e414cbfc6e63d": "266f6cb27ed21da3b379dd92ecb54898",
".git/objects/0e/c4869c182e2023412f9b3e5e0aa905ead70efb": "c8a36245849a42a172e982086ae75c16",
".git/objects/5f/e2db3cdde3260e5cb613b617663350d6cb795d": "4a5a9728f79f73a22711c20079c064a4",
".git/objects/5f/2dfae093fadc322f22f4018435ac28e4da383d": "54999be6319ec043e458150ab8fcaf57",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b2/fe3dc5fa92d0ba5f72253243c74268be53cd13": "79eeb16dc324fe560b6596710923a9c1",
".git/objects/b2/48c8ae8d49acbd28967e33f40f1e9008c2bb17": "6a1fb6140740830038c8de25d21a1419",
".git/objects/ad/ad0ab3b4b74bd08eb6004ee23aca95f8e8e55a": "18bea4127453682be564ecb4bf0569df",
".git/objects/bb/6dff43d77ff52f02eca8490a6479cb4d748c82": "c1779e6618b3bad0e36abb7349014265",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/a5/6eca377ad80e62fcdb3f2ae4131d0aaa496415": "978fc411c2d9f1c932ca4efdba7ae1bc",
".git/objects/bd/c24ecdf0637d723d0728746dd8bd48582639ff": "7a3f6f53236912108ac00c4717ae2392",
".git/objects/bd/83d0d8767c7c4948da98b390c70e7f29cc7f5e": "4a2e6855d1abd0b710fdcec208e1dae5",
".git/objects/d1/387e38d8dab74dcf7aa76067e62bb82cd2f323": "9d0d28a8ddfe3567ad4bd58785c5be9c",
".git/objects/d1/2d1efadf92decd7b87fd58714bc02d9a4a315e": "559d10761d283f72e5e45e5ef708cfd2",
".git/objects/d1/fd5aa3e0924017d812c673d7dd1e1b22144c8a": "33e73d2905381c445a29b35172588020",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/ac77fee6198460bc53b2452eab4dcd740a76fc": "9f53236be9cbcd8094ebfd97bcd053f4",
".git/objects/ae/f4e019f1efe2b348cf27d4c3c0006b446a78de": "aad56dac52a3026eb95abbdb1189b498",
".git/objects/ab/c8dca39a8abe4ad336bdb0327220387b5581cd": "5a55747190b9c73d6b4dc1f099424b85",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/a31649eab6f087556eca5c1b0ceba1f0fb8e45": "1beacb9a130802af5de6c48b4e88f06f",
".git/objects/ee/799caf5cc227e1a1bb7e9e292b1e5ad5bec7b9": "f77071e1d34148e100046329c236116f",
".git/objects/c9/6b6849e458843c148573f7b213986827c8affa": "6a903f8f1b6d1e1a888d073154088d17",
".git/objects/c9/278e72d9ccfbb2504157d86f6d38fec6ffc4bd": "4b242e561149704fc1a81f5e77cc8f28",
".git/objects/fd/3e4ae6493179637439e5d10cef08c001a50ee9": "805dc54e7de66a9d16ce9f2704c56441",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/68b3f470cc90e7a54e0e2fbbf6607ce81c5a11": "4856433ae890a7fca24038e4aed21984",
".git/objects/fb/284c7281ebebe70a16e9cff616d074cd54d8ca": "16347b5d30b1ba68f20ebaf48153384d",
".git/objects/ec/72053d9d06cf3ee0bd3bb74fcd5ced0c95e51e": "868a115249c86f2fa576cd6c559e1110",
".git/objects/ec/f4e1ce819b569758b033345e799f3ad7b58651": "a687fd0f389138f56d9d41c58b0b0bde",
".git/objects/4e/e1217cb2fa0681e5ebf69b2606069a277d199b": "c746ddce7839881a6225da18774a76b8",
".git/objects/20/f4991c28756bb279ea87b5efbc856f73be3747": "deb40b37b1b4c1feee87a1e24440ba92",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/8a16e5063692c9fc2843abedec97cb734aae53": "17d498568ef903b2a537d01264c1a343",
".git/objects/18/fec0b4fd156e388f4ead6fd66bd156b7896c28": "d09123573a514cabfd30a9378f01bae2",
".git/objects/18/2ae156b0eac9266155d81fb0b93af3e9d4abf4": "8479752449ea00017fb32287a0768535",
".git/objects/7d/82b8c38b63d4e673976bf385aa73f8d86bd53d": "a57c3f8c5ed4ec343f12c84ad50e7ae0",
".git/objects/7c/be8b23911435df1b0f0d759c8fd44db2017443": "dfdde02e68fe37f4365964c5120cecb6",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/cdd5e95d8069185a594a2a70f98655e96d6d9d": "9696fc97c6d0403d972bcbfe3a202443",
".git/objects/45/82a3f15a371991403a957c22168a3957d5a200": "c7f174e9e778756679e046e792063d72",
".git/objects/1f/4d82d65b54bcdd69572fe3e0044861a3564a6d": "9f6b434370c2e2522d603026bec62b1e",
".git/objects/80/97b364f5ea364e6fadeab024524ab0d92acdff": "6bc0f7aa9e42569ff150a52c0fec0f53",
".git/objects/74/e5a974caf4d01c0389ea3fd50685d040a8a741": "c36e1a8597f1726aecdd39d79cb00198",
".git/objects/1a/81287ee8fe7b1946e83d55d2c3432bf45f305d": "493d0e8be67c8ab646a2d599fd546b67",
".git/objects/17/8597091c7aa90ffeabf4544455182f20c5b67f": "8928dadcd86a85228664662c6785b2b7",
".git/objects/17/83c0ceb1e9864e0b28f84554d06bd458cb3990": "9dd5dafda601953a40a20ecf30f78b47",
".git/objects/17/990357c919a178bc44225bc4301cdf19794b4a": "7ed715d174035297f540e0e6b3ab9f19",
".git/objects/17/67b2297036934f7a4f108bba89085624998c38": "ca4d48a468cfe337dfff51dee0946e09",
".git/objects/8f/368292a70675725b4d450fb31a7af7e7a2465c": "f772b016eabfd2336c517d3cfb18602d",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8f/3b17f62d54b168a361eac637b60c5d6ac6a7a9": "a6e57c2eb01ab865a6523f5c09671da3",
".git/objects/8f/1c4d515d1a2d0d3395abae7c72e34a053b6158": "73458e55137c0aa39a4a5679a06b8be5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/e248ee51444e94c41ddbe5fe585db0c7678bf6": "e2b983eef5b105c5121986fd3fa94cc9",
".git/objects/4c/2f4d3dad772cfb6cb169d546ed48a55db12b6d": "917fba8b14b397a5eee1530351d6ff4e",
".git/objects/4c/bc16e37560b0003595e4fc5b2dd2e9d65585b4": "6a3844c018c6314e28844a2eb8a44650",
".git/objects/26/f0ab06888d1340b843446aa3c0326a41a6c4c7": "65cf3c026d952d58ea831f01c3cd773a",
".git/objects/21/fd98e7740af78074877d25902f7ae3d1aa6bfd": "c1fa6cc282ef980f57ae34b3916831f3",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "9a15839a59b5f501fbf7b9824c4b6f84",
".git/objects/86/58983d8e3f44f8b7b13c8604264afdff2aba6a": "bc85f01ad9cf1ea28b69191121deca30",
".git/objects/44/6ace4968e203a4f2b0031fd8264f268bf0f880": "2094116da57a3b67fb096094574ec72c",
".git/objects/43/8d2b021bb6c17b98cebf01fca22abd13a2a016": "c82f80d20f0bcd7072b8f9bebfcc3eea",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/b91703634fcb18554566b136dc672a52efbb18": "26657f7ad3cd0f804db440bbf0a9c4d0",
".git/objects/07/41b27406d5d3df6cb38b5744b9a6f42d02f702": "19ccf0561e93b4e0e019d57cc6c514f4",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/07/bd68f3a4301a71d56e00e548bb1de0cd9a578c": "a616b909e386a7099365475feace4d34",
".git/objects/38/44bf20997d43e4e5ef54e9252774704d8d5a0b": "2164150620c7bee7dde9525d0ec86b9a",
".git/objects/6e/065e444225340e5b3eee847fc767944ef5a5bb": "e0512f469c747e7ec74e36e50cc18aa8",
".git/objects/9a/8424bbc304654432b96e676d4243b42766b353": "307789e2007142cfb8871193ae7ff99e",
".git/objects/36/84829fd209f36886b1904b0e67156e776ab0db": "fcf110ddceebc57caa9355cd5d7dba46",
".git/objects/91/975200eac2fefd8c02800ef3e2f426ea32534d": "7af2300a3e488f8f5f2435e99694f0d3",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/54/8f0d54290680f0d8ea31d59988789d8d3a2277": "c5009b2fac61deb8c73e0bd1ce65dae1",
".git/objects/98/a8071dea4cd477bfd777627aacf6e6b00ddf2f": "eb3038456ab4cfa1b3be9f6b62a47c35",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/6d/500216e6d5c9cd9975e89f39585c4a3bbe398c": "1b9f72148a58148ea891db387694a4ec",
".git/objects/6d/6b04ee5552391f13451122d80919ed811d3ade": "b590189b20015d69bd7207ffde778985",
".git/objects/01/2eb01fe429f25cf5d0b345d19b17af303f4ad1": "42385fcd46b556f25cc1327cf2a1d85f",
".git/objects/01/ef0a1900dabefee17c80e42123b6af7b3988a0": "6f97779c98e97aef973a1283b3fbfdf2",
".git/objects/06/232e2f625eca8fa5b74ee2f1529b311d50dae0": "b491d7d1b9edff49716317f9323ae66b",
".git/objects/6c/6f239f41a480228d17fdc89968427af27c4a81": "0c1a506905cd8699973bf7ca6a0db157",
".git/objects/52/4bb1395d14507efa33e5095b4a89a6f589f12e": "c6d8a16d92c95735c8ebfd6e2fe6e76c",
".git/objects/0a/5568b3eb72786b7d025f317905c26d9b2a59ce": "a014524865f890b626de14198770894c",
".git/objects/64/69bd15278fbc22d7937a2ecf25f21bcfaa542d": "93b37a214b35223075c687f8cea0e18a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/824e5f33effa51436574750fbea94a21cf6049": "2f7af54c6c1e3e2e1cf9913045ed1fe0",
".git/objects/a0/fef95984f980948a01b2b0fa3ea189c2aa5407": "eedb1622d6700a6a78ea1135ff6d8e7e",
".git/objects/b8/331e23707e4a84ab93c3155645fcab2218638d": "4a7263a778ac33ff9983eff9b3c2334f",
".git/objects/b1/d4450cdaf91e31b5dc7c8ce9f78487a5eb4f40": "8390be4f33ccaa687b9f8b7cf5048ff7",
".git/objects/dc/8ceb5e972d2eec2a6e031c15a9105a403c1359": "7c69937f901563d4d66aec383d285e5d",
".git/objects/aa/9b84161c65acaa21a265cb0488ec8492a353ac": "ef5fc7062684e49e8e1f37f830fa76a5",
".git/objects/aa/417efbadefd59cf25be4329e386fd24f711a5b": "3a354a44d6ad85b68632f845443f81da",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/af/c9e12d09a81dc949fae5dab1c8c93fb82887f2": "ef1f494c80bf1a7e027d4d2be5c874b5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/b7339f154eb53f99b243dfac2ba0ae2b58045f": "fb5022bb1305ba41265aafc1ce999272",
".git/objects/b0/bae0858f61d31871ea36345aba8535839171d0": "89bb4dbe69cd09fe31ccde61f8f5442f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/2e989d9615b107dae4607e7bd7992b0e46fca7": "73a76aa74d4f541e4dbeb12436797833",
".git/objects/a1/5d1e06c7cc0e325afaf57be2d7fabdc4f6664e": "9ab28e46b9b9b3915252ec5063e923de",
".git/objects/ef/2343109fb75d5074ed07dbf1521e737c619930": "afffce46ecc620abf27a7c5eeba308bb",
".git/objects/ef/3e44364bb42d588d7dc19595dce6111a442489": "7305b0e77640f0e4113baf6b624d5328",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/cc/e20b424c2d0c4d88be0bb3526d51e9b32362c0": "99ac445cfcc885c3326b4a2623725b93",
".git/objects/cc/5fe4f8d206f41ed4c263eae332b3026841f382": "8aa5d32e153dfdfb9a76c4e6db8c633a",
".git/objects/e6/6ffc56845e93b1f1ca8293cffef4e54730416d": "45307d4a154d32d180533046750b1379",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f9/deb9fcb3eec9d15d98f98416ae189da70d5989": "c6f800b0e70ad983b73e5b8f140d9376",
".git/objects/f7/51288ddbefbc1a4b8b0d9bd5a6acf3f7c7ad20": "437f2910b6cd1afb5e6d030ff1e7d364",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/fa/81eca25fa1f9d8e38bd0dc6bd41056ae80e288": "8f21f7cd8af2edce3ffb74b56f6aded2",
".git/objects/fa/b339c93aa91b5146a5c6dd44fd2fa3a0d450c4": "a61259a5d68e24372f9bc50e52ccec7d",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/f1/fd6b3e7b2cc65f62c0cd61bf6b6608a65fa933": "f7f597cfd7dda62e0df254f27fb7518e",
".git/objects/cb/3aa0891a8973e9a747ec0fb5672a7371a7ca40": "67749eba3ebf67de2d5739e4d27d4c56",
".git/objects/cb/9e2ca7af85d37bd153fa5168400bb158cc4b8f": "9b418db9f32a6ac462da309e6bf13326",
".git/objects/f8/48ec53e3a4a2ef2aafa4c85962d1c97d926d13": "82f2fbdef8438db2bf95bb1dbf08dd1d",
".git/objects/f8/a73cacbdef75bf972f66b555c218c0b01a9cfa": "57bb87f47989976040f983d672908009",
".git/objects/e0/bc49c4672cd3625b737a30f73e3262305982f2": "054c484c3a09111f9ee8c7de58310a64",
".git/objects/e0/e0e64bfe9b1a8b79afc7d123a5bc5318a5d882": "e5bfc9704e71225798dc0eb12400e404",
".git/objects/46/6b0c0c4b507b67ce8fce5e5dafd8853d091b63": "f5fb7e467e387f26f0837c4811c8a23e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/a1bca377fe3c25f9eeb8844b1c176b3ba36a5c": "37b80307af535a0e4dd1f8188c2a9890",
".git/objects/2c/e39b7a0c45bae418803638e47c3ba349cf525c": "2670b5d7d8fb263a2c4fa47c101a74b2",
".git/objects/2d/546ad02e3ac88699c3f3c2183b9e5aa791cd87": "4d2999053c26c2ee63710e127c41cb4a",
".git/objects/2d/64c335b377b4e557e9053862a10daab0dbd112": "f850f7ebd419c6a92294cf42774d774f",
".git/objects/41/2a75be864216ad88574b003c8e719663d6bb66": "7f8123ec7cd11380511a65ca096d470f",
".git/objects/48/803cb48b0aaf35c8e7cfbf82e67c23c1b77e32": "f1ac5660780561a5be6b90e738df6da3",
".git/objects/70/337f6505932bb878aec60b540e7b3ddd21905a": "9a03de67cafe41ed011815b5fdb7d56e",
".git/objects/70/f9f1a801b5b0c86c01fa7d982c5731e417d672": "3138874990bd407bff4797d837452033",
".git/objects/1e/1fe83bf56640ae67e805c2f3d7f57a459ab479": "941c3e0f27cbea7f7c77cbe64a4e36cb",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/4f8b1fbe95a2a1000cb6b9074a8fa8236e1281": "60a9491cb10ec1ebe2cffca4ca64df57",
".git/objects/8d/cf9a08955ab2d54756b5667b0cd6f985bb1060": "50ee1835808dae1db3ef38fd813f55bb",
".git/objects/1d/a3ca1030030b17193771383c9c6c28421899af": "cde5a29a3c4f1374b995760a48f58479",
".git/objects/71/9d2fb9e1825c9c0b50a4ad8cbfa0050ffeabe0": "d5588b911d0e2cdd25327f654a3dd005",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/76/ae221d246963961c2edb6a89449a9cfbaebdd4": "6810fc0093e1144a7890a6a5f69f6c77",
".git/objects/76/b05f9614bf30d806bca812b5b84ba9196c19ea": "531abda092081e9b8cd211e9f0063fae",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/1c/0d1b60fe2da527640820d3a95aac4fac5f7b49": "963e11daf2f190a191de56b6be577ba7",
".git/objects/82/10ec74e2ab81f0c701aff5a6ac8dbdb210a13a": "6513964a1aba963c68bdc39a6651e858",
".git/objects/82/b97ea9efabd10d1bf0ce06a04bd16185a66d1d": "4509dd4fc0eb41b9e1e3b5ddc8fb2d6c",
".git/objects/49/10a98f93d7965a5583e533153e25a00f5fd43a": "47ee7c4a4cd6e35efe183cc0dceb7c64",
".git/objects/40/cabafc2cbe0e5fd9f7923f91490bd17a55cd07": "4c57ee9c3f2a27e3ed51070a79ef5a88",
".git/objects/2e/11fd9d861226be6d5f692b82bfa7533cf9a8cd": "5d75dbd56b9f80414a7bf1046c8a0d92",
".git/objects/8b/92babb70608a97b75d33023ff373e40786e793": "4277f9497ee78d8bc3aea6a15e34e267",
".git/objects/8b/9ef46d611e6016dcb7742e33afb46805c41f78": "54c328d1c4e9a7efae49e0e8bc17b524",
".git/objects/13/68ec3fc8191620eade0e437ac8f617fc0b0203": "917c974cc2c9649844dce25b53817316",
".git/objects/7f/8fc66c874baf5039f87fc834ad91658b396432": "af588c7ec06853a88a061bfacb0d107d",
".git/objects/14/1f07702943d4ea4a20b54631b4b716679b4eba": "fa36040da46a73d3022bad83bd480461",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "87eb4311c4a080f3512299c76e394fd8",
".git/logs/refs/heads/master": "f256d63ab50cb6a2b519e52ca4902c35",
".git/logs/refs/heads/main": "f80652e9e39a20eaeb9f755aa1de47dc",
".git/logs/refs/remotes/origin/master": "82688f36f8bb2ed4699fe914e5695d46",
".git/logs/refs/remotes/origin/main": "8d8143dd9a8f0376e968f3398cfd8417",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "b83c54191d0f48d160620fd4bdf009f4",
".git/refs/heads/main": "eff6718fdcc6df23b6c49543d07caf3f",
".git/refs/remotes/origin/master": "b83c54191d0f48d160620fd4bdf009f4",
".git/refs/remotes/origin/main": "eff6718fdcc6df23b6c49543d07caf3f",
".git/index": "b5f75429c23347c6b2afca56ec2fb6c6",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/FETCH_HEAD": "16ae58bb0af72943e199985722280489",
"assets/AssetManifest.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/NOTICES": "681e5884c0bd5ae18c8a271da0e6683a",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "a1fee2517bf598633e2f67fcf3e26c94",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "0b0a3415aad49b6e9bf965ff578614f9",
"assets/fonts/MaterialIcons-Regular.otf": "b5a6ad22127157057424d768e518e0ff",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

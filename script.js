// ============================================
// i18n - Traduções
// ============================================
const translations = {
  'pt-BR': {
    title: 'Onde Sou Milionário? 💰',
    subtitle: 'Descubra em quais países você já é milionário com seu salário atual!',
    inputPlaceholder: 'Digite seu salário mensal',
    convertBtn: 'Verificar',
    loading: 'Carregando...',
    millionaireIn: 'Milionário em',
    millionaireInCountries: 'Milionário em X países',
    bestCountry: 'País onde meu salário vale mais',
    millionaireInCurrencies: 'Milionário em X moedas',
    millionaire: 'Milionário',
    near: 'Quase lá',
    notYet: 'Ainda não',
    shareTitle: 'Compartilhe sua riqueza!',
    shareText: 'Descubra em quais países você é milionário!',
    emptyState: 'Digite um valor e clique em "Verificar" para começar!',
    error: 'Erro ao buscar dados. Tente novamente.',
    updated: 'Atualizado em',
    countriesTitle: 'Países onde você é milionário',
    countriesNearTitle: 'Países mais próximos do milhão',
    noMillionaires: 'Você ainda não é milionário em nenhum país, mas está perto nestes:',
    darkMode: 'Modo Escuro',
    lightMode: 'Modo Claro',
    ofMillion: 'do milhão',
    footerDescription: 'Uma ferramenta divertida para descobrir sua riqueza global',
    footerDeveloped: 'Desenvolvido com alegria por',
    footerDeveloper: 'Filipe Batista',
    footerDataBy: 'Dados de câmbio fornecidos por',
    previousPage: 'Anterior',
    nextPage: 'Próxima',
    page: 'Página',
    of: 'de'
  },
  'en': {
    title: 'Where Am I a Millionaire? 💰',
    subtitle: 'Discover in which countries you are already a millionaire with your current salary!',
    inputPlaceholder: 'Enter your monthly salary',
    convertBtn: 'Check',
    loading: 'Loading...',
    millionaireIn: 'Millionaire in',
    millionaireInCountries: 'Millionaire in X countries',
    bestCountry: 'Country where my salary is worth the most',
    millionaireInCurrencies: 'Millionaire in X currencies',
    millionaire: 'Millionaire',
    near: 'Almost there',
    notYet: 'Not yet',
    shareTitle: 'Share your wealth!',
    shareText: 'Discover in which countries you are a millionaire!',
    emptyState: 'Enter a value and click "Check" to get started!',
    error: 'Error fetching data. Please try again.',
    updated: 'Updated on',
    countriesTitle: 'Countries where you are a millionaire',
    countriesNearTitle: 'Countries closest to million',
    noMillionaires: 'You are not yet a millionaire in any country, but you are close in these:',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
    ofMillion: 'of million',
    footerDescription: 'A fun tool to discover your global wealth',
    footerDeveloped: 'Developed with joy by',
    footerDeveloper: 'Filipe Batista',
    footerDataBy: 'Exchange rate data provided by',
    previousPage: 'Previous',
    nextPage: 'Next',
    page: 'Page',
    of: 'of'
  },
  'es': {
    title: '¿Dónde Soy Millonario? 💰',
    subtitle: '¡Descubre en qué países ya eres millonario con tu salario actual!',
    inputPlaceholder: 'Ingresa tu salario mensual',
    convertBtn: 'Verificar',
    loading: 'Cargando...',
    millionaireIn: 'Millonario en',
    millionaireInCountries: 'Millonario en X países',
    bestCountry: 'País donde mi salario vale más',
    millionaireInCurrencies: 'Millonario en X monedas',
    millionaire: 'Millonario',
    near: 'Casi ahí',
    notYet: 'Aún no',
    shareTitle: '¡Comparte tu riqueza!',
    shareText: '¡Descubre en qué países eres millonario!',
    emptyState: 'Ingresa un valor y haz clic en "Verificar" para comenzar!',
    error: 'Error al obtener datos. Intenta nuevamente.',
    updated: 'Actualizado el',
    countriesTitle: 'Países donde eres millonario',
    countriesNearTitle: 'Países más cercanos al millón',
    noMillionaires: 'Aún no eres millonario en ningún país, pero estás cerca en estos:',
    darkMode: 'Modo Oscuro',
    lightMode: 'Modo Claro',
    ofMillion: 'del millón',
    footerDescription: 'Una herramienta divertida para descubrir tu riqueza global',
    footerDeveloped: 'Desarrollado con alegría por',
    footerDeveloper: 'Filipe Batista',
    footerDataBy: 'Datos de cambio proporcionados por',
    previousPage: 'Anterior',
    nextPage: 'Siguiente',
    page: 'Página',
    of: 'de'
  }
};

// ============================================
// Configuração
// ============================================
const MILLION = 1_000_000;
const NEAR_THRESHOLD = 0.9 * MILLION;
const API_KEY = '7b1cbc058032da0214000699d834d157';
// Usando exchangerate.host com chave de acesso (currencylayer)
const API_BASE = 'https://api.exchangerate.host';
const SYMBOLS_ENDPOINT = `${API_BASE}/list?access_key=${API_KEY}`;
const LATEST_ENDPOINT = (base) => `${API_BASE}/live?access_key=${API_KEY}&source=${encodeURIComponent(base)}`;

// Fallback com dados estáticos (5 de dezembro de 2025)
const FALLBACK_DATA = {
  success: true,
  timestamp: 1764957968,
  source: "USD",
  quotes: {
    "USDAED": 3.673042,
    "USDAFN": 65.503991,
    "USDALL": 82.870557,
    "USDAMD": 381.503986,
    "USDANG": 1.790055,
    "USDAOA": 917.000367,
    "USDARS": 1434.006204,
    "USDAUD": 1.506251,
    "USDAWG": 1.8,
    "USDAZN": 1.70397,
    "USDBAM": 1.678705,
    "USDBBD": 2.013364,
    "USDBDT": 122.282772,
    "USDBGN": 1.679704,
    "USDBHD": 0.37694,
    "USDBIF": 2967,
    "USDBMD": 1,
    "USDBND": 1.294944,
    "USDBOB": 6.907739,
    "USDBRL": 5.419504,
    "USDBSD": 0.999601,
    "USDBTC": 0.000011171643,
    "USDBTN": 89.876145,
    "USDBWP": 13.280747,
    "USDBYN": 2.873917,
    "USDBYR": 19600,
    "USDBZD": 2.010437,
    "USDCAD": 1.38352,
    "USDCDF": 2232.000362,
    "USDCHF": 0.804604,
    "USDCLF": 0.023479,
    "USDCLP": 920.790396,
    "USDCNY": 7.070104,
    "USDCNH": 7.069715,
    "USDCOP": 3817.5,
    "USDCRC": 488.298936,
    "USDCUC": 1,
    "USDCUP": 26.5,
    "USDCVE": 95.103894,
    "USDCZK": 20.778304,
    "USDDJF": 177.720393,
    "USDDKK": 6.41315,
    "USDDOP": 64.250393,
    "USDDZD": 129.962727,
    "USDEGP": 47.565104,
    "USDERN": 15,
    "USDETB": 155.051714,
    "USDEUR": 0.85858,
    "USDFJD": 2.25845,
    "USDFKP": 0.748861,
    "USDGBP": 0.749895,
    "USDGEL": 2.703861,
    "USDGGP": 0.748861,
    "USDGHS": 11.45039,
    "USDGIP": 0.748861,
    "USDGMD": 73.000355,
    "USDGNF": 8687.503848,
    "USDGTQ": 7.657084,
    "USDGYD": 209.137648,
    "USDHKD": 7.78483,
    "USDHNL": 26.328145,
    "USDHRK": 6.471904,
    "USDHTG": 130.859652,
    "USDHUF": 328.120504,
    "USDIDR": 16691.75,
    "USDILS": 3.23571,
    "USDIMP": 0.748861,
    "USDINR": 89.978304,
    "USDIQD": 1309.540669,
    "USDIRR": 42112.503816,
    "USDISK": 127.940386,
    "USDJEP": 0.748861,
    "USDJMD": 159.999657,
    "USDJOD": 0.70904,
    "USDJPY": 155.255504,
    "USDKES": 129.303801,
    "USDKGS": 87.450384,
    "USDKHR": 4005.00035,
    "USDKMF": 422.00035,
    "USDKPW": 899.993191,
    "USDKRW": 1472.960383,
    "USDKWD": 0.30668,
    "USDKYD": 0.833083,
    "USDKZT": 505.531856,
    "USDLAK": 21676.809119,
    "USDLBP": 89516.767233,
    "USDLKR": 308.334728,
    "USDLRD": 175.938682,
    "USDLSL": 16.941802,
    "USDLTL": 2.95274,
    "USDLVL": 0.60489,
    "USDLYD": 5.434032,
    "USDMAD": 9.231238,
    "USDMDL": 17.00842,
    "USDMGA": 4458.959547,
    "USDMKD": 52.906919,
    "USDMMK": 2099.939583,
    "USDMNT": 3546.502114,
    "USDMOP": 8.016033,
    "USDMRU": 39.863012,
    "USDMUR": 46.070378,
    "USDMVR": 15.410378,
    "USDMWK": 1733.372244,
    "USDMXN": 18.17925,
    "USDMYR": 4.111039,
    "USDMZN": 63.903729,
    "USDNAD": 16.941802,
    "USDNGN": 1450.110377,
    "USDNIO": 36.787647,
    "USDNOK": 10.102855,
    "USDNPR": 143.802277,
    "USDNZD": 1.731315,
    "USDOMR": 0.384505,
    "USDPAB": 0.999682,
    "USDPEN": 3.360156,
    "USDPGK": 4.24115,
    "USDPHP": 58.978038,
    "USDPKR": 280.247111,
    "USDPLN": 3.63418,
    "USDPYG": 6875.152888,
    "USDQAR": 3.643659,
    "USDRON": 4.372704,
    "USDRSD": 100.804038,
    "USDRUB": 76.500073,
    "USDRWF": 1454.419048,
    "USDSAR": 3.753201,
    "USDSBD": 8.223823,
    "USDSCR": 13.497312,
    "USDSDG": 601.503676,
    "USDSEK": 9.40384,
    "USDSGD": 1.29557,
    "USDSHP": 0.750259,
    "USDSLE": 23.000338,
    "USDSLL": 20969.498139,
    "USDSOS": 570.266164,
    "USDSRD": 38.629038,
    "USDSTD": 20697.981008,
    "USDSTN": 21.02887,
    "USDSVC": 8.745763,
    "USDSYP": 11058.244165,
    "USDSZL": 16.928669,
    "USDTHB": 31.876038,
    "USDTJS": 9.171638,
    "USDTMT": 3.5,
    "USDTND": 2.932369,
    "USDTOP": 2.40776,
    "USDTRY": 42.504604,
    "USDTTD": 6.776446,
    "USDTWD": 31.275504,
    "USDTZS": 2435.000335,
    "USDUAH": 41.959408,
    "USDUGX": 3536.283383,
    "USDUYU": 39.096531,
    "USDUZS": 11958.989413,
    "USDVES": 248.585904,
    "USDVND": 26360,
    "USDVUV": 122.070109,
    "USDWST": 2.790151,
    "USDXAF": 563.019389,
    "USDXAG": 0.017043,
    "USDXAU": 0.000237,
    "USDXCD": 2.70255,
    "USDXCG": 1.801608,
    "USDXDR": 0.70002,
    "USDXOF": 562.932418,
    "USDXPF": 102.347136,
    "USDYER": 238.403589,
    "USDZAR": 16.93492,
    "USDZMK": 9001.203584,
    "USDZMW": 23.111058,
    "USDZWL": 321.999592
  }
};

const FALLBACK_DATE = new Date('2025-12-05');

// Mapeamento de moedas para países e bandeiras
const currencyMap = {
  "BRL": { flag: "🇧🇷", country: "Brasil" },
  "USD": { flag: "🇺🇸", country: "Estados Unidos" },
  "EUR": { flag: "🇪🇺", country: "Zona do Euro" },
  "GBP": { flag: "🇬🇧", country: "Reino Unido" },
  "JPY": { flag: "🇯🇵", country: "Japão" },
  "KRW": { flag: "🇰🇷", country: "Coreia do Sul" },
  "CNY": { flag: "🇨🇳", country: "China" },
  "INR": { flag: "🇮🇳", country: "Índia" },
  "AUD": { flag: "🇦🇺", country: "Austrália" },
  "CAD": { flag: "🇨🇦", country: "Canadá" },
  "CHF": { flag: "🇨🇭", country: "Suíça" },
  "RUB": { flag: "🇷🇺", country: "Rússia" },
  "VND": { flag: "🇻🇳", country: "Vietnã" },
  "THB": { flag: "🇹🇭", country: "Tailândia" },
  "IDR": { flag: "🇮🇩", country: "Indonésia" },
  "PHP": { flag: "🇵🇭", country: "Filipinas" },
  "MYR": { flag: "🇲🇾", country: "Malásia" },
  "SGD": { flag: "🇸🇬", country: "Singapura" },
  "ILS": { flag: "🇮🇱", country: "Israel" },
  "AED": { flag: "🇦🇪", country: "Emirados Árabes" },
  "TRY": { flag: "🇹🇷", country: "Turquia" },
  "MXN": { flag: "🇲🇽", country: "México" },
  "ZAR": { flag: "🇿🇦", country: "África do Sul" },
  "HKD": { flag: "🇭🇰", country: "Hong Kong" },
  "NGN": { flag: "🇳🇬", country: "Nigéria" },
  "ARS": { flag: "🇦🇷", country: "Argentina" },
  "CLP": { flag: "🇨🇱", country: "Chile" },
  "COP": { flag: "🇨🇴", country: "Colômbia" },
  "PEN": { flag: "🇵🇪", country: "Peru" },
  "UYU": { flag: "🇺🇾", country: "Uruguai" },
  "BGN": { flag: "🇧🇬", country: "Bulgária" },
  "CZK": { flag: "🇨🇿", country: "República Tcheca" },
  "DKK": { flag: "🇩🇰", country: "Dinamarca" },
  "HUF": { flag: "🇭🇺", country: "Hungria" },
  "NOK": { flag: "🇳🇴", country: "Noruega" },
  "PLN": { flag: "🇵🇱", country: "Polônia" },
  "RON": { flag: "🇷🇴", country: "Romênia" },
  "SEK": { flag: "🇸🇪", country: "Suécia" },
  "NZD": { flag: "🇳🇿", country: "Nova Zelândia" },
  // Moedas adicionais identificadas
  "LBP": { flag: "🇱🇧", country: "Líbano" },
  "IRR": { flag: "🇮🇷", country: "Irã" },
  "LAK": { flag: "🇱🇦", country: "Laos" },
  "SLL": { flag: "🇸🇱", country: "Serra Leoa" },
  "STD": { flag: "🇸🇹", country: "São Tomé e Príncipe" },
  "BYR": { flag: "🇧🇾", country: "Bielorrússia" },
  "UZS": { flag: "🇺🇿", country: "Uzbequistão" },
  "SYP": { flag: "🇸🇾", country: "Síria" },
  "ZMK": { flag: "🇿🇲", country: "Zâmbia" },
  "GNF": { flag: "🇬🇳", country: "Guiné" },
  "PYG": { flag: "🇵🇾", country: "Paraguai" },
  "MGA": { flag: "🇲🇬", country: "Madagascar" },
  "KHR": { flag: "🇰🇭", country: "Camboja" },
  "MNT": { flag: "🇲🇳", country: "Mongólia" },
  "UGX": { flag: "🇺🇬", country: "Uganda" },
  "BIF": { flag: "🇧🇮", country: "Burundi" },
  "TZS": { flag: "🇹🇿", country: "Tanzânia" },
  "CDF": { flag: "🇨🇩", country: "República Democrática do Congo" },
  "MMK": { flag: "🇲🇲", country: "Myanmar" },
  "MWK": { flag: "🇲🇼", country: "Malawi" },
  "RWF": { flag: "🇷🇼", country: "Ruanda" },
  "IQD": { flag: "🇮🇶", country: "Iraque" },
  "AOA": { flag: "🇦🇴", country: "Angola" },
  "KPW": { flag: "🇰🇵", country: "Coreia do Norte" },
  // Outras moedas comuns
  "AFN": { flag: "🇦🇫", country: "Afeganistão" },
  "ALL": { flag: "🇦🇱", country: "Albânia" },
  "AMD": { flag: "🇦🇲", country: "Armênia" },
  "ANG": { flag: "🇨🇼", country: "Antilhas Holandesas" },
  "AWG": { flag: "🇦🇼", country: "Aruba" },
  "AZN": { flag: "🇦🇿", country: "Azerbaijão" },
  "BAM": { flag: "🇧🇦", country: "Bósnia e Herzegovina" },
  "BBD": { flag: "🇧🇧", country: "Barbados" },
  "BDT": { flag: "🇧🇩", country: "Bangladesh" },
  "BHD": { flag: "🇧🇭", country: "Bahrein" },
  "BMD": { flag: "🇧🇲", country: "Bermudas" },
  "BND": { flag: "🇧🇳", country: "Brunei" },
  "BOB": { flag: "🇧🇴", country: "Bolívia" },
  "BSD": { flag: "🇧🇸", country: "Bahamas" },
  "BTN": { flag: "🇧🇹", country: "Butão" },
  "BWP": { flag: "🇧🇼", country: "Botswana" },
  "BZD": { flag: "🇧🇿", country: "Belize" },
  "CNH": { flag: "🇨🇳", country: "China (Offshore)" },
  "CRC": { flag: "🇨🇷", country: "Costa Rica" },
  "CUC": { flag: "🇨🇺", country: "Cuba (Convertível)" },
  "CUP": { flag: "🇨🇺", country: "Cuba" },
  "CVE": { flag: "🇨🇻", country: "Cabo Verde" },
  "DJF": { flag: "🇩🇯", country: "Djibuti" },
  "DOP": { flag: "🇩🇴", country: "República Dominicana" },
  "DZD": { flag: "🇩🇿", country: "Argélia" },
  "EGP": { flag: "🇪🇬", country: "Egito" },
  "ERN": { flag: "🇪🇷", country: "Eritreia" },
  "ETB": { flag: "🇪🇹", country: "Etiópia" },
  "FJD": { flag: "🇫🇯", country: "Fiji" },
  "FKP": { flag: "🇫🇰", country: "Ilhas Falkland" },
  "GEL": { flag: "🇬🇪", country: "Geórgia" },
  "GGP": { flag: "🇬🇬", country: "Guernsey" },
  "GHS": { flag: "🇬🇭", country: "Gana" },
  "GIP": { flag: "🇬🇮", country: "Gibraltar" },
  "GMD": { flag: "🇬🇲", country: "Gâmbia" },
  "GTQ": { flag: "🇬🇹", country: "Guatemala" },
  "GYD": { flag: "🇬🇾", country: "Guiana" },
  "HNL": { flag: "🇭🇳", country: "Honduras" },
  "HRK": { flag: "🇭🇷", country: "Croácia" },
  "HTG": { flag: "🇭🇹", country: "Haiti" },
  "IMP": { flag: "🇮🇲", country: "Ilha de Man" },
  "JEP": { flag: "🇯🇪", country: "Jersey" },
  "JMD": { flag: "🇯🇲", country: "Jamaica" },
  "JOD": { flag: "🇯🇴", country: "Jordânia" },
  "KES": { flag: "🇰🇪", country: "Quênia" },
  "KGS": { flag: "🇰🇬", country: "Quirguistão" },
  "KMF": { flag: "🇰🇲", country: "Comores" },
  "KWD": { flag: "🇰🇼", country: "Kuwait" },
  "KYD": { flag: "🇰🇾", country: "Ilhas Cayman" },
  "KZT": { flag: "🇰🇿", country: "Cazaquistão" },
  "LKR": { flag: "🇱🇰", country: "Sri Lanka" },
  "LRD": { flag: "🇱🇷", country: "Libéria" },
  "LSL": { flag: "🇱🇸", country: "Lesoto" },
  "LTL": { flag: "🇱🇹", country: "Lituânia" },
  "LVL": { flag: "🇱🇻", country: "Letônia" },
  "LYD": { flag: "🇱🇾", country: "Líbia" },
  "MAD": { flag: "🇲🇦", country: "Marrocos" },
  "MDL": { flag: "🇲🇩", country: "Moldávia" },
  "MKD": { flag: "🇲🇰", country: "Macedônia do Norte" },
  "MOP": { flag: "🇲🇴", country: "Macau" },
  "MRU": { flag: "🇲🇷", country: "Mauritânia" },
  "MUR": { flag: "🇲🇺", country: "Maurício" },
  "MVR": { flag: "🇲🇻", country: "Maldivas" },
  "MZN": { flag: "🇲🇿", country: "Moçambique" },
  "NAD": { flag: "🇳🇦", country: "Namíbia" },
  "NIO": { flag: "🇳🇮", country: "Nicarágua" },
  "NPR": { flag: "🇳🇵", country: "Nepal" },
  "OMR": { flag: "🇴🇲", country: "Omã" },
  "PAB": { flag: "🇵🇦", country: "Panamá" },
  "PKR": { flag: "🇵🇰", country: "Paquistão" },
  "PGK": { flag: "🇵🇬", country: "Papua Nova Guiné" },
  "QAR": { flag: "🇶🇦", country: "Catar" },
  "RSD": { flag: "🇷🇸", country: "Sérvia" },
  "SAR": { flag: "🇸🇦", country: "Arábia Saudita" },
  "SBD": { flag: "🇸🇧", country: "Ilhas Salomão" },
  "SCR": { flag: "🇸🇨", country: "Seicheles" },
  "SDG": { flag: "🇸🇩", country: "Sudão" },
  "SHP": { flag: "🇸🇭", country: "Santa Helena" },
  "SLE": { flag: "🇸🇱", country: "Serra Leoa" },
  "SOS": { flag: "🇸🇴", country: "Somália" },
  "SRD": { flag: "🇸🇷", country: "Suriname" },
  "STN": { flag: "🇸🇹", country: "São Tomé e Príncipe" },
  "SVC": { flag: "🇸🇻", country: "El Salvador" },
  "SZL": { flag: "🇸🇿", country: "Suazilândia" },
  "TJS": { flag: "🇹🇯", country: "Tajiquistão" },
  "TMT": { flag: "🇹🇲", country: "Turcomenistão" },
  "TND": { flag: "🇹🇳", country: "Tunísia" },
  "TOP": { flag: "🇹🇴", country: "Tonga" },
  "TTD": { flag: "🇹🇹", country: "Trinidad e Tobago" },
  "TWD": { flag: "🇹🇼", country: "Taiwan" },
  "UAH": { flag: "🇺🇦", country: "Ucrânia" },
  "VES": { flag: "🇻🇪", country: "Venezuela" },
  "VUV": { flag: "🇻🇺", country: "Vanuatu" },
  "WST": { flag: "🇼🇸", country: "Samoa" },
  "XAF": { flag: "🇨🇲", country: "Franco CFA (África Central)" },
  "XCD": { flag: "🇦🇬", country: "Dólar do Caribe Oriental" },
  "XOF": { flag: "🇸🇳", country: "Franco CFA (África Ocidental)" },
  "XPF": { flag: "🇵🇫", country: "Franco CFP" },
  "YER": { flag: "🇾🇪", country: "Iêmen" },
  "ZMW": { flag: "🇿🇲", country: "Zâmbia" },
  "ZWL": { flag: "🇿🇼", country: "Zimbábue" },
  "BTC": { flag: "₿", country: "Bitcoin" },
  "BYN": { flag: "🇧🇾", country: "Bielorrússia (Novo Rublo)" },
  "CLF": { flag: "🇨🇱", country: "Chile (Unidade de Fomento)" },
  "XAG": { flag: "🥈", country: "Prata" },
  "XAU": { flag: "🥇", country: "Ouro" },
  "XCG": { flag: "🌍", country: "Moeda Especial" },
  "XDR": { flag: "🌐", country: "Direitos Especiais de Saque (FMI)" }
};

// ============================================
// Estado Global
// ============================================
let currentLang = localStorage.getItem('lang') || 'pt-BR';
let currentTheme = localStorage.getItem('theme') || 'dark';
let currentResults = [];

// ============================================
// Inicialização
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initializeTheme();
  initializeLanguage();
  initializeEventListeners();
  
  // Converter automaticamente se houver valor no input
  const salaryInput = document.getElementById('salaryInput');
  if (salaryInput) {
    // Define valor inicial
    const initialValue = salaryInput.value || '6580';
    salaryInput.dataset.rawValue = initialValue;
    
    // Formata o valor inicial após um pequeno delay
    setTimeout(() => {
      formatCurrencyInput({ target: salaryInput });
      if (parseFloat(initialValue) > 0) {
        setTimeout(() => doConvert(), 800);
      }
    }, 200);
  }
  
  // Atualizar máscara quando mudar a moeda base
  const baseCurrency = document.getElementById('baseCurrency');
  if (baseCurrency) {
    baseCurrency.addEventListener('change', () => {
      if (salaryInput && salaryInput.dataset.rawValue) {
        formatCurrencyInput({ target: salaryInput });
      }
    });
  }
});

// ============================================
// Tema (Dark/Light Mode)
// ============================================
function initializeTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  
  html.setAttribute('data-theme', currentTheme);
  updateThemeToggle();
  
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
}

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', currentTheme);
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeToggle();
}

function updateThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const t = translations[currentLang];
  if (themeToggle) {
    themeToggle.innerHTML = currentTheme === 'dark' 
      ? `☀️ ${t.lightMode}` 
      : `🌙 ${t.darkMode}`;
  }
}

// ============================================
// Idioma
// ============================================
function initializeLanguage() {
  const langSelect = document.getElementById('langSelect');
  
  if (langSelect) {
    langSelect.value = currentLang;
    langSelect.addEventListener('change', (e) => {
      currentLang = e.target.value;
      localStorage.setItem('lang', currentLang);
      applyTranslations();
      updateThemeToggle();
    });
  }
  
  applyTranslations();
}

function applyTranslations() {
  const t = translations[currentLang];
  if (!t) return;
  
  // Atualizar elementos da página
  const elements = {
    'heroSubtitle': t.subtitle,
    'salaryInput': t.inputPlaceholder,
    'convertBtn': t.convertBtn,
    'shareTitle': t.shareTitle,
    'emptyStateText': t.emptyState,
    'footerDescription': t.footerDescription,
    'footerDeveloped': t.footerDeveloped,
    'footerDataBy': t.footerDataBy
  };
  
  // Atualizar título do hero com emoji
  const heroTitle = document.getElementById('heroTitle');
  if (heroTitle) {
    heroTitle.innerHTML = t.title.replace('💰', '<span class="hero-emoji">💰</span>');
  }
  
  Object.entries(elements).forEach(([id, text]) => {
    const el = document.getElementById(id);
    if (el) {
      if (id === 'salaryInput') {
        el.placeholder = text;
      } else {
        el.textContent = text;
      }
    }
  });
  
  // Atualizar labels de estatísticas
  const stat1Label = document.getElementById('stat1Label');
  const stat2Label = document.getElementById('stat2Label');
  const stat3Label = document.getElementById('stat3Label');
  
  if (stat1Label) {
    const count = currentResults.length > 0 
      ? currentResults.filter(r => r.status === 'million').length 
      : 0;
    stat1Label.textContent = t.millionaireInCountries.replace('X', count.toString());
  }
  if (stat2Label) {
    stat2Label.textContent = t.bestCountry;
  }
  if (stat3Label) {
    const count = currentResults.length > 0 
      ? currentResults.filter(r => r.status === 'million').length 
      : 0;
    stat3Label.textContent = t.millionaireInCurrencies.replace('X', count.toString());
  }
  
  // Atualizar resultados se existirem
  if (currentResults.length > 0) {
    renderCountryCards(currentResults);
    updateStats(currentResults);
  }
}

// ============================================
// Event Listeners
// ============================================
function initializeEventListeners() {
  const convertBtn = document.getElementById('convertBtn');
  const salaryInput = document.getElementById('salaryInput');
  
  if (convertBtn) {
    convertBtn.addEventListener('click', doConvert);
  }
  
  if (salaryInput) {
    // Máscara de dinheiro
    salaryInput.addEventListener('input', handleCurrencyInput);
    salaryInput.addEventListener('blur', formatCurrencyInput);
    salaryInput.addEventListener('focus', (e) => {
      // Remove formatação ao focar para facilitar edição
      let value = e.target.value.replace(/[^\d,.-]/g, '').replace(',', '.');
      if (value) {
        e.target.value = value;
        e.target.dataset.rawValue = parseFloat(value) || 0;
      }
    });
    
    salaryInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        formatCurrencyInput({ target: salaryInput });
        doConvert();
      }
    });
  }
}

// Função para processar input em tempo real (permite digitação livre)
function handleCurrencyInput(e) {
  const input = e.target;
  let value = input.value;
  
  // Remove símbolo da moeda e espaços, mantém apenas números, vírgula e ponto
  value = value.replace(/[^\d,.-]/g, '');
  
  // Se tiver vírgula, substitui por ponto
  value = value.replace(',', '.');
  
  // Remove pontos extras, mantém apenas o último
  const parts = value.split('.');
  if (parts.length > 2) {
    value = parts[0] + '.' + parts.slice(1).join('');
  }
  
  // Limita a 2 casas decimais
  if (value.includes('.')) {
    const [intPart, decPart] = value.split('.');
    if (decPart && decPart.length > 2) {
      value = intPart + '.' + decPart.substring(0, 2);
    }
  }
  
  // Salva valor numérico
  const numValue = parseFloat(value) || 0;
  input.dataset.rawValue = numValue.toString();
  
  // Atualiza visualmente com símbolo da moeda
  const baseCurrency = document.getElementById('baseCurrency')?.value || 'BRL';
  const currencySymbols = {
    'BRL': 'R$',
    'USD': '$',
    'EUR': '€',
    'GBP': '£',
    'JPY': '¥',
    'CNY': '¥',
    'INR': '₹',
    'AUD': 'A$',
    'CAD': 'C$',
    'CHF': 'CHF '
  };
  
  // Mostra símbolo + valor digitado
  if (value) {
    input.value = (currencySymbols[baseCurrency] || '') + ' ' + value;
  } else {
    input.value = '';
  }
}

// Função para formatar input como moeda (ao perder foco)
function formatCurrencyInput(e) {
  const input = e.target;
  let value = input.value;
  
  // Remove tudo exceto números, vírgula e ponto
  value = value.replace(/[^\d,.-]/g, '');
  value = value.replace(',', '.');
  
  // Converte para número
  const numValue = parseFloat(value) || 0;
  
  // Formata com separador de milhares e 2 casas decimais
  if (numValue > 0) {
    const locale = currentLang === 'pt-BR' ? 'pt-BR' : currentLang === 'es' ? 'es-ES' : 'en-US';
    const formatted = numValue.toLocaleString(locale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    
    // Adiciona símbolo da moeda base
    const baseCurrency = document.getElementById('baseCurrency')?.value || 'BRL';
    const currencySymbols = {
      'BRL': 'R$',
      'USD': '$',
      'EUR': '€',
      'GBP': '£',
      'JPY': '¥',
      'CNY': '¥',
      'INR': '₹',
      'AUD': 'A$',
      'CAD': 'C$',
      'CHF': 'CHF '
    };
    
    input.value = (currencySymbols[baseCurrency] || '') + ' ' + formatted;
    input.dataset.rawValue = numValue.toString();
  } else {
    input.value = '';
    input.dataset.rawValue = '0';
  }
}

// ============================================
// Conversão Principal
// ============================================
async function doConvert() {
  const salaryInput = document.getElementById('salaryInput');
  const baseCurrency = document.getElementById('baseCurrency');
  const convertBtn = document.getElementById('convertBtn');
  const updateInfo = document.getElementById('updateInfo');
  const countriesSection = document.getElementById('countriesSection');
  
  // Extrai número do valor formatado
  let salaryRaw = 0;
  if (salaryInput.dataset.rawValue) {
    salaryRaw = parseFloat(salaryInput.dataset.rawValue) || 0;
  } else {
    // Fallback: tenta extrair do valor formatado
    let salaryValue = salaryInput.value.replace(/[^\d,.-]/g, '').replace(',', '.');
    salaryRaw = parseFloat(salaryValue) || 0;
  }
  const base = baseCurrency.value || 'BRL';
  const t = translations[currentLang];
  
  if (!salaryRaw || salaryRaw <= 0) {
    const errorMsg = currentLang === 'pt-BR' 
      ? '💰 Por favor, informe um salário válido maior que zero!' 
      : currentLang === 'en' 
      ? '💰 Please enter a valid salary greater than zero!' 
      : '💰 ¡Por favor ingresa un salario válido mayor que cero!';
    alert(errorMsg);
    salaryInput.focus();
    return;
  }
  
  // UI Loading
  convertBtn.disabled = true;
  convertBtn.innerHTML = `<span class="loading"></span> ${t.loading}`;
  updateInfo.textContent = t.loading;
  
  if (countriesSection) {
    countriesSection.innerHTML = '';
  }
  
  let ratesJson, symbolsJson, usingFallback = false;
  
  try {
    const [ratesResp, symbolsResp] = await Promise.all([
      fetch(LATEST_ENDPOINT(base)),
      fetch(SYMBOLS_ENDPOINT)
    ]);
    
    if (!ratesResp.ok || !symbolsResp.ok) {
      throw new Error('Erro ao buscar taxas');
    }
    
    ratesJson = await ratesResp.json();
    symbolsJson = await symbolsResp.json();
    
    // Verifica se a resposta da API foi bem-sucedida
    if (!ratesJson.success || ratesJson.error) {
      throw new Error('Erro na API');
    }
    
    if (!symbolsJson.success || symbolsJson.error) {
      throw new Error('Erro ao buscar símbolos');
    }
    
  } catch (error) {
    // Usa fallback em caso de erro
    console.warn('Erro ao buscar dados da API, usando fallback:', error);
    ratesJson = FALLBACK_DATA;
    symbolsJson = { success: true, currencies: {} };
    usingFallback = true;
  }
  
  // A API retorna as taxas em 'quotes' com formato 'BASEUSD', 'BASEEUR', etc.
  // Exemplo: {USDAED: 3.67, USDEUR: 0.86, ...}
  const quotes = ratesJson.quotes || {};
  const rates = {};
  
  // A moeda base está em 'source' (ex: 'USD')
  // Se a moeda base não for USD, precisamos converter
  const source = ratesJson.source || 'USD';
  
  // Se a moeda base selecionada não for USD, precisamos converter as taxas
  if (base !== 'USD' && source === 'USD') {
    // Converte de USD para a moeda base selecionada
    const baseToUsd = quotes[`USD${base}`] || 1;
    
    for (const [key, value] of Object.entries(quotes)) {
      if (key.startsWith('USD')) {
        const currency = key.replace('USD', '');
        if (currency) {
          // Converte: valor em USD / taxa da moeda base em USD = valor na moeda base
          rates[currency] = value / baseToUsd;
        }
      }
    }
    
    // Adiciona a moeda base com valor 1.0
    rates[base] = 1.0;
    // Adiciona USD convertido
    rates['USD'] = 1 / baseToUsd;
  } else {
    // Converte quotes para formato simples {USD: 1.0, EUR: 0.86, AED: 3.67, ...}
    for (const [key, value] of Object.entries(quotes)) {
      // Remove o prefixo da moeda base (ex: 'USDEUR' -> 'EUR', 'USDBRL' -> 'BRL')
      const currency = key.replace(source, '');
      if (currency) {
        rates[currency] = value;
      }
    }
    
    // Adiciona a moeda base com valor 1.0
    rates[source] = 1.0;
  }
  
  // A API retorna símbolos em 'currencies' ou 'symbols'
  const symbols = symbolsJson.currencies || symbolsJson.symbols || {};
  
  // Define a data de atualização
  let updatedAt;
  if (usingFallback) {
    // Usa data do fallback: 5 de dezembro de 2025
    updatedAt = FALLBACK_DATE.toLocaleDateString(currentLang, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  } else {
    // Usa data atual da API ou data atual
    updatedAt = ratesJson.timestamp 
      ? new Date(ratesJson.timestamp * 1000).toLocaleDateString(currentLang, {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })
      : new Date().toLocaleDateString(currentLang, {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        });
  }
  
  updateInfo.textContent = `${t.updated} ${updatedAt}`;
  
  const salary = salaryRaw;
  const results = [];
  
  // Processar todas as moedas
  for (const [code, rate] of Object.entries(rates)) {
      // A taxa já está em relação à moeda base
      const amount = salary * rate;
      const pctOfMillion = (amount / MILLION) * 100;
      let status = 'no';
      
      if (amount >= MILLION) {
        status = 'million';
      } else if (amount >= NEAR_THRESHOLD) {
        status = 'near';
      }
      
      results.push({
        code,
        name: symbols[code]?.description || code,
        rate,
        amount,
        pctOfMillion,
        status
      });
    }
    
  // Ordenar: milionários primeiro, depois próximos, depois por valor
  results.sort((a, b) => {
    const weight = s => s === 'million' ? 2 : (s === 'near' ? 1 : 0);
    const dw = weight(b.status) - weight(a.status);
    if (dw !== 0) return dw;
    return b.amount - a.amount;
  });
  
  currentResults = results;
  
  // Atualizar estatísticas
  updateStats(results);
  
  // Resetar página ao fazer nova busca
  currentPage = 1;
  
  // Renderizar cards de países
  renderCountryCards(results);
  
  // Finaliza loading
  convertBtn.disabled = false;
  convertBtn.textContent = t.convertBtn;
}

// ============================================
// Atualizar Estatísticas
// ============================================
function updateStats(results) {
  const stat1 = document.getElementById('stat1');
  const stat2 = document.getElementById('stat2');
  const stat3 = document.getElementById('stat3');
  const stat1Label = document.getElementById('stat1Label');
  const stat2Label = document.getElementById('stat2Label');
  const stat3Label = document.getElementById('stat3Label');
  
  const t = translations[currentLang];
  
  // Milionários
  const millionaires = results.filter(r => r.status === 'million');
  const millionCount = millionaires.length;
  
  // País onde o salário vale mais (maior valor)
  const bestResult = results.length > 0 ? results[0] : null;
  let bestCountryText = '—';
  if (bestResult) {
    const map = currencyMap[bestResult.code] || null;
    const countryName = map ? map.country : bestResult.name;
    const flag = map ? map.flag : '🌍';
    
    // Formata o valor
    const formattedAmount = bestResult.amount >= 1 
      ? bestResult.amount.toLocaleString(currentLang, { 
          maximumFractionDigits: 2,
          minimumFractionDigits: 2
        })
      : bestResult.amount.toExponential(2);
    
    bestCountryText = `${flag} ${countryName}\n${bestResult.code} ${formattedAmount}`;
  }
  
  // Total de moedas onde é milionário
  const totalCurrencies = millionCount;
  
  // Atualizar labels e valores
  if (stat1Label) {
    stat1Label.textContent = t.millionaireInCountries.replace('X', millionCount.toString());
  }
  if (stat1) {
    stat1.textContent = `${millionCount} ${millionCount === 1 ? (currentLang === 'pt-BR' ? 'país' : currentLang === 'en' ? 'country' : 'país') : (currentLang === 'pt-BR' ? 'países' : currentLang === 'en' ? 'countries' : 'países')}`;
  }
  
  if (stat2Label) {
    stat2Label.textContent = t.bestCountry;
  }
  if (stat2) {
    // Usa innerHTML para permitir quebra de linha e formatação
    const parts = bestCountryText.split('\n');
    if (parts.length > 1) {
      stat2.innerHTML = `<div style="font-size: 1.1rem; font-weight: 600; margin-bottom: 0.3rem;">${parts[0]}</div><div style="font-size: 0.9rem; color: var(--primary); font-weight: 600;">${parts[1]}</div>`;
    } else {
      stat2.textContent = bestCountryText;
    }
    stat2.style.fontSize = '1rem';
    stat2.style.lineHeight = '1.4';
    stat2.style.textAlign = 'center';
  }
  
  if (stat3Label) {
    stat3Label.textContent = t.millionaireInCurrencies.replace('X', totalCurrencies.toString());
  }
  if (stat3) {
    stat3.textContent = `${totalCurrencies} ${totalCurrencies === 1 ? (currentLang === 'pt-BR' ? 'moeda' : currentLang === 'en' ? 'currency' : 'moneda') : (currentLang === 'pt-BR' ? 'moedas' : currentLang === 'en' ? 'currencies' : 'monedas')}`;
  }
}

// ============================================
// Renderizar Cards de Países
// ============================================
let currentPage = 1;
const CARDS_PER_PAGE = 9;

function renderCountryCards(results) {
  const countriesSection = document.getElementById('countriesSection');
  if (!countriesSection) return;
  
  const t = translations[currentLang];
  const millionaires = results.filter(r => r.status === 'million');
  const near = results.filter(r => r.status === 'near');
  
  let html = '';
  let cardsToShow = [];
  let title = '';
  let subtitle = '';
  
  // Se houver milionários, mostrar eles
  if (millionaires.length > 0) {
    title = t.countriesTitle;
    cardsToShow = millionaires;
  } else if (near.length > 0) {
    // Se não houver milionários, mostrar os próximos
    title = t.countriesNearTitle;
    subtitle = t.noMillionaires;
    cardsToShow = near;
  } else {
    // Se não houver nenhum, mostrar os 4 com maior valor
    title = t.countriesNearTitle;
    subtitle = t.noMillionaires;
    cardsToShow = results;
  }
  
  // Resetar página se necessário
  const totalPages = Math.ceil(cardsToShow.length / CARDS_PER_PAGE);
  if (currentPage > totalPages && totalPages > 0) {
    currentPage = totalPages;
  }
  
  // Calcular índices para paginação
  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const endIndex = startIndex + CARDS_PER_PAGE;
  const paginatedCards = cardsToShow.slice(startIndex, endIndex);
  
  // Renderizar título e subtítulo
  html += `<h2 class="animate-slide-up">${title}</h2>`;
  if (subtitle) {
    html += `<p style="text-align: center; color: var(--text-muted); margin-bottom: 2rem;">${subtitle}</p>`;
  }
  
  // Renderizar cards
  html += '<div class="countries-grid" id="countriesGrid">';
  paginatedCards.forEach((result, index) => {
    html += createCountryCard(result, index);
  });
  html += '</div>';
  
  // Adicionar paginação se houver mais de 9 cards
  if (cardsToShow.length > CARDS_PER_PAGE) {
    html += createPagination(totalPages, t);
  }
  
  countriesSection.innerHTML = html;
  
  // Adicionar event listeners para paginação
  if (cardsToShow.length > CARDS_PER_PAGE) {
    attachPaginationListeners();
  }
}

function createPagination(totalPages, t) {
  let html = '<div class="pagination">';
  
  // Botão Anterior
  html += `<button class="pagination-btn" id="prevPage" ${currentPage === 1 ? 'disabled' : ''}>
    ${t.previousPage}
  </button>`;
  
  // Números de página
  html += '<div class="pagination-numbers">';
  
  // Mostrar primeiras páginas
  const maxVisible = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let endPage = Math.min(totalPages, startPage + maxVisible - 1);
  
  if (endPage - startPage < maxVisible - 1) {
    startPage = Math.max(1, endPage - maxVisible + 1);
  }
  
  if (startPage > 1) {
    html += `<button class="pagination-number" data-page="1">1</button>`;
    if (startPage > 2) {
      html += '<span class="pagination-ellipsis">...</span>';
    }
  }
  
  for (let i = startPage; i <= endPage; i++) {
    html += `<button class="pagination-number ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
  }
  
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      html += '<span class="pagination-ellipsis">...</span>';
    }
    html += `<button class="pagination-number" data-page="${totalPages}">${totalPages}</button>`;
  }
  
  html += '</div>';
  
  // Botão Próxima
  html += `<button class="pagination-btn" id="nextPage" ${currentPage === totalPages ? 'disabled' : ''}>
    ${t.nextPage}
  </button>`;
  
  // Info da página
  html += `<span class="pagination-info">${t.page} ${currentPage} ${t.of} ${totalPages}</span>`;
  
  html += '</div>';
  return html;
}

function attachPaginationListeners() {
  const prevBtn = document.getElementById('prevPage');
  const nextBtn = document.getElementById('nextPage');
  const pageNumbers = document.querySelectorAll('.pagination-number');
  
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        renderCountryCards(currentResults);
        window.scrollTo({ top: document.getElementById('countriesSection').offsetTop - 100, behavior: 'smooth' });
      }
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const totalPages = Math.ceil((currentResults.filter(r => r.status === 'million').length || 
                                   currentResults.filter(r => r.status === 'near').length || 
                                   currentResults.length) / CARDS_PER_PAGE);
      if (currentPage < totalPages) {
        currentPage++;
        renderCountryCards(currentResults);
        window.scrollTo({ top: document.getElementById('countriesSection').offsetTop - 100, behavior: 'smooth' });
      }
    });
  }
  
  pageNumbers.forEach(btn => {
    btn.addEventListener('click', () => {
      const page = parseInt(btn.dataset.page);
      if (page !== currentPage) {
        currentPage = page;
        renderCountryCards(currentResults);
        window.scrollTo({ top: document.getElementById('countriesSection').offsetTop - 100, behavior: 'smooth' });
      }
    });
  });
}

function createCountryCard(result, index) {
  const t = translations[currentLang];
  const map = currencyMap[result.code] || null;
  const flag = map ? map.flag : '🌍';
  const countryName = map ? map.country : result.name;
  
  const fmtAmount = result.amount >= 1 
    ? result.amount.toLocaleString(currentLang, { maximumFractionDigits: 2 })
    : result.amount.toExponential(2);
  
  const pct = result.pctOfMillion.toFixed(1) + '%';
  
  let statusLabel = '';
  let emoji = '';
  if (result.status === 'million') {
    statusLabel = t.millionaire;
    emoji = '🎉';
  } else if (result.status === 'near') {
    statusLabel = t.near;
    emoji = '🔥';
  } else {
    statusLabel = t.notYet;
    emoji = '💪';
  }
  
  const cardClass = result.status === 'million' 
    ? 'country-card millionaire' 
    : (result.status === 'near' ? 'country-card near' : 'country-card');
  
  const statusClass = result.status === 'million' 
    ? 'country-status millionaire' 
    : (result.status === 'near' ? 'country-status near' : 'country-status no');
  
  return `
    <div class="${cardClass}" style="animation-delay: ${index * 0.1}s">
      <span class="country-flag">${flag}</span>
      <div class="country-code">${escapeHtml(result.code)}</div>
      <div class="country-name">${escapeHtml(countryName)}</div>
      <div class="country-amount">${fmtAmount}</div>
      <div class="country-percentage">${pct} ${t.ofMillion}</div>
      <span class="${statusClass}">${emoji} ${escapeHtml(statusLabel)}</span>
    </div>
  `;
}

// ============================================
// Compartilhar
// ============================================
function shareOnTwitter() {
  const t = translations[currentLang];
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(t.shareText);
  const twitterUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
  window.open(twitterUrl, '_blank', 'width=550,height=420');
}

function shareOnFacebook() {
  const url = encodeURIComponent(window.location.href);
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  window.open(facebookUrl, '_blank', 'width=550,height=420');
}

function shareOnWhatsApp() {
  const t = translations[currentLang];
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(t.shareText + ' ' + window.location.href);
  const whatsappUrl = `https://wa.me/?text=${text}`;
  window.open(whatsappUrl, '_blank');
}

function shareOnLinkedIn() {
  const url = window.location.href;
  // LinkedIn Share API - formato oficial
  // O LinkedIn não aceita parâmetros adicionais na URL, apenas o URL
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  
  // Abre em nova janela com tamanho adequado
  const width = 550;
  const height = 420;
  const left = (screen.width - width) / 2;
  const top = (screen.height - height) / 2;
  
  window.open(
    linkedInUrl,
    'linkedin-share',
    `width=${width},height=${height},left=${left},top=${top},toolbar=0,menubar=0,scrollbars=1,resizable=1`
  );
}

async function copyLink() {
  try {
    await navigator.clipboard.writeText(window.location.href);
    const btn = document.getElementById('copyBtn');
    if (btn) {
      const t = translations[currentLang];
      const originalText = btn.textContent;
      btn.textContent = '✓ ' + (currentLang === 'pt-BR' ? 'Copiado!' : currentLang === 'en' ? 'Copied!' : '¡Copiado!');
      btn.style.background = 'var(--primary-dark)';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
      }, 2000);
    }
  } catch (err) {
    console.error('Erro ao copiar:', err);
    alert('Não foi possível copiar o link. Tente manualmente.');
  }
}

// ============================================
// Utilitários
// ============================================
function escapeHtml(s) {
  return String(s).replace(/[&<>"]/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;'
  }[c]));
}

// Exportar funções para uso global
window.shareOnTwitter = shareOnTwitter;
window.shareOnFacebook = shareOnFacebook;
window.shareOnWhatsApp = shareOnWhatsApp;
window.shareOnLinkedIn = shareOnLinkedIn;
window.copyLink = copyLink;


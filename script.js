window.addEventListener("DOMContentLoaded", function () {
  mostrarMensaje();
});

function mostrarMensaje() {
  alert("Bienvenido a SmartBridge, para continuar da click en el logo ;)");
}

function reproducirAudio() {
  const audio = new Audio(
    "https://cdn.glitch.global/fcfe30c5-97d7-4b64-8739-93c0a8aaf77c/bienvenida.mp3?v=1684424798636"
  );
  audio.play();

  audio.onended = function () {
    iniciarEscuchaContinua();
  };
}

function iniciarEscuchaContinua() {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = "es";

  recognition.continuous = true;
  recognition.onresult = function (event) {
    const resultado =
      event.results[event.results.length - 1][0].transcript.toLowerCase();

    if (resultado.includes("repetir")) {
      const audioInicio = new Audio(
        "https://cdn.glitch.global/fcfe30c5-97d7-4b64-8739-93c0a8aaf77c/bienvenida.mp3?v=1684424798636"
      );
      audioInicio.play();
    } else if (resultado.includes("inicio")) {
      const audioSuperior = new Audio(
        "https://cdn.glitch.global/fcfe30c5-97d7-4b64-8739-93c0a8aaf77c/superior.mp3?v=1684424808994"
      );
      audioSuperior.play();
      window.location.href = "#superior";
    } else if (resultado.includes("redes sociales")) {
      const audioRedesSociales = new Audio(
        "https://cdn.glitch.global/fcfe30c5-97d7-4b64-8739-93c0a8aaf77c/redesNuevo.mp3?v=1684381060155"
      );
      audioRedesSociales.play();
      window.location.href = "#Redes";
    } else if (resultado.includes("somos")) {
      const audioQ = new Audio(
        "https://cdn.glitch.global/fcfe30c5-97d7-4b64-8739-93c0a8aaf77c/quienes%20somos.mp3?v=1684424803839"
      );
      audioQ.play();
      window.location.href = "#q";
    } else if (resultado.includes("whatsapp")) {
      window.open("https://web.whatsapp.com/");
    } else if (resultado.includes("twitter")) {
      window.open(
        "https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZXMifQ%3D%3D%22%7D"
      );
    } else if (resultado.includes("reddit")) {
      window.open("https://www.reddit.com/login/");
    } else if (resultado.includes("facebook")) {
      window.open(
        "https://es-la.facebook.com/login/device-based/regular/login/"
      );
    } else if (resultado.includes("pinterest")) {
      window.open("https://www.reddit.com/login/");
    } else if (resultado.includes("messenger")) {
      window.open("https://www.facebook.com/messenger/?locale=es_LA");
    } else if (resultado.includes("tumblr")) {
      window.open("https://www.tumblr.com/login?language=es_ES");
    } else if (resultado.includes("discord")) {
      window.open("https://discord.com/login");
    } else if (resultado.includes("tinder")) {
      window.open("https://tinder.com/es");
    } else if (resultado.includes("telegram")) {
      window.open("https://web.telegram.org/k/");
    } else if (resultado.includes("entretenimiento")) {
      const audioEntretenimiento = new Audio(
        "https://cdn.glitch.global/fcfe30c5-97d7-4b64-8739-93c0a8aaf77c/Entretenimiento.mp3?v=1685496307539"
      );
      audioEntretenimiento.play();
      window.location.href = "#Entretenimiento";
    } else if (resultado.includes("hbo")) {
      window.open("https://play.hbomax.com/signIn");
    } else if (resultado.includes("kawai")) {
      window.open("https://www.kwai.com/es");
    } else if (resultado.includes("disney")) {
      window.open("https://www.disneyplus.com/es-419/login");
    } else if (resultado.includes("crunchyroll")) {
      window.open(
        "https://www.crunchyroll.com/es/offer-premium/login?utm_source=google&utm_medium=paid_cr&utm_campaign=CR-Paid_Google_Web_Conversion_LATAM_ALL_Trademark_SVOD&utm_term=crunchyroll&referrer=google_paid_cr_CR-Paid_Google_Web_Conversion_LATAM_ALL_Trademark_SVOD&gclid=CjwKCAjwvdajBhBEEiwAeMh1U-lKsNbeuMRStR_YFQ1lX_tNPUatRrFSnobAes2PPsafa8dP7owVHBoCRFQQAvD_BwE"
      );
    } else if (resultado.includes("prime video")) {
      window.open(
        "https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fna.primevideo.com%2Fauth%2Freturn%2Fref%3Dav_auth_ap%3F_t%3Dsg1kszTNHHWqZ5WccQ8SR6s16kDzgnlJk_0ACSeb-N-THAAAAAQAAAABkdo4RcmF3AAAAAPgWC9WfHH8iB-olH_E9xQ%26location%3Dhttps%3A%2F%2Fwww.primevideo.com%2Fsignup%3Fref_%253Ddvm_oth_oth_nl_gr_s_MLP_bemovil&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&accountStatusPolicy=P1&openid.assoc_handle=amzn_prime_video_sso_us&openid.mode=checkid_setup&siteState=131-4828147-8542409&language=es_ES&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0"
      );
    } else if (resultado.includes("ulu")) {
      window.open("https://signup.hulu.com/plans");
    } else if (resultado.includes("vimeo")) {
      window.open(
        "https://vimeo.com/es/upgrade?utm_medium=cpc&utm_source=google&utm_campaign=Core_Search_INTL_ES_Google_Brand&utm_term=vimeo&utm_adgroup=Vimeo+-+Exact&campaignid=19614554638&adgroupid=149233244567&device=c&gclid=CjwKCAjwvdajBhBEEiwAeMh1U90rr1DBg2kCcBzp42kUmLmAtk5FN-PwxaITHtead9BuC-hZlv8G-BoCkQMQAvD_BwE&gclsrc=aw.ds"
      );
    } else if (resultado.includes("noticias")) {
      const audioNoticias = new Audio(
        "https://cdn.glitch.global/fcfe30c5-97d7-4b64-8739-93c0a8aaf77c/Noticias.mp3?v=1685496970360"
      );
      audioNoticias.play();
      window.location.href = "#Noticias";
    } else if (resultado.includes("el tiempo")) {
      window.open("https://www.eltiempo.com/");
    } else if (resultado.includes("semana")) {
      window.open("https://www.semana.com/");
    } else if (resultado.includes("el colombiano")) {
      window.open("https://www.elcolombiano.com/");
    } else if (resultado.includes("la republica")) {
      window.open("https://www.larepublica.co/");
    } else if (resultado.includes("pulzo")) {
      window.open("https://www.pulzo.com/");
    } else if (resultado.includes("trabajo")) {
      const audioTrabajo = new Audio(
        "https://cdn.glitch.global/fcfe30c5-97d7-4b64-8739-93c0a8aaf77c/Trabajo.mp3?v=1685497167045"
      );
      audioTrabajo.play();
      window.location.href = "#Trabajo";
    } else if (resultado.includes("teams")) {
      window.open(
        "https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?client_id=5e3ce6c0-2b1f-4285-8d4b-75ee78787346&scope=https%3A%2F%2Fapi.spaces.skype.com%2F.default%20openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fteams.microsoft.com%2Fgo&client-request-id=5ea6c051-f59e-4b07-a8d7-ea412b0ffd4d&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.19.0&x-client-OS=&x-client-CPU=&client_info=1&code_challenge=b_qna9bCMWvoOXQDFQ_884e55kB0wWro3WYBhDAY5kI&code_challenge_method=S256&nonce=5b3102b0-86e9-42b7-839c-f8aa0ffd94cb&state=eyJpZCI6IjI1OWQwM2ZiLTliYjctNGRmMS1iY2Q3LTRiZmE1ZTU1YzVlYyIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22CP1%22%5D%7D%7D%7D&sso_reload=true"
      );
    } else if (resultado.includes("linkedin")) {
      window.open("https://www.linkedin.com/login/es");
    } else if (resultado.includes("compu")) {
      window.open("https://co.computrabajo.com/");
    } else if (resultado.includes("la republica")) {
      window.open("https://www.larepublica.co/");
    } else if (resultado.includes("pulzo")) {
      window.open("https://www.pulzo.com/");
    } else if (resultado.includes("tiendas")) {
      const audioTiendas = new Audio(
        "https://cdn.glitch.global/fcfe30c5-97d7-4b64-8739-93c0a8aaf77c/Tiendas.mp3?v=1685497281403"
      );
      audioTiendas.play();
      window.location.href = "#Tiendas";
    } else if (resultado.includes("mercado")) {
      window.open(
        "https://www.mercadolibre.com/jms/mco/lgz/msl/login/H4sIAAAAAAAEAzWNwQ7CIBBE_2XOpL1z9EfISpeWCG6zrKJp-u-GqMfJzHtzoMia78HeO8ODX3vJMRsc9kKWRGvICzxqgUPLxr8YZUxIqbKxNvhjiFZeLpxEhypRaQwHetgWUpEO__2CQ26BX8Z6pxI6X5-ZR_snVoHHZrY3P8-996myRlqk5KvyFKVOUWacDomaBVOKN3jTB58fIR7rxM4AAAA/user"
      );
    } else if (resultado.includes("express")) {
      window.open(
        "https://best.aliexpress.com/?af=2213217379&cn=42&cv=125511&k=https%3A%2F%2Fwww.aliexpress.com%2F&gclid=EAIaIQobChMIopTfwqSe_wIVTtOGCh0epw9TEAAYASAAEgJ7a_D_BwE&aff_fcid=2331b958ec9540669203f2602c464ef4-1685492412667-07774-_AUNv37&aff_fsk=_AUNv37&aff_platform=portals-promotion&sk=_AUNv37&aff_trace_key=2331b958ec9540669203f2602c464ef4-1685492412667-07774-_AUNv37&terminal_id=06009d469423457486e90b2d819ba3ad"
      );
    } else if (resultado.includes("amazon")) {
      window.open(
        "https://www.amazon.com/-/es/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3F%26tag%3Dgoogleuscol05-20%26ref%3Dnav_ya_signin%26adgrpid%3D77456803105%26hvpone%3D%26hvptwo%3D%26hvadid%3D602537718433%26hvpos%3D%26hvnetw%3Dg%26hvrand%3D14428987237875915993%26hvqmt%3De%26hvdev%3Dc%26hvdvcmdl%3D%26hvlocint%3D%26hvlocphy%3D1003659%26hvtargid%3Dkwd-360364908397%26hydadcr%3D8636_13554482%26language%3Des_US&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&"
      );
    } else if (resultado.includes("linio")) {
      window.open("https://www.linio.com.co/account/login");
    } else if (resultado.includes("shopee")) {
      window.open(
        "https://shopee.com.co/buyer/login?gclid=EAIaIQobChMIjrWY5aSe_wIVS9GGCh1M_QyoEAAYASAAEgKQvfD_BwE&next=https%3A%2F%2Fshopee.com.co%2F%3Fgclid%3DEAIaIQobChMIjrWY5aSe_wIVS9GGCh1M_QyoEAAYASAAEgKQvfD_BwE"
      );
    } else if (resultado.includes("educación")) {
      const audioEducacion = new Audio(
        "https://cdn.glitch.global/fcfe30c5-97d7-4b64-8739-93c0a8aaf77c/Educacion.mp3?v=1685497389690"
      );
      audioEducacion.play();
      window.location.href = "#Educacion";
    } else if (resultado.includes("mathway")) {
      window.open("https://www.mathway.com/es/Algebra");
    } else if (resultado.includes("brainly")) {
      window.open(
        "https://brainly.lat/login?entry=2&source=unlogged+homepage+header+button"
      );
    } else if (resultado.includes("duolingo")) {
      window.open("https://es.duolingo.com/log-in?isLoggingIn=true");
    } else if (resultado.includes("geogebra")) {
      window.open("https://www.geogebra.org/?lang=es");
    } else if (resultado.includes("infantil")) {
      const audioInfantil = new Audio(
        "https://cdn.glitch.global/fcfe30c5-97d7-4b64-8739-93c0a8aaf77c/infantil.mp3?v=1685497556078"
      );
      audioInfantil.play();
      window.location.href = "#Infantil";
    } else if (resultado.includes("Kids")) {
      window.open("https://www.mathway.com/es/Algebra");
    } else if (resultado.includes("miniclip")) {
      window.open("https://www.miniclip.com/");
    } else if (resultado.includes("friv juegos")) {
      window.open("https://www.friv.com/z/play/juegos.html");
    } else if (resultado.includes("discovery kids")) {
      window.open("https://discoverykids.com/");
    } else if (resultado.includes("nat geo kids")) {
      window.open("https://kids.nationalgeographic.com/");
    } else if (resultado.includes("gubernamental")) {
      const audioGuvernamental = new Audio(
        "https://cdn.glitch.global/fcfe30c5-97d7-4b64-8739-93c0a8aaf77c/gobi.mp3?v=1685497947543"
      );
      audioGuvernamental.play();
      window.location.href = "#Guvernamental";
    } else if (resultado.includes("gobierno de colombia")) {
      window.open("http://gov.co/");
    } else if (resultado.includes("datos abiertos")) {
      window.open("https://www.datos.gov.co/");
    } else if (resultado.includes("presidencia")) {
      window.open("https://petro.presidencia.gov.co/");
    } else if (resultado.includes("libreta militar")) {
      window.open("https://www.libretamilitar.mil.co/Modules/Account/Login");
    } else if (resultado.includes("prosperidad social")) {
      window.open("https://prosperidadsocial.gov.co/");
    } else if (resultado.includes("salud")) {
      const audioSalud = new Audio(
        "https://cdn.glitch.global/fcfe30c5-97d7-4b64-8739-93c0a8aaf77c/salud.mpeg?v=1685498367138"
      );
      audioSalud.play();
      window.location.href = "#Salud";
    } else if (resultado.includes("ministerio de salud")) {
      window.open("https://www.minsalud.gov.co/Portada2021/index.html");
    } else if (resultado.includes("secretaria de bogota")) {
      window.open("http://www.saludcapital.gov.co/Paginas2/Inicio.aspx");
    } else if (resultado.includes("oms")) {
      window.open("https://www.who.int/es");
    } else if (resultado.includes("instituto nacional de salud")) {
      window.open("https://www.libretamilitar.mil.co/Modules/Account/Login");
    } else if (resultado.includes("salud colombia")) {
      window.open("https://www.ins.gov.co/Paginas/Inicio.aspx");
    } else if (resultado.includes("colombia")) {
      const audioTendencia = new Audio(
        "https://cdn.glitch.global/fcfe30c5-97d7-4b64-8739-93c0a8aaf77c/WhatsApp%20Audio%202023-05-30%20at%209.02.10%20PM.mpeg?v=1685498569076"
      );
      audioTendencia.play();
      window.location.href = "#Colombia";
    } else if (resultado.includes("tendencia")) {
      const audioTendencia = new Audio(
        "https://cdn.glitch.global/fcfe30c5-97d7-4b64-8739-93c0a8aaf77c/tendencia.mp3?v=1684424813685"
      );
      audioTendencia.play();
      window.location.href = "#Global";
    } else if (resultado.includes("google")) {
      window.open("https://www.google.com/");
    } else if (resultado.includes("youtube")) {
      window.open("https://www.youtube.com/");
    } else if (resultado.includes("wikipedia")) {
      window.open("https://www.wikipedia.org/");
    } else if (resultado.includes("mail")) {
      window.open(
        "https://accounts.google.com/v3/signin/identifier?dsh=S537734693%3A1684427011059808&ifkv=Af_xneFDZDLxF75oSJuWNmTCp2VC5EADDR3k6H1d6iuICJN3kG0Q4fwIVbDAWI_j2dMSlKEZ92-w&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
      );
    } else if (resultado.includes("tik tok")) {
      window.open(
        "https://www.tiktok.com/login?redirect_url=https%3A%2F%2Fwww.tiktok.com%2Fupload%3Flang%3Des&lang=es"
      );
    } else if (resultado.includes("netflix")) {
      window.open("https://www.netflix.com/co/login");
    }
  };

  recognition.start();
}

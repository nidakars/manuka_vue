<template>
  <body class="popupActive" style="width: 100%; overflow: hidden;">
    <input type="hidden" id="cookie-law" value="0" />
    <div id="mainWrapper" class="fl">
     
      <div id="skeletonWrap" class="fl">
        <div id="skeleton" class="fl col-12">
          <header class="col col-12">
            <div id="header" class="row">
              <!--cache--><link
                href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&amp;display=swap"
                rel="stylesheet"
              />
              <link
                rel="stylesheet"
                type="text/css"
                href="https://img.manuka.com.tr/theme/standart/js/gorsel_vitrin/owl/assets/owl.animate.css"
              />
              <link
                rel="stylesheet"
                type="text/css"
                href="https://img.manuka.com.tr/theme/standart/js/gorsel_vitrin/owl/assets/owl.carousel.min.css"
              />
              <link
                rel="stylesheet"
                type="text/css"
                href="https://img.manuka.com.tr/theme/standart/js/gorsel_vitrin/owl/assets/owl.theme.default.min.css"
              />
             
              <!-- Android app uyarı -->
              <div id="pageOverlay" class="col-12 animate"></div>
              <div id="mobileMenu" class="col pb forMobile">
                <div id="closeMobileMenu" class="fl col-12 text-upper">
                  <div class="row mb blockLightBg">
                    <div
                      class="btn col-12 text-description text-semibold passive"
                    >
                      <span class="text-description icon-menu"
                        >Menüyü Kapat</span
                      >
                      <i
                        class="pos-a pos-top pos-right icon-cancel icon-square icon-large icon-custom-pink icon-push-right icon-pull-right icon-no-radius"
                      ></i>
                    </div>
                  </div>
                </div>
                <div id="mobileMenuMain" class="col col-12">
                  <div
                    class="fl col-12 text-title text-semibold text-upper pb d-flex"
                  >
                    <i class="text-custom-pink"></i>
                    Kategoriler
                  </div>
                  <ul class="fl col-12 line-top">
                    <li class="fl col-12 line-bottom">
                      <a href="/" class="col col-12 text-upper">Anasayfa</a>
                    </li>
                    <li class="fl col-12 line-bottom">
                      <a
                        href="/indirim"
                        title="İndirim"
                        class="col col-12 text-upper"
                        >İndirim</a
                      >
                    </li>
                    <li class="fl col-12 line-bottom">
                      <a
                        href="/yeni-232"
                        title="Yeni"
                        class="col col-12 text-upper"
                        >Yeni</a
                      >
                    </li>
                    <li class="fl col-12 line-bottom">
                      <span class="col col-12 ease text-upper toggle">
                        Giyim
                        <span class="fr">
                          <i class="icon-arrow-simple-down icon-no-space"></i>
                          <i
                            class="icon-arrow-simple-up icon-no-space d-none"
                          ></i>
                        </span>
                      </span>
                      <ul class="box col-12 line-top">
                        <li class="fl col-12">
                          <a
                            href="/yelek"
                            title="Yelek"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Yelek</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/kaban-333"
                            title="Kaban"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Kaban</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/mont-334"
                            title="Mont"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Mont</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/yagmurluk-327"
                            title="Yağmurluk"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Yağmurluk</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/trenchkot"
                            title="Trençkot"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Trençkot</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/denim"
                            title="Denim"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Denim</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/ceket-339"
                            title="Ceket"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Ceket</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/triko-325"
                            title="Triko"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Triko</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/hirka-332"
                            title="Hırka"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Hırka</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/kazak-323"
                            title="Kazak"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Kazak</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/suveter"
                            title="Süveter"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Süveter</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/sweatshirt-338"
                            title="Sweatshirt"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Sweatshirt</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/gomlek-329"
                            title="Gömlek"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Gömlek</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/tunik"
                            title="Tunik"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Tunik</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/basic-328"
                            title="Basic"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Basic</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/kimono"
                            title="Kimono"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Kimono</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/t-shirt-324"
                            title="T-Shirt"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >T-Shirt</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/elbise-322"
                            title="Elbise"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Elbise</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/salopet"
                            title="Salopet"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Salopet</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/jean-336"
                            title="Jean"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Jean</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/pantolon-335"
                            title="Pantolon"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Pantolon</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/etek-337"
                            title="Etek"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Etek</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/sweatshirt-takim"
                            title="Sweatshirt Takım"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Sweatshirt Takım</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/esofman-takim"
                            title="Eşofman Takım"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Eşofman Takım</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/takim-331"
                            title="Takım"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Takım</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a href="/giyim-316" class="col col-12"
                            >Tümünü Gör »</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li class="fl col-12 line-bottom">
                      <span class="col col-12 ease text-upper toggle">
                        Çanta
                        <span class="fr">
                          <i class="icon-arrow-simple-down icon-no-space"></i>
                          <i
                            class="icon-arrow-simple-up icon-no-space d-none"
                          ></i>
                        </span>
                      </span>
                      <ul class="box col-12 line-top">
                        <li class="fl col-12">
                          <a
                            href="/bez-canta"
                            title="Kanvas Çanta"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Kanvas Çanta</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/deri-canta"
                            title="Deri Çanta"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Deri Çanta</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/everyday-bag"
                            title="Everyday Bag"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Everyday Bag</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/sirt-cantasi"
                            title="Sırt Çantası"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Sırt Çantası</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/suni-kurk"
                            title="Suni Kürk"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Suni Kürk</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/canta-340"
                            title="Bez Çanta"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Bez Çanta</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/cuzdan"
                            title="Cüzdan"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Cüzdan</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a href="/canta-317" class="col col-12"
                            >Tümünü Gör »</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li class="fl col-12 line-bottom">
                      <span class="col col-12 ease text-upper toggle">
                        Aksesuar
                        <span class="fr">
                          <i class="icon-arrow-simple-down icon-no-space"></i>
                          <i
                            class="icon-arrow-simple-up icon-no-space d-none"
                          ></i>
                        </span>
                      </span>
                      <ul class="box col-12 line-top">
                        <li class="fl col-12">
                          <a
                            href="/defter"
                            title="Defter"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Defter</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/bileklik"
                            title="Bileklik"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Bileklik</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/yaka"
                            title="Yaka"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Yaka</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/kolye-320"
                            title="Kolye"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Kolye</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/kemer-321"
                            title="Kemer"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Kemer</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/sapka"
                            title="Şapka"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Şapka</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a href="/aksesuar-235" class="col col-12"
                            >Tümünü Gör »</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li class="fl col-12 line-bottom">
                      <span class="col col-12 ease text-upper toggle">
                        Çorap
                        <span class="fr">
                          <i class="icon-arrow-simple-down icon-no-space"></i>
                          <i
                            class="icon-arrow-simple-up icon-no-space d-none"
                          ></i>
                        </span>
                      </span>
                      <ul class="box col-12 line-top">
                        <li class="fl col-12">
                          <a
                            href="/kutulu-corap"
                            title="Kutulu Çorap"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Kutulu Çorap</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/duz-soket-corap"
                            title="Düz Soket Çorap"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Düz Soket Çorap</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/fitilli-soket-corap"
                            title="Fitilli Soket Çorap"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Fitilli Soket Çorap</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/desenli-soket-corap"
                            title="Desenli Soket Çorap"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >Desenli Soket Çorap</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a href="/corap-319" class="col col-12"
                            >Tümünü Gör »</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li class="fl col-12 line-bottom">
                      <span class="col col-12 ease text-upper toggle">
                        Telefon Kılıfı
                        <span class="fr">
                          <i class="icon-arrow-simple-down icon-no-space"></i>
                          <i
                            class="icon-arrow-simple-up icon-no-space d-none"
                          ></i>
                        </span>
                      </span>
                      <ul class="box col-12 line-top">
                        <li class="fl col-12">
                          <a
                            href="/6/6s-373"
                            title="6/6S"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >6/6S</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/6-plus"
                            title="6 PLUS"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >6 PLUS</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/7/8"
                            title="7/8"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >7/8</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/7/8-plus"
                            title="7/8 PLUS"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >7/8 PLUS</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/x/xs"
                            title="X/XS"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >X/XS</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/xs-max"
                            title="XS MAX"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >XS MAX</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/xr"
                            title="XR"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >XR</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/11"
                            title="11"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >11</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/11-pro"
                            title="11 PRO"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >11 PRO</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a
                            href="/11-pro-max"
                            title="11 PRO MAX"
                            class="col col-12 icon-custom icon-pull-right icon-push-right"
                            data-before="»"
                            >11 PRO MAX</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a href="/telefon-kilifi-366" class="col col-12"
                            >Tümünü Gör »</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li class="fl col-12 line-bottom">
                      <a
                        href="/denim"
                        title="Denim"
                        class="col col-12 text-upper"
                        >Denim</a
                      >
                    </li>
                    <li class="fl col-12 line-bottom">
                      <a
                        href="/beyaz-gomlek-koleksiyonu"
                        title="BEYAZ GÖMLEK KOLEKSİYONU"
                        class="col col-12 text-upper"
                        >BEYAZ GÖMLEK KOLEKSİYONU</a
                      >
                    </li>
                    <li class="fl col-12 line-bottom">
                      <a
                        href="/moonlight"
                        title="Moonlıght Koleksiyonu"
                        class="col col-12 text-upper"
                        >Moonlıght Koleksiyonu</a
                      >
                    </li>
                    <li class="fl col-12 line-bottom">
                      <a
                        href="/makaron-renkleri"
                        title="Makaron Renkleri"
                        class="col col-12 text-upper"
                        >Makaron Renkleri</a
                      >
                    </li>
                    <li class="fl col-12 line-bottom">
                      <a
                        href="avantajli-fiyatlar"
                        title="Avantajlı Fiyatlar"
                        class="col col-12 text-upper"
                        >Avantajlı Fiyatlar</a
                      >
                    </li>
                    <li class="fl col-12 line-bottom">
                      <a
                        href="https://www.manuka.com.tr/cok-satanlar"
                        title="Çok Satanlar"
                        class="col col-12 text-upper"
                        >Çok Satanlar</a
                      >
                    </li>
                    <li class="fl col-12 line-bottom">
                      <a
                        href="https://www.manuka.com.tr/denim-zamani"
                        title="Denim Zamanı"
                        class="col col-12 text-upper"
                        >Denim Zamanı</a
                      >
                    </li>
                    <li class="fl col-12 line-bottom">
                      <a
                        href="/naturel-koleksiyonu"
                        title="Natürel Koleksiyonu"
                        class="col col-12 text-upper"
                        >Natürel Koleksiyonu</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="col col-12 p-left">
                  <div class="col col-6 p-right">
                    <a
                      id="loginMobile"
                      href="uye-girisi-sayfasi"
                      class="btn btn-medium btn-custom-pink col-12 text-center icon-member-default"
                      >Üye Girişi</a
                    >
                  </div>
                  <div class="col col-6 p-right">
                    <a
                      id="regisMobile"
                      href="/index.php?B=YeniUye"
                      class="btn btn-medium btn-custom-gray col-12 text-center"
                      >Üye Ol</a
                    >
                  </div>
                </div>
              </div>
              <span id="backToTop">
                <i
                  class="fl lightBg text-center icon-arrow-simple-up icon-no-space d-flex"
                ></i>
              </span>
              <div class="HeaderSlogan col-12 fl forDesktop">
                <div class="col-6 fl HeaderKargo">
                  150 TL ve ÜZERİ ALIŞVERİŞLERDE
                  <strong>KARGO ÜCRETSİZ!</strong>
                </div>
                <div class="col-6 fl HeaderIndirim">
                  <a href="/indirim">
                    <strong>%50 İNDİRİM</strong> FIRSATLARINI KAÇIRMA</a
                  >
                </div>
              </div>
              <div class="fl col-12" id="header-wrap">
                <div class="col-12 HeaderInner">
                  <div class="col col-12 flexwrap" id="headerMain">
                    <div class="fl col-md-1 col-sm-2 forMobile menuBtnBox">
                      <span id="menuBtn"></span>
                    </div>
                    <div id="logo" class="col col-3 col-sm-4 ease">
                      <a href="/"
                        ><p>
                          <img
                            src="https://img.manuka.com.tr/Data/EditorFiles/tema/img/manuka-logo-yeni.png"
                            alt="manuka.com.tr"
                          /></p
                      ></a>
                    </div>
                    <div class="col-4 PcSearch forDesktop">
                      <div id="search" class="fr col-12 ease">
                        <form
                          id="FormAra"
                          name="FormAra"
                          class="icon-no-space"
                          action="/arama"
                          method="get"
                          data-before="Ara"
                        >
                          <input
                            id="live-search"
                            autocomplete="off"
                            class="col withPlace ease personaclick-instant-search personaclick-instant-search-rendered"
                            name="q"
                            type="text"
                            placeholder="Ne Aramıştınız ?"
                            content="text/html; charset=UTF-8"
                          />
                          <button
                            type="submit"
                            value="Ara"
                            class="fr ease"
                            id="search-btn"
                          ></button>
                          <div
                            class="pos-a col-12 whiteBg box-border"
                            id="live-search-box"
                            data-callback="searchCallback"
                            style="visibility:hidden;"
                          >
                            <div class="box col-12 p-top">
                              <ul
                                class="box col-12 p-bottom"
                                ng-if="products.length > 0"
                              >
                                <li
                                  class="col col-12 text-title text-bold text-upper line-bottom mb"
                                >
                                  <span class="row">
                                    <i class="icon-cube"></i>
                                    Ürünler
                                  </span>
                                </li>
                                <li
                                  class="col col-12"
                                  ng-repeat="product in products"
                                >
                                  <a
                                    class="col col-12 text-description mb"
                                    href="{{product.url}}"
                                    >{{ product.title }}</a
                                  >
                                </li>
                              </ul>
                              <ul
                                class="box col-12 p-bottom"
                                ng-if="categories.length > 0"
                              >
                                <li
                                  class="col col-12 text-title text-bold text-upper line-bottom mb"
                                >
                                  <span class="row">
                                    <i class="icon-sitemap"></i>
                                    Kategoriler
                                  </span>
                                </li>
                                <li
                                  class="col col-12"
                                  ng-repeat="category in categories"
                                >
                                  <a
                                    class="col col-12 text-description mb"
                                    href="{{category.url}}"
                                    >{{ category.title }}</a
                                  >
                                </li>
                              </ul>
                              <ul
                                class="box col-12 p-bottom"
                                ng-if="brands.length > 0"
                              >
                                <li
                                  class="col col-12 text-title text-bold text-upper line-bottom mb"
                                >
                                  <span class="row">
                                    <i class="icon-building"></i>
                                    Markalar
                                  </span>
                                </li>
                                <li
                                  class="col col-12"
                                  ng-repeat="brand in brands"
                                >
                                  <a
                                    class="col col-12 text-description mb"
                                    href="{{brand.url}}"
                                    >{{ brand.title }}</a
                                  >
                                </li>
                              </ul>
                            </div>
                          </div>
                          <script type="text/javascript" defer="">
                            var interval;
                            var keyHistory;
                            $(document).on("keydown", "#live-search", function(
                              e
                            ) {
                              clearInterval(interval);
                            });
                            $(document).on("keyup", "#live-search", function(
                              e
                            ) {
                              if ($("#live-search").val() == "") {
                                $("#live-search-box").css({
                                  visibility: "hidden",
                                });
                              } else {
                                interval = setInterval(function() {
                                  if ($("#live-search").val() != keyHistory) {
                                    $("#live-search-box")
                                      .attr(
                                        "data-url",
                                        "/srv/service/product/searchAll/" +
                                          $("#live-search").val()
                                      )
                                      .angularTemplate();
                                    keyHistory = $("#live-search").val();
                                  }
                                }, 1000);
                              }
                            });
                            function searchCallback(data) {}
                          </script>
                        </form>
                      </div>
                    </div>
                    <div
                      class="fr col p-right col-4 col-md-8 col-sm-6 flexwrap"
                      id="headerRight"
                    >
                      <!--<a href="javascript:void(0);" class="AraBtn fr forDesktop"></a>-->
                      <a
                        data-width="500"
                        data-url="/srv/service/customer/login-form"
                        href="#"
                        class="fr text-center authorLink popupWin"
                      ></a>
                      <a
                        data-width="500"
                        data-url="/srv/service/customer/login-form"
                        href="#"
                        class="col fr popupWin"
                        id="favoribtn"
                        ><span class="favSayi"></span
                      ></a>
                      <a
                        href="/sepet"
                        class="fr basketLink"
                        id="cart-soft-count"
                      >
                        <span class="cart-soft-count">1</span>
                      </a>
                    </div>
                  </div>
                  <nav class="fl col-12 forDesktop" id="mainMenu">
                    <ul class="fl col-12 menu flexwrap">
                      <li class="fl">
                        <span class="fl d-flex drop-down-title"
                          ><a class="fl" lang="tr" href="/indirim"
                            >İndirim</a
                          ></span
                        >
                      </li>
                      <li class="fl">
                        <span class="fl d-flex drop-down-title"
                          ><a class="fl" lang="tr" href="/yeni-232"
                            >Yeni</a
                          ></span
                        >
                      </li>
                      <li class="fl drop-down hover parentLink">
                        <span class="fl d-flex drop-down-title"
                          ><a class="fl" lang="tr" href="/giyim-316"
                            >Giyim</a
                          ></span
                        >
                        <div
                          class="pos-a pos-top pos-left pos-right box p-left whiteBg box-border b-top subMenu top"
                        >
                          <div class="inner">
                            <div class="box col-12 dynamicMenu">
                              <ul class="fl col-3 SubNewCat">
                                <li class="fl col-12">
                                  <a href="/moonlight" class="fl col-12"
                                    >Moonlight Koleksiyonu🌙</a
                                  >
                                </li>
                                <li class="fl col-12">
                                  <a
                                    href="/naturel-koleksiyonu"
                                    class="fl col-12"
                                    >Natürel Koleksiyonu</a
                                  >
                                </li>
                                <li class="fl col-12">
                                  <a href="/denim" class="fl col-12"
                                    >Denim Koleksiyonu</a
                                  >
                                </li>
                                <li class="fl col-12">
                                  <a href="/makaron-renkleri" class="fl col-12"
                                    >Makaron Renkleri</a
                                  >
                                </li>
                                <li class="fl col-12">
                                  <a
                                    href="/avantajli-fiyatlar"
                                    class="fl col-12 MenuRed"
                                    >Avantajlı Fiyatlar</a
                                  >
                                </li>
                                <li class="fl col-12">
                                  <a href="/cok-satanlar" class="fl col-12"
                                    >Çok Satanlar</a
                                  >
                                </li>
                              </ul>
                              <div
                                class="col-9 col p-right SubMenuRight flexwrap"
                              >
                                <ul class="col p-left col-3">
                                  <li class="fl col-12">
                                    <a href="/kaban-333" class="fl col-12"
                                      >Kaban</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a href="/mont-334" class="fl col-12"
                                      >Mont</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a href="/yelek" class="fl col-12">Yelek</a>
                                  </li>
                                  <li class="fl col-12">
                                    <a href="/yagmurluk-327" class="fl col-12"
                                      >Yağmurluk</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a href="/trenchkot" class="fl col-12"
                                      >Trençkot</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a href="/denim" class="fl col-12">Denim</a>
                                  </li>
                                  <li class="fl col-12">
                                    <a href="/ceket-339" class="fl col-12"
                                      >Ceket</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a href="/kimono" class="fl col-12"
                                      >Kimono</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a href="/triko-325" class="fl col-12"
                                      >Triko</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a href="/hirka-332" class="fl col-12"
                                      >Hırka</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a href="/kazak-323" class="fl col-12"
                                      >Kazak</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a href="/suveter" class="fl col-12"
                                      >Süveter</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a href="/sweatshirt-338" class="fl col-12"
                                      >Sweatshirt</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a href="/gomlek-329" class="fl col-12"
                                      >Gömlek</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a href="/tunik" class="fl col-12">Tunik</a>
                                  </li>
                                  <li class="fl col-12">
                                    <a href="/basic-328" class="fl col-12"
                                      >Basic</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a href="/t-shirt-324" class="fl col-12"
                                      >T-Shirt</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a href="/elbise-322" class="fl col-12"
                                      >Elbise</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a href="/salopet" class="fl col-12"
                                      >Salopet</a
                                    >
                                  </li>
                                  <!--<li class="fl col-12"><a href="/jile-330" class="fl col-12">Jile</a></li>-->
                                  <li class="fl col-12">
                                    <a
                                      href="/sweatshirt-takim"
                                      class="fl col-12"
                                      >Sweatshirt Takım</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a href="/esofman-takim" class="fl col-12"
                                      >Eşofman Takım</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a href="/takim-331" class="fl col-12"
                                      >Takım</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a href="/jean-336" class="fl col-12"
                                      >Jean</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a href="/pantolon-335" class="fl col-12"
                                      >Pantolon</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a href="/etek-337" class="fl col-12"
                                      >Etek</a
                                    >
                                  </li>
                                </ul>
                                <ul class="col p-left col-3">
                                  <li class="MenuSubBaslik">Edit</li>
                                  <li class="fl col-12">
                                    <a href="/denim-zamani" class="fl col-12"
                                      >Denim Zamanı<sup style="color:black"
                                        >Yeni</sup
                                      ></a
                                    >
                                  </li>
                                  <!--<li class="fl col-12"><a href="/kis-modasi" class="fl col-12">Kış Modası</a></li>-->
                                  <!--<li class="fl col-12"><a href="#" class="fl col-12">Ofis Görünümü</a></li>-->
                                  <!--<li class="fl col-12"><a href="#" class="fl col-12">Keten Zamanı</a></li>-->
                                </ul>
                                <div class="col p-left col-6">
                                  <img
                                    src="https://img.manuka.com.tr/Data/EditorFiles/tema/img/giyimbolumu.jpg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="fl drop-down hover parentLink">
                        <span class="fl d-flex drop-down-title"
                          ><a class="fl" lang="tr" href="/canta-317"
                            >Çanta</a
                          ></span
                        >
                        <div
                          class="pos-a pos-top pos-left pos-right box p-left whiteBg box-border b-top subMenu top"
                        >
                          <div class="inner">
                            <div class="box col-12 dynamicMenu p-left">
                              <ul class="col col-12">
                                <li class="fl col-12">
                                  <a href="/everyday-bag" class="fl col-12"
                                    >Everyday Bag</a
                                  >
                                </li>
                                <li class="fl col-12">
                                  <a href="/bez-canta" class="fl col-12"
                                    >Kanvas Çanta</a
                                  >
                                </li>
                                <li class="fl col-12">
                                  <a href="/deri-canta" class="fl col-12"
                                    >Deri Çanta</a
                                  >
                                </li>
                                <li class="fl col-12">
                                  <a href="/canta-340" class="fl col-12"
                                    >Bez Çanta</a
                                  >
                                </li>
                                <li class="fl col-12">
                                  <a href="/sirt-cantasi" class="fl col-12"
                                    >Sırt Çantası</a
                                  >
                                </li>
                                <li class="fl col-12">
                                  <a href="/suni-kurk" class="fl col-12"
                                    >Suni Kürk Çanta</a
                                  >
                                </li>
                                <li class="fl col-12">
                                  <a href="/cuzdan" class="fl col-12">Cüzdan</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="fl drop-down hover parentLink">
                        <span class="fl d-flex drop-down-title"
                          ><a class="fl" lang="tr" href="/aksesuar-235"
                            >Aksesuar</a
                          ></span
                        >
                        <div
                          class="pos-a pos-top pos-left pos-right box p-left whiteBg box-border b-top subMenu top"
                        >
                          <div class="inner">
                            <div class="box col-12 dynamicMenu p-left">
                              <ul class="col col-12">
                                <li class="fl col-12">
                                  <a href="/sapka" class="fl col-12">Şapka</a>
                                </li>
                                <li class="fl col-12">
                                  <a
                                    href="/telefon-kilifi-366"
                                    class="fl col-12"
                                    >Telefon Kılıfı</a
                                  >
                                </li>
                                <li class="fl col-12">
                                  <a href="/defter" class="fl col-12">Defter</a>
                                </li>
                                <li class="fl col-12">
                                  <a href="/bileklik" class="fl col-12"
                                    >Bileklik</a
                                  >
                                </li>
                                <li class="fl col-12">
                                  <a href="/yaka" class="fl col-12">Yaka</a>
                                </li>
                                <!--<li class="fl col-12"><a href="/yuzuk" class="fl col-12">Yüzük</a></li>-->
                                <!--<li class="fl col-12"><a href="/semsiye" class="fl col-12">Şemsiye</a></li>-->
                                <li class="fl col-12">
                                  <a href="/kolye-320" class="fl col-12"
                                    >Kolye</a
                                  >
                                </li>
                                <li class="fl col-12">
                                  <a href="/kemer-321" class="fl col-12"
                                    >Kemer</a
                                  >
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="fl drop-down hover parentLink">
                        <span class="fl d-flex drop-down-title"
                          ><a class="fl" lang="tr" href="/ayakkabi-318"
                            >Ayakkabı</a
                          ></span
                        >
                        <div
                          class="pos-a pos-top pos-left pos-right box p-left whiteBg box-border b-top subMenu top"
                        >
                          <div class="inner">
                            <div class="box col-12 dynamicMenu p-left">
                              <ul class="col col-12">
                                <li class="fl col-12">
                                  <a href="/postal-341" class="fl col-12"
                                    >Postal</a
                                  >
                                </li>
                                <li class="fl col-12">
                                  <a href="/snikers" class="fl col-12"
                                    >Sneakers</a
                                  >
                                </li>
                                <!-- <li class="fl col-12"><a href="/bot-343" class="fl col-12">Bot</a></li>-->
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <!--<li class="fl drop-down hover parentLink"><span class="fl d-flex drop-down-title"><a class="fl" lang="tr" href="/corap-319">Çorap</a></span>
<div class="pos-a pos-top pos-left pos-right box p-left whiteBg box-border b-top subMenu top">
<div class="inner">
<div class="box col-12 dynamicMenu p-left">
<ul class="col col-12">
<b> <li class="fl col-12"><a href="/postal-341" class="fl col-12">Kutu Çorap</a></b>
<ul class="col col-12"><li class="fl col-12"><a href="/postal-341" class="fl col-12"> Orman Soket Çorap Seti</a></li></ul>
<ul class="col col-12"><li class="fl col-12"><a href="/postal-341" class="fl col-12"> Sonbahar Soket Çorap Seti</a></li></ul>
<ul class="col col-12"><li class="fl col-12"><a href="/postal-341" class="fl col-12"> Duman Soket Çorap Seti</a></li></ul>
<ul class="col col-12"><li class="fl col-12"><a href="/postal-341" class="fl col-12"> Pink Dream Soket Çorap Seti</a></li></ul>
<ul class="col col-12"><li class="fl col-12"><a href="/postal-341" class="fl col-12"> Okyanus Soket Çorap Seti</a></li></ul>
<ul class="col col-12"><li class="fl col-12"><a href="/postal-341" class="fl col-12"> Toupe Soket Çorap Seti</a></li></ul>
<ul class="col col-12"><li class="fl col-12"><a href="/postal-341" class="fl col-12"> Toprak Soket Çorap Seti</a></li></ul>
</li>
<b><li class="fl col-12"><a href="/snikers" class="fl col-12">Desenli Çorap</a></li></b>
<ul class="col col-12"><li class="fl col-12"><a href="/postal-341" class="fl col-12"> Anna Desenli Çorap Seti</a></li></ul>
<ul class="col col-12"><li class="fl col-12"><a href="/postal-341" class="fl col-12"> Elsa Desenli Çorap Seti</a></li></ul>
<ul class="col col-12"><li class="fl col-12"><a href="/postal-341" class="fl col-12"> Lisa Desenli Çorap Seti</a></li></ul>
<ul class="col col-12"><li class="fl col-12"><a href="/postal-341" class="fl col-12"> Yana Desenli Çorap Seti</a></li></ul>
<li class="fl col-12"><a href="/bot-343" class="fl col-12">Düz Soket Çorap</a></li>
<li class="fl col-12"><a href="/bot-343" class="fl col-12">Fitilli Soket Çorap</a></li>
</ul>
</div>
</div>
</div>
</li>
-->
                      <li class="fl drop-down hover parentLink">
                        <span class="fl d-flex drop-down-title"
                          ><a class="fl" lang="tr" href="/corap-319"
                            >Çorap</a
                          ></span
                        >
                        <div
                          class="pos-a pos-top pos-left pos-right box p-left whiteBg box-border b-top subMenu top"
                        >
                          <div class="inner">
                            <div class="box col-12 dynamicMenu">
                              <div
                                class="col-9 col p-right SubMenuRight flexwrap"
                              >
                                <ul class="col p-left col-3">
                                  <li class="fl col-12">
                                    <a href="/kutulu-corap" class="fl col-12"
                                      >Kutu Çorap</a
                                    >
                                  </li>
                                </ul>
                                <ul class="col p-left col-3">
                                  <li class="fl col-12">
                                    <a
                                      href="/desenli-soket-corap"
                                      class="fl col-12"
                                      >Desenli Çorap</a
                                    >
                                  </li>
                                </ul>
                                <ul class="col p-left col-3">
                                  <li class="fl col-12">
                                    <a href="/duz-soket-corap" class="fl col-12"
                                      >Düz Soket Çorap</a
                                    >
                                  </li>
                                </ul>
                                <ul class="col p-left col-3">
                                  <li class="fl col-12">
                                    <a
                                      href="/fitilli-soket-corap"
                                      class="fl col-12"
                                      >Fitilli Soket Çorap</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="fl">
                        <span class="fl d-flex drop-down-title"
                          ><a
                            class="fl"
                            lang="tr"
                            href="/beyaz-gomlek-koleksiyonu"
                            >Beyaz Gömlek Koleksiyonu</a
                          ></span
                        >
                      </li>
                      <!-- <li class="fl drop-down hover parentLink"><span class="fl d-flex drop-down-title"><a class="fl" lang="tr" href="/denim">Denim</a></span>
<div class="pos-a pos-top pos-left pos-right box p-left whiteBg box-border b-top subMenu top">
<div class="inner">
<div class="box col-12 dynamicMenu p-left">
<ul class="col col-12">
<li class="fl col-12"><a href="/pantolon" class="fl col-12">Jean</a></li>
<li class="fl col-12"><a href="/ceket" class="fl col-12">Ceket</a></li>
<li class="fl col-12"><a href="/gomlek" class="fl col-12">Gömlek</a></li>
</ul>
</div>
</div>
</div>
</li>-->
                    </ul>
                  </nav>
                  <div class="col col-12">
                    <div id="mobileSearch" class="fl col-12"></div>
                  </div>
                </div>
                <!--<div class="col col-12">
<div class="row ease forDesktop" id="headerBottom">
<div class="inner">
<div class="fl col-12">
<div class="col col-12 text-center text-upper">50 TL ve Üzeri Alışverişlerde KARGO ÜCRETSİZ!</div>
<span class="fr close-btn"></span>
</div>
</div>
</div>
</div>-->
              </div>
              <script
                type="text/javascript"
                src="https://img.manuka.com.tr/theme/standart/js/blok-v4/personalization.js"
                defer=""
              ></script>
              <script type="text/javascript" defer="">
                function popupCallback() {}
                function placeCaller(id) {
                  var wrapID = id || "";
                  if (wrapID != "") {
                    $("#" + wrapID)
                      .find(".withPlace")
                      .removeClass("withPlace");
                    flexPlace();
                  }
                }
                $(document).ready(function() {
                  function favCalculator() {
                    $.get("/srv/service/profile/get-shopping-list", function(
                      content
                    ) {
                      var favCount = 0;
                      $.each(
                        $.parseJSON(content).CATEGORIES[0].PRODUCTS,
                        function() {
                          favCount++;
                        }
                      );
                      $(".favSayi").text(favCount);
                    });
                  }
                  favCalculator();
                  var birthdate = MEMBER_INFO.BIRTH_DATE;
                  if (birthdate == "0000-00-00") {
                    personaclick("profile", "set", {
                      id: MEMBER_INFO.ID,
                      email: MEMBER_INFO.MAIL,
                      birthday: "",
                    });
                  } else {
                    personaclick("profile", "set", {
                      id: MEMBER_INFO.ID,
                      email: MEMBER_INFO.MAIL,
                      birthday: birthdate,
                    });
                  }
                  if (PAGE_TYPE == "home") {
                    $("body").addClass("HomePage");
                  }
                  if (PAGE_TYPE == "order") {
                    $("body").addClass("OrderPage");
                  }
                  if ($(window).outerWidth() < 1001) {
                    $("#search").appendTo("#mobileSearch");
                  }
                  $(".sliderMain").css("text-align", "center");
                  if (
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
                      navigator.userAgent
                    )
                  ) {
                    if (/webOS|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                      $("option[disabled]").remove();
                    }
                    $(".parentLink > a, .parent > a").click(function(e) {
                      e.preventDefault();
                      $(this)
                        .next("ul")
                        .slideToggle();
                    });
                    var currentPage = location.pathname;
                    $('#slideMenu a[href="' + currentPage + '"]')
                      .parent()
                      .addClass("current");
                  } else {
                    if (
                      navigator.appVersion.indexOf("Trident") > -1 &&
                      navigator.appVersion.indexOf("Edge") == -1
                    ) {
                      $(".withPlace").removeClass("withPlace");
                    }
                  }
                  flexPlace();
                  if (/^.*?[\?\&]q=/gi.test(window.location.href)) {
                    var sWord = window.location.href.replace(
                      /^.*?[\?\&]q=/gi,
                      ""
                    );
                    sWord = sWord.replace(/\&.*?$/gi, "").replace(/\+/gi, " ");
                    $("#live-search").val(decodeURIComponent(sWord));
                  }
                  var mobileAppCookie = getaCookie("MobileNotifyClose");
                  if (mobileAppCookie == null && !isSafari) {
                    $(".MobileAppNotify").fadeIn();
                  }
                  $(".MobileNotifyClose").click(function() {
                    setaCookie("MobileNotifyClose", "Closed", 3);
                    $(".MobileAppNotify").fadeOut();
                  });
                  $(".AraBtn").click(function() {
                    $(this).toggleClass("Sclose");
                    $("#search").toggleClass("Sopen");
                  });
                  $(".language li").click(function() {
                    setLanguage($(this).attr("data-value"));
                  });
                  $(".currency li").click(function() {
                    setCurrency($(this).attr("data-value"));
                  });
                  $("#headerBottom .close-btn").click(function() {
                    $("#headerBottom").hide();
                    $("#header").addClass("active");
                  });
                });
                function setaCookie(cname, cvalue, exdays) {
                  var d = new Date();
                  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
                  var expires = "expires=" + d.toUTCString();
                  document.cookie = cname + "=" + cvalue + "; " + expires;
                }
                function getaCookie(name) {
                  var dc = document.cookie;
                  var prefix = name + "=";
                  var begin = dc.indexOf("; " + prefix);
                  if (begin == -1) {
                    begin = dc.indexOf(prefix);
                    if (begin != 0) return null;
                  } else {
                    begin += 2;
                    var end = document.cookie.indexOf(";", begin);
                    if (end == -1) {
                      end = dc.length;
                    }
                  }
                  return unescape(dc.substring(begin + prefix.length, end));
                }
                $(".text").html(function(i, html) {
                  var chars = $.trim(html).split("");
                  return "<span>" + chars.join("</span><span>") + "</span>";
                });
              </script>
              <!--<div class="fl col-12 pb"><img src="https://www.manuka.com.tr/Data/EditorFiles/manuka_kargo_2.jpg" alt="" /></div>--><!--cache-->
              <div class="col col-12 NavContent">
                <div id="navigasyon" class="row">
                  <div id="nav-wrapper" class="inner">
                    <div class="fl">
                      <ul class="fl breadcrumb">
                        <li
                          itemscope=""
                          itemtype="http://data-vocabulary.org/Breadcrumb"
                          class="fl"
                        >
                          <a
                            href="https://www.manuka.com.tr/"
                            title="Anasayfa"
                            class="fl navHome"
                            itemprop="url"
                          >
                            <span itemprop="title">Anasayfa</span>
                          </a>
                        </li>
                        <li
                          itemscope=""
                          itemtype="http://data-vocabulary.org/Breadcrumb"
                          class="fl"
                        >
                          <a
                            href="https://www.manuka.com.tr/giyim-316"
                            title="giyim-316"
                            itemprop="url"
                            class="fl"
                          >
                            <span itemprop="title">Giyim</span>
                          </a>
                        </li>
                        <li
                          itemscope=""
                          itemtype="http://data-vocabulary.org/Breadcrumb"
                          class="fl"
                        >
                          <a
                            href="https://www.manuka.com.tr/sweatshirt-338"
                            title="sweatshirt-338"
                            itemprop="url"
                            class="fl"
                          >
                            <span itemprop="title">Sweatshirt</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div class="contentWrapper col col-12" id="oneCol">
            <div id="content" class="row">
              <div class="inner">
                <div id="mainColumn" class="fl col-12">
                  <script type="text/javascript">
                    setCookie(
                      "last_products",
                      "2706,2660,3578,3569,3570,3567",
                      10
                    );
                  </script>
                  <!--cache-->
                  <div
                    class="col col-12"
                    itemscope="itemscope"
                    itemtype="http://schema.org/Product"
                    id="product-detail"
                  >
                    <span itemprop="category" content=""></span>
                    <span
                      itemprop="url"
                      content="m-1038-hoodie-sweatshirt-turuncu"
                    ></span>
                    <span
                      itemprop="name"
                      content="HOODIE SWEATSHIRT TURUNCU"
                    ></span>
                    <span itemprop="description" content=""></span>
                    <span
                      itemprop="image"
                      content="https://www.manuka.com.tr/m-1038-hoodie-sweatshirt-turuncu-sweatshirt-9758-27-K.jpg"
                    ></span>
                    <div class="col col-12 popupBg"></div>
                    <div id="productDetail" class="row mb">
                      <div class="fl col-12" id="pageContent">
                        <link
                          rel="stylesheet"
                          type="text/css"
                          href="https://img.manuka.com.tr/theme/standart/js/gorsel_vitrin/owl/assets/owl.animate.css"
                        />
                        <link
                          rel="stylesheet"
                          type="text/css"
                          href="https://img.manuka.com.tr/theme/standart/js/gorsel_vitrin/owl/assets/owl.carousel.min.css"
                        />
                        <link
                          rel="stylesheet"
                          type="text/css"
                          href="https://img.manuka.com.tr/theme/standart/js/gorsel_vitrin/owl/assets/owl.theme.default.min.css"
                        />
                        <script
                          type="text/javascript"
                          src="https://img.manuka.com.tr/theme/standart/js/gorsel_vitrin/owl/owl.carousel.min.js"
                        ></script>
                        <!-- #pageContent = Sayfa içinde belirli bir div i popup olarak açmak istediğimizde bu div içerisinden yükleniyor. Hızlı görünüm için gerekli. -->
                        <div class="box col-12">
                          <div class="row">
                            <div
                              class="col col-8 col-md-12 p-left"
                              id="productLeft"
                            >
                              <div class="fl col-12">
                                <div class="col col-12">
                                  <div class="row mb loaderWrapper">
                                    <ul id="productImage" class="fl col-12">
                                      <li class="col-6 col-sm-12 fl">
                                        <a
                                          data-id="9758"
                                          href="https://img.manuka.com.tr/m-1038-hoodie-sweatshirt-turuncu-sweatshirt-9758-27-B.jpg"
                                          data-lightbox="product"
                                          data-index="0"
                                          class="image-wrapper fl"
                                          data-href="https://img.manuka.com.tr/m-1038-hoodie-sweatshirt-turuncu-sweatshirt-9758-27-B.jpg"
                                          data-standard="https://img.manuka.com.tr/m-1038-hoodie-sweatshirt-turuncu-sweatshirt-9758-27-B.jpg"
                                        >
                                          <span class="imgInner">
                                            <img
                                              src="https://img.manuka.com.tr/m-1038-hoodie-sweatshirt-turuncu-sweatshirt-9758-27-O.jpg"
                                              alt="HOODIE SWEATSHIRT TURUNCU"
                                              title="HOODIE SWEATSHIRT TURUNCU"
                                            />
                                          </span>
                                        </a>
                                      </li>
                                      <li class="col-6 col-sm-12 fl">
                                        <a
                                          data-id="7843"
                                          href="https://img.manuka.com.tr/m-1038-hoodie-sweatshirt-turuncu-sweatshirt-7843-27-B.jpg"
                                          data-lightbox="product"
                                          data-index="1"
                                          class="image-wrapper fl"
                                          data-href="https://img.manuka.com.tr/m-1038-hoodie-sweatshirt-turuncu-sweatshirt-7843-27-B.jpg"
                                          data-standard="https://img.manuka.com.tr/m-1038-hoodie-sweatshirt-turuncu-sweatshirt-7843-27-B.jpg"
                                        >
                                          <span class="imgInner">
                                            <img
                                              src="https://img.manuka.com.tr/m-1038-hoodie-sweatshirt-turuncu-sweatshirt-7843-27-O.jpg"
                                              alt="HOODIE SWEATSHIRT TURUNCU"
                                              title="HOODIE SWEATSHIRT TURUNCU"
                                            />
                                          </span>
                                        </a>
                                      </li>
                                      <li class="col-6 col-sm-12 fl">
                                        <a
                                          data-id="7844"
                                          href="https://img.manuka.com.tr/m-1038-hoodie-sweatshirt-turuncu-sweatshirt-7844-27-B.jpg"
                                          data-lightbox="product"
                                          data-index="2"
                                          class="image-wrapper fl"
                                          data-href="https://img.manuka.com.tr/m-1038-hoodie-sweatshirt-turuncu-sweatshirt-7844-27-B.jpg"
                                          data-standard="https://img.manuka.com.tr/m-1038-hoodie-sweatshirt-turuncu-sweatshirt-7844-27-B.jpg"
                                        >
                                          <span class="imgInner">
                                            <img
                                              src="https://img.manuka.com.tr/m-1038-hoodie-sweatshirt-turuncu-sweatshirt-7844-27-O.jpg"
                                              alt="HOODIE SWEATSHIRT TURUNCU"
                                              title="HOODIE SWEATSHIRT TURUNCU"
                                            />
                                          </span>
                                        </a>
                                      </li>
                                      <li class="col-6 col-sm-12 fl">
                                        <a
                                          data-id="8096"
                                          href="https://img.manuka.com.tr/m-1038-hoodie-sweatshirt-turuncu-sweatshirt-8096-27-B.jpg"
                                          data-lightbox="product"
                                          data-index="3"
                                          class="image-wrapper fl"
                                          data-href="https://img.manuka.com.tr/m-1038-hoodie-sweatshirt-turuncu-sweatshirt-8096-27-B.jpg"
                                          data-standard="https://img.manuka.com.tr/m-1038-hoodie-sweatshirt-turuncu-sweatshirt-8096-27-B.jpg"
                                        >
                                          <span class="imgInner">
                                            <img
                                              src="https://img.manuka.com.tr/m-1038-hoodie-sweatshirt-turuncu-sweatshirt-8096-27-O.jpg"
                                              alt="HOODIE SWEATSHIRT TURUNCU"
                                              title="HOODIE SWEATSHIRT TURUNCU"
                                            />
                                          </span>
                                        </a>
                                      </li>
                                      <!-- <div class="col-12 slideControl">
<span id="prevImage" class="fl colPrev icon-arrow-left icon-no-space icon-custom-gray"></span>
<span id="nextImage" class="fr colNext icon-arrow-right icon-no-space icon-custom-gray"></span>
</div>
-->
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="box col-4 col-md-12 p-top loaderWrapper"
                              id="productRight"
                            >
                              <div class="productRightSticky col-12 fl">
                                <div
                                  class="box col-12 p-top"
                                  id="productMobileInfo"
                                >
                                  <div class="row">
                                    <div class="fl col-12" id="productInfo">
                                      <h1
                                        class="fl col-12 productTitle"
                                        id="productName"
                                        data-id="2706"
                                      >
                                        HOODIE SWEATSHIRT TURUNCU
                                      </h1>
                                      <div class="fl col-12 subCode">
                                        Ürün Kodu : M-1038-15
                                      </div>
                                    </div>
                                    <div
                                      class="fl col-12"
                                      id="product-price-m-1038-hoodie-sweatshirt-turuncu"
                                      itemprop="offers"
                                      itemscope=""
                                      itemtype="http://schema.org/Offer"
                                    >
                                      <span
                                        itemprop="priceCurrency"
                                        content="TRY"
                                      ></span>
                                      <span
                                        itemprop="price"
                                        content="107.910036"
                                      ></span>
                                      <span
                                        itemprop="availability"
                                        content="https://schema.org/InStock"
                                      ></span>
                                      <span
                                        itemprop="itemCondition"
                                        content="new"
                                      ></span>
                                      <div class="box col-12 double mainPrices">
                                        <div class="row priceLine">
                                          <div
                                            class="pos-r fl col-12 d-flex"
                                            id="price-flexer"
                                          >
                                            <div class="fl col-sm-12 d-flex">
                                              <div
                                                class="fl text-line currencyPrice discountedPrice pr"
                                                data-old="0"
                                              >
                                                <span
                                                  class="product-price-not-discounted"
                                                  data-price="119,90"
                                                  >119,90</span
                                                >
                                                TL
                                              </div>
                                              <div
                                                class="fl discountPrice indirimliRed"
                                                data-old="0"
                                              >
                                                <span
                                                  class="product-price"
                                                  data-price="107,91"
                                                  >107,91</span
                                                >
                                                TL
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <input
                                  type="hidden"
                                  name="subPro2706"
                                  id="subPro2706"
                                  value="2359"
                                />
                                <div
                                  class="variantOverlay"
                                  data-id="2706"
                                ></div>
                                <div
                                  class="col col-12 variantWrapper tooltipWrapper"
                                >
                                  <div class="row">
                                    <textarea id="json2706" class="hideThis">
{"vat":8,"m_o_p":0,"variant_ids":{"180_144":"2359"},"variant_prices":{"180_144":"99.9167"},"variant_price_raws":{"180_144":99.9167000000000058435034588910639286041259765625},"buying_prices":{"180_144":"0"},"not_discounted_prices":{"180_144":111.0185000000000030695446184836328029632568359375},"variant_supplier_codes":{"180_144":""},"active_ids":{"one_180":["144"],"two_144":["180"]},"variant_stocks":{"180_144":"172"}}</textarea
                                    >
                                    <div class="row mb variantLine">
                                      <div
                                        class="fl col-12 variantBox subOne"
                                        data-order="1"
                                      >
                                        <div
                                          class="pos-r fl box col-12 ease variantList p-right"
                                        >
                                          <a
                                            data-id="180"
                                            data-group-id="1"
                                            data-target="2706"
                                            class="col selected nocursor"
                                          >
                                            <p>TURUNCU</p>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="fl col-sm-12 BedenTabloBtn"
                                      data-width="1000"
                                    >
                                      BEDEN TABLOSU
                                    </div>
                                    <div class="flexwrap VariantSize col-12 fl">
                                      <div class="fl col-12 variantLine">
                                        <div class="fl col-12 d-flex">
                                          <div
                                            class="box col-12 variantBox subTwo"
                                            data-order="2"
                                          >
                                            <div
                                              class="pos-r fl col-12 ease variantList"
                                            >
                                              <a
                                                data-id="144"
                                                data-group-id="2"
                                                data-target="2706"
                                                class="col selected nocursor"
                                              >
                                                <p>STD</p>
                                                <span class=""></span>
                                                <div class="hide BedenTooltip">
                                                  Son Ürünler
                                                </div>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  id="otherColorProducts"
                                  class="fl col-12 mb angularTemplate"
                                  data-url="/srv/service/product/get-related-products/2706/1"
                                  data-callback="otherColorFunc"
                                  style="visibility: visible;"
                                >
                                  <div class="box col-12">
                                    <div class="row">
                                      <h4
                                        class="fl col-12 m-top m-bottom text-regular product-description"
                                      >
                                        RENK
                                      </h4>
                                      <div class="col col-12 p-right">
                                        <div class="row">
                                          <div class="fl col-12 iliskiliUrun">
                                            <ul
                                              class="iliskiliUrunValue"
                                              id="otherColorProductsSlide"
                                            >
                                              <li
                                                class="fl col-2 col-sm-3 col-xxs-4"
                                              >
                                                <div
                                                  class="box p-left p-bottom col-12"
                                                >
                                                  <a
                                                    href="/m-1038-hoodie-sweatshirt-siyah"
                                                    class="fl col-12 image-wrapper"
                                                  >
                                                    <span class="imgInner">
                                                      <img
                                                        src="https://www.manuka.com.tr/m-1038-hoodie-sweatshirt-siyah-sweatshirt-9756-26-K.jpg"
                                                        class="stImage"
                                                        alt="HOODIE SWEATSHIRT SİYAH"
                                                        title="HOODIE SWEATSHIRT SİYAH"
                                                        style=""
                                                      />
                                                    </span>
                                                  </a>
                                                </div>
                                              </li>

                                              <li
                                                class="fl col-2 col-sm-3 col-xxs-4"
                                              >
                                                <div
                                                  class="box p-left p-bottom col-12"
                                                >
                                                  <a
                                                    href="/m-1038-hoodie-sweatshirt-ekru"
                                                    class="fl col-12 image-wrapper"
                                                  >
                                                    <span class="imgInner">
                                                      <img
                                                        src="https://www.manuka.com.tr/m-1038-hoodie-sweatshirt-ekru-sweatshirt-9751-26-K.jpg"
                                                        class="stImage"
                                                        alt="HOODIE SWEATSHIRT EKRU"
                                                        title="HOODIE SWEATSHIRT EKRU"
                                                        style=""
                                                      />
                                                    </span>
                                                  </a>
                                                </div>
                                              </li>

                                              <li
                                                class="fl col-2 col-sm-3 col-xxs-4"
                                              >
                                                <div
                                                  class="box p-left p-bottom col-12"
                                                >
                                                  <a
                                                    href="/hoodie-sweatshirt-camel"
                                                    class="fl col-12 image-wrapper"
                                                  >
                                                    <span class="imgInner">
                                                      <img
                                                        src="https://www.manuka.com.tr/hoodie-sweatshirt-camel-sweatshirt-14273-32-K.jpg"
                                                        class="stImage"
                                                        alt="HOODIE SWEATSHIRT CAMEL"
                                                        title="HOODIE SWEATSHIRT CAMEL"
                                                        style=""
                                                      />
                                                    </span>
                                                  </a>
                                                </div>
                                              </li>

                                              <li
                                                class="fl col-2 col-sm-3 col-xxs-4"
                                              >
                                                <div
                                                  class="box p-left p-bottom col-12"
                                                >
                                                  <a
                                                    href="/hoodie-sweatshirt-kiremit"
                                                    class="fl col-12 image-wrapper"
                                                  >
                                                    <span class="imgInner">
                                                      <img
                                                        src="https://www.manuka.com.tr/hoodie-sweatshirt-kiremit-sweatshirt-0-14272-32-K.jpg"
                                                        class="stImage"
                                                        alt="HOODIE SWEATSHIRT KİREMİT"
                                                        title="HOODIE SWEATSHIRT KİREMİT"
                                                        style=""
                                                      />
                                                    </span>
                                                  </a>
                                                </div>
                                              </li>

                                              <li
                                                class="fl col-2 col-sm-3 col-xxs-4"
                                              >
                                                <div
                                                  class="box p-left p-bottom col-12"
                                                >
                                                  <a
                                                    href="/hoodie-sweatshirt-haki"
                                                    class="fl col-12 image-wrapper"
                                                  >
                                                    <span class="imgInner">
                                                      <img
                                                        src="https://www.manuka.com.tr/hoodie-sweatshirt-haki-sweatshirt-0-14271-32-K.jpg"
                                                        class="stImage"
                                                        alt="HOODIE SWEATSHIRT HAKİ"
                                                        title="HOODIE SWEATSHIRT HAKİ"
                                                        style=""
                                                      />
                                                    </span>
                                                  </a>
                                                </div>
                                              </li>

                                              <li
                                                class="fl col-2 col-sm-3 col-xxs-4"
                                              >
                                                <div
                                                  class="box p-left p-bottom col-12"
                                                >
                                                  <a
                                                    href="/hoodie-sweatshirt-tatli-sari"
                                                    class="fl col-12 image-wrapper"
                                                  >
                                                    <span class="imgInner">
                                                      <img
                                                        src="https://www.manuka.com.tr/hoodie-sweatshirt-tatli-sari-sweatshirt-14270-32-K.jpg"
                                                        class="stImage"
                                                        alt="HOODIE SWEATSHIRT TATLI SARI"
                                                        title="HOODIE SWEATSHIRT TATLI SARI"
                                                        style=""
                                                      />
                                                    </span>
                                                  </a>
                                                </div>
                                              </li>

                                              <li
                                                class="fl col-2 col-sm-3 col-xxs-4"
                                              >
                                                <div
                                                  class="box p-left p-bottom col-12"
                                                >
                                                  <a
                                                    href="/m-1038-hoodie-sweatshirt-lila"
                                                    class="fl col-12 image-wrapper"
                                                  >
                                                    <span class="imgInner">
                                                      <img
                                                        src="https://www.manuka.com.tr/m-1038-hoodie-sweatshirt-lila-sweatshirt-9753-26-K.jpg"
                                                        class="stImage"
                                                        alt="HOODIE SWEATSHIRT LİLA"
                                                        title="HOODIE SWEATSHIRT LİLA"
                                                        style=""
                                                      />
                                                    </span>
                                                  </a>
                                                </div>
                                              </li>

                                              <li
                                                class="fl col-2 col-sm-3 col-xxs-4"
                                              >
                                                <div
                                                  class="box p-left p-bottom col-12"
                                                >
                                                  <a
                                                    href="/m-1038-hoodie-sweatshirt-gul-kurusu"
                                                    class="fl col-12 image-wrapper"
                                                  >
                                                    <span class="imgInner">
                                                      <img
                                                        src="https://www.manuka.com.tr/m-1038-hoodie-sweatshirt-gul-kurusu-sweatshirt-9752-26-K.jpg"
                                                        class="stImage"
                                                        alt="HOODIE SWEATSHIRT GÜL KURUSU"
                                                        title="HOODIE SWEATSHIRT GÜL KURUSU"
                                                        style=""
                                                      />
                                                    </span>
                                                  </a>
                                                </div>
                                              </li>

                                              <li
                                                class="fl col-2 col-sm-3 col-xxs-4"
                                              >
                                                <div
                                                  class="box p-left p-bottom col-12"
                                                >
                                                  <a
                                                    href="/hoodie-sweatshirt-gulpembe"
                                                    class="fl col-12 image-wrapper"
                                                  >
                                                    <span class="imgInner">
                                                      <img
                                                        src="https://www.manuka.com.tr/hoodie-sweatshirt-gulpembe-sweatshirt-14268-32-K.jpg"
                                                        class="stImage"
                                                        alt="HOODIE SWEATSHIRT GÜLPEMBE"
                                                        title="HOODIE SWEATSHIRT GÜLPEMBE"
                                                        style=""
                                                      />
                                                    </span>
                                                  </a>
                                                </div>
                                              </li>

                                              <li
                                                class="fl col-2 col-sm-3 col-xxs-4"
                                              >
                                                <div
                                                  class="box p-left p-bottom col-12"
                                                >
                                                  <a
                                                    href="/hoodie-sweatshirt-leylak"
                                                    class="fl col-12 image-wrapper"
                                                  >
                                                    <span class="imgInner">
                                                      <img
                                                        src="https://www.manuka.com.tr/hoodie-sweatshirt-leylak-sweatshirt-14267-32-K.jpg"
                                                        class="stImage"
                                                        alt="HOODIE SWEATSHIRT LEYLAK"
                                                        title="HOODIE SWEATSHIRT LEYLAK"
                                                        style=""
                                                      />
                                                    </span>
                                                  </a>
                                                </div>
                                              </li>

                                              <li
                                                class="fl col-2 col-sm-3 col-xxs-4"
                                              >
                                                <div
                                                  class="box p-left p-bottom col-12"
                                                >
                                                  <a
                                                    href="/hoodie-sweatshirt-seftali"
                                                    class="fl col-12 image-wrapper"
                                                  >
                                                    <span class="imgInner">
                                                      <img
                                                        src="https://www.manuka.com.tr/hoodie-sweatshirt-seftali-sweatshirt-9757-27-K.jpg"
                                                        class="stImage"
                                                        alt="HOODIE SWEATSHIRT ŞEFTALİ"
                                                        title="HOODIE SWEATSHIRT ŞEFTALİ"
                                                        style=""
                                                      />
                                                    </span>
                                                  </a>
                                                </div>
                                              </li>

                                              <li
                                                class="fl col-2 col-sm-3 col-xxs-4"
                                              >
                                                <div
                                                  class="box p-left p-bottom col-12"
                                                >
                                                  <a
                                                    href="/m-1038-hoodie-sweatshirt-mavi"
                                                    class="fl col-12 image-wrapper"
                                                  >
                                                    <span class="imgInner">
                                                      <img
                                                        src="https://www.manuka.com.tr/m-1038-hoodie-sweatshirt-mavi-sweatshirt-9754-26-K.jpg"
                                                        class="stImage"
                                                        alt="HOODIE SWEATSHIRT MAVİ"
                                                        title="HOODIE SWEATSHIRT MAVİ"
                                                        style=""
                                                      />
                                                    </span>
                                                  </a>
                                                </div>
                                              </li>

                                              <li
                                                class="fl col-2 col-sm-3 col-xxs-4"
                                              >
                                                <div
                                                  class="box p-left p-bottom col-12"
                                                >
                                                  <a
                                                    href="/hoodie-sweatshirt-mint"
                                                    class="fl col-12 image-wrapper"
                                                  >
                                                    <span class="imgInner">
                                                      <img
                                                        src="https://www.manuka.com.tr/hoodie-sweatshirt-mint-sweatshirt-14269-32-K.jpg"
                                                        class="stImage"
                                                        alt="HOODIE SWEATSHIRT MİNT"
                                                        title="HOODIE SWEATSHIRT MİNT"
                                                        style=""
                                                      />
                                                    </span>
                                                  </a>
                                                </div>
                                              </li>

                                              <li
                                                class="fl col-2 col-sm-3 col-xxs-4"
                                              >
                                                <div
                                                  class="box p-left p-bottom col-12"
                                                >
                                                  <a
                                                    href="/hoodie-sweatshirt-antrasit"
                                                    class="fl col-12 image-wrapper"
                                                  >
                                                    <span class="imgInner">
                                                      <img
                                                        src="https://www.manuka.com.tr/hoodie-sweatshirt-antrasit-sweatshirt-11423-31-K.jpg"
                                                        class="stImage"
                                                        alt="HOODIE SWEATSHIRT ANTRASİT"
                                                        title="HOODIE SWEATSHIRT ANTRASİT"
                                                        style=""
                                                      />
                                                    </span>
                                                  </a>
                                                </div>
                                              </li>

                                              <li
                                                class="fl col-2 col-sm-3 col-xxs-4"
                                              >
                                                <div
                                                  class="box p-left p-bottom col-12"
                                                >
                                                  <a
                                                    href="/m-1038-hoodie-sweatshirt-sari"
                                                    class="fl col-12 image-wrapper"
                                                  >
                                                    <span class="imgInner">
                                                      <img
                                                        src="https://www.manuka.com.tr/m-1038-hoodie-sweatshirt-sari-sweatshirt-9755-26-K.jpg"
                                                        class="stImage"
                                                        alt="HOODIE SWEATSHIRT SARI"
                                                        title="HOODIE SWEATSHIRT SARI"
                                                        style=""
                                                      />
                                                    </span>
                                                  </a>
                                                </div>
                                              </li>

                                              <span
                                                class="fr col-3 col-sm-12 allNitelik"
                                                >Tümünü Göster</span
                                              >
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="box col-12 p-top">
                                  <div class="row mb tooltipWrapper">
                                    <input
                                      type="hidden"
                                      id="IS_STOCK_NOTIFICATION_SUBPRODUCT"
                                      value="1"
                                    />
                                    <div
                                      class="subProductStockAlert outStock"
                                      style="display:none"
                                    >
                                      <a
                                        data-width="500"
                                        data-url="/srv/service/customer/login-form"
                                        class="popupWin box productFunction popupHide priceAlertLink"
                                        >Stoğa gelince haber ver</a
                                      >
                                    </div>
                                    <div class="fl col-12 inStock">
                                      <div class="fl col-12">
                                        <div
                                          class="fl col-12"
                                          id="cart-wrapper"
                                        >
                                          <div
                                            class="col col-12 p-left productType"
                                          >
                                            Adet:
                                          </div>
                                          <div
                                            class="box col-4 col-xs-12 p-left qtyBox"
                                          >
                                            <div class="fl col-12">
                                              <div
                                                class="fl col-sm-12 qtyBtns"
                                                data-increment="1"
                                              >
                                                <a
                                                  title="-"
                                                  data-id="2706"
                                                  class="col-4 d-flex"
                                                >
                                                  <p
                                                    class="fl col-12 icon-minus icon-no-space text-center p-bottom"
                                                  ></p>
                                                </a>
                                                <input
                                                  type="text"
                                                  id="Adet2706"
                                                  name="Adet2706"
                                                  value="1 Adet"
                                                  class="col-4 detayAdet2706"
                                                />
                                                <a
                                                  title="+"
                                                  data-id="2706"
                                                  class="col-4 d-flex"
                                                >
                                                  <p
                                                    class="fl col-12 icon-plus icon-no-space text-center p-bottom"
                                                  ></p>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="fl" id="mobileBuyBtn">
                                            <div class="fl col-12 buyBtn">
                                              <a
                                                onclick="Add2Cart(2706, $('#subPro2706').val(), $('.detayAdet2706').val());"
                                                class="col-12 fl"
                                                id="addCartBtn"
                                              >
                                                Sepete Ekle
                                              </a>
                                            </div>
                                          </div>
                                          <div class="fl FavoriBtn">
                                            <a
                                              data-width="500"
                                              data-url="/srv/service/customer/login-form"
                                              class="popupWin box popupHide shopListLink favoriteBtn"
                                            ></a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="DetayButons col-12 fl">
                                      <div class="DetayWp fl">
                                        <a
                                          href="https://api.whatsapp.com/send?phone=905525991550&amp;text=Sipariş vermek istiyorum, Ürün Adı : HOODIE SWEATSHIRT TURUNCU, Ürün Linki : https://www.manuka.com.tr/m-1038-hoodie-sweatshirt-turuncu"
                                          target="_blank"
                                          rel="nofollow"
                                          class="box"
                                          ><span
                                            >Whatsapp ile<br />Sipariş Ver</span
                                          ></a
                                        >
                                      </div>
                                      <!--<div class="DetayHbrBtn fl">
<a data-width="500" data-url="/srv/service/customer/login-form" class="popupWin box popupHide priceAlertLink" id="priceAlertLink"><span>İndirime Girince<br>Haber Ver</span></a>
</div>-->
                                    </div>
                                    <div class="fl col-12 DetaySosyalMedya">
                                      <div class="smlIconSet col p-left">
                                        <div class="col p-left shareTitle">
                                          Paylaş :
                                        </div>
                                        <div class="fl shareBtns">
                                          <div class="col p-left">
                                            <a
                                              id="fbShareBtn"
                                              target="_blank"
                                              rel="nofollow"
                                            ></a>
                                          </div>
                                          <div class="col p-left">
                                            <a
                                              id="twBtn"
                                              target="_blank"
                                              rel="nofollow"
                                              href="http://twitter.com/share?text=HOODIE SWEATSHIRT TURUNCU&amp;url=https://www.manuka.com.tr/m-1038-hoodie-sweatshirt-turuncu?recommended_by=dynamic&amp;recommended_code=f0d695cc8140bba0fba4293afe06a3c0"
                                            ></a>
                                          </div>
                                          <div class="col p-left">
                                            <a
                                              rel="nofollow"
                                              id="pinBtn"
                                              target="_blank"
                                              data-pin-log="button_pinit"
                                              data-pin-href="https://tr.pinterest.com/pin/create/button?guid=pgSvXu4VSXvj-1&amp;url=https%3A%2F%2Fwww.manuka.com.tr%2Fm-1038-hoodie-sweatshirt-turuncu&amp;media=undefined&amp;description=HOODIE%20SWEATSHIRT%20TURUNCU%20Sweatshirt%2C%20%C4%B0ndirim%2C%20Makaron%20Renkleri%2C%20Fazla%20G%C3%BCzel"
                                            ></a>
                                          </div>
                                          <div class="col p-left">
                                            <a
                                              href="whatsapp://send?text=m-1038-hoodie-sweatshirt-turuncu"
                                              id="wpBtn"
                                              target="_blank"
                                              rel="nofollow"
                                            ></a>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="fr YerliUretim">
                                        <img
                                          src="https://www.manuka.com.tr/Data/EditorFiles/tema/img/yerli-uretim.png"
                                          alt="Manuka yerli üretim"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="urun-tab fl col-12" id="urun-tab">
                                  <div class="tab-title">ÜRÜN ÖZELLİKLERİ</div>
                                  <div
                                    class="tab-icerik ozellik"
                                    style="display: none;"
                                  >
                                    <div
                                      class="fl col-12"
                                      id="productDetailTab"
                                      itemprop="description"
                                    >
                                      <div style="">
                                        %100 pamuk ve 3 iplk şardondan
                                        üretilmiştir.<br /><br />&nbsp;Göğüs:130
                                        cm Kol Boyu: Dikişten sonra 43 cm Boy:75
                                        cm<br /><br />*Ürün 36-42 Beden
                                        Uyumludur.<br />
                                      </div>
                                    </div>
                                  </div>
                                  <div class="tab-title">TESLİMAT VE İADE</div>
                                  <div
                                    class="tab-icerik"
                                    style="display: none;"
                                  >
                                    1-İade hakkının kullanılması için 7 (yedi)
                                    günlük süre içinde Satıcı’ya telefon ile
                                    whatsapp üzerinden (+0552 599 15 50)
                                    bildirimde bulunulması ve iade edilmek
                                    istenen Ürün ve Ürünler’in işbu Sözleşmenin
                                    6. Maddesi hükümleri çerçevesinde
                                    kullanılmamış ve Satıcı tarafından tekrar
                                    satışa arz edilebilir nitelikte olması
                                    şarttır.<br />
                                    2- Özürlü ürünlerde (defo, yırtık) kargo
                                    Satıcıya aittir. <br />
                                    3- Anlaşmalı kargolarımız dışında tarafımıza
                                    gönderilen kargolarınız kabul edilmez.<br />
                                    4-Sadece ambalajı açılmamış, orjinalliği
                                    bozulmamış ürünlerde iade mevcuttur.
                                    (Aksesurlar ve çantalar hariç) İade hakkının
                                    kullanılması için 7 (yedi) günlük süre
                                    içinde Satıcı’ya telefon ile whatsapp
                                    üzerinden (+0552 599 15 50) bildirimde
                                    bulunulması İade istenen Ürün ve Ürünler’in
                                    işbu Sözleşmenin 6. Maddesi hükümleri
                                    çerçevesinde kullanılmamış ve Satıcı
                                    tarafından tekrar satışa arz edilebilir
                                    nitelikte olması şarttır. <br />
                                    5- Keyfi iadelerde kargo ücretleri Alıcıya
                                    aittir. <br />
                                    6- ByExpress kargo ile gelen siparişlerin
                                    iadesi için en yakın ByExpress şubesine
                                    bırakabilir ya da 444 61 63 numarasını
                                    arayarak kurye çağırabilirsiniz.<br />
                                    7- Aras kargo ile gelen siparişlerin iadesi
                                    için aşağıda belirtilen müşteri numarası ile
                                    birlikte en yakın Aras kargo şubesine
                                    verilmesi gerekmektedir. Müşteri no:
                                    1733844311334 (Kargola Taşımacılık A.ş -
                                    Kamelya Şubesi) <br />
                                  </div>
                                  <div
                                    class="tab-title"
                                    data-href="/srv/service/product-detail/payment-options/2706/0"
                                    id="odemeler"
                                  >
                                    ÖDEME SEÇENEKLERİ
                                  </div>
                                  <div
                                    class="tab-icerik loaderWrapper"
                                    id="odeme-wrapper"
                                    style="display: none;"
                                  ></div>
                                  <div
                                    class="tab-title"
                                    data-href="/srv/service/content/get/1004/comment/2706"
                                    id="commentTab"
                                  >
                                    YORUMLAR
                                  </div>
                                  <div
                                    class="tab-icerik loaderWrapper"
                                    id="yorum-wrapper"
                                    style="display: none;"
                                  ></div>
                                </div>
                                <div class="fl col-12 d-none" id="cmpList">
                                  <div class="box col-12" id="cmp-wrapper">
                                    <div class="row">
                                      <div class="box col-12">
                                        <div class="row text-title text-light">
                                          Kampanya
                                        </div>
                                      </div>
                                      <div class="col col-12 p-right">
                                        <div class="row" id="cmps"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="BedenImgBox hideThis">
                          <center>
                            <img
                              src="https://img.manuka.com.tr/Data/EditorFiles/beden_tablolari/beden2t.png"
                            />
                          </center>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="PersonaClickDiv PersonaClickUrunDetay col-12 fl">
                    <div
                      class="personaclick-recommend col-12 fl personaclick-recommend-rendered"
                      data-recommender-block="dynamic"
                      data-recommender-code="c32a1648636cd0df43888f6f0ffcf783"
                      data-recommender-item="2706"
                      data-recommender-callback="PersonaCallBack"
                    >
                      <style>
                        .personaclick-recommend
                          .recommended-items
                          .recommended-item:hover {
                          -webkit-box-shadow: unset !important;
                          box-shadow: unset !important;
                          border: unset !important;
                        }
                        .personaclick-recommend {
                          float: left;
                          width: 100%;
                          display: block;
                        }
                        .personaclick-recommend .recommended-items {
                          height: unset !important;
                          overflow: unset !important;
                        }
                        .recommender-block-title {
                          font: 600 24px / 35px Poppins, sans-serif !important;
                          text-align: left;
                        }
                        .personaclick-recommend
                          .recommended-items
                          .recommended-item {
                          border: unset !important;
                          width: unset !important;
                          height: unset !important;
                        }
                        .personaclick-recommend
                          .recommended-items
                          .recommended-item
                          .recommended-item-photo {
                          margin: 0px auto 6px auto !important;
                        }
                        .personaclick-recommend
                          .recommended-items
                          .recommended-item
                          .recommended-item-photo,
                        .personaclick-recommend
                          .recommended-items
                          .recommended-item
                          .recommended-item-photo
                          img {
                          max-height: unset !important;
                          max-width: unset !important;
                          width: 100% !important;
                        }
                        .personaclick-recommend .owl-nav.disabled {
                          display: none !important;
                        }
                        .persona-item-price {
                          font: 600 17px / 17px Poppins, sans-serif !important;
                          float: left !important;
                          margin-top: 5px !important;
                        }
                        .persona-old-price {
                          float: left;
                          margin-right: 10px;
                          font: 17px / 17px Poppins, sans-serif !important;
                          text-decoration: line-through !important;
                          margin-top: 5px !important;
                        }
                        .persona-new-price {
                          float: left;
                          color: #fe3600;
                          font: 600 17px / 17px Poppins, sans-serif !important;
                          margin-top: 5px !important;
                        }
                        .recommended-item-title {
                          font: 16px / 17px Poppins, sans-serif !important;
                          width: 100% !important;
                          height: unset !important;
                          text-align: left !important;
                          margin: 0 !important;
                          text-transform: uppercase;
                        }
                        .personaclick-recommend .owl-prev {
                          position: absolute;
                          top: 40%;
                          visibility: hidden;
                          height: 30px !important;
                          width: 30px !important;
                          left: -65px;
                        }
                        .personaclick-recommend .owl-prev:after {
                          visibility: visible !important;
                          content: "";
                          width: 30px;
                          height: 30px;
                          display: block;
                          background: url(/Data/EditorFiles/tema/svg/back.svg)
                            no-repeat center !important;
                        }
                        .personaclick-recommend .owl-next {
                          position: absolute;
                          top: 40%;
                          visibility: hidden;
                          height: 30px !important;
                          width: 30px !important;
                          right: -50px;
                        }
                        .personaclick-recommend .owl-next:after {
                          visibility: visible !important;
                          content: "";
                          width: 30px;
                          height: 30px;
                          display: block;
                          background: url(/Data/EditorFiles/tema/svg/right.svg)
                            no-repeat center !important;
                        }

                        @media only screen and (max-width: 1440px) {
                          .personaclick-recommend .owl-next {
                            right: -15px;
                          }
                          .personaclick-recommend .owl-prev {
                            left: -30px;
                          }
                        }

                        @media only screen and (max-width: 768px) {
                          .personaclick-recommend {
                            margin-bottom: 0px !important;
                          }
                          .personaclick-recommend .recommended-items {
                            left: -5px;
                          }
                          .personaclick-recommend
                            .recommended-items
                            .recommended-item {
                            width: 210px !important;
                            height: 350px !important;
                            border: unset !important;
                          }
                          .personaclick-recommend
                            .recommended-items
                            .recommended-item
                            .recommended-item-photo,
                          .personaclick-recommend
                            .recommended-items
                            .recommended-item
                            .recommended-item-photo
                            img {
                            max-width: 190px !important;
                          }
                          .recommended-item-title {
                            margin-left: 10px !important;
                          }
                          .persona-item-price {
                            margin-left: 10px !important;
                          }
                          .persona-old-price {
                            width: 30% !important;
                            margin-left: 10px !important;
                            float: left;
                            margin-right: 10px !important;
                            font: 13px / 17px Poppins, sans-serif !important;
                            text-decoration: line-through !important;
                            margin-top: 5px !important;
                          }
                          .persona-new-price {
                            width: 35% !important;
                            margin-left: 0px !important;
                            font: 600 14px / 17px Poppins, sans-serif !important;
                          }
                          .personaclick-recommend .owl-next {
                            right: -25px !important;
                          }
                          .personaclick-recommend .owl-prev {
                            left: -15px !important;
                          }
                          .personaclick-recommend .owl-nav {
                            top: 35%;
                          }
                        }

                        @media only screen and (max-width: 320px) {
                          .personaclick-recommend
                            .recommended-items
                            .recommended-item {
                            width: 145px !important;
                            height: 275px !important;
                          }
                          .persona-old-price {
                            width: 40% !important;
                          }
                          .persona-new-price {
                            width: 45% !important;
                          }
                          .personaclick-recommend .recommended-items {
                            left: 0px !important;
                          }
                          .personaclick-recommend .owl-prev {
                            left: -10px !important;
                          }
                        }
                      </style>

                      <div
                        data-categories='["316", "338"]'
                        class="recommender-block-title"
                      >
                        BENZER ÜRÜNLER
                      </div>
                      <div
                        class="recommended-items owl-carousel owl-theme owl-loaded owl-drag"
                      >
                        <div class="owl-stage-outer">
                          <div
                            class="owl-stage"
                            style="transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s; width: 2420px;"
                          >
                            <div
                              class="owl-item active"
                              style="width: 232px; margin-right: 10px;"
                            >
                              <div class="recommended-item">
                                <div class="recommended-item-photo">
                                  <a
                                    href="https://www.manuka.com.tr/m-1038-hoodie-sweatshirt-ekru?recommended_by=dynamic&amp;recommended_code=c32a1648636cd0df43888f6f0ffcf783"
                                    ><img
                                      class="item_img"
                                      src="https://pictures.personaclick.com/resize-images/520/76c817929f9164580e7d674b8e21b0/195473855.jpg"
                                  /></a>
                                </div>
                                <div class="recommended-item-title">
                                  <a
                                    href="https://www.manuka.com.tr/m-1038-hoodie-sweatshirt-ekru?recommended_by=dynamic&amp;recommended_code=c32a1648636cd0df43888f6f0ffcf783"
                                    >hoodıe sweatshırt ekru</a
                                  >
                                </div>

                                <div class="persona-old-price">
                                  119,90 TL
                                </div>
                                <div class="persona-new-price">
                                  107,91 TL
                                </div>
                              </div>
                            </div>
                            <div
                              class="owl-item active"
                              style="width: 232px; margin-right: 10px;"
                            >
                              <div class="recommended-item">
                                <div class="recommended-item-photo">
                                  <a
                                    href="https://www.manuka.com.tr/m-1038-hoodie-sweatshirt-gul-kurusu?recommended_by=dynamic&amp;recommended_code=c32a1648636cd0df43888f6f0ffcf783"
                                    ><img
                                      class="item_img"
                                      src="https://pictures.personaclick.com/resize-images/520/76c817929f9164580e7d674b8e21b0/195454863.jpg"
                                  /></a>
                                </div>
                                <div class="recommended-item-title">
                                  <a
                                    href="https://www.manuka.com.tr/m-1038-hoodie-sweatshirt-gul-kurusu?recommended_by=dynamic&amp;recommended_code=c32a1648636cd0df43888f6f0ffcf783"
                                    >hoodıe sweatshırt gül kurusu</a
                                  >
                                </div>

                                <div class="persona-old-price">
                                  119,90 TL
                                </div>
                                <div class="persona-new-price">
                                  107,91 TL
                                </div>
                              </div>
                            </div>
                            <div
                              class="owl-item active"
                              style="width: 232px; margin-right: 10px;"
                            >
                              <div class="recommended-item">
                                <div class="recommended-item-photo">
                                  <a
                                    href="https://www.manuka.com.tr/m-1038-hoodie-sweatshirt-siyah?recommended_by=dynamic&amp;recommended_code=c32a1648636cd0df43888f6f0ffcf783"
                                    ><img
                                      class="item_img"
                                      src="https://pictures.personaclick.com/resize-images/520/76c817929f9164580e7d674b8e21b0/195454908.jpg"
                                  /></a>
                                </div>
                                <div class="recommended-item-title">
                                  <a
                                    href="https://www.manuka.com.tr/m-1038-hoodie-sweatshirt-siyah?recommended_by=dynamic&amp;recommended_code=c32a1648636cd0df43888f6f0ffcf783"
                                    >hoodıe sweatshırt siyah</a
                                  >
                                </div>

                                <div class="persona-old-price">
                                  119,90 TL
                                </div>
                                <div class="persona-new-price">
                                  107,91 TL
                                </div>
                              </div>
                            </div>
                            <div
                              class="owl-item active"
                              style="width: 232px; margin-right: 10px;"
                            >
                              <div class="recommended-item">
                                <div class="recommended-item-photo">
                                  <a
                                    href="https://www.manuka.com.tr/hoodie-sweatshirt-seftali?recommended_by=dynamic&amp;recommended_code=c32a1648636cd0df43888f6f0ffcf783"
                                    ><img
                                      class="item_img"
                                      src="https://pictures.personaclick.com/resize-images/520/76c817929f9164580e7d674b8e21b0/195454869.jpg"
                                  /></a>
                                </div>
                                <div class="recommended-item-title">
                                  <a
                                    href="https://www.manuka.com.tr/hoodie-sweatshirt-seftali?recommended_by=dynamic&amp;recommended_code=c32a1648636cd0df43888f6f0ffcf783"
                                    >hoodıe sweatshırt şeftali</a
                                  >
                                </div>

                                <div class="persona-old-price">
                                  119,90 TL
                                </div>
                                <div class="persona-new-price">
                                  107,91 TL
                                </div>
                              </div>
                            </div>
                            <div
                              class="owl-item active"
                              style="width: 232px; margin-right: 10px;"
                            >
                              <div class="recommended-item">
                                <div class="recommended-item-photo">
                                  <a
                                    href="https://www.manuka.com.tr/m-1038-hoodie-sweatshirt-mavi?recommended_by=dynamic&amp;recommended_code=c32a1648636cd0df43888f6f0ffcf783"
                                    ><img
                                      class="item_img"
                                      src="https://pictures.personaclick.com/resize-images/520/76c817929f9164580e7d674b8e21b0/195473780.jpg"
                                  /></a>
                                </div>
                                <div class="recommended-item-title">
                                  <a
                                    href="https://www.manuka.com.tr/m-1038-hoodie-sweatshirt-mavi?recommended_by=dynamic&amp;recommended_code=c32a1648636cd0df43888f6f0ffcf783"
                                    >hoodıe sweatshırt mavi</a
                                  >
                                </div>

                                <div class="persona-old-price">
                                  119,90 TL
                                </div>
                                <div class="persona-new-price">
                                  107,91 TL
                                </div>
                              </div>
                            </div>
                            <div
                              class="owl-item"
                              style="width: 232px; margin-right: 10px;"
                            >
                              <div class="recommended-item">
                                <div class="recommended-item-photo">
                                  <a
                                    href="https://www.manuka.com.tr/hoodie-sweatshirt-leylak?recommended_by=dynamic&amp;recommended_code=c32a1648636cd0df43888f6f0ffcf783"
                                    ><img
                                      class="item_img"
                                      src="https://pictures.personaclick.com/resize-images/520/76c817929f9164580e7d674b8e21b0/201242524.jpg"
                                  /></a>
                                </div>
                                <div class="recommended-item-title">
                                  <a
                                    href="https://www.manuka.com.tr/hoodie-sweatshirt-leylak?recommended_by=dynamic&amp;recommended_code=c32a1648636cd0df43888f6f0ffcf783"
                                    >hoodıe sweatshırt leylak</a
                                  >
                                </div>

                                <div class="persona-old-price">
                                  119,90 TL
                                </div>
                                <div class="persona-new-price">
                                  107,91 TL
                                </div>
                              </div>
                            </div>
                            <div
                              class="owl-item"
                              style="width: 232px; margin-right: 10px;"
                            >
                              <div class="recommended-item">
                                <div class="recommended-item-photo">
                                  <a
                                    href="https://www.manuka.com.tr/hoodie-sweatshirt-haki?recommended_by=dynamic&amp;recommended_code=c32a1648636cd0df43888f6f0ffcf783"
                                    ><img
                                      class="item_img"
                                      src="https://pictures.personaclick.com/resize-images/520/76c817929f9164580e7d674b8e21b0/201241519.jpg"
                                  /></a>
                                </div>
                                <div class="recommended-item-title">
                                  <a
                                    href="https://www.manuka.com.tr/hoodie-sweatshirt-haki?recommended_by=dynamic&amp;recommended_code=c32a1648636cd0df43888f6f0ffcf783"
                                    >hoodıe sweatshırt haki</a
                                  >
                                </div>

                                <div class="persona-old-price">
                                  119,90 TL
                                </div>
                                <div class="persona-new-price">
                                  107,91 TL
                                </div>
                              </div>
                            </div>
                            <div
                              class="owl-item"
                              style="width: 232px; margin-right: 10px;"
                            >
                              <div class="recommended-item">
                                <div class="recommended-item-photo">
                                  <a
                                    href="https://www.manuka.com.tr/bloking-sweatshirt-seftali?recommended_by=dynamic&amp;recommended_code=c32a1648636cd0df43888f6f0ffcf783"
                                    ><img
                                      class="item_img"
                                      src="https://pictures.personaclick.com/resize-images/520/76c817929f9164580e7d674b8e21b0/195473733.jpg"
                                  /></a>
                                </div>
                                <div class="recommended-item-title">
                                  <a
                                    href="https://www.manuka.com.tr/bloking-sweatshirt-seftali?recommended_by=dynamic&amp;recommended_code=c32a1648636cd0df43888f6f0ffcf783"
                                    >blokıng sweatshırt şeftali</a
                                  >
                                </div>

                                <div class="persona-old-price">
                                  119,90 TL
                                </div>
                                <div class="persona-new-price">
                                  107,91 TL
                                </div>
                              </div>
                            </div>
                            <div
                              class="owl-item"
                              style="width: 232px; margin-right: 10px;"
                            >
                              <div class="recommended-item">
                                <div class="recommended-item-photo">
                                  <a
                                    href="https://www.manuka.com.tr/hoodie-sweatshirt-mint?recommended_by=dynamic&amp;recommended_code=c32a1648636cd0df43888f6f0ffcf783"
                                    ><img
                                      class="item_img"
                                      src="https://pictures.personaclick.com/resize-images/520/76c817929f9164580e7d674b8e21b0/2405389329737188152.jpg"
                                  /></a>
                                </div>
                                <div class="recommended-item-title">
                                  <a
                                    href="https://www.manuka.com.tr/hoodie-sweatshirt-mint?recommended_by=dynamic&amp;recommended_code=c32a1648636cd0df43888f6f0ffcf783"
                                    >hoodıe sweatshırt mint</a
                                  >
                                </div>

                                <div class="persona-old-price">
                                  119,90 TL
                                </div>
                                <div class="persona-new-price">
                                  107,91 TL
                                </div>
                              </div>
                            </div>
                            <div
                              class="owl-item"
                              style="width: 232px; margin-right: 10px;"
                            >
                              <div class="recommended-item">
                                <div class="recommended-item-photo">
                                  <a
                                    href="https://www.manuka.com.tr/39-kanguru-cep-sweatshirt-siyah-2202?recommended_by=dynamic&amp;recommended_code=c32a1648636cd0df43888f6f0ffcf783"
                                    ><img
                                      class="item_img"
                                      src="https://pictures.personaclick.com/resize-images/520/76c817929f9164580e7d674b8e21b0/195454832.jpg"
                                  /></a>
                                </div>
                                <div class="recommended-item-title">
                                  <a
                                    href="https://www.manuka.com.tr/39-kanguru-cep-sweatshirt-siyah-2202?recommended_by=dynamic&amp;recommended_code=c32a1648636cd0df43888f6f0ffcf783"
                                    >kanguru cep sweatshırt siyah</a
                                  >
                                </div>

                                <div class="persona-old-price">
                                  149,90 TL
                                </div>
                                <div class="persona-new-price">
                                  99,90 TL
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="owl-nav">
                          <div class="owl-prev">prev</div>
                          <div class="owl-next">next</div>
                        </div>
                        <div class="owl-dots disabled"></div>
                      </div>
                    </div>
                  </div>
                  <div id="pageScripts">
                    <input type="hidden" id="urun-id" value="2706" />
                    <input
                      type="hidden"
                      id="urun-ad"
                      value="HOODIE SWEATSHIRT TURUNCU"
                    />
                    <input
                      type="hidden"
                      id="urun-kategori"
                      value="Sweatshirt"
                    />
                    <input type="hidden" id="urun-kur" value="TL" />
                    <input type="hidden" id="urun-fiyat" value="99.9167" />
                    <input type="hidden" id="urun-tedarikci-kod" value="" />
                    <input
                      type="hidden"
                      id="urun-kategoriler"
                      value="338,391,388,231"
                    />
                    <!-- #pageScripts = Sayfa scriptleri bu div içerisinden yükleniyor. Hızlı görünüm için gerekli. -->
                    <link
                      rel="stylesheet"
                      property="stylesheet"
                      type="text/css"
                      href="/theme/v4-freshscarfs/sub_theme/urundetay/firat/user_v4yeni/urundetay.css"
                    />
                    <link
                      rel="stylesheet"
                      property="stylesheet"
                      type="text/css"
                      href="https://www.manuka.com.tr/theme/v4-freshscarfs/sub_theme/genel/firat/user_v4yeni/photoGallery.css"
                    />
                    <link
                      rel="stylesheet"
                      property="stylesheet"
                      type="text/css"
                      href="/js/lightbox/css/lightbox.css"
                    />
                    
                  <!--cache-->
                  <div class="PersonaClickDiv col-12 fl">
                    <div
                      class="personaclick-recommend personaclick-recommend-rendered"
                      data-recommender-block="dynamic"
                      data-recommender-code="b173a6bc2819bade67cacf6c9a5ae50b"
                      data-recommender-callback="PersonaCallBack"
                    >
                      <style>
                        .personaclick-recommend
                          .recommended-items
                          .recommended-item:hover {
                          -webkit-box-shadow: unset !important;
                          box-shadow: unset !important;
                          border: unset !important;
                        }
                        .personaclick-recommend {
                          float: left;
                          width: 100%;
                          display: block;
                        }
                        .personaclick-recommend .recommended-items {
                          height: unset !important;
                          overflow: unset !important;
                        }
                        .recommender-block-title {
                          font: 600 24px / 35px Poppins, sans-serif !important;
                          text-align: left;
                        }
                        .personaclick-recommend
                          .recommended-items
                          .recommended-item {
                          border: unset !important;
                          width: unset !important;
                          height: unset !important;
                        }
                        .personaclick-recommend
                          .recommended-items
                          .recommended-item
                          .recommended-item-photo {
                          margin: 0px auto 6px auto !important;
                        }
                        .personaclick-recommend
                          .recommended-items
                          .recommended-item
                          .recommended-item-photo,
                        .personaclick-recommend
                          .recommended-items
                          .recommended-item
                          .recommended-item-photo
                          img {
                          max-height: unset !important;
                          max-width: unset !important;
                          width: 100% !important;
                        }
                        .personaclick-recommend .owl-nav.disabled {
                          display: none !important;
                        }
                        .persona-item-price {
                          font: 600 17px / 17px Poppins, sans-serif !important;
                          float: left !important;
                          margin-top: 5px !important;
                        }
                        .persona-old-price {
                          float: left;
                          margin-right: 10px;
                          font: 17px / 17px Poppins, sans-serif !important;
                          text-decoration: line-through !important;
                          margin-top: 5px !important;
                        }
                        .persona-new-price {
                          float: left;
                          color: #fe3600;
                          font: 600 17px / 17px Poppins, sans-serif !important;
                          margin-top: 5px !important;
                        }
                        .recommended-item-title {
                          font: 16px / 17px Poppins, sans-serif !important;
                          width: 100% !important;
                          height: unset !important;
                          text-align: left !important;
                          margin: 0 !important;
                          text-transform: uppercase;
                        }
                        .personaclick-recommend .owl-prev {
                          position: absolute;
                          top: 40%;
                          visibility: hidden;
                          height: 30px !important;
                          width: 30px !important;
                          left: -65px;
                        }
                        .personaclick-recommend .owl-prev:after {
                          visibility: visible !important;
                          content: "";
                          width: 30px;
                          height: 30px;
                          display: block;
                          background: url(/Data/EditorFiles/tema/svg/back.svg)
                            no-repeat center !important;
                        }
                        .personaclick-recommend .owl-next {
                          position: absolute;
                          top: 40%;
                          visibility: hidden;
                          height: 30px !important;
                          width: 30px !important;
                          right: -50px;
                        }
                        .personaclick-recommend .owl-next:after {
                          visibility: visible !important;
                          content: "";
                          width: 30px;
                          height: 30px;
                          display: block;
                          background: url(/Data/EditorFiles/tema/svg/right.svg)
                            no-repeat center !important;
                        }

                        @media only screen and (max-width: 1440px) {
                          .personaclick-recommend .owl-next {
                            right: -15px;
                          }
                          .personaclick-recommend .owl-prev {
                            left: -30px;
                          }
                        }

                        @media only screen and (max-width: 768px) {
                          .personaclick-recommend {
                            margin-bottom: 0px !important;
                          }
                          .personaclick-recommend .recommended-items {
                            left: -5px;
                          }
                          .personaclick-recommend
                            .recommended-items
                            .recommended-item {
                            width: 210px !important;
                            height: 350px !important;
                            border: unset !important;
                          }
                          .personaclick-recommend
                            .recommended-items
                            .recommended-item
                            .recommended-item-photo,
                          .personaclick-recommend
                            .recommended-items
                            .recommended-item
                            .recommended-item-photo
                            img {
                            max-width: 190px !important;
                          }
                          .recommended-item-title {
                            margin-left: 10px !important;
                          }
                          .persona-item-price {
                            margin-left: 10px !important;
                          }
                          .persona-old-price {
                            width: 30% !important;
                            margin-left: 10px !important;
                            float: left;
                            margin-right: 10px !important;
                            font: 13px / 17px Poppins, sans-serif !important;
                            text-decoration: line-through !important;
                            margin-top: 5px !important;
                          }
                          .persona-new-price {
                            width: 35% !important;
                            margin-left: 0px !important;
                            font: 600 14px / 17px Poppins, sans-serif !important;
                          }
                          .personaclick-recommend .owl-next {
                            right: -25px !important;
                          }
                          .personaclick-recommend .owl-prev {
                            left: -15px !important;
                          }
                          .personaclick-recommend .owl-nav {
                            top: 35%;
                          }
                        }

                        @media only screen and (max-width: 320px) {
                          .personaclick-recommend
                            .recommended-items
                            .recommended-item {
                            width: 145px !important;
                            height: 275px !important;
                          }
                          .persona-old-price {
                            width: 40% !important;
                          }
                          .persona-new-price {
                            width: 45% !important;
                          }
                          .personaclick-recommend .recommended-items {
                            left: 0px !important;
                          }
                          .personaclick-recommend .owl-prev {
                            left: -10px !important;
                          }
                        }
                      </style>

                      <div
                        data-categories='["316", "334"]'
                        class="recommender-block-title"
                      >
                        SON BAKTIKLARINIZ
                      </div>
                      <div
                        class="recommended-items owl-carousel owl-theme owl-loaded owl-drag"
                      >
                        <div class="owl-stage-outer">
                          <div
                            class="owl-stage"
                            style="transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s; width: 726px;"
                          >
                            <div
                              class="owl-item active"
                              style="width: 232px; margin-right: 10px;"
                            >
                              <div class="recommended-item">
                                <div class="recommended-item-photo">
                                  <a
                                    href="https://www.manuka.com.tr/sisme-yelek-haki?recommended_by=dynamic&amp;recommended_code=b173a6bc2819bade67cacf6c9a5ae50b"
                                    ><img
                                      class="item_img"
                                      src="https://pictures.personaclick.com/resize-images/520/76c817929f9164580e7d674b8e21b0/2423388047195242928.jpg"
                                  /></a>
                                </div>
                                <div class="recommended-item-title">
                                  <a
                                    href="https://www.manuka.com.tr/sisme-yelek-haki?recommended_by=dynamic&amp;recommended_code=b173a6bc2819bade67cacf6c9a5ae50b"
                                    >şişme yelek haki</a
                                  >
                                </div>

                                <div class="persona-old-price">
                                  279,90 TL
                                </div>
                                <div class="persona-new-price">
                                  251,91 TL
                                </div>
                              </div>
                            </div>
                            <div
                              class="owl-item active"
                              style="width: 232px; margin-right: 10px;"
                            >
                              <div class="recommended-item">
                                <div class="recommended-item-photo">
                                  <a
                                    href="https://www.manuka.com.tr/desenli-kapitone-ceket-su-yesili?recommended_by=dynamic&amp;recommended_code=b173a6bc2819bade67cacf6c9a5ae50b"
                                    ><img
                                      class="item_img"
                                      src="https://pictures.personaclick.com/resize-images/520/76c817929f9164580e7d674b8e21b0/2423388047195242929.jpg"
                                  /></a>
                                </div>
                                <div class="recommended-item-title">
                                  <a
                                    href="https://www.manuka.com.tr/desenli-kapitone-ceket-su-yesili?recommended_by=dynamic&amp;recommended_code=b173a6bc2819bade67cacf6c9a5ae50b"
                                    >desenli kapitone ceket su y...</a
                                  >
                                </div>

                                <div class="persona-old-price">
                                  299,90 TL
                                </div>
                                <div class="persona-new-price">
                                  269,91 TL
                                </div>
                              </div>
                            </div>
                            <div
                              class="owl-item active"
                              style="width: 232px; margin-right: 10px;"
                            >
                              <div class="recommended-item">
                                <div class="recommended-item-photo">
                                  <a
                                    href="https://www.manuka.com.tr/sisme-yelek-siyah?recommended_by=dynamic&amp;recommended_code=b173a6bc2819bade67cacf6c9a5ae50b"
                                    ><img
                                      class="item_img"
                                      src="https://pictures.personaclick.com/resize-images/520/76c817929f9164580e7d674b8e21b0/2423388047186854318.jpg"
                                  /></a>
                                </div>
                                <div class="recommended-item-title">
                                  <a
                                    href="https://www.manuka.com.tr/sisme-yelek-siyah?recommended_by=dynamic&amp;recommended_code=b173a6bc2819bade67cacf6c9a5ae50b"
                                    >şişme yelek siyah</a
                                  >
                                </div>

                                <div class="persona-old-price">
                                  279,90 TL
                                </div>
                                <div class="persona-new-price">
                                  251,91 TL
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="owl-nav disabled">
                          <div class="owl-prev">prev</div>
                          <div class="owl-next">next</div>
                        </div>
                        <div class="owl-dots disabled"></div>
                      </div>
                    </div>
                  </div>
                  <!--cache-->
                  <script type="text/javascript">
                    $(document).ready(function() {
                      $("#list-catalog1062").equalizer();
                      $("#list-slide1062").slide({
                        slideType: "carousel",
                        slideCtrl: {
                          showCtrl: true,
                          wrapCtrl: "#productControl1062",
                          nextBtn: "#nextProduct1062",
                          prevBtn: "#prevProduct1062",
                        },
                      });
                    });
                  </script>

                  <script type="text/javascript">
                    $(document).ready(function() {
                      $("#owl-demo1043").owlCarousel({
                        loop: false,
                        margin: 0,
                        nav: true,
                        dots: false,
                        responsive: {
                          0: {
                            items: 2,
                          },
                          768: {
                            items: 3,
                          },
                          1001: {
                            items: 4,
                          },
                        },
                      });
                    });
                  </script>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer id="footer" class="col col-12 fl">
        <div class="row">
          <!--cache-->
          <div class="FooterInner">
            <div class="box col-12 newsletter" id="footer-newsletter">
              <div class="NewsTitle box col-12 text-center">
                E-BÜLTEN ABONELİĞİ
              </div>
              <div class="newsletterMain col col-12">
                <div class="col col-12">
                  <div class="row input-icon tooltipWrapper">
                    <div class="fl col-9">
                      <input
                        type="text"
                        class="fl col-12 box-border sub-email withPlace personaclick-initialized"
                        placeholder="E-posta adresinizi giriniz."
                      />
                    </div>
                    <div class="fr col-3">
                      <input
                        type="button"
                        class="btn col-12 subscribe"
                        value="abone ol"
                        id="newsletterBtn"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="footerMiddle" class="box col-12 FooterMenu flexwrap">
              <a
                href="/kargo-ve-teslimat-kosullari"
                title="Kargo ve Teslimat Koşulları"
                >Kargo ve Teslimat Koşulları</a
              >
              <a href="/gizlilik-ve-guvenlik" title="Üyelik Sözleşmesi"
                >Üyelik Sözleşmesi</a
              >
              <a href="/satis-sozlesmesi" title="Satış Sözleşmesi"
                >Satış Sözleşmesi</a
              >
              <a
                href="/iade-ve-degisim-kosullari"
                title="İade ve Değişim Koşulları"
                >İade ve Değişim Koşulları</a
              >
              <a href="/iletisim" title="İletişim">İletişim</a>
            </div>
            <div class="box col-12" id="footer-social">
              <div class="row">
                <div class="box col-12">
                  <div class="fl col-12">
                    <ul class="fl col-12 text-center" id="social">
                      <li>
                        <a
                          href="https://www.instagram.com/manukaofficial/?hl=tr"
                          rel="nofollow"
                          data-target="blank"
                        >
                          <img
                            src="/Data/EditorFiles/tema/img/instagram.png"
                            alt="Sosyal Medya - 1"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!--<div class="FooterText col-12 box text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique sed elit ac posuere. In sed sapien non nisl sollicitudin posuere. Aenean sagittis dolor vitae tincidunt porta. Nulla nulla tellus, ornare a sagittis quis, luctus ac quam. Maecenas vel orci nec ante ultrices semper nec at augue.</div>-->
            <!--<div class="Dijitallnet col-12 box text-center"><a href="https://www.dijitall.net/" rel="nofollow" target="_blank"><img src="/Data/EditorFiles/tema/img/dijitallnet.png" alt="Dijitall.net Web Tasarım ve Kodlama"></a></div>-->
            <div id="footerCopyright" class="box col-12 text-center">
              © 2020 manuka.com.tr Tüm hakları saklıdır. Site içindeki resimler
              izinsiz kopyalanamaz ve yayınlanamaz.
            </div>
          </div>
          <div class="col-12 fl DilAlan a-center"></div>
        </div>
      </footer>
      <script type="text/javascript">
        var YONETICI_ADSOYAD = " ";
        if (typeof setCookie == "function") {
          setCookie("nocache", "1", 1);
        }
      </script>
      <input type="hidden" id="link_type" value="product" /><input
        type="hidden"
        id="link_table_id"
        value="2706"
      /><input type="hidden" id="link_language" value="tr" /><input
        type="hidden"
        id="sol_aktif"
        value="0"
      /><input type="hidden" id="sag_aktif" value="0" /><!--cache-->
      <script>
        var GA_Enhanced_Ecommerce = true;
        var GTAG_TRACKING_ID = "UA-148808659-1";
        var GTAG_ADWORDS_ID = "AW-697909482";
        var GTAG_ADWORDS_LABEL = "ySxhCMC9z7IBEOqB5cwC";
        var GTAG_WITH_VAT = "1";
        var GTAG_ID = "id";
        if (typeof gtag == "undefined") {
          /*var s = document.createElement( 'script' );
s.setAttribute( 'src', 'https://www.googletagmanager.com/gtag/js?id=' +GTAG_TRACKING_ID );
s.setAttribute( 'async', true);
document.body.appendChild( s );*/
          window.dataLayer = window.dataLayer || [];
          // Global configs
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", GTAG_TRACKING_ID, { send_page_view: false });
          gtag("config", GTAG_ADWORDS_ID);
        }
        switch (PAGE_TYPE) {
          case "home":
            gtag("event", "page_view", {
              ecomm_pagetype: "home",
            });
            break;
          case "product":
            gtag_detail();
            break;
          case "category":
            gtag_list();
            break;
          case "cart":
            gtag_cart();
            break;
          case "payment":
            gtag_payment();
            break;
          case "address":
            gtag_address();
            break;
          case "approve":
            gtag_purchase();
            break;
          case "search":
            gtag("event", "page_view", {
              ecomm_pagetype: "searchresults",
            });
            break;
          default:
            gtag("event", "page_view", {
              ecomm_pagetype: "other",
            });
            break;
        }
        function gtag_detail() {
          var productData = PRODUCT_DATA[0];
          gtag("event", "view_item", {
            value: productData.total_sale_price,
            items: [
              {
                id: GTAG_ID == "id" ? productData.id : productData.code,
                google_business_vertical: "retail",
                name: productData.name,
                brand: productData.brand,
                price: productData.total_sale_price,
                category: (
                  productData.category_path + productData.category
                ).replace(/ > /g, "/"),
                list_position: 1,
              },
            ],
          });
          gtag("event", "page_view", {
            ecomm_pagetype: "product",
            ecomm_totalvalue: productData.total_sale_price,
            ecomm_prodid: GTAG_ID == "id" ? productData.id : productData.code,
            ecomm_category: (
              productData.category_path + productData.category
            ).replace(/ > /g, "/"),
          });
          console.log("gtag -> view_item");
        }
        function gtag_list() {
          var products = PRODUCT_DATA;
          var productData = [];
          for (var i = 0; i < products.length; i++) {
            if (i > 20) {
              break;
            }
            productData.push({
              id: GTAG_ID == "id" ? products[i].id : products[i].code,
              name: products[i].name,
              brand: products[i].brand,
              category: (
                products[i].category_path + products[i].category
              ).replace(/ > /g, "/"),
              list: CATEGORY_DATA.name,
              list_position: i + 1,
            });
          }
          gtag("event", "view_item_list", {
            items: productData,
          });
          gtag("event", "page_view", {
            ecomm_pagetype: "category",
            ecomm_category: CATEGORY_DATA.name,
          });
          console.log("gtag -> view_item_list");
        }
        function gtag_getCartItems() {
          var cart = { products: [], total: 0 };
          $.ajax({
            url: "/srv/service/cart/load",
            type: "GET",
            async: false,
            dataType: "json",
            success: function(r) {
              for (var i = 0; i < r.PRODUCTS.length; i++) {
                cart.products.push({
                  id:
                    GTAG_ID == "id"
                      ? r.PRODUCTS[i].ID
                      : r.PRODUCTS[i].PRODUCT_CODE,
                  name: r.PRODUCTS[i].TITLE,
                  brand: r.PRODUCTS[i].BRAND,
                  category: r.PRODUCTS[i].CATEGORY_NAME,
                  price: r.PRODUCTS[i].PRICE_SELL,
                });
              }
              cart.total = r.PRICE_CART;
            },
          });
          return cart;
        }
        function gtag_cart() {
          var cart = gtag_getCartItems();
          if (cart.products.length <= 0) {
            return false;
          }
          gtag("event", "begin_checkout", {
            items: cart.products,
          });
          gtag("event", "page_view", {
            ecomm_pagetype: "cart",
            ecomm_totalvalue: cart.total || 0,
            ecomm_prodid:
              cart.products.map(function(a) {
                return a.id.toString();
              }) || [],
          });
        }
        function gtag_address() {
          var cart = gtag_getCartItems();
          if (cart.products.length <= 0) {
            return false;
          }
          gtag("config", GTAG_TRACKING_ID, {
            send_page_view: false,
            page_path: "/order/address",
          });
          gtag("event", "checkout_progress", {
            items: cart.products,
            checkout_step: 2,
          });
          gtag("event", "page_view", {
            ecomm_pagetype: "cart",
            ecomm_totalvalue: cart.total || 0,
            ecomm_prodid:
              cart.products.map(function(a) {
                return a.id.toString();
              }) || [],
          });
        }
        function gtag_payment() {
          var cart = gtag_getCartItems();
          if (cart.products.length <= 0) {
            return false;
          }
          gtag("config", GTAG_TRACKING_ID, {
            send_page_view: false,
            page_path: "/order/payment",
          });
          gtag("event", "checkout_progress", {
            items: cart.products,
            checkout_step: 3,
          });
          gtag("event", "page_view", {
            ecomm_pagetype: "cart",
            ecomm_totalvalue: cart.total || 0,
            ecomm_prodid:
              cart.products.map(function(a) {
                return a.id.toString();
              }) || [],
          });
        }
        function gtag_purchase() {
          ApprovePageTracking.callbackArray.push(function(r) {
            var products = [];
            var c_type = "order_currency";
            var currency =
              c_type == "order_currency" ? r.currency : r.store_currency;
            for (var i = 0; i < r.products.length; i++) {
              var pPrice =
                c_type == "order_currency"
                  ? GTAG_WITH_VAT == "1"
                    ? r.products[i].total_amount_order
                    : r.products[i].amount_order
                  : GTAG_WITH_VAT == "1"
                  ? r.products[i].total_amount_store
                  : r.products[i].amount_store;
              products.push({
                id:
                  GTAG_ID == "id"
                    ? r.products[i].identifier
                    : r.products[i].code,
                name: r.products[i].name,
                brand: r.products[i].brand,
                category: r.products[i].category,
                quantity: r.products[i].quantity,
                price: pPrice,
              });
            }
            // Track AdWords conversions
            gtag("event", "conversion", {
              send_to: GTAG_ADWORDS_ID + "/" + GTAG_ADWORDS_LABEL,
              value:
                c_type == "order_currency"
                  ? GTAG_WITH_VAT == "1"
                    ? r.amount
                    : r.amount_without_vat
                  : GTAG_WITH_VAT == "1"
                  ? r.amount_store
                  : r.amount_without_vat,
              currency: currency === "TL" ? "TRY" : currency,
              transaction_id: r.transaction,
            });
            console.log("gtag -> conversion");
            // Track analytics transaction
            gtag("config", GTAG_TRACKING_ID, {
              send_page_view: false,
              page_path: "/order/approve",
            });
            gtag("event", "purchase", {
              transaction_id: r.transaction,
              value:
                c_type == "order_currency"
                  ? GTAG_WITH_VAT == "1"
                    ? r.amount
                    : r.amount_without_vat
                  : GTAG_WITH_VAT == "1"
                  ? r.amount_store
                  : r.amount_without_vat,
              currency: currency === "TL" ? "TRY" : currency,
              tax: r.total_vat,
              shipping: r.cargo_price,
              items: products,
            });
            gtag("event", "page_view", {
              ecomm_pagetype: "purchase",
              ecomm_totalvalue:
                c_type == "order_currency"
                  ? GTAG_WITH_VAT == "1"
                    ? r.amount
                    : r.amount_without_vat
                  : GTAG_WITH_VAT == "1"
                  ? r.amount_store
                  : r.amount_without_vat,
              ecomm_prodid:
                r.products.map(function(a) {
                  return GTAG_ID == "id"
                    ? a.identifier.toString()
                    : a.code.toString();
                }) || [],
            });
            console.log("gtag -> purchase");
          });
        }
        Cart.callback.add.push(function(r) {
          r = Array.isArray(r) ? r[0] : r;
          gtag("event", "add_to_cart", {
            items: [
              {
                id: GTAG_ID == "id" ? r.addedProduct.id : r.addedProduct.sku,
                name: r.addedProduct.name,
                brand: r.addedProduct.brand,
                quantity: r.addedProduct.quantity,
                price: r.addedProduct.price,
              },
            ],
          });
          console.log("gtag -> add to cart");
        });
      </script>
      <script>
        !(function(f, b, e, v, n, t, s) {
          if (f.fbq) return;
          n = f.fbq = function() {
            n.callMethod
              ? n.callMethod.apply(n, arguments)
              : n.queue.push(arguments);
          };
          if (!f._fbq) f._fbq = n;
          n.push = n;
          n.loaded = !0;
          n.version = "2.0";
          n.agent = "pltsoft";
          n.queue = [];
          t = b.createElement(e);
          t.async = !0;
          t.src = v;
          s = b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t, s);
        })(
          window,
          document,
          "script",
          "https://connect.facebook.net/en_US/fbevents.js"
        );
        var identifier_type_FB = "product_id";
        var FACEBOOK_WITH_VAT = "1";
        var FACEBOOK_CATALOG_ID = "";
        var KEY_MAPPING_FB = {
          product: {
            product_code: "code",
            product_id: "id",
          },
          cart: {
            product_code: "PRODUCT_CODE",
            product_id: "ID",
          },
          order: {
            product_code: "code",
            product_id: "identifier",
          },
          category: {
            product_code: "code",
            product_id: "id",
          },
        };
        fbq("init", "3253617271346278");
        fbq("track", "PageView");
        function trackFb(pageType, obj) {
          if (
            FACEBOOK_CATALOG_ID.trim() != "" &&
            ["ViewCategory", "ViewContent"].indexOf(pageType) > -1
          ) {
            obj["product_catalog_id"] = FACEBOOK_CATALOG_ID;
          }
          fbq("track", pageType, obj);
        }
        AddToWishListCallback = function() {
          trackFb("AddToWishlist", {});
        };
        if (PAGE_TYPE === "product") {
          var pkey = KEY_MAPPING_FB["product"][identifier_type_FB];
          var ckey =
            pkey === "code" &&
            typeof PRODUCT_DATA[0].subproduct_code != "undefined" &&
            PRODUCT_DATA[0].subproduct_code != ""
              ? "subproduct_code"
              : pkey;
          trackFb("ViewContent", {
            content_name: $("#urun-ad").val(),
            content_category: $("#urun-kategori").val(),
            content_ids: [PRODUCT_DATA[0][ckey]],
            content_type: "product",
            value:
              FACEBOOK_WITH_VAT == 1
                ? PRODUCT_DATA[0].total_sale_price
                : PRODUCT_DATA[0].sale_price,
            currency: window.CURRENCY === "TL" ? "TRY" : window.CURRENCY,
          });
        }
        if (PAGE_TYPE === "category") {
          var pkey = KEY_MAPPING_FB["category"][identifier_type_FB];
          var products = [];
          var counter = 0;
          for (var i = 0; i < PRODUCT_DATA.length; i++) {
            if (i > 20) break;
            products.push(PRODUCT_DATA[i][pkey]);
          }
          trackFb("ViewCategory", {
            content_name: $("#category_name").val(),
            content_type: "product",
            content_ids: products,
          });
        }
        if (PAGE_TYPE === "search") {
          trackFb("Search", { search_string: $("#search_word").val() });
        }
        if (PAGE_TYPE === "cart") {
          var pkey = KEY_MAPPING_FB["cart"][identifier_type_FB];
          $.ajax({
            url: "/srv/service/cart/load",
            dataType: "json",
            success: function(data) {
              if (data.PRODUCTS.length <= 0) {
                return false;
              }
              var productArr = [];
              for (var i = 0; i < data.PRODUCTS.length; i++) {
                var ckey =
                  pkey === "PRODUCT_CODE" &&
                  typeof data.PRODUCTS[i].VARIANT_CODE != "undefined" &&
                  data.PRODUCTS[i].VARIANT_CODE != ""
                    ? "VARIANT_CODE"
                    : pkey;
                productArr[i] = {
                  id: data.PRODUCTS[i][ckey],
                  quantity: data.PRODUCTS[i].COUNT,
                };
              }
              trackFb("InitiateCheckout", {
                contents: productArr,
                currency:
                  data.TARGET_CURRENCY === "TL" ? "TRY" : data.TARGET_CURRENCY,
                value:
                  FACEBOOK_WITH_VAT == 1
                    ? data.PRICE_GENERAL
                    : data.PRICE_TOTAL_SELL,
                num_items: data.PRODUCTS.length,
                content_type: "product",
              });
            },
          });
        }
        if (PAGE_TYPE === "payment") {
          trackFb("AddPaymentInfo");
        }
        if (PAGE_TYPE === "address") {
          trackFb("InitiateCheckout");
        }
        if (PAGE_TYPE === "approve") {
          var pkey = KEY_MAPPING_FB["order"][identifier_type_FB];
          var currency =
            approveOrderData.currency === "TL"
              ? "TRY"
              : approveOrderData.currency;
          var productArr = [];
          for (var i = 0; i < approveOrderData.products.length; i++) {
            var ckey =
              pkey === "code" &&
              typeof approveOrderData.products[i].subproduct_code !=
                "undefined" &&
              approveOrderData.products[i].subproduct_code != ""
                ? "subproduct_code"
                : pkey;
            productArr[i] = approveOrderData.products[i][ckey];
          }
          var purchaseData = {
            value:
              FACEBOOK_WITH_VAT == 1
                ? approveOrderData.amount
                : approveOrderData.amount_without_vat,
            currency: currency || "TL",
            content_type: "product",
            content_ids: productArr,
          };
          trackFb("Purchase", purchaseData);
        }
        if (PAGE_TYPE === "memberConfirmation") {
          trackFb("CompleteRegistration", { status: true });
        }
        Cart.callback.add.push(function(added) {
          var pkey = KEY_MAPPING_FB["cart"][identifier_type_FB];
          var addedProduct = added.addedProduct;
          var cartProducts = added.cartProducts;
          var totalPrice = added.totalPrice;
          var addedProductCode = addedProduct.id;
          if (pkey === "PRODUCT_CODE") {
            addedProductCode =
              typeof addedProduct.subproduct_sku != "undefined" &&
              addedProduct.subproduct_sku != ""
                ? addedProduct.subproduct_sku
                : addedProduct.sku;
          }
          trackFb("AddToCart", {
            content_ids: cartProducts,
            content_type: "product",
            value: (FACEBOOK_WITH_VAT == 1 ? totalPrice : totalPrice).replace(
              ",",
              "."
            ),
            currency: window.CURRENCY === "TL" ? "TRY" : window.CURRENCY,
          });
        });
      </script>
      <div class="box col-12" id="tsoft-eticaret-sistemleri">
        <div class="fl col-12">
          <a
            href="http://www.tsoft.com.tr"
            target="_blank"
            title="T-Soft E-ticaret Sistemleri"
          >
            <span>T</span>-Soft
          </a>
          <a href="http://www.tsoft.com.tr" target="_blank" title="E-ticaret"
            >E-Ticaret</a
          >
          Sistemleriyle Hazırlanmıştır.
        </div>
      </div>
      <style type="text/css">
        #tsoft-eticaret-sistemleri {
          line-height: 30px;
          font-size: 12px;
          color: #3b3734;
          text-align: center;
          background: #f0f0f0;
        }
        #tsoft-eticaret-sistemleri a:first-child {
          font-weight: 700;
        }
        #tsoft-eticaret-sistemleri a:first-child span {
          color: #ec6408;
        }</style
      ><input type="hidden" id="facebook_app_id" value="" />
    </div>
    

    <div
      id="lightboxOverlay"
      class="lightboxOverlay"
      style="display: none;"
    ></div>
    <div id="lightbox" class="lightbox" style="display: none;">
      <div class="lb-outerContainer">
        <div class="lb-container">
          <img
            class="lb-image"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          />
          <div class="lb-nav">
            <a class="lb-prev" href=""></a><a class="lb-next" href=""></a>
          </div>
          <div class="lb-loader"><a class="lb-cancel"></a></div>
        </div>
      </div>
      <div class="lb-dataContainer">
        <div class="lb-data">
          <div class="lb-details">
            <span class="lb-caption"></span><span class="lb-number"></span>
          </div>
          <div class="lb-closeContainer"><a class="lb-close"></a></div>
        </div>
      </div>
    </div>
    <div
      class="personaclick-search-box personaclick-search-box__full personaclick-search-box-body"
      style="top: 113px; left: 420px;"
    >
      <div class="personaclick-search-results"></div>
    </div>
    
    <div
      class="pWrapper"
      style="visibility: visible; display: block;"
      data-name="cartPopup"
    >
      <div class="flex">
        <div class="pBg close" style="z-index:9980;"></div>
        <div
          style="width: 1000px; margin: 0px auto; z-index: 9981;"
          class="pWin box whiteBg flexbox br5 withBtn"
          id="cartPopup"
        >
          <div class="pClose close"></div>
          <div class="pText col col-12">
            <div class="row oh">
              <style>
                .tar {
                  text-align: right;
                }
              </style>
              <div
                style="visibility: visible;"
                id="basketWin"
                data-callback="basketReady"
                data-url="/srv/service/cart/load-win/2706"
                class="fl col-12 basketWrapper angularTemplate"
              >
                <div class="fl col-12 panelPopupTitle">
                  <span class="basketSuccess"></span>Ürün Sepetinize Eklendi
                </div>
                <div class="fl col-12 panelPopupContent">
                  <!--if $IS_ADD_TO_CART_SUCCESS==1 AND $PRODUCT_TYPE>0 AND $RELATED_PRODUCTS|@count>0-->
                  <!--1:ilgili-2:ikame-3:aksesuar-4:tamamlayici-->
                  <div class="col col-12 middleItem" id="basketPopupItems">
                    <div class="row">
                      <input
                        type="hidden"
                        class="SepetBaslik"
                        value="Alışveriş Sepetim"
                      />
                      <table
                        cellspacing="0"
                        cellpadding="0"
                        class="col-12 box-border b-bottom"
                      >
                        <tbody class="col-12">
                          <tr class="line-bottom">
                            <td class="col-1 col-xs-2 fw700 line-right">
                              Ürün
                            </td>
                            <td class="col-4 col-xs-6 fw700 line-right">
                              Ürün Adı
                            </td>
                            <td class="col-2 fw700 line-right dn-xs">Miktar</td>
                            <td class="col-2 fw700 line-right dn-xs">
                              Birim Fiyat
                            </td>
                            <td class="col-2 col-xs-4 fw700 line-right">
                              Toplam Tutar
                            </td>
                            <td class="col-1 fw700 dn-xs">Sil</td>
                          </tr>
                          <tr class="line-bottom row2706">
                            <td class="col-1 col-xs-2 line-right">
                              <img
                                src="https://www.manuka.com.tr/m-1038-hoodie-sweatshirt-turuncu-sweatshirt-9758-27-K.jpg"
                              />
                            </td>
                            <td class="col-4 col-xs-6 fw600 line-right">
                              <span class="fl"
                                >HOODIE SWEATSHIRT TURUNCU TURUNCU STD</span
                              >
                            </td>
                            <td
                              class="col-2 line-right proQty dn-xs"
                              data-id="0"
                              data-product="2706"
                              data-subproduct="2359"
                            >
                              <div class="box box-border">
                                <div class="col p-left productType">Adet:</div>
                                <div class="fl qtyBtns" data-increment="1">
                                  <a
                                    title="-"
                                    data-id="2706"
                                    data-cart-id="0"
                                    class="decBasketProduct"
                                  >
                                    <p>-</p>
                                  </a>
                                  <input
                                    type="text"
                                    id="Adet2706"
                                    name="Adet2706"
                                    value="1"
                                    class="qtyBasketProduct"
                                  />
                                  <a
                                    title="+"
                                    data-id="2706"
                                    data-cart-id="0"
                                    class="incBasketProduct"
                                  >
                                    <p>+</p>
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td class="col-2 line-right dn-xs">
                              107,91 TL
                              <div class="fl col-12 line-through">
                                119,90 TL
                              </div>
                            </td>
                            <td
                              class="col-2 col-xs-4 line-right priceBasketProduct"
                            >
                              107,91 TL
                            </td>
                            <td class="col-1 dn-xs">
                              <a
                                data-cart-id="0"
                                class="fr btn-default removeBasketProduct removeBtn"
                              ></a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div
                        class="col fr col-4 box-border b-top b-bottom"
                        style="min-width:300px;"
                      >
                        <div class="row">
                          <div class="col col-12 line-bottom">
                            <div class="row">
                              <div class="box col-6 fw600">Sepet Toplamı</div>
                              <div class="box col-1 fw600">:</div>
                              <div class="box col-4 tar totalBasketPrice">
                                107,91 TL
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <script>
                //ilişkili ürün sepete eklenince açılır pencere yenilensin.
                window.relatedFn = function() {
                  $("#basketWin").angularTemplate();
                  return false;
                };

                $(".pWin:last").hide();
                $("#basketWin").angularTemplate();

                var basketLink = "";
                var buttons = [
                  {
                    text: "Alışverişe Devam",
                    style: "",
                    class: "btn-success",
                    click: function() {
                      return true; //return true kapatır
                    },
                  },
                  {
                    text: "Sepete Git",
                    class: "btn-success fr",
                    click: function() {
                      window.location.href = basketLink || "/" + PAGE_LINK.CART;
                      return false; //return false pencereyi kapatmaz
                    },
                  },
                ];
                Message.instance.activePopup.set("buttons", buttons);

                function basketReady(data) {
                  $(".Add2Cart2").click(function() {
                    Add2Cart({
                      productId: $(this).attr("data-product-id"),
                      variantId: $(
                        '[name="subPro' +
                          $(this).attr("data-product-id") +
                          '1"]'
                      ).val(),
                      relatedProductId: $(this).attr("data-related-product-id"),
                      quantity: 1,
                    });
                  });

                  setTimeout(function() {
                    $("#complementProucts").equalizer();
                    $("#complementProucts").slide({
                      slideType: "carousel",
                      slideCtrl: {
                        showCtrl: true,
                        wrapCtrl: "#complementControl",
                        nextBtn: "#nextComplement",
                        prevBtn: "#prevComplement",
                      },
                    });
                  }, 20);

                  //$('.pWin:last').show();
                  $(".pWin:last").fadeIn();

                  var maxH = $(".pWin:last").height();
                  var contentHeight = $(".pText:last").height();

                  if (contentHeight > maxH) {
                    $(".pWin:last").addClass("overflow");
                  }

                  basketLink = "/" + data.PAGE_LINK.CART; //PAGE_LINK.CART
                  $(
                    ".basketWrapper .decBasketProduct, .basketWrapper .incBasketProduct"
                  )
                    .unbind("click")
                    .click(function(e) {
                      e.preventDefault();

                      var inc = parseFloat(
                        $(this)
                          .parent()
                          .attr("data-increment") || "1"
                      );
                      var a = 0;
                      if (inc < 0.01) {
                        a = 3;
                      } else if (inc < 0.1) {
                        a = 2;
                      } else if (inc < 1) {
                        a = 1;
                      }
                      var cid = $(this).attr("data-cart-id");
                      var count =
                        parseFloat(
                          $(this)
                            .parent()
                            .find("input")
                            .val()
                        ) || 1;
                      var append = $(this).hasClass("decBasketProduct")
                        ? -inc
                        : inc;
                      var _this = this;
                      count += append;
                      $(this)
                        .parent()
                        .find("input")
                        .val(count);
                      Cart.update(cid, count, function(result) {
                        if (result.status > 0) {
                          $("#basketWin").angularTemplate();
                          if (result.status > 0) {
                            $(".cart-soft-count").text(result.totalQuantity);
                            $(".cart-soft-price").text(result.totalPrice);
                          }
                        } else {
                          $(_this)
                            .parent()
                            .find("input")
                            .val(count - append);
                          Message.showDialog(result.statusText, 500, 50);
                        }
                      });
                    });

                  $(".basketWrapper .removeBtn").click(function(e) {
                    e.preventDefault();
                    var sessId = $(this).attr("data-cart-id");
                    var element = $(this).parents("tr.line-bottom");
                    Cart.delete(sessId, function(result) {
                      $("#basketWin").angularTemplate();
                      $(".cart-soft-count").text(result.totalQuantity);
                      $(".cart-soft-price").text(result.totalPrice);
                    });
                  });
                }
              </script>
            </div>
          </div>
          <div class="pButtons">
            <button data-id="0" class="btn btn-radius btn-success">
              Alışverişe Devam</button
            ><button data-id="1" class="btn btn-radius btn-success fr">
              Sepete Git
            </button>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>


<script
                      type="text/javascript"
                      src="/srv/service/conf/load/Blok_UrunDetay/1"
                      charset="utf-8"
                    ></script>
                    <script
                      type="text/javascript"
                      src="/js/lightbox/js/lightbox.js"
                    ></script>
                    <script
                      type="text/javascript"
                      src="/Diger/Gzip.php?F=theme/standart/js/blok-v4/product-detail"
                    ></script>
                    <script type="text/javascript">
                      $(document).ready(function() {
                        $(".BedenTabloBtn").click(function(e) {
                          e.preventDefault();
                          var img =
                            "<img src='https://img.manuka.com.tr/Data/EditorFiles/theme/beden-tablosu-2.jpg'>";
                          var width =
                            parseInt($(this).attr("data-width")) > 0
                              ? parseInt($(this).attr("data-width"))
                              : "auto";
                          var id =
                            typeof $(this).attr("data-id") === "undefined"
                              ? "myPopupWin"
                              : $(this).attr("data-id");
                          var url = $(this).attr("data-url") || "";
                          $.get($(this).attr("data-url"), function(msg) {
                            var _instance = new Message({
                              id: id,
                              title: "Dialog",
                              url: url,
                              param: url.replace(/^.*\//g, ""),
                              html: $(".BedenImgBox").html(),
                              width: width,
                            });
                            _instance.show();
                          });
                        });
                      });
                      $(document).ready(function(e) {});
                      function otherColorFunc(result) {
                        $(".iliskiliUrun .allNitelik").click(function() {
                          $(this)
                            .closest(".iliskiliUrun")
                            .toggleClass("active");
                        });
                      }
                      var variant = JSON.parse($("#json2706").val());
                      $("#odemeler").on("click", function() {
                        if (!$(this).hasClass("loaded")) {
                          var url = $(this).attr("data-href");
                          $.get(url, function(data) {
                            $("#odeme-wrapper").append(data);
                          });
                          $(this).addClass("loaded");
                        }
                      });
                      $("#commentTab").on("click", function() {
                        if (!$(this).hasClass("loaded")) {
                          var url = $(this).attr("data-href");
                          $.get(url, function(data) {
                            $("#yorum-wrapper").append(data);
                          });
                          $(this).addClass("loaded");
                        }
                      });
                      $(document).ready(function() {
                        /*if($(window).outerWidth()>1000){
$(window).scroll(function(){
if($("#productRight").outerHeight()<$(window).scrollTop()+200){
$("#cart-wrapper").addClass("AddBtnSticky");
}else{
$("#cart-wrapper").removeClass("AddBtnSticky");
}
});
}*/
                        var videokontrol = $(".UrunVideo").html();
                        if (videokontrol != "") {
                          $(".videobtn").show();
                        }
                        $(".videobtn").click(function() {
                          $(".UrunVideoBox").addClass("open");
                          document.getElementById("UrunVideo").play();
                        });
                        $(".VideoClose").click(function() {
                          $(".UrunVideoBox").removeClass("open");
                          document.getElementById("UrunVideo").pause();
                        });
                        $(".iliskiliUrunValue").appendTo(".iliskiliUrun");
                        $(".tab-icerik").hide();
                        $(".tab-title").click(function() {
                          if (
                            false ==
                            $(this)
                              .next()
                              .is(":visible")
                          ) {
                            $(".tab-icerik").slideUp(300);
                            $(".tab-title").removeClass("active");
                          }
                          $(this)
                            .next()
                            .slideToggle(300)
                            .prev()
                            .toggleClass("active");
                        });
                        if (PAGE_TYPE == "product") {
                          $("#nav-wrapper").removeClass("fl col-12");
                          $("#nav-wrapper").addClass("inner");
                        }
                        cartControl = true;
                        if ($(window).outerWidth() < 768) {
                          $("#productImage").addClass(
                            "OwlDetayImg owl-carousel owl-theme"
                          );
                          $(".OwlDetayImg").owlCarousel({
                            items: 1,
                            autoplay: true,
                            autoplayTimeout: 3000,
                            loop: true,
                            nav: true,
                            lazyLoad: false,
                            dots: false,
                          });
                        }
                        $("#tabPanel").slide({
                          isAuto: false,
                          touchEnabled: false,
                          slidePaging: {
                            showPaging: true,
                            wrapPaging: "#tabBtn",
                          },
                        });
                        $('a[rel="external"]').lightbox();
                        $(".variantList").each(function() {
                          if ($(this).find("a").length < 5) {
                            $(this)
                              .next()
                              .remove();
                          }
                        });
                        $(".variantMoreBtn").click(function() {
                          $(this)
                            .prev()
                            .toggleClass("active");
                        });
                        $("#fbShareBtn").click(function() {
                          var shareUrl =
                            "https://www.facebook.com/sharer/sharer.php?u=" +
                            encodeURIComponent(location.href);
                          var winOpts = [
                            "width=590",
                            "height=430",
                            "status=no",
                            "resizable=yes",
                            "toolbar=no",
                            "menubar=no",
                            "scrollbars=yes",
                          ].join(",");
                          window.open(shareUrl, "Share on Facebook", winOpts);
                        });
                        $("#gpBtn").click(function() {
                          var shareUrl =
                            "https://plus.google.com/share?url=" +
                            encodeURIComponent(location.href);
                          var winOpts = [
                            "width=525",
                            "height=430",
                            "status=no",
                            "resizable=yes",
                            "toolbar=no",
                            "menubar=no",
                            "scrollbars=yes",
                          ].join(",");
                          window.open(shareUrl, "Share on Google", winOpts);
                        });
                        if (
                          /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
                            navigator.userAgent
                          )
                        ) {
                          $("#tabBtn li").click(function() {
                            $("html, body").animate(
                              {
                                scrollTop: $(this).offset().top - 20,
                              },
                              500
                            );
                          });
                        }
                        $(
                          ".subOne a[data-id].selected,.subTwo a[data-id].selected"
                        ).trigger("click");
                        var vCount = $(".subTwo a").length;
                        console.log(vCount);
                        if (vCount < 2) {
                          $(".subOne a[data-id],.subTwo a[data-id]").trigger(
                            "click"
                          );
                          $(".subTwo a, .subOne a").addClass("nocursor");
                        }
                        if (vCount > 1) {
                          $(".subOne a[data-id]").trigger("click");
                        }
                        /*$.get('/srv/campaign-v2/campaign/get-list-by-type/product/2706', function(result){
var campaigns = result;
if(campaigns.CAMPAIGN_LIST.length > 0){
$('#cmpList').removeClass('d-none');
$.each(campaigns.CAMPAIGN_LIST, function(i){
var cmpHtml = '<div class="box col-6 col-sm-12 p-bottom p-left">' +
'<div class="box col-12 lightBg">' +
'<p class="text-description text-semibold">' + this.TITLE + '</p>' +
'<p class="p-bottom text-description">' + this.DESCRIPTION + '</p>' +
'</div>' +
'</div>';
$('#cmps').append(cmpHtml);
});
}
});*/
                        $("#tabPro").click(function(e) {
                          $(".popupsPro").addClass("active");
                          $(".popupBg").addClass("popupOverlay");
                        });
                        $("#tabProTwo").click(function(e) {
                          $(".popupsPro2").addClass("active");
                          $(".popupBg").addClass("popupOverlay");
                        });
                        $("#tabProThree").click(function(e) {
                          $(".popupsPro3").addClass("active");
                          $(".popupBg").addClass("popupOverlay");
                          $.ajax({
                            type: "post",
                            url:
                              "/srv/service/product-detail/payment-options/2706/0",
                            data: $("#card-wrapper").serialize(),
                            success: function(result) {
                              $("#deneme").html(result);
                            },
                          });
                        });
                        $(".closeBtn").click(function() {
                          $(".popupsPro").removeClass("active");
                          $(".popupsPro2").removeClass("active");
                          $(".popupsPro3").removeClass("active");
                          $(".popupBg").removeClass("popupOverlay");
                        });
                        $(".popupBg").click(function() {
                          $(".popupsPro").removeClass("active");
                          $(".popupsPro2").removeClass("active");
                          $(".popupsPro3").removeClass("active");
                          $(".popupBg").removeClass("popupOverlay");
                        });
                        $(".subOne a").click(function() {
                          $("#secilengorsel").text($(this).attr("title"));
                        });
                      });
                      function zoomCallback() {}
                      function lightCallback() {
                        var img = $("#lightContent img");
                        img.on("load", function() {
                          var contentHeight = $("#lightContent img").height();
                          var contentWidth = $("#lightContent img").width();
                          setTimeout(function() {
                            var maxH = $(".pWin:last").height();
                            if (contentHeight > maxH) {
                              $(".pWin:last")
                                .addClass("overflow")
                                .width(contentWidth + 10);
                            }
                          }, 500);
                        });
                      }
                      function recursivePersona() {
                        setTimeout(function() {
                          if (typeof personaclick === "function") {
                            personaclick("track", "view", 2706);
                            window
                              .jQuery(document)
                              .ajaxComplete(function(event, xhr, settings) {
                                if (
                                  settings.url &&
                                  settings.url.indexOf("/add-to-cart") >= 0 &&
                                  xhr.status === 200
                                ) {
                                  personaclick(
                                    "track",
                                    "cart",
                                    settings.data.split("&")[0].split("=")[1]
                                  );
                                }
                              });
                          } else {
                            recursivePersona();
                          }
                        }, 100);
                      }
                      recursivePersona();
                    </script>
                  </div>

                 
                  <!--CACHE-->
                  <script>
                    PRODUCT_DATA.push(
                      JSON.parse(
                        '{"id":"2706","name":"HOODIE SWEATSHIRT TURUNCU","code":"M-1038-15","supplier_code":"","sale_price":"99.9167","total_base_price":119.900000000000005684341886080801486968994140625,"total_sale_price":107.909999999999996589394868351519107818603515625,"vat":8,"subproduct_code":"","subproduct_id":0,"price":111.0185000000000030695446184836328029632568359375,"total_price":119.900000000000005684341886080801486968994140625,"available":true,"category_ids":"338,391,388,231","barcode":"","image":"https:\\/\\/www.manuka.com.tr\\/m-1038-hoodie-sweatshirt-turuncu-sweatshirt-9758-27-O.jpg","quantity":172,"url":"m-1038-hoodie-sweatshirt-turuncu","currency":"TL","brand":"","category":"Sweatshirt","category_id":"338","category_path":"Giyim > "}'
                      )
                    );
                  </script>
                  <script>
                    var cnf_negative_stock = 0;
                  </script>
                   <script type="text/javascript">
        $(document).ready(function() {
          var leftCol = true;
          var rightCol = true;
          var leftContent = $("#leftColumn")
            .html()
            .trim();
          var rightContent = $("#rightColumn")
            .html()
            .trim();
          var contentWrap = $(".contentWrapper");
          var content = $("#mainColumn");
          if (leftContent == "") {
            leftCol = false;
            $("#leftColumn").remove();
          }
          if (rightContent == "") {
            rightCol = false;
            $("#rightColumn").remove();
          }
          if (leftCol && rightCol) {
            contentWrap.attr("id", "threeCol");
            content.addClass("col-8 col-md-6 col-sm-12");
          } else if (leftCol || rightCol) {
            contentWrap.attr("id", "twoCol");
            content.addClass("col-10 col-md-9 col-sm-12");
          } else {
            contentWrap.attr("id", "oneCol");
            content.addClass("col-12");
          }
        });
      </script>

      <script
                type="text/javascript"
                src="https://img.manuka.com.tr/theme/standart/js/gorsel_vitrin/owl/owl.carousel.min.js"
                defer=""
              ></script>
              <script
                type="text/javascript"
                src="https://img.manuka.com.tr/theme/standart/js/gorsel_vitrin/owl/owl.animate.js"
                defer=""
              ></script>
              <script type="text/javascript">
      if ($(".cart-soft-count").length > 0) {
        $(".cart-soft-count").text(SEPET_MIKTAR);
        $(".cart-soft-price").text(SEPET_TOPLAM);
      }
      if (navigator.appVersion.indexOf("Edge") > -1) {
        $("body").addClass("edge");
      }
      if (
        navigator.appVersion.indexOf("Trident") > -1 &&
        navigator.appVersion.indexOf("Edge") == -1
      ) {
        $("body").addClass("ie");
      }
    </script>
    <script>
      (function() {
        $(document).ready(function() {
          jQuery("#list-catalog1062").remove();
          jQuery("#list-catalog1043").remove();
          jQuery("#tab-vitrin-2012").remove();
        });
      })();
    </script>
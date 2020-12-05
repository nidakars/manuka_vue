<template>
  <div id="mainColumn" class="fl col-10 col-md-9 col-sm-12">
    <link
      rel="stylesheet"
      property="stylesheet"
      type="text/css"
      href="/theme/v4-freshscarfs/sub_theme/blok_kategori/firat/v4/StandartMenuFirat.css"
    />

    <div class="col col-12">
      <div id="katalog" class="row">
        <div class="col col-12">
          <div class="row mb whiteBg notClear">
            <div class="ListOptions flexwrap">
              <div class="NavBox col-4 col-md-12 fl">
                <div class="col col-12 NavContent">
                  <div id="navigasyon" class="row">
                    <div id="nav-wrapper" class="fl col-12">
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
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="FiltreSort flexwrap col-8 col-md-12">
                <div class="FiltreBox fr col-md-6">
                  <div class="fl col-12 fltre">
                    <div class="fl col-12">
                      <div class="col col-12" id="leftFilter">
                        <div
                          class="col col-12 text-semibold forMobile"
                          id="filterMobileBtn"
                        >
                          Filtre
                        </div>
                        <div class="fl col-12" id="filterWrapper">
                          <div
                            style="visibility: visible;"
                            id="filterPanel"
                            class="fl col-12 angularTemplate flexwrap"
                            data-callback="filtreReady"
                            data-url="/srv/service/filter/get/filters-variants-brands-categories-price-suppliers"
                          >
                            <div class="filter-wrap">
                              <ul class="fl col-12 catMenu" id="filterCats">
                                <li class="fl col-12 parent">
                                  <div class="TumKatBox">
                                    <div
                                      class="col col-12 text-custom-gray text-semibold col-title filter-title"
                                    >
                                      KATEGORİLER
                                    </div>
                                    <div
                                      class="fl col-12 fValuesBox fCatBox"
                                      style="display: none;"
                                    >
                                      <ul class="box col-12">
                                        <li class="fl col-12">
                                          <a
                                            class="fl col-12 text-description lma"
                                            href="/kaban-333"
                                            data-after="»"
                                            >Kaban</a
                                          >
                                        </li>
                                        <li class="fl col-12">
                                          <a
                                            class="fl col-12 text-description lma"
                                            href="/mont-334"
                                            data-after="»"
                                            >Mont</a
                                          >
                                        </li>
                                        <li class="fl col-12">
                                          <a
                                            class="fl col-12 text-description lma"
                                            href="/yagmurluk-327"
                                            data-after="»"
                                            >Yağmurluk</a
                                          >
                                        </li>
                                        <li class="fl col-12">
                                          <a
                                            class="fl col-12 text-description lma"
                                            href="/yelek"
                                            data-after="»"
                                            >Yelek</a
                                          >
                                        </li>
                                        <li class="fl col-12">
                                          <a
                                            class="fl col-12 text-description lma"
                                            href="/trenchkot"
                                            data-after="»"
                                            >Trençkot</a
                                          >
                                        </li>
                                        <li class="fl col-12">
                                          <a
                                            class="fl col-12 text-description lma"
                                            href="/denim"
                                            data-after="»"
                                            >Denim</a
                                          >
                                        </li>
                                        <li class="fl col-12">
                                          <a
                                            class="fl col-12 text-description lma"
                                            href="/ceket-339"
                                            data-after="»"
                                            >Ceket</a
                                          >
                                        </li>
                                        <li class="fl col-12">
                                          <a
                                            class="fl col-12 text-description lma"
                                            href="/triko-325"
                                            data-after="»"
                                            >Triko</a
                                          >
                                        </li>
                                        <li class="fl col-12">
                                          <a
                                            class="fl col-12 text-description lma"
                                            href="/hirka-332"
                                            data-after="»"
                                            >Hırka</a
                                          >
                                        </li>
                                        <li class="fl col-12">
                                          <a
                                            class="fl col-12 text-description lma"
                                            href="/kazak-323"
                                            data-after="»"
                                            >Kazak</a
                                          >
                                        </li>
                                        <li class="fl col-12">
                                          <a
                                            class="fl col-12 text-description lma"
                                            href="/suveter"
                                            data-after="»"
                                            >Süveter</a
                                          >
                                        </li>
                                        <li class="fl col-12">
                                          <a
                                            class="fl col-12 text-description lma"
                                            href="/sweatshirt-338"
                                            data-after="»"
                                            >Sweatshirt</a
                                          >
                                        </li>
                                        <li class="fl col-12">
                                          <a
                                            class="fl col-12 text-description lma"
                                            href="/gomlek-329"
                                            data-after="»"
                                            >Gömlek</a
                                          >
                                        </li>
                                        <li class="fl col-12">
                                          <a
                                            class="fl col-12 text-description lma"
                                            href="/tunik"
                                            data-after="»"
                                            >Tunik</a
                                          >
                                        </li>
                                        <li class="fl col-12">
                                          <a
                                            class="fl col-12 text-description lma"
                                            href="/basic-328"
                                            data-after="»"
                                            >Basic</a
                                          >
                                        </li>
                                        <li class="fl col-12">
                                          <a
                                            class="fl col-12 text-description lma"
                                            href="/kimono"
                                            data-after="»"
                                            >Kimono</a
                                          >
                                        </li>
                                        <li class="fl col-12">
                                          <a
                                            class="fl col-12 text-description lma"
                                            href="/t-shirt-324"
                                            data-after="»"
                                            >T-Shirt</a
                                          >
                                        </li>
                                        <li class="fl col-12">
                                          <a
                                            class="fl col-12 text-description lma"
                                            href="/elbise-322"
                                            data-after="»"
                                            >Elbise</a
                                          >
                                        </li>
                                        <li class="fl col-12">
                                          <a
                                            class="fl col-12 text-description lma"
                                            href="/salopet"
                                            data-after="»"
                                            >Salopet</a
                                          >
                                        </li>
                                        <li class="fl col-12">
                                          <a
                                            class="fl col-12 text-description lma"
                                            href="/jean-336"
                                            data-after="»"
                                            >Jean</a
                                          >
                                        </li>
                                        <li class="fl col-12">
                                          <a
                                            class="fl col-12 text-description lma"
                                            href="/pantolon-335"
                                            data-after="»"
                                            >Pantolon</a
                                          >
                                        </li>
                                        <li class="fl col-12">
                                          <a
                                            class="fl col-12 text-description lma"
                                            href="/etek-337"
                                            data-after="»"
                                            >Etek</a
                                          >
                                        </li>
                                        <li class="fl col-12">
                                          <a
                                            class="fl col-12 text-description lma"
                                            href="/sweatshirt-takim"
                                            data-after="»"
                                            >Sweatshirt Takım</a
                                          >
                                        </li>
                                        <li class="fl col-12">
                                          <a
                                            class="fl col-12 text-description lma"
                                            href="/esofman-takim"
                                            data-after="»"
                                            >Eşofman Takım</a
                                          >
                                        </li>
                                        <li class="fl col-12">
                                          <a
                                            class="fl col-12 text-description lma"
                                            href="/takim-331"
                                            data-after="»"
                                            >Takım</a
                                          >
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>

                            <div class="filter-wrap">
                              <div class="fl col-12">
                                <div
                                  class="col col-12 text-custom-gray text-semibold col-title filter-title hidden"
                                >
                                  Renk
                                </div>
                                <div
                                  class="box col-12 fValuesBox open"
                                  style="display: block;"
                                >
                                  <div
                                    class="fl col-12 fVariantBox FilterScroll"
                                  >
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_325"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="325"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_325"
                                          value="325"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        AÇIK HAKİ
                                        <!--(1)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_203"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="203"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_203"
                                          value="203"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        HARDAL-BEYAZ
                                        <!--(1)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_278"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="278"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_278"
                                          value="278"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        KAHVERENGİ
                                        <!--(2)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_293"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="293"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_293"
                                          value="293"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        GRİ-KAHVE
                                        <!--(1)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_184"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="184"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_184"
                                          value="184"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        BAKIR
                                        <!--(3)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_162"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="162"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_162"
                                          value="162"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        GRİ
                                        <!--(8)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_171"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="171"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_171"
                                          value="171"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        CAMEL
                                        <!--(17)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_258"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="258"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_258"
                                          value="258"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        VİZON BEYAZ
                                        <!--(1)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_193"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="193"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_193"
                                          value="193"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        MİNT
                                        <!--(29)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_235"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="235"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_235"
                                          value="235"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        BİSKÜVİ
                                        <!--(2)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_158"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="158"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_158"
                                          value="158"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        SİYAH
                                        <!--(74)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_160"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="160"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_160"
                                          value="160"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        KİREMİT
                                        <!--(11)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_159"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="159"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_159"
                                          value="159"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        EKRU
                                        <!--(16)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_326"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="326"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_326"
                                          value="326"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        KUM BEJİ
                                        <!--(1)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_188"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="188"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_188"
                                          value="188"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        BEJ
                                        <!--(33)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_194"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="194"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_194"
                                          value="194"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        VİZON
                                        <!--(3)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_169"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="169"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_169"
                                          value="169"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        AÇIK MAVİ
                                        <!--(7)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_240"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="240"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_240"
                                          value="240"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        SOMON
                                        <!--(1)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_170"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="170"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_170"
                                          value="170"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        KOYU MAVİ
                                        <!--(12)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_233"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="233"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_233"
                                          value="233"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        OKYANUS
                                        <!--(1)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_172"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="172"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_172"
                                          value="172"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        BEYAZ
                                        <!--(6)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_273"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="273"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_273"
                                          value="273"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        GÜLPEMBE
                                        <!--(2)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_174"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="174"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_174"
                                          value="174"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        HAKİ
                                        <!--(17)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_292"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="292"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_292"
                                          value="292"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        SİYAH-KAHVE
                                        <!--(1)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_178"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="178"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_178"
                                          value="178"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        HARDAL
                                        <!--(5)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_324"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="324"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_324"
                                          value="324"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        BUZ GRİ
                                        <!--(1)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_181"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="181"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_181"
                                          value="181"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        YEŞİL
                                        <!--(6)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_315"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="315"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_315"
                                          value="315"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        HAKİ-BEYAZ
                                        <!--(1)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_182"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="182"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_182"
                                          value="182"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        TAŞ
                                        <!--(4)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_322"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="322"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_322"
                                          value="322"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        NİL YEŞİLİ
                                        <!--(1)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_161"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="161"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_161"
                                          value="161"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        KAHVE
                                        <!--(19)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_175"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="175"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_175"
                                          value="175"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        ÇAĞLA
                                        <!--(4)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_189"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="189"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_189"
                                          value="189"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        BORDO
                                        <!--(1)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_205"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="205"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_205"
                                          value="205"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        SİYAH-BEYAZ
                                        <!--(1)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_163"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="163"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_163"
                                          value="163"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        İNDİGO
                                        <!--(4)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_259"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="259"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_259"
                                          value="259"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        MULTİ
                                        <!--(1)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_212"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="212"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_212"
                                          value="212"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        CAMEL-BEYAZ
                                        <!--(1)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_264"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="264"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_264"
                                          value="264"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        PASTEL
                                        <!--(1)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_243"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="243"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_243"
                                          value="243"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        EKOSE
                                        <!--(3)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_197"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="197"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_197"
                                          value="197"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        SÜTLÜ KAHVE
                                        <!--(6)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_177"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="177"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_177"
                                          value="177"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        GÜL KURUSU
                                        <!--(4)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_265"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="265"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_265"
                                          value="265"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        BOTANİK
                                        <!--(1)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_186"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="186"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_186"
                                          value="186"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        MAVİ
                                        <!--(11)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_210"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="210"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_210"
                                          value="210"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        ANTRASİT
                                        <!--(1)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_220"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="220"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_220"
                                          value="220"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        LACİVERT
                                        <!--(1)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_274"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="274"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_274"
                                          value="274"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        LEYLAK
                                        <!--(1)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_226"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="226"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_226"
                                          value="226"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        SARI
                                        <!--(9)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_288"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="288"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_288"
                                          value="288"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        KİREMİT-HARDAL
                                        <!--(1)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_183"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="183"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_183"
                                          value="183"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        ŞEFTALİ
                                        <!--(10)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_291"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="291"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_291"
                                          value="291"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        ORTA MAVİ
                                        <!--(1)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_180"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="180"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_180"
                                          value="180"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        TURUNCU
                                        <!--(4)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_294"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="294"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_294"
                                          value="294"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        KİREMİT-YEŞİL
                                        <!--(1)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_232"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="232"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_232"
                                          value="232"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        OFF WHITE
                                        <!--(33)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_313"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="313"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_313"
                                          value="313"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        BEJ-CAMEL
                                        <!--(1)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_224"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="224"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_224"
                                          value="224"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        PUDRA
                                        <!--(7)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_314"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="314"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_314"
                                          value="314"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        KİREMİT-BEYAZ
                                        <!--(1)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_238"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="238"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_238"
                                          value="238"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        GÜMÜŞ
                                        <!--(2)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_316"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="316"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_316"
                                          value="316"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        KAHVE-BEYAZ
                                        <!--(1)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_256"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="256"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_256"
                                          value="256"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        TATLI SARI
                                        <!--(2)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_199"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="199"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_199"
                                          value="199"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        BEYAZ-SİYAH
                                        <!--(1)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_254"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="254"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_254"
                                          value="254"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        LİLA-OFFWHITE
                                        <!--(2)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_289"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="289"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_289"
                                          value="289"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        SU YEŞİLİ
                                        <!--(1)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_261"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="261"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_261"
                                          value="261"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        PÖTİKARE MAVİ
                                        <!--(1)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_327"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="327"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_327"
                                          value="327"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        MİNT-OFF WHİTE
                                        <!--(1)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type1_176"
                                        class="fl col-12 col-text form-item myType1"
                                        data-type=""
                                        data-filter-id="176"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type1_176"
                                          value="176"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                            style="background-color:;"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                            style="background-color:;"
                                          ></i>
                                        </span>
                                        LİLA
                                        <!--(15)-->
                                      </label>
                                    </div>
                                  </div>
                                  <div class="box col-12 filterBtn">
                                    <span class="box col-12 a-center btn-upper"
                                      >Filtrele</span
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="filter-wrap">
                              <div class="fl col-12">
                                <div
                                  class="col col-12 text-custom-gray text-semibold col-title filter-title"
                                >
                                  Beden
                                </div>
                                <div
                                  class="box col-12 fValuesBox"
                                  style="display: none;"
                                >
                                  <div
                                    class="col col-12 fVariantBox FilterScroll"
                                  >
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type2_146"
                                        class="fl col-12 col-text form-item myType2"
                                        data-type=""
                                        data-filter-id="146"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type2_146"
                                          value="146"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                          ></i>
                                        </span>
                                        1
                                        <!--(259)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type2_145"
                                        class="fl col-12 col-text form-item myType2"
                                        data-type=""
                                        data-filter-id="145"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type2_145"
                                          value="145"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                          ></i>
                                        </span>
                                        2
                                        <!--(259)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type2_155"
                                        class="fl col-12 col-text form-item myType2"
                                        data-type=""
                                        data-filter-id="155"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type2_155"
                                          value="155"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                          ></i>
                                        </span>
                                        34
                                        <!--(5)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type2_143"
                                        class="fl col-12 col-text form-item myType2"
                                        data-type=""
                                        data-filter-id="143"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type2_143"
                                          value="143"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                          ></i>
                                        </span>
                                        36
                                        <!--(70)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type2_150"
                                        class="fl col-12 col-text form-item myType2"
                                        data-type=""
                                        data-filter-id="150"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type2_150"
                                          value="150"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                          ></i>
                                        </span>
                                        38
                                        <!--(70)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type2_149"
                                        class="fl col-12 col-text form-item myType2"
                                        data-type=""
                                        data-filter-id="149"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type2_149"
                                          value="149"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                          ></i>
                                        </span>
                                        40
                                        <!--(70)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type2_148"
                                        class="fl col-12 col-text form-item myType2"
                                        data-type=""
                                        data-filter-id="148"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type2_148"
                                          value="148"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                          ></i>
                                        </span>
                                        42
                                        <!--(52)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type2_144"
                                        class="fl col-12 col-text form-item myType2"
                                        data-type=""
                                        data-filter-id="144"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type2_144"
                                          value="144"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                          ></i>
                                        </span>
                                        STD
                                        <!--(95)-->
                                      </label>
                                    </div>
                                    <div class="fl col-12 mb">
                                      <label
                                        for="type2_157"
                                        class="fl col-12 col-text form-item myType2"
                                        data-type=""
                                        data-filter-id="157"
                                      >
                                        <input
                                          type="checkbox"
                                          id="type2_157"
                                          value="157"
                                        />

                                        <span class="fl icon-wrapper">
                                          <i
                                            class="fl icon-square-unchecked icon-small"
                                          ></i>
                                          <i
                                            class="fl icon-square-checked icon-small"
                                          ></i>
                                        </span>
                                        44
                                        <!--(4)-->
                                      </label>
                                    </div>
                                  </div>

                                  <div class="box col-12 filterBtn">
                                    <span class="box col-12 a-center btn-upper"
                                      >Filtrele</span
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="filter-wrap">
                              <div class="fl col-12">
                                <div
                                  class="col col-12 text-custom-gray text-semibold col-title filter-title"
                                >
                                  Fiyat
                                </div>
                                <div
                                  class="box col-12 fValuesBox fPriceSliderBox"
                                  style="display: none;"
                                >
                                  <div class="row forMobile">
                                    <div class="fl col-12 fPriceBox">
                                      <div class="row">
                                        <div
                                          class="col col-4 col-xs-6 p-left mb form-control large"
                                        >
                                          <input
                                            type="text"
                                            id="minMobilePrice"
                                            name="minMobilePrice"
                                            data-min-value="39"
                                            value="39"
                                            class="col col-12 withPlace"
                                          />
                                        </div>
                                        <div
                                          class="col col-4 col-xs-6 p-left mb form-control large"
                                        >
                                          <input
                                            type="text"
                                            id="maxMobilePrice"
                                            name="maxMobilePrice"
                                            data-min-value="350"
                                            value="350"
                                            class="col col-12 withPlace"
                                          />
                                        </div>
                                        <!--<div class="col col-4 col-xs-12 p-left mb">
                                                <button type="button" id="priceBtn" class="btn btn-custom-pink col-12 text-center text-semibold">
                                                    <i class="icon-check icon-no-space"></i>
                                                    Filtre
                                                </button>
                                            </div>-->
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="fl col-12 mb forDesktop FilterScroll"
                                  >
                                    <div
                                      id="priceSlider"
                                      class="fl col-12 col-sm-12"
                                    >
                                      <div
                                        id="slider-range"
                                        class="col ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                                      >
                                        <div
                                          class="ui-slider-range ui-corner-all ui-widget-header"
                                          style="left: 0%; width: 100%;"
                                        ></div>
                                        <span
                                          tabindex="0"
                                          class="ui-slider-handle ui-corner-all ui-state-default"
                                          style="left: 0%;"
                                        ></span
                                        ><span
                                          tabindex="0"
                                          class="ui-slider-handle ui-corner-all ui-state-default"
                                          style="left: 100%;"
                                        ></span>
                                      </div>
                                    </div>
                                    <div class="priceWrap text-center">
                                      <span
                                        id="min-price"
                                        class="fl"
                                        data-min="39"
                                        >39 TL</span
                                      >
                                      <span
                                        id="max-price"
                                        class="fr"
                                        data-max="350"
                                        >350 TL</span
                                      >
                                    </div>
                                  </div>
                                  <div class="box col-12 filterBtn">
                                    <span class="box col-12 a-center btn-upper"
                                      >Filtrele</span
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="SortBox fr col-md-6">
                  <div class="col col-12 forMobile" id="filterSortBtn">
                    <div class="col col-12 text-semibold SortBtn">
                      Sıralama seçin
                    </div>
                  </div>
                  <div class="fl col-12 notClear" id="filterSort">
                    <div class="fr col col-sm-6 p-left forDesktop">
                      <div class="fl btnBar" id="pageLayout">
                        <span class="col ease">Görünüm:</span>
                        <span
                          class="col ease blockBtn threeBlock active catalogBtn selectable"
                          data-id="0"
                        ></span>
                        <span
                          class="col ease blockBtn fourBlock listBtn selectable"
                          data-id="2"
                        ></span>
                      </div>
                    </div>
                    <label for="sort" class="fr col-md-12 p-left d-flex">
                      <select
                        name="sort"
                        id="sort"
                        class="col text-description b-none"
                      >
                        <option value="0" selected=""
                          >Varsayılan Sıralama</option
                        >
                        <option value="1">Alfabetik A-Z</option>
                        <option value="2">Alfabetik Z-A</option>
                        <option value="3">Yeniden Eskiye</option>
                        <option value="4">Eskiden Yeniye</option>
                        <option value="5">Fiyat Artan</option>
                        <option value="6">Fiyat Azalan</option>
                        <option value="7">Rastgele</option>
                        <option value="8">Puana Göre</option>
                      </select>
                    </label>
                  </div>
                </div>
                <div id="pageLayout" class="col-12 fl mGorunum">
                  <span class="horizontalBtn selectable fr" data-id="1"></span>
                  <span class="listBtn selectable fr" data-id="2"></span>
                  <div class="fr mGorunumBaslik">Görünüm:</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="PersonaClickDiv col-12 fl">
          <div
            class="personaclick-recommend PersonaCategory col-12 fl personaclick-recommend-rendered"
            data-recommender-block="dynamic"
            data-recommender-code="f0d695cc8140bba0fba4293afe06a3c0"
            data-recommender-category="316"
            data-recommender-callback="PersonaCallBack"
          >
            <div
              data-categories='["316", "325"]'
              class="recommender-block-title"
            >
              KATEGORİNİN ÖNE ÇIKANLARI
            </div>
            <div
              class="recommended-items owl-carousel owl-theme owl-loaded owl-drag"
            >
              <div class="owl-stage-outer">
                <div
                  class="owl-stage"
                  style="transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s; width: 1724px;"
                >
                  <div
                    class="owl-item active"
                    style="width: 162.395px; margin-right: 10px;"
                  >
                    <div class="recommended-item">
                      <div class="recommended-item-photo">
                        <a
                          href="https://www.manuka.com.tr/utu-izli-denim-pantolon-siyah?recommended_by=dynamic&amp;recommended_code=f0d695cc8140bba0fba4293afe06a3c0"
                          ><img
                            class="item_img"
                            src="https://pictures.personaclick.com/resize-images/520/76c817929f9164580e7d674b8e21b0/202159523.jpg"
                        /></a>
                      </div>
                      <div class="recommended-item-title">
                        <a
                          href="https://www.manuka.com.tr/utu-izli-denim-pantolon-siyah?recommended_by=dynamic&amp;recommended_code=f0d695cc8140bba0fba4293afe06a3c0"
                          >ütü izli denim pantolon siyah</a
                        >
                      </div>

                      <div class="persona-item-price">
                        129,90 TL
                      </div>
                    </div>
                  </div>
                  <div
                    class="owl-item active"
                    style="width: 162.395px; margin-right: 10px;"
                  >
                    <div class="recommended-item">
                      <div class="recommended-item-photo">
                        <a
                          href="https://www.manuka.com.tr/cizgili-balikci-kazak-siyah?recommended_by=dynamic&amp;recommended_code=f0d695cc8140bba0fba4293afe06a3c0"
                          ><img
                            class="item_img"
                            src="https://pictures.personaclick.com/resize-images/520/76c817929f9164580e7d674b8e21b0/202042546.jpg"
                        /></a>
                      </div>
                      <div class="recommended-item-title">
                        <a
                          href="https://www.manuka.com.tr/cizgili-balikci-kazak-siyah?recommended_by=dynamic&amp;recommended_code=f0d695cc8140bba0fba4293afe06a3c0"
                          >çizgili balıkçı kazak siyah</a
                        >
                      </div>

                      <div class="persona-item-price">
                        79,90 TL
                      </div>
                    </div>
                  </div>
                  <div
                    class="owl-item active"
                    style="width: 162.395px; margin-right: 10px;"
                  >
                    <div class="recommended-item">
                      <div class="recommended-item-photo">
                        <a
                          href="https://www.manuka.com.tr/utu-izli-denim-pantolon-mavi?recommended_by=dynamic&amp;recommended_code=f0d695cc8140bba0fba4293afe06a3c0"
                          ><img
                            class="item_img"
                            src="https://pictures.personaclick.com/resize-images/520/76c817929f9164580e7d674b8e21b0/202159452.jpg"
                        /></a>
                      </div>
                      <div class="recommended-item-title">
                        <a
                          href="https://www.manuka.com.tr/utu-izli-denim-pantolon-mavi?recommended_by=dynamic&amp;recommended_code=f0d695cc8140bba0fba4293afe06a3c0"
                          >ütü izli denim pantolon mavi</a
                        >
                      </div>

                      <div class="persona-item-price">
                        129,90 TL
                      </div>
                    </div>
                  </div>
                  <div
                    class="owl-item active"
                    style="width: 162.395px; margin-right: 10px;"
                  >
                    <div class="recommended-item">
                      <div class="recommended-item-photo">
                        <a
                          href="https://www.manuka.com.tr/cizgili-balikci-kazak-lila-offwhite?recommended_by=dynamic&amp;recommended_code=f0d695cc8140bba0fba4293afe06a3c0"
                          ><img
                            class="item_img"
                            src="https://pictures.personaclick.com/resize-images/520/76c817929f9164580e7d674b8e21b0/202012542.jpg"
                        /></a>
                      </div>
                      <div class="recommended-item-title">
                        <a
                          href="https://www.manuka.com.tr/cizgili-balikci-kazak-lila-offwhite?recommended_by=dynamic&amp;recommended_code=f0d695cc8140bba0fba4293afe06a3c0"
                          >çizgili balıkçı kazak lila-...</a
                        >
                      </div>

                      <div class="persona-item-price">
                        79,90 TL
                      </div>
                    </div>
                  </div>
                  <div
                    class="owl-item active"
                    style="width: 162.395px; margin-right: 10px;"
                  >
                    <div class="recommended-item">
                      <div class="recommended-item-photo">
                        <a
                          href="https://www.manuka.com.tr/dugme-detayli-elbise-siyah?recommended_by=dynamic&amp;recommended_code=f0d695cc8140bba0fba4293afe06a3c0"
                          ><img
                            class="item_img"
                            src="https://pictures.personaclick.com/resize-images/520/76c817929f9164580e7d674b8e21b0/202159531.jpg"
                        /></a>
                      </div>
                      <div class="recommended-item-title">
                        <a
                          href="https://www.manuka.com.tr/dugme-detayli-elbise-siyah?recommended_by=dynamic&amp;recommended_code=f0d695cc8140bba0fba4293afe06a3c0"
                          >düğme detaylı elbise siyah</a
                        >
                      </div>

                      <div class="persona-item-price">
                        219,90 TL
                      </div>
                    </div>
                  </div>
                  <div
                    class="owl-item active"
                    style="width: 162.395px; margin-right: 10px;"
                  >
                    <div class="recommended-item">
                      <div class="recommended-item-photo">
                        <a
                          href="https://www.manuka.com.tr/dugmeli-blazer-ceket-gri?recommended_by=dynamic&amp;recommended_code=f0d695cc8140bba0fba4293afe06a3c0"
                          ><img
                            class="item_img"
                            src="https://pictures.personaclick.com/resize-images/520/76c817929f9164580e7d674b8e21b0/202014763.jpg"
                        /></a>
                      </div>
                      <div class="recommended-item-title">
                        <a
                          href="https://www.manuka.com.tr/dugmeli-blazer-ceket-gri?recommended_by=dynamic&amp;recommended_code=f0d695cc8140bba0fba4293afe06a3c0"
                          >düğmeli blazer ceket gri</a
                        >
                      </div>

                      <div class="persona-item-price">
                        269,90 TL
                      </div>
                    </div>
                  </div>
                  <div
                    class="owl-item"
                    style="width: 162.395px; margin-right: 10px;"
                  >
                    <div class="recommended-item">
                      <div class="recommended-item-photo">
                        <a
                          href="https://www.manuka.com.tr/dugme-detayli-elbise-kiremit?recommended_by=dynamic&amp;recommended_code=f0d695cc8140bba0fba4293afe06a3c0"
                          ><img
                            class="item_img"
                            src="https://pictures.personaclick.com/resize-images/520/76c817929f9164580e7d674b8e21b0/202159535.jpg"
                        /></a>
                      </div>
                      <div class="recommended-item-title">
                        <a
                          href="https://www.manuka.com.tr/dugme-detayli-elbise-kiremit?recommended_by=dynamic&amp;recommended_code=f0d695cc8140bba0fba4293afe06a3c0"
                          >düğme detaylı elbise kiremit</a
                        >
                      </div>

                      <div class="persona-item-price">
                        219,90 TL
                      </div>
                    </div>
                  </div>
                  <div
                    class="owl-item"
                    style="width: 162.395px; margin-right: 10px;"
                  >
                    <div class="recommended-item">
                      <div class="recommended-item-photo">
                        <a
                          href="https://www.manuka.com.tr/dugme-detayli-elbise-bej?recommended_by=dynamic&amp;recommended_code=f0d695cc8140bba0fba4293afe06a3c0"
                          ><img
                            class="item_img"
                            src="https://pictures.personaclick.com/resize-images/520/76c817929f9164580e7d674b8e21b0/202159530.jpg"
                        /></a>
                      </div>
                      <div class="recommended-item-title">
                        <a
                          href="https://www.manuka.com.tr/dugme-detayli-elbise-bej?recommended_by=dynamic&amp;recommended_code=f0d695cc8140bba0fba4293afe06a3c0"
                          >düğme detaylı elbise bej</a
                        >
                      </div>

                      <div class="persona-item-price">
                        219,90 TL
                      </div>
                    </div>
                  </div>
                  <div
                    class="owl-item"
                    style="width: 162.395px; margin-right: 10px;"
                  >
                    <div class="recommended-item">
                      <div class="recommended-item-photo">
                        <a
                          href="https://www.manuka.com.tr/cizgili-balikci-kazak-mint-off-white?recommended_by=dynamic&amp;recommended_code=f0d695cc8140bba0fba4293afe06a3c0"
                          ><img
                            class="item_img"
                            src="https://pictures.personaclick.com/resize-images/520/76c817929f9164580e7d674b8e21b0/202043021.jpg"
                        /></a>
                      </div>
                      <div class="recommended-item-title">
                        <a
                          href="https://www.manuka.com.tr/cizgili-balikci-kazak-mint-off-white?recommended_by=dynamic&amp;recommended_code=f0d695cc8140bba0fba4293afe06a3c0"
                          >çizgili balıkçı kazak mint-...</a
                        >
                      </div>

                      <div class="persona-item-price">
                        79,90 TL
                      </div>
                    </div>
                  </div>
                  <div
                    class="owl-item"
                    style="width: 162.395px; margin-right: 10px;"
                  >
                    <div class="recommended-item">
                      <div class="recommended-item-photo">
                        <a
                          href="https://www.manuka.com.tr/bogazli-triko-kazak-siyah?recommended_by=dynamic&amp;recommended_code=f0d695cc8140bba0fba4293afe06a3c0"
                          ><img
                            class="item_img"
                            src="https://pictures.personaclick.com/resize-images/520/76c817929f9164580e7d674b8e21b0/2399682295154868809.jpg"
                        /></a>
                      </div>
                      <div class="recommended-item-title">
                        <a
                          href="https://www.manuka.com.tr/bogazli-triko-kazak-siyah?recommended_by=dynamic&amp;recommended_code=f0d695cc8140bba0fba4293afe06a3c0"
                          >boğazlı triko kazak siyah</a
                        >
                      </div>

                      <div class="persona-item-price">
                        119,90 TL
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
        <input type="hidden" id="search_word" value="" />
        <input type="hidden" id="category_name" value="Giyim" />
        <input type="hidden" id="category_id" value="316" />
        <div class="col col-12">
          <div class="row">
            <div class="fl col-12 catalogWrapper" id="list-slide1003">
              <div
                class="col col-4 col-md-6 col-sm-12 productItem ease"
                id="1003-product-detail-ekose-astarli-ceket-mavi"
                itemscope="itemscope"
                itemtype="http://schema.org/Product"
              >
                <input type="hidden" class="myProductList" value="3334" />
                <span itemprop="url" content="ekose-astarli-ceket-mavi"></span>
                <span itemprop="name" content="EKOSE ASTARLI CEKET MAVİ"></span>
                <span itemprop="description" content=""></span>
                <span
                  itemprop="image"
                  content="https://www.manuka.com.tr/ekose-astarli-ceket-mavi-ceket-0-13403-33-K.jpg"
                ></span>
                <div class="col col-12 drop-down hover pos-r UrunListeBottom">
                  <div class="row">
                    <a
                      data-url="/ekose-astarli-ceket-mavi"
                      class="productBtn fl zoomBtn hide"
                      >HIZLI GÖRÜNÜM</a
                    >
                    <a
                      href="/ekose-astarli-ceket-mavi"
                      class="image-wrapper fl detailLink"
                    >
                      <span class="imgInner">
                        <img
                          src="https://img.manuka.com.tr/ekose-astarli-ceket-mavi-ceket-0-13403-33-O.jpg"
                          class="stImage"
                          alt=" - EKOSE ASTARLI CEKET MAVİ"
                          style=""
                        />
                      </span>
                    </a>
                  </div>
                  <div class="row pInfo">
                    <div
                      class="col col-12 productDetails loaderWrapper"
                      style="height: 66.4453px;"
                    >
                      <div class="row drop-down-title">
                        <div class="box col-12">
                          <div class="row">
                            <a
                              href="/ekose-astarli-ceket-mavi"
                              title="EKOSE ASTARLI CEKET MAVİ"
                              class="col col-12 text-description detailLink productTitle"
                              data-id="3334"
                              >EKOSE ASTARLI CEKET MAVİ</a
                            >
                            <a
                              data-width="500"
                              data-url="/srv/service/customer/login-form"
                              id="favoribtn"
                              class="popupWin fr favouriteBtn loginPopupBtn favoriteBtn"
                            ></a>
                          </div>
                        </div>
                        <input
                          type="hidden"
                          name="subPro33341003"
                          id="subPro33341003"
                          value="0"
                        />
                        <div
                          class="box col-12 proRowAct"
                          id="1003-product-price-ekose-astarli-ceket-mavi"
                          itemprop="offers"
                          itemscope=""
                          itemtype="http://schema.org/Offer"
                        >
                          <span itemprop="priceCurrency" content="TRY"></span>
                          <span itemprop="price" content="219.899988"></span>
                          <span
                            itemprop="availability"
                            content="https://schema.org/InStock"
                          ></span>
                          <span itemprop="itemCondition" content="new"></span>
                          <div class="fl col-12 tooltipWrapper">
                            <div class="fl col-12 productPrice">
                              <div class="fl col-12 priceWrapper flexwrap">
                                <span class="currentPrice">
                                  219,90 TL
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col col-4 col-md-6 col-sm-12 productItem ease"
                id="1003-product-detail-kruvaze-kaban-siyah"
                itemscope="itemscope"
                itemtype="http://schema.org/Product"
              >
                <input type="hidden" class="myProductList" value="3291" />
                <span itemprop="url" content="kruvaze-kaban-siyah"></span>
                <span itemprop="name" content="KRUVAZE KABAN SİYAH"></span>
                <span itemprop="description" content=""></span>
                <span
                  itemprop="image"
                  content="https://www.manuka.com.tr/kruvaze-kaban-siyah-dis-giyim-13433-32-K.jpg"
                ></span>
                <div class="col col-12 drop-down hover pos-r UrunListeBottom">
                  <div class="row">
                    <a
                      data-url="/kruvaze-kaban-siyah"
                      class="productBtn fl zoomBtn hide"
                      >HIZLI GÖRÜNÜM</a
                    >
                    <a
                      href="/kruvaze-kaban-siyah"
                      class="image-wrapper fl detailLink"
                    >
                      <span class="imgInner">
                        <img
                          src="https://img.manuka.com.tr/kruvaze-kaban-siyah-dis-giyim-13433-32-O.jpg"
                          class="stImage"
                          alt=" - KRUVAZE KABAN SİYAH"
                          style=""
                        />
                      </span>
                    </a>
                  </div>
                  <div class="row pInfo">
                    <div
                      class="col col-12 productDetails loaderWrapper"
                      style="height: 66.4453px;"
                    >
                      <div class="row drop-down-title">
                        <div class="box col-12">
                          <div class="row">
                            <span class="out-of-stock">YAKINDA</span>
                            <a
                              href="/kruvaze-kaban-siyah"
                              title="KRUVAZE KABAN SİYAH"
                              class="col col-12 text-description detailLink productTitle"
                              data-id="3291"
                              >KRUVAZE KABAN SİYAH</a
                            >
                            <a
                              data-width="500"
                              data-url="/srv/service/customer/login-form"
                              id="favoribtn"
                              class="popupWin fr favouriteBtn loginPopupBtn favoriteBtn"
                            ></a>
                          </div>
                        </div>
                        <input
                          type="hidden"
                          name="subPro32911003"
                          id="subPro32911003"
                          value="0"
                        />
                        <div
                          class="box col-12 proRowAct"
                          id="1003-product-price-kruvaze-kaban-siyah"
                          itemprop="offers"
                          itemscope=""
                          itemtype="http://schema.org/Offer"
                        >
                          <span itemprop="priceCurrency" content="TRY"></span>
                          <span itemprop="price" content="349.90002"></span>
                          <span
                            itemprop="availability"
                            content="https://schema.org/OutOfStock"
                          ></span>
                          <span itemprop="itemCondition" content="new"></span>
                          <div class="fl col-12 tooltipWrapper">
                            <div class="fl col-12 productPrice">
                              <div class="fl col-12 priceWrapper flexwrap">
                                <span class="currentPrice">
                                  349,90 TL
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col col-4 col-md-6 col-sm-12 productItem ease"
                id="1003-product-detail-kruvaze-kaban-mint"
                itemscope="itemscope"
                itemtype="http://schema.org/Product"
              >
                <input type="hidden" class="myProductList" value="3292" />
                <span itemprop="url" content="kruvaze-kaban-mint"></span>
                <span itemprop="name" content="KRUVAZE KABAN MİNT"></span>
                <span itemprop="description" content=""></span>
                <span
                  itemprop="image"
                  content="https://www.manuka.com.tr/kruvaze-kaban-mint-dis-giyim-0-13430-32-K.jpg"
                ></span>
                <div class="col col-12 drop-down hover pos-r UrunListeBottom">
                  <div class="row">
                    <a
                      data-url="/kruvaze-kaban-mint"
                      class="productBtn fl zoomBtn hide"
                      >HIZLI GÖRÜNÜM</a
                    >
                    <a
                      href="/kruvaze-kaban-mint"
                      class="image-wrapper fl detailLink"
                    >
                      <span class="imgInner">
                        <img
                          data-src="https://img.manuka.com.tr/kruvaze-kaban-mint-dis-giyim-0-13430-32-O.jpg"
                          src="/theme/standart/images/lazy_load_yukleniyor.gif"
                          class="lazy stImage"
                          alt=" - KRUVAZE KABAN MİNT"
                        />
                      </span>
                    </a>
                  </div>
                  <div class="row pInfo">
                    <div
                      class="col col-12 productDetails loaderWrapper"
                      style="height: 66.4453px;"
                    >
                      <div class="row drop-down-title">
                        <div class="box col-12">
                          <div class="row">
                            <a
                              href="/kruvaze-kaban-mint"
                              title="KRUVAZE KABAN MİNT"
                              class="col col-12 text-description detailLink productTitle"
                              data-id="3292"
                              >KRUVAZE KABAN MİNT</a
                            >
                            <a
                              data-width="500"
                              data-url="/srv/service/customer/login-form"
                              id="favoribtn"
                              class="popupWin fr favouriteBtn loginPopupBtn favoriteBtn"
                            ></a>
                          </div>
                        </div>
                        <input
                          type="hidden"
                          name="subPro32921003"
                          id="subPro32921003"
                          value="0"
                        />
                        <div
                          class="box col-12 proRowAct"
                          id="1003-product-price-kruvaze-kaban-mint"
                          itemprop="offers"
                          itemscope=""
                          itemtype="http://schema.org/Offer"
                        >
                          <span itemprop="priceCurrency" content="TRY"></span>
                          <span itemprop="price" content="349.90002"></span>
                          <span
                            itemprop="availability"
                            content="https://schema.org/InStock"
                          ></span>
                          <span itemprop="itemCondition" content="new"></span>
                          <div class="fl col-12 tooltipWrapper">
                            <div class="fl col-12 productPrice">
                              <div class="fl col-12 priceWrapper flexwrap">
                                <span class="currentPrice">
                                  349,90 TL
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col col-4 col-md-6 col-sm-12 productItem ease"
                id="1003-product-detail-kruvaze-kaban-seftali"
                itemscope="itemscope"
                itemtype="http://schema.org/Product"
              >
                <input type="hidden" class="myProductList" value="3293" />
                <span itemprop="url" content="kruvaze-kaban-seftali"></span>
                <span itemprop="name" content="KRUVAZE KABAN ŞEFTALİ"></span>
                <span itemprop="description" content=""></span>
                <span
                  itemprop="image"
                  content="https://www.manuka.com.tr/kruvaze-kaban-seftali-dis-giyim-0-13432-32-K.jpg"
                ></span>
                <div class="col col-12 drop-down hover pos-r UrunListeBottom">
                  <div class="row">
                    <a
                      data-url="/kruvaze-kaban-seftali"
                      class="productBtn fl zoomBtn hide"
                      >HIZLI GÖRÜNÜM</a
                    >
                    <a
                      href="/kruvaze-kaban-seftali"
                      class="image-wrapper fl detailLink"
                    >
                      <span class="imgInner">
                        <img
                          data-src="https://img.manuka.com.tr/kruvaze-kaban-seftali-dis-giyim-0-13432-32-O.jpg"
                          src="/theme/standart/images/lazy_load_yukleniyor.gif"
                          class="lazy stImage"
                          alt=" - KRUVAZE KABAN ŞEFTALİ"
                        />
                      </span>
                    </a>
                  </div>
                  <div class="row pInfo">
                    <div
                      class="col col-12 productDetails loaderWrapper"
                      style="height: 66.4453px;"
                    >
                      <div class="row drop-down-title">
                        <div class="box col-12">
                          <div class="row">
                            <a
                              href="/kruvaze-kaban-seftali"
                              title="KRUVAZE KABAN ŞEFTALİ"
                              class="col col-12 text-description detailLink productTitle"
                              data-id="3293"
                              >KRUVAZE KABAN ŞEFTALİ</a
                            >
                            <a
                              data-width="500"
                              data-url="/srv/service/customer/login-form"
                              id="favoribtn"
                              class="popupWin fr favouriteBtn loginPopupBtn favoriteBtn"
                            ></a>
                          </div>
                        </div>
                        <input
                          type="hidden"
                          name="subPro32931003"
                          id="subPro32931003"
                          value="0"
                        />
                        <div
                          class="box col-12 proRowAct"
                          id="1003-product-price-kruvaze-kaban-seftali"
                          itemprop="offers"
                          itemscope=""
                          itemtype="http://schema.org/Offer"
                        >
                          <span itemprop="priceCurrency" content="TRY"></span>
                          <span itemprop="price" content="349.90002"></span>
                          <span
                            itemprop="availability"
                            content="https://schema.org/InStock"
                          ></span>
                          <span itemprop="itemCondition" content="new"></span>
                          <div class="fl col-12 tooltipWrapper">
                            <div class="fl col-12 productPrice">
                              <div class="fl col-12 priceWrapper flexwrap">
                                <span class="currentPrice">
                                  349,90 TL
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col col-4 col-md-6 col-sm-12 productItem ease"
                id="1003-product-detail-kruvaze-kaban-kahve"
                itemscope="itemscope"
                itemtype="http://schema.org/Product"
              >
                <input type="hidden" class="myProductList" value="3294" />
                <span itemprop="url" content="kruvaze-kaban-kahve"></span>
                <span itemprop="name" content="KRUVAZE KABAN KAHVE"></span>
                <span itemprop="description" content=""></span>
                <span
                  itemprop="image"
                  content="https://www.manuka.com.tr/kruvaze-kaban-kahve-dis-giyim-0-13426-32-K.jpg"
                ></span>
                <div class="col col-12 drop-down hover pos-r UrunListeBottom">
                  <div class="row">
                    <a
                      data-url="/kruvaze-kaban-kahve"
                      class="productBtn fl zoomBtn hide"
                      >HIZLI GÖRÜNÜM</a
                    >
                    <a
                      href="/kruvaze-kaban-kahve"
                      class="image-wrapper fl detailLink"
                    >
                      <span class="imgInner">
                        <img
                          data-src="https://img.manuka.com.tr/kruvaze-kaban-kahve-dis-giyim-0-13426-32-O.jpg"
                          src="/theme/standart/images/lazy_load_yukleniyor.gif"
                          class="lazy stImage"
                          alt=" - KRUVAZE KABAN KAHVE"
                        />
                      </span>
                    </a>
                  </div>
                  <div class="row pInfo">
                    <div
                      class="col col-12 productDetails loaderWrapper"
                      style="height: 66.4453px;"
                    >
                      <div class="row drop-down-title">
                        <div class="box col-12">
                          <div class="row">
                            <a
                              href="/kruvaze-kaban-kahve"
                              title="KRUVAZE KABAN KAHVE"
                              class="col col-12 text-description detailLink productTitle"
                              data-id="3294"
                              >KRUVAZE KABAN KAHVE</a
                            >
                            <a
                              data-width="500"
                              data-url="/srv/service/customer/login-form"
                              id="favoribtn"
                              class="popupWin fr favouriteBtn loginPopupBtn favoriteBtn"
                            ></a>
                          </div>
                        </div>
                        <input
                          type="hidden"
                          name="subPro32941003"
                          id="subPro32941003"
                          value="0"
                        />
                        <div
                          class="box col-12 proRowAct"
                          id="1003-product-price-kruvaze-kaban-kahve"
                          itemprop="offers"
                          itemscope=""
                          itemtype="http://schema.org/Offer"
                        >
                          <span itemprop="priceCurrency" content="TRY"></span>
                          <span itemprop="price" content="349.90002"></span>
                          <span
                            itemprop="availability"
                            content="https://schema.org/InStock"
                          ></span>
                          <span itemprop="itemCondition" content="new"></span>
                          <div class="fl col-12 tooltipWrapper">
                            <div class="fl col-12 productPrice">
                              <div class="fl col-12 priceWrapper flexwrap">
                                <span class="currentPrice">
                                  349,90 TL
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col col-4 col-md-6 col-sm-12 productItem ease"
                id="1003-product-detail-kruvaze-kaban-buz-gri"
                itemscope="itemscope"
                itemtype="http://schema.org/Product"
              >
                <input type="hidden" class="myProductList" value="3581" />
                <span itemprop="url" content="kruvaze-kaban-buz-gri"></span>
                <span itemprop="name" content="KRUVAZE KABAN BUZ GRİ"></span>
                <span itemprop="description" content=""></span>
                <span
                  itemprop="image"
                  content="https://www.manuka.com.tr/kruvaze-kaban-buz-gri-dis-giyim-13721-35-K.jpg"
                ></span>
                <div class="col col-12 drop-down hover pos-r UrunListeBottom">
                  <div class="row">
                    <a
                      data-url="/kruvaze-kaban-buz-gri"
                      class="productBtn fl zoomBtn hide"
                      >HIZLI GÖRÜNÜM</a
                    >
                    <a
                      href="/kruvaze-kaban-buz-gri"
                      class="image-wrapper fl detailLink"
                    >
                      <span class="imgInner">
                        <img
                          data-src="https://img.manuka.com.tr/kruvaze-kaban-buz-gri-dis-giyim-13721-35-O.jpg"
                          src="/theme/standart/images/lazy_load_yukleniyor.gif"
                          class="lazy stImage"
                          alt=" - KRUVAZE KABAN BUZ GRİ"
                        />
                      </span>
                    </a>
                  </div>
                  <div class="row pInfo">
                    <div
                      class="col col-12 productDetails loaderWrapper"
                      style="height: 66.4453px;"
                    >
                      <div class="row drop-down-title">
                        <div class="box col-12">
                          <div class="row">
                            <span class="out-of-stock">YAKINDA</span>
                            <a
                              href="/kruvaze-kaban-buz-gri"
                              title="KRUVAZE KABAN BUZ GRİ"
                              class="col col-12 text-description detailLink productTitle"
                              data-id="3581"
                              >KRUVAZE KABAN BUZ GRİ</a
                            >
                            <a
                              data-width="500"
                              data-url="/srv/service/customer/login-form"
                              id="favoribtn"
                              class="popupWin fr favouriteBtn loginPopupBtn favoriteBtn"
                            ></a>
                          </div>
                        </div>
                        <input
                          type="hidden"
                          name="subPro35811003"
                          id="subPro35811003"
                          value="0"
                        />
                        <div
                          class="box col-12 proRowAct"
                          id="1003-product-price-kruvaze-kaban-buz-gri"
                          itemprop="offers"
                          itemscope=""
                          itemtype="http://schema.org/Offer"
                        >
                          <span itemprop="priceCurrency" content="TRY"></span>
                          <span itemprop="price" content="349.90002"></span>
                          <span
                            itemprop="availability"
                            content="https://schema.org/OutOfStock"
                          ></span>
                          <span itemprop="itemCondition" content="new"></span>
                          <div class="fl col-12 tooltipWrapper">
                            <div class="fl col-12 productPrice">
                              <div class="fl col-12 priceWrapper flexwrap">
                                <span class="currentPrice">
                                  349,90 TL
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col col-4 col-md-6 col-sm-12 productItem ease"
                id="1003-product-detail-tuylu-oversize-kaban-seftali"
                itemscope="itemscope"
                itemtype="http://schema.org/Product"
              >
                <input type="hidden" class="myProductList" value="3582" />
                <span
                  itemprop="url"
                  content="tuylu-oversize-kaban-seftali"
                ></span>
                <span
                  itemprop="name"
                  content="TÜYLÜ OVERSİZE KABAN ŞEFTALİ"
                ></span>
                <span itemprop="description" content=""></span>
                <span
                  itemprop="image"
                  content="https://www.manuka.com.tr/tuylu-oversize-kaban-seftali-dis-giyim-0-13872-35-K.jpg"
                ></span>
                <div class="col col-12 drop-down hover pos-r UrunListeBottom">
                  <div class="row">
                    <a
                      data-url="/tuylu-oversize-kaban-seftali"
                      class="productBtn fl zoomBtn hide"
                      >HIZLI GÖRÜNÜM</a
                    >
                    <a
                      href="/tuylu-oversize-kaban-seftali"
                      class="image-wrapper fl detailLink"
                    >
                      <span class="imgInner">
                        <img
                          data-src="https://img.manuka.com.tr/tuylu-oversize-kaban-seftali-dis-giyim-0-13872-35-O.jpg"
                          src="/theme/standart/images/lazy_load_yukleniyor.gif"
                          class="lazy stImage"
                          alt=" - TÜYLÜ OVERSİZE KABAN ŞEFTALİ"
                        />
                      </span>
                    </a>
                  </div>
                  <div class="row pInfo">
                    <div
                      class="col col-12 productDetails loaderWrapper"
                      style="height: 66.4453px;"
                    >
                      <div class="row drop-down-title">
                        <div class="box col-12">
                          <div class="row">
                            <a
                              href="/tuylu-oversize-kaban-seftali"
                              title="TÜYLÜ OVERSİZE KABAN ŞEFTALİ"
                              class="col col-12 text-description detailLink productTitle"
                              data-id="3582"
                              >TÜYLÜ OVERSİZE KABAN ŞEFTALİ</a
                            >
                            <a
                              data-width="500"
                              data-url="/srv/service/customer/login-form"
                              id="favoribtn"
                              class="popupWin fr favouriteBtn loginPopupBtn favoriteBtn"
                            ></a>
                          </div>
                        </div>
                        <input
                          type="hidden"
                          name="subPro35821003"
                          id="subPro35821003"
                          value="0"
                        />
                        <div
                          class="box col-12 proRowAct"
                          id="1003-product-price-tuylu-oversize-kaban-seftali"
                          itemprop="offers"
                          itemscope=""
                          itemtype="http://schema.org/Offer"
                        >
                          <span itemprop="priceCurrency" content="TRY"></span>
                          <span itemprop="price" content="349.90002"></span>
                          <span
                            itemprop="availability"
                            content="https://schema.org/InStock"
                          ></span>
                          <span itemprop="itemCondition" content="new"></span>
                          <div class="fl col-12 tooltipWrapper">
                            <div class="fl col-12 productPrice">
                              <div class="fl col-12 priceWrapper flexwrap">
                                <span class="currentPrice">
                                  349,90 TL
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col col-4 col-md-6 col-sm-12 productItem ease"
                id="1003-product-detail-tuylu-oversize-kaban-pudra"
                itemscope="itemscope"
                itemtype="http://schema.org/Product"
              >
                <input type="hidden" class="myProductList" value="3296" />
                <span
                  itemprop="url"
                  content="tuylu-oversize-kaban-pudra"
                ></span>
                <span
                  itemprop="name"
                  content="TÜYLÜ OVERSİZE KABAN PUDRA"
                ></span>
                <span itemprop="description" content=""></span>
                <span
                  itemprop="image"
                  content="https://www.manuka.com.tr/tuylu-oversize-kaban-pudra-dis-giyim-13437-32-K.jpg"
                ></span>
                <div class="col col-12 drop-down hover pos-r UrunListeBottom">
                  <div class="row">
                    <a
                      data-url="/tuylu-oversize-kaban-pudra"
                      class="productBtn fl zoomBtn hide"
                      >HIZLI GÖRÜNÜM</a
                    >
                    <a
                      href="/tuylu-oversize-kaban-pudra"
                      class="image-wrapper fl detailLink"
                    >
                      <span class="imgInner">
                        <img
                          data-src="https://img.manuka.com.tr/tuylu-oversize-kaban-pudra-dis-giyim-13437-32-O.jpg"
                          src="/theme/standart/images/lazy_load_yukleniyor.gif"
                          class="lazy stImage"
                          alt=" - TÜYLÜ OVERSİZE KABAN PUDRA"
                        />
                      </span>
                    </a>
                  </div>
                  <div class="row pInfo">
                    <div
                      class="col col-12 productDetails loaderWrapper"
                      style="height: 66.4453px;"
                    >
                      <div class="row drop-down-title">
                        <div class="box col-12">
                          <div class="row">
                            <a
                              href="/tuylu-oversize-kaban-pudra"
                              title="TÜYLÜ OVERSİZE KABAN PUDRA"
                              class="col col-12 text-description detailLink productTitle"
                              data-id="3296"
                              >TÜYLÜ OVERSİZE KABAN PUDRA</a
                            >
                            <a
                              data-width="500"
                              data-url="/srv/service/customer/login-form"
                              id="favoribtn"
                              class="popupWin fr favouriteBtn loginPopupBtn favoriteBtn"
                            ></a>
                          </div>
                        </div>
                        <input
                          type="hidden"
                          name="subPro32961003"
                          id="subPro32961003"
                          value="0"
                        />
                        <div
                          class="box col-12 proRowAct"
                          id="1003-product-price-tuylu-oversize-kaban-pudra"
                          itemprop="offers"
                          itemscope=""
                          itemtype="http://schema.org/Offer"
                        >
                          <span itemprop="priceCurrency" content="TRY"></span>
                          <span itemprop="price" content="349.90002"></span>
                          <span
                            itemprop="availability"
                            content="https://schema.org/InStock"
                          ></span>
                          <span itemprop="itemCondition" content="new"></span>
                          <div class="fl col-12 tooltipWrapper">
                            <div class="fl col-12 productPrice">
                              <div class="fl col-12 priceWrapper flexwrap">
                                <span class="currentPrice">
                                  349,90 TL
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col col-4 col-md-6 col-sm-12 productItem ease"
                id="1003-product-detail-tuylu-oversize-kaban-bej"
                itemscope="itemscope"
                itemtype="http://schema.org/Product"
              >
                <input type="hidden" class="myProductList" value="3297" />
                <span itemprop="url" content="tuylu-oversize-kaban-bej"></span>
                <span itemprop="name" content="TÜYLÜ OVERSİZE KABAN BEJ"></span>
                <span itemprop="description" content=""></span>
                <span
                  itemprop="image"
                  content="https://www.manuka.com.tr/tuylu-oversize-kaban-bej-dis-giyim-12302-32-K.jpg"
                ></span>
                <div class="col col-12 drop-down hover pos-r UrunListeBottom">
                  <div class="row">
                    <a
                      data-url="/tuylu-oversize-kaban-bej"
                      class="productBtn fl zoomBtn hide"
                      >HIZLI GÖRÜNÜM</a
                    >
                    <a
                      href="/tuylu-oversize-kaban-bej"
                      class="image-wrapper fl detailLink"
                    >
                      <span class="imgInner">
                        <img
                          data-src="https://img.manuka.com.tr/tuylu-oversize-kaban-bej-dis-giyim-12302-32-O.jpg"
                          src="/theme/standart/images/lazy_load_yukleniyor.gif"
                          class="lazy stImage"
                          alt=" - TÜYLÜ OVERSİZE KABAN BEJ"
                        />
                      </span>
                    </a>
                  </div>
                  <div class="row pInfo">
                    <div
                      class="col col-12 productDetails loaderWrapper"
                      style="height: 66.4453px;"
                    >
                      <div class="row drop-down-title">
                        <div class="box col-12">
                          <div class="row">
                            <span class="out-of-stock">YAKINDA</span>
                            <a
                              href="/tuylu-oversize-kaban-bej"
                              title="TÜYLÜ OVERSİZE KABAN BEJ"
                              class="col col-12 text-description detailLink productTitle"
                              data-id="3297"
                              >TÜYLÜ OVERSİZE KABAN BEJ</a
                            >
                            <a
                              data-width="500"
                              data-url="/srv/service/customer/login-form"
                              id="favoribtn"
                              class="popupWin fr favouriteBtn loginPopupBtn favoriteBtn"
                            ></a>
                          </div>
                        </div>
                        <input
                          type="hidden"
                          name="subPro32971003"
                          id="subPro32971003"
                          value="0"
                        />
                        <div
                          class="box col-12 proRowAct"
                          id="1003-product-price-tuylu-oversize-kaban-bej"
                          itemprop="offers"
                          itemscope=""
                          itemtype="http://schema.org/Offer"
                        >
                          <span itemprop="priceCurrency" content="TRY"></span>
                          <span itemprop="price" content="349.90002"></span>
                          <span
                            itemprop="availability"
                            content="https://schema.org/OutOfStock"
                          ></span>
                          <span itemprop="itemCondition" content="new"></span>
                          <div class="fl col-12 tooltipWrapper">
                            <div class="fl col-12 productPrice">
                              <div class="fl col-12 priceWrapper flexwrap">
                                <span class="currentPrice">
                                  349,90 TL
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col col-4 col-md-6 col-sm-12 productItem ease"
                id="1003-product-detail-cepli-kaban-gri-kahve"
                itemscope="itemscope"
                itemtype="http://schema.org/Product"
              >
                <input type="hidden" class="myProductList" value="3395" />
                <span itemprop="url" content="cepli-kaban-gri-kahve"></span>
                <span itemprop="name" content="CEPLİ KABAN GRİ-KAHVE"></span>
                <span itemprop="description" content=""></span>
                <span
                  itemprop="image"
                  content="https://www.manuka.com.tr/cepli-kaban-gri-kahve-kaban-0-12625-33-K.jpg"
                ></span>
                <div class="col col-12 drop-down hover pos-r UrunListeBottom">
                  <div class="row">
                    <a
                      data-url="/cepli-kaban-gri-kahve"
                      class="productBtn fl zoomBtn hide"
                      >HIZLI GÖRÜNÜM</a
                    >
                    <a
                      href="/cepli-kaban-gri-kahve"
                      class="image-wrapper fl detailLink"
                    >
                      <span class="imgInner">
                        <img
                          data-src="https://img.manuka.com.tr/cepli-kaban-gri-kahve-kaban-0-12625-33-O.jpg"
                          src="/theme/standart/images/lazy_load_yukleniyor.gif"
                          class="lazy stImage"
                          alt=" - CEPLİ KABAN GRİ-KAHVE"
                        />
                      </span>
                    </a>
                  </div>
                  <div class="row pInfo">
                    <div
                      class="col col-12 productDetails loaderWrapper"
                      style="height: 66.4453px;"
                    >
                      <div class="row drop-down-title">
                        <div class="box col-12">
                          <div class="row">
                            <a
                              href="/cepli-kaban-gri-kahve"
                              title="CEPLİ KABAN GRİ-KAHVE"
                              class="col col-12 text-description detailLink productTitle"
                              data-id="3395"
                              >CEPLİ KABAN GRİ-KAHVE</a
                            >
                            <a
                              data-width="500"
                              data-url="/srv/service/customer/login-form"
                              id="favoribtn"
                              class="popupWin fr favouriteBtn loginPopupBtn favoriteBtn"
                            ></a>
                          </div>
                        </div>
                        <input
                          type="hidden"
                          name="subPro33951003"
                          id="subPro33951003"
                          value="0"
                        />
                        <div
                          class="box col-12 proRowAct"
                          id="1003-product-price-cepli-kaban-gri-kahve"
                          itemprop="offers"
                          itemscope=""
                          itemtype="http://schema.org/Offer"
                        >
                          <span itemprop="priceCurrency" content="TRY"></span>
                          <span itemprop="price" content="249.900012"></span>
                          <span
                            itemprop="availability"
                            content="https://schema.org/InStock"
                          ></span>
                          <span itemprop="itemCondition" content="new"></span>
                          <div class="fl col-12 tooltipWrapper">
                            <div class="fl col-12 productPrice">
                              <div class="fl col-12 priceWrapper flexwrap">
                                <span class="currentPrice">
                                  249,90 TL
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col col-4 col-md-6 col-sm-12 productItem ease"
                id="1003-product-detail-cepli-kaban-siyah-kahve"
                itemscope="itemscope"
                itemtype="http://schema.org/Product"
              >
                <input type="hidden" class="myProductList" value="3394" />
                <span itemprop="url" content="cepli-kaban-siyah-kahve"></span>
                <span itemprop="name" content="CEPLİ KABAN SİYAH-KAHVE"></span>
                <span itemprop="description" content=""></span>
                <span
                  itemprop="image"
                  content="https://www.manuka.com.tr/cepli-kaban-siyah-kahve-kaban-13616-33-K.jpg"
                ></span>
                <div class="col col-12 drop-down hover pos-r UrunListeBottom">
                  <div class="row">
                    <a
                      data-url="/cepli-kaban-siyah-kahve"
                      class="productBtn fl zoomBtn hide"
                      >HIZLI GÖRÜNÜM</a
                    >
                    <a
                      href="/cepli-kaban-siyah-kahve"
                      class="image-wrapper fl detailLink"
                    >
                      <span class="imgInner">
                        <img
                          data-src="https://img.manuka.com.tr/cepli-kaban-siyah-kahve-kaban-13616-33-O.jpg"
                          src="/theme/standart/images/lazy_load_yukleniyor.gif"
                          class="lazy stImage"
                          alt=" - CEPLİ KABAN SİYAH-KAHVE"
                        />
                      </span>
                    </a>
                  </div>
                  <div class="row pInfo">
                    <div
                      class="col col-12 productDetails loaderWrapper"
                      style="height: 66.4453px;"
                    >
                      <div class="row drop-down-title">
                        <div class="box col-12">
                          <div class="row">
                            <span class="out-of-stock">YAKINDA</span>
                            <a
                              href="/cepli-kaban-siyah-kahve"
                              title="CEPLİ KABAN SİYAH-KAHVE"
                              class="col col-12 text-description detailLink productTitle"
                              data-id="3394"
                              >CEPLİ KABAN SİYAH-KAHVE</a
                            >
                            <a
                              data-width="500"
                              data-url="/srv/service/customer/login-form"
                              id="favoribtn"
                              class="popupWin fr favouriteBtn loginPopupBtn favoriteBtn"
                            ></a>
                          </div>
                        </div>
                        <input
                          type="hidden"
                          name="subPro33941003"
                          id="subPro33941003"
                          value="0"
                        />
                        <div
                          class="box col-12 proRowAct"
                          id="1003-product-price-cepli-kaban-siyah-kahve"
                          itemprop="offers"
                          itemscope=""
                          itemtype="http://schema.org/Offer"
                        >
                          <span itemprop="priceCurrency" content="TRY"></span>
                          <span itemprop="price" content="249.900012"></span>
                          <span
                            itemprop="availability"
                            content="https://schema.org/OutOfStock"
                          ></span>
                          <span itemprop="itemCondition" content="new"></span>
                          <div class="fl col-12 tooltipWrapper">
                            <div class="fl col-12 productPrice">
                              <div class="fl col-12 priceWrapper flexwrap">
                                <span class="currentPrice">
                                  249,90 TL
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col col-4 col-md-6 col-sm-12 productItem ease"
                id="1003-product-detail-cepli-kaban-kiremit-yesil"
                itemscope="itemscope"
                itemtype="http://schema.org/Product"
              >
                <input type="hidden" class="myProductList" value="3393" />
                <span itemprop="url" content="cepli-kaban-kiremit-yesil"></span>
                <span
                  itemprop="name"
                  content="CEPLİ KABAN KİREMİT-YEŞİL"
                ></span>
                <span itemprop="description" content=""></span>
                <span
                  itemprop="image"
                  content="https://www.manuka.com.tr/cepli-kaban-kiremit-yesil-kaban-15048-33-K.jpg"
                ></span>
                <div class="col col-12 drop-down hover pos-r UrunListeBottom">
                  <div class="row">
                    <a
                      data-url="/cepli-kaban-kiremit-yesil"
                      class="productBtn fl zoomBtn hide"
                      >HIZLI GÖRÜNÜM</a
                    >
                    <a
                      href="/cepli-kaban-kiremit-yesil"
                      class="image-wrapper fl detailLink"
                    >
                      <span class="imgInner">
                        <img
                          data-src="https://img.manuka.com.tr/cepli-kaban-kiremit-yesil-kaban-15048-33-O.jpg"
                          src="/theme/standart/images/lazy_load_yukleniyor.gif"
                          class="lazy stImage"
                          alt=" - CEPLİ KABAN KİREMİT-YEŞİL"
                        />
                      </span>
                    </a>
                  </div>
                  <div class="row pInfo">
                    <div
                      class="col col-12 productDetails loaderWrapper"
                      style="height: 66.4453px;"
                    >
                      <div class="row drop-down-title">
                        <div class="box col-12">
                          <div class="row">
                            <a
                              href="/cepli-kaban-kiremit-yesil"
                              title="CEPLİ KABAN KİREMİT-YEŞİL"
                              class="col col-12 text-description detailLink productTitle"
                              data-id="3393"
                              >CEPLİ KABAN KİREMİT-YEŞİL</a
                            >
                            <a
                              data-width="500"
                              data-url="/srv/service/customer/login-form"
                              id="favoribtn"
                              class="popupWin fr favouriteBtn loginPopupBtn favoriteBtn"
                            ></a>
                          </div>
                        </div>
                        <input
                          type="hidden"
                          name="subPro33931003"
                          id="subPro33931003"
                          value="0"
                        />
                        <div
                          class="box col-12 proRowAct"
                          id="1003-product-price-cepli-kaban-kiremit-yesil"
                          itemprop="offers"
                          itemscope=""
                          itemtype="http://schema.org/Offer"
                        >
                          <span itemprop="priceCurrency" content="TRY"></span>
                          <span itemprop="price" content="249.900012"></span>
                          <span
                            itemprop="availability"
                            content="https://schema.org/InStock"
                          ></span>
                          <span itemprop="itemCondition" content="new"></span>
                          <div class="fl col-12 tooltipWrapper">
                            <div class="fl col-12 productPrice">
                              <div class="fl col-12 priceWrapper flexwrap">
                                <span class="currentPrice">
                                  249,90 TL
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="fl col-12 mb">
          <div class="col col-12 mb">
            <div class="row">
              <div class="box col-12">
                <div class="col col-12 p-left">
                  <span class="fl col-12 totalTab">
                    Toplam 422 ürün görüntüleniyor.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--cache-->
    <div class="PersonaClickDiv col-12 fl">
      <div
        class="personaclick-recommend personaclick-recommend-rendered"
        data-recommender-block="dynamic"
        data-recommender-code="b173a6bc2819bade67cacf6c9a5ae50b"
        data-recommender-callback="PersonaCallBack"
      >
        <div data-categories='["523"]' class="recommender-block-title">
          SON BAKTIKLARINIZ
        </div>
        <div
          class="recommended-items owl-carousel owl-theme owl-loaded owl-drag"
        >
          <div class="owl-stage-outer">
            <div
              class="owl-stage"
              style="transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s; width: 1035px;"
            >
              <div
                class="owl-item active"
                style="width: 162.395px; margin-right: 10px;"
              >
                <div class="recommended-item">
                  <div class="recommended-item-photo">
                    <a
                      href="https://www.manuka.com.tr/ekose-astarli-ceket-mavi?recommended_by=dynamic&amp;recommended_code=b173a6bc2819bade67cacf6c9a5ae50b"
                      ><img
                        class="item_img"
                        src="https://pictures.personaclick.com/resize-images/520/76c817929f9164580e7d674b8e21b0/201759536.jpg"
                    /></a>
                  </div>
                  <div class="recommended-item-title">
                    <a
                      href="https://www.manuka.com.tr/ekose-astarli-ceket-mavi?recommended_by=dynamic&amp;recommended_code=b173a6bc2819bade67cacf6c9a5ae50b"
                      >ekose astarlı ceket mavi</a
                    >
                  </div>

                  <div class="persona-item-price">
                    219,90 TL
                  </div>
                </div>
              </div>
              <div
                class="owl-item active"
                style="width: 162.395px; margin-right: 10px;"
              >
                <div class="recommended-item">
                  <div class="recommended-item-photo">
                    <a
                      href="https://www.manuka.com.tr/denim-ceket-lila?recommended_by=dynamic&amp;recommended_code=b173a6bc2819bade67cacf6c9a5ae50b"
                      ><img
                        class="item_img"
                        src="https://pictures.personaclick.com/resize-images/520/76c817929f9164580e7d674b8e21b0/197671059.jpg"
                    /></a>
                  </div>
                  <div class="recommended-item-title">
                    <a
                      href="https://www.manuka.com.tr/denim-ceket-lila?recommended_by=dynamic&amp;recommended_code=b173a6bc2819bade67cacf6c9a5ae50b"
                      >denim ceket lila</a
                    >
                  </div>

                  <div class="persona-item-price">
                    179,90 TL
                  </div>
                </div>
              </div>
              <div
                class="owl-item active"
                style="width: 162.395px; margin-right: 10px;"
              >
                <div class="recommended-item">
                  <div class="recommended-item-photo">
                    <a
                      href="https://www.manuka.com.tr/fitilli-triko-elbise-sutlu-kahve-3499?recommended_by=dynamic&amp;recommended_code=b173a6bc2819bade67cacf6c9a5ae50b"
                      ><img
                        class="item_img"
                        src="https://pictures.personaclick.com/resize-images/520/76c817929f9164580e7d674b8e21b0/201663744.jpg"
                    /></a>
                  </div>
                  <div class="recommended-item-title">
                    <a
                      href="https://www.manuka.com.tr/fitilli-triko-elbise-sutlu-kahve-3499?recommended_by=dynamic&amp;recommended_code=b173a6bc2819bade67cacf6c9a5ae50b"
                      >fitilli triko elbise sütlü ...</a
                    >
                  </div>

                  <div class="persona-item-price">
                    129,90 TL
                  </div>
                </div>
              </div>
              <div
                class="owl-item active"
                style="width: 162.395px; margin-right: 10px;"
              >
                <div class="recommended-item">
                  <div class="recommended-item-photo">
                    <a
                      href="https://www.manuka.com.tr/ekose-plisole-etek-yesil?recommended_by=dynamic&amp;recommended_code=b173a6bc2819bade67cacf6c9a5ae50b"
                      ><img
                        class="item_img"
                        src="https://pictures.personaclick.com/resize-images/520/76c817929f9164580e7d674b8e21b0/201800942.jpg"
                    /></a>
                  </div>
                  <div class="recommended-item-title">
                    <a
                      href="https://www.manuka.com.tr/ekose-plisole-etek-yesil?recommended_by=dynamic&amp;recommended_code=b173a6bc2819bade67cacf6c9a5ae50b"
                      >ekose plisole etek yeşil</a
                    >
                  </div>

                  <div class="persona-item-price">
                    149,90 TL
                  </div>
                </div>
              </div>
              <div
                class="owl-item active"
                style="width: 162.395px; margin-right: 10px;"
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

                  <div class="persona-item-price">
                    279,90 TL
                  </div>
                </div>
              </div>
              <div
                class="owl-item active"
                style="width: 162.395px; margin-right: 10px;"
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

                  <div class="persona-item-price">
                    299,90 TL
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
  </div>
</template>

<style>
.PersonaClickDiv.col-12.fl {
  width: 97% !important;
  margin-left: 1.5% !important;
}
.personaclick-recommend .recommended-items .recommended-item:hover {
  -webkit-box-shadow: unset !important;
  box-shadow: unset !important;
  border: unset !important;
}
.personaclick-recommend {
  float: left;
  width: 100% !important;
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
.personaclick-recommend .recommended-items .recommended-item {
  border: unset !important;
  width: unset !important;
  height: unset !important;
  margin: 0 !important;
}
.personaclick-recommend
  .recommended-items
  .recommended-item
  .recommended-item-photo {
  margin: 0px 0px 6px 0px !important;
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
  left: -65px !important;
}
.personaclick-recommend .owl-prev:after {
  visibility: visible !important;
  content: "";
  width: 30px;
  height: 30px;
  display: block;
  background: url(/Data/EditorFiles/tema/svg/back.svg) no-repeat center !important;
}
.personaclick-recommend .owl-next {
  position: absolute;
  top: 40%;
  visibility: hidden;
  height: 30px !important;
  width: 30px !important;
  right: -65px !important;
}
.personaclick-recommend .owl-next:after {
  visibility: visible !important;
  content: "";
  width: 30px;
  height: 30px;
  display: block;
  background: url(/Data/EditorFiles/tema/svg/right.svg) no-repeat center !important;
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
  .personaclick-recommend .recommended-items .recommended-item {
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
  .personaclick-recommend .recommended-items .recommended-item {
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
<style>
.personaclick-recommend .recommended-items .recommended-item:hover {
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
.personaclick-recommend .recommended-items .recommended-item {
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
  background: url(/Data/EditorFiles/tema/svg/back.svg) no-repeat center !important;
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
  background: url(/Data/EditorFiles/tema/svg/right.svg) no-repeat center !important;
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
  .personaclick-recommend .recommended-items .recommended-item {
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
  .personaclick-recommend .recommended-items .recommended-item {
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

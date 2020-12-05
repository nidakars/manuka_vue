--MANUKA 10 COMPONENT--
<template>
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
                        href="/home"
                        title="Anasayfa"
                        class="fl navHome"
                        itemprop="url"
                      >
                        <span itemprop="title">Anasayfa ></span>
                      </a>
                    </li>
                    <li
                      itemscope=""
                      itemtype="http://data-vocabulary.org/Breadcrumb"
                      class="fl"
                    >
                      <a href="/giyim" title="giyim" itemprop="url" class="fl">
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
                          <li class="fl col-12 parent"></li>
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
                            class="box col-12 fValuesBox "
                            style="display: none;"
                          >
                            <div class="fl col-12 fVariantBox FilterScroll">
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
                                  <!--(1)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_247"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="247"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_247"
                                    value="247"
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
                                  LAVANTA
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
                                  <!--(2)-->
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
                                  <!--(10)-->
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
                                  <!--(2)-->
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
                                  <!--(1)-->
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
                                  <!--(2)-->
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
                                  <!--(3)-->
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
                                  <!--(9)-->
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
                                  <!--(3)-->
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
                                  <!--(7)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_305"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="305"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_305"
                                    value="305"
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
                                  KÖRİ
                                  <!--(1)-->
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
                                  <!--(3)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_308"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="308"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_308"
                                    value="308"
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
                                  PASTEL MAVİ
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
                                  <!--(2)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_298"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="298"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_298"
                                    value="298"
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
                                  KOYU GRİ
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
                            Beden
                          </div>
                          <div class="box col-12 fValuesBox">
                            <div class="col col-12 fVariantBox FilterScroll">
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
                                  <!--(27)-->
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
                                  <!--(27)-->
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
                                  <!--(3)-->
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
                                  <!--(3)-->
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
                                  <!--(3)-->
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
                                  <!--(3)-->
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
                                  <!--(30)-->
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
                          <div class="box col-12 fValuesBox fPriceSliderBox">
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
                                      data-min-value="9"
                                      value="9"
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
                            <div class="fl col-12 mb forDesktop FilterScroll">
                              <div id="priceSlider" class="fl col-12 col-sm-12">
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
                                <span id="min-price" class="fl" data-min="9"
                                  >9 TL</span
                                >
                                <span id="max-price" class="fr" data-max="350"
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
              <div class="col col-12 text-semibold SortBtn">Sıralama seçin</div>
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
                  <option value="0" selected="">Varsayılan Sıralama</option>
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
</template>

<script>
export default {
  name: "Lmenu",
  components: {},
  data() {
    return {
      kategoriler: false,
      renk: false,
      beden: false,
      fiyat: false,
      kilif: false,
      corap: false,
    };
  },
};
</script>

<style scoped>
.col-12 {
  width: 100%;
}
#navigasyon li:after {
  content: "";
  background: url("/Data/EditorFiles/tema/img/nav-ok.png") no-repeat right
    center;
  float: left;
  width: 6px;
  height: 13px;
}
</style>

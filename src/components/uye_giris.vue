--MANUKA 7 COMPONENT--
<template>
  <div
    class="pWrapper"
    style="visibility: visible; display: block;"
    data-name="myPopupWin"
  >
    <div class="flex">
      <div class="pBg close" style="z-index:9980;"></div>
      <div
        style="width:500px;margin:0 auto;;z-index:9981;"
        class="pWin box whiteBg    br5"
        id="myPopupWin"
      >
        <div class="pClose close"></div>
        <div class="pText col col-12">
          <div class="row oh">
            <!--cache-->
            <div class="col col-12 loaderWrapper" id="popup-login">
              <div class="col popupInnerBlock">
                <div class="box col-12 xlarge">
                  Üye giriş bilgilerini giriniz.
                </div>
                <div class="fl col-12">
                  <div class="fl col-12">
                    <ul class="fl col-12" id="popup-login-inputs">
                      <li class="fl col-12">
                        <div class="box col-12 form-control xlarge">
                          <div class="row input-icon tooltipWrapper">
                            <span class="icon icon-mail"></span>
                            <input
                              type="text"
                              placeholder="E-Mail"
                              name="pop-email"
                              id="pop-email"
                              value=""
                              class="col col-12 withHolder loadedPlace personaclick-initialized"
                            />
                            <span class="col ease placeholder">E-Mail</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="box col-12 form-control xlarge tooltipWrapper">
                  <div class="row input-icon tooltipWrapper">
                    <span class="icon icon-pass"></span>
                    <input
                      type="password"
                      placeholder="Şifre"
                      name="pop-password"
                      id="pop-password"
                      value=""
                      class="col col-12 withHolder loadedPlace"
                    />
                    <span class="col ease placeholder">Şifre</span>
                  </div>
                </div>
                <div
                  class="box col-12 form-control tooltipWrapper"
                  style="display:none;"
                >
                  <div class="row mb input-icon">
                    <img
                      id="pop-code"
                      data-limit="9999"
                      class="secCode"
                      src="/SecCode.php?1509621554748"
                    />
                    <input
                      type="text"
                      id="pop-security"
                      name="pop-security"
                      placeholder="Güvenlik Kodu"
                      class="col col-12 mail required withHolder loadedPlace personaclick-initialized"
                      style="height: 30px;"
                    />
                    <span class="col ease placeholder">Güvenlik Kodu</span>
                  </div>
                </div>
                <div class="box col-12">
                  <div class="row">
                    <a
                      data-prefix="pop-"
                      data-callback="popMemberLoginFn"
                      class="login btn col-12 btn-default btn-big btn-upper btn-radius a-center"
                      id="popup-member-login"
                      >Giriş Yap</a
                    >
                  </div>
                </div>
                <div class="col col-12">
                  <div class="row">
                    <a
                      href="/uye-sifre-hatirlat"
                      class="fr form-link info"
                      target="_blank"
                      id="popup-member-forgot-password"
                      >Şifremi Unuttum</a
                    >
                  </div>
                </div>
                <div class="col col-12">
                  <div class="row">
                    <a
                      href="/uye-kayit"
                      class="fr form-link"
                      id="popup-member-register"
                      >Üye Ol</a
                    >
                  </div>
                </div>
                <div class="row"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

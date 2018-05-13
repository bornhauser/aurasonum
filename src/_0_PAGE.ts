import {Component, ViewChild} from '@angular/core';
import {Content, PopoverController, Slides} from 'ionic-angular';
import * as $ from 'jquery';

@Component({
  host: {'[class]': "'mainNavigation'"},
  template: `


    <ion-header class="mainHeader">
      <ion-navbar>

        <div class="navbarButtonContainer" *ngIf="mainSlides.getActiveIndex() > -1">


          <div class="navbarButtonStrip">

            <div class="buttonGroupLeft">
              <div class="va1">
                <div class="va2">
                  <p>HSL / ASM</p>
                </div>
              </div>
            </div>

            <div class="buttonGroupRight">

              <button class="icon-button" ion-button icon-only (tap)="goToSlide(0)">
                <div class="icon-button-icon _home" [ngClass]="{'active': mainSlides.getActiveIndex() === 0}"></div>
              </button>

              <button class="icon-button" ion-button icon-only (tap)="goToSlide(1)">
                <div class="icon-button-icon _TIC" [ngClass]="{'active': mainSlides.getActiveIndex() === 1}"></div>
              </button>

              <button class="icon-button" ion-button icon-only (tap)="goToSlide(2)">
                <div class="icon-button-icon _products" [ngClass]="{'active': mainSlides.getActiveIndex() === 2}"></div>
              </button>

              <button class="icon-button" ion-button icon-only (tap)="goToSlide(3)">
                <div class="icon-button-icon _repare" [ngClass]="{'active': mainSlides.getActiveIndex() === 3}"></div>
              </button>

              <button class="icon-button" ion-button icon-only (tap)="goToSlide(4)">
                <div class="icon-button-icon _contact" [ngClass]="{'active': mainSlides.getActiveIndex() === 4}"></div>
              </button>

              <button *ngIf="isLoggedIn" class="icon-button" ion-button icon-only (tap)="goToSlide(5)">
                <div class="icon-button-icon _retailer" [ngClass]="{'active': mainSlides.getActiveIndex() === 5}"></div>
              </button>

            </div>

          </div>
        </div>

      </ion-navbar>
      <button class="logoButton .disable-hover" ion-button icon-only (click)="goToSlide(0)">
        <h1>T.I.C</h1>
      </button>
    </ion-header>


    <ion-content class="main-content no-scroll">

      <ion-slides #mainSlides class="mainSlides" speed="500">

        <!--------------------------------------------------------------------->
        <!--HOME-->
        <ion-slide id="home">

          <ion-slides #imageSlider class="imageSlider" pager="false" direction="vertical" effect="fade"
                      speed="1500" loop="true" autoplay="3500">
            <ion-slide>
              <div class="sliderImage _1"></div>
            </ion-slide>

            <ion-slide>
              <div class="sliderImage _2"></div>
            </ion-slide>

            <ion-slide>
              <div class="sliderImage _3"></div>
            </ion-slide>

            <h1 class="headerTitle">Klang-Perfektion in Handarbeit</h1>

          </ion-slides>


          <div class="zitat">
            <p>„Bevor du nicht 99 von 100 Schritten getan hast, sollst du nicht behaupten, du hättest bereits die
              Hälfte geschafft“. <span>Chinesisches Sprichwort</span></p>
          </div>

          <div class="item left">
            <div class="va1">
              <div class="va2">

                <div class="picture _entwicklung"></div>
                <div class="box">
                  <h2>Harmonie als Klang-Basis</h2>
                  <div class="line"></div>
                  <p>Weichenbauteile und Schwingkreise haben nicht nur definierte elektrische Grössen, sondern auch
                    eigenständige Charaktere, die miteinander harmonieren wollen. Stimmt das Zusammenspiel, entsteht
                    die perfekte akustische Reproduktion, Musik wird real und zum mitreissenden Klangerlebnis.
                    <span> Urs Batt & Stefan Moser</span></p>
                </div>
              </div>
            </div>
          </div>


          <div class="link-box" (tap)="goToSlide(1)">
            T.I.C.- Schaltung
            <ion-icon name="ios-arrow-forward-outline"></ion-icon>
          </div>
          <div class="link-box" (tap)="goToSlide(2)">
            Unsere Produkte
            <ion-icon name="ios-arrow-forward-outline"></ion-icon>
          </div>
          <div class="link-box" (tap)="goToSlide(3)">
            Unser Service
            <ion-icon name="ios-arrow-forward-outline"></ion-icon>
          </div>
          <div class="link-box" (tap)="goToSlide(4)">
            Kontakte und Partner
            <ion-icon name="ios-arrow-forward-outline"></ion-icon>
          </div>

          <div class="middleSpacing"></div>

        </ion-slide>

        <!--------------------------------------------------------------------->
        <!--T.I.C-->
        <ion-slide id="TIC">

          <div class="picture header _TIC_header">
            <h1 class="headerTitle">True Impulse Circuit</h1>
          </div>


          <div class="item left">

            <div class="box">

              <h2>True Impulse Circuit</h2>
              <div class="line"></div>
              <p>T.I.C ist eine von AuraSonum entwickelte Schaltung zur Verbesserung der
                Impulssynchronität von Mittel- und Hochtöner in deren Übernahmebereich, sowie der Entzerrung von
                Obertonverschiebungen.</p>
              <p>Weil das Gehör bereits kleinste zeitliche Verzerrungen in der Impulsabfolge wahrnimmt, ist eine
                Abstimmung der Imulssynchronität zentral für die klangliche Authentizität von Musikmaterial.
                Ist eine Frequenzweiche fertig aufgebaut, kann sie mit dem T.I.C. entscheidend optimiert werden.
                Aussortiert werden die Bauteile mit Messgeräten, die Feinabstimmung erfolgt durch Hörproben,
                manuell.</p>
              <p>Die Werte der T.I.C.-Komponenten sind so gewählt, dass sie eine Feinjustierung der
                Impulssynchronität ermöglichen, ohne dabei die Trennfrequenz nach oben- oder unten zu verschieben.
                Ein gut eingestellter T.I.C. verbessert das Dynamik-Empfinden, die Transparenz und erhöht die
                räumliche Darstellung.</p>


              <a href="./assets/img/pictures/TIC.png" target="_blank">
                <div class="picture _TIC"></div>
              </a>
            </div>
          </div>

          <div class="link-box" (tap)="goToSlide(2)">
            Unsere Produkte
            <ion-icon name="ios-arrow-forward-outline"></ion-icon>
          </div>
          <div class="link-box" (tap)="goToSlide(3)">
            Unser Service
            <ion-icon name="ios-arrow-forward-outline"></ion-icon>
          </div>
          <div class="link-box" (tap)="goToSlide(4)">
            Kontakte und Partner
            <ion-icon name="ios-arrow-forward-outline"></ion-icon>
          </div>

        </ion-slide>

        <!--------------------------------------------------------------------->
        <!--PRODUKT-->
        <ion-slide id="produkte">

          <div class="picture header _prismaBackground">
          </div>

          <div class="picture _prisma">
            <a href="./assets/img/pictures/prisma_5.png" target="_blank"></a>
          </div>

          <div class="item left">
            <div class="va1">
              <div class="va2">
                <div class="box">
                  <h2>Prisma TL</h2>
                  <div class="line"></div>
                  <p>Ein Standlautsprecher für alle Anforderungen. 2-Wege-Prinzip in schlanker
                    Transmission-Line-Ausführung.
                    Das ganzheitlich durchdachte Audio-Design vereint präzise Wiedergabe mit klanglicher Wärme und
                    sichert
                    dadurch bleibenden Musikgenuss.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="item left small">
            <div class="box">
              <table>
                <tr>
                  <th colspan="2">Technische Daten</th>
                </tr>
                <tr>
                  <td>Frequenzgang</td>
                  <td>25 - 22'000 Hz</td>
                </tr>
                <tr>
                  <td>Empfindlichkeit</td>
                  <td>86 dB</td>
                </tr>
                <tr>
                  <td>Trennfrequenz</td>
                  <td>2500 Hz</td>
                </tr>
                <tr>
                  <td>High-Switch (MK II)</td>
                  <td>- 2 dB ab 4000 Hz</td>
                </tr>
                <tr>
                  <td>Impedanz</td>
                  <td>8 Ohm</td>
                </tr>
                <tr>
                  <td>Leistung (mus./max.)</td>
                  <td>180 W / 250 W</td>
                </tr>
                <tr>
                  <td>Anschlussterminal</td>
                  <td>4 mm Ban.-Stecker / Schraubklemmen</td>
                </tr>
                <tr>
                  <td>Dimensionen (B x H x T)</td>
                  <td>230 x 1010 x 260</td>
                </tr>
                <tr>
                  <td>Gewicht</td>
                  <td>19.8 Kg</td>

                </tr>
              </table>
              <p class="table-appendix">(Technische Änderungen vorbehalten)</p>


              <div class="middleSpacing"></div>
              <p>
                Schalldruckfrequenzgang axial und bei 30"
              </p>

              <a href="./assets/img/pictures/kurve.png" target="_blank">
                <div class="picture _frequenzgang"></div>
              </a>

            </div>
          </div>


          <div class="item left">
            <div class="box">
              <h2>Wählen Sie ihren Farbton</h2>
              <div class="line"></div>
              <p>Damit sich der Lautsprecher optimal in ihre Wohnung integriert, kann dieser mit einem Farbton nach
                ihrer Wahl und ohne Preisaufschlag bestellt werden (RAL, NCS und nach Farbmuster).</p>
            </div>
            <div class="picture _color"></div>
          </div>

          <div class="item left">
            <div class="box">
              <h2>Anschluss-Terminal</h2>
              <div class="line"></div>
              <p>Universelle Polklemmen für den Anschluss von Gabel- und Bananensteckern 4/8 mm und abisolierter Litze
                bis 5mm<sup>2</sup></p>
            </div>
            <div class="picture _backsite"></div>
          </div>

          <div class="item left">
            <div class="box  _price">
              <h2>Preis: <span class="price">CHF 5700.– (Paar)</span></h2>
            </div>
          </div>

          <div class="link-box" (tap)="goToSlide(3)">
            Unser Service
            <ion-icon name="ios-arrow-forward-outline"></ion-icon>
          </div>
          <div class="link-box" (tap)="goToSlide(4)">
            Kontakte und Partner
            <ion-icon name="ios-arrow-forward-outline"></ion-icon>
          </div>


        </ion-slide>

        <!--------------------------------------------------------------------->
        <!--SERVICE-->
        <ion-slide id="service">

          <div class="picture header _service">
            <h1 class="headerTitle">Unser Service</h1>
          </div>


          <div class="item left">
            <div class="va1">
              <div class="va2">
                <div class="picture _ankauf"></div>
                <div class="box">
                  <h2>Lautsprecher-Ankauf</h2>
                  <div class="line"></div>
                  <p>Ihre alten Lautsprecher sind nicht wertlos<br>
                    Gerne unterbreiten wir ihnen unser Angebot</p>
                </div>
              </div>
            </div>
          </div>

          <div class="item right">
            <div class="va1">
              <div class="va2">
                <div class="box">
                  <h2>Technische Unterstützung</h2>
                  <div class="line"></div>
                  <p>Wir unterstützen Sie bei der Optimierung ihrer Hi-Fi / High End Anlage, um die Qualität ihrer
                    Komponenten besser zur Geltung kommen zu lassen.</p>
                </div>
                <div class="picture _support2"></div>
              </div>
            </div>
          </div>

          <div class="item left">
            <div class="va1">
              <div class="va2">
                <div class="picture _support"></div>
                <div class="box _moreText">
                  <h2>Raumakustik</h2>
                  <div class="line"></div>
                  <p>Wir beraten Sie zu raumakustische Möglichkeiten und Verbesserungen.</p>
                </div>
              </div>
            </div>
          </div>
          

          <div class="link-box" (tap)="goToSlide(4)">
            Kontakte und Partner
            <ion-icon name="ios-arrow-forward-outline"></ion-icon>
          </div>


        </ion-slide>

        <!--------------------------------------------------------------------->
        <!--KONTAKT-->
        <ion-slide id="kontakt">

          <div class="picture header _map">
            <h1 class="headerTitle">Unser Standort</h1>
          </div>


          <div class="item left">
            <div class="va1">
              <div class="va2">

                <div class="picture _contact"></div>
                <div class="box">

                  <div class="picture logo-kontakt"></div>

                  <p>Zwinglistrasse 18 | 3007 Bern</p>


                  <p>Telefon
                    <a href="tel:0313726282">031 372 62 82</a> oder
                    <a href="tel:0797367336">079 736 73 36</a>
                  </p>
                  <p>eMail <a href="mailto:ub@bv-technik.ch">ub@bv-technik.ch</a></p>
                </div>
              </div>

            </div>
          </div>


          <div class="item left">
            <div class="va1">
              <div class="va2">

                <div class="picture _rohrer"></div>
                <div class="box">
                  <h2>Unser Händler in Toffen</h2>
                  <div class="line"></div>
                  <p><b>Rohrer HighEnd</b> | <a href="http://rohrerhifi.org" target="_blank">rohrerhifi.org</a></p>
                </div>
              </div>
            </div>
          </div>

          <div class="item left">
            <div class="va1">
              <div class="va2">

                <div class="picture _loeffel"></div>
                <div class="box">
                  <h2>Unser Händler in Bern</h2>
                  <div class="line"></div>
                  <p><b>HiFi-Studio Loeffel</b> | <a href="http://hifi-studio.ch" target="_blank">hifi-studio.ch</a></p>
                </div>
              </div>
            </div>
          </div>

          <div class="item left">
            <div class="va1">
              <div class="va2">

                <div class="picture _wohlklang"></div>
                <div class="box">
                  <h2>Unser Händler in Bern-Weissenbühl</h2>
                  <div class="line"></div>
                  <p><b>Wohlklang Audio</b> | 031 371 04 71 | 079 736 73 36</p>
                </div>
              </div>
            </div>
          </div>


          <div class="item left">
            <div class="va1">
              <div class="va2">

                <div class="box login">

                  <h2>Login für Händler</h2>

                  <div class="line"></div>

                  <p class="smallLabel">Um einen Benutzernamen mit Passwort für das Login zu erhalten, senden Sie uns
                    bitte eine E-Mail mit ihrer Anfrage zu.</p>

                  <p>eMail: <a href="mailto:ub@bv-technik.ch">ub@bv-technik.ch</a></p>

                  <div class="middleSpacing"></div>

                  <form>
                    <input type="text" placeholder="Benutzername" [(ngModel)]="input.username" name="name">
                    <input type="password" placeholder="Passwort" [(ngModel)]="input.password" name="password">
                    <input type="submit" value="Login" (click)="logIn()">
                  </form>

                  <p *ngIf="showErrorMessage" class="errorMessage">Name oder Passwort ist nicht korrekt.</p>

                </div>
              </div>

            </div>
          </div>

        </ion-slide>


        <!--------------------------------------------------------------------->
        <!--Retailer-->
        <ion-slide *ngIf="isLoggedIn" id="retailer">

          <div class="picture header _retailer">
            <h1 class="headerTitle">Händlerseite</h1>
          </div>


          <div class="item left small">
            <div class="box">
              <h2>HändlerPreise</h2>
              <div class="middleSpacing"></div>
              <table>
                <tr>
                  <th colspan="2">Produkt</th>
                  <th>Nettopreis<span>(Paar)</span></th>
                  <th>Bruttopreis<span>(Paar)</span></th>
                  <th>Marge</th>
                </tr>
                <tr>
                  <td>
                    <div class="picture _prisma"></div>
                  </td>
                  <td><b>Prisma TL</b></td>
                  <td>CHF 3130.–</td>
                  <td>CHF 5700.–</td>
                  <td>~45%</td>
                </tr>
              </table>

            </div>
          </div>


          <div class="item left">
            <div class="va1">
              <div class="va2">
                <div class="box">
                  <h2>Lieferfristen</h2>
                  <div class="line"></div>
                  <p>Derzeitige Lieferfrist für alle Produkte ca. 2-3 Wochen</p>
                </div>
              </div>
            </div>
          </div>

          <div class="item left">
            <div class="va1">
              <div class="va2">
                <div class="box">
                  <h2>Garantie</h2>
                  <div class="line"></div>
                  <p>Auf alle AuraSonum-Produkte gewähren wir 10 Jahre Garantie (Ersatzteile und Service)</p>
                </div>
              </div>
            </div>
          </div>

          <div class="item left">
            <div class="va1">
              <div class="va2">
                <div class="box">
                  <h2>Bankverbindung</h2>
                  <div class="line"></div>
                  <p>Postfinance Bern</p>
                  <p>Postparc Bern</p>
                  <p>IBAN CH07 0900 0000 3011 4360 1</p>
                  <p>Konto 30-114360-1</p>

                  <div class="middleSpacing"></div>
                  <p>Unsere Firma ist (noch) nicht mehrwertsteuerpflichtig. Die Bruttopreise verstehen sich inkl.
                    MwSt.</p>
                  <div class="middleSpacing"></div>

                  <p>AuraSonum</p>
                  <p>Zwinglistrasse 18</p>
                  <p>3007 Bern</p>
                  <p>Telefon 031 372 62 82 | Fax 031 373 62 83</p>
                  <p>eMail: <a href="mailto:ub@bv-technik.ch">ub@bv-technik.ch</a></p>

                </div>
              </div>
            </div>
          </div>

        </ion-slide>

      </ion-slides>

    </ion-content>

    <ion-footer>
      <div class="va1">
        <div class="va2">
          <p>© 2018 AuraSonum | Zwinglistrasse 18, 3007 Bern | <a href="mailto:ub@bv-technik.ch">ub@bv-technik.ch</a>
          </p>
        </div>
      </div>
    </ion-footer>


  `
})
export class Navigation {
  constructor() {
  }


  ionViewDidEnter() {
    $(window).resize(() => {
      // console.log("resize");
      this.content.resize();
      this.mainSlides.update();
      this.imageSlider.update();
    });

    this.mainSlides.lockSwipes(true);

    // this.isLoggedIn = true;
    // this.goToSlide(2);

  }


  @ViewChild(Slides) slides: Slides;

  public input = {
    username: "",
    password: ""
  };

  private showErrorMessage = false;

  private isLoggedIn = false;

  public logIn() {

    if (this.input.username === "asm" && this.input.password === "99schritte") {
      this.isLoggedIn = true;
      this.goToSlide(5);
      this.showErrorMessage = false;
    } else {
      this.showErrorMessage = true;
    }

  }

  @ViewChild(Content) content: Content;
  @ViewChild('mainSlides') mainSlides: Slides;
  @ViewChild('imageSlider') imageSlider: Slides;


  private goToSlide(index) {
    this.slides.lockSwipes(false);
    this.mainSlides.slideTo(index);
    this.slides.lockSwipes(true);
  }
}


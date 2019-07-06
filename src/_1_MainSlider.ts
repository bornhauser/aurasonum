import {Component, ViewChild} from '@angular/core';
import {Content, Slides} from 'ionic-angular';

declare var jQuery: any;
declare var window: any;

@Component({
  host: {'[class]': "'mainNavigation'"},
  template: `

    <ion-header class="mainHeader">
      <ion-navbar>

        <div class="navbarButtonContainer" *ngIf="mainSlides.getActiveIndex() > -1">

          <div class="navbarButtonStrip">

            <div class="hsl-asm">
              <div class="va1">
                <div class="va2">
                  <p>HSL | ASM</p>
                </div>
              </div>
            </div>

            <div class="buttonGroupRight">

              <button class="icon-button" ion-button icon-only (tap)="goToSlide(0)">
                <div class="icon-button-icon _home" [ngClass]="{'active': mainSlides.getActiveIndex() === 0}"></div>
              </button>

              <button class="icon-button" ion-button icon-only (tap)="goToSlide(1)">
                <div class="icon-button-icon _products" [ngClass]="{'active': mainSlides.getActiveIndex() === 1}"></div>
              </button>

              <button class="icon-button" ion-button icon-only (tap)="goToSlide(2)">
                <div class="icon-button-icon _repare" [ngClass]="{'active': mainSlides.getActiveIndex() === 2}"></div>
              </button>

              <button class="icon-button" ion-button icon-only (tap)="goToSlide(3)">
                <div class="icon-button-icon _contact" [ngClass]="{'active': mainSlides.getActiveIndex() === 3}"></div>
              </button>

              <button *ngIf="isLoggedIn" class="icon-button" ion-button icon-only (tap)="goToSlide(4)">
                <div class="icon-button-icon _retailer" [ngClass]="{'active': mainSlides.getActiveIndex() === 4}"></div>
              </button>

            </div>


            <div class="hamburger-menu" (click)="toggleMenu()">

              <div class="icon-button-icon _hamburger" [ngClass]="{'active': mainSlides.getActiveIndex() === 5}"></div>

              <div class="menu-list">
                <button (tap)="goToSlide(0)">
                  Home
                </button>

                <button (tap)="goToSlide(1)">
                  Unsere Produkte
                </button>

                <button (tap)="goToSlide(2)">
                  Unser Service
                </button>

                <button (tap)="goToSlide(3)">
                  Kontakt
                </button>

                <button *ngIf="isLoggedIn" (tap)="goToSlide(4)">
                  Händler
                </button>
              </div>
            </div>
          </div>

        </div>

      </ion-navbar>
      <!--Logo-->
      <button class="logoButton .disable-hover" ion-button icon-only (click)="goToSlide(0)">
        <h1>T.I.C</h1>
      </button>
    </ion-header>


    <ion-content class="main-content no-scroll">

      <ion-slides #mainSlides class="mainSlides" speed="500" (ionDrag)="onIonDrag($event)">

        <!--------------------------------------------------------------------->
        <!--HOME-->
        <ion-slide id="home">

          <div class="imageSliderContainer">
            <div class="imageSlider">
              <div class="sliderImage _1"></div>
              <div class="sliderImage _2"></div>
              <div class="sliderImage _3"></div>
            </div>
          </div>

          <div class="slider-strip">
            Lautsprecherbau und Entwicklung in Bern-Weissenbühl | Charmante Lautsprecher für charmante Leute, von Hand
            gefertigt | AuraSonum - swissmade | www.aurasonum.ch
          </div>

          <div class="the-content">

            <div class="item-box">
              <div class="row">
                <div class="picture _1"></div>
                <div class="text-box">
                  <h2>Harmonie als Klang-Basis</h2>
                  <div class="line"></div>
                  <p>Ohne Zeitdruck, aber mit grosser Sorgfalt Lautsprecher zu produzieren, ist Teil unseres Konzepts.
                    Wir wissen, dass die Bauteile einer Frequenzweiche nicht nur
                    messbare, elektrische Grössen haben, sondern auch eigene \`Charaktere\` die beim Durchqueren
                    eines Audiosignals sicht- und hörbar werden. Harmoniert die Zusammensetzung der Bauteile,
                    gelingt dem fertigen Lautsprecher die perfekte musikalische Reproduktion. Alle Weichen-Bauteile
                    werden von uns
                    paarweise selektiert und mit möglichst kurzen Verbindungswegen miteinander verlötet. Das
                    gewährleistet eine nochmals verbesserte Signalübertragung. <span> Urs Batt & Stefan Moser</span>
                  </p>
                </div>
              </div>
            </div>

            <div class="item-box">
              <div class="row">
                <div class="picture _3"></div>
                <div class="text-box">
                  <h2>True Impulse Circuit</h2>
                  <div class="line"></div>
                  <p>T.I.C. Ist eine von AuraSonum entwickelte Schaltung mit der sich die Impulsüberlagerung von Bass-,
                    Mittel- und Hochtöner perfektionieren lässt. Weil das Gehör
                    bereits minimale Unterschiede in der Impulsabfolge wahrnehmen kann, wirkt sich diese Massnahme
                    positiv auf die Echtheit des reproduzierten Klanges aus.
                    Die Schaltung entstand während der Entwicklung einer Frequenzweiche und wird, da sie der
                    Musikdarbietung ihre ursprüngliche Dynamik zurück gibt, bei all unseren Lautsprechern eingesetzt.
                    &nbsp;
                    <a class="text-link" href="./assets/img/pictures/TIC.png" target="_blank">DIAGRAMM</a></p>
                </div>
              </div>
            </div>

            <div class="small-spacing"></div>

            <div class="link-box" (tap)="goToSlide(1)">
              Unsere Produkte
              <ion-icon name="ios-arrow-forward-outline"></ion-icon>
            </div>
            <div class="link-box" (tap)="goToSlide(2)">
              Unser Service
              <ion-icon name="ios-arrow-forward-outline"></ion-icon>
            </div>
            <div class="link-box" (tap)="goToSlide(3)">
              Kontakte und Partner
              <ion-icon name="ios-arrow-forward-outline"></ion-icon>
            </div>

          </div>

          <div class="footer-strip"></div>

        </ion-slide>

        <!--------------------------------------------------------------------->
        <!------------PRODUKTE------------------>

        <ion-slide id="produkte">

          <div class="picture header _prismaBackground">
            <p class="no-see">Lautsprecherbau im Kanton Bern mit Lautsprecher-Ankauf, Lautsprecher-Reparaturen und
              Lautsprecher-Sonderanfertigungen. Wir entwickeln wohnliche Lautsprecher mit unverfälschtem Klang.
              Schweizerprodukt und ambitionierter High-End Testsieger. Das beste für ihre Stereoanlage sind
              klangneutrale Schallwandler mit natürlicher Musikwiedergabe.
            </p>
          </div>


          <div class="the-content">

            <div class="item-box less-margin">

              <div class="picture _prisma buttonLike" (click)="openModal('prisma')">
                <!--<p class="price"><b>CHF 5700.–</b> (Paarpreis)</p>-->
              </div>

              <div class="row has-picture-right">
                <div class="text-box">
                  <h1>Prisma TL
                    <small>Die neue Dimension der Klangtreue</small>
                  </h1>
                  <div class="line"></div>
                  <p>Ein Standlautsprecher für alle Anforderungen. 2-Wege-Prinzip in schlanker
                    Transmission-Line-Ausführung.
                    Das ganzheitlich durchdachte Audiokonzept vereint präzise Wiedergabe mit klanglicher Wärme und
                    sichert dadurch bleibenden Musikgenuss.
                  </p>
                </div>
              </div>


              <div class="row has-picture-right table">
                <div class="text-box">

                  <table class="tech-table">
                    <tr class="first">
                      <th colspan="2">Technische Daten
                        <a class="diagramm" href="./assets/img/pictures/kurve.png" target="_blank">Diagramm</a>
                      </th>
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

                    <tr>
                      <td class="go-top">Besonderheiten</td>
                      <td>Transmissionline-Kanal für klar konturierte Bässe.
                        Doppelmagnet-Hochtonwandler mit leichter Magnesium-
                        Kalotte. T.I.C. abgestimmt.
                        <br>
                        <br>
                        <b>Paarpreis: CHF 5700.–</b>
                      </td>
                    </tr>
                  </table>
                  <p class="table-appendix">(Technische Änderungen vorbehalten) </p>
                </div>
              </div>

              <div class="row tech-detail">
                <div class="picture _backsite"></div>
                <div class="text-box">
                  <h3>Anschlussterminal</h3>
                  <div class="line"></div>
                  <p>Universelle Polklemmen für den Anschluss von Gabel- und Bananensteckern 4/8 mm und abisolierter
                    Litze bis 16mm<sup>2</sup></p>
                </div>
              </div>

              <div class="row tech-detail">
                <div class="picture _color"></div>
                <div class="text-box">
                  <h3>Ausführungen</h3>
                  <div class="line"></div>
                  <p>Damit sich der Lautsprecher optimal in ihre Wohnung integriert, kann dieser mit einem Farbton nach
                    ihrer Wahl und ohne Preisaufschlag bestellt werden (RAL, NCS und nach Farbmuster).</p>
                </div>
              </div>

            </div>

          </div>


          <!--------------------------------------------------------------------->
          <!--Tonika AMT-->

          <!--<div class="picture header _prismaBackground" style="height:120px!important;"></div>-->
          <div class="the-content">


            <div class="item-box">

              <div class="picture _tonika buttonLike" (click)="openModal('tonika')"></div>

              <div class="row has-picture-right">

                <div class="text-box">
                  <h1>Tonika AMT
                    <small>Hör die Wahrheit!</small>
                  </h1>
                  <div class="line"></div>
                  <p>Grosser Klang im kleinen Format. 3-Wege Bassreflex-Kompaktlautsprecher mit Air-Motion-Transformer
                    (AMT) für feinste Hochtonwiedergabe.
                    Der Bass-Mitteltöner auf der Frontseite wird durch den rückseitigen 6"-Woofer effizient
                    entlastet.</p>
                </div>

              </div>

              <div class="row has-picture-left">
                <div class="picture _rueckseite"></div>
                <div class="text-box thin">
                  <h3>BDT-WOOFER</h3>
                  <div class="line"></div>
                  <p>Rückseite:&nbsp;&nbsp;Für Frequenzen unterhalb 120 Hz sorgt eine stabile BDT-Membran (Balanced
                    Drive
                    Technology) in einer separaten Bassreflex-Kammer.</p>
                  <div style="height: 20px;"></div>
                  <h3>Anschlussterminal</h3>
                  <div class="line"></div>
                  <p>Universelle Polklemmen für den Anschluss von Gabel- und Bananensteckern 4/8 mm und abisolierter
                    Litze bis 16mm<sup>2</sup></p>
                </div>

              </div>

              <div class="row has-picture-right table">
                <div class="text-box">

                  <table class="tech-table">
                    <tr>
                      <th colspan="2">Technische Daten
                        <a class="diagramm" href="./assets/img/pictures/kurve2.png" target="_blank">Diagramm</a>
                      </th>
                    </tr>
                    <tr>
                      <td>Frequenzgang</td>
                      <td>27 - 30'000 Hz</td>
                    </tr>
                    <tr>
                      <td>Empfindlichkeit</td>
                      <td>85 dB</td>
                    </tr>
                    <tr>
                      <td>Trennfrequenzen</td>
                      <td>120 / 3200 Hz</td>
                    </tr>
                    <tr>
                      <td>Impedanz</td>
                      <td>8 Ohm</td>
                    </tr>
                    <tr>
                      <td>Leistung (mus./max.)</td>
                      <td>90 / 140 Watt</td>
                    </tr>
                    <tr>
                      <td>Anschlussterminal</td>
                      <td>4 mm Ban.-Stecker / Schraubklemmen</td>
                    </tr>
                    <tr>
                      <td>Dimensionen (B x H x T)</td>
                      <td>210 x 342 x 283</td>
                    </tr>
                    <tr>
                      <td>Gewicht</td>
                      <td>10.3 Kg</td>
                    </tr>
                    <tr>
                      <td class="go-top">Besonderheiten</td>
                      <td>Voluminös klingender, frei aufstellbarer
                        Kompaktlautsprecher. Seitliche Bassreflex-Öffnung für
                        ungehinderte Ventilation.
                        <br>
                        <br>
                        <b>Paarpreis: CHF 4100.–</b>
                      </td>
                    </tr>
                  </table>
                  <p class="table-appendix">(Technische Änderungen vorbehalten)</p>
                </div>
              </div>

              <div class="middle-spacing"></div>

              <div class="row tech-detail">
                <div class="picture _farben"></div>
                <div class="text-box">
                  <h3>Farbtonauswahl</h3>
                  <div class="line"></div>
                  <p class="more-width">Wir produzieren den Lautsprecher in den Farbtönen schwarzgrau und perlweiss
                    (RAL). Auf Anfrage ist
                    der Lautsprecher auch in anderen RAL-Farbtönen erhältlich.</p>
                </div>
              </div>

            </div>

            <div class="small-spacing"></div>

            <div class="link-box" (tap)="goToSlide(2)">
              Unser Service
              <ion-icon name="ios-arrow-forward-outline"></ion-icon>
            </div>
            <div class="link-box" (tap)="goToSlide(3)">
              Kontakte und Partner
              <ion-icon name="ios-arrow-forward-outline"></ion-icon>
            </div>

          </div>
          <div class="footer-strip"></div>

        </ion-slide>

        <!--------------------------------------------------------------------->
        <!--SERVICE-->
        <ion-slide id="service">

          <div class="picture header _service">
            <h1 class="headerTitle">Unser Service</h1>
          </div>

          <div class="the-content">

            <div class="item-box">
              <div class="row">
                <div class="picture _support2"></div>
                <div class="text-box">
                  <h2>Technische Unterstützung</h2>
                  <div class="line"></div>
                  <p>Haben Sie bereits eine komplette Musik-Anlage und möchten nur die Lautsprecher ersetzten?
                    Beim Kauf von neuen Lautsprechern zu einer bestehenden Anlage, empfiehlt es sich ein
                    paar Überlegungen zu machen: Ist der Verstärker klanglich und leistungsmässig noch der richtige?
                    Sind die Audio-Verbindungskabel qualitativ ausreichend? Oder ist der Querschnitt der
                    Lautsprecherkabel
                    gross genug? Es gibt noch weitere wichtige Aspekte für ein optimales Funktionieren
                    der Audio-Kette. Wir helfen ihnen gerne weiter.</p>
                </div>
              </div>
            </div>

            <div class="item-box">
              <div class="row">
                <div class="picture _support"></div>
                <div class="text-box">
                  <h2>Raumakustik</h2>
                  <div class="line"></div>
                  <p>Jeder Raum \`schwingt\` bei der Beschallung mit Musik ganz unterschiedlich mit. Das kann schön, oder
                    störend sein kann. Der richtige Standort der Lautsprecher kann diesem Problem ein Stück weit
                    entgegen wirken. Damit Sie die Lautsprecher aber dort positionieren können, wo es ihnen am besten gefällt,
                    sind oftmals akustische Verbesserungen im Raum erforderlich. Solche Anpassungen sind meistens
                    schon mit kleinen Eingriffen und ohne grösseren finanziellen Aufwand zu realisieren. Gerne beraten
                    wir Sie diesbezüglich kostenlos bei uns, telefonisch, oder auch vor Ort.</p>
                </div>
              </div>
            </div>

            <div class="small-spacing"></div>


            <div class="link-box" (tap)="goToSlide(3)">
              Kontakte und Partner
              <ion-icon name="ios-arrow-forward-outline"></ion-icon>
            </div>
          </div>

          <div class="footer-strip"></div>

        </ion-slide>

        <!--------------------------------------------------------------------->
        <!--KONTAKT-->
        <ion-slide id="kontakt">

          <div class="picture header _map">
            <h1 class="headerTitle">Unser Standort</h1>
            <a
              href="https://www.google.ch/maps/place/Zwinglistrasse+18,+3007+Bern/@46.934411,7.432987,17.52z/data=!4m5!3m4!1s0x478e39b4b0965ec1:0xb560dceb671d8c4e!8m2!3d46.9345945!4d7.4337344"
              target="_blank">
            </a>
          </div>

          <div class="the-content">

            <div class="item-box">
              <div class="row">
                <div class="picture _contact"></div>
                <div class="text-box">
                  <div class="picture logo-kontakt"></div>
                  <p>Zwinglistrasse 18 | 3007 Bern</p>
                  <p>Telefon
                    <a class="noLinkStyle" href="tel:0313726282">031 372 62 82</a> oder
                    <a class="noLinkStyle" href="tel:0797367336">079 549 09 34</a>
                  </p>
                  <p>eMail <a href="mailto:ub@bv-technik.ch">ub@bv-technik.ch</a></p>
                </div>
              </div>
            </div>


            <div class="item-box">
              <div class="row shop">
                <a href="http://rohrerhifi.org" target="_blank">
                  <div class="picture _rohrer"></div>
                </a>
                <div class="text-box">
                  <h2>Unser Händler in Toffen</h2>
                  <div class="line"></div>
                  <p><b>Rohrer HighEnd</b> | <a href="http://rohrerhifi.org" target="_blank">rohrerhifi.org</a></p>
                </div>
              </div>
            </div>


            <div class="item-box">
              <div class="row shop">
                <a href="http://hifi-studio.ch" target="_blank">
                  <div class="picture _loeffel"></div>
                </a>
                <div class="text-box">
                  <h2>Unser Händler in Bern</h2>
                  <div class="line"></div>
                  <p><b>HiFi-Studio Loeffel</b> | <a href="http://hifi-studio.ch" target="_blank">hifi-studio.ch</a>
                </div>
              </div>
            </div>


            <div class="item-box">
              <div class="row login">

                <div class="text-box">

                  <h2>Login für Händler</h2>

                  <div class="line"></div>

                  <p class="smallLabel">Um einen Benutzernamen mit Passwort für das Login zu erhalten, senden Sie uns
                    bitte eine E-Mail mit ihrer Anfrage zu.</p>

                  <p>eMail: <a href="mailto:ub@bv-technik.ch">ub@bv-technik.ch</a></p>

                  <div class="middle-spacing"></div>

                  <form>
                    <input type="text" placeholder="Benutzername" [(ngModel)]="input.username" name="name">
                    <input type="password" placeholder="Passwort" [(ngModel)]="input.password" name="password">
                    <input type="submit" value="Login" (click)="logIn()">
                  </form>

                  <p *ngIf="showErrorMessage" class="errorMessage">Name oder Passwort ist nicht korrekt.</p></div>
              </div>
            </div>

          </div>

          <div class="footer-strip"></div>

        </ion-slide>


        <!--------------------------------------------------------------------->
        <!--Retailer-->
        <ion-slide *ngIf="isLoggedIn" id="retailer">

          <div class="picture header _retailer">
            <h1 class="headerTitle">Händlerseite</h1>
          </div>

          <div class="the-content">

            <div class="item-box">

              <div class="row">
                <div class="text-box">

                  <h2>HändlerPreise</h2>

                  <div class="middle-spacing"></div>

                  <div class="table-container">
                    <table class="tech-table">
                      <tr>
                        <th colspan="2">Produkt</th>
                        <th>Nettopreis<span>(Paar)</span></th>
                        <th>Bruttopreis<span>(Paar)</span></th>
                        <th>Marge</th>
                      </tr>
                      <tr>
                        <td>
                          <div class="table-picture _prisma"></div>
                        </td>
                        <td><b>Prisma TL</b></td>
                        <td>CHF 3400.–</td>
                        <td>CHF 5700.–</td>
                        <td>~40%</td>
                      </tr>
                      <tr>
                        <td>
                          <div class="table-picture _tonika"></div>
                        </td>
                        <td><b>Tonika AMT</b></td>
                        <td>CHF 2450.–</td>
                        <td>CHF 4100.–</td>
                        <td>~40%</td>
                      </tr>
                    </table>
                  </div>


                </div>
              </div>
            </div>

            <div class="item-box">

              <div class="row">
                <div class="text-box">
                  <h2>Lieferfristen</h2>
                  <div class="line"></div>
                  <p>Derzeitige Lieferfrist für alle Produkte ca. 3-4 Wochen</p>
                </div>
              </div>
              <div class="row">
                <div class="text-box">
                  <h2>Garantie</h2>
                  <div class="line"></div>
                  <p>Auf alle AuraSonum-Produkte gewähren wir 10 Jahre Garantie (Ersatzteile und Service)</p>
                </div>
              </div>
            </div>


            <div class="item-box">

              <div class="row">
                <div class="text-box">
                  <h2>Bankverbindung</h2>
                  <div class="line"></div>
                  <p>Postfinance Bern</p>
                  <p>Postparc Bern</p>
                  <p>IBAN CH07 0900 0000 3011 4360 1</p>
                  <p>Konto 30-114360-1</p>

                  <div class="middle-spacing"></div>
                  <p>Unsere Firma ist derzeit nicht mehrwertsteuerpflichtig. Die Netto-/Bruttopreise verstehen sich inkl.
                    MwSt.</p>
                  <div class="middle-spacing"></div>

                  <p>AuraSonum</p>
                  <p>Zwinglistrasse 18</p>
                  <p>3007 Bern</p>
                  <p>Telefon
                    <a class="noLinkStyle" href="tel:0313726282">031 372 62 82</a> oder
                    <a class="noLinkStyle" href="tel:0797367336">079 549 09 34</a>
                  </p>
                  <p>Fax 031 372 62 83</p>
                  <p>eMail: <a href="mailto:ub@bv-technik.ch">ub@bv-technik.ch</a></p></div>
              </div>
            </div>

          </div>

          <div class="footer-strip"></div>


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

    <span onclick="alert('p')" class="stopGestures"></span>

    <!-- The Modal -->
    <div id="myModal" class="modal">

      <!-- Modal content -->
      <div class="modal-content">

        <div class="va1">
          <div class="va2">
            <img style="max-height:1800px;" *ngIf="modalContent == 'prisma'" src="assets/img/pictures/prisma_8.png">
            <img style="max-height:800px;" *ngIf="modalContent == 'tonika'" src="assets/img/pictures/tonika_1.png">
          </div>
        </div>
        <span class="close" (click)="closeModal()">&times;</span>
      </div>

    </div>

  `
})
export class MainSlider {

  @ViewChild(Content) content: Content;
  @ViewChild('mainSlides') mainSlides: Slides;


  private input = {
    username: "",
    password: ""
  };


  private showErrorMessage = false;

  private isLoggedIn = false;
  private modal;
  private modalContent;


  constructor() {

  }

  public showHamburger() {
    let check = false;
    (function (a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  };

  ionViewDidEnter() {

    this.modal = document.getElementById('myModal');
    window.onclick = (event) => {
      if (event.target == this.modal) {
        this.closeModal();
      }
    };

    jQuery(window).resize(() => {
      this.content.resize();
      this.mainSlides.update();
    });

    this.mainSlides.lockSwipes(true);

    jQuery('.imageSlider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      appendDots: false,
      pauseOnFocus: false,
      pauseOnHover: false
    });

    if (location.hostname === "localhost") {
      setTimeout(() => {
        // this.cheatLogIn();
        this.goToSlide(0)
      }, 100)
    }
  }

  toggleMenu() {
    jQuery('.hamburger-menu .menu-list').toggle();
  }

  openModal(type) {
    this.modalContent = type;
    this.modal.style.display = "block";
  }

  closeModal() {
    this.modal.style.display = "none";
  }

  private cheatLogIn() {
    this.input.username = "asm";
    this.input.password = "3007bern";
    this.logIn()
  }

  private logIn() {

    if (this.input.username === "asm" && this.input.password === "3007bern") {
      this.isLoggedIn = true;
      setTimeout(() => {
        this.goToSlide(4);
      }, 200);
      this.showErrorMessage = false;
    } else {
      this.showErrorMessage = true;
    }

  }


  private goToSlide(index) {

    this.mainSlides.lockSwipes(false);
    this.mainSlides.slideTo(index);
    this.mainSlides.lockSwipes(true);
    this.content.scrollToTop();
  }


  private scrollTop() {
    this.content.scrollToTop();
  }
}


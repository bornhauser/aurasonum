import {AfterContentInit, Component, OnInit, ViewChild} from '@angular/core';
import {Content, Slides} from 'ionic-angular';
import * as $ from 'jquery';

@Component({
  selector: 'produkte',
  template: `

    <div class="button-header">
      <div class="va1">
        <div class="va2">
          <p class="produkt-link" [ngClass]="{'active': slides.getActiveIndex() == 0}" (click)="goToSlide(0)">
            Prisma TL</p>
          <div style="display: inline-block; width: 10px;"></div>
          <p class="produkt-link" [ngClass]="{'active': slides.getActiveIndex() == 1}" (click)="goToSlide(1)">
            Tonika AMT</p>
          <style>
            .produkt-link {
              color: #a8a8a8;
              display: inline-block;
              padding: 5px 10px;
              font-size: 15px;
              border: 1px solid #a8a8a8;
              cursor: pointer;
            }

            .produkt-link.active {
              color: #dedede;
              border: 1px solid #dedede;
            }
          </style>
        </div>d
      </div>
    </div>


    <ion-slides #mainSlides class="mainSlides" speed="500">
      <ion-slide>
        <!--------------------------------------------------------------------->
        <!--Prisma TL-->

        <div class="picture header _prismaBackground">

        </div>


        <div class="picture _prisma" style="text-align: left;  ">
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
            <h2>Anschlussterminal</h2>
            <div class="line"></div>
            <p>Universelle Polklemmen für den Anschluss von Gabel- und Bananensteckern 4/8 mm und abisolierter
              Litze
              bis 5mm<sup>2</sup></p>
          </div>
          <div class="picture _backsite"></div>
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
          <div class="box  _price">
            <p class="price">Preis pro Lautsprecherpaar: CHF 5700.–</p>
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
      <ion-slide>
        <!--------------------------------------------------------------------->
        <!--Tonika AMT-->

        <div class="picture header _prismaBackground">

        </div>


        <div class="picture _tonika" style="text-align: left;  ">
          <a href="./assets/img/pictures/tonika_1.png" target="_blank"></a>
        </div>

        <div class="item left">
          <div class="va1">
            <div class="va2">
              <div class="box">
                <h2>Tonika AMT</h2>
                <div class="line"></div>
                <p>Grosser Klang im kleinen Format. 3-Wege Bassreflex-Kompaktlautsprecher mit Air-Motion-Transformer
                  (AMT) für feinste Hochtonwiedergabe.
                  Der Bass-Mitteltöner auf der Frontseite wird vom rückseitigen 6"-Woofer effizient entlastet.</p>
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
                <td>85 dB</td>
              </tr>
              <tr>
                <td>Trennfrequenz</td>
                <td>90/ 3200 Hz</td>
              </tr>
              <tr>
                <td>Impedanz</td>
                <td>4 Ohm</td>
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
            <h2>Rückseite</h2>
            <div class="line"></div>
            <p>Für Frequenzen unterhalb 90 Hz sorgt eine stabile BDM-Membran in einer separaten Bassreflex-Kammer.</p>
<div style="height: 50px;"></div>
            <h2>Anschlussterminal</h2>
            <div class="line"></div>
            <p>Universelle Polklemmen für den Anschluss von Gabel- und Bananensteckern 4/8 mm und abisolierter
              Litze bis 5mm<sup>2</sup></p>
          </div>
          <div class="picture _rueckseite"></div>
        </div>


        <div class="item left">
          <div class="box">
            <h2>Wählen Sie ihren Farbton</h2>
            <div class="line"></div>
            <p>Es sind verschiedene Farbtöne erhältlich. Die aktuellen Farbtöne erfahren Sie bei ihrem Händler.</p>
          </div>
          <div class="picture _farben"></div>
        </div>


        <div class="item left">
          <div class="box  _price">
            <p class="price">Preis pro Lautsprecherpaar: CHF 3500.–</p>
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
    </ion-slides>



  `
})
export class Produkte implements AfterContentInit {
  constructor() {
  }


  ionViewDidEnter() {

    this.mainSlides.lockSwipes(true);

  }

  @ViewChild(Content) content: Content;
  @ViewChild(Slides) slides: Slides;
  @ViewChild('mainSlides') mainSlides: Slides;


  ngAfterContentInit() {

    // $(window).resize(() => {
    //   // this.content.resize();
    //   this.slides.update();
    // });

    // setTimeout(() => {
    //   this.slides.slideTo(1);
    // }, 100)
  }


  private goToSlide(index) {

    this.mainSlides.lockSwipes(false);
    this.mainSlides.slideTo(index);
    this.mainSlides.lockSwipes(true);
  }

}


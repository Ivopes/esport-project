import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/user';


@Component({
  selector: 'app-main-team',
  templateUrl: './main-team.component.html',
  styleUrls: ['./main-team.component.scss'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ]),
  ]
})
export class MainTeamComponent implements OnInit {

  ivo: User = {
    Title: 'Ivo Pešák',
    SubTitle: 'Kostěj',
    PhotoUrl: 'assets/userPic/ivo.jpg',
    Content: 'Ročník 1998. Jsem bývalý hráč Doty, na které mám přes 1500 hodin. Poté přesun na CS:GO ve kterém mám něco málo přes 1000 hodin. Jsem výborný hráč, který umí hrát nejenom na aim, ale taky na brain. Nebojím se sem tam i něco callnout. Občas si zanadávám když borec proti mě náhodou trefí něco co by v životě jinak netrefil ani kdyby chtěl. Rád hraju se svým spoluhráčem Huldou !S!, je mi jasné co udělá ještě dřív než to ví on sám. Moje nejoblíbenější zbraň je AK-47, nejoblíbenější mapa je inferno. Můj největší nepřítel – PING. '
  };
  hulda: User = {
    Title: 'Daniel Hulda',
    SubTitle: 'Hulda !S!',
    PhotoUrl: 'assets/userPic/hulda.jpg',
    Content: 'Narodil jsem se 15.10 1998. Od mala jsem již “buřil“ co se dalo, myslím tím samozřejmě hry. Nejoblíbenější herní tituly pro mě byly tekken 3, destruction derby a jednoznačně crash bandicoot. U každé hry je pro mě důležité makro. Sleduju všechny možné profíky, abych věděl u dané hry všechny taktiky, protože jak se říká: “Kdo je připraven, není překvapen.“ Jako hráč jsem dosti agresivní a často rageuju. Proto si rád zahraju i nějakou tu oddechovku jako je třeba “Snail Bob“. Všem doporučuji. V csku jsem entry frager a nejradši se spoléhám na taktiku “spray \'n pray“. O našem týmu si myslím, že se krásně doplňujeme a v gamingu patříme určitě ke špici.'
  };
  denis: User = {
    Title: 'Denis Lokaj',
    SubTitle: 'DeniGOD',
    PhotoUrl: 'assets/userPic/denis.jpg',
    Content: 'Narozen 24.7.1998 ve Frýdku-Místku. Jako malého mě počítačové hry fascinovaly a rád jsem hraním trávil svůj volný čas, v této době jsem ale ještě netušil, že právě tyhle hry ve mně později vzbudí zvídavost v informačních technologiích, ať už se jedná o hardware nebo software. Nyní jsem už dospělý a volný čas trávím především jinak, hry nejsou moje každodenní náplň a z velké části mě omrzely, ale zájem o technologii „pod pokličkou“ vzkvétá. Ve svém volném čase rád posedím s přáteli, rekreačně sportuju, lyže, kolo, plavání, cvičení. Občas si přečtu knihu na téma, které mě momentálně zajímá, poslouchám hudbu a když je chuť, tak i sem tam něco poživatelného uvařím.'
  };
  jirka: User = {
    Title: 'Jiří Mann',
    SubTitle: 'Levi',
    PhotoUrl: 'assets/userPic/Jirka.jpg',
    Content: 'V Českém Těšíně se dne 24.5. 1999 v nemocnici narodil neskutečný beast, který má již od svého raného dětství pouze jeden cíl - dominovat zápasy v CSku. Poté co jsem dosáhl ranku Global Elite v CSku je mým stávajícím úkolem získat level 10 na faceitu. Pomalu ale jistě se tomuto životnímu "achievementu" blížím.  Jako správný gamer piji hromady energeťáků každý den, nejradši mam RockStar s přichutí Guava. Mimo jiné jsem našel v posledních letech zálibu v informačních technologiích, i když má láska k CSku stále přesiluje. Jsem jednoznačně pokladem v našem týmu. 🙂'
  };
  kominek: User = {
    Title: 'Daniel Kominek',
    SubTitle: 'Danny',
    PhotoUrl: 'assets/userPic/kominek.jpg',
    Content: 'Nemocnice ve Frýdku-Místku měla jeden velmi zajímavý den ve své historii - 18.11. 1998 jsem přišel na svět. Již od mala jsem měl veliký problém se odtrhnout od PC her a moje největší srdcovka od dětství je titul jménem "Return to castle Wolfenstein", na druhém místě po něm následoval CS:1.6, který jsem byl nucen z důvodu špatného internetu hrát pouze s botama. V posledním roce svůj volný čas trávím hlavně s lidmi, při sportu nebo v práci a na hry již moc času nemám. Informatika mě vždy zajímala a bavila a to se už jen tak nezmění.'
  };

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  toMenu(): void{
    this.router.navigate(['/']);
  }
}

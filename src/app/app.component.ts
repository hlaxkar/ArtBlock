import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';

  profiles = [
    {
      username: 'hlaxkar',
      fname: 'Harshit Laxkar',
      pfp: 'pfp5.webp',
      banner: 'banner1.jpg',
      bio: `Just Livin la Vida`,
      followers: 200,
      followings: 100,
    },
    {
      username: 'ashulaxkar',
      fname: 'Ashu Laxkar',
      pfp: 'pfp2.png',
      banner: 'banner2.jpg',
      bio: `If I was a writer, I'd have a better bio quote`,
      followers: 1902,
      followings: 543,
    }, {
      username: 'Darkmage',
      fname: 'Dark Mage',
      pfp: 'pfp3.webp',
      banner: 'banner3.jpg',
      bio: `It won't always be easy, but always try to do what's right`,
      followers: 561,
      followings: 230,
    }, {
      username: 'Lordduck',
      fname: 'Lord Duck',
      pfp: 'pfp1.png',
      banner: 'banner4.png',
      bio: `Turned my dreams into my vision and my vision into my reality`,
      followers: 199,
      followings: 354,
    },
    
  ]

}

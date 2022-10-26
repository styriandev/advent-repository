import {Injectable} from '@angular/core';
import {Entry} from './entry';

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  currentSelectedItem: Entry | undefined;

  getItems(): Entry[] {
    return [
      new Entry(new Date(2022, 12, 1), 'First question', undefined, undefined, 'Past simple form of "have"<br /> _ _ _'),
      new Entry(new Date(2022, 12, 2), 'Second question', undefined, undefined, 'an orange<br/>_ _ _ christmas tree'),
      new Entry(new Date(2022, 12, 3), 'Third question', undefined, undefined, 'Very rätsel.'),
      new Entry(new Date(2022, 12, 4), 'Fourth question', undefined, 'shiny_nose.png', `It's not a red one,
      but a s _ _ _ ny  n _ _ _ .<br/>Do you know song number 1? Tomorrow starts song number 2.`),
      new Entry(new Date(2022, 12, 5), 'Fifth question', undefined, 'clock.png', '_ _ _ _ time is it?'),
      new Entry(new Date(2022, 12, 6), 'Sixth question', undefined, undefined, `What's "Spaß" in English?\n _ _ _` ),
      new Entry(new Date(2022, 12, 7), 'Seventh question', undefined, 'seventh.png', `What's missing?`),
      new Entry(new Date(2022, 12, 8), 'Eighth question', undefined, 'eigth.png', `What's missing?`),
      new Entry(new Date(2022, 12, 9), 'Ninth question', undefined, 'horse_riding.png', `What's the person doing?<br></br>To r _ _ _ `),
      new Entry(new Date(2022, 12, 10), 'Tenth question', undefined, 'tenth.png', `Where is the fish?<br></br> _ _ the fish tank.`),
      new Entry(new Date(2022, 12, 11), 'Eleventh question', undefined, undefined, 'First letter of the alphabet.'),
      new Entry(new Date(2022, 12, 12), 'Twelfth question', undefined, 'horse.png', 'How many animals are there? _ _ _ <br />Which animal do you see? _ _ _ _ _ '),
      new Entry(new Date(2022, 12, 13), 'Thirteenth question', 'https://www.youtube.com/watch?v=qsKoT__cmAw&ab_channel=HowToBasic', undefined, `What is happening in the video?<br /> _ _ _ _ a door.`),
      new Entry(new Date(2022, 12, 14), 'Fourteenth question', undefined, 'sleigh.png', `What's "Schlitten" in English?<br />S _ _ _ _ _<br/>Do you know song number 2? Tomorrow starts song number 3.`),
      new Entry(new Date(2022, 12, 15), 'Fifteenth question', 'https://www.youtube.com/watch?v=8FqqD38g_H0&ab_channel=MusicLyrics', undefined, `Stop the song at 0:22. What are the first three words you see?<br />_   _ _ _ _     _ _ _ _!`),
      new Entry(new Date(2022, 12, 16), 'Sixteenth question', undefined, undefined, 'About rätsel'),
      new Entry(new Date(2022, 12, 17), 'Seventeenth question', undefined, 'present.png', `What's that?<br/> t _ _   p _ _ _ _ _ _ `),
      new Entry(new Date(2022, 12, 18), 'Eighteenth question', undefined, 'christmas_tree.png', `Where are the presents?<br/>_ _ _ _ _ neath the Christmas tree`),
      new Entry(new Date(2022, 12, 19), 'Nineteenth question', undefined, undefined, `What is the only article in English?</br>_ _ _ `),
      new Entry(new Date(2022, 12, 20), 'Twentieth question', undefined, 'christmas_tree_2.png', `What do you see in the picture?<br/>C _ _ _ _ _ _ _ _  t _ _ _`),
      new Entry(new Date(2022, 12, 21), 'Twenty-first question', undefined, 'list.png', `Do you know all of these songs? Make a list and write down the names of the songs. Be prepared to bring the list tomorrow to your teacher.`),
      new Entry(new Date(2022, 12, 22), 'Twenty-second question', undefined, 'teacher.png', `Bring your list to your teacher.`),
      new Entry(new Date(2022, 12, 23), 'Twenty-third question', 'https://www.youtube.com/watch?v=HKUY_gOxLas&t=15s&ab_channel=MrBean', undefined, `My wishes for you: Stop the video at 20:16`),
      new Entry(new Date(2022, 12, 24), 'Merry christmas and a happy new year!', undefined, 'merry_christmas.png', ``),
    ];
  }
}

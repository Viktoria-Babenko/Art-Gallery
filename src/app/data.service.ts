import {Injectable} from '@angular/core';
import {Painting} from './Painting';

// Чтобы указать, что сервис может использовать другие сервисы, к классу сервиса применяется декоратор Injectable.
// В этом случае встроенный механизм внедрения зависимостей сможет создать объект этого класса.
export class DataService{
 
 // В реальном приложении эти данные можно получать с сервера или из какого-либо внешнего хранилища.
	private data: Painting[] =
        [
            { name: "Портрет четы Арнольфини", author: "Ян ван Эйк", year: 1434, size: "/ 82×60 см", image: "../assets/1.webp", 
            story: "Это одна из самых загадочных картин в мировой живописи. Полагают, что на картине изображен итальянский торговец Джованни ди Николао Арнольфини и его супруга в их доме в Брюгге. А вот дальше начинаются загадки. Почему супруги разуты (их снятая обувь присутствует на полотне)? Почему над мужчиной горит свеча в люстре, а над женщиной — нет? Неужто так художник дает понять, что к моменту завершения картины жены Арнольфини уже не было на свете, и эта картина была заказана в память о ней? И обратите внимание на зеркало. Там видим не только отражение супругов. Что за фигуры? Свидетели? «Похоже, один из них — сам живописец, судя по изящной надписью между зеркалом и люстрой: «Johannes van eyck fuit hic» или «Ян ван Эйк был здесь». И это еще не все тайны культового полотна — искусствоведы вряд ли в ближайшее время придут к единому мнению по поводу этой работы."},
            { name: "Рождение Венеры", author: "Сандро Боттичелли", year: 1486, size: "/ 172.5×278.5 см", image: "../assets/2.webp", 
            story: "Рожденная из морской пены античная богиня любви — Венера — прибывает на остров Крит. Боттичелли написал картину на основе мифа, а со временем и его работа обросла мифами. Так, в некоторых исторических документах значится, как 7 февраля 1497 года доминиканский монах Джироламо Савонарола сподвиг христиан во Флоренции разжечь огромный костер, чтобы уничтожить «безделушки», не способствующие укреплению христианской веры. Якобы и Сандро Боттичелли был одним из участников церемонии (последователей идей монаха его же современники называли «плаксами»), и вроде бы он лично бросил в огонь несколько своих полотен на мифологические темы. Но пламя костра пощадило «Рождение Венеры»." },
            { name: "Тайная вечеря", author: "Леонардо да Винчи", year: 1498 , size: "/ 460×880 см", image: "../assets/3.webp", 
            story: "Художнику заказали создать фреску в соборе, но обожающий эксперименты Да Винчи предпочел пойти иным путем. Он не стал писать по мокрой штукатурке, как того требовала техника создания фресок, а изобрел свой метод, покрыв каменную стену слоем из смолы, гипса и мастики. Увы, эксперимент оказался неудачным. В результате религиозный сюжет — общение Христа с учениками накануне распятия — со временем стал настоящим бичом для реставраторов. На сегодня работа Леонардо да Винчи содержит примерно 20 процентов от оригинала." },
            { name: "Сотворение Адама", author: "Микеланджело Буонарроти", year: 1511 , size: "/ 570×280 см", image: "../assets/4.webp", 
            story: "Действие на фреске замерло за секунду до начала библейской истории — сотворения Всевышним человека. В Библии сказано, что Бог «вдунул в лице его дыхание жизни, и стал человек душею живою» (Быт. 2:7). Но у Микеланджело, как утверждают исследователи, было собственное видение: на его фреске мы видим сотворение не просто человека, а homo sapiens («человека разумного»). Ведь Адам уже явно способен и дышать, и двигаться, но еще является незавершенным творением. Чего же ему не хватает? Профессор Темпльского университета США Марша Холл отвечает на этот вопрос: «С точки зрения итальянского Ренессанса, наделение человека способностью мыслить означало быть созданным по образу и подобию Бога». Некоторые исследователи считают, что здесь Микеланджело изобразил Творца как источник разума буквально: в виде мозга. Посмотрите на него «в компании» окружающих объектов — все вместе действительно похоже на анатомическое изображение содержимого нашей черепной коробки!" },
            { name: "Сикстинская Мадонна", author: "Рафаэль Санти", year:1513 , size: "/ 269.5×201 см", image: "../assets/5.webp", 
            story: "На полотне Рафаэль изобразил явление Девы Марии с младенцем Христом на руках святому Сиксту. Картину заказал художнику римский папа Юлий II. Живописец вписал в полотно много деталей, важных для собственного мировоззрения. Рафаэль был гностиком: стронники этого религиозного течения считали, что они обладают особыми знания о Боге и об устройстве мира. И они, в частности, очень ценили число «шесть». Исследователи отмечают значимость этого числа для картины. Ее композицию составляют шесть фигур, а на правой руке святого Сикста будто бы шесть пальцев (правда, если внимательно всмотреться, то «шестой палец» — это, скорее, внутренняя сторона ладони)." },
            { name: "Девушка с жемчужной серёжкой", author: "Ян Вермеер", year: 1665 , size: "/ 44.5×39 см", image: "../assets/6.webp", 
            story: "Голландский живописец Ян Вермеер не давал названий своим полотнам. «Девушкой с жемчужной сережкой» картину нарекли значительно позднее, и тут же начались споры, можно ли украшение считать жемчужиной? Большинство исследователей склоняются к тому, что в ухе натурщицы сережка из венецианского стекла, а сам портрет в большей мере плод воображения живописца." }
        ];
	
    getData(): Painting[] {
        return this.data;
    }
}
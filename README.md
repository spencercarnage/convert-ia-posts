This is Node.js command-line utility that is used to convert content from 
[https://github.com/Omarcito/indestructibleart.com/tree/master/content](https://github.com/Omarcito/indestructibleart.com/tree/master/content) 
(which is a mixture of YAML and HTML) into JSON. 

Clone the repo and CD into the cloned directory:

```
git clone git://github.com/spencercarnage/convert-ia-posts/ && cd convert-ia-posts
```

Install the dependencies:

```
npm i
```

Run `npm link` from inside the new repo. This will give you the command-line 
interface `convert-ia`. There are only two command-line arguments and both are required.

```
-s, --source path/to/dir/of/content/to/convert
-o, ---output path/to/dir/of/where/to/put/converted/content
```

Example:

```
convert-ia -s content/episodes -o converted-episodes
```

Here is an example of the converted JSON for episode 88:

```
{
    "yaml": {
        "title": "Indestructible Art 88: The Chaka Returns",
        "subtitle": "Ryan is Back! The world makes sense again. The sky is bluer. The grass greener. Flowers stinkier. And just to honor his return MS flips their DRM policies, DC announces some new titles, and more Zero Years.",
        "summary": "Ryan is Back! The world makes sense again. The sky is bluer. The grass greener. Flowers stinkier. And just to honor his return MS flips their DRM policies, DC announces some new titles, and more Zero Years. Mix that in with a bunch of catching up for Ryan, Superman Man of Steel talk, and Pick's of the Week. Show Notes for this episode can be found at http://www.indestructibleart.com/episodes/088.html",
        "file": "/audio/88.mp3",
        "date": "2013-06-25T00:00:00.000Z",
        "duration": "01:42:10",
        "length": 49043156,
        "tags": "Sony, PlayStation, Nintendo, Marvel, DC, 3DS, Xbox, 360, PS3, Wii, WiiU, PS4, PSN, XBLA, Vita, Steam, PC, Video Games, Comics, Games, Indestructible Art, E3, Xbox180, Superman, GiantBomb, Donkey Kong",
        "author": "Evan Campbell, Ryan Adams, Omar de Armas, Spencer Carney",
        "layout": "audio"
    },
    "html": "\n<a href=\"{{ page.url }}\" class='postTitleLink'><p class='postTitle'>{{ page.title }}</p></a>\n<p class='postPublished'>{{ page.date.toDateString }}</p>\n<p class='postAuthor'>By: {{ page.author }}</p>\n<hr>\n<p class='podcastSummary'>{{ page.subtitle }}</p>\n\n<p class='podcastSummary'>{{ page.summary }}</p>\n\n<audio src={{ page.file }} preload=\"none\"></audio>\n<p class='subLinks'>Subscribe on <a href='http://bit.ly/iapodcast'>iTunes</a>, or <a href={{ page.file }}>Right Click and \"Save As\" to Download</a>.</p>\n- - -\n### Show Notes:  ###\n#### Games: ####\n* Patrick Klepek posted story on Giant Bomb that MS was about to change DRM policy. Site Crashes. - [GiantBomb](http://www.giantbomb.com/articles/microsoft-to-pull-complete-reversal-on-xbox-one-dr/1100-4673/)\n\n* Shortly after MS posted the official news. Page crashed for the first 15-20 minutes. - [Xbox](http://news.xbox.com/2013/06/update)\n\n* Why the Xbox180 could potentially be a bad thing. - [Gizmodo](http://gizmodo.com/the-xbox-one-just-got-way-worse-and-its-our-fault-u514411905)\n  \n#### Comics: ####\n* New DC Titles Announced:\n    * Justice League 3000 - [ComicsAlliance](http://www.comicsalliance.com/2013/06/18/justice-league-3000-giffen-dematteis-kevin-maguire-dc-howard-porter/)\n    * Superman/Wonderwoman - [ComicsAlliance](http://www.comicsalliance.com/2013/06/17/superman-wonder-woman-team-up-kiss-comic-charles-soule-tony-daniel/)\n\n* Zero Year To Crossover Into Action Comics, Flash, Green Arrow, Green Lantern Corps And More - [Bleeding Cool](http://www.bleedingcool.com/2013/06/18/zero-year-to-crossover-into-action-comics-flash-green-arrow-green-lantern-corps-and-more/)\n  \n### Picks of the Week: ###\n* Ryan: Donkey Kong Country Returns - [Nintendo](http://donkeykong.nintendo.com/)\n* Spencer: This Is The End - [Trailers](http://trailers.apple.com/trailers/sony_pictures/thisistheend/)\n* Omar: Soundodger - [AdultSwim](http://games.adultswim.com/soundodger-puzzle-online-game.html)\n* Evan: Borderlands 2 DLC [YouTube](http://www.youtube.com/watch?v=_hVJ2dTU7RM)"
}
```

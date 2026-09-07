import blur from '../../../../assets/blurimg.webp';
import caught from '../../../../assets/caughtimg.webp';
import chesterzoo from '../../../../assets/chesterzoo.webp';
import chestaqua from '../../../../assets/chestaquariaum.webp';
import churches from '../../../../assets/churches.webp';
import edinburgh from '../../../../assets/edinburgh.webp';
import lines from '../../../../assets/lines.webp';
import manchester from '../../../../assets/manchester.webp';
import nantucket from '../../../../assets/nantucket.webp';
import portrait from '../../../../assets/portraits.webp';
import rural from '../../../../assets/rural.webp';
import lancaster from '../../../../assets/lancastaru.webp';
import untitled from '../../../../assets/untitled.webp';
import urban from '../../../../assets/cities.webp';
import wildlife from '../../../../assets/wildlife.webp';

interface Shots {
    id: number
    img: string
    label: string
    desc: string
    url: string
}

export const candidList: Shots[] = [
    {
        id: 1,
        img: blur,
        label: "Blurred",
        desc: "In this collection, blur is not a flaw to be corrected, but the subject itself: a space where form dissolves, perception wanders, and the unseen becomes the image. There is something deeply compelling about the abstract art of blur: its ability to transform the familiar into mystery and invite us to see beyond what is clearly defined.",
        url: "https://drive.google.com/drive/folders/1y4ip5uHIW5alyZbkHi3GX4dKkZ8D19lV?usp=sharing"
    },
    {
        id: 2,
        img: caught,
        label: "Caught In Action",
        desc: "Caught in Action is a collection of fleeting human moments: people at work, at play, in motion, and in the midst of everyday life. Through these photographs, I seek to capture not just what people do, but the gestures, energy, and quiet stories that reveal who we are when we are simply living.",
        url: "https://drive.google.com/drive/folders/1k5h-jxLxTBFg9Z4DaWSQEdsuUk9ZiAn2?usp=drive_link"
    },
    {
        id: 3,
        img: chestaqua,
        label: "Chester Zoo Aquarium",
        desc: "At Chester Zoo Aquarium, I found myself drawn into a world where water, light, and movement create their own quiet poetry. This collection captures my fascination with life beneath the surface; its colours, forms, and fleeting moments of beauty.",
        url: "https://drive.google.com/drive/folders/16dObCtNFhOCAyz_F6XwEgv9nO-HqOjoj?usp=drive_link"
    },
    {
        id: 4,
        img: chesterzoo,
        label: "Chester Zoo Trees",
        desc: "This collection celebrates the trees of Chester Zoo; not merely as a backdrop to wildlife, but as living subjects in their own right, whose forms, textures, and quiet presence invite us to look more closely at the beauty of the natural world.",
        url: "https://drive.google.com/drive/folders/10gIPO59Mf6ul9Wt0p1wBF_qMmFnFi43P?usp=drive_link"
    },
    {
        id: 5,
        img: churches,
        label: "Churches",
        desc: "Once a devoted catholic church lector and still an avid pilgrim, I have developed a fascination with cathedral architecture, where stone, light, and sacred space turn faith into something I can see, wander through, question, and photograph.",
        url: "https://drive.google.com/drive/folders/1nIGVXephCnlSmxh8b0Y9CNDbw-DbZmqi?usp=drive_link"
    },
    {
        id: 6,
        img: edinburgh,
        label: "Edinburgh",
        desc: "Edinburgh, through my lens, is a city of stone, stories, and sweeping views, where every winding street seems to lead to another beautiful discovery. Scotland is my second-favorite scenic country in Europe, after Austria, and this collection captures a little of what makes its capital so captivating to me.",
        url: "https://drive.google.com/drive/folders/1E2utxBE6hU67nKt0gBdnsF69GOhLxsVH?usp=drive_link"
    },
    {
        id: 7,
        img: lines,
        label: "Lines",
        desc: "Lines is a collection of the quiet geometries that shape our world; where architecture, nature, and everyday life meet in unexpected patterns. Through my lens, lines become more than boundaries or directions; they become rhythms, connections, and invitations to follow the eye beyond the frame.",
        url: "https://drive.google.com/drive/folders/1d2UPVP7vF0ADbkL6bnHodVEDJ-6Tk3NJ?usp=drive_link"
    },
    {
        id: 8,
        img: manchester,
        label: "Manchester MediaCity",
        desc: "A little urban drama, a little architectural seduction, and plenty of reflections worth getting lost in! Manchester MediaCity is a collection of urban rhythms, where glass, steel, water, and light meet in a landscape of contemporary architecture. Through my lens, I explore the geometry of the city, its reflections, and the quiet moments that emerge within its ever-changing urban scene. And the man making his way through the shots? That’s my brother, Steph—my favorite human element in all that architectural drama, and the man who gave me my first semi-professional camera when I was 17. So, in a way, he helped put the camera in my hands, and now I get to put him in the frame.",
        url: "https://drive.google.com/drive/folders/1pZdEliBXoMDDJCYRVY8l0jxolpcqtomR?usp=drive_link"
    },
    {
        id: 9,
        img: nantucket,
        label: "Nantucket Island",
        desc: "Nantucket Island, where the ocean sets the pace, the cottages have character, and even the quietest corners seem to have a story to tell. This collection captures my little love affair with island life: a little coastal charm, a little windswept romance, and plenty of moments worth keeping. But beyond the postcard beauty lies a history that fascinates me: the story of Black Nantucketers of West African origin, including prosperous mariners, entrepreneurs, and community leaders, who helped shape the island’s maritime economy and social life while slavery was still in full force elsewhere in America. Their legacy reminds me that some of the most compelling stories of a place are not always the ones its beauty first reveals.",
        url: "https://drive.google.com/drive/folders/196n31jgAtFXH5LAeU9CMlG1J7k_c0elm?usp=drive_link"
    },
    {
        id: 10,
        img: portrait,
        label: "Portraits",
        desc: "Portraits is a collection of faces, expressions, and fleeting encounters, each carrying a story beyond what the camera can see. Through my lens, I seek the beauty of individuality: the quiet confidence, the unguarded smile, the gaze that lingers, and the little details that make every person unmistakably themselves.",
        url: "https://drive.google.com/drive/folders/1-g099BzEfVeOgfdh_pt0nteZZmivnpgO?usp=drive_link"
    },
    {
        id: 11,
        img: rural,
        label: "Rural Landscapes",
        desc: "Rural Landscapes is a collection of places where the land sets the rhythm and life unfolds at its own pace. Through my lens, I explore the quiet beauty of fields, villages, winding paths, and open horizons, where nature and human life meet, and every landscape carries a story of belonging.",
        url: "https://drive.google.com/drive/folders/14gom-Z1bfIC7L03JI4TRZVcE-bOtMBAm?usp=drive_link"
    },
    {
        id: 12,
        img: lancaster,
        label: "Student Life at Lancaster",
        desc: "A little academic ambition, two ounces of campus chaos, plenty of moments worth remembering, and a rather invisible yet impressive amount of tea! This collection captures my student life at a British university, where historic buildings, lecture halls, libraries, and the occasional questionable weather forecast became the backdrop to a world of discovery. Through my lens, I revisit the rhythms of campus life: the quiet concentration, the lost friendships, the fleeting encounters, and the everyday moments that made the university experience so much more than a degree. And, every now and then, they make my third-culture-kid heart miss England.",
        url: "https://drive.google.com/drive/folders/1vkUxPyf2glDuyBtBrRxI2Q5GkcHQgyIN?usp=drive_link"
    },
    {
        id: 13,
        img: untitled,
        label: "Untitled",
        desc: "A little bit of everything, and absolutely no attempt at thematic consistency! This collection brings together the photographs that never quite found a home elsewhere: curious details, unexpected encounters, fleeting moments, and the occasional image I simply couldn’t bring myself to leave behind. Through my lens, I celebrate the beauty of the miscellaneous, where the only thing these photographs have in common is that they caught my eye. A visual odds-and-ends drawer, if you will, minus the dead batteries and mysterious keys.",
        url: "https://drive.google.com/drive/folders/1z8Ynf6ixppNuXzrIvxACDL4Bt9-lbRUv?usp=drive_link"
    },
    {
        id: 14,
        img: urban,
        label: "Urban Landscapes",
        desc: "Cities have a way of revealing themselves in fragments: a façade caught in the afternoon sun, a street disappearing around a corner, a rooftop rising above the noise, or a familiar building suddenly looking unfamiliar. This collection follows those fragments, tracing the shapes, textures, and contrasts that give urban places their character. Some photographs are about the grandeur of architecture; others are about the small, easily overlooked details that make a city feel lived in. Together, they form a portrait of the built world—not as a collection of landmarks, but as a place of movement, memory, and everyday life.",
        url: "https://drive.google.com/drive/folders/1LECuxqvZO_s_9_vHftd9BUeoyKxlAyx3?usp=drive_link"
    },
    {
        id: 15,
        img: wildlife,
        label: "Wildlife",
        desc: "Wildlife is, without question, my favourite collection, and quite possibly the funniest. I am obsessed with wild life, nature’s patterns, prints, living divinity, and animals have an extraordinary talent for making a photographer feel like the least interesting creature in the room. One moment, they are magnificent subjects worthy of a nature documentary; the next, they are pulling faces, ignoring me completely, or behaving in ways that suggest they have never heard of dignity. These shots capture the encounters that make me laugh, marvel, and occasionally question who is actually observing whom. The wild has its own sense of humour, and I am very happy to be the audience.",
        url: "https://drive.google.com/drive/folders/1v4WgAMzeOuhAOGBu9VL9kdI36ijhrjMf?usp=drive_link"
    },
]
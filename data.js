let Animal_Data = [
    { name:'Baxter',
    breed:'Beagle',
    sex:'Male',
    color:'Tri-Color(Black, Brown, White)',
    spayed:'Yes',
    age:'5 Years',
    id:'34621',
    microchip:'982000364789210',
    about:'Meet Baxter, a lovable Beagle with a knack for sniffing out fun! Baxter was rescued from a shelter and has blossomed into a friendly and outgoing boy. He loves long walks and has a keen sense of smell. He is great with kids and other dogs, making him the perfect family pet. His favorite pastime is chasing squirrels in the park and curling up for naps. Baxter is looking for a loving home where he can share his endless affection and playful spirit.',
    image: '../images/BaxterBeagle.jpg'
        },
    { name:'Luna',
        breed:'Maine Coon',
        sex:'Female',
        color:'Grey with white markings',
        spayed:'Yes',
        age:'3 Years',
        id:'57281',
        microchip:'981120019776432',
        about:'Luna is a majestic Maine Coon with a fluffy grey coat and striking white markings. She was found as a stray and has since become a gentle and affectionate companion. Luna enjoys perching on windowsills, watching birds, and being the center of attention. She is a bit shy at first but warms up quickly, especially if you have treats! Luna would thrive in a calm environment where she can relax and be pampered like the queen she is.',
        image: '../images/LunaCat.jpg'
        },

    { name:'Sandy',
        breed:'Golden Retriever',
        sex:'Female',
        color:'Golden',
        spayed:'Yes',
        age:'7 Years',
        id:'41382',
        microchip:'985112004567890',
        about:'Sandy is a heartwarming Golden Retriever with a golden coat as bright as her personality. Rescued from a neglectful situation, she has shown incredible resilience and love for life. Sandy is great with children and other pets, making her an ideal family dog. She enjoys outdoor adventures, especially swimming and fetching. Sandy is looking for a forever home where she can spread her joy and love.',
        image:'../images/SandyDog.jpg'
        },

    { name:'Oliver',
        breed:'Siamese',
        sex:'Male',
        color:'Seal Point',
        spayed:'Yes',
        age:'2 Years',
        id:'62894',
        microchip:'981120025678902',
        about:"Oliver is a sleek Siamese cat with striking blue eyes and a seal point coat. Found wandering in a neighborhood, he's adapted well to shelter life but is eager for a permanent home. Oliver is vocal, expressing his thoughts freely, and enjoys interactive playtime. He's affectionate and loves to be close to his human companions, often following them around the house. Oliver would do best in a home where he can receive plenty of attention and love.",
        image: '../images/OliverCat.jpg'
        },

    { name:'Max',
        breed:'Labrador Retriever',
        sex:'Male',
        color:'Chocolate',
        spayed:'Yes',
        age:'4 Years',
        id:'47920',
        microchip:'985120031478902',
        about:"Max is a charming Chocolate Labrador with a love for life and a tail that never stops wagging. Rescued from an overcrowded shelter, Max has shown immense gratitude and loyalty to his caregivers. He is full of energy and would thrive in a home with a backyard or regular access to outdoor activities. Max is great with children and other dogs, and he's always up for a game of fetch or a leisurely walk. His ideal home would be with an active family who can match his energy and zest for life.",
        image:'../images/MaxDog.jpg'
        },

    { name:'Daisy',
        breed:'Persian',
        sex:'Female',
        color:'White',
        spayed:'Yes',
        age:'6 Years',
        id:'58329',
        microchip:'981120036712345',
        about:"Daisy is a stunning white Persian cat with a luxurious coat and gentle demeanor. She was surrendered by an owner who could no longer care for her. Daisy is a bit of a diva and loves being the center of attention. She enjoys being groomed and will happily sit in your lap for hours. She's not fond of loud noises or fast movements, so a quiet and calm household would be ideal. Daisy is looking for a loving home where she can be pampered and adored.",
        image:'../images/DaisyCat.jpg'
        },

    { name:'Charlie',
        breed:'Dachshund',
        sex:'Male',
        color:'Dapple(Black and Gray)',
        spayed:'Yes',
        age:'3 Years',
        id:'49583',
        microchip:'982000367829101',
        about:"Charlie is a spirited Dapple Dachshund with a playful personality. He was found as a stray and has since shown an incredible zest for life. Charlie loves exploring, whether it's a new trail or the corners of his home. He's a bit mischievous and enjoys hiding his toys. Charlie would do well in a home with an individual or family who enjoys fun and adventure. He's small but has a big heart and a lot of love to give.",
        image:'../images/CharlieDog.jpg'
        },

   { name:'George',
       breed:'British Shorthair',
       sex:'Male',
       color:'Blue(Gray)',
       spayed:'Yes',
       age:'4 Years',
       id:'61029',
       microchip:'985112007651234',
       about:"George enjoys leisurely days, lounging in sunny spots, and watching the world go by. He's not overly demanding for attention but appreciates a good chin scratch and will purr loudly in response. George is a bit reserved at first but becomes a loyal companion once he feels comfortable. He would be perfect for someone seeking a low- maintenance, independent cat.",
        image:'../images/GeorgeCat.jpg'
       },

   { name:'Bella',
       breed:'Boxer',
       sex:'Female',
       color:'Fawn with White Markings',
       spayed:'Yes',
       age:'6 Years',
       id:'50824',
       microchip:'982000360234567',
       about:"Bella is a spirited Boxer with a fawn coat and charming white markings. She was rescued from a neglectful situation and has shown immense love and gratitude to her caregivers. Bella is energetic and playful, enjoying activities like running and playing fetch. She's great with older children and would thrive in a home where she can be active and engaged. Bella has a big personality and would be a fantastic companion for someone who loves adventure and fun.",
        image:'../images/BellaDog.jpg'
       },

   { name:'Sophie',
       breed:'Ragdoll',
       sex:'Female',
       color:'Seal Point with Blue Eyes',
       spayed:'Yes',
       age:'1 Year',
       id:'63845',
       microchip:'985112008765432',
       about:"Sophie is a young Ragdoll cat with a soft seal point coat and mesmerizing blue eyes. She was found as a kitten and raised in a foster home. Sophie is incredibly affectionate, often seeking out laps to curl up in. She's playful and enjoys interactive toys, but she's also content to relax and watch the world go by. Sophie gets along well with other pets and would be an excellent addition to a loving family or individual looking for a gentle and loving companion.",
        image:'../images/SophieCat.jpg'
       }
];
var i = getQueryParam('i');

var name = Animal_Data[i].name;
document.getElementById("name").innerHTML = name;

var breed = Animal_Data[i].breed;
document.getElementById("breed").innerHTML = breed;

var sex = Animal_Data[i].sex;
document.getElementById("sex").innerHTML = sex;

var color = Animal_Data[i].color;
document.getElementById("color").innerHTML = color;

var spayed = Animal_Data[i].spayed;
document.getElementById("spayed").innerHTML = spayed;

var age = Animal_Data[i].age;
document.getElementById("age").innerHTML = age;

var animal_Id = Animal_Data[i].id;
document.getElementById("animal_Id").innerHTML = animal_Id;

var microchip = Animal_Data[i].microchip;
document.getElementById("microchip").innerHTML = microchip;

var about_Me = Animal_Data[i].about;
document.getElementById("about_Me").innerHTML = about_Me;

function buildImage() {
    var img = document.createElement('img');
    img.src = Animal_Data[i].image;
    document.getElementById('content').appendChild(img);
}

function getQueryParam(key){
			let queryParams=new URLSearchParams(window.location.search);
			return queryParams.has(key) ? queryParams.get(key) : null;
		}
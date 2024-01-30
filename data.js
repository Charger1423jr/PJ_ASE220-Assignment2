let Animal_Data = [
    ['Baxter','Dog','Beagle','Male','Tri-Color(Black, Brown, White)', 'Yes','5 Years','34621','982000364789210', "Meet Baxter, a lovable Beagle with a knack for sniffing out fun! Baxter was rescued from a shelter and has blossomed into a friendly and outgoing boy. He loves long walks and has a keen sense of smell. He's great with kids and other dogs, making him the perfect family pet. His favorite pastime is chasing squirrels in the park and curling up for naps. Baxter is looking for a loving home where he can share his endless affection and playful spirit."],
    ['Luna','Cat','Maine Coon','Female','Grey with white markings','Yes','3 Years','57281','981120019776432', "Luna is a majestic Maine Coon with a fluffy grey coat and striking white markings. She was found as a stray and has since become a gentle and affectionate companion. Luna enjoys perching on windowsills, watching birds, and being the center of attention. She's a bit shy at first but warms up quickly, especially if you have treats! Luna would thrive in a calm environment where she can relax and be pampered like the queen she is."],
    ['Sandy','Dog','Golden Retriever','Female','Golden','Yes','7 Years','41382','985112004567890', "Sandy is a heartwarming Golden Retriever with a golden coat as bright as her personality. Rescued from a neglectful situation, she has shown incredible resilience and love for life. Sandy is great with children and other pets, making her an ideal family dog. She enjoys outdoor adventures, especially swimming and fetching. Sandy is looking for a forever home where she can spread her joy and love."],
    ['Oliver','Cat','Siamese','Male','Seal Point','Yes','2 Years','62894','981120025678902', "Oliver is a sleek Siamese cat with striking blue eyes and a seal point coat. Found wandering in a neighborhood, he's adapted well to shelter life but is eager for a permanent home. Oliver is vocal, expressing his thoughts freely, and enjoys interactive playtime. He's affectionate and loves to be close to his human companions, often following them around the house. Oliver would do best in a home where he can receive plenty of attention and love."],
    ['Max','Dog','Labrador Retriever','Male','Chocolate','Yes','4 Years','47920','985120031478902', "Max is a charming Chocolate Labrador with a love for life and a tail that never stops wagging. Rescued from an overcrowded shelter, Max has shown immense gratitude and loyalty to his caregivers. He is full of energy and would thrive in a home with a backyard or regular access to outdoor activities. Max is great with children and other dogs, and he's always up for a game of fetch or a leisurely walk. His ideal home would be with an active family who can match his energy and zest for life."],
    ['Daisy','Cat','Persian','Female','White','Yes','6 Years','58329','981120036712345', "Daisy is a stunning white Persian cat with a luxurious coat and gentle demeanor. She was surrendered by an owner who could no longer care for her. Daisy is a bit of a diva and loves being the center of attention. She enjoys being groomed and will happily sit in your lap for hours. She's not fond of loud noises or fast movements, so a quiet and calm household would be ideal. Daisy is looking for a loving home where she can be pampered and adored."],
    ['Charlie','Dog','Dachshund','Dapple(Black and Gray)','Yes','3 Years','49583','982000367829101', "Charlie is a spirited Dapple Dachshund with a playful personality. He was found as a stray and has since shown an incredible zest for life. Charlie loves exploring, whether it's a new trail or the corners of his home. He's a bit mischievous and enjoys hiding his toys. Charlie would do well in a home with an individual or family who enjoys fun and adventure. He's small but has a big heart and a lot of love to give."],
    ['George','Cat','British Shorthair','Male','Blue(Gray)','Yes','4 Years','61029','985112007651234', "George enjoys leisurely days, lounging in sunny spots, and watching the world go by. He's not overly demanding for attention but appreciates a good chin scratch and will purr loudly in response. George is a bit reserved at first but becomes a loyal companion once he feels comfortable. He would be perfect for someone seeking a low- maintenance, independent cat."],
    ['Bella','Dog','Boxer','Female','Fawn with White Markings','Yes','6 Years','50824','982000360234567', "Bella is a spirited Boxer with a fawn coat and charming white markings. She was rescued from a neglectful situation and has shown immense love and gratitude to her caregivers. Bella is energetic and playful, enjoying activities like running and playing fetch. She's great with older children and would thrive in a home where she can be active and engaged. Bella has a big personality and would be a fantastic companion for someone who loves adventure and fun."],
    ['Sophie','Cat','Ragdoll','Female','Seal Point with Blue Eyes','Yes','1 Year','63845','985112008765432', "Sophie is a young Ragdoll cat with a soft seal point coat and mesmerizing blue eyes. She was found as a kitten and raised in a foster home. Sophie is incredibly affectionate, often seeking out laps to curl up in. She's playful and enjoys interactive toys, but she's also content to relax and watch the world go by. Sophie gets along well with other pets and would be an excellent addition to a loving family or individual looking for a gentle and loving companion."],
];
var i;
var name = Animal_Data[i][0].toString();
document.getElementById("name").innerHTML = name;

var breed = Animal_Data[i][2].toString();
document.getElementById("breed").innerHTML = breed;

var sex = Animal_Data[i][3].toString();
document.getElementById("sex").innerHTML = sex;

var color = Animal_Data[i][4].toString();
document.getElementById("color").innerHTML = color;

var spayed = Animal_Data[i][5].toString();
document.getElementById("spayed").innerHTML = spayed;

var age = Animal_Data[i][6].toString();
document.getElementById("age").innerHTML = age;

var animal_Id = Animal_Data[i][7].toString();
document.getElementById("animal_Id").innerHTML = animal_Id;

var microchip = Animal_Data[i][8].toString();
document.getElementById("microchip").innerHTML = microchip;

var about_Me = Animal_Data[i][9].toString();
document.getElementById("about_Me").innerHTML = about_Me;
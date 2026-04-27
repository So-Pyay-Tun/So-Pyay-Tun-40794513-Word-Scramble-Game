const words = [
    {
        word: "addition",
        hint: "The process of adding numbers"
    },
    {
        word: "meeting",
        hint: "Event in which people come together"
    },
    {
        word: "number",
        hint: "Math symbol used for counting"
    },
    {
        word: "exchange",
        hint: "The act of trading"
    },
    {
        word: "canvas",
        hint: "Piece of fabric for oil painting"
    },
    {
        word: "garden",
        hint: "Space for planting flower and plant"
    },
    {
        word: "position",
        hint: "Location of someone or something"
    },
    {
        word: "feather",
        hint: "Hair like outer covering of bird"
    },
    {
        word: "comfort",
        hint: "A pleasant feeling of relaxation"
    },
    {
        word: "tongue",
        hint: "The muscular organ of mouth"
    },
    {
        word: "teacher",
        hint: "Person who helps students learn"
    },
    {
        word: "student",
        hint: "Person who studies at school"
    },
    {
        word: "school",
        hint: "Place where children are educated"
    },
    {
        word: "planet",
        hint: "A large object orbiting a star"
    },
    {
        word: "energy",
        hint: "Power needed to do work"
    },
    {
        word: "future",
        hint: "Time that is yet to come"
    },
    {
        word: "history",
        hint: "Study of past events"
    },
    {
        word: "science",
        hint: "Study of the natural world"
    },
    {
        word: "pencil",
        hint: "Tool used for writing or drawing"
    },
    {
        word: "bridge",
        hint: "Structure built over water or road"
    },
    {
        word: "silver",
        hint: "A shiny gray precious metal"
    },
    {
        word: "golden",
        hint: "Made of or colored like gold"
    },
    {
        word: "doctor",
        hint: "Person trained to treat illnesses"
    },
    {
        word: "nurse",
        hint: "Person who cares for sick people"
    },
    {
        word: "engine",
        hint: "Machine that converts power into motion"
    },
    {
        word: "rocket",
        hint: "Vehicle used for space travel"
    },
    {
        word: "travel",
        hint: "To go from one place to another"
    },
    {
        word: "market",
        hint: "Place where goods are bought and sold"
    },
    {
        word: "camera",
        hint: "Device used to take photographs"
    },
    {
        word: "bottle",
        hint: "Container used to hold liquids"
    },
    {
        word: "shadow",
        hint: "Dark area created when light is blocked"
    },
    {
        word: "forest",
        hint: "Large area covered with trees"
    },
    {
        word: "desert",
        hint: "Dry area with very little rain"
    },
    {
        word: "island",
        hint: "Land surrounded by water"
    },
    {
        word: "river",
        hint: "Natural flowing water"
    },
    {
        word: "mountain",
        hint: "Very high natural elevation of land"
    },
    {
        word: "ocean",
        hint: "Large body of salt water"
    },
    {
        word: "cloud",
        hint: "White or gray mass in the sky"
    },
    {
        word: "storm",
        hint: "Violent weather with rain and wind"
    },
    {
        word: "winter",
        hint: "Coldest season of the year"
    },
    {
        word: "summer",
        hint: "Hottest season of the year"
    },
    {
        word: "spring",
        hint: "Season after winter"
    },
    {
        word: "autumn",
        hint: "Season when leaves fall"
    },
    {
        word: "butter",
        hint: "Dairy product made from milk"
    },
    {
        word: "cheese",
        hint: "Food made from milk"
    },
    {
        word: "bread",
        hint: "Baked food made from flour"
    },
    {
        word: "sugar",
        hint: "Sweet substance used in food"
    },
    {
        word: "salt",
        hint: "White mineral used for flavor"
    },
    {
        word: "pepper",
        hint: "Spicy seasoning"
    },
    {
        word: "flower",
        hint: "Colorful part of a plant"
    },
    {
        word: "animal",
        hint: "Living creature that is not a plant"
    },
    {
        word: "monkey",
        hint: "Playful animal that lives in trees"
    },
    {
        word: "tiger",
        hint: "Large wild cat with stripes"
    },
    {
        word: "lion",
        hint: "King of the jungle"
    },
    {
        word: "zebra",
        hint: "Animal with black and white stripes"
    },
    {
        word: "horse",
        hint: "Animal used for riding"
    },
    {
        word: "sheep",
        hint: "Animal that gives wool"
    },
    {
        word: "goose",
        hint: "Large water bird"
    },
    {
        word: "eagle",
        hint: "Large bird of prey"
    },
    {
        word: "shark",
        hint: "Dangerous sea fish"
    },
    {
        word: "abstract",
        hint: "Existing in thought, not physical"
    },
    {
        word: "ambition",
        hint: "Strong desire to achieve success"
    },
    {
        word: "boundary",
        hint: "A dividing line or limit"
    },
    {
        word: "collapse",
        hint: "To fall down suddenly"
    },
    {
        word: "conflict",
        hint: "Serious disagreement or fight"
    },
    {
        word: "contrast",
        hint: "Difference between things"
    },
    {
        word: "courage",
        hint: "Ability to face fear"
    },
    {
        word: "decline",
        hint: "To decrease or fall"
    },
    {
        word: "dominate",
        hint: "To control or rule over"
    },
    {
        word: "evident",
        hint: "Clearly seen or understood"
    },
    {
        word: "fortune",
        hint: "Luck or great wealth"
    },
    {
        word: "freedom",
        hint: "State of being free"
    },
    {
        word: "harmony",
        hint: "Peaceful agreement"
    },
    {
        word: "hostile",
        hint: "Unfriendly or aggressive"
    },
    {
        word: "justice",
        hint: "Fair treatment"
    },
    {
        word: "loyalty",
        hint: "Strong feeling of support"
    },
    {
        word: "mystery",
        hint: "Something difficult to understand"
    },
    {
        word: "observe",
        hint: "To watch carefully"
    },
    {
        word: "passion",
        hint: "Strong emotion"
    },
    {
        word: "prosper",
        hint: "To succeed or grow well"
    },
    {
        word: "reality",
        hint: "The state of being real"
    },
    {
        word: "respect",
        hint: "Feeling of deep admiration"
    },
    {
        word: "success",
        hint: "Achievement of a goal"
    },
    {
        word: "triumph",
        hint: "A great victory"
    },
    {
        word: "wisdom",
        hint: "Quality of having experience and knowledge"
    },
    {
        word: "whale",
        hint: "Largest sea mammal"
    },
    {
        word: "spider",
        hint: "Eight-legged insect"
    },
    {
        word: "butterfly",
        hint: "Colorful flying insect"
    },
    {
        word: "keyboard",
        hint: "Device used to type on computer"
    },
    {
        word: "monitor",
        hint: "Screen used with a computer"
    },
    {
        word: "mobile",
        hint: "Portable communication device"
    },
    {
        word: "internet",
        hint: "Global computer network"
    },
    {
        word: "website",
        hint: "Collection of web pages"
    },
    {
        word: "password",
        hint: "Secret word used for login"
    },
    {
        word: "battery",
        hint: "Device that stores power"
    },
    {
        word: "signal",
        hint: "Transmission of information"
    },
    {
        word: "mirror",
        hint: "Reflective surface"
    },
    {
        word: "window",
        hint: "Glass opening in a wall"
    },
    {
        word: "door",
        hint: "Movable barrier for entrance"
    },
    {
        word: "floor",
        hint: "Bottom surface of a room"
    },
    {
        word: "ceiling",
        hint: "Top inside surface of a room"
    },
    {
        word: "wallet",
        hint: "Small case for money"
    },
    {
        word: "ticket",
        hint: "Pass for travel or event"
    },
    {
        word: "airport",
        hint: "Place where airplanes land"
    },
    {
        word: "station",
        hint: "Place where trains stop"
    },
    {
        word: "engineer",
        hint: "Person who designs machines"
    },
    {
        word: "artist",
        hint: "Person who creates art"
    },
    {
        word: "writer",
        hint: "Person who writes books"
    },
    {
        word: "actor",
        hint: "Person who performs in movies"
    },
    {
        word: "director",
        hint: "Person who leads movie production"
    },
    {
        word: "police",
        hint: "People who enforce law"
    },
    {
        word: "lawyer",
        hint: "Person who practices law"
    },
    {
        word: "judge",
        hint: "Person who decides court cases"
    },
    {
        word: "driver",
        hint: "Person who drives vehicle"
    },
    {
        word: "pilot",
        hint: "Person who flies airplane"
    },
    {
        word: "farmer",
        hint: "Person who works on farm"
    },
    
    {
        word: "expansion",
        hint: "The process of increase or grow"
    },
    {
        word: "country",
        hint: "A politically identified region"
    },
    {
        word: "group",
        hint: "A number of objects or persons"
    },
    {
        word: "taste",
        hint: "Ability of tongue to detect flavour"
    },
    {
        word: "store",
        hint: "Large shop where goods are traded"
    },
    {
        word: "field",
        hint: "Area of land for farming activities"
    },
    {
        word: "friend",
        hint: "Person other than a family member"
    },
    {
        word: "pocket",
        hint: "A bag for carrying small items"
    },
    {
        word: "needle",
        hint: "A thin and sharp metal pin"
    },
    {
        word: "expert",
        hint: "Person with extensive knowledge"
    },
    {
        word: "statement",
        hint: "A declaration of something"
    },
    {
        word: "second",
        hint: "One-sixtieth of a minute"
    },
    {
        word: "library",
        hint: "Place containing collection of books"
    },
    
]
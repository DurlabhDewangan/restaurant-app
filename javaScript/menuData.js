
    // This would be fetched from an API in a real application
    const menuData = {
        "starters": [
            {
                "id": 1,
                "name": "Samosa Chaat",
                "description": "Deconstructed samosa with tamarind foam, yogurt espuma, and chickpea crisps",
                "price": 180,
                "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "category": "starters",
                "vegetarian": true
            },
            {
                "id": 2,
                "name": "Paneer Tikka",
                "description": "Smoked cottage cheese, bell pepper gel, charcoal dust, mint chutney foam",
                "price": 220,
                "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "category": "starters",
                "vegetarian": true
            },
            {
                "id": 3,
                "name": "Chicken 65",
                "description": "Crispy chicken, curry leaf powder, red chili emulsion, micro greens",
                "price": 240,
                "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
                "category": "starters",
                "vegetarian": false
            },
            {
                "id": 4,
                "name": "Dahi Puri",
                "description": "Crisp puri shells, spiced potato foam, tamarind gel, yogurt espuma",
                "price": 200,
                "image": "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "category": "starters",
                "vegetarian": true
            }
        ],
        "mains": [
            {
                "id": 5,
                "name": "Butter Chicken",
                "description": "Tandoori chicken, tomato butter emulsion, fenugreek foam, micro cilantro",
                "price": 320,
                "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "category": "mains",
                "vegetarian": false
            },
            {
                "id": 6,
                "name": "Lamb Rogan Josh",
                "description": "Slow-cooked lamb, Kashmiri spices, onion petals, saffron rice crisp",
                "price": 380,
                "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyaXlhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
                "category": "mains",
                "vegetarian": false
            },
            {
                "id": 7,
                "name": "Dal Makhani",
                "description": "48-hour black lentils, smoked ghee, tomato concasse, cream foam",
                "price": 260,
                "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFzYWxhJTIwZG9zYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "category": "mains",
                "vegetarian": true
            },
            {
                "id": 8,
                "name": "Malai Kofta",
                "description": "Paneer-potato dumplings, cashew cream sauce, saffron foam, edible gold",
                "price": 290,
                "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "category": "mains",
                "vegetarian": true
            }
        ],
        "breads-rice": [
            {
                "id": 9,
                "name": "Garlic Naan",
                "description": "Tandoor-baked, black garlic butter, micro cilantro, edible flowers",
                "price": 80,
                "image": "https://images.unsplash.com/photo-1542367592-8849eb950fd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "category": "breads-rice",
                "vegetarian": true
            },
            {
                "id": 10,
                "name": "Hyderabadi Biryani",
                "description": "Basmati rice, sous vide meat, saffron foam, fried onion crisp",
                "price": 350,
                "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
                "category": "breads-rice",
                "vegetarian": false
            },
            {
                "id": 11,
                "name": "Jeera Rice",
                "description": "Basmati, toasted cumin, edible flowers, saffron strands",
                "price": 150,
                "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyaXlhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
                "category": "breads-rice",
                "vegetarian": true
            },
            {
                "id": 12,
                "name": "Laccha Paratha",
                "description": "Flaky layered bread, ghee foam, nigella seed dust",
                "price": 90,
                "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFzYWxhJTIwZG9zYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "category": "breads-rice",
                "vegetarian": true
            }
        ],
        "desserts": [
            {
                "id": 13,
                "name": "Gulab Jamun",
                "description": "Milk cake crumble, rosewater foam, cardamom gel, saffron strands",
                "price": 150,
                "image": "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "category": "desserts",
                "vegetarian": true
            },
            {
                "id": 14,
                "name": "Kulfi",
                "description": "Saffron-pistachio ice cream, rose petal crisp, honeycomb, gold leaf",
                "price": 180,
                "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
                "category": "desserts",
                "vegetarian": true
            },
            {
                "id": 15,
                "name": "Rasmalai",
                "description": "Cottage cheese cake, saffron milk foam, pistachio crumble",
                "price": 170,
                "image": "https://images.unsplash.com/photo-1542367592-8849eb950fd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "category": "desserts",
                "vegetarian": true
            }
        ],
        "drinks": [
            {
                "id": 16,
                "name": "Mango Lassi",
                "description": "Alphonso mango foam, yogurt espuma, cardamom dust",
                "price": 120,
                "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "category": "drinks",
                "vegetarian": true
            },
            {
                "id": 17,
                "name": "Masala Chai",
                "description": "Tea caviar, milk foam, ginger gel, edible flowers",
                "price": 90,
                "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
                "category": "drinks",
                "vegetarian": true
            },
            {
                "id": 18,
                "name": "Bollywood Martini",
                "description": "Vodka, mango foam, saffron syrup, edible gold",
                "price": 250,
                "image": "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "category": "drinks",
                "vegetarian": true
            }
        ]
    };

    // Flatten the menu data into a single array for searching
    const allMenuItems = Object.values(menuData).flat();


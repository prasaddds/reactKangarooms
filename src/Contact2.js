const contacts = [
    {
      id:1,
      name: "Double Bed Room",
      pool: "Yes",
      lpool: "https://www.maxpixel.net/static/photo/640/Hotel-Swim-Pool-Sign-Facility-Swimming-Symbol-32368.png",
      wifi: "Yes",
      lwifi: "https://image.shutterstock.com/image-vector/vector-wifi-icon-on-white-260nw-300061382.jpg",
      breakfast: "Yes",
      lbreakfast: "https://cdn3.vectorstock.com/i/1000x1000/62/62/breakfast-symbol-collection-design-vector-35626262.jpg",
      theme: "Purple",
      ltheme: "https://i.pinimg.com/736x/af/7d/1f/af7d1fcfe8aeab109afb7ff5d2cdc7ca--purple-walls-bedspreads.jpg",
      location: "Tourist Lodge, Lawgtlai",
      llocation: "https://cdn5.vectorstock.com/i/1000x1000/35/84/location-symbol-map-geography-direction-vector-24273584.jpg",
      type: "Family",
      ltype: "https://cdn2.vectorstock.com/i/1000x1000/58/61/family-symbol-isolated-vector-1825861.jpg",
      available: "Available: 10",
      lavailable: "https://thumbs.dreamstime.com/z/rooms-available-sign-flat-icon-white-red-hanging-isolated-background-eps-file-91955339.jpg",
      booked: "Booked: 0",
      lbooked:"https://image.shutterstock.com/image-vector/keep-door-closed-graphic-sign-260nw-1485053927.jpg",
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQqrqr2-hFlbz7g89J8-ce6EPDJapHnRbuUw&usqp=CAU"
      
    },
    {
      id:2,
      name: "single Bed Room",
      pool: "No",
      lpool: "https://www.mypoolsigns.com/img/lg/K/No-Swimming-Symbol-Sign-K-5333.gif",
      wifi: "No",
      lwifi: "https://cdn5.vectorstock.com/i/1000x1000/97/74/no-wifi-sign-symbol-on-white-background-vector-26149774.jpg",
      breakfast: "Yes",
      lbreakfast: "https://cdn3.vectorstock.com/i/1000x1000/62/62/breakfast-symbol-collection-design-vector-35626262.jpg",
      theme: "White",
      ltheme: "https://i.pinimg.com/originals/d5/b8/17/d5b817d558fc14a63f41f95c25ca7ba9.jpg",
      location: "Hotel Regency, Khatla",
      llocation: "https://cdn5.vectorstock.com/i/1000x1000/35/84/location-symbol-map-geography-direction-vector-24273584.jpg",
      type: "Single/Couple",
      ltype: "https://cdn2.vectorstock.com/i/1000x1000/58/61/family-symbol-isolated-vector-1825861.jpg",
      available: "Available: 10",
      lavailable: "https://thumbs.dreamstime.com/z/rooms-available-sign-flat-icon-white-red-hanging-isolated-background-eps-file-91955339.jpg",
      booked: "Booked: 0",
      lbooked:"https://image.shutterstock.com/image-vector/keep-door-closed-graphic-sign-260nw-1485053927.jpg",
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAB6NOfJeKU0oK6oHDj5NFffY5_mzd5B3oiw&usqp=CAU"
    },
    {
      id:3,
      name: "Double Bed Room",
      pool: "Yes",
      lpool: "https://www.maxpixel.net/static/photo/640/Hotel-Swim-Pool-Sign-Facility-Swimming-Symbol-32368.png",
      wifi: "No",
      lwifi: "https://image.shutterstock.com/image-vector/vector-wifi-icon-on-white-260nw-300061382.jpg",
      breakfast: "Yes",
      lbreakfast: "https://cdn3.vectorstock.com/i/1000x1000/62/62/breakfast-symbol-collection-design-vector-35626262.jpg",
      theme: "White",
      ltheme: "https://i.pinimg.com/originals/d5/b8/17/d5b817d558fc14a63f41f95c25ca7ba9.jpg",
      location: " Tourist Lodge, Lawgtlai",
      llocation: "https://cdn5.vectorstock.com/i/1000x1000/35/84/location-symbol-map-geography-direction-vector-24273584.jpg",
      type: "Family",
      ltype: "https://cdn2.vectorstock.com/i/1000x1000/58/61/family-symbol-isolated-vector-1825861.jpg",
      available: "Available: 10",
      lavailable: "https://thumbs.dreamstime.com/z/rooms-available-sign-flat-icon-white-red-hanging-isolated-background-eps-file-91955339.jpg",
      booked: "Booked: 0",
      lbooked:"https://image.shutterstock.com/image-vector/keep-door-closed-graphic-sign-260nw-1485053927.jpg",
      imgURL:
        "https://images.livspace-cdn.com/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-1643351360-ZAORQ/mbr-1643371605-x8hry/lk-in-mbr-0595-1648695907-79l4O.jpeg"
    },
    {
      id:4,
      name: "Double Bed Room",
      pool: "Yes",
      lpool: "https://www.maxpixel.net/static/photo/640/Hotel-Swim-Pool-Sign-Facility-Swimming-Symbol-32368.png",
      wifi: "No",
      lwifi: "https://image.shutterstock.com/image-vector/vector-wifi-icon-on-white-260nw-300061382.jpg",
      breakfast: "Yes",
      lbreakfast: "https://cdn3.vectorstock.com/i/1000x1000/62/62/breakfast-symbol-collection-design-vector-35626262.jpg",
      theme: "White",
      ltheme: "https://i.pinimg.com/originals/d5/b8/17/d5b817d558fc14a63f41f95c25ca7ba9.jpg",
      location: "Hotel Regency, Khatla",
      llocation: "https://cdn5.vectorstock.com/i/1000x1000/35/84/location-symbol-map-geography-direction-vector-24273584.jpg",
      type: "Family",
      ltype: "https://cdn2.vectorstock.com/i/1000x1000/58/61/family-symbol-isolated-vector-1825861.jpg",
      available: "Available: 10",
      lavailable: "https://thumbs.dreamstime.com/z/rooms-available-sign-flat-icon-white-red-hanging-isolated-background-eps-file-91955339.jpg",
      booked: "Booked: 0",
      lbooked:"https://image.shutterstock.com/image-vector/keep-door-closed-graphic-sign-260nw-1485053927.jpg",
      imgURL:
        "https://wpmedia.roomsketcher.com/content/uploads/2021/12/09104800/Large_master_bedroom_design_ideas_wide-1024x768.jpg"
    },
    {
      id:5,
      name: "Double Bed Room",
      pool: "Yes",
      lpool: "https://www.maxpixel.net/static/photo/640/Hotel-Swim-Pool-Sign-Facility-Swimming-Symbol-32368.png",
      wifi: "No",
      lwifi: "https://image.shutterstock.com/image-vector/vector-wifi-icon-on-white-260nw-300061382.jpg",
      breakfast: "Yes",
      lbreakfast: "https://cdn3.vectorstock.com/i/1000x1000/62/62/breakfast-symbol-collection-design-vector-35626262.jpg",
      theme: "White",
      ltheme: "https://i.pinimg.com/originals/d5/b8/17/d5b817d558fc14a63f41f95c25ca7ba9.jpg",
      location: "Hotel Floria, Khatla",
      llocation: "https://cdn5.vectorstock.com/i/1000x1000/35/84/location-symbol-map-geography-direction-vector-24273584.jpg",
      type: "Family",
      ltype: "https://cdn2.vectorstock.com/i/1000x1000/58/61/family-symbol-isolated-vector-1825861.jpg",
      available: "Available: 10",
      lavailable: "https://thumbs.dreamstime.com/z/rooms-available-sign-flat-icon-white-red-hanging-isolated-background-eps-file-91955339.jpg",
      booked: "Booked: 0",
      lbooked:"https://image.shutterstock.com/image-vector/keep-door-closed-graphic-sign-260nw-1485053927.jpg",
      imgURL:
        "https://homebnc.com/homeimg/2020/10/02c-bedroom-decor-ideas-for-couples-homebnc-v3-1.jpg"
    },
    {
      id:6,
      name: "Double Bed Room",
      pool: "Yes",
      lpool: "https://www.maxpixel.net/static/photo/640/Hotel-Swim-Pool-Sign-Facility-Swimming-Symbol-32368.png",
      wifi: "No",
      lwifi: "https://image.shutterstock.com/image-vector/vector-wifi-icon-on-white-260nw-300061382.jpg",
      breakfast: "Yes",
      lbreakfast: "https://cdn3.vectorstock.com/i/1000x1000/62/62/breakfast-symbol-collection-design-vector-35626262.jpg",
      theme: "White",
      ltheme: "https://i.pinimg.com/originals/d5/b8/17/d5b817d558fc14a63f41f95c25ca7ba9.jpg",
      location: "Himalaya Resort,Lushai",
      llocation: "https://cdn5.vectorstock.com/i/1000x1000/35/84/location-symbol-map-geography-direction-vector-24273584.jpg",
      type: "Family",
      ltype: "https://cdn2.vectorstock.com/i/1000x1000/58/61/family-symbol-isolated-vector-1825861.jpg",
      available: "Available: 10",
      lavailable: "https://thumbs.dreamstime.com/z/rooms-available-sign-flat-icon-white-red-hanging-isolated-background-eps-file-91955339.jpg",
      booked: "Booked: 0",
      lbooked:"https://image.shutterstock.com/image-vector/keep-door-closed-graphic-sign-260nw-1485053927.jpg",
      imgURL:
        "https://i.pinimg.com/736x/a2/7a/8f/a27a8f8577148682f095f325476bd706--guest-bedrooms-coastal-bedrooms.jpg"
      
    }
  ];
  
  export default contacts;
  
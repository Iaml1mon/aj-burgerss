import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';

interface Location {
  name: string;
  address: string;
  googleMapsLink: string;
  hours: string[]; // Add hours property to Location interface
}

const locations: Location[] = [
  {
    name: "Sefton",
    address: "107 Carlingford St, Sefton NSW",
    googleMapsLink: "https://www.google.com/maps/search/?api=1&query=107+Carlingford+St,+Sefton+NSW,+Australia",
    hours: [
      "Wednesday: 5:00 PM - 12:00 AM",
      "Thursday: 5:00 PM - 12:00 AM",
      "Friday: 5:00 PM - 12:00 AM",
      "Saturday: 5:00 PM - 12:00 AM",
      "Sunday: 5:00 PM - 12:00 AM",
      "Monday: Closed",
      "Tuesday: Closed"
    ]
  },
  {
    name: "Lidcombe",
    address: "90 Parramatta Rd, Lidcombe NSW",
    googleMapsLink: "https://www.google.com/maps/search/?api=1&query=90+Parramatta+Rd,+Lidcombe+NSW,+Australia",
    hours: [
      "Wednesday: 6:00 PM - 1:00 AM",
      "Thursday: 6:00 PM - 1:00 AM",
      "Friday: 6:00 PM - 1:00 AM",
      "Saturday: 6:00 PM - 1:00 AM",
      "Sunday: 6:00 PM - 1:00 AM",
      "Monday: Closed",
      "Tuesday: Closed"
    ]
  }
];

// Removed the old global hours array

const FindTrucks = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location>(locations[0]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.h1 
            className="text-6xl font-righteous text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Find Our <span className="text-primary">Trucks</span>
          </motion.h1>
          <motion.p 
            className="text-2xl font-marker text-center text-primary mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Visit Us at Sefton or Lidcombe! 📍
          </motion.p>
        </div>
        
        {/* Wave Animation */}
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-20 bg-white"
          style={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 0, 75% 50%, 50% 0, 25% 50%, 0 0)"
          }}
          animate={{
            y: [0, 5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </section>

      {/* Location Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg border-2 border-primary/20 p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Location Tabs */}
            <div className="flex justify-center mb-8 space-x-4">
              {locations.map((location) => (
                <motion.button
                  key={location.name}
                  onClick={() => setSelectedLocation(location)}
                  className={`px-6 py-2 rounded-full font-righteous text-lg transition-colors 
                              ${selectedLocation.name === location.name 
                                ? 'bg-primary text-black'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {location.name}
                </motion.button>
              ))}
            </div>

            {/* Location Details */}
            <div className="text-center">
              <h3 className="text-3xl font-righteous text-black mb-4">{selectedLocation.name}</h3>
              <div className="flex items-center justify-center text-gray-600 font-marker mb-6">
                <FaMapMarkerAlt className="mr-2 text-primary" />
                <span>{selectedLocation.address}</span>
              </div>
              
              <a 
                href={selectedLocation.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-black px-6 py-2 rounded-full font-semibold mb-8
                           hover:bg-primary/90 transition-all"
              >
                Get Directions
              </a>

              <h4 className="text-2xl font-righteous text-black mb-4">Opening Hours</h4>
              <div className="space-y-1 font-marker text-gray-700">
                {/* Display hours from selectedLocation */}
                {selectedLocation.hours.map((hour, index) => (
                  <p key={index}>{hour}</p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FindTrucks;


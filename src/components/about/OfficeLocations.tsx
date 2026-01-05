
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/theme/ThemeProvider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export const OfficeLocations = () => {
  const { theme } = useTheme();
  
  // const offices = [
  //   {
  //     city: "Karachi",
  //     address: "BMA Capital Head Office, 801 Unitower, I.I. Chundrigar Road",
  //     phone: "+92 21 111 262 111",
  //     email: "info.karachi@bmacapital.com",
  //     image: "https://images.unsplash.com/photo-1566156308040-52455e611b33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
  //   },
  //   {
  //     city: "Lahore",
  //     address: "BMA Capital, Office 3, 5th Floor, Clifton Diamond, Block 4",
  //     phone: "+92 42 111 262 111",
  //     email: "info.lahore@bmacapital.com",
  //     image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
  //   },
  //   {
  //     city: "Islamabad",
  //     address: "BMA Capital, Office 5, 3rd Floor, Rizwan Arcade, Blue Area",
  //     phone: "+92 51 111 262 111",
  //     email: "info.islamabad@bmacapital.com",
  //     image: "https://images.unsplash.com/photo-1567361424395-7327d8b123b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  //   }
  // ];

  const offices = [
  {
    city: "Karachi - Head Office",
    address: "BMA Capital Management Ltd., Unitower, Level 8, I.I. Chundriger Road, Karachi 74000, Pakistan",
    phone: "+92 21 111 262 111",
    fax: "+92 21 32430748",
    email: "info.karachi@bmacapital.com",
    image: "https://images.unsplash.com/photo-1566156308040-52455e611b33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
  },
  {
    city: "Karachi - Bahadurabad Branch",
    address: "Office # 3, Mezzanine Floor, Akber Manzil, Main Bahadurabad Roundabout, Karachi",
    phone: "+92 21 34860393-98",
    fax: "+92 21 34931396",
    email: "bahadurabad@bmacapital.com",
    image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
  },
  {
    city: "Karachi - Gulshan-e-Iqbal Branch",
    address: "Office No.2-B, 1st Floor, WALI CENTER, Block 13-C, near Ashfaq memorial, Gulshan-e-Iqbal Karachi",
    phone: "+92 21 34825023",
    email: "gulshan@bmacapital.com",
    image: "https://images.unsplash.com/photo-1567361424395-7327d8b123b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    city: "Karachi - North Nazimabad Branch",
    address: "D-14 Office No 02, 2nd Floor Block H, MCB Building, Near 5 Star Round About, North Nazimabad Karachi",
    phone: "+92 21 36672301-00",
    email: "northnazimabad@bmacapital.com",
    image: "https://images.unsplash.com/photo-1566156308040-52455e611b33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
  },
  {
    city: "Karachi - Stock Exchange Branch",
    address: "Room 141, Pakistan Stock Exchange, Stock Exchange Road, Karachi",
    phone: "+92 21 32410617",
    email: "stockexchange@bmacapital.com",
    image: "https://images.unsplash.com/photo-1566156308040-52455e611b33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
  },
  {
    city: "Lahore - Cavalry Branch",
    address: "Office No. 74, 2nd Floor, Commercial Area, Main Cavalry Ground, Lahore Cantt, Lahore",
    phone: "+92 42 36676614-20",
    fax: "+92 42 36619912",
    email: "lahorecavalry@bmacapital.com",
    image: "https://images.unsplash.com/photo-1566156308040-52455e611b33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
  },
  {
    city: "Lahore - Gulberg Branch",
    address: "Commercial Office No. 402, 7th Floor, Mega Tower 63-B, Main Boulevard, Gulberg II, Lahore",
    phone: "+92 42 35762953-57",
    email: "lahoregulberg@bmacapital.com",
    image: "https://images.unsplash.com/photo-1566156308040-52455e611b33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
  },
  {
    city: "Lahore - LSE Branch",
    address: "1st Floor Room# 110-111, LSE Building, 19- Khayaban-e-Aiwan-e-Iqbal, Lahore",
    phone: "+92 42 36280931-34",
    email: "lahorelse@bmacapital.com",
    image: "https://images.unsplash.com/photo-1566156308040-52455e611b33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
  },
  {
    city: "Islamabad Branch",
    address: "104, 1st Floor, 82-East, Muhammad Gulistan Khan House, Fazel e Haq, Blue Area, Islamabad Pakistan",
    phone: "+92 51 280 2354-5",
    fax: "+92 51 280 2356",
    email: "info.islamabad@bmacapital.com",
    image: "https://images.unsplash.com/photo-1566156308040-52455e611b33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
  },
  {
    city: "Faisalabad Branch",
    address: "Mezzanine Floor, State Life Building #2, Plot No. 833 Liaquat Road, Faisalabad",
    phone: "+92 41 2612261-5",
    email: "faisalabad@bmacapital.com",
    image: "https://images.unsplash.com/photo-1566156308040-52455e611b33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
  },
  {
    city: "Multan Branch",
    address: "Office No. 607/A, 6th Floor, The United Mall, Plot No. 74 Abdali Road, Multan",
    phone: "+92 61 4576611-15",
    fax: "+92 61 4576615",
    email: "multan@bmacapital.com",
    image: "https://images.unsplash.com/photo-1566156308040-52455e611b33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
  },
  {
    city: "Sargodha Branch",
    address: "Ground floor, Shan Plaza, Block No 16, Main Khushab Road, Near Allied Bank Limited, Sargodha",
    phone: "+92 48 3767817-18",
    email: "sargodha@bmacapital.com",
    image: "https://images.unsplash.com/photo-1566156308040-52455e611b33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
  },
  {
    city: "Sialkot Branch",
    address: "2nd Floor, Sialkot Business & Commerce Centre, Paris Road, Sialkot, Adjacent to Sialkot Chamber of Commerce",
    phone: "+92 52 4260091-94",
    email: "sialkot@bmacapital.com",
    image: "https://images.unsplash.com/photo-1566156308040-52455e611b33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
  },
  {
    city: "Gujranwala Branch",
    address: "51-H block Near Standard Chartered Bank Trust Plaza GT road Gujranwala",
    phone: "+92 55 3848501-05",
    email: "gujranwala@bmacapital.com",
    image: "https://images.unsplash.com/photo-1566156308040-52455e611b33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
  },
  {
    city: "Chakwal Branch",
    address: "Office No. 12, 1st Floor, Ejaz Plaza, Talagang Road Chakwal",
    phone: "+92 543 553850, +92 543 543720, +92 543 543721",
    email: "chakwal@bmacapital.com",
    image: "https://images.unsplash.com/photo-1566156308040-52455e611b33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
  },
  {
    city: "Peshawar Branch",
    address: "Shop No.F1 & F2, 1st Floor Mall Tower 35, The Mall Peshawar Cantt",
    phone: "+92 91 5274770-72",
    email: "peshawar@bmacapital.com",
    image: "https://images.unsplash.com/photo-1566156308040-52455e611b33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
  },
  {
    city: "Jhelum Branch",
    address: "2nd Floor, Khalid Plaza, Plot#7/89, Kazim Kamal Road, Jhelum, Punjab",
    phone: "+92 543 4620594-97",
    email: "jhelum@bmacapital.com",
    image: "https://images.unsplash.com/photo-1566156308040-52455e611b33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
  },
  {
    city: "Gujar Khan Branch",
    address: "1st Floor, Office# 101 & 102, Akbar Kayani Plaza, GT Road, Gujar Khan",
    phone: "+92 51 3762083",
    email: "gujarkhan@bmacapital.com",
    image: "https://images.unsplash.com/photo-1566156308040-52455e611b33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
  },
  {
    city: "Bahawalpur Branch",
    address: "Plot # 13-A, 1st Floor, Office # 2, Model Town B, Bahawalpur",
    phone: "+92 62 2883158",
    email: "bahawalpur@bmacapital.com",
    image: "https://images.unsplash.com/photo-1566156308040-52455e611b33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
  }
];

  return (
    <section className={`py-24 ${theme === 'dark' ? 'bg-gradient-to-b from-gray-900 to-[#1A1F2C]' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge className="mb-2">Our Locations</Badge>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? '' : 'text-gray-900'}`}>
            Visit Our Offices
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            With offices in Pakistan's major financial centers, we're accessible wherever you need us.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <OfficeCard 
              key={index}
              city={office.city}
              address={office.address}
              phone={office.phone}
              email={office.email}
              image={office.image}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface OfficeCardProps {
  city: string;
  address: string;
  phone: string;
  email: string;
  image: string;
  delay?: number;
}

const OfficeCard: React.FC<OfficeCardProps> = ({ city, address, phone, email, image, delay = 0 }) => {
  const { theme } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, amount: 0.1 }}
      className={`overflow-hidden rounded-xl h-full ${
        theme === 'dark'
          ? 'bg-white/5 backdrop-blur-sm border border-white/10'
          : 'bg-white shadow-md border border-gray-100'
      }`}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="relative h-20 overflow-hidden">
        {/* <img 
          src={image}
          alt={`BMA Capital ${city} Office`}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        /> */}
        {/* <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-t from-black/70 to-transparent' : 'bg-gradient-to-t from-black/50 to-transparent'}`}></div> */}
        <div className="absolute bottom-4 left-4">
          <h3 className="text-2xl font-bold text-white">{city}</h3>
        </div>
      </div>  
      
      <div className="p-6 space-y-4">
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{address}</p>
        </div>
        
        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 text-primary shrink-0" />
          <a 
            href={`tel:${phone}`} 
            className={`${theme === 'dark' ? 'text-gray-300 hover:text-primary' : 'text-gray-700 hover:text-primary'} transition-colors`}
          >
            {phone}
          </a>
        </div>
        
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-primary shrink-0" />
          <a 
            href={`mailto:${email}`} 
            className={`${theme === 'dark' ? 'text-gray-300 hover:text-primary' : 'text-gray-700 hover:text-primary'} transition-colors`}
          >
            {email}
          </a>
        </div>
        
        {/* <Button variant="outline" size="sm" className="w-full mt-4 gap-2 group">
          <span>Get Directions</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button> */}
      </div>
    </motion.div>
  );
};

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  image: string;
  priceRange: string;
  includes: string[];
  metaTitle: string;
  metaDescription: string;
}

export const services: Service[] = [
  {
    slug: 'office-cleaning',
    name: 'Office Cleaning',
    shortDescription:
      'Professional daily and weekly office cleaning for NYC businesses of all sizes.',
    fullDescription:
      'Keep your NYC workplace spotless, healthy, and client-ready with our professional office cleaning services. Our trained teams work around your schedule — evenings, weekends, or early mornings — to deliver consistent, disruption-free results. From reception areas and conference rooms to restrooms and break rooms, we cover every corner with hospital-grade disinfectants and professional-grade equipment.',
    icon: 'mdi:office-building',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    priceRange: '$150 – $500',
    includes: [
      'Dusting all surfaces and furniture',
      'Vacuuming and mopping floors',
      'Sanitizing desks, keyboards, and phones',
      'Cleaning and disinfecting restrooms',
      'Emptying trash and recycling',
      'Cleaning break rooms and kitchens',
      'Wiping down glass doors and partitions',
      'Restocking paper products and soap',
    ],
    metaTitle: 'Office Cleaning NYC | Professional Commercial Cleaning | Sparkle Clean',
    metaDescription:
      'Professional office cleaning services in NYC. Daily, weekly & monthly plans for Manhattan, Brooklyn & all boroughs. Trusted by 500+ businesses. Get a free quote.',
  },
  {
    slug: 'residential-cleaning',
    name: 'Residential Cleaning',
    shortDescription:
      'Recurring home cleaning services tailored to your schedule and standards.',
    fullDescription:
      'Your home should be your sanctuary. Our residential cleaning teams in NYC deliver thorough, reliable cleaning on weekly, bi-weekly, or monthly schedules — so you can come home to a spotless space every time. We bring all supplies and equipment, use eco-friendly products safe for children and pets, and consistently exceed expectations.',
    icon: 'mdi:home',
    image:
      'https://images.unsplash.com/photo-1484101255380-0d93ea1b5b90?w=800&q=80',
    priceRange: '$100 – $350',
    includes: [
      'Kitchen cleaning and disinfecting',
      'Bathroom scrubbing and sanitizing',
      'Bedroom dusting and vacuuming',
      'Living area cleaning and tidying',
      'Floor vacuuming and mopping',
      'Trash removal',
      'Surface wiping throughout',
      'Interior window cleaning',
    ],
    metaTitle: 'Residential Cleaning NYC | Home Cleaning Service | Sparkle Clean NYC',
    metaDescription:
      'Reliable home cleaning services in NYC. Eco-friendly products, background-checked cleaners, flexible scheduling. Serving Manhattan, Brooklyn, Queens & more.',
  },
  {
    slug: 'deep-cleaning',
    name: 'Deep Cleaning',
    shortDescription:
      'Intensive top-to-bottom deep cleaning for homes and offices that need a reset.',
    fullDescription:
      'When a standard clean isn\'t enough, our deep cleaning service tackles every surface, crevice, and corner. Perfect for seasonal resets, first-time cleanings, pre-event preparation, or any space that needs serious attention. Our deep cleaning teams use specialized equipment and professional-grade solutions to restore your space to pristine condition.',
    icon: 'mdi:broom',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
    priceRange: '$250 – $800',
    includes: [
      'Deep scrubbing of all bathrooms including grout',
      'Interior oven and refrigerator cleaning',
      'Inside cabinet and drawer cleaning',
      'Baseboards, doors, and door frame scrubbing',
      'Light fixture and ceiling fan cleaning',
      'Behind and under furniture cleaning',
      'Window sills and tracks cleaning',
      'Detailed wall spot cleaning',
    ],
    metaTitle: 'Deep Cleaning NYC | Professional Deep Clean Service | Sparkle Clean',
    metaDescription:
      'Professional deep cleaning services in NYC. Top-to-bottom intensive cleaning for homes and offices. Same-day availability. Book your deep clean today.',
  },
  {
    slug: 'move-in-move-out-cleaning',
    name: 'Move-In/Move-Out Cleaning',
    shortDescription:
      'Stress-free move-in and move-out cleaning to protect your deposit and start fresh.',
    fullDescription:
      'Moving is stressful enough without worrying about the cleaning. Our move-in/move-out cleaning service ensures you leave your old place spotless — protecting your security deposit — and that your new home is sparkling clean before the boxes arrive. We know exactly what NYC landlords look for and we deliver a standard that passes every inspection.',
    icon: 'mdi:truck',
    image:
      'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=800&q=80',
    priceRange: '$200 – $600',
    includes: [
      'Full deep clean of all rooms',
      'Kitchen appliance interior cleaning',
      'Bathroom tile, grout, and fixture scrubbing',
      'Inside all cabinets and closets',
      'Baseboard and trim cleaning',
      'Window cleaning inside and sills',
      'Wall spot cleaning',
      'Floor deep scrubbing or carpet vacuuming',
    ],
    metaTitle: 'Move-In/Move-Out Cleaning NYC | Security Deposit Protection | Sparkle Clean',
    metaDescription:
      'Professional move-in and move-out cleaning in NYC. Protect your security deposit with our thorough end-of-tenancy clean. Available 7 days a week across all 5 boroughs.',
  },
  {
    slug: 'post-construction-cleaning',
    name: 'Post-Construction Cleaning',
    shortDescription:
      'Specialized cleaning to remove construction dust, debris, and residue after renovations.',
    fullDescription:
      'Construction and renovation projects leave behind a unique type of mess — fine concrete dust, adhesive residue, paint overspray, and construction debris that requires specialized knowledge and equipment to remove safely. Our post-construction cleaning team in NYC is experienced with all types of renovation projects, from apartment gut-renovations to commercial fit-outs, delivering a move-in-ready result.',
    icon: 'mdi:hard-hat',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    priceRange: '$400 – $1,500',
    includes: [
      'Fine dust removal from all surfaces',
      'Construction debris removal and disposal',
      'Window and glass cleaning inside and out',
      'Removing stickers, labels, and protective films',
      'Deep floor scrubbing and polishing',
      'Vent and HVAC register cleaning',
      'Paint drip and adhesive removal',
      'Final polish of all fixtures and hardware',
    ],
    metaTitle: 'Post-Construction Cleaning NYC | After Renovation Clean | Sparkle Clean',
    metaDescription:
      'Expert post-construction cleaning in NYC. We remove dust, debris, and residue after any renovation. Commercial and residential. Get a free quote today.',
  },
  {
    slug: 'carpet-upholstery-cleaning',
    name: 'Carpet & Upholstery Cleaning',
    shortDescription:
      'Professional carpet and upholstery deep cleaning to restore freshness and extend life.',
    fullDescription:
      'Carpets and upholstery trap allergens, bacteria, and odors deep within their fibers that regular vacuuming can\'t reach. Our professional carpet and upholstery cleaning service uses hot-water extraction and specialized solutions to deep clean fabric surfaces, removing stains, allergens, and odors and extending the life of your investment.',
    icon: 'mdi:sofa',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    priceRange: '$120 – $500',
    includes: [
      'Pre-treatment of stains and high-traffic areas',
      'Hot-water extraction carpet cleaning',
      'Sofa and chair deep cleaning',
      'Deodorizing treatment',
      'Pet stain and odor removal',
      'Area rug cleaning',
      'Quick-dry techniques to minimize downtime',
      'Post-clean grooming and pile lifting',
    ],
    metaTitle: 'Carpet & Upholstery Cleaning NYC | Professional Fabric Care | Sparkle Clean',
    metaDescription:
      'Professional carpet and upholstery cleaning in NYC. Hot-water extraction, stain removal, pet odor treatment. Residential and commercial. Book online today.',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

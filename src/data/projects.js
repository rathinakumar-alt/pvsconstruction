/**
 * Projects Data
 * 
 * Showcase of featured construction projects.
 * Categorized for filtering in the Featured Projects section.
 */

export const projectCategories = ['All', 'Residential', 'Commercial', 'Renovation', 'Architecture'];

export const projectsData = [
  {
    id: 1,
    name: 'The Obsidian Glass Villa',
    category: 'Residential',
    location: 'Emerald Hills, West District (Sample Location)',
    year: '2025',
    area: '8,400 sq.ft.',
    shortDescription: 'A cantilevered private residence incorporating sustainable glass facades and thermal stone masonry.',
    fullDescription: 'Constructed on a sloping terrain, this luxury residential estate features floor-to-ceiling panoramic glass walls, custom engineered structural steel cantilevers, an infinity water perimeter, and integrated solar harvesting systems.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    stats: {
      duration: '18 Months',
      value: '$4.2M (Est.)',
      scope: 'Turnkey Design & Build'
    }
  },
  {
    id: 2,
    name: 'Apex Horizon Corporate Tower',
    category: 'Commercial',
    location: 'Metropolitan Commercial Core (Sample Location)',
    year: '2024',
    area: '185,000 sq.ft.',
    shortDescription: 'A 24-storey grade-A office development with LEED Platinum certification and high-speed core mechanics.',
    fullDescription: 'Delivered three weeks ahead of schedule, the Apex Tower showcases high-performance double-glazed curtain walls, seismic shock mitigation dampers, automated HVAC zoning, and five subterranean parking levels.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    stats: {
      duration: '28 Months',
      value: '$38.5M (Est.)',
      scope: 'General Contracting'
    }
  },
  {
    id: 3,
    name: 'The Heritage Brickhouse Restoration',
    category: 'Renovation',
    location: 'Old Town Cultural District (Sample Location)',
    year: '2024',
    area: '12,500 sq.ft.',
    shortDescription: 'Comprehensive structural retrofitting and modern interior revitalization of a century-old landmark building.',
    fullDescription: 'Carefully balancing architectural preservation guidelines with modern seismic safety standards, this project reinforced load-bearing masonry arches while introducing modern steel mezzanine structures and luxury acoustics.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    stats: {
      duration: '14 Months',
      value: '$3.8M (Est.)',
      scope: 'Restoration & Modernization'
    }
  },
  {
    id: 4,
    name: 'Solarium Civic Arts Center',
    category: 'Architecture',
    location: 'Waterfront Cultural Promenade (Sample Location)',
    year: '2025',
    area: '42,000 sq.ft.',
    shortDescription: 'Sculptural architectural amphitheater and exhibition pavilion designed with curved reinforced concrete ribs.',
    fullDescription: 'Engineered as an iconic public landmark, the Solarium Arts Center features free-form curved exposed concrete, acoustic dampening timber ceilings, skylights optimized for natural daylighting, and civic public plazas.',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
    stats: {
      duration: '22 Months',
      value: '$14.2M (Est.)',
      scope: 'Architectural EPC'
    }
  },
  {
    id: 5,
    name: 'Cedar Valley Contemporary Residence',
    category: 'Residential',
    location: 'Highland Ridge Estates (Sample Location)',
    year: '2023',
    area: '6,200 sq.ft.',
    shortDescription: 'Modernist timber and concrete residence harmoniously embedded within natural forest canopy.',
    fullDescription: 'A multi-level family dwelling integrating local cedar cladding, polished concrete slab flooring, rainwater retention systems, and an open-concept indoor-outdoor terrace with heated infinity pool.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    stats: {
      duration: '16 Months',
      value: '$3.1M (Est.)',
      scope: 'Design & Construction'
    }
  },
  {
    id: 6,
    name: 'Vanguard Innovation Tech Campus',
    category: 'Commercial',
    location: 'Gateway Technology Park (Sample Location)',
    year: '2025',
    area: '94,000 sq.ft.',
    shortDescription: 'Collaborative biophilic workplace campus with flexible modular spaces and net-zero energy design.',
    fullDescription: 'Engineered for rapid future reconfiguration, this campus features open-span column-free office zones, central light atriums, rooftop solar arrays, and high-performance smart building automation.',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
    stats: {
      duration: '20 Months',
      value: '$22.0M (Est.)',
      scope: 'Civil & Turnkey Fit-out'
    }
  }
];
